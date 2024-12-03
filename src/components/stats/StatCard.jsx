import { motion } from 'framer-motion';

const StatCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-lg p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-xl ${className}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

export default StatCard;