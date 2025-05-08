
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface PageIntroProps {
  title: string;
  description: string;
}

const PageIntro = ({ title, description }: PageIntroProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-6 text-center relative py-8">
      <div className="absolute inset-0 opacity-10 z-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
          alt="Blood Test Oracle Logo Background" 
          className="max-w-[90%] max-h-[90%] object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 bg-white bg-opacity-70 py-4 px-6 rounded-lg shadow-sm inline-block">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default PageIntro;
