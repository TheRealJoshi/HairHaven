import { useState, useEffect } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar";
import { Button } from "@/app/dashboard/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card";
import { Badge } from "@/app/dashboard/ui/badge";
import { Textarea } from "@/app/dashboard/ui/textarea";
import { Input } from "@/app/dashboard/ui/input";

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: 'Konstantin Shelby',
    stylePreference: 'Prefers shorter sides with more volume on top. Likes to experiment with new trends.',
  });

  const [images, setImages] = useState([]);
  const [recommendations, setRecommendations] = useState([]); // Hairstyle recommendations

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageUpload = async (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages([...images, ...uploadedImages]);

    // Convert image files to base64 to send to the backend
    const base64Images = await Promise.all(uploadedImages.map(fileToBase64));

    // Call the API to get haircut recommendations
    const response = await fetch('/api/recommend-hairstyles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stylePreference: profile.stylePreference,
        images: base64Images,  // Send base64 image data
      }),
    });

    const data = await response.json();
    setRecommendations(data.topRecommendations); // Set the haircut recommendations
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        <main className="flex-1 p-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold">{profile.name}</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Profile Details */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage alt="Customer" src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="font-semibold"
                    />
                    <Badge variant="secondary">verified</Badge>
                  </div>
                </div>
                <div className="text-sm">
                  <p>
                    Style Preferences: 
                    <Textarea
                      name="stylePreference"
                      value={profile.stylePreference}
                      onChange={handleInputChange}
                      placeholder="Update style preferences"
                    />
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Image Gallery and Upload */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Haircut Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <input type="file" multiple onChange={handleImageUpload} />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      alt={`Haircut ${index + 1}`}
                      className="rounded-md"
                      height="100"
                      src={URL.createObjectURL(image)}
                      style={{
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hairstyle Recommendations */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Hairstyle Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recommendations.map((recommendation, index) => (
                    <li key={index} className="border-b pb-2">
                      <h3 className="text-lg font-semibold">Recommendation {index + 1}:</h3>
                      <p>{recommendation.style}</p>
                      <p className="text-sm text-gray-500">{recommendation.justification}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}