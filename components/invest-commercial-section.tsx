import React from "react";
import EnhancedImage from "./enhanced-image";
import { useLocale } from '../contexts/LocaleContext';
import { getLocalizedImagePath } from '../utils/localization';

const InvestCommercialSection: React.FC = () => {
  const { locale, t } = useLocale();
  
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-gray-50 text-gray-900 space-y-20">
      {/* Investment Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('investCommercial.title')}</h2>
          <p className="mb-2">{t('investCommercial.company')}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('investCommercial.stakeholders.service')}</li>
            <li>{t('investCommercial.stakeholders.cloudhouse')}</li>
            <li>{t('investCommercial.stakeholders.university')}</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <EnhancedImage
            src="/images/financial-support-commercial/investment_portfolio.png"
            alt="Investment Portfolio"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* USP Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('investCommercial.uspTitle')}</h2>
          <p>{t('investCommercial.uspDescription')}</p>
        </div>
        <div className="flex justify-center">
          <EnhancedImage
            src="/images/financial-support-commercial/usp.png"
            alt="USP Vertical Structure"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Key People */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{t('investCommercial.keyPeopleTitle')}</h2>
        <p className="mb-4">{t('investCommercial.keyPeopleDescription')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <EnhancedImage src="/images/financial-support-commercial/mike.webp" alt="Prof. Dr. Mike Friedrichsen" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/tom.webp" alt="Prof. Dr. Thomas Staubitz" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/DiMitri.webp" alt="Prof. Dr. Daniele Di Mitri" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/Feiyu_Xu.webp" alt="Prof. Dr. Feiyu Xu" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/Felix.jpeg" alt="Prof. Dr. Felix Weitkämper" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/TimStuchtey.webp" alt="Prof. Dr. Tim Stuchtey" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/Georg.webp" alt="Prof. Dr. Georg Loscher" width={200} height={200} className="rounded-full shadow" />
          <EnhancedImage src="/images/financial-support-commercial/marco_bade.jpeg" alt="Prof. Dr. Marco Bade" width={200} height={200} className="rounded-full shadow" />
        </div>
      </div>
    </section>
  );
};

export default InvestCommercialSection;
