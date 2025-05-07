import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Replaced the colored divs with the new logo image */}
          <Image
            src="/images/innovation_logo.png"
            alt="German UDS Innovation Logo"
            width={160} // Adjust this later
            height={80} // Adjust this later
            className='mr-8'
          />
        
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <a href="#ecosystem" onClick={(e) => handleClick(e, 'ecosystem')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'ecosystem' ? 'text-orange-500' : ''}`}>Ecosystem</a>
          <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'portfolio' ? 'text-orange-500' : ''}`}>Portfolio</a>
          <a href="#structure" onClick={(e) => handleClick(e, 'structure')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'structure' ? 'text-orange-500' : ''}`}>Structure</a>
          <a href="#business" onClick={(e) => handleClick(e, 'business')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'business' ? 'text-orange-500' : ''}`}>Business Model</a>
          <a href="#invest" onClick={(e) => handleClick(e, 'invest')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest' ? 'text-orange-500' : ''}`}>Invest</a>
          <a href="#invest-commercial" onClick={(e) => handleClick(e, 'invest-commercial')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest-commercial' ? 'text-orange-500' : ''}`}>Commercial Investment</a>
          <a href="#invest-nonprofit" onClick={(e) => handleClick(e, 'invest-nonprofit')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest-nonprofit' ? 'text-orange-500' : ''}`}>Nonprofit Investment</a>
          <a href="#about-university" onClick={(e) => handleClick(e, 'about-university')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'about-university' ? 'text-orange-500' : ''}`}>About UDS</a>
        </div>
        
        <div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-br-xl shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2">
            <span>Investment Opportunities</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;