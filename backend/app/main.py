from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import weaviate
from typing import List
import torch
import clip
from PIL import Image
import os
from langchain_cerebras import ChatCerebras
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

app = FastAPI()

# Set up Weaviate client
WEAVIATE_URL = "Your Weaviate URL"  # Replace with your Weaviate URL
WEAVIATE_API_KEY = "Your Weaviate API Key"  # Replace with your Weaviate API Key

client = weaviate.Client(
    url=WEAVIATE_URL,
    auth_client_secret=weaviate.AuthApiKey(api_key=WEAVIATE_API_KEY),
)

# Set up Cerebras LLM
CEREBRAS_API_KEY = "Your Cerebras API Key"  # Replace with your Cerebras API Key

llm = ChatCerebras(api_key=CEREBRAS_API_KEY, model="llama3.1-8b")

prompt_template = PromptTemplate(
    input_variables=["keywords"],
    template="Generate a detailed description of a hairstyle based on these keywords: {keywords}"
)

chain = LLMChain(llm=llm, prompt=prompt_template)

# Load CLIP model
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

class SearchRequest(BaseModel):
    keywords: str

class SearchResult(BaseModel):
    image_urls: List[str]

def expand_keywords(keywords):
    expanded_description = chain.run(keywords=keywords)
    return expanded_description

def upload_images_to_weaviate(image_dir):
    class_name = "Haircut"
    # Check if class exists
    schema = client.schema.get()
    class_exists = any(c['class'] == class_name for c in schema['classes'])
    if not class_exists:
        class_obj = {
            "class": class_name,
            "vectorizer": "none",
            "properties": [
                {
                    "name": "image_url",
                    "dataType": ["string"],
                },
            ],
        }
        client.schema.create_class(class_obj)
    
    image_files = [f for f in os.listdir(image_dir) if f.endswith(('.png', '.jpg', '.jpeg'))]
    
    for image_file in image_files:
        image_path = os.path.join(image_dir, image_file)
        image_url = f"https://yourdomain.com/images/{image_file}"  # Adjust based on where you host images
        image = preprocess(Image.open(image_path)).unsqueeze(0).to(device)
        with torch.no_grad():
            image_embedding = model.encode_image(image).cpu().numpy()[0]
        properties = {
            "image_url": image_url,
        }
        client.data_object.create(
            data_object=properties,
            class_name=class_name,
            vector=image_embedding.tolist(),
        )

@app.post("/search", response_model=SearchResult)
async def search_images(request: SearchRequest):
    keywords = request.keywords
    # Use Cerebras to expand the keywords
    expanded_keywords = expand_keywords(keywords)
    # Use CLIP to get text embedding
    text = clip.tokenize([expanded_keywords]).to(device)
    with torch.no_grad():
        text_embedding = model.encode_text(text).cpu().numpy()[0]
    # Perform a vector search in Weaviate
    class_name = "Haircut"
    search_result = client.query.get(class_name, ["image_url"]).with_near_vector({
        "vector": text_embedding.tolist(),
        "certainty": 0.7
    }).with_limit(10).do()
    
    if not search_result['data']['Get'][class_name]:
        return SearchResult(image_urls=[])
    
    image_urls = [result['image_url'] for result in search_result['data']['Get'][class_name]]
    return SearchResult(image_urls=image_urls)

if __name__ == "__main__":
    # For testing purposes, you can uncomment the following lines
    # and specify the directory where your images are stored
    # image_directory = "/path/to/your/image/directory"
    # upload_images_to_weaviate(image_directory)
    pass