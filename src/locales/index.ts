
import en from './en';
import de from './de/index';
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
  `longevity.mindBody.conclusion` |
  `longevity.practical.title` |
  `longevity.practical.introduction` |
  `longevity.practical.nutrition.title` |
  `longevity.practical.nutrition.keto.title` |
  `longevity.practical.nutrition.keto.what` |
  `longevity.practical.nutrition.keto.benefits` |
  `longevity.practical.nutrition.keto.how` |
  `longevity.practical.nutrition.hara.title` |
  `longevity.practical.nutrition.hara.what` |
  `longevity.practical.nutrition.hara.benefits` |
  `longevity.practical.nutrition.hara.how` |
  `longevity.practical.exercise.title` |
  `longevity.practical.exercise.endurance` |
  `longevity.practical.exercise.hiit` |
  `longevity.practical.exercise.strength` |
  `longevity.practical.mindbody.title` |
  `longevity.practical.mindbody.breathing.title` |
  `longevity.practical.mindbody.breathing.box` |
  `longevity.practical.mindbody.breathing.478` |
  `longevity.practical.mindbody.breathing.wim` |
  `longevity.practical.mindbody.cold.title` |
  `longevity.practical.mindbody.cold.showers` |
  `longevity.practical.mindbody.cold.progression` |
  `longevity.practical.mindbody.cold.benefits` |
  `longevity.practical.mindbody.meditation` |
  `longevity.practical.mindbody.running.title` |
  `longevity.practical.mindbody.running.mindful` |
  `longevity.practical.mindbody.running.benefits` |
  `longevity.practical.mindbody.running.practice` |
  `longevity.practical.mindbody.stress` |
  `longevity.sections` |
  `longevity.sections.taking_action` |
  `longevity.sections.factors` |
  `longevity.sections.contributing` |
  `back.to.test` |
  `blood.test.title` |
  `blood.test.submit` |
  `select.date` |
  `entry.methods` |
  `manual.entry` |
  `file.upload` |
  `blood-test.results_processed` |
  `blood-test.test_dates_found` |
  `blood-test.data_saved` |
  `blood-test.results_available_dashboard` |
  `blood-test.diagnostic_title` |
  `blood-test.diagnostic_description` |
  `blood-test.upload_results` |
  `blood-test.manual_entry` |
  `blood-test.extracted_values` |
  `blood-test.save_results` |
  `blood-test.manual_entry_title` |
  `blood-test.enter` |
  `reference.hematology` |
  `reference.hormones` |
  `reference.caption.hematology` |
  `reference.caption.hormones` |
  `gender.male` |
  `gender.female`;

export default locales;
