
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const PracticalExamplesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        {t("longevity.practical.title")}
      </h3>
      <p className="mb-4">
        {t("longevity.practical.introduction")}
      </p>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.practical.nutrition.title")}
      </h4>
      <p className="mb-2"><strong>{t("longevity.practical.nutrition.keto.title")}</strong></p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>What it is:</strong> {t("longevity.practical.nutrition.keto.what")}</li>
        <li><strong>Benefits:</strong> {t("longevity.practical.nutrition.keto.benefits")}</li>
        <li><strong>How to implement:</strong> {t("longevity.practical.nutrition.keto.how")}</li>
      </ul>

      <p className="mb-2"><strong>{t("longevity.practical.nutrition.hara.title")}</strong></p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>What it is:</strong> {t("longevity.practical.nutrition.hara.what")}</li>
        <li><strong>Benefits:</strong> {t("longevity.practical.nutrition.hara.benefits")}</li>
        <li><strong>How to implement:</strong> {t("longevity.practical.nutrition.hara.how")}</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.practical.exercise.title")}
      </h4>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>Endurance (Running, Walking, Cycling):</strong> {t("longevity.practical.exercise.endurance")}</li>
        <li><strong>High-Intensity Interval Training (HIIT):</strong> {t("longevity.practical.exercise.hiit")}</li>
        <li><strong>Strength Training:</strong> {t("longevity.practical.exercise.strength")}</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.practical.mindbody.title")}
      </h4>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>{t("longevity.practical.mindbody.breathing.title")}:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Box Breathing:</strong> {t("longevity.practical.mindbody.breathing.box")}</li>
            <li><strong>4-7-8 Breathing:</strong> {t("longevity.practical.mindbody.breathing.478")}</li>
            <li><strong>Wim Hof Method:</strong> {t("longevity.practical.mindbody.breathing.wim")}</li>
          </ul>
        </li>
        <li><strong>{t("longevity.practical.mindbody.cold.title")}:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Cold Showers:</strong> {t("longevity.practical.mindbody.cold.showers")}</li>
            <li><strong>Gradual Progression:</strong> {t("longevity.practical.mindbody.cold.progression")}</li>
            <li><strong>Benefits:</strong> {t("longevity.practical.mindbody.cold.benefits")}</li>
          </ul>
        </li>
        <li><strong>Meditation and Mindfulness:</strong> {t("longevity.practical.mindbody.meditation")}</li>
        <li><strong>{t("longevity.practical.mindbody.running.title")}:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Mindful Movement:</strong> {t("longevity.practical.mindbody.running.mindful")}</li>
            <li><strong>Benefits:</strong> {t("longevity.practical.mindbody.running.benefits")}</li>
            <li><strong>Practice:</strong> {t("longevity.practical.mindbody.running.practice")}</li>
          </ul>
        </li>
        <li><strong>Other Stress Management:</strong> {t("longevity.practical.mindbody.stress")}</li>
      </ul>
    </div>
  );
};

export default PracticalExamplesSection;
