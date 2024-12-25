import React, { useEffect } from 'react';

const HeroSection = () => {
  const lines = [
    "We remove friction from business.",
    "We fuse DevOps engineering with operations to power your agility.",
    "We harness AI to automate, optimize, and set new standards.",
    "We ensure seamless, secure transitions to the cloud.",
    "We turn the data you have into data you confidently use.",
    "We save time and drive innovation through Open Source Platforms and well architected frameworks.",
  ];

  const [currentLine, setCurrentLine] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/components/headv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        {/* Spacer for header */}
        <div className="h-24 md:h-32"></div>

        {/* Text content */}
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 min-h-[100px] transition-all duration-500 animate-fade-in">
            {lines[currentLine]}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in">
            Empowering businesses with cutting-edge technology solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
