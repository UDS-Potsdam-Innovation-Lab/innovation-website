import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

const EcosystemSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section id="ecosystem" className="py-20 px-6 bg-white text-[#0a2342]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ===== Heading ===== */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            {t('ecosystem.title.part1')}{' '}
            <span className="text-orange-500">{t('ecosystem.title.part2')}</span>
          </h2>
        </div>

        {/* ===== Purpose and Vision Highlights ===== */}
        <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold text-orange-500 mb-3">{t('ecosystem.purpose.title')}</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('ecosystem.purpose.description')}
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold text-orange-500 mb-3">{t('ecosystem.vision.title')}</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('ecosystem.vision.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
