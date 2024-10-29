import React, { useState } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false); // Chat open/close state
  const [message, setMessage] = useState(''); // Current message being typed
  const [messages, setMessages] = useState([]); // Array to store chat messages

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggle the chatbox visibility
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]); // Add new message to array
      setMessage(''); // Clear the input field
      // Simulate a reply (in a real app, this will be replaced by live API interaction)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Thanks for reaching out! How can I help?', sender: 'support' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat button */}
      <button
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600"
        onClick={toggleChat}
      >
        {isOpen ? 'Close Chat' : 'Live Chat'}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="mt-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-500 text-white p-4 font-bold">Live Chat</div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-md ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 text-right'
                    : 'bg-gray-100 text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-2 border rounded-md focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
