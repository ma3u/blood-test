
import React, { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";

const SUPPORTED_LANGUAGES = ["en", "de", "fr", "es", "ru", "zh", "ja"];

const Longevity = () => {
  const { language } = useLanguage();
  const [iframeError, setIframeError] = useState(false);
  const [open, setOpen] = useState(false);

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

  // Accessibility: close on ESC
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Accessibility: focus trap for modal
  const modalRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus();
    }
  }, [open]);

  return (
    <div className="min-h-screen bg-[#FAF6E2] flex flex-col items-center justify-center">
      <SEOHead 
        title="Longevity Content"
        description="Localized longevity and healthspan guide."
      />
      <button
        className="mt-16 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-controls="longevity-modal"
      >
        Open Longevity Guide
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          id="longevity-modal"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg shadow-lg flex flex-col outline-none"
            ref={modalRef}
            tabIndex={0}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-2xl font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setOpen(false)}
              aria-label="Close longevity guide"
            >
              &times;
            </button>
            <iframe
              src={getIframeSrc()}
              title="Longevity Guide"
              className="w-full h-full border-0 rounded-b-lg"
              onError={() => setIframeError(true)}
              aria-label="Longevity and Healthspan Guide"
            />
            {iframeError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-red-600 text-center font-semibold">
                Could not load the selected language. Showing English version instead.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Longevity;
