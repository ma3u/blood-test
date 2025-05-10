
import React from "react";
import SEOHead from "@/components/SEOHead";
import { Separator } from "@/components/ui/separator";
import { enhanceAccessibility } from "@/lib/accessibilityUtils";
import PersonalJourneySectionDe from "@/components/longevity/PersonalJourneySectionDe";
import DiagnosticsSectionDe from "@/components/longevity/DiagnosticsSectionDe";
import HabitsSectionDe from "@/components/longevity/HabitsSectionDe";
import LongevityFactorsSectionDe from "@/components/longevity/LongevityFactorsSectionDe";
import PracticalExamplesSectionDe from "@/components/longevity/PracticalExamplesSectionDe";
import ReferencesSectionDe from "@/components/longevity/ReferencesSectionDe";
import MindBodySectionDe from "@/components/longevity/MindBodySectionDe";
import ContributingSectionDe from "@/components/longevity/ContributingSectionDe";
import { useLanguage } from "@/context/LanguageContext";

const LongevityDe = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title="Meine persönliche Reise zu Langlebigkeit und Gesundheit"
        description="Ein umfassender, evidenzbasierter Leitfaden zu Diagnostik, Gewohnheiten und Routinen für maximale Lebensdauer und Gesundheit."
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
              Meine persönliche Reise zu Langlebigkeit und Gesundheit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Ein umfassender, evidenzbasierter Ansatz zur Optimierung meines biologischen Alters durch Diagnostik, Gewohnheiten und Einstellung.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <nav className="mb-8" aria-label="Seitenabschnitte">
            <ul className="flex flex-wrap gap-4 text-sm" role="list">
              <li><a href="#persoenliche-reise" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Persönliche Reise</a></li>
              <li><a href="#diagnostik" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Diagnostik & Selbstverfolgung</a></li>
              <li><a href="#handeln" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Handeln</a></li>
              <li><a href="#faktoren" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Langlebigkeitsfaktoren</a></li>
              <li><a href="#geist-koerper" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Geist-Körper</a></li>
              <li><a href="#praktische-beispiele" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Praktische Beispiele</a></li>
              <li><a href="#referenzen" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Referenzen</a></li>
              <li><a href="#mitwirken" className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1">Mitwirken</a></li>
            </ul>
          </nav>

          <section id="persoenliche-reise" className="mb-8">
            <PersonalJourneySectionDe />
          </section>

          <Separator className="my-8" />
          
          <section id="diagnostik" className="mb-8">
            <DiagnosticsSectionDe />
          </section>

          <Separator className="my-8" />

          <section id="handeln" className="mb-8">
            <HabitsSectionDe />
          </section>

          <Separator className="my-8" />

          <section id="faktoren" className="mb-8">
            <LongevityFactorsSectionDe />
          </section>

          <Separator className="my-8" />

          <section id="geist-koerper" className="mb-8">
            <MindBodySectionDe />
          </section>

          <Separator className="my-8" />

          <section id="praktische-beispiele" className="mb-8">
            <PracticalExamplesSectionDe />
          </section>

          <Separator className="my-8" />

          <section id="referenzen" className="mb-8">
            <ReferencesSectionDe />
          </section>

          <Separator className="my-8" />

          <section id="mitwirken" className="mb-8">
            <ContributingSectionDe />
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
              Zurück nach oben
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

export default LongevityDe;
