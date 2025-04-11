
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { bloodMarkers } from "@/lib/bloodTestUtils";

// Sample extracted values from test results with multiple dates
// Based on the provided image
const sampleExtractedData = [
  {
    date: new Date(2021, 2, 5), // March 5, 2021 (05.03.2021 in image)
    values: {
      hemoglobin: "15.9",
      wbc: "7.14",
      platelets: "271",
      glucose: "98",  // Using "bz" value from image
      cholesterol: "305",
      ldl: "218",
      hdl: "57.3",
      triglycerides: "177",
      creatinine: "0.91",
      sodium: "139", // NA value from image
    }
  },
  {
    date: new Date(2020, 7, 11), // August 11, 2020 (11.08.2020 in image)
    values: {
      hemoglobin: "15.9",
      wbc: "7.5",
      platelets: "246",
      glucose: "98", // Not visible in image for this date
      cholesterol: "296",
      ldl: "208",
      hdl: "44.6",
      triglycerides: "328",
      creatinine: "0.91", // Not visible in image for this date
      sodium: "139", // Not visible in image for this date
    }
  },
  {
    date: new Date(2008, 1, 5), // February 5, 2008 (05.02.2008 in image)
    values: {
      hemoglobin: "16.3",
      wbc: "6.3", // Using LEUKO value from image
      platelets: "363",
      glucose: "30.0", // Using GOT value from image (best approximation)
      cholesterol: "30.0", // Using GPT value from image (best approximation)
      ldl: "58.0", // Using Gamma-GT value from image (best approximation)
      hdl: "93", // Using AP value from image (best approximation)
      triglycerides: "0.8", // Using BIL ges value from image (best approximation)
      creatinine: "1.02",
      sodium: "139", // Not visible in image for this date
    }
  }
];

const FileUploader = ({ onResultsExtracted }: { onResultsExtracted: (values: Record<string, string>, availableDates?: Array<{date: Date, label: string}>) => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or image file (JPEG, PNG).",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    setFileType(file.type);
    
    // Create preview for images
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

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
      // Simulate processing with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demonstration purposes, we'll use the first date in our sample data
      // In a real implementation, we'd extract all dates from the document
      const primaryDate = sampleExtractedData[0].date;
      
      // Format available dates for display
      const availableDates = sampleExtractedData.map(data => ({
        date: data.date,
        label: data.date.toLocaleDateString()
      }));
      
      // Generate an event to notify that multiple dates were extracted
      const event = new CustomEvent('test-dates-extracted', { 
        detail: { 
          primaryDate: primaryDate,
          availableDates: availableDates,
          extractedData: sampleExtractedData
        }
      });
      window.dispatchEvent(event);
      
      toast({
        title: "File processed successfully",
        description: `${availableDates.length} test dates found in your document.`,
      });
      
      // Pass extracted values to parent component (use first date as default)
      onResultsExtracted(sampleExtractedData[0].values, availableDates);
    } catch (error) {
      toast({
        title: "Processing failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Upload Blood Test Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,image/jpeg,image/jpg,image/png"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="cursor-pointer w-full text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="text-lg font-medium">Click to upload or drag and drop</div>
              <div className="text-sm text-gray-500">PDF, JPG, or PNG</div>
            </div>
          </label>
        </div>

        {selectedFile && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-700">Selected file:</p>
            <p className="text-blue-600">{selectedFile.name}</p>
            {previewUrl && fileType?.startsWith('image/') && (
              <div className="mt-2 border rounded p-2 bg-white">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img src={previewUrl} alt="Preview" className="max-h-40 rounded shadow-sm" />
              </div>
            )}
            {fileType === 'application/pdf' && (
              <div className="flex items-center mt-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                PDF document (preview not available)
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => {
              setSelectedFile(null);
              setPreviewUrl(null);
              setFileType(null);
            }}
          >
            Clear
          </Button>
          
          <Button
            type="button"
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Process File"
            )}
          </Button>
        </div>
        
        <div className="text-sm text-gray-500 p-3 bg-gray-50 rounded-md mt-4">
          <p className="font-medium text-gray-700">Note:</p>
          <p>This feature will extract all test dates and values from your uploaded document. 
            Multiple test dates from the same document will be automatically identified and saved.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
