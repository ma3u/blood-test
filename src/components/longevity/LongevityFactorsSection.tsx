
import React from "react";
import { Separator } from "@/components/ui/separator";
import PositiveFactorsTable from "./PositiveFactorsTable";
import NegativeFactorsTable from "./NegativeFactorsTable";
import CombinedEffectsTable from "./CombinedEffectsTable";

const LongevityFactorsSection: React.FC = () => {
  return (
    <>
      <h2 id="longevity-factors-title" className="text-2xl font-bold text-blue-800 mb-4">
        Factors Influencing Longevity and Healthspan: Evidence-Based Overview
      </h2>
      
      <p className="mb-4 text-gray-700">
        The average disparity between lifespan and healthspan is ~9 years, with individuals spending 
        nearly 20% of life with morbidity. Addressing modifiable factors (e.g., smoking, diet) is critical 
        to closing this gap.
      </p>
      
      <p className="mb-6 text-gray-700">
        Below is a comprehensive analysis of critical factors, their quantified impacts, and supporting evidence.
      </p>

      <h3 id="positive-factors" className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        Positive Factors Enhancing Longevity and Healthspan
      </h3>
      <div className="overflow-x-auto mb-8">
        <PositiveFactorsTable />
      </div>

      <h3 id="negative-factors" className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        Negative Factors Reducing Longevity and Healthspan
      </h3>
      <div className="overflow-x-auto mb-8">
        <NegativeFactorsTable />
      </div>

      <h3 id="combined-effects" className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        Quantified Combined Effects
      </h3>
      <div className="overflow-x-auto">
        <CombinedEffectsTable />
      </div>
    </>
  );
};

export default LongevityFactorsSection;
