import React from 'react';
import { Building, Globe, Award } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const PortfolioSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section id="portfolio" className="py-20 px-6 bg-white text-[#0a2342]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            {t('portfolio.headline.part1')}{" "}
            <span className="text-orange-500">{t('portfolio.headline.part2')}</span>
          </h2>
          <p className="text-gray-600 text-base">
            {String(t('portfolio.description'))}
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[{
            icon: <Building size={24} />,
            title: t('portfolio.service.title'),
            desc: t('portfolio.service.description'),
            color: 'orange',
          }, {
            icon: <Globe size={24} />,
            title: t('portfolio.cloudhouse.title'),
            desc: t('portfolio.cloudhouse.description'),
            color: 'orange',
          }, {
            icon: <Award size={24} />,
            title: t('portfolio.university.title'),
            desc: t('portfolio.university.description'),
            color: 'blue',
          }].map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-md border border-${item.color}-300 bg-${item.color}-50 p-6 space-y-4`}
            >
              <div className={`flex justify-center text-${item.color}-500 mb-2`}>{item.icon}</div>
              <h3 className={`text-lg font-bold text-${item.color}-500`}>{String(item.title)}</h3>
              <p className="text-sm text-gray-700">{String(item.desc)}</p>
            </div>
          ))}
        </div>

        {/* Visual Structure */}
        <div className="space-y-10 relative">
          {/* Top Entity */}
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-md border border-orange-300 bg-orange-50 p-6 w-full max-w-md text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">
                {t('portfolio.structure.innovation')}
              </h3>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-1 h-6 border-l-2 border-orange-400"></div>
          </div>

          {/* Subsidiaries Row */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
            {/* Cloudhouse */}
            <div className="rounded-2xl shadow-md border border-orange-300 bg-orange-50 p-6 w-full max-w-sm min-h-[160px] flex flex-col justify-center text-center">
              <h3 className="text-lg font-bold text-orange-500 min-h-[48px] flex items-center justify-center">
                {t('portfolio.structure.cloudhouse.name')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('portfolio.structure.cloudhouse.ownership')}
              </p>
            </div>

            {/* Service */}
            <div className="rounded-2xl shadow-md border border-orange-300 bg-orange-50 p-6 w-full max-w-sm min-h-[160px] flex flex-col justify-center text-center">
              <h3 className="text-lg font-bold text-orange-500 min-h-[48px] flex items-center justify-center">
                {t('portfolio.structure.service.name')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('portfolio.structure.service.ownership')}
              </p>
            </div>

            {/* AI Research Institute GmbH */}
            <div className="rounded-2xl shadow-md border border-orange-300 bg-orange-50 p-6 w-full max-w-sm min-h-[160px] flex flex-col justify-center text-center">
              <h3 className="text-lg font-bold text-orange-500 min-h-[48px] flex items-center justify-center">
                {t('portfolio.structure.ai.name')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('portfolio.structure.ai.ownership')}
              </p>
            </div>

            {/* University */}
            <div className="rounded-2xl shadow-md border border-blue-300 bg-blue-50 p-6 w-full max-w-sm min-h-[160px] flex flex-col justify-center text-center">
              <h3 className="text-lg font-bold text-blue-500 min-h-[48px] flex items-center justify-center">
                {t('portfolio.structure.university.name')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('portfolio.structure.university.ownership')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
