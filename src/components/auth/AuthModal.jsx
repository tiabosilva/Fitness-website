import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { FiX } from 'react-icons/fi';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, setAuthMode } = useAuth();

  if (!isAuthModalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={closeAuthModal}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-black/90 to-black/95 p-8 rounded-2xl w-full max-w-md relative border border-white/10"
        >
          <button
            onClick={closeAuthModal}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {authMode === 'login' ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-gray-400">
              {authMode === 'login' 
                ? 'Enter your credentials to access your account'
                : 'Join us to start your fitness journey'}
            </p>
          </div>

          {authMode === 'login' ? <LoginForm /> : <RegisterForm />}

          <div className="mt-6 text-center text-gray-400">
            {authMode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setAuthMode('register')}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setAuthMode('login')}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  Log in
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default AuthModal;