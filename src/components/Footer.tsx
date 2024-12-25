import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react'; 

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show or hide the scroll button based on the scroll position
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column: Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">RelavanceLab</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/RelevanceLabFacebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="https://x.com/Relevancelab" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/relevance-lab/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/relevancelab/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/channel/UCAtwgWJOSVCBUPjbL8QcOgw?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Column: Who We Are */}
          <div>
            <h4 className="text-lg font-semibold mb-2">WHO WE ARE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">ABOUT US</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">CSR</a></li>             
              <li><a href="/careers" className="text-gray-400 hover:text-white">CAREERS</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">CONTACT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">ANNUAL RETURN REPORT</a></li>
            </ul>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">AUTOMATION</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">CLOUD</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">DATA & AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">PRODUCT ENGINEERING</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">PROFESSIONAL SERVICES</a></li>
            </ul>
          </div>   

          {/* Column: Platforms */}
          <div>
            <h4 className="text-lg font-semibold mb-2">PLATFORMS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">RESEARCH GATEWAY - Research Portals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">RLCATALYST - AI Operations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SPECTRA - Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SERVICEONE - Cloud Service Delivery</a></li>
            </ul>
          </div>

          {/* Column: Insights */}
          <div>
            <h4 className="text-lg font-semibold mb-2">INSIGHTS</h4>
            <ul className="space-y-2">
              <li><a href="/insight" className="text-gray-400 hover:text-white">BLOGS</a></li>
              <li><a href="/insight" className="text-gray-400 hover:text-white">CASE STUDIES</a></li>
              <li><a href="/insight" className="text-gray-400 hover:text-white">E-BROCHURES</a></li>
              <li><a href="/insight" className="text-gray-400 hover:text-white">VIDEOS</a></li>
              <li><a href="/insight" className="text-gray-400 hover:text-white">E-GUIDES</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RelavanceLab. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full shadow-lg flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
