
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import BloodTestEntryMethods from "@/components/blood-test/BloodTestEntryMethods";
import BloodTestResults from "@/components/blood-test/BloodTestResults";

const BloodTestDiagnostic = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [entryMethod, setEntryMethod] = useState<"manual" | "upload">("upload");
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [availableDates, setAvailableDates] = useState<Array<{date: Date, label: string}>>([]);
  const [savedResults, setSavedResults] = useState<Array<{date: string, values: Record<string, number | string>}>>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  const handleResultsExtracted = (values: Record<string, string>, dates?: Array<{date: Date, label: string}>) => {
    setFormValues(values);
    
    if (dates && dates.length) {
      setAvailableDates(dates);
      toast({
        title: t("blood-test.results_processed" as any),
        description: `${dates.length} ${t("blood-test.test_dates_found" as any)}`,
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const testDate = selectedDate || new Date().toISOString().split('T')[0];
    
    // Save the current results
    const newResults = {
      date: testDate,
      values: { ...formValues }
    };
    
    // Add to saved results, replacing if same date exists
    const updatedResults = savedResults.filter(r => r.date !== testDate);
    updatedResults.push(newResults);
    setSavedResults(updatedResults);
    
    toast({
      title: t("blood-test.data_saved" as any),
      description: t("blood-test.results_available_dashboard" as any),
    });
    
    // Reset form values after saving
    if (entryMethod === "manual") {
      setFormValues({});
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <SEOHead
        title={t("blood-test.diagnostic_title" as any)}
        description={t("blood-test.diagnostic_description" as any)}
      />
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("blood-test.diagnostic_title" as any)}
      </h1>
      
      <BloodTestEntryMethods
        entryMethod={entryMethod}
        setEntryMethod={setEntryMethod}
        formValues={formValues}
        setFormValues={setFormValues}
        availableDates={availableDates}
        setAvailableDates={setAvailableDates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onSubmit={handleSubmit}
        onResultsExtracted={handleResultsExtracted}
      />
      
      {savedResults.length > 0 && (
        <div className="mt-12">
          <BloodTestResults savedResults={savedResults} />
        </div>
      )}
    </div>
  );
};

export default BloodTestDiagnostic;
