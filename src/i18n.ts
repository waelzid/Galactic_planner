import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import frTranslation from './locales/fr.json';
// Add more languages here:
import enTranslation from './locales/en.json';
// import arTranslation from './locales/ar.json';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      fr: {
        translation: frTranslation
      },
      // Add more languages here:
      en: { translation: enTranslation },
      // ar: { translation: arTranslation },
    },
    fallbackLng: 'en', // Default language
    debug: true, // Set to false in production
    
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

export default i18n;