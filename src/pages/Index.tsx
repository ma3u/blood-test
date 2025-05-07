
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import ResultsPanel from "@/components/ResultsPanel";
import Disclaimer from "@/components/Disclaimer";
import { BloodTestResult } from "@/lib/types";
import GenderSwitch from "@/components/GenderSwitch";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <PageIntro 
            title="Blood Test Analysis"
            description="Enter your blood test values or upload test results for instant analysis and interpretation"
          />

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
              <div className="mt-8">
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
