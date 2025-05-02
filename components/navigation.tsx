import React from 'react';
import { ChevronRight } from 'lucide-react';

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
          <div className="flex items-center">
            <div className="h-10 w-10 bg-orange-500 rounded"></div>
            <div className="h-10 w-10 bg-blue-400 rounded ml-1"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">German University</h1>
            <h2 className="text-sm font-bold text-gray-900">of Digital Science <span className="text-orange-500">Innovation</span></h2>
          </div>
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <a href="#ecosystem" onClick={(e) => handleClick(e, 'ecosystem')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'ecosystem' ? 'text-orange-500' : ''}`}>Ecosystem</a>
          <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'portfolio' ? 'text-orange-500' : ''}`}>Portfolio</a>
          <a href="#structure" onClick={(e) => handleClick(e, 'structure')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'structure' ? 'text-orange-500' : ''}`}>Structure</a>
          <a href="#business" onClick={(e) => handleClick(e, 'business')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'business' ? 'text-orange-500' : ''}`}>Business Model</a>
          <a href="#invest" onClick={(e) => handleClick(e, 'invest')} className={`text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest' ? 'text-orange-500' : ''}`}>Invest</a>
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