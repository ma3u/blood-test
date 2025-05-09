
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
export type TranslationKey = keyof typeof en | 
  `longevity.sections.${string}` |
  `longevity.title` | 
  `longevity.description` | 
  `longevity.back.to.top` | 
  `longevity.mindBody.title` |
  `longevity.mindBody.introduction` |
  `longevity.mindBody.stressReduction.title` |
  `longevity.mindBody.stressReduction.intro` |
  `longevity.mindBody.stressReduction.meditation` |
  `longevity.mindBody.stressReduction.breathwork` |
  `longevity.mindBody.stressReduction.yoga` |
  `longevity.mindBody.stressReduction.nature` |
  `longevity.mindBody.sleepOptimization.title` |
  `longevity.mindBody.sleepOptimization.intro` |
  `longevity.mindBody.sleepOptimization.circadian` |
  `longevity.mindBody.sleepOptimization.environment` |
  `longevity.mindBody.sleepOptimization.tracking` |
  `longevity.mindBody.coldExposure.title` |
  `longevity.mindBody.coldExposure.intro` |
  `longevity.mindBody.coldExposure.benefits` |
  `longevity.mindBody.coldExposure.practice` |
  `longevity.mindBody.coldExposure.research` |
  `longevity.mindBody.social.title` |
  `longevity.mindBody.social.intro` |
  `longevity.mindBody.social.community` |
  `longevity.mindBody.social.purpose` |
  `longevity.mindBody.social.gratitude` |
  `longevity.mindBody.conclusion`;

export default locales;
