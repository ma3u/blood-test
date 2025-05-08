
import React from "react";

interface PageIntroProps {
  title: string;
  description: string;
}

const PageIntro = ({ title, description }: PageIntroProps) => {
  return (
    <div className="mb-4 text-center relative">
      <div className="absolute inset-0 opacity-10 z-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
          alt="Blood Test Oracle Logo Background" 
          className="max-w-[80%] max-h-[80%] object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PageIntro;
