import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: 30,
      suffix: '%',
      label: 'Efficiency Boost',
      sublabel: 'On average for clients',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      number: 1500,
      suffix: '+',
      label: 'Staff',
      sublabel: 'Across four continents',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      number: 200,
      suffix: '+',
      label: 'DevOps',
      sublabel: 'Implementations',
      gradient: 'from-purple-600 to-blue-600',
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const intervalIds = stats.map((stat, index) => {
      const step = Math.ceil(stat.number / 50);
      return setInterval(() => {
        setCounters((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.number) {
            updated[index] = Math.min(updated[index] + step, stat.number);
          }
          return updated;
        });
      }, 30);
    });

    return () => intervalIds.forEach((id) => clearInterval(id));
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-800 via-black to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Relevance by the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group transform transition-transform duration-300 hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${stat.gradient} bg-clip-text`}>
                <div
                  className={`text-7xl font-extrabold mb-2 text-transparent transform transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r ${stat.gradient} bg-clip-text`}
                >
                  {counters[index]}
                  {stat.suffix}
                </div>
              </div>
              <div
                className="text-2xl font-semibold mb-1 text-white transform transition-transform duration-300 group-hover:text-teal-400 group-hover:translate-y-1"
              >
                {stat.label}
              </div>
              <div className="text-lg text-gray-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
