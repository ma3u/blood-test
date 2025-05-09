
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import PositiveFactorsTable from "./PositiveFactorsTable";
import NegativeFactorsTable from "./NegativeFactorsTable";
import CombinedEffectsTable from "./CombinedEffectsTable";
import PracticalExamplesSection from "./PracticalExamplesSection";

const LongevityFactorsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Factors Influencing Longevity and Healthspan: Evidence-Based Overview</h2>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Key Findings Summary</h3>
      <p className="mb-4">Below is a comprehensive analysis of critical factors, their quantified impacts, and supporting evidence.</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Positive Factors Enhancing Longevity and Healthspan</h3>
      <PositiveFactorsTable />

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Negative Factors Reducing Longevity and Healthspan</h3>
      <NegativeFactorsTable />

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Combined Effects & Healthspan-Lifespan Gap</h3>
      <CombinedEffectsTable />

      <PracticalExamplesSection />
    </section>
  );
};

export default LongevityFactorsSection;
