import { motion } from 'framer-motion';

const transformations = [
  {
    name: 'John D.',
    duration: '6 months',
    stats: 'Lost 30 lbs',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Sarah M.',
    duration: '4 months',
    stats: 'Gained strength',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Mike R.',
    duration: '8 months',
    stats: 'Complete transformation',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const OurWork = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from real people. See how we've helped transform lives through fitness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300">{item.duration}</p>
                  <p className="text-primary font-medium">{item.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8">Ready to write your own success story?</p>
          <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all">
            Start Your Transformation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurWork;