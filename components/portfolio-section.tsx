import React from 'react';
import { Building, Globe, Award } from 'lucide-react';
import EnhancedImage from './enhanced-image';
import { useLocale } from '../contexts/LocaleContext';

const PortfolioSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section id="portfolio" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            {t('portfolio.title')}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {t('portfolio.subtitle')}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mb-4 md:mb-6">
              <Building size={20} className="md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">{t('portfolio.service.title')}</h3>
            <p className="text-gray-600 text-sm md:text-base">
              {t('portfolio.service.description')}
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mb-4 md:mb-6">
              <Globe size={20} className="md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">{t('portfolio.cloudhouse.title')}</h3>
            <p className="text-gray-600 text-sm md:text-base">
              {t('portfolio.cloudhouse.description')}
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mb-4 md:mb-6">
              <Award size={20} className="md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 md:mb-3">{t('portfolio.university.title')}</h3>
            <p className="text-gray-600 text-sm md:text-base">
              {t('portfolio.university.description')}
            </p>
          </div>
        </div>

        {/* New images below the main portfolio grid */}
        <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/financial-support-commercial/investment_portfolio.png"
              alt="Investment Portfolio"
              width={500}
              height={400}
              className="rounded-xl shadow-md w-full max-w-[500px]"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/financial-support-commercial/usp.png"
              alt="USP Vertical Structure"
              width={500}
              height={400}
              className="rounded-xl shadow-md w-full max-w-[500px]"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;