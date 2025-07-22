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

        {/* ===== Organization Boxes ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Group 1 */}
          <div className="rounded-2xl shadow-md border border-blue-300 bg-blue-50 p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold">{t('ecosystem.org1.entity1.name')}</h3>
              <p className="text-sm text-gray-700">{t('ecosystem.org1.entity1.detail')}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">{t('ecosystem.org1.entity2.name')}</h3>
              <p className="text-sm text-gray-700">{t('ecosystem.org1.entity2.detail')}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">{t('ecosystem.org1.entity3.name')}</h3>
              <p className="text-sm text-gray-700">{t('ecosystem.org1.entity3.detail')}</p>
            </div>
          </div>

          {/* Group 2 */}
          <div className="rounded-2xl shadow-md border border-blue-300 bg-blue-50 p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold">{t('ecosystem.org2.entity1.name')}</h3>
              <p className="text-sm text-gray-700">{t('ecosystem.org2.entity1.detail')}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">{t('ecosystem.org2.entity2.name')}</h3>
              <p className="text-sm text-gray-700">{t('ecosystem.org2.entity2.detail')}</p>
            </div>
          </div>

          {/* Group 3 */}
          <div className="rounded-2xl shadow-md border-2 border-dashed border-blue-400 bg-blue-50 p-6 text-center">
            <h3 className="text-xl font-bold">{t('ecosystem.finalBox.name')}</h3>
            <p className="text-sm italic mb-2">{t('ecosystem.finalBox.sub')}</p>
            <p className="text-sm font-medium mb-1">{t('ecosystem.finalBox.presidents')}</p>
            <p className="text-sm text-gray-700">
              {t('ecosystem.finalBox.names')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
