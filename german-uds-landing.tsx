import React, { useState, useEffect } from 'react';

// Import components
import ScrollProgress from './scroll-progress';
import Navigation from './navigation';
import HeroSection from './hero-section';
import EcosystemSection from './ecosystem-section';
import PortfolioSection from './portfolio-section';
import StructureSection from './structure-section';
import BusinessSection from './business-section';
import InvestSection from './invest-section';
import ContactSection from './contact-section';
import Footer from './footer-component';

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll * 100);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative font-sans text-gray-900 bg-gray-50 overflow-hidden">
      <ScrollProgress progress={scrollProgress} />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <EcosystemSection />
      <PortfolioSection />
      <StructureSection />
      <BusinessSection />
      <InvestSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;