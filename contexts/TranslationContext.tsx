import React, { createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';

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

// Type for the translation context
interface TranslationContextType {
  t: (key: string, options?: any) => string | Record<string, any>;
  locale: string;
}

// Create the context with a default value
const TranslationContext = createContext<TranslationContextType>({
  t: () => '',
  locale: 'en',
});

// Props for the provider component
interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const { locale = 'en' } = useRouter();
  
  // Translation function - supports nested keys like 'navigation.home'
  const t = (key: string, options?: any): string | Record<string, any> => {
    // Get correct translation object based on current locale
    const currentTranslations = translations[locale as keyof typeof translations] || translations.en;
    
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
      return { [key]: objectResult };
    }
    
    // Regular key lookup
    return key in currentTranslations 
      ? (currentTranslations as any)[key] 
      : key; // Return the key as fallback
  };
  
  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use the translation context
export const useTranslation = () => useContext(TranslationContext);