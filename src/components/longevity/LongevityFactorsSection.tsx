
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import PositiveFactorsTable from "./PositiveFactorsTable";
import NegativeFactorsTable from "./NegativeFactorsTable";
import CombinedEffectsTable from "./CombinedEffectsTable";

const LongevityFactorsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h2 id="longevity-factors-title" className="text-2xl font-bold text-blue-800 mb-4">Factors Influencing Longevity and Healthspan: Evidence-Based Overview</h2>
      
      <h3 id="key-findings" className="text-xl font-semibold text-blue-700 mt-6 mb-3">Key Findings Summary</h3>
      <p className="mb-4">Below is a comprehensive analysis of critical factors, their quantified impacts, and supporting evidence.</p>

      <h3 id="positive-factors" className="text-xl font-semibold text-blue-700 mt-6 mb-3">Positive Factors Enhancing Longevity and Healthspan</h3>
      <div className="overflow-x-auto">
        <PositiveFactorsTable />
      </div>

      <h3 id="negative-factors" className="text-xl font-semibold text-blue-700 mt-6 mb-3">Negative Factors Reducing Longevity and Healthspan</h3>
      <div className="overflow-x-auto">
        <NegativeFactorsTable />
      </div>

      <h3 id="combined-effects" className="text-xl font-semibold text-blue-700 mt-6 mb-3">Combined Effects & Healthspan-Lifespan Gap</h3>
      <div className="overflow-x-auto">
        <CombinedEffectsTable />
      </div>
    </section>
  );
};

export default LongevityFactorsSection;
