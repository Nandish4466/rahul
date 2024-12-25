import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Award, Globe, Users } from 'lucide-react';

const locations = [
  {
    country: 'India',
    positions: [
      { title: 'Technical Project Manager - Cloud', location: 'Bangalore', department: 'Cloud Solutions', type: 'Full-time' },
      { title: 'Gen AI QA Engineer', location: 'Hyderabad', department: 'AI & ML', type: 'Full-time' },
      { title: 'Python API with DevOps Developer', location: 'Pune', department: 'DevOps', type: 'Full-time' },
      { title: 'Chatbot Developer', location: 'Chennai', department: 'AI & ML', type: 'Full-time' },
      { title: 'Java Full Stack Developer', location: 'Mumbai', department: 'Engineering', type: 'Full-time' },
      { title: 'ServiceNow Lead', location: 'Bangalore', department: 'IT Services', type: 'Full-time' },
      { title: 'Java NodeJS Backend Architect', location: 'Noida', department: 'Engineering', type: 'Full-time' },
      { title: 'Java NodeJS Backend Tech Lead', location: 'Kolkata', department: 'Engineering', type: 'Full-time' },
      { title: 'Gen AI Solution Architect', location: 'Hyderabad', department: 'AI & ML', type: 'Full-time' },
      { title: 'Cloud Practice Lead', location: 'Delhi', department: 'Cloud Solutions', type: 'Full-time' },
      { title: 'DevSecOps Practice Lead', location: 'Bangalore', department: 'DevOps', type: 'Full-time' },
      { title: 'Oracle EBS Technical Developer', location: 'Mumbai', department: 'IT Services', type: 'Full-time' },
    ],
  },
  {
    country: 'Ethiopia',
    positions: [],
  },
  {
    country: 'USA',
    positions: [
      { title: 'Business Data Analyst', location: 'New York', department: 'Analytics', type: 'Full-time' },
      { title: 'Chatbot Developer', location: 'San Francisco', department: 'AI & ML', type: 'Full-time' },
      { title: 'Sr. Machine Learning Engineer, Generative AI Applications', location: 'Seattle', department: 'AI & ML', type: 'Full-time' },
      { title: 'Senior Data Scientist, Generative AI Applications', location: 'Boston', department: 'AI & ML', type: 'Full-time' },
      { title: 'Sr. IT Sales Engineer', location: 'Chicago', department: 'Sales', type: 'Full-time' },
      { title: 'Systems Analyst', location: 'Austin', department: 'IT Services', type: 'Full-time' },
      { title: 'Computer Developer', location: 'Los Angeles', department: 'Engineering', type: 'Full-time' },
    ],
  },
  {
    country: 'Canada',
    positions: [],
  },
];

const benefits = [
  { icon: <Award className="w-12 h-12 text-blue-600" />, title: 'Growth & Learning', description: 'Continuous learning opportunities and career development programs' },
  { icon: <Globe className="w-12 h-12 text-blue-600" />, title: 'Global Impact', description: 'Work on projects that make a difference worldwide' },
  { icon: <Users className="w-12 h-12 text-blue-600" />, title: 'Inclusive Culture', description: 'Diverse and welcoming environment where everyone belongs' },
  { icon: <Briefcase className="w-12 h-12 text-blue-600" />, title: 'Work-Life Balance', description: 'Flexible working hours and remote work options' },
];

function CareersPage() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/src/components/Employee_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">Work that Makes a Difference</h1>
          <p className="text-1xl text-white max-w-3xl mb-8 animate-fade-in-delay">
            Be part of a collaborative, fast-paced team at the forefront of innovation and technology advancements. 
            Not only will you enjoy your work life at Relevance Lab, you’ll also have the opportunity to grow your skills and career. 
            If you are passionate about driving results, we’d love to talk with you.
          </p>
          <a
            href="#opportunities"
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors animate-bounce"
          >
            View Open Positions
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div id="opportunities" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Explore Job Opportunities</h2>
        
        <div className="space-y-4">
          {locations.map((loc) => (
            <div key={loc.country} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <button
                className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50"
                onClick={() => setExpandedCountry(expandedCountry === loc.country ? null : loc.country)}
              >
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <span className="text-2xl font-semibold">{loc.country}</span>
                </div>
                {expandedCountry === loc.country ? (
                  <ChevronUp className="h-6 w-6 text-blue-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-blue-600" />
                )}
              </button>
              
              {expandedCountry === loc.country && (
                <div className="p-8 bg-white border-t">
                  {loc.positions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {loc.positions.map((position, index) => (
                        <div key={index} className="border p-4 rounded-xl shadow hover:shadow-lg">
                          <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                          <p className="text-gray-600">{position.location}</p>
                          <p className="text-sm text-gray-500">{position.department}</p>
                          <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm inline-block mt-4">
                            {position.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-center text-xl">No openings yet</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>  
        {/* Added Paragraph Below Explore Job Opportunities */}
        <p className="text-gray-600 text-center text-xl mt-12 text-justify">
          "At Relevance Lab, we firmly believe that everyone should have an equal opportunity to pursue their dreams and build a successful future. We strive to create an inclusive work environment where all individuals are treated with respect, regardless of age, ethnicity, race, disability status, gender identity or expression, religion, or sexual orientation."
        </p>    
      </div>
    </div>
  );
}

export default CareersPage;
