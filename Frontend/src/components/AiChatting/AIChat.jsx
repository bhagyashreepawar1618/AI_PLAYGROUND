import { useState } from 'react';
import { motion } from 'framer-motion';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hey 👋 I'm your AI assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const aiResponse = {
        role: 'ai',
        text: ' This is a demo AI response. Backend connect karne ke baad real answer ayega!',
      };

      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
      <div className="bg-purple-600 text-white p-4 text-center font-semibold text-lg shadow">
        🤖 AI Chat Assistant
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow ${
                msg.role === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* LOADING */}
        {loading && (
          <div className="text-gray-500 text-sm">AI is typing...</div>
        )}
      </div>

      {/* INPUT BOX */}
      <div className="p-4 border-t bg-white">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={handleSend}
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
