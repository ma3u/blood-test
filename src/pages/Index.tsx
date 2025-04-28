
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import ResultsPanel from "@/components/ResultsPanel";
import { BloodTestResult } from "@/lib/types";

const Index = () => {
  const [results, setResults] = useState<BloodTestResult[] | null>(null);

  const handleTestResults = (testResults: BloodTestResult[]) => {
    setResults(testResults);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <PageIntro 
            title="Blood Test Analysis"
            description="Enter your blood test values or upload test results for instant analysis and interpretation"
          />

          {!results ? (
            <BloodTestContainer onSubmit={handleTestResults} />
          ) : (
            <ResultsPanel results={results} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
