import { Locale } from '../contexts/LocaleContext';

/**
 * Utility functions for handling localization in the application
 */

/**
 * Gets a locale-specific image path if it exists
 * For example: /images/logo.png becomes /images/de/logo.png for German locale
 * 
 * @param path - The original image path
 * @param locale - The current locale
 * @returns The localized path or the original path if no localized version exists
 */
export const getLocalizedImagePath = (path: string, locale: Locale | string | undefined): string => {
  if (!locale || locale === 'en') {
    return path; // Default locale (English) uses the original path
  }

  // Try to use localized version by injecting the locale code in the path
  // Example: /images/logo.png becomes /images/de/logo.png for 'de' locale
  const parts = path.split('/');
  const index = parts.indexOf('images') + 1;
  
  if (index > 0 && index < parts.length) {
    parts.splice(index, 0, locale);
    return parts.join('/');
  }
  
  return path;
};

/**
 * Gets a fallback object when translation is not available
 * 
 * @param defaultValue - The default value to use
 * @param value - The possibly undefined value from translations
 * @returns The value if it exists, or the default value
 */
export const getTranslationWithFallback = <T>(
  defaultValue: T, 
  value: T | undefined
): T => {
  return value !== undefined ? value : defaultValue;
};

/**
 * A simple helper to debug translation issues
 * 
 * @param translationKey - The key that was used to look up a translation
 * @param translation - The translated value (or undefined if not found)
 */
export const logTranslationMissing = (
  translationKey: string, 
  translation: any
): void => {
  if (translation === undefined) {
    console.warn(`Translation missing for key: ${translationKey}`);
  }
};

/**
 * Generate alternate routes for HTML head
 * Useful for SEO with hreflang tags
 * 
 * @param path - The current path (without locale)
 * @returns Array of objects with locale and url
 */
export const getAlternateRoutes = (path: string) => {
  const locales: Locale[] = ['en', 'de'];
  return locales.map(locale => ({
    locale,
    url: `${path}`
  }));
};