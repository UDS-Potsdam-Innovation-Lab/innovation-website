import React from "react";
import EnhancedImage from "./enhanced-image";
import { useLocale } from "../contexts/LocaleContext";

const AboutUniversitySection = () => {
  const { t } = useLocale();

  return (
    <section id="about-university" className="px-6 py-12 md:px-16 lg:px-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('university.empowering.title')}</h2>
              <p>
                {t('university.empowering.description')}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{t('university.degrees.title')}</h2>
              <p>
                {t('university.degrees.description')}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{t('university.learning.title')}</h2>
              <p>
                {t('university.learning.description')}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{t('university.micro.title')}</h2>
              <p>
                {t('university.micro.description')}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/university-pitch/avatar.png"
              alt="AI-supported Avatar"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Higher Education Transformation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-last md:order-first">
            <EnhancedImage
              src="/images/university-pitch/higher_education_model.png"
              alt="Higher Education Transformation Model"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('university.transforming.title')}</h2>
            <ul className="list-disc list-inside space-y-4 text-lg">
              {t('university.transforming.points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Learning Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('university.ecosystem.title')}</h2>
            <p className="mb-4">
              {t('university.ecosystem.description')}
            </p>
            <ul className="list-disc list-inside space-y-3">
              {t('university.ecosystem.points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/university-pitch/learning_ecosystem.png"
              alt="Learning Ecosystem Diagram"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Student Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-last md:order-first">
            <EnhancedImage
              src="/images/university-pitch/user_journey.png"
              alt="German UDS User Journey"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('university.journey.title')}</h2>
            <p>
              {t('university.journey.description')}
            </p>
          </div>
        </div>

        {/* CloudHouse Innovation Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('university.cloudhouse.title')}</h2>
            <p className="mb-4">
              {t('university.cloudhouse.description')}
            </p>
            <p>
              {t('university.cloudhouse.additional')}
            </p>
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/university-pitch/cloudhouse_opening.png"
              alt="CloudHouse Opening"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversitySection;
