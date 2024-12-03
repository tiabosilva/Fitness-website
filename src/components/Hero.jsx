import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import StatsGrid from './stats/StatsGrid';

const Hero = () => {
  const { openAuthModal } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get Fit,<br />
              Get Strong,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Get Healthy!
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Welcome to our fitness training program designed to help you achieve your fitness goals and transform your body and mind.
            </p>
            <div className="flex">
              <motion.button
                onClick={() => openAuthModal('register')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-primary/50"
              >
                Start Now!
              </motion.button>
            </div>
          </motion.div>

          <StatsGrid />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pb-12"
        >
          <p className="text-gray-400 mb-4 text-sm">Trusted by global brands</p>
          <div className="flex gap-8 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="Adidas" className="h-6 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg" alt="Nike" className="h-5 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Fitbit_logo.svg" alt="Fitbit" className="h-5 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Under_armour_logo.svg" alt="Under Armour" className="h-5 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;