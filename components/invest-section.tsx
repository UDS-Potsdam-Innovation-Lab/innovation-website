import React from 'react';
import { Building, Globe, Users, BarChart4, Sparkles, ChevronRight } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const InvestSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section id="invest" className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            {t('invest.title')}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {t('invest.subtitle')}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t('invest.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4 md:mb-6">
              <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mr-3 md:mr-4">
                <Building size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-1 md:mb-2">{t('invest.feature1.title')}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t('invest.feature1.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mr-3 md:mr-4">
                <Globe size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-1 md:mb-2">{t('invest.feature2.title')}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t('invest.feature2.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4 md:mb-6">
              <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mr-3 md:mr-4">
                <Users size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-1 md:mb-2">{t('invest.feature3.title')}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t('invest.feature3.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-br-lg flex items-center justify-center text-orange-600 mr-3 md:mr-4">
                <BarChart4 size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-1 md:mb-2">{t('invest.feature4.title')}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t('invest.feature4.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-br-xl shadow-lg growth-bg">
            <h3 className="text-xl md:text-2xl font-bold text-center text-orange-500 mb-6 md:mb-8 relative z-10">{t('invest.opportunities.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
              <div className="bg-gray-50 p-4 md:p-6 rounded-br-xl" style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-orange-100 w-8 h-8 md:w-10 md:h-10 rounded-br-lg flex items-center justify-center text-orange-600 mr-3">
                    <Building size={16} className="md:w-5 md:h-5" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">{t('invest.opportunities.option1.title')}</h4>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('invest.opportunities.option1.description')}
                </p>
              </div>

              <div className="bg-gray-50 p-4 md:p-6 rounded-br-xl" style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-orange-100 w-8 h-8 md:w-10 md:h-10 rounded-br-lg flex items-center justify-center text-orange-600 mr-3">
                    <Sparkles size={16} className="md:w-5 md:h-5" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">{t('invest.opportunities.option2.title')}</h4>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('invest.opportunities.option2.description')}
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <a
                href="mailto:contact@innovation.german-uds.de"
                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-br-xl hover:bg-orange-600 transition-colors text-sm md:text-base"
              >
                <span>{t('invest.contactButton')}</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;