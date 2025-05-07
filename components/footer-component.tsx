import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from '../contexts/TranslationContext';

const Footer: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  
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
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors">{t('navigation.ecosystem')}</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">{t('navigation.portfolio')}</a></li>
              <li><a href="#structure" className="text-gray-400 hover:text-white transition-colors">{t('navigation.structure')}</a></li>
              <li><a href="#business" className="text-gray-400 hover:text-white transition-colors">{t('navigation.business')}</a></li>
              <li><a href="#invest" className="text-gray-400 hover:text-white transition-colors">{t('navigation.invest')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.keyVerticals')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li>{t('footer.verticals.entrepreneurship')}</li>
              <li>{t('footer.verticals.education')}</li>
              <li>{t('footer.verticals.ai')}</li>
              <li>{t('footer.verticals.security')}</li>
              <li>{t('footer.verticals.management')}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{String(t('footer.investmentUpdates'))}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {String(t('footer.stayUpdated'))}
            </p>
            <a 
              href="mailto:invest@germanudsinnovation.com" 
              className="block w-full bg-orange-500 text-white py-2 px-4 rounded-br-md hover:bg-orange-600 transition-colors text-center"
            >
              {String(t('footer.contactUs'))}
            </a>
            <div className="mt-4 text-sm text-gray-400">
              <p>{String(t('footer.followUs'))}:</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} German University of Digital Science Innovation GmbH. {t('footer.rights')}
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