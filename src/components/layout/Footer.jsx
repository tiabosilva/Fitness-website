import { Link } from 'react-router-dom';
import { FiInstagram, FiYoutube, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">StrengthMax</h3>
            <p className="text-gray-400 text-sm">
              Transform your life through fitness and healthy living.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white text-sm">
                  Workout Programs
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-400 hover:text-white text-sm">
                  Healthy Recipes
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-400 hover:text-white text-sm">
                  Store
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} StrengthMax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;