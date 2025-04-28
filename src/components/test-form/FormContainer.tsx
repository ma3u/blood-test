
import { useState } from "react";
import ResultsPanel from "@/components/ResultsPanel";
import TestDateDisplay from "@/components/TestDateDisplay";
import ActionButtons from "@/components/ActionButtons";
import InputSection from "@/components/InputSection";
import { toast } from "@/components/ui/use-toast";
import { saveTimelineEntry } from "@/lib/bloodTestUtils";

interface FormContainerProps {
  showForm: boolean;
  testDate: Date;
  results: any[] | null;
  extractedValues: Record<string, string> | null;
  activeTab: string;
  availableDates: Array<{date: Date, label: string}>;
  onHandleUploadAnother: () => void;
  onViewTimeline: () => void;
  setActiveTab: (tab: string) => void;
  setShowForm: (show: boolean) => void;
  onDateSelect: (date: Date) => void;
}

export default function FormContainer({
  showForm,
  testDate,
  results,
  extractedValues,
  activeTab,
  availableDates,
  onHandleUploadAnother,
  onViewTimeline,
  setActiveTab,
  setShowForm,
  onDateSelect
}: FormContainerProps) {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleResultsSubmit = (testResults: any[], date: Date) => {
    saveTimelineEntry(date, testResults);
    toast({
      title: "Results saved",
      description: "Your test results have been automatically saved to your timeline.",
    });
  };

  const handleReviewAndModify = () => {
    setShowForm(true);
    setActiveTab("manual");
  };

  const handleCancelEditing = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <InputSection 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onResultsSubmit={handleResultsSubmit}
        onResultsExtracted={(values, dates) => {
          // Handle extracted results
          console.log("Extracted values:", values, "dates:", dates);
        }}
        initialValues={extractedValues || {}}
        initialDate={testDate}
        showForm={showForm}
        results={results}
        onCancelEditing={handleCancelEditing}
        availableDates={availableDates}
        onDateSelect={onDateSelect}
      />
    );
  }

  return (
    <div className="mt-8 space-y-6">
      {testDate && <TestDateDisplay date={testDate} />}
      <ResultsPanel results={results || []} />
      <ActionButtons 
        onUploadAnother={onHandleUploadAnother}
        onReviewAndModify={handleReviewAndModify}
        onViewTimeline={onViewTimeline}
        hasExtractedValues={!!extractedValues}
      />
    </div>
  );
}
