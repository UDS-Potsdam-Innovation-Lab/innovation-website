import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '../contexts/LocaleContext';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { locale, t } = useLocale();
  
  // Get locale-specific logo if available
  const logoSrc = "/images/innovation_logo_foot.png";
    
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
          <div className="flex items-center space-x-4 mb-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center space-x-4 cursor-pointer group"
              >
                <Image
                  src={logoSrc}
                  alt="German UDS Innovation Logo"
                  width={96}
                  height={96}
                  className="mr-2 transform transition-transform duration-200 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to default logo if locale-specific one doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/innovation_logo_foot.png';
                  }}
                />
              </a>
          </div>
            <p className="text-gray-400 text-sm mb-6">
              {String(t('footer.description'))}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{String(t('footer.quickLinks'))}</h3>
            <ul className="space-y-3">
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors">{String(t('navigation.ecosystem'))}</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">{String(t('navigation.portfolio'))}</a></li>
              <li><a href="#structure" className="text-gray-400 hover:text-white transition-colors">{String(t('navigation.structure'))}</a></li>
              <li><a href="#business" className="text-gray-400 hover:text-white transition-colors">{String(t('navigation.business'))}</a></li>
              <li><a href="#invest" className="text-gray-400 hover:text-white transition-colors">{String(t('navigation.invest'))}</a></li>
            </ul>
          </div>
          
          <div>
          <h3 className="text-lg font-bold mb-6">{String(t('footer.keyVerticals'))}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="https://german-uds.de/college-for-entrepreneurship" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {String(t('footer.verticals.entrepreneurship'))}
                </a>
              </li>
              <li>
                <a 
                  href="https://german-uds.de/researchcenters/extended-reality" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {String(t('footer.verticals.education'))}
                </a>
              </li>
              <li>
                <a 
                  href="https://german-uds.de/researchcenters/artificial-intelligence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {String(t('footer.verticals.ai'))}
                </a>
              </li>
              <li>
                <a 
                  href="https://german-uds.de/researchcenters/cybersecurity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {String(t('footer.verticals.security'))}
                </a>
              </li>
              <li>
                <a 
                  href="https://german-uds.de/researchcenters/digital-transformations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {String(t('footer.verticals.management'))}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{String(t('footer.investmentUpdates'))}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {String(t('footer.stayUpdated'))}
            </p>
            <a 
              href="mailto:invest@innovation.german-uds.de" 
              className="block w-full bg-orange-500 text-white py-2 px-4 rounded-br-md hover:bg-orange-600 transition-colors text-center"
            >
              {String(t('footer.contactUs'))}
            </a>
            <div className="mt-4 text-sm text-gray-400">
              <p>{String(t('footer.followUs'))}:</p>
              <div className="flex space-x-4 mt-2">
                <a 
                  href="https://www.linkedin.com/company/german-uds/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/german_uds/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} German University of Digital Science Innovation GmbH. {String(t('footer.rights'))}
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
              {String(t('footer.privacy'))}
            </Link>
            <Link href="/imprint" className="text-gray-500 hover:text-white transition-colors text-sm">
              {String(t('footer.imprint'))}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;