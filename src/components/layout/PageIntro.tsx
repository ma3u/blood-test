
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { InfoIcon } from "lucide-react";

interface PageIntroProps {
  title: string;
  description: string;
  onLearnMoreClick?: () => void;
  compact?: boolean;
}

const PageIntro = ({ title, description, onLearnMoreClick, compact = false }: PageIntroProps) => {
  const { t } = useLanguage();

  return (
    <div className={`${compact ? 'text-left py-2' : 'text-center py-8'} mb-2 relative`}>
      {!compact && (
        <div className="absolute inset-0 opacity-10 z-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
            alt="Blood Test Oracle Logo Background" 
            className="max-w-[90%] max-h-[90%] object-contain"
            aria-hidden="true"
          />
        </div>
      )}
      <div className={`relative z-10 ${compact ? '' : 'bg-white bg-opacity-70 py-4 px-6 rounded-lg shadow-sm inline-block'}`}>
        <h2 className={`${compact ? 'text-2xl' : 'text-3xl'} font-bold text-gray-800 mb-2`}>{title}</h2>
        <p className="text-gray-600 text-lg">{description}</p>
        
        {onLearnMoreClick && (
          <button
            className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700 p-0 bg-transparent border-0 mt-2"
            onClick={onLearnMoreClick}
            aria-label={`${t("learn.more")} about Blood Test Oracle`}
          >
            <InfoIcon className="h-4 w-4" aria-hidden="true" />
            <span className="underline">{t("learn.more")}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PageIntro;
