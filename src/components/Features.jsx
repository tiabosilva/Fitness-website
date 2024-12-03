import { motion } from 'framer-motion';
import { FiTarget, FiActivity, FiHeart, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiTarget />,
    title: 'Personalized Training',
    description: 'Custom workout plans tailored to your specific goals and fitness level.'
  },
  {
    icon: <FiActivity />,
    title: 'Progress Tracking',
    description: 'Monitor your improvements with detailed analytics and milestone tracking.'
  },
  {
    icon: <FiHeart />,
    title: 'Health Monitoring',
    description: 'Keep track of vital health metrics and wellness indicators.'
  },
  {
    icon: <FiUsers />,
    title: 'Community Support',
    description: 'Join a supportive community of like-minded fitness enthusiasts.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose StrengthMax
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of technology and fitness expertise
            to achieve your health goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-black/80 to-black/90 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;