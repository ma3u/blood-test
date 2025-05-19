
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import longevityJson from '@/locales/en/longevity.json';

// You can add more languages/namespaces as needed

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        longevity: longevityJson,
      },
    },
    ns: ['longevity'],
    defaultNS: 'longevity',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true, // enables structured translations (arrays/objects)
  });

export default i18n;
