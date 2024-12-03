import { FiClock } from 'react-icons/fi';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

const DurationStat = () => {
  return (
    <StatCard className="w-48" delay={0.2}>
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <FiClock className="text-primary text-xl" />
        </div>
        <span className="text-white/80 font-medium text-sm">Avg. Workout</span>
      </div>
      <div className="relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full"
        />
        <p className="text-xl text-white/90 font-bold mt-2">20 Min</p>
        <p className="text-xs text-white/40">Optimal duration</p>
      </div>
    </StatCard>
  );
};

export default DurationStat;