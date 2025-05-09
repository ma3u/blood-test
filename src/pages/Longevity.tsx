
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

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title={t("longevity.title")}
        description={t("longevity.description")}
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
              {t("longevity.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t("longevity.description")}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <nav className="mb-8" aria-label="Page sections">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#personal-journey" className="text-blue-600 hover:underline">{t("longevity.sections.journey")}</a></li>
              <li><a href="#diagnostics" className="text-blue-600 hover:underline">{t("longevity.sections.diagnostics")}</a></li>
              <li><a href="#habits" className="text-blue-600 hover:underline">{t("longevity.sections.habits")}</a></li>
              <li><a href="#mind-body" className="text-blue-600 hover:underline">{t("longevity.sections.mindBody")}</a></li>
              <li><a href="#longevity-factors" className="text-blue-600 hover:underline">{t("longevity.sections.factors")}</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:underline">{t("longevity.sections.practical")}</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">{t("references")}</a></li>
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
          
          <section id="longevity-factors">
            <LongevityFactorsSection />
          </section>
          
          <Separator className="my-8" />
          
          <section id="practical-examples">
            <PracticalExamplesSection />
          </section>
          
          <Separator className="my-8" />
          
          <ReferencesSection />

          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              aria-label="Return to the top of the page"
            >
              {t("longevity.back.to.top")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Longevity;
