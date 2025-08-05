import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en', // Set English as default language
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de }
    },
    
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    }
  });

export default i18n;