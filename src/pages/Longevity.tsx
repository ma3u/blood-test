
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/components/SEOHead";
import PersonalJourneySection from "@/components/longevity/PersonalJourneySection";
import DiagnosticsSection from "@/components/longevity/DiagnosticsSection";
import HabitsSection from "@/components/longevity/HabitsSection";
import LongevityFactorsSection from "@/components/longevity/LongevityFactorsSection";
import ReferencesSection from "@/components/longevity/ReferencesSection";
import MindBodySection from "@/components/longevity/MindBodySection";
import PracticalExamplesSection from "@/components/longevity/PracticalExamplesSection";

const Longevity = () => {
  const { t } = useLanguage();

  // Translations for page sections
  const translations = {
    pageTitle: t("longevity.title") || "My Personal Journey to Longevity and Healthspan",
    pageDescription: t("longevity.description") || "Insights on longevity, healthspan, and evidence-based lifestyle practices for optimal health and well-being.",
    personalJourney: t("longevity.sections.journey") || "Personal Journey",
    proactiveDiagnostics: t("longevity.sections.diagnostics") || "Proactive Diagnostics",
    habits: t("longevity.sections.habits") || "Habits",
    mindBody: t("longevity.sections.mindBody") || "Mind-Body",
    practicalExamples: t("longevity.sections.practicalExamples") || "Practical Examples",
    longevityFactors: t("longevity.sections.factors") || "Longevity Factors",
    references: t("references") || "References",
    backToTop: t("longevity.back.to.top") || "Back to top"
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title={translations.pageTitle}
        description={translations.pageDescription}
      />

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
              alt="Blood Test Oracle Logo" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {translations.pageTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {translations.pageDescription}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <nav className="mb-8" aria-label="Page sections">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#personal-journey" className="text-blue-600 hover:underline">{translations.personalJourney}</a></li>
              <li><a href="#diagnostics" className="text-blue-600 hover:underline">{translations.proactiveDiagnostics}</a></li>
              <li><a href="#habits" className="text-blue-600 hover:underline">{translations.habits}</a></li>
              <li><a href="#mind-body" className="text-blue-600 hover:underline">{translations.mindBody}</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:underline">{translations.practicalExamples}</a></li>
              <li><a href="#longevity-factors" className="text-blue-600 hover:underline">{translations.longevityFactors}</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">{translations.references}</a></li>
            </ul>
          </nav>
          
          <section id="personal-journey">
            <PersonalJourneySection />
          </section>
          
          <Separator className="my-8" />
          
          <section id="diagnostics">
            <DiagnosticsSection />
          </section>
          
          <Separator className="my-8" />
          
          <section id="habits">
            <HabitsSection />
          </section>
          
          <Separator className="my-8" />
          
          <section id="mind-body">
            <MindBodySection />
          </section>
          
          <Separator className="my-8" />
          
          <section id="practical-examples">
            <PracticalExamplesSection />
          </section>
          
          <Separator className="my-8" />
          
          <section id="longevity-factors">
            <LongevityFactorsSection />
          </section>
          
          <Separator className="my-8" />
          
          <ReferencesSection />

          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              aria-label="Return to the top of the page"
            >
              {translations.backToTop}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Longevity;
