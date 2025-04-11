
import { useState } from "react";
import BloodTestForm from "@/components/BloodTestForm";
import ResultsPanel from "@/components/ResultsPanel";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { analyzeBloodTest } from "@/lib/bloodTestUtils";

const Index = () => {
  const [results, setResults] = useState<any[] | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleResultsSubmit = (testResults: any[]) => {
    setResults(testResults);
    setShowForm(false);
  };

  const handleStartOver = () => {
    setResults(null);
    setShowForm(true);
  };

  const handleExtractedResults = (extractedValues: Record<string, string>) => {
    // Convert string values to numbers and analyze
    const testResults = Object.keys(extractedValues).map(key => {
      const marker = bloodMarkers.find(marker => marker.id === key);
      if (marker) {
        const value = parseFloat(extractedValues[key]);
        return analyzeBloodTest(marker, value);
      }
      return null;
    }).filter(Boolean);

    setResults(testResults);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Blood Test Oracle</h1>
            <p className="text-sm text-gray-500">Medical Analysis Tool</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Blood Test Analysis</h2>
            <p className="text-gray-600 mt-2">
              Enter your blood test values or upload test results for instant analysis and interpretation
            </p>
          </div>

          {showForm && !results ? (
            <div className="mt-8">
              <Tabs defaultValue="manual" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                  <TabsTrigger value="upload">Upload Test Results</TabsTrigger>
                </TabsList>
                
                <TabsContent value="manual">
                  <BloodTestForm onResultsSubmit={handleResultsSubmit} />
                </TabsContent>
                
                <TabsContent value="upload">
                  <FileUploader onResultsExtracted={handleExtractedResults} />
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <ResultsPanel results={results || []} />
              
              <div className="flex justify-center mt-8">
                <Button onClick={handleStartOver} variant="outline" size="lg">
                  Start Over
                </Button>
              </div>
            </div>
          )}
          
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800">Disclaimer</h3>
            <p className="text-blue-700 mt-2">
              This tool is for educational purposes only and is not a substitute for professional medical advice. 
              Always consult with a healthcare provider for interpretation of your blood test results and medical advice.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto py-4 px-4 text-center text-gray-500 text-sm">
          Blood Test Oracle - A medical analysis tool for educational purposes
        </div>
      </footer>
    </div>
  );
};

export default Index;
