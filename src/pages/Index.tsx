import { useState, useEffect } from "react";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import ResultsPanel from "@/components/ResultsPanel";
import Disclaimer from "@/components/Disclaimer";
import { BloodTestResult } from "@/lib/types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { Separator } from "@/components/ui/separator";
import EnhancedLongevityContent from "@/components/longevity/EnhancedLongevityContent";
import PageIntro from "@/components/layout/PageIntro";

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
  
  const { t, language } = languageContext || { t: (key: string) => key, language: 'en' };
  
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
  
  // Language-specific headlines and descriptions
  const getPageHeadline = () => {
    try {
      switch (language) {
        case 'de':
          return "Bluttest-Analyse";
        case 'fr':
          return "Analyse de Test Sanguin";
        case 'es':
          return "Análisis de Prueba de Sangre";
        case 'ru':
          return "Анализ крови";
        case 'zh':
          return "血液测试分析";
        case 'ja':
          return "血液検査分析";
        default:
          return "Blood Test Analysis";
      }
    } catch (err) {
      console.error("Error in getPageHeadline:", err);
      return "Blood Test Analysis";
    }
  };

  const getPageDescription = () => {
    try {
      switch (language) {
        case 'de':
          return "Geben Sie Ihre Blutwerte ein oder laden Sie Testergebnisse für eine sofortige Analyse und Interpretation hoch";
        case 'fr':
          return "Entrez vos valeurs de test sanguin ou téléchargez les résultats pour une analyse et une interprétation instantanées";
        case 'es':
          return "Ingrese sus valores de prueba de sangre o cargue resultados para un análisis e interpretación inmediatos";
        case 'ru':
          return "Введите результаты анализа крови или загрузите их для мгновенного анализа и интерпретации";
        case 'zh':
          return "输入您的血液测试值或上传测试结果以获取即时分析和解释";
        case 'ja':
          return "血液検査値を入力するか、テスト結果をアップロードして即時分析と解釈を得る";
        default:
          return "Enter your blood test values or upload test results for instant analysis and interpretation";
      }
    } catch (err) {
      console.error("Error in getPageDescription:", err);
      return "Enter your blood test values or upload test results for instant analysis and interpretation";
    }
  };

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
    return (
      <div className="min-h-screen bg-[#FAF6E2] flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-600 font-medium">Error: {error}</p>
          <p className="mt-4">Please refresh the page or contact support.</p>
        </div>
      </div>
    );
  }

  // Show a simple loading state until the component is fully loaded
  if (!loaded) {
    console.log("Rendering loading state");
    return (
      <div className="min-h-screen bg-[#FAF6E2] flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-800 font-medium">Loading Blood Test Oracle...</p>
        </div>
      </div>
    );
  }

  console.log("Rendering main content");
  return (
    <div className="min-h-screen bg-[#FAF6E2]"> 
      <SEOHead 
        title={getPageHeadline()}
        description={getPageDescription()}
      />

      {/* Main content with skip link target */}
      <main id="main-content" className="container mx-auto py-4 px-3" tabIndex={-1}>
        {showLongevityContent ? (
          <EnhancedLongevityContent onBackClick={() => setShowLongevityContent(false)} />
        ) : !results ? (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <img 
                src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
                alt="Blood Test Oracle Logo" 
                className="w-40 h-40 mx-auto object-contain animate-fade-in"
                role="img"
              />
              <PageIntro
                title={getPageHeadline()}
                description={getPageDescription()}
              />
              <button
                className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700 p-0 bg-transparent border-0 mt-2"
                onClick={() => setShowLongevityContent(true)}
                aria-label={`${t("learn.more")} about Blood Test Oracle`}
              >
                <InfoIcon className="h-4 w-4" aria-hidden="true" />
                <span className="underline">{t("learn.more")}</span>
              </button>
            </div>

            <BloodTestContainer 
              onSubmit={handleTestResults} 
              userId="anonymous-user" 
              gender={gender}
            />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-4">
              <img 
                src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
                alt="Blood Test Oracle Logo" 
                className="w-24 h-24 mx-auto object-contain"
                role="img"
              />
            </div>
            <ResultsPanel results={results} />
            <div className="mt-6 text-center">
              <button 
                onClick={() => setResults(null)} 
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label={t("back.to.test")}
              >
                {t("back.to.test")}
              </button>
            </div>
          </div>
        )}

        {!showLongevityContent && <Disclaimer />}
      </main>
    </div>
  );
};

export default Index;
