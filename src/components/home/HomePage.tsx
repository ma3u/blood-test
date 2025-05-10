
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
      <div className="text-center">
        <img 
          src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
          alt="Blood Test Oracle Logo" 
          className="w-40 h-40 mx-auto object-contain animate-fade-in"
          role="img"
        />
        <PageIntro
          title={getPageHeadline(language)}
          description={getPageDescription(language)}
          onLearnMoreClick={onLearnMoreClick}
        />
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
