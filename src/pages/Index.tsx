
import { useState } from "react";
import TimelineManager from "@/components/TimelineManager";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import Disclaimer from "@/components/Disclaimer";
import FormContainer from "@/components/test-form/FormContainer";
import TestDateManager from "@/components/test-form/TestDateManager";
import { TestDateInfo } from "@/lib/types";

const Index = () => {
  const [results, setResults] = useState<any[] | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);
  const [testDate, setTestDate] = useState<Date>(new Date());
  const [extractedValues, setExtractedValues] = useState<Record<string, string> | null>(null);
  const [activeTab, setActiveTab] = useState<string>("manual");
  const [availableDates, setAvailableDates] = useState<TestDateInfo[]>([]);
  const [extractedDataByDate, setExtractedDataByDate] = useState<Array<{date: Date, values: Record<string, string>}>>([]);

  const handleUploadAnother = () => {
    setExtractedValues(null);
    setResults(null);
    setShowForm(true);
    setShowTimeline(false);
    setActiveTab("manual");
    setAvailableDates([]);
    setExtractedDataByDate([]);
  };

  const handleBackFromTimeline = () => {
    setShowTimeline(false);
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

          <TestDateManager 
            setTestDate={setTestDate}
            setAvailableDates={setAvailableDates}
            setExtractedDataByDate={setExtractedDataByDate}
          />

          {showTimeline ? (
            <TimelineManager 
              results={results} 
              onBack={handleBackFromTimeline}
              initialDate={testDate}
            />
          ) : (
            <FormContainer 
              showForm={showForm}
              testDate={testDate}
              results={results}
              extractedValues={extractedValues}
              activeTab={activeTab}
              availableDates={availableDates}
              onHandleUploadAnother={handleUploadAnother}
              onViewTimeline={() => setShowTimeline(true)}
              setActiveTab={setActiveTab}
              setShowForm={setShowForm}
              onDateSelect={(date: Date) => setTestDate(date)}
            />
          )}
          
          <Disclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
