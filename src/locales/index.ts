
import en from './en';
import de from './de';
import fr from './fr';

const locales = {
  en,
  de,
  fr
};

export type SupportedLanguage = keyof typeof locales;
export type TranslationKey = keyof typeof en;

export default locales;
