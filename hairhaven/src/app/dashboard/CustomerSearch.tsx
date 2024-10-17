import { useState } from 'react';
import Modal from 'react-modal'; // Ensure the package is installed: npm install react-modal

// Sample customer data
const customers = [
  {
    id: '1',
    initials: 'JD',
    name: 'John Doe',
    lastHaircut: 'March 10, 2023',
    nextHaircut: 'April 5, 2023',
    preferences: 'Likes short on the sides, longer on top.',
    history: 'Haircuts: Complete Makeover, Regular Maintenance',
    image: '/sample-image.jpg',
    video: '/sample-video.mp4',
  },
  {
    id: '2',
    initials: 'JS',
    name: 'Jane Smith',
    lastHaircut: 'New customer',
    nextHaircut: 'TBD',
    preferences: 'Prefers layers, likes experimenting with new trends.',
    history: 'No previous haircuts yet.',
    image: '/sample-image2.jpg',
    video: '/sample-video2.mp4',
  },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiResponse, setAiResponse] = useState(''); // State for AI model response
  const [userInput, setUserInput] = useState(''); // State for chat input

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleAiChatSubmit = async (e, ) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CEREBRAS_API_KEY}`, // Ensure this key is in your environment variables
        },
        body: JSON.stringify({
          model: 'llama3.1-8b',
          stream: false,
          messages: [
            {
              role: 'system',
              content: 'Please respond concisely without using any markdown notation. Include short but effective reasoning if necessary. This is the history in my past' + `${selectedCustomer.history}`,
            },
            { role: 'user', content: userInput },
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

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col p-8">
      <div className="flex-3 h-full w-full">
        <main className="flex-3 h-full w-full">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-semibold">Customers</h1>
            <div className="flex space-x-4">
              <input
                className="px-4 py-3 bg-gray-200 rounded-md"
                placeholder="Search customers"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="bg-gray-300 px-4 py-3 rounded-md text-gray-700 font-semibold">
                Search
              </button>
            </div>
          </div>
          <div className="space-y-10">
            <div className="overflow-y-auto max-h-[480px] space-y-6">
              {filteredCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="flex items-center bg-black text-white p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition-all"
                  onClick={() => handleCustomerClick(customer)}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-semibold">{customer.initials}</span>
                  </div>
                  <div className="ml-6">
                    <div className="text-xl font-medium">{customer.name}</div>
                    <div className="text-white text-sm">
                      Last haircut: {customer.lastHaircut} | Next haircut: {customer.nextHaircut}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {selectedCustomer && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Customer Details"
          className="modal-content bg-white p-8 rounded-lg max-w-4xl mx-auto mt-20 overflow-y-auto"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-8 rounded-lg w-full max-h-[80vh] overflow-y-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6">{selectedCustomer.name}</h2>
            <div className="text-lg mb-4">
              <strong>Last Haircut:</strong> {selectedCustomer.lastHaircut}
            </div>
            <div className="text-lg mb-4">
              <strong>Next Haircut:</strong> {selectedCustomer.nextHaircut}
            </div>
            <div className="text-lg mb-4">
              <strong>Preferences:</strong> {selectedCustomer.preferences}
            </div>
            <div className="text-lg mb-6">
              <strong>History:</strong> {selectedCustomer.history}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Sample Image</h3>
              <img
                src={selectedCustomer.image}
                alt="Sample haircut"
                className="w-full rounded-md shadow-md"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Sample Video</h3>
              <video
                className="w-full rounded-md shadow-md"
                controls
                src={selectedCustomer.video}
              />
            </div>

            {/* AI Chat Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Consult with AI</h3>
              <form onSubmit={handleAiChatSubmit} className="flex items-center space-x-4">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-md w-full"
                  placeholder="Ask AI for a recommendation..."
                />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">
                  Submit
                </button>
              </form>
              {aiResponse && (
                <div className="mt-6 bg-gray-200 p-6 rounded-md">
                  <strong>AI Response:</strong> {aiResponse}
                </div>
              )}
            </div>

            <button
              onClick={closeModal}
              className="bg-red-600 text-white px-6 py-3 rounded-md mt-8 font-semibold"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}