import React from 'react';

const PlatformsSection = () => {
  const platforms = [
    {
      icon: '/src/components/Brand Icons research gateway.svg',
      title: 'Research Portals',
      subtitle: 'RESEARCH GATEWAY',
      description: 'Self-Service Cloud Portal Solution for Collaboration and Research',
    },
    {
      icon: '/src/components/Brand Icons RLCatalyst.svg',
      title: 'AI Operations',
      subtitle: 'RLCATALYST',
      description: 'Intelligent Monitoring & Automation Platform',
    },
    {
      icon: '/src/components/Brand Icons Spectra.svg',
      title: 'Data Analytics',
      subtitle: 'SPECTRA',
      description: 'AI-Driven Analytics Platform',
    },
    {
      icon: '/src/components/Brand Icons Service One.svg',
      title: 'Cloud Service Delivery',
      subtitle: 'SERVICEONE',
      description: 'Migration & streamlining operations',
    },
  ];

  return (
    <div
      className="py-32 text-white"
      style={{
        backgroundImage: "url('/src/components/sky.png')", // Replace with the actual image path
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-6 lg:px-20">
        <div className="max-w-6xl mx-auto bg-white/20 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Platforms</h2>
          <p className="mb-10 text-base text-gray-200">
            Re-architect your infrastructure to remove barriers and gain a competitive edge with our innovative technology, and pre-built software solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="text-center group transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="mb-4">
                  <img
                    src={platform.icon}
                    alt={platform.title}
                    className="h-28 w-28 mx-auto"
                  />
                </div>
                <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 transition duration-300 group-hover:text-blue-500">
                  {platform.subtitle}
                  <span className="text-xl">&rarr;</span>
                </h4>
                <h3 className="text-lg font-bold mb-3 text-white transition duration-300 group-hover:text-gray-200">
                  {platform.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transition duration-300 group-hover:text-gray-400">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsSection;
