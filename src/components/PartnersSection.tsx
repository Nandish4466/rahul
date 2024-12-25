import React from 'react';

const PartnersSection = () => {
  const partners = [
    '/src/components/American Textile.svg',
    '/src/components/Analog.svg',
    '/src/components/BHG.svg',
    '/src/components/Scholastic.svg',
    '/src/components/Apollo.svg',
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex justify-center items-center gap-6">
          {/* Left Text */}
          <div className="text-left">
          <h2 className="text-xl font-semibold text-white">Some of our Clients</h2>
          </div>

          {/* Client Logos */}
            <div className="flex gap-9">
              {partners.slice(0, 9).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
