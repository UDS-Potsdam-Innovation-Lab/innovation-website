import React from 'react';
import { useLocale, Locale } from '../contexts/LocaleContext';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { locale, setLocale } = useLocale();

  const handleLocaleChange = (lang: Locale) => {
    if (lang !== locale) {
      setLocale(lang);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`text-sm font-medium ${
          locale === 'en' ? 'underline' : 'hover:underline'
        }`}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => handleLocaleChange('de')}
        className={`text-sm font-medium ${
          locale === 'de' ? 'underline' : 'hover:underline'
        }`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
