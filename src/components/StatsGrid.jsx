import React from 'react';
import { FaUserFriends, FaClock, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import StatsCard from './StatsCard';

const StatsGrid = () => {
  const stats = [
    {
      icon: <FaUserFriends />,
      title: 'Expert Trainers',
      value: '100+',
    },
    {
      icon: <FaClock />,
      title: 'Avg. Workout',
      value: '20 Min',
      subtitle: 'Optimal duration',
    },
    {
      icon: <FaChartBar />,
      title: 'Daily Calories',
      value: '125 Cal',
      chart: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid gap-6"
    >
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </motion.div>
  );
};

export default StatsGrid;