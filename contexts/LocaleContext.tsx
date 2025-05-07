import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// English translations (default)
import en from '../public/locales/en/common.json';

// German translations
import de from '../public/locales/de/common.json';

// Add more languages as needed

// Map of all available translations
const translations = {
  en,
  de,
};

// Available locales
export const locales = ['en', 'de'];
export type Locale = 'en' | 'de';

// Type for the locale context
interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, options?: any) => string | Record<string, any>;
}

// Create the context with a default value
const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: () => '',
});

// Props for the provider component
interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  // Initialize locale from localStorage or default to 'en'
  const [locale, setLocaleState] = useState<Locale>('en');
  
  // Load saved locale from localStorage on initial render
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'de') {
        setLocaleState('de');
      }
    }
  }, []);
  
  // Set locale and save to localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    // Update HTML lang attribute
    document.documentElement.lang = newLocale;
  };
  
  // Translation function - supports nested keys like 'navigation.home'
  const t = (key: string, options?: any): string | Record<string, any> => {
    // Get correct translation object based on current locale
    const currentTranslations = translations[locale] || translations.en;
    
    // Support for nested keys like 'navigation.home'
    if (key.includes('.')) {
      const keys = key.split('.');
      let value = currentTranslations as any;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key; // Return the key as fallback
        }
      }
      
      // Ensure we always return a string for leaf values
      if (typeof value !== 'object') {
        return String(value);
      }
      
      return value;
    }
    
    // For returning entire objects like t('navigation') to get all navigation translations
    if (options?.returnObjects && key in currentTranslations) {
      const objectResult = (currentTranslations as any)[key];
      if (typeof objectResult === 'object') {
        return objectResult;
      }
      
      // If it's not actually an object, return it anyway
      console.warn(`Translation key '${key}' is not an object but returnObjects was requested`);
      return { [key]: String(objectResult) };
    }
    
    // Regular key lookup
    const result = key in currentTranslations ? (currentTranslations as any)[key] : key;
    
    // Ensure result is a string
    return typeof result === 'object' ? JSON.stringify(result) : String(result);
  };
  
  // Set HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Custom hook to use the locale context
export const useLocale = () => useContext(LocaleContext);