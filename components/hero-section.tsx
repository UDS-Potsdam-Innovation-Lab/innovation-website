import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const HeroSection: React.FC = () => {
  const { t } = useLocale();

  const scrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.getElementById('portfolio');
    if (section) {
      const offset = 80;
      const position = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-auto lg:h-screen flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-orange-500 text-white flex flex-col justify-between p-8 sm:p-10">
        <div className="flex flex-col justify-center flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            {String(t('heroSection.title'))}
          </h1>

          <p className="text-base sm:text-lg text-orange-100 max-w-md leading-relaxed">
            {String(t('heroSection.subtitle'))}
          </p>

          <div>
            <button
              onClick={scrollToPortfolio}
              className="inline-flex items-center bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              {String(t('heroSection.exploreButton'))}
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-8 text-sm text-orange-100 space-x-6 mt-6 lg:mt-0">
          <a href="#contact" className="hover:underline">
            {String(t('heroSection.footer.contact'))}
          </a>
          <Link href="/imprint" className="hover:underline">
            {String(t('heroSection.footer.legal'))}
          </Link>
          <Link href="/privacy" className="hover:underline">
            {String(t('heroSection.footer.privacy'))}
          </Link>
        </div>
      </div>

      {/* Right Panel (Image) */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full">
        <img
          src="/hero-section.png"
          alt="Hero section visual"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
