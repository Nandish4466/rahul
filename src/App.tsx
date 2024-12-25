import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import VideoSection from './components/VideoSection';
import PartnersSection from './components/PartnersSection';
import PlatformsSection from './components/PlatformsSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import InsightsSection from './components/InsightsSection';
import CareerSection from './components/CareerSection';
import InsightPage from './components/InsightPage';
import Footer from './components/Footer';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <WelcomeSection />
              <VideoSection />
              <PartnersSection />
              <PlatformsSection />
              <ServicesSection />
              <StatsSection />
              <InsightsSection />
              <CareerSection />
            </>
          } />
          <Route path="/insight" element={<InsightPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;