import { useState } from "react";
import { Button } from "./button";

export default function RAGBot({ users }) {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState(''); // State for AI response

  const handleAiChatSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer csk-t2jcnr6258vty3tk2j32n48mdp4n2p2e5vrcyke2c5hp4f26`, // Ensure this key is in your environment variables
        },
        body: JSON.stringify({
          model: 'llama3.1-8b',
          stream: false,
          messages: [
            { role: 'system', content: 'You are a haircare expert. Provide advice on haircuts, hair styling, and hair care. Your answers should be specific and expert-level.' },
            { role: 'user', content: userInput }
          ],
          temperature: 0,
          max_completion_tokens: -1,
          seed: 0,
          top_p: 1,
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setAiResponse(data.choices[0].message.content); // Display the AI response
      } else {
        setAiResponse('No response from the AI.');
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setAiResponse('Error getting AI response.');
    }
    setUserInput(''); // Clear input field
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md text-white">
      <form onSubmit={handleAiChatSubmit} className="space-y-4">
        <label htmlFor="userInput" className="block text-lg font-semibold">
          Ask the Bot:
        </label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
          placeholder="Enter your query"
        />
        <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Submit
        </Button>
      </form>
      
      {aiResponse && (
        <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded-md">
          <strong className="block text-lg mb-2">AI Response:</strong>
          <p className="whitespace-pre-wrap text-white">{aiResponse}</p>
        </div>
      )}
    </div>
  );
}