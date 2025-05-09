
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";

const Longevity = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check if we're already on a language-specific page
    if (location.pathname === "/longevityEn" || location.pathname === "/longevityDe") {
      return;
    }

    // Redirect based on the user's language
    if (language === 'de') {
      navigate('/longevityDe');
    } else {
      // Default to English for all other languages
      navigate('/longevityEn');
    }
  }, [language, navigate, location.pathname]);

  // This component will only be visible briefly before redirect
  return (
    <div className="min-h-screen bg-[#FAF6E2] flex flex-col items-center justify-center">
      <SEOHead 
        title="Longevity Content"
        description="Redirecting to your language-specific longevity page."
      />
      <div className="bg-white rounded-lg shadow-md p-8 mt-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Redirecting...</h1>
      </div>
    </div>
  );
};

export default Longevity;
