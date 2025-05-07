
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

const Index = () => {
  const [results, setResults] = useState<BloodTestResult[] | null>(null);
  const [gender, setGender] = useState<"male" | "female">("male");

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
    <div className="min-h-screen bg-[#1A1F2C]"> {/* Dark blue background color from logo */}
      <Header />

      <main className="container mx-auto py-4 px-3">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col items-center mb-4">
            <img 
              src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
              alt="Blood Test Oracle Logo" 
              className="w-24 h-24 object-contain mb-2"
            />
            <PageIntro 
              title="Blood Test Analysis"
              description="Enter your blood test values or upload test results for instant analysis and interpretation"
            />
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
                  Back to Test Input
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
