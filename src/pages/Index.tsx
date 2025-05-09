
import { useState } from "react";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import ResultsPanel from "@/components/ResultsPanel";
import Disclaimer from "@/components/Disclaimer";
import { BloodTestResult } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Index = () => {
  const [results, setResults] = useState<BloodTestResult[] | null>(null);
  const [gender, setGender] = useState<"male" | "female">("male");
  const { t, language } = useLanguage();

  const handleTestResults = (testResults: BloodTestResult[]) => {
    setResults(testResults);
    
    // This would be a good place to prompt for registration after showing results
    // as per User Journey step 5
    console.log("Blood test results received, user could be prompted to register here");
  };

  // Language-specific headlines and descriptions
  const getPageHeadline = () => {
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
  };

  const getPageDescription = () => {
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
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title={getPageHeadline()}
        description={getPageDescription()}
      />

      {/* Main content with skip link target */}
      <main id="main-content" className="container mx-auto py-4 px-3" tabIndex={-1}>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="flex-shrink-0 mr-6 mb-4 md:mb-0 flex items-center">
              <img 
                src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
                alt="Blood Test Oracle Logo" 
                className="w-24 h-24 object-contain"
                role="img"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold text-blue-800">{getPageHeadline()}</h1>
              <p className="text-sm text-gray-600 mt-1">{getPageDescription()}</p>
              <div className="mt-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 text-blue-500 hover:text-blue-700 p-0"
                      aria-label={`${t("learn.more")} about Blood Test Oracle`}
                    >
                      <InfoIcon className="h-4 w-4" aria-hidden="true" />
                      <span>{t("learn.more")}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent 
                    className="max-w-3xl max-h-[80vh] overflow-y-auto"
                    aria-labelledby="dialog-title"
                  >
                    <DialogHeader>
                      <DialogTitle id="dialog-title" className="text-2xl font-bold text-blue-600 mb-4">
                        {t("dialog.title")}
                      </DialogTitle>
                    </DialogHeader>
                    <DialogDescription id="dialog-description" className="space-y-6 text-foreground">
                      <p className="font-medium text-lg">
                        {t("intro.welcome")} {" "}
                        <Link to="/longevity" className="text-blue-600 hover:text-blue-800 underline font-medium">
                          Learn more about longevity and healthspan
                        </Link>.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("intro.why.title")}</h3>
                        <p className="text-gray-700 mb-4">{t("intro.why.content")}</p>
                        
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                          <li className="text-gray-700">{t("intro.why.point1")}</li>
                          <li className="text-gray-700">{t("intro.why.point2")}</li>
                          <li className="text-gray-700">{t("intro.why.point3")}</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("intro.next.title")}</h3>
                        <p className="text-gray-700 mb-4">{t("intro.next.content")}</p>
                        
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                          <li className="text-gray-700">{t("intro.next.point1")}</li>
                          <li className="text-gray-700">{t("intro.next.point2")}</li>
                          <li className="text-gray-700">{t("intro.next.point3")}</li>
                          <li className="text-gray-700">{t("intro.next.point4")}</li>
                          <li className="text-gray-700">{t("intro.next.point5")}</li>
                        </ul>
                        
                        <p className="text-gray-700 italic mb-6">{t("intro.next.conclusion")}</p>
                      </div>
                      
                      <div>
                        <Separator className="my-6" />
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("intro.feedback.title")}</h3>
                        <p className="text-gray-700 mb-4">{t("intro.feedback.content")}</p>
                        
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                          <li className="text-gray-700">{t("intro.feedback.point1")}</li>
                          <li className="text-gray-700">{t("intro.feedback.point2")}</li>
                          <li className="text-gray-700">{t("intro.feedback.point3")}</li>
                        </ul>
                        
                        <p className="text-gray-700 mb-3">{t("intro.feedback.conclusion")}</p>
                        <p className="text-gray-700 font-medium">{t("intro.feedback.question")}</p>
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {!results ? (
            <>
              <BloodTestContainer 
                onSubmit={handleTestResults} 
                userId="anonymous-user" 
                gender={gender}
              />
            </>
          ) : (
            <>
              <ResultsPanel results={results} />
              <div className="mt-6">
                <button 
                  onClick={() => setResults(null)} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label={t("back.to.test")}
                >
                  {t("back.to.test")}
                </button>
              </div>
            </>
          )}

          <Disclaimer />
        </div>
      </main>
    </div>
  );
};

export default Index;
