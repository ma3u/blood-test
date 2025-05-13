
import { useState, useEffect } from "react";
import { BloodTestResult } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Disclaimer from "@/components/Disclaimer";

import HomePage from "@/components/home/HomePage";
import ResultsPage from "@/components/home/ResultsPage";
import LoadingState from "@/components/home/LoadingState";
import ErrorState from "@/components/home/ErrorState";
import { getPageHeadline, getPageDescription } from "@/components/home/LanguageUtils";

const Index = () => {
  // Log that the component is initializing
  console.log("Index component initializing");
  
  const [results, setResults] = useState<BloodTestResult[] | null>(null);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [showLongevityContent, setShowLongevityContent] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Try to access language context (might be the source of the error)
  let languageContext;
  try {
    languageContext = useLanguage();
    console.log("Language context loaded successfully");
  } catch (err) {
    console.error("Error loading language context:", err);
    setError("Error loading language context");
  }
  
  const { language } = languageContext || { language: 'en' };
  
  // Set loaded state after component mounts to ensure client-side rendering
  useEffect(() => {
    console.log("Setting loaded state to true");
    try {
      setLoaded(true);
    } catch (err) {
      console.error("Error in useEffect:", err);
      setError("Error setting loaded state");
    }
  }, []);

  const handleTestResults = (testResults: BloodTestResult[]) => {
    try {
      setResults(testResults);
      console.log("Blood test results received, user could be prompted to register here");
    } catch (err) {
      console.error("Error in handleTestResults:", err);
      setError("Error processing test results");
    }
  };

  // Show error state if there's an error
  if (error) {
    return <ErrorState error={error} />;
  }

  // Show a loading state until the component is fully loaded
  if (!loaded) {
    console.log("Rendering loading state");
    return <LoadingState />;
  }

  console.log("Rendering main content");
  return (
    <div className="min-h-screen bg-[#FAF6E2]"> 
      <SEOHead 
        title={getPageHeadline(language)}
        description={getPageDescription(language)}
      />

      {/* Main content with skip link target */}
      <main id="main-content" className="container mx-auto py-4 px-3" tabIndex={-1}>
        {showLongevityContent ? (
          {/* Longevity content moved to /pages/Longevity.tsx */}
        ) : !results ? (
          <HomePage 
            onSubmit={handleTestResults} 
            onLearnMoreClick={() => setShowLongevityContent(true)}
            gender={gender}
          />
        ) : (
          <ResultsPage 
            results={results} 
            onBack={() => setResults(null)} 
          />
        )}

        {!showLongevityContent && <Disclaimer />}
      </main>
    </div>
  );
};

export default Index;
