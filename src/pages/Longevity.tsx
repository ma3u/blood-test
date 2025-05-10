
import React, { useMemo, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import EnhancedLongevityContent from "@/components/longevity/EnhancedLongevityContent";
import LongevityEn from "./LongevityEn";
import LongevityDe from "./LongevityDe";
import { useNavigate } from "react-router-dom";

const SUPPORTED_LANGUAGES = ["en", "de"];

const Longevity = () => {
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const selectedLocale = useMemo(() => {
    return SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  }, [language]);

  // Handle back button
  const handleBackClick = () => {
    navigate('/');
  };

  // Render the appropriate component based on language
  const renderContent = () => {
    switch (selectedLocale) {
      case "de":
        return <LongevityDe />;
      default:
        return <LongevityEn />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2] py-8 px-4">
      <SEOHead 
        title={t("longevity.title")}
        description={t("longevity.description")}
      />
      
      {renderContent()}

      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          aria-label={t("back.to.test")}
        >
          {t("back.to.test")}
        </button>
      </div>
    </div>
  );
};

export default Longevity;
