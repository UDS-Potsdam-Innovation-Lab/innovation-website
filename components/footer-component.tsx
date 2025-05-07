import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface FooterProps {
  translations?: {
    description: string;
    quickLinks: string;
    keyVerticals: string;
    verticals: {
      entrepreneurship: string;
      education: string;
      ai: string;
      security: string;
      management: string;
    };
    investmentUpdates: string;
    stayUpdated: string;
    emailPlaceholder: string;
    subscribe: string;
    rights: string;
  };
}

// Default translations as fallback
const defaultTranslations = {
  description: "Our integrated ecosystem connects academic excellence with entrepreneurial practice through strategic investments and services.",
  quickLinks: "Quick Links",
  keyVerticals: "Key Verticals",
  verticals: {
    entrepreneurship: "Digital Entrepreneurship",
    education: "Virtual Education",
    ai: "Artificial Intelligence",
    security: "Cybersecurity",
    management: "Digital Management"
  },
  investmentUpdates: "Investment Updates",
  stayUpdated: "Stay updated with our latest investment opportunities and innovations.",
  emailPlaceholder: "Your email address",
  subscribe: "Subscribe",
  rights: "All rights reserved."
};

const Footer: React.FC<FooterProps> = ({ translations = defaultTranslations }) => {
  const { locale } = useRouter();
  
  // Get locale-specific logo if available
  const logoSrc = locale === 'de' 
    ? "/images/de/innovation_logo.png" 
    : "/images/innovation_logo.png";
    
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={logoSrc}
                alt="German UDS Innovation Logo"
                width={32}
                height={32}
                className="mr-2"
                onError={(e) => {
                  // Fallback to default logo if locale-specific one doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/innovation_logo.png';
                }}
              />
              <div>
                <h3 className="text-sm font-bold">German University</h3>
                <h4 className="text-xs font-bold">of Digital Science <span className="text-orange-500">Innovation</span></h4>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {translations.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{translations.quickLinks}</h3>
            <ul className="space-y-3">
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors">Ecosystem</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#structure" className="text-gray-400 hover:text-white transition-colors">Structure</a></li>
              <li><a href="#business" className="text-gray-400 hover:text-white transition-colors">Business Model</a></li>
              <li><a href="#invest" className="text-gray-400 hover:text-white transition-colors">Invest</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{translations.keyVerticals}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>{translations.verticals.entrepreneurship}</li>
              <li>{translations.verticals.education}</li>
              <li>{translations.verticals.ai}</li>
              <li>{translations.verticals.security}</li>
              <li>{translations.verticals.management}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{translations.investmentUpdates}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {translations.stayUpdated}
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder={translations.emailPlaceholder} 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white" 
              />
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white py-2 rounded-br-md hover:bg-orange-600 transition-colors"
              >
                {translations.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} German University of Digital Science Innovation GmbH. {translations.rights}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;