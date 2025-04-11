
import { useState } from "react";
import ResultsPanel from "@/components/ResultsPanel";
import { analyzeBloodTest, bloodMarkers } from "@/lib/bloodTestUtils";
import TimelineManager from "@/components/TimelineManager";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import Disclaimer from "@/components/Disclaimer";
import TestDateDisplay from "@/components/TestDateDisplay";
import ActionButtons from "@/components/ActionButtons";
import InputSection from "@/components/InputSection";

const Index = () => {
  const [results, setResults] = useState<any[] | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);
  const [testDate, setTestDate] = useState<Date>(new Date());
  const [extractedValues, setExtractedValues] = useState<Record<string, string> | null>(null);
  const [activeTab, setActiveTab] = useState<string>("manual");

  const handleResultsSubmit = (testResults: any[], date: Date) => {
    setResults(testResults);
    setTestDate(date);
    setShowForm(false);
  };

  const handleUploadAnother = () => {
    // Clear previous data for a new entry
    setExtractedValues(null);
    setShowForm(true);
    setShowTimeline(false);
    setActiveTab("upload");
  };

  const handleExtractedResults = (extractedValues: Record<string, string>) => {
    setExtractedValues(extractedValues);
    
    const testResults = Object.keys(extractedValues).map(key => {
      const marker = bloodMarkers.find(marker => marker.id === key);
      if (marker) {
        const value = parseFloat(extractedValues[key]);
        return analyzeBloodTest(marker, value);
      }
      return null;
    }).filter(Boolean);

    setResults(testResults);
    setTestDate(new Date());
    setShowForm(false);
  };

  const handleViewTimeline = () => {
    setShowTimeline(true);
  };

  const handleBackFromTimeline = () => {
    setShowTimeline(false);
  };

  const handleReviewAndModify = () => {
    setShowForm(true);
    setActiveTab("manual");
  };

  const handleCancelEditing = () => {
    setShowForm(false);
  };

  const getFormValues = () => {
    if (extractedValues) {
      return extractedValues;
    }
    
    if (results && results.length > 0) {
      const values: Record<string, string> = {};
      results.forEach((result: any) => {
        if (result && result.marker && result.value !== undefined) {
          values[result.marker.id] = result.value.toString();
        }
      });
      return values;
    }
    
    return {};
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <PageIntro 
            title="Blood Test Analysis"
            description="Enter your blood test values or upload test results for instant analysis and interpretation"
          />

          {showTimeline ? (
            <TimelineManager 
              results={results} 
              onBack={handleBackFromTimeline}
              initialDate={testDate}
            />
          ) : showForm ? (
            <InputSection 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onResultsSubmit={handleResultsSubmit}
              onResultsExtracted={handleExtractedResults}
              initialValues={getFormValues()}
              initialDate={testDate}
              showForm={showForm}
              results={results}
              onCancelEditing={handleCancelEditing}
            />
          ) : (
            <div className="mt-8 space-y-6">
              {testDate && <TestDateDisplay date={testDate} />}
              
              <ResultsPanel results={results || []} />
              
              <ActionButtons 
                onUploadAnother={handleUploadAnother}
                onReviewAndModify={handleReviewAndModify}
                onViewTimeline={handleViewTimeline}
                hasExtractedValues={!!extractedValues}
              />
            </div>
          )}
          
          <Disclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
