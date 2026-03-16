import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to AI_Playground 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg opacity-90"
        >
          A platform where you can explore AI tools, learn new skills, solve
          problems, and enjoy fun content like music, jokes and quotes.
        </motion.p>
      </section>

      {/* FEATURES SECTION */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-20">
        {/* FUN SECTION */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            🎉 Fun Zone
          </h2>
          <p className="text-sm text-gray-600">
            Explore music, jokes, quotes and other fun mini tools.
          </p>
        </motion.div>

        {/* STUDY SECTION */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            📚 Study Hub
          </h2>
          <p className="text-sm text-gray-600">
            Coding guides, learning paths and problem solving practice.
          </p>
        </motion.div>

        {/* AI TOOLS */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            🤖 AI Tools
          </h2>
          <p className="text-sm text-gray-600">
            Experiment with AI tools and small AI-powered utilities.
          </p>
        </motion.div>

        {/* COMMUNITY */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            🌐 Community
          </h2>
          <p className="text-sm text-gray-600">
            Connect with learners and collaborate on ideas.
          </p>
        </motion.div>

        {/* PROJECT LAB */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            🧪 Project Lab
          </h2>
          <p className="text-sm text-gray-600">
            Build small projects and experiment with new concepts.
          </p>
        </motion.div>

        {/* PROFILE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            👤 Personal Profile
          </h2>
          <p className="text-sm text-gray-600">
            Manage your account and track your activities.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
