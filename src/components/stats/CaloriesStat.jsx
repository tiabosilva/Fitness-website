import { FiBarChart2 } from 'react-icons/fi';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

const CaloriesStat = () => {
  const data = [40, 65, 30, 85, 55, 75, 90];
  
  return (
    <StatCard className="w-64" delay={0.3}>
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <FiBarChart2 className="text-primary text-xl" />
        </div>
        <span className="text-white/80 font-medium text-sm">Daily Calories</span>
      </div>
      <div className="flex items-end gap-1.5 h-24">
        {data.map((height, i) => (
          <motion.div
            key={i}
            className="w-full bg-gradient-to-t from-primary/20 to-secondary/20 rounded-lg relative group"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black/90 text-xs text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {height * 5} cal
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-xs text-white/40">Weekly Progress</p>
        <p className="text-sm text-white/80 font-medium">
          <span className="text-primary">↑</span> 125 Cal
        </p>
      </div>
    </StatCard>
  );
};

export default CaloriesStat;