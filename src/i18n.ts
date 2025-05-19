
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLongevityJson from '@/locales/en/longevity.json';
import deLongevityJson from '@/locales/de/longevity.json';

// Initialize i18next with our localization resources
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        longevity: enLongevityJson,
      },
      de: {
        longevity: deLongevityJson,
      }
    },
    ns: ['longevity'],
    defaultNS: 'longevity',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true, // enables structured translations (arrays/objects)
  });

export default i18n;
