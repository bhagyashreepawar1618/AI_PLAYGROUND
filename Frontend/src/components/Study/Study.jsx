import { useState } from 'react';
import { motion } from 'framer-motion';

const Study = () => {
  const [code, setCode] = useState('');
  const [field, setField] = useState('web-dev');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleExplain = async () => {
    setLoading(true);

    setTimeout(() => {
      setResult(
        `This code belongs to ${field}.\n\nIt works by analyzing the logic step by step and breaking it into simpler terms.`
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-purple-700 mb-8"
      >
        🤖 AI Code Explainer
      </motion.h1>

      {/* MAIN BOX */}
      <div className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl shadow-lg">
        {/* SELECT FIELD */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700">
            Choose Category:
          </label>
          <select
            value={field}
            onChange={e => setField(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="web-dev">Web Development</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="c++">C / C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        {/* CODE INPUT */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700">
            Paste Your Code:
          </label>
          <textarea
            rows="8"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Paste your code here..."
            className="w-full mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 font-mono"
          ></textarea>
        </div>

        {/* BUTTON */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleExplain}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {loading ? 'Analyzing Code...' : 'Explain Code'}
        </motion.button>

        {/* RESULT SECTION */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-white p-4 rounded-lg shadow border"
          >
            <h3 className="font-bold text-purple-700 mb-2">🧠 Explanation:</h3>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {result}
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Study;
