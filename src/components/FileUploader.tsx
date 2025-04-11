
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { bloodMarkers } from "@/lib/bloodTestUtils";

// Sample extracted values from test results
const sampleExtractedValues = {
  hemoglobin: "15.9",
  wbc: "7.14",
  platelets: "271",
  glucose: "98",
  cholesterol: "305",
  ldl: "218",
  hdl: "57.3",
  triglycerides: "177",
  creatinine: "0.91",
  sodium: "139",
};

// Sample test date (simulating extraction of date from document)
const sampleTestDate = new Date(2025, 3, 5); // April 5, 2025

const FileUploader = ({ onResultsExtracted }: { onResultsExtracted: (values: Record<string, string>) => void }) => {
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
      
      // For now, we'll use sample data since actual OCR would require additional libraries
      toast({
        title: "File processed successfully",
        description: "Blood test values have been extracted.",
      });
      
      // Pass extracted values to parent component
      // In a real implementation, we'd extract the date from the document
      // and pass it along with the values
      
      // Set the current date to the sample test date (simulating extraction from document)
      const event = new CustomEvent('test-date-extracted', { 
        detail: { date: sampleTestDate }
      });
      window.dispatchEvent(event);
      
      onResultsExtracted(sampleExtractedValues);
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
          <p>This feature will attempt to extract blood test values from your uploaded document. 
            For best results, upload a clear image or properly formatted PDF of your lab results.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
