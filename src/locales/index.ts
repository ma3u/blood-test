
import en from './en';
import de from './de';
import fr from './fr';
import es from './es';

const locales = {
  en,
  de,
  fr,
  es
};

export type SupportedLanguage = keyof typeof locales;
export type TranslationKey = keyof typeof en;

export default locales;
