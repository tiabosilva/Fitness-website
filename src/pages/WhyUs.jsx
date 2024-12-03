import { motion } from 'framer-motion';
import { FiShield, FiTrendingUp, FiSmile, FiHeart } from 'react-icons/fi';

const reasons = [
  {
    icon: <FiShield />,
    title: 'Expert Trainers',
    description: 'Our certified trainers bring years of experience and dedication to help you achieve your goals.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Proven Results',
    description: 'Join thousands of satisfied members who have transformed their lives with our programs.',
  },
  {
    icon: <FiSmile />,
    title: 'Supportive Community',
    description: 'Be part of a motivating community that celebrates every success and milestone together.',
  },
  {
    icon: <FiHeart />,
    title: 'Holistic Approach',
    description: 'We focus on both physical and mental well-being for complete transformation.',
  },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes us different and why we're the perfect choice for your fitness journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-black/80 to-black/90 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;