import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

const BusinessSection: React.FC = () => {
  const { t } = useLocale();
  
  return (
    <section 
      id="business" 
      className="py-20 px-6 bg-blue-900 text-white relative"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.95), rgba(30, 58, 138, 0.98))',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded-br-xl text-sm font-medium mb-4">
            {String(t('business.subtitle'))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {String(t('business.title'))}
          </h2>
          <p className="text-gray-300">
            {String(t('business.description'))}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card1.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card1.description'))}
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card2.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card2.description'))}
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card3.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card3.description'))}
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card4.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card4.description'))}
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white bg-opacity-5 rounded-br-xl p-8">
            <h3 className="text-2xl font-bold mb-10 text-center">{String(t('business.financialStrategy.title'))}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{String(t('business.financialStrategy.point1.title'))}</h4>
                  <p className="text-gray-300">{String(t('business.financialStrategy.point1.description'))}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{String(t('business.financialStrategy.point2.title'))}</h4>
                  <p className="text-gray-300">{String(t('business.financialStrategy.point2.description'))}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{String(t('business.financialStrategy.point3.title'))}</h4>
                  <p className="text-gray-300">{String(t('business.financialStrategy.point3.description'))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default BusinessSection;