
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info, File, FileImage } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

interface FileUploadTabProps {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  handleUpload: () => Promise<void>;
  isUploading?: boolean;
}

const FileUploadTab = ({ 
  selectedFile, 
  setSelectedFile, 
  handleUpload,
  isUploading = false
}: FileUploadTabProps) => {
  const [showUploadInfo, setShowUploadInfo] = useState(false);

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
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-4 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".pdf,image/jpeg,image/jpg,image/png"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="cursor-pointer w-full text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            {selectedFile ? (
              <>
                <div className="flex items-center gap-2 text-blue-700">
                  {selectedFile.type === 'application/pdf' ? 
                    <File className="h-10 w-10" /> : 
                    <FileImage className="h-10 w-10" />
                  }
                  {selectedFile.name}
                </div>
                <p className="text-sm text-blue-600">Click to change file</p>
              </>
            ) : (
              <>
                <div className="flex gap-4">
                  <File className="h-8 w-8 text-blue-500" />
                  <FileImage className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-base font-medium text-blue-700">Click to upload or drag and drop</div>
                <div className="text-sm text-blue-500">PDF, JPG, or PNG</div>
              </>
            )}
          </div>
        </label>
      </div>
      
      <Button 
        type="button"
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleUpload}
        disabled={!selectedFile || isUploading}
      >
        {isUploading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Process Document"
        )}
      </Button>

      {showUploadInfo && (
        <Card className="bg-blue-50 border-blue-200 mt-4">
          <div className="p-4 text-sm">
            <p className="mb-2">Our OCR system can extract blood test values from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>PDF lab reports from most hospitals and clinics</li>
              <li>Scanned images of lab reports (JPG, PNG)</li>
              <li>Photos of printed lab reports</li>
            </ul>
            <p className="mt-2">For best results:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ensure the document is clearly readable</li>
              <li>Make sure all values and units are visible</li>
              <li>Include the reference ranges if available</li>
            </ul>
            <p className="mt-2 text-blue-700 font-medium">The system can detect multiple test dates in a single document!</p>
          </div>
        </Card>
      )}

      {!showUploadInfo && (
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2 mt-2"
          onClick={() => setShowUploadInfo(!showUploadInfo)}
        >
          <Info className="h-4 w-4" />
          What documents can I upload?
        </Button>
      )}
    </div>
  );
};

export default FileUploadTab;
