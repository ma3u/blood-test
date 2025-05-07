
import { useState } from "react";
import { TestDateInfo } from "@/lib/types";
import { toast } from "@/components/ui/use-toast";

// Sample extracted values from test results with multiple dates
const sampleExtractedData = [
  {
    date: new Date(2025, 2, 10), // March 10, 2025
    values: {
      hemoglobin: "15.9",
      wbc: "7.14",
      platelets: "271",
      glucose: "98",
      cholesterol: "6.75", 
      ldl: "4.68",
      hdl: "1.55",
      triglycerides: "177",
      creatinine: "0.91",
      sodium: "139",
    }
  },
  {
    date: new Date(2025, 2, 17), // March 17, 2025
    values: {
      hemoglobin: "15.8",
      wbc: "7.5",
      platelets: "265",
      glucose: "97",
      cholesterol: "6.70",
      ldl: "4.65",
      hdl: "1.50",
      triglycerides: "175",
      creatinine: "0.90",
      sodium: "140",
    }
  }
];

export const useSampleData = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [extractedDates, setExtractedDates] = useState<TestDateInfo[]>([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [isOCRDialogOpen, setIsOCRDialogOpen] = useState(false);
  
  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Simulate OCR processing with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Format available dates for display
      const availableDates = sampleExtractedData.map(data => ({
        date: data.date,
        label: data.date.toLocaleDateString('en-GB', { 
          day: '2-digit', 
          month: '2-digit', 
          year: 'numeric' 
        })
      }));
      
      setExtractedDates(availableDates);
      setSelectedDateIndex(0);
      
      toast({
        title: "File processed successfully",
        description: `${availableDates.length} test dates found in your document.`,
      });
      
      // Show dialog with results
      setIsOCRDialogOpen(true);
    } catch (error) {
      toast({
        title: "Error processing file",
        description: "An error occurred while processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const handleSelectExtractedDate = (index: number) => {
    if (index >= 0 && index < sampleExtractedData.length) {
      setSelectedDateIndex(index);
    }
  };
  
  // Get the values for the currently selected date
  const getCurrentDateValues = () => {
    if (selectedDateIndex >= 0 && selectedDateIndex < sampleExtractedData.length) {
      return sampleExtractedData[selectedDateIndex].values;
    }
    return {};
  };
  
  // Get the date object for the currently selected date
  const getSelectedDate = () => {
    if (selectedDateIndex >= 0 && selectedDateIndex < sampleExtractedData.length) {
      return sampleExtractedData[selectedDateIndex].date;
    }
    return new Date();
  };
  
  return {
    selectedFile,
    setSelectedFile,
    isUploading,
    extractedDates,
    selectedDateIndex,
    isOCRDialogOpen,
    setIsOCRDialogOpen,
    handleUpload,
    handleSelectExtractedDate,
    getCurrentDateValues,
    getSelectedDate
  };
};
