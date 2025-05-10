
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { enhanceAccessibility } from "@/lib/accessibilityUtils";
import PersonalJourneySection from "@/components/longevity/PersonalJourneySection";
import DiagnosticsSection from "@/components/longevity/DiagnosticsSection";
import LongevityFactorsSection from "@/components/longevity/LongevityFactorsSection";
import PracticalExamplesSection from "@/components/longevity/PracticalExamplesSection";
import ReferencesSection from "@/components/longevity/ReferencesSection";
import HabitsSection from "@/components/longevity/HabitsSection";
import ContributingSection from "@/components/longevity/ContributingSection";

interface EnhancedLongevityContentProps {
  onBackClick: () => void;
}

const EnhancedLongevityContent: React.FC<EnhancedLongevityContentProps> = ({ onBackClick }) => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-800">
          {t("longevity.title")}
        </h2>
        <button
          onClick={onBackClick}
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
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            {...enhanceAccessibility({ role: "button" })}
          >
            {t("longevity.back.to.top")}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLongevityContent;
