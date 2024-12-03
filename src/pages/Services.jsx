import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiUsers, FiAward } from 'react-icons/fi';

const services = [
  {
    icon: <FiTarget />,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific fitness goals and needs.',
  },
  {
    icon: <FiHeart />,
    title: 'Group Fitness',
    description: 'High-energy group classes that combine cardio and strength training.',
  },
  {
    icon: <FiUsers />,
    title: 'Nutrition Coaching',
    description: 'Expert guidance on nutrition to complement your fitness journey.',
  },
  {
    icon: <FiAward />,
    title: 'Sports Training',
    description: 'Specialized training programs for athletes and sports enthusiasts.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your life with our comprehensive fitness services designed to help you reach your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-black/80 to-black/90 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;