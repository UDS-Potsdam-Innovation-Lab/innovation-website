import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import en from '../public/locales/en/common.json';
import de from '../public/locales/de/common.json';

const translations = { en, de };
export const locales = ['en', 'de'];
export type Locale = 'en' | 'de';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, options?: any) => string;
  tObject: (key: string) => any;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: () => '',
  tObject: () => null,
});

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && locales.includes(saved)) {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'de') setLocaleState('de');
    }
    setIsHydrated(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string, options?: any): string => {
    const currentTranslations = translations[locale] || translations.en;

    if (key.includes('.')) {
      const keys = key.split('.');
      let value = currentTranslations as any;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }

      return typeof value === 'string' ? value : JSON.stringify(value);
    }

    const value = (currentTranslations as any)[key];
    return typeof value === 'string' ? value : JSON.stringify(value ?? key);
  };

  const tObject = (key: string): any => {
    const currentTranslations = translations[locale] || translations.en;
    const keys = key.split('.');
    let value = currentTranslations as any;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return null;
      }
    }

    return value;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  if (!isHydrated) return null;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tObject }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
