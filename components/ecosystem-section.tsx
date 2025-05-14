import React from 'react';
import { ChevronRight } from 'lucide-react';
import EnhancedImage from './enhanced-image';
import { useLocale } from '../contexts/LocaleContext';

const EcosystemSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section id="ecosystem" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <EnhancedImage
              src="/images/institutions_overview.png"
              alt="Digital Innovation Ecosystem"
              width={600}
              height={400}
              className="rounded-br-xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
              {t('ecosystem.title')}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('ecosystem.subtitle')}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-orange-500 mb-3">{t('ecosystem.purpose.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('ecosystem.purpose.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-3">{t('ecosystem.vision.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('ecosystem.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;