
import React, { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";

const SUPPORTED_LANGUAGES = ["en", "de", "fr", "es", "ru", "zh", "ja"];

const Longevity = () => {
  const { language } = useLanguage();
  const [iframeError, setIframeError] = useState(false);

  const selectedLocale = useMemo(() => {
    return SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  }, [language]);

  // Fallback to English if the iframe fails to load (e.g., missing file)
  const getIframeSrc = () => {
    if (iframeError || !SUPPORTED_LANGUAGES.includes(language)) {
      return "/longevity/en.html";
    }
    return `/longevity/${selectedLocale}.html`;
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2] flex flex-col items-center justify-center">
      <SEOHead 
        title="Longevity Content"
        description="Localized longevity and healthspan guide."
      />
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-2 md:p-8 mt-8 mb-8">
        <iframe
          src={getIframeSrc()}
          title="Longevity Guide"
          className="w-full min-h-[80vh] border-0 rounded"
          onError={() => setIframeError(true)}
          aria-label="Longevity and Healthspan Guide"
        />
        {iframeError && (
          <div className="mt-4 text-red-600 text-center">
            Could not load the selected language. Showing English version instead.
          </div>
        )}
      </div>
    </div>
  );
};

export default Longevity;
