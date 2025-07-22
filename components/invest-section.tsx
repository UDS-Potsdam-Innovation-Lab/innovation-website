import React from 'react';
import { Building, Globe, Users, BarChart4, Sparkles, ChevronRight } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const InvestSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section id="invest" className="py-20 px-6 bg-white text-[#0a2342]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Banner Image at Top */}
        <div className="w-full">
          <img
            src="/images/invest-1.png"
            alt="Investment Banner"
            className="w-full max-h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
  {String(t('invest.headline.part1'))}{" "}
  <span className="text-orange-500">{String(t('invest.headline.part2'))}</span>
</h2>


          <p className="text-gray-600 text-base">{String(t('invest.description'))}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500">{String(t('invest.feature1.title'))}</h3>
                <p className="text-gray-700 text-base">{String(t('invest.feature1.description'))}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500">{String(t('invest.feature2.title'))}</h3>
                <p className="text-gray-700 text-base">{String(t('invest.feature2.description'))}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500">{String(t('invest.feature3.title'))}</h3>
                <p className="text-gray-700 text-base">{String(t('invest.feature3.description'))}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600">
                <BarChart4 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500">{String(t('invest.feature4.title'))}</h3>
                <p className="text-gray-700 text-base">{String(t('invest.feature4.description'))}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Standalone Image Block */}
        <div className="mt-12 flex justify-center">
          <div className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <img
              src="/invest-2.png"
              alt="Investment Insights"
              className="w-full object-cover rounded-t-2xl"
            />
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12">
          <a
            href="mailto:contact@innovation.german-uds.de"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-base font-medium"
          >
            {String(t('invest.contactButton'))}
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
