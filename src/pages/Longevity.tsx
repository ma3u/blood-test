
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import PageIntro from "@/components/layout/PageIntro";
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
        <PageIntro 
          title="My Personal Journey to Longevity and Healthspan"
          description="Evidence-based approaches to extending both lifespan and healthspan"
        />

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <PersonalJourneySection />
          
          <Separator className="my-8" />
          
          <DiagnosticsSection />
          
          <Separator className="my-8" />
          
          <HabitsSection />
          
          <Separator className="my-8" />
          
          <LongevityFactorsSection />
          
          <ReferencesSection />
        </div>
      </div>
    </div>
  );
};

export default Longevity;
