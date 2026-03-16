import { NavLink } from 'react-router-dom';

function Header() {
  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-1 transition-all duration-300 ${
      isActive ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'
    }`;

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Project Name */}
        <h1 className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer">
          AI_Playground
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-lg">
          <NavLink to="/" className={navLinkStyle}>
            {({ isActive }) => (
              <span className="relative">
                Home
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/profile" className={navLinkStyle}>
            {({ isActive }) => (
              <span className="relative">
                Profile
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/login" className={navLinkStyle}>
            {({ isActive }) => (
              <span className="relative">
                Login
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/register" className={navLinkStyle}>
            {({ isActive }) => (
              <span className="relative">
                Register
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
                )}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
