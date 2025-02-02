// src/components/ChatBot.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about Aditya.' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Toggle the chat window open/closed
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle sending a message
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // TODO: Integrate with ChatGPT or your AI service here.
    // For now, we'll simulate a bot response after a delay.
    setTimeout(() => {
      const botResponse = {
        sender: 'bot',
        text: "This is a placeholder response about Aditya's background. (Replace with AI integration.)",
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button fixed in the bottom-right corner */}
      <button
        className="fixed bottom-6 right-6 bg-accent-jedi hover:bg-accent-rebel text-white p-4 rounded-full shadow-lg z-50"
        onClick={toggleChat}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 w-80 bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gray-700 p-4 flex justify-between items-center">
              <h4 className="text-white font-bold">Ask Me Anything</h4>
              <button onClick={toggleChat} className="text-white text-2xl leading-none">&times;</button>
            </div>
            {/* Message Display Area */}
            <div className="p-4 h-64 overflow-y-auto space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm ${msg.sender === 'bot' ? 'text-indigo-400' : 'text-white'}`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
              {isLoading && (
                <div className="text-sm text-white">Typing...</div>
              )}
            </div>
            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-jedi"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
