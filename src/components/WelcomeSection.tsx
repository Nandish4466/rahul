import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="py-32 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Section: Main Heading */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white">
              We are a team of technologists, advisors, and game changers.
            </h2>
          </div>

          {/* Right Section: Other Info */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-l text-white leading-relaxed text-justify mb-8">
              We design and engineer solutions that eliminate friction so your business can expand, prosper, and endure. 
              From Intelligent Automaton and Gen-AI to cloud migration and data analytics, our platforms and tools accelerate business
              velocity and unleash human creativity.
            </p>

            {/* Add one line gap after the paragraph */}
            <p className="text-l text-white leading-relaxed text-justify mb-6">
              We believe removing friction paves the way for potential, enabling businesses to thrive, individuals to prosper, and humanity to flourish.
            </p>

            {/* "Welcome to RelavanceLab" with Justified Text */}
            <div className="w-full text-white text-2xl font-semibold hover:text-white-100 cursor-pointer transition duration-300 text-justify">
              Welcome to Relavance Lab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
