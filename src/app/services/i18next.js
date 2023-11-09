import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../../../locales/en.json';
import hi from '../../../locales/hi.json';
import te from '../../../locales/te.json';
import kn from '../../../locales/kn.json';
import ta from '../../../locales/ta.json';
import mr from '../../../locales/mr.json';
import gu from '../../../locales/gu.json';

export const languageResources = {
  en: {translation: en},
  hi: {translation: hi},
  te: {translation: te},
  kn: {translation: kn},
  ta: {translation: ta},
  mr: {translation: mr},
  gu: {translation: gu},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
