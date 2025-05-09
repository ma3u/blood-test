
import React from "react";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { enhanceAccessibility } from "@/lib/accessibilityUtils";
import { Separator } from "@/components/ui/separator";
import PersonalJourneySection from "@/components/longevity/PersonalJourneySection";
import DiagnosticsSection from "@/components/longevity/DiagnosticsSection";
import LongevityFactorsSection from "@/components/longevity/LongevityFactorsSection";
import PracticalExamplesSection from "@/components/longevity/PracticalExamplesSection";
import ReferencesSection from "@/components/longevity/ReferencesSection";
import HabitsSection from "@/components/longevity/HabitsSection";
import MindBodySection from "@/components/longevity/MindBodySection";

const LongevityEn = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title="My Personal Journey to Longevity and Healthspan"
        description="A comprehensive, evidence-based guide to diagnostics, habits, and routines for maximum lifespan and health."
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
              My Personal Journey to Longevity and Healthspan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A comprehensive, evidence-based approach to optimizing my biological age through diagnostics, habits, and mindset.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <nav className="mb-8" aria-label="Page sections">
            <ul className="flex flex-wrap gap-4 text-sm" role="list">
              <li><a href="#personal-journey" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Personal Journey</a></li>
              <li><a href="#diagnostics" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Diagnostics & Self-Tracking</a></li>
              <li><a href="#taking-action" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Taking Action</a></li>
              <li><a href="#factors" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Longevity Factors</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Practical Examples</a></li>
              <li><a href="#references" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">References</a></li>
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
              Back to top
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongevityEn;
