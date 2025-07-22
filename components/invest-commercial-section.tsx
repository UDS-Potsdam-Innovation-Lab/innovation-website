import React from "react";
import EnhancedImage from "./enhanced-image";
import { useLocale } from "../contexts/LocaleContext";

const InvestCommercialSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="bg-white py-20 px-6 md:px-16 text-[#0a2342]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Title Block */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">{String(t('investCommercial.title'))}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {String(t('investCommercial.company'))}
          </p>
        </div>

        {/* Investment Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              German UDS Service GmbH
            </h3>
            <p className="text-gray-700">
              {String(t('investCommercial.stakeholders.service'))}
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">FB Cloudhouse GmbH</h3>
            <p className="text-gray-700">
              {String(t('investCommercial.stakeholders.cloudhouse'))}
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              German UDS gGmbH
            </h3>
            <p className="text-gray-700">
              {String(t('investCommercial.stakeholders.university'))}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-orange-300 my-12"></div>

        {/* USP Visual & Text Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <EnhancedImage
              src="/images/financial-support-commercial/investment_portfolio.png"
              alt="Investment Portfolio"
              width={600}
              height={400}
              className="rounded-2xl shadow-md w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              {String(t('investCommercial.uspTitle'))}
            </h3>
            <p className="text-gray-700 text-base">
              {String(t('investCommercial.uspDescription'))}
            </p>
          </div>
        </div>

        {/* Key People Grid */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-orange-500">
            {String(t('investCommercial.keyPeopleTitle'))}
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {String(t('investCommercial.keyPeopleDescription'))}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {["mike", "tom", "DiMitri", "Feiyu_Xu", "Felix", "TimStuchtey", "Georg", "marco_bade"].map((person, idx) => (
              <EnhancedImage
                key={idx}
                src={`/images/financial-support-commercial/${person}.webp`}
                alt={person}
                width={200}
                height={200}
                className="rounded-full shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestCommercialSection;