
import en from './en';
import de from './de';
import fr from './fr';
import es from './es';
import ru from './ru';
import zh from './zh';
import ja from './ja';

const locales = {
  en,
  de,
  fr,
  es,
  ru,
  zh,
  ja
};

export type SupportedLanguage = keyof typeof locales;
export type TranslationKey = keyof typeof en;

export default locales;
