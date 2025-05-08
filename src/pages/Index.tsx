import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import ResultsPanel from "@/components/ResultsPanel";
import Disclaimer from "@/components/Disclaimer";
import { BloodTestResult } from "@/lib/types";
import GenderSwitch from "@/components/GenderSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const [results, setResults] = useState<BloodTestResult[] | null>(null);
  const [gender, setGender] = useState<"male" | "female">("male");
  const { t } = useLanguage();

  const handleTestResults = (testResults: BloodTestResult[]) => {
    setResults(testResults);
    
    // This would be a good place to prompt for registration after showing results
    // as per User Journey step 5
    console.log("Blood test results received, user could be prompted to register here");
  };

  const handleGenderChange = (newGender: "male" | "female") => {
    setGender(newGender);
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <Header />

      <main className="container mx-auto py-4 px-3">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-6">
              <img 
                src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
                alt="Blood Test Oracle Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl font-bold text-blue-800">{t("page.title")}</h1>
              <p className="text-sm text-gray-600 mt-1">{t("page.description")}</p>
              <div className="mt-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-blue-500 hover:text-blue-700 p-0">
                      <InfoIcon className="h-4 w-4" />
                      <span>{t("learn.more")}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-blue-600 mb-4">{t("dialog.title")}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="space-y-6 text-foreground">
                      <p className="font-medium text-lg">
                        {t("welcome.intro")}
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <p>
                          {t("welcome.paragraph1")}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("welcome.strategies.title")}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><span className="font-medium">{t("welcome.strategies.item1")}</span></li>
                          <li><span className="font-medium">{t("welcome.strategies.item2")}</span></li>
                          <li><span className="font-medium">{t("welcome.strategies.item3")}</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("welcome.practices.title")}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><span className="font-medium">{t("welcome.practices.item1")}</span></li>
                          <li><span className="font-medium">{t("welcome.practices.item2")}</span></li>
                          <li><span className="font-medium">{t("welcome.practices.item3")}</span></li>
                        </ul>
                      </div>
                      
                      <p className="mt-4 font-medium">
                        {t("welcome.outro")}
                      </p>
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
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md text-white transition-colors"
                >
                  {t("back.to.test")}
                </button>
              </div>
            </>
          )}

          <Disclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
