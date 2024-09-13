import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend'; //

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    returnObjects: true,
    interpolation: {
      escapeValue: true,
    },
  });
