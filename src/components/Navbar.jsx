import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, openAuthModal } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Our Work', path: '/our-work' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            StrengthMax
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Join Now
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <>
                <span className="block px-3 py-2 text-gray-300">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  openAuthModal('login');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-primary hover:text-secondary"
              >
                Join Now
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;