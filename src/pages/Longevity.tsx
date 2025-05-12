
import React, { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import EnhancedLongevityContent from "@/components/longevity/EnhancedLongevityContent";
import { useNavigate } from "react-router-dom";

const Longevity = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2] py-8 px-4">
      <SEOHead 
        title={t("longevity.title")}
        description={t("longevity.description")}
      />
      <EnhancedLongevityContent onBackClick={handleBackClick} />
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
