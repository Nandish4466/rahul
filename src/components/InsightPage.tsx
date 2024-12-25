import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const categories = ['All', 'Blogs', 'Case studies', 'Videos', 'E-brochures', ' E-Guides'];

const insights = [
    {
        image: '/src/components/ServiceNow Integration.jpg',
        category: 'Case Studies',
        date: 'December 3, 2024',
        title: 'ServiceNow ITSM Integration',
        description:
          'When a 100-year-old New York-based publishing giant struggled with fragmented IT workflows, we delivered a game-changing solution.',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        image: '/src/components/Software.jpg',
        category: 'Case Studies',
        date: 'December 3, 2024',
        title: 'ServiceNow Software Asset Management',
        description:
          'Discover how we helped a Fortune 350 energy leader serving 5 million customers transform their Software Asset Management.',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        image: '/src/components/first.jpg',
        category: 'Blogs',
        date: 'December 3, 2024',
        title: 'UiPath vs Other Platforms',
        description:
          'In the dynamic world of RPA, choosing the right platform is critical for success. UiPath remains a top choice among other RPA platforms.',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        image: '/src/components/New.jpg',
        category: 'Case Studies',
        date: 'December 3, 2024',
        title: 'Employee Onboarding Automation',
        description:
          'We helped the client to accelerate the onboarding process by leveraging RPA platform.',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        image: '/src/components/Automation.jpg',
        category: 'Case Studies',
        date: 'November 27, 2024',
        title: 'Automation of Transaction Reconciliation',
        description:
          'With our RPA solutions, the client has reduced operational risks, saved costs, and focused their resources on strategic, value-driven activities.',
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        image: '/src/components/Accounts.jpg',
        category: 'Case Studies',
        date: 'November 27, 2024',
        title: 'Automation of Accounts Payable & Receivable Process',
        description:
          'We have implemented a tailored RPA solution to streamline operations, improve cash flow, and enhance data visibility across their business.',
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        image: '/src/components/Human.jpg',
        category: 'Blogs',
        date: 'November 27, 2024',
        title: 'Simplify Secure Research with Research Gateway on Azure',
        description:
          'Discover how Research Gateway simplifies secure cloud research on Azure, ensuring compliance, cost control, & seamless data management.',
        gradient: 'from-red-500 to-orange-500',
      },
      {
        image: '/src/components/third.jpg',
        category: 'Blogs',
        date: 'November 21, 2024',
        title: 'Exploring UiPath: A Top Choice Among RPA Platforms',
        description:
          'Discover how UiPath provides versatile automation capabilities, allowing businesses to automate a wide variety of processes across departments.',
        gradient: 'from-red-500 to-orange-500',
      },
    ];

function InsightPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const totalPages = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredInsights = insights.filter(
    (insight) =>
      (selectedCategory === 'All' || insight.category === selectedCategory) &&
      (insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        insight.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 5 || i === totalPages) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              currentPage === i
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-gray-100 hover:bg-gradient-to-br from-blue-200 to-purple-200'
            }`}
          >
            {i}
          </button>
        );
      } else if (i === 6) {
        pageNumbers.push(
          <span key="ellipsis" className="px-4 py-2 text-gray-500">
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[400px] relative bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/src/components/forest.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white tracking-tight">Insights</h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 hover:bg-gradient-to-br from-blue-200 to-purple-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search insights..."
                className="pl-10 pr-4 py-2 border rounded-full w-full md:w-[300px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs px-3 py-1 rounded-full z-10">
                    {insight.category}
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                  ></div>
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{insight.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{insight.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group">
                    <span className="relative">
                      Read More
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No insights match your search criteria.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="relative flex items-center justify-between px-4 py-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="text-gray-500 hover:text-blue-600 transition-colors absolute left-6"
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2 items-center justify-center mx-auto">
          {renderPageNumbers()}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-gray-500 hover:text-blue-600 transition-colors absolute right-6"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default InsightPage;
