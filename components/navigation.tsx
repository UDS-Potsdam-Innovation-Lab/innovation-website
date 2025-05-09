import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import LanguageSwitcher from './language-switcher';
import { useLocale } from '../contexts/LocaleContext';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const { locale, t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Get locale-specific logo if available
  const logoSrc = locale === 'de' 
    ? "/images/de/innovation_logo.png" 
    : "/images/innovation_logo.png";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-75 backdrop-blur z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block mr-8"
          >
            <Image
              src={logoSrc}
              alt="German UDS Innovation Logo"
              width={160}
              height={80}
              className=""
              onError={(e) => {
                // Fallback to default logo if locale-specific one doesn't exist
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/innovation_logo.png';
              }}
            />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex space-x-6">
          <a href="#ecosystem" onClick={(e) => handleClick(e, 'ecosystem')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'ecosystem' ? 'text-orange-500' : ''}`}>
            {String(t('navigation.ecosystem'))}
          </a>
          <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'portfolio' ? 'text-orange-500' : ''}`}>
            {String(t('navigation.portfolio'))}
          </a>
          <a href="#structure" onClick={(e) => handleClick(e, 'structure')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'structure' ? 'text-orange-500' : ''}`}>
            {String(t('navigation.structure'))}
          </a>
          <a href="#business" onClick={(e) => handleClick(e, 'business')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'business' ? 'text-orange-500' : ''}`}>
            {String(t('navigation.business'))}
          </a>
          <a href="#invest" onClick={(e) => handleClick(e, 'invest')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest' ? 'text-orange-500' : ''}`}>
            {String(t('navigation.invest'))}
          </a>
          <a href="#about-university" onClick={(e) => handleClick(e, 'about-university')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'about-university' ? 'text-orange-500' : ''}`}>
            {String(t('navigation.aboutUniversity'))}
          </a>
          
          {/* Language switcher */}
          <LanguageSwitcher className="ml-4" />
        </div>
        
        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="bg-orange-500 text-white px-6 py-2 rounded-br-xl shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2 inline-block"
          >
            <span>{String(t('navigation.investmentOpportunities'))}</span>
            <ChevronRight size={16} />
          </a>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white bg-opacity-85 backdrop-blur shadow-md z-50 p-4">
            <div className="flex flex-col space-y-3">
              <a href="#ecosystem" onClick={(e) => handleClick(e, 'ecosystem')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'ecosystem' ? 'text-orange-500' : ''}`}>
                {String(t('navigation.ecosystem'))}
              </a>
              <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'portfolio' ? 'text-orange-500' : ''}`}>
                {String(t('navigation.portfolio'))}
              </a>
              <a href="#structure" onClick={(e) => handleClick(e, 'structure')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'structure' ? 'text-orange-500' : ''}`}>
                {String(t('navigation.structure'))}
              </a>
              <a href="#business" onClick={(e) => handleClick(e, 'business')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'business' ? 'text-orange-500' : ''}`}>
                {String(t('navigation.business'))}
              </a>
              <a href="#invest" onClick={(e) => handleClick(e, 'invest')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest' ? 'text-orange-500' : ''}`}>
                {String(t('navigation.invest'))}
              </a>
              <a href="#about-university" onClick={(e) => handleClick(e, 'about-university')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'about-university' ? 'text-orange-500' : ''}`}>
                {String(t('navigation.aboutUniversity'))}
              </a>
              
              {/* Language switcher for mobile */}
              <div className="mt-4 border-t pt-4">
                <p className="text-sm font-medium mb-2">{String(t('navigation.language'))}</p>
                <LanguageSwitcher />
              </div>
              
              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-br-xl shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2"
              >
                <span>{String(t('navigation.investmentOpportunities'))}</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;