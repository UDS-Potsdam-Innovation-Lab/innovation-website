import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const HeroSection: React.FC = () => {
  const { locale, t } = useLocale();
  
  const scrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const headerOffset = 80;
      const elementPosition = portfolioSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-gradient-to-br from-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              {String(t('heroSection.title'))}
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              {String(t('heroSection.subtitle'))}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToPortfolio}
                className="bg-white text-blue-900 px-6 md:px-8 py-2.5 md:py-3 rounded-br-xl shadow-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm md:text-base cursor-pointer relative z-10"
              >
                <span>{String(t('heroSection.exploreButton'))}</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative bg-white rounded-br-xl shadow-xl p-6 md:p-8 rotate-3 transform hover:rotate-0 transition-transform">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-orange-500 rounded"></div>
                <div className="h-10 w-10 md:h-12 md:w-12 bg-blue-400 rounded ml-1"></div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-bold text-sm md:text-base">{String(t('heroSection.nextGeneration'))}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{String(t('heroSection.withoutBorders'))}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                "{String(t('heroSection.quote'))}"
              </p>
              <div className="flex justify-end">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-500"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-500 flex items-center justify-center text-[10px] md:text-xs text-white">+10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default HeroSection;