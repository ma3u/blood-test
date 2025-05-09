
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/components/SEOHead";
import PersonalJourneySection from "@/components/longevity/PersonalJourneySection";
import DiagnosticsSection from "@/components/longevity/DiagnosticsSection";
import HabitsSection from "@/components/longevity/HabitsSection";
import LongevityFactorsSection from "@/components/longevity/LongevityFactorsSection";
import ReferencesSection from "@/components/longevity/ReferencesSection";

const Longevity = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title="My Personal Journey to Longevity and Healthspan"
        description="Insights on longevity, healthspan, and evidence-based lifestyle practices for optimal health and well-being."
      />

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
              alt="Blood Test Oracle Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              My Personal Journey to Longevity and Healthspan
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl text-center">
            Evidence-based approaches to extending both lifespan and healthspan
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#personal-journey" className="text-blue-600 hover:underline">Personal Journey</a></li>
              <li><a href="#diagnostics" className="text-blue-600 hover:underline">Proactive Diagnostics</a></li>
              <li><a href="#habits" className="text-blue-600 hover:underline">Habits</a></li>
              <li><a href="#longevity-factors" className="text-blue-600 hover:underline">Longevity Factors</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">References</a></li>
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
          
          <section id="longevity-factors">
            <LongevityFactorsSection />
          </section>
          
          <Separator className="my-8" />
          
          <ReferencesSection />

          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Longevity;
