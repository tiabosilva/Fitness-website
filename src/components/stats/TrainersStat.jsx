import { FiUser } from 'react-icons/fi';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

const TrainersStat = () => {
  const trainers = [
    { color: '#FF6B6B' },
    { color: '#4ECDC4' },
    { color: '#45B7D1' },
  ];

  return (
    <StatCard className="w-48" delay={0.1}>
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <FiUser className="text-primary text-xl" />
        </div>
        <span className="text-white/80 font-medium text-sm">Expert Trainers</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="w-8 h-8 rounded-full border-2 border-black shadow-lg"
              style={{ 
                background: `linear-gradient(45deg, ${trainer.color}40, ${trainer.color}20)`,
                zIndex: trainers.length - i 
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-8 h-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full flex items-center justify-center text-xs text-white/90 font-bold border-2 border-black shadow-lg"
        >
          100+
        </motion.div>
      </div>
    </StatCard>
  );
};

export default TrainersStat;