
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
        translation: {
          "reference.hematology": "Hematology",
          "reference.hormones": "Hormones",
          "reference.caption.hematology": "Reference Values for Hematology Parameters",
          "reference.caption.hormones": "Reference Values for Hormones",
          "reference.notes.indicators": "Indicators: ✓ Tests paid by public health insurance, ⭐ Tests highly recommended by experts",
          "reference.sources": "Sources: Nutrient Therapy - The Practice Guide, Dr. Helena Orfanos-Boeckel (2023); The Blood Value Code, Thiemo Osterhaus (2023); Nutrient Therapy, Dr. Helena Orfanos-Boeckel (2022), Dr. Ulrich Strunz, \"The Amino Revolution\" (2022)",
          "gender.male": "Male",
          "gender.female": "Female"
        }
      },
    },
    ns: ['longevity', 'translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true, // enables structured translations (arrays/objects)
  });

export default i18n;
