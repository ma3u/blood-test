
import React from "react";
import { BloodTestResult } from "@/lib/types";
import ResultsPanel from "@/components/ResultsPanel";
import { useLanguage } from "@/context/LanguageContext";

interface ResultsPageProps {
  results: BloodTestResult[];
  onBack: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onBack }) => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center mb-4">
        <img 
          src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
          alt="Blood Test Oracle Logo" 
          className="w-24 h-24 mx-auto object-contain"
          role="img"
        />
      </div>
      <ResultsPanel results={results} />
      <div className="mt-6 text-center">
        <button 
          onClick={onBack} 
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label={t("back.to.test")}
        >
          {t("back.to.test")}
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
