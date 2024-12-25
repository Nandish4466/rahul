import React from 'react';
import { motion } from 'framer-motion';

const InsightsSection = () => {
  const insights = [
    {
      image: '/src/components/first.jpg',
      category: 'December 3, 2024',
      title: 'UiPath vs Other Platforms',
      description:
        'In the dynamic world of RPA, choosing the right platform is critical for success. UiPath remains a top choice among other RPA platforms.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      image: '/src/components/second.jpg',
      category: 'November 27, 2024',
      title: 'Simplify Secure Research with Research Gateway on Azure',
      description:
        'Discover how Research Gateway simplifies secure cloud research on Azure, ensuring compliance, cost control, & seamless data management.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      image: '/src/components/third.jpg',
      category: 'November 21, 2024',
      title: 'Exploring UiPath: A Top Choice Among RPA Platforms',
      description:
        'Discover how UiPath provides versatile automation capabilities, allowing businesses to automate a wide variety of processes across departments.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      image: '/src/components/fourth.jpg',
      category: 'October 17, 2024',
      title: 'Research Data Platform Enabling Scientific Research',
      description:
        'Research Data Platform offers a comprehensive and researcher-friendly solution. A Project-Centric model enabling collaboration of researchers.',
      gradient: 'from-red-500 to-orange-500',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Recent Insights & Happenings
          </h2>
          <a
            href="/insight"
            className="flex items-center text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors"
          >
            View All <span className="ml-2 text-xl">&rarr;</span>
          </a>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                {/* "Blogs" Label */}
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg z-10">
                  Blogs
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                ></div>
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Category */}
              <div
                className={`text-sm font-semibold bg-gradient-to-r ${insight.gradient} bg-clip-text text-transparent mb-2`}
              >
                {insight.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors truncate overflow-hidden whitespace-nowrap">
                {insight.title}
              </h3>
              {index === 0 && <div className="mb-4"></div>} {/* Adds a blank line for the first insight */}

              {/* Description */}
              <p className="text-gray-600 mb-4">{insight.description}</p>

              {/* Read More */}
              <a
                href="#"
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group whitespace-nowrap"
              >
                <span className="relative">
                  Read More
                  {/* Underline Effect */}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
                  ></span>
                </span>
                <span
                  className="ml-2 text-xl opacity-0 translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-300"
                >
                  &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
