import { useState, useEffect } from 'react';
import { Menu, Users, Building, Award, BookOpen, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // New state for selected item

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemSelect = (item: string) => {
    setSelectedItem(item); // Set selected item
    console.log('Selected item:', item); // You can also perform further actions here
  };

  // Calculate the background color based on the scroll position
  const scrollBackgroundColor = `rgba(65, 105, 225, ${Math.min(scrollY / 500, 0.7)})`;
 // Gradual color change

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 0 ? 'backdrop-blur-md shadow-lg' : ''
      }`}
      style={{
        backgroundColor: scrollBackgroundColor, // Dynamic background color
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 pl-6">
            <Link to="/" className="text-2xl font-bold text-white">
              <img
                src="/src/components/relevancelab logo.svg"
                alt="RelevanceLab Logo"
                className="h-7 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Dropdown
              title="What We Do"
              isActive={activeDropdown === 'whatWeDo'}
              onMouseEnter={() => setActiveDropdown('whatWeDo')}
              onMouseLeave={() => setActiveDropdown(null)}
              width="w-[1200px]"
              onItemSelect={handleItemSelect} // Pass the item selection handler
            >
              <div className="grid grid-cols-3 gap-4 h-[250px] overflow-y-auto">
                {/* Technology Practices */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-blue-400 mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Technology Practices
                  </h4>
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-3 rounded-lg border border-blue-700/30">
                    <h5 className="font-semibold text-lg text-white mb-1">
                      Technical Debt: The Roadblock to AI Success
                    </h5>
                    <img
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60"
                      alt="Technical Debt"
                      className="w-full h-20 object-cover rounded-md mb-1"
                    />
                    <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Get the guide
                      <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </a>
                  </div>
                </div>

                {/* Platforms */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-blue-400 flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Platforms
                  </h4>
                  <ul className="space-y-1">
                    {[ 
                      'Research Portals - Research Gateway', 
                      'AI Operations - RLCatalyst', 
                      'Data Analytics - SPECTRA', 
                      'Cloud Service Delivery - ServiceOne' 
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block py-2 px-3 rounded-md text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-blue-400 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Services
                  </h4>
                  <ul className="space-y-0">
                    {[ 
                      'Automation', 
                      'Cloud', 
                      'Data & AI', 
                      'Product Engineering', 
                      'Professional Services' 
                    ].map((service) => (
                      <li key={service}>
                        <a
                          href="#"
                          className="block py-2 px-3 rounded-md text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Dropdown>

            {/* Who We Are Dropdown */}
            <Dropdown
              title="Who We Are"
              isActive={activeDropdown === 'whoWeAre'}
              onMouseEnter={() => setActiveDropdown('whoWeAre')}
              onMouseLeave={() => setActiveDropdown(null)}
              width="w-[600px]"
              onItemSelect={handleItemSelect} // Pass the item selection handler
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-blue-400 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    About Us
                  </h4>
                  <ul className="space-y-0">
                    {['About Us', 'Newsroom', 'CSR', 'Partnerships'].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block py-2 px-3 rounded-md text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-blue-400 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Recognition
                  </h4>
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-4 rounded-lg border border-blue-700/30">
                    <h5 className="font-semibold text-white mb-2">Awards & Certifications</h5>
                    <p className="text-gray-300 text-sm mb-3">
                      Discover our achievements and industry recognition
                    </p>
                    <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Learn more
                      <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </a>
                  </div>
                </div>
              </div>
            </Dropdown>

            {/* Other Links */}
            <Link to="/insight" className="text-white hover:text-blue-400 transition-colors">
              Insights
            </Link>
            <Link to="/careers" className="text-white hover:text-blue-400 transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
