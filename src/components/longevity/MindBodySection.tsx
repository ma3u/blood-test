
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const MindBodySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        {t("longevity.mindBody.title") || "Mind-Body Practices for Longevity"}
      </h3>
      <p className="mb-4">
        {t("longevity.mindBody.intro") || 
          "The mind-body connection is increasingly recognized as critical for both healthspan and lifespan. Modern research confirms what ancient traditions have taught for millennia: mind-body practices significantly impact biological pathways related to aging."}
      </p>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.stressReduction.title") || "1. Stress Reduction Practices"}
      </h4>
      <p className="mb-2">
        {t("longevity.mindBody.stressReduction.intro") || "Chronic psychological stress accelerates cellular aging and weakens immunity:"}
      </p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>{t("longevity.mindBody.stressReduction.meditation.title") || "Meditation:"}</strong>{" "}
          {t("longevity.mindBody.stressReduction.meditation.description") || 
            "Regular mindfulness meditation (15+ minutes daily) has been scientifically associated with telomere maintenance and reduced inflammatory markers. A 2018 meta-analysis showed it significantly reduces cortisol levels."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.stressReduction.breathwork.title") || "Breathwork:"}</strong>{" "}
          {t("longevity.mindBody.stressReduction.breathwork.description") || 
            "Techniques like box breathing, 4-7-8 breathing, and the Wim Hof method regulate autonomic nervous system function, reducing stress and improving physiological resilience. Just 5-10 minutes of deliberate breathing practice can shift nervous system state."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.stressReduction.yoga.title") || "Yoga:"}</strong>{" "}
          {t("longevity.mindBody.stressReduction.yoga.description") || 
            "Combines movement, breathwork, and mindfulness. Research shows regular practice (2+ times weekly) reduces inflammatory markers and improves stress resilience. Particularly beneficial styles include Hatha, Yin, and Restorative yoga."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.stressReduction.nature.title") || "Nature Exposure:"}</strong>{" "}
          {t("longevity.mindBody.stressReduction.nature.description") || 
            "Just 20-30 minutes in natural environments significantly lowers cortisol. Japanese 'forest bathing' (shinrin-yoku) studies show enhanced natural killer cell activity lasting up to 30 days after exposure."}
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.sleepOptimization.title") || "2. Sleep Optimization"}
      </h4>
      <p className="mb-2">
        {t("longevity.mindBody.sleepOptimization.intro") || "Sleep quality directly impacts every biomarker of aging:"}
      </p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>{t("longevity.mindBody.sleepOptimization.circadianRhythm.title") || "Circadian Rhythm Alignment:"}</strong>{" "}
          {t("longevity.mindBody.sleepOptimization.circadianRhythm.description") || 
            "Consistent sleep/wake times, even on weekends, optimize hormone production. Morning sunlight exposure (within 30-60 minutes of waking) helps regulate melatonin production."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.sleepOptimization.environment.title") || "Sleep Environment:"}</strong>{" "}
          {t("longevity.mindBody.sleepOptimization.environment.description") || 
            "Cool temperatures (65-68°F/18-20°C), complete darkness, and reduced EMF exposure create optimal sleep conditions. Use blue light blocking after sunset."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.sleepOptimization.tracking.title") || "Sleep Tracking:"}</strong>{" "}
          {t("longevity.mindBody.sleepOptimization.tracking.description") || 
            "Using Oura Ring or similar devices to monitor deep sleep, REM sleep, and HRV during sleep provides objective data for optimization. Target 7-9 hours with 1.5-2 hours of deep sleep."}
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.coldExposure.title") || "3. Hormetic Stressors: Cold Exposure"}
      </h4>
      <p className="mb-2">
        {t("longevity.mindBody.coldExposure.intro") || 
          "Hormesis refers to beneficial adaptations that occur when the body is exposed to mild stressors:"}
      </p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>{t("longevity.mindBody.coldExposure.benefits.title") || "Benefits:"}</strong>{" "}
          {t("longevity.mindBody.coldExposure.benefits.description") || 
            "Cold exposure activates brown adipose tissue, increases adiponectin, improves insulin sensitivity, and triggers norepinephrine release which improves mood and reduces inflammation."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.coldExposure.practice.title") || "Practice:"}</strong>{" "}
          {t("longevity.mindBody.coldExposure.practice.description") || 
            "Start with 30-second cold showers, gradually building to 2-3 minutes, 3-4 times weekly. More advanced practitioners can explore ice baths (5-10 minutes at 50-59°F/10-15°C)."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.coldExposure.research.title") || "Research:"}</strong>{" "}
          {t("longevity.mindBody.coldExposure.research.description") || 
            "Regular cold exposure shows promising results for increasing metabolism, reducing inflammation, and activating longevity-promoting cellular pathways."}
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.social.title") || "4. Social Connection & Purpose"}
      </h4>
      <p className="mb-2">
        {t("longevity.mindBody.social.intro") || "Often overlooked but critically important longevity factors:"}
      </p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>{t("longevity.mindBody.social.community.title") || "Community Integration:"}</strong>{" "}
          {t("longevity.mindBody.social.community.description") || 
            "Blue Zone research shows that regular social interaction and community belonging are among the strongest predictors of longevity. Schedule regular meaningful social connection."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.social.purpose.title") || "Purpose & Meaning:"}</strong>{" "}
          {t("longevity.mindBody.social.purpose.description") || 
            "The Japanese concept of 'ikigai' (reason for being) correlates with longer lifespan. Those with a clear purpose show reduced all-cause mortality in longitudinal studies."}
        </li>
        <li>
          <strong>{t("longevity.mindBody.social.gratitude.title") || "Gratitude Practice:"}</strong>{" "}
          {t("longevity.mindBody.social.gratitude.description") || 
            "Regular gratitude journaling has been shown to improve heart rate variability, reduce inflammation, and enhance psychological wellbeing—all factors that contribute to longevity."}
        </li>
      </ul>

      <p className="mt-6 italic">
        {t("longevity.mindBody.conclusion") || 
          "These mind-body practices represent some of the highest-leverage and lowest-cost interventions available for extending both lifespan and healthspan. Incorporating even a few of these practices consistently can yield significant benefits over time."}
      </p>
    </div>
  );
};

export default MindBodySection;
