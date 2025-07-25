import React, { useState } from 'react';
import { useLocale, Locale } from '../contexts/LocaleContext';
import Image from 'next/image';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const { locale, setLocale, t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  const handleLocaleChange = (lang: Locale) => {
    if (lang !== locale) {
      setLocale(lang);
      window.scrollTo(0, 0);
    }
  };

  const logoSrc = "/images/innovation_logo.png";

  const navLinks = [
    { id: 'about-university', label: 'About Us' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'structure', label: 'Structure' },
    { id: 'business', label: 'Business' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'invest', label: 'Invest' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f3f4f6]/70 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between min-h-[80px]">
        {/* Left: Logo */}
        <div className="flex items-center justify-start flex-1">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block"
          >
            <Image
              src={logoSrc}
              alt="Logo"
              width={160}
              height={80}
              className="object-contain"
              style={{ minHeight: 60 }}
            />
          </a>
        </div>

        {/* Right: Desktop navigation */}
        <div className="flex items-center justify-end flex-1">
          <div className="hidden lg:flex items-center space-x-8 text-[#0a2342]">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`text-sm font-medium hover:text-orange-500 transition-colors ${
                  activeSection === id ? 'text-orange-500' : 'text-[#0a2342]'
                }`}
              >
                {label}
              </a>
            ))}
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLocaleChange('en')}
                className={`text-sm font-medium ${
                  locale === 'en' ? 'underline text-[#0a2342]' : 'hover:underline text-[#0a2342]'
                }`}
              >
                EN
              </button>
              <span>|</span>
              <button
                onClick={() => handleLocaleChange('de')}
                className={`text-sm font-medium ${
                  locale === 'de' ? 'underline text-[#0a2342]' : 'hover:underline text-[#0a2342]'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-[#0a2342] ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#f3f4f6]/80 backdrop-blur-xl border-t border-white/30 shadow-lg z-50 p-4 text-[#0a2342]">
          <div className="flex flex-col space-y-4">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`text-sm font-medium hover:text-orange-500 ${
                  activeSection === id ? 'text-orange-500' : 'text-[#0a2342]'
                }`}
              >
                {label}
              </a>
            ))}
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-2 pt-4 border-t border-white/30">
              <button
                onClick={() => handleLocaleChange('en')}
                className={`text-sm font-medium ${
                  locale === 'en' ? 'underline text-[#0a2342]' : 'hover:underline text-[#0a2342]'
                }`}
              >
                EN
              </button>
              <span>|</span>
              <button
                onClick={() => handleLocaleChange('de')}
                className={`text-sm font-medium ${
                  locale === 'de' ? 'underline text-[#0a2342]' : 'hover:underline text-[#0a2342]'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
