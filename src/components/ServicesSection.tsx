import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: '/src/components/setting.svg', // Replace with your actual image path
      title: 'Automation',
      description: 'Made easy to streamline processes.',
    },
    {
      icon: '/src/components/cloud.svg', // Replace with your actual image path
      title: 'Cloud',
      description: 'Adopt cloud the right way.',
    },
    {
      icon: '/src/components/product enginnering.svg', // Replace with your actual image path
      title: 'Product Engineering',
      description: 'Build great experiences.',
    },
    {
      icon: '/src/components/arrow.svg', // Replace with your actual image path
      title: 'Data & AI',
      description: 'Insights with confidence.',
    },
    {
      icon: '/src/components/person.svg', // Replace with your actual image path
      title: 'Professional Services',
      description: 'Accelerate Your Tech Journey.',
    },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-blue-900 via-gray-900 to-black">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-blue-700 to-teal-600 opacity-20 blur-lg"></div>

      <div className="relative container mx-auto px-6 lg:px-20 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Our Services <span className="text-teal-400"></span>
        </h2>
        <p className="text-gray-300 mb-12">
          Our experienced team designs integrated infrastructure solutions and efficient processes to propel businesses forward.
        </p>

        {/* Service Items */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative w-64 h-80 p-6 rounded-xl bg-transparent border border-gray-600 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-30 w-30 mx-auto"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 flex items-center justify-center gap-2">
                {service.title}
                <span className="text-teal-400 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mt-2">{service.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 bg-gradient-to-r from-blue-500 to-purple-500 blur-md transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
