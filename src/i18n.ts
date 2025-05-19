
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import longevityJson from '@/locales/en/longevity.json';
import enReference from '@/locales/en/reference';
import deReference from '@/locales/de/reference';

// You can add more languages/namespaces as needed

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        longevity: longevityJson,
        reference: enReference,
        translation: {
          "reference.title": "Reference Values",
          "reference.description": "Based on recommendations by Dr. Ulrich Strunz and Dr. med. Helena Orfanos-Boeckel",
          "reference.general": "General Parameters",
          "reference.amino": "Amino Acids",
          "reference.vitamins": "Special Vitamins",
          "reference.inflammation": "Inflammation Markers",
          "reference.hematology": "Hematology",
          "reference.hormones": "Hormones",
          "reference.caption.general": "Reference Values for General Parameters",
          "reference.caption.amino": "Reference Values for Amino Acids (Aminogram, Serum/Plasma)",
          "reference.caption.vitamins": "Reference Values for Special Vitamins",
          "reference.caption.inflammation": "Reference Values for Inflammation Markers",
          "reference.caption.hematology": "Reference Values for Hematology Parameters",
          "reference.caption.hormones": "Reference Values for Hormones",
          "reference.column.parameter": "Parameter",
          "reference.column.unit": "Unit",
          "reference.column.women": "Women (Reference/Target)",
          "reference.column.men": "Men (Reference/Target)",
          "reference.column.comment": "Comment",
          "reference.notes.title": "Notes for Use:",
          "reference.notes.1": "These values are based on the latest epigenetic and macro-molecular research from orthomolecular medicine experts.",
          "reference.notes.2": "For individual interpretation, always consider personal history and clinical context.",
          "reference.notes.3": "For hormones, consider cycle phase, age, and possible hormone therapy, especially for women.",
          "reference.notes.4": "Amino acids: For optimal health, each amino acid should be in the upper half of the reference range; values are based on healthy, high-performing individuals.",
          "reference.notes.5": "Special vitamins: Target values are often higher than standard reference ranges to support prevention and optimal function.",
          "reference.notes.6": "Inflammation markers: Lower values are generally better; chronic low-grade inflammation is a risk factor for many diseases.",
          "reference.notes.indicators": "Indicators: ✓ Tests paid by public health insurance, ⭐ Tests highly recommended by experts",
          "reference.sources": "Sources: Nutrient Therapy - The Practice Guide, Dr. Helena Orfanos-Boeckel (2023); The Blood Value Code, Thiemo Osterhaus (2023); Nutrient Therapy, Dr. Helena Orfanos-Boeckel (2022), Dr. Ulrich Strunz, \"The Amino Revolution\" (2022)",
          "gender.male": "Male",
          "gender.female": "Female"
        }
      },
      de: {
        translation: {
          // German translations were already added to de/reference.ts
        },
        reference: deReference
      }
    },
    ns: ['longevity', 'translation', 'reference'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true, // enables structured translations (arrays/objects)
  });

export default i18n;
