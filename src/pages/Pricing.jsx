import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Access to gym equipment',
      '2 group classes per week',
      'Basic workout plan',
      'Locker room access',
    ],
  },
  {
    name: 'Pro',
    price: 59,
    popular: true,
    features: [
      'All Basic features',
      'Unlimited group classes',
      'Personal trainer (2x/month)',
      'Nutrition consultation',
      'Progress tracking',
    ],
  },
  {
    name: 'Elite',
    price: 99,
    features: [
      'All Pro features',
      'Weekly personal training',
      'Custom meal plans',
      'Priority booking',
      'Sports massage (1x/month)',
      'Recovery sessions',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gradient-to-br from-black/80 to-black/90 p-8 rounded-2xl border ${
                plan.popular ? 'border-primary' : 'border-white/5'
              } hover:border-primary/30 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <FiCheck className="text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-full font-medium transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;