
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const MindBodySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        {t("longevity.mindBody.title")}
      </h3>
      <p className="mb-4">
        {t("longevity.mindBody.introduction")}
      </p>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.stressReduction.title")}
      </h4>
      <p className="mb-2">{t("longevity.mindBody.stressReduction.intro")}</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>Meditation:</strong>{" "}
          {t("longevity.mindBody.stressReduction.meditation")}
        </li>
        <li>
          <strong>Breathwork:</strong>{" "}
          {t("longevity.mindBody.stressReduction.breathwork")}
        </li>
        <li>
          <strong>Yoga:</strong>{" "}
          {t("longevity.mindBody.stressReduction.yoga")}
        </li>
        <li>
          <strong>Nature Exposure:</strong>{" "}
          {t("longevity.mindBody.stressReduction.nature")}
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.sleepOptimization.title")}
      </h4>
      <p className="mb-2">{t("longevity.mindBody.sleepOptimization.intro")}</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>Circadian Rhythm Alignment:</strong>{" "}
          {t("longevity.mindBody.sleepOptimization.circadian")}
        </li>
        <li>
          <strong>Sleep Environment:</strong>{" "}
          {t("longevity.mindBody.sleepOptimization.environment")}
        </li>
        <li>
          <strong>Sleep Tracking:</strong>{" "}
          {t("longevity.mindBody.sleepOptimization.tracking")}
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.coldExposure.title")}
      </h4>
      <p className="mb-2">{t("longevity.mindBody.coldExposure.intro")}</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>Benefits:</strong>{" "}
          {t("longevity.mindBody.coldExposure.benefits")}
        </li>
        <li>
          <strong>Practice:</strong>{" "}
          {t("longevity.mindBody.coldExposure.practice")}
        </li>
        <li>
          <strong>Research:</strong>{" "}
          {t("longevity.mindBody.coldExposure.research")}
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        {t("longevity.mindBody.social.title")}
      </h4>
      <p className="mb-2">{t("longevity.mindBody.social.intro")}</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>
          <strong>Community Integration:</strong>{" "}
          {t("longevity.mindBody.social.community")}
        </li>
        <li>
          <strong>Purpose & Meaning:</strong>{" "}
          {t("longevity.mindBody.social.purpose")}
        </li>
        <li>
          <strong>Gratitude Practice:</strong>{" "}
          {t("longevity.mindBody.social.gratitude")}
        </li>
      </ul>

      <p className="mt-6 italic">
        {t("longevity.mindBody.conclusion")}
      </p>
    </div>
  );
};

export default MindBodySection;
