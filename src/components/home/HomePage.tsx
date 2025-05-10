
import React from "react";
import { BloodTestResult } from "@/lib/types";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import PageIntro from "@/components/layout/PageIntro";
import { useLanguage } from "@/context/LanguageContext";
import { getPageHeadline, getPageDescription } from "./LanguageUtils";

interface HomePageProps {
  onSubmit: (results: BloodTestResult[]) => void;
  onLearnMoreClick: () => void;
  gender: "male" | "female";
}

const HomePage: React.FC<HomePageProps> = ({ onSubmit, onLearnMoreClick, gender }) => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img 
            src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
            alt="Blood Test Oracle Logo" 
            className="w-32 h-32 object-contain animate-fade-in"
            role="img"
          />
        </div>
        <div className="md:w-2/3">
          <PageIntro
            title={getPageHeadline(language)}
            description={getPageDescription(language)}
            onLearnMoreClick={onLearnMoreClick}
            compact={true}
          />
        </div>
      </div>

      <BloodTestContainer 
        onSubmit={onSubmit} 
        userId="anonymous-user" 
        gender={gender}
      />
    </div>
  );
};

export default HomePage;
