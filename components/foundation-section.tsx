import React from "react";
import Image from "next/image";
import { useLocale } from "../contexts/LocaleContext";

const FoundationSection = () => {
  const { t } = useLocale();

  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-gray-100 text-gray-900 space-y-20">
      {/* Why the Foundation Exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('foundation.why.title')}</h2>
          <ul className="list-disc list-inside space-y-3">
            {t('foundation.why.points', { returnObjects: true }).map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/foundation-pitch/why_foundation.png"
            alt="Foundation Purpose"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Guiding Principles */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{t('foundation.guiding.title')}</h2>
        <ul className="list-disc list-inside space-y-3">
          {t('foundation.guiding.points', { returnObjects: true }).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Core Beliefs Image */}
      <div className="flex justify-center">
        <Image
          src="/images/foundation-pitch/core_belief.png"
          alt="Core Beliefs"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Foundation Purpose */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{t('foundation.purpose.title')}</h2>
        <ul className="list-disc list-inside space-y-3">
          {t('foundation.purpose.points', { returnObjects: true }).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* How to Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/foundation-pitch/support_us.png"
            alt="Support Methods"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('foundation.support.title')}</h2>
          <ul className="list-disc list-inside space-y-3">
            {t('foundation.support.points', { returnObjects: true }).map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Foundation Leadership */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{t('foundation.leadership.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Image src="/images/foundation-pitch/mike_f.jpg" alt="Prof. Dr. Mike Friedrichsen" width={200} height={200} className="rounded-full shadow" />
          <Image src="/images/foundation-pitch/ch_m.jpg" alt="Prof. Dr. Christoph Meinel" width={200} height={200} className="rounded-full shadow" />
          <Image src="/images/foundation-pitch/wulf_w.jpg" alt="Wulf Wersig" width={200} height={200} className="rounded-full shadow" />
          <Image src="/images/foundation-pitch/syster_f.jpg" alt="Syster Friedrichsen" width={200} height={200} className="rounded-full shadow" />
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
