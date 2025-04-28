
import { useEffect } from "react";
import { TestDateInfo } from "@/lib/types";

interface TestDateManagerProps {
  setTestDate: (date: Date) => void;
  setAvailableDates: (dates: TestDateInfo[]) => void;
  setExtractedDataByDate: (data: Array<{date: Date, values: Record<string, string>}>) => void;
}

export default function TestDateManager({ setTestDate, setAvailableDates, setExtractedDataByDate }: TestDateManagerProps) {
  useEffect(() => {
    // Legacy event handler for single date extraction
    const handleTestDateExtracted = (event: any) => {
      if (event.detail && event.detail.date) {
        setTestDate(event.detail.date);
        console.log("Single date extracted:", event.detail.date);
      }
    };

    // New event handler for multiple dates extraction
    const handleTestDatesExtracted = (event: any) => {
      if (event.detail) {
        const { primaryDate, availableDates, extractedData } = event.detail;
        
        if (primaryDate) {
          setTestDate(primaryDate);
          console.log("Setting primary date:", primaryDate);
        }
        
        if (availableDates && Array.isArray(availableDates)) {
          setAvailableDates(availableDates);
          console.log("Available dates:", availableDates);
        }
        
        if (extractedData && Array.isArray(extractedData)) {
          setExtractedDataByDate(extractedData);
          console.log("Extracted data by date:", extractedData);
        }
      }
    };
    
    window.addEventListener('test-date-extracted', handleTestDateExtracted);
    window.addEventListener('test-dates-extracted', handleTestDatesExtracted);
    
    return () => {
      window.removeEventListener('test-date-extracted', handleTestDateExtracted);
      window.removeEventListener('test-dates-extracted', handleTestDatesExtracted);
    };
  }, [setTestDate, setAvailableDates, setExtractedDataByDate]);

  return null;
}
