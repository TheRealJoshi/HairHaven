import Cerebras from '@cerebras/cerebras_cloud_sdk';

const client = new Cerebras({
  apiKey: "csk-t2jcnr6258vty3tk2j32n48mdp4n2p2e5vrcyke2c5hp4f26", // Ensure the API key is stored securely in .env.local
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userInput } = req.body;

    try {
      const completionCreateResponse = await client.chat.completions.create({
        messages: [{ role: 'user', content: userInput }],
        model: 'llama3.1-8b', // Specify the appropriate model version
      });

      res.status(200).json(completionCreateResponse);
    } catch (error) {
      console.error('Error calling Cerebras API:', error);
      res.status(500).json({ error: 'Failed to get AI response' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}