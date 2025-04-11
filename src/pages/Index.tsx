
import { useState, useEffect } from "react";
import ResultsPanel from "@/components/ResultsPanel";
import { analyzeBloodTest, bloodMarkers, saveTimelineEntry } from "@/lib/bloodTestUtils";
import TimelineManager from "@/components/TimelineManager";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import Disclaimer from "@/components/Disclaimer";
import TestDateDisplay from "@/components/TestDateDisplay";
import ActionButtons from "@/components/ActionButtons";
import InputSection from "@/components/InputSection";
import { toast } from "@/components/ui/use-toast";

interface TestDateInfo {
  date: Date;
  label: string;
}

const Index = () => {
  const [results, setResults] = useState<any[] | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);
  const [testDate, setTestDate] = useState<Date>(new Date());
  const [extractedValues, setExtractedValues] = useState<Record<string, string> | null>(null);
  const [activeTab, setActiveTab] = useState<string>("manual");
  const [availableDates, setAvailableDates] = useState<TestDateInfo[]>([]);
  const [extractedDataByDate, setExtractedDataByDate] = useState<Array<{date: Date, values: Record<string, string>}>>([]);

  // Listen for test date extraction events
  useEffect(() => {
    // Legacy event handler for single date extraction
    const handleTestDateExtracted = (event: any) => {
      if (event.detail && event.detail.date) {
        setTestDate(event.detail.date);
      }
    };

    // New event handler for multiple dates extraction
    const handleTestDatesExtracted = (event: any) => {
      if (event.detail) {
        const { primaryDate, availableDates, extractedData } = event.detail;
        
        if (primaryDate) {
          setTestDate(primaryDate);
        }
        
        if (availableDates && Array.isArray(availableDates)) {
          setAvailableDates(availableDates);
        }
        
        if (extractedData && Array.isArray(extractedData)) {
          setExtractedDataByDate(extractedData);
        }
      }
    };
    
    window.addEventListener('test-date-extracted', handleTestDateExtracted);
    window.addEventListener('test-dates-extracted', handleTestDatesExtracted);
    
    return () => {
      window.removeEventListener('test-date-extracted', handleTestDateExtracted);
      window.removeEventListener('test-dates-extracted', handleTestDatesExtracted);
    };
  }, []);

  const handleResultsSubmit = (testResults: any[], date: Date) => {
    setResults(testResults);
    setTestDate(date);
    setShowForm(false);
    
    // Automatically save to timeline
    saveTimelineEntry(date, testResults);
    toast({
      title: "Results saved",
      description: "Your test results have been automatically saved to your timeline.",
    });
  };

  const handleUploadAnother = () => {
    // Reset all form state for a completely new entry
    setExtractedValues(null);
    setResults(null);
    setShowForm(true);
    setShowTimeline(false);
    setActiveTab("manual");
    setAvailableDates([]);
    setExtractedDataByDate([]);
  };

  const handleExtractedResults = (extractedValues: Record<string, string>, dates?: TestDateInfo[]) => {
    setExtractedValues(extractedValues);
    
    if (dates && dates.length > 0) {
      setAvailableDates(dates);
    }
    
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
    
    // Automatically save to timeline for uploaded results
    // Use the previously set testDate (which might have been updated by the extraction event)
    saveTimelineEntry(testDate, testResults);
    
    // If we have multiple dates from the document, save them all to the timeline
    if (extractedDataByDate.length > 0) {
      // Starting at index 1 because we've already saved the first date
      for (let i = 1; i < extractedDataByDate.length; i++) {
        const dataPoint = extractedDataByDate[i];
        const dateResults = Object.keys(dataPoint.values).map(key => {
          const marker = bloodMarkers.find(marker => marker.id === key);
          if (marker) {
            const value = parseFloat(dataPoint.values[key]);
            return analyzeBloodTest(marker, value);
          }
          return null;
        }).filter(Boolean);
        
        // Save this date to the timeline
        saveTimelineEntry(dataPoint.date, dateResults);
      }
      
      toast({
        title: "All results saved",
        description: `${extractedDataByDate.length} test dates have been automatically saved to your timeline.`,
      });
    } else {
      toast({
        title: "Results saved",
        description: "Your uploaded test results have been automatically saved to your timeline.",
      });
    }
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
  
  const handleDateSelect = (date: Date) => {
    setTestDate(date);
    
    // Find the corresponding data for this date
    const dataForDate = extractedDataByDate.find(
      item => item.date.getTime() === date.getTime()
    );
    
    if (dataForDate) {
      setExtractedValues(dataForDate.values);
      
      // Update the results preview based on the selected date's values
      const newResults = Object.keys(dataForDate.values).map(key => {
        const marker = bloodMarkers.find(marker => marker.id === key);
        if (marker) {
          const value = parseFloat(dataForDate.values[key]);
          return analyzeBloodTest(marker, value);
        }
        return null;
      }).filter(Boolean);
      
      setResults(newResults);
    }
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
              availableDates={availableDates}
              onDateSelect={handleDateSelect}
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
