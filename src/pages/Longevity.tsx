import React from "react";
import { useTranslation } from 'react-i18next';
import SEOHead from "@/components/SEOHead";
import { Separator } from "@/components/ui/separator";
import PersonalJourneySection from "@/components/longevity/PersonalJourneySection";
import DiagnosticsSection from "@/components/longevity/DiagnosticsSection";
import LongevityFactorsSection from "@/components/longevity/LongevityFactorsSection";
import PracticalExamplesSection from "@/components/longevity/PracticalExamplesSection";
import ReferencesSection from "@/components/longevity/ReferencesSection";
import HabitsSection from "@/components/longevity/HabitsSection";
import ContributingSection from "@/components/longevity/ContributingSection";
import { useNavigate } from "react-router-dom";

const Longevity = () => {
  const { t } = useTranslation('longevity');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2] py-8 px-4">
      <SEOHead 
        title={t("longevity.title")}
        description={t("longevity.description")}
      />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-800">
            {t("longevity.title")}
          </h2>
          <button
            onClick={handleBackClick}
            className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={t("back.to.test")}
          >
            {t("back.to.test")}
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {/* Simplified top-level navigation */}
          <nav className="mb-8" aria-label={t("longevity.sections")}> 
            <ul className="flex flex-wrap gap-4 text-sm" role="list">
              <li><a href="#personal-journey" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.introduction")}</a></li>
              <li><a href="#diagnostics" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.diagnostics")}</a></li>
              <li><a href="#taking-action" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.taking_action")}</a></li>
              <li><a href="#factors" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.factors")}</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.practical")}</a></li>
              <li><a href="#references" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.references")}</a></li>
              <li><a href="#contributing" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">{t("longevity.sections.contributing")}</a></li>
            </ul>
          </nav>
          <section id="personal-journey" className="mb-8">
            <PersonalJourneySection />
          </section>
          <Separator className="my-8" />
          <section id="diagnostics" className="mb-8">
            <DiagnosticsSection />
          </section>
          <Separator className="my-8" />
          <section id="taking-action" className="mb-8">
            <HabitsSection />
          </section>
          <Separator className="my-8" />
          <section id="factors" className="mb-8">
            <LongevityFactorsSection />
          </section>
          <Separator className="my-8" />
          <section id="practical-examples" className="mb-8">
            <PracticalExamplesSection />
          </section>
          <Separator className="my-8" />
          <section id="references" className="mb-8">
            <ReferencesSection />
          </section>
          <Separator className="my-8" />
          <section id="contributing" className="mb-8">
            <ContributingSection />
          </section>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          aria-label={t("back.to.test")}
        >
          {t("back.to.test")}
        </button>
      </div>
    </div>
  );
};

export default Longevity;
