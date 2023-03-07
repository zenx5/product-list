import i18n, { use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enLocales from './langs/en'
import esLocales from './langs/es'
import ptLocales from './langs/pt'

import { defaultLang } from './config-lang';

const localLang = localStorage.getItem('i18nextLng') 

let lng = localLang ?? defaultLang.value

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      pt: {translation: ptLocales},
      en: {translation: enLocales},
      es: {translation: esLocales},
    },
    lng,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n