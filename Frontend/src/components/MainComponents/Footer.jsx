import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-10">
        {/* Project Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">AI_Playground</h2>
          <p className="text-sm opacity-90">
            A creative platform to explore AI tools, learning resources, fun
            content like music, jokes, quotes and much more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm">
            <NavLink to="/" className="hover:translate-x-1 transition">
              Home
            </NavLink>

            <NavLink to="/profile" className="hover:translate-x-1 transition">
              Profile
            </NavLink>

            <NavLink to="/login" className="hover:translate-x-1 transition">
              Login
            </NavLink>

            <NavLink to="/register" className="hover:translate-x-1 transition">
              Register
            </NavLink>
          </div>
        </div>

        {/* Sections */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>

          <ul className="flex flex-col gap-2 text-sm opacity-90">
            <li className="hover:translate-x-1 transition">🎉 Fun Zone</li>
            <li className="hover:translate-x-1 transition">📚 Study Hub</li>
            <li className="hover:translate-x-1 transition">🤖 AI Tools</li>
            <li className="hover:translate-x-1 transition">🧪 Project Lab</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm opacity-80">
        © {new Date().getFullYear()} AI_Playground • Built with React + Tailwind
      </div>
    </footer>
  );
}

export default Footer;
