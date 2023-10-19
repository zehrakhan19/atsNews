import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../../../locales/en.json';
import hi from '../../../locales/hi.json';

export const languageResources = {
  en: {translation: en},
  hi: {translation: hi},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
