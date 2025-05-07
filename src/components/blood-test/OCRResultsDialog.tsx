
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, 
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";
import { TestDateInfo } from "@/lib/types";

interface OCRResultsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  extractedDates: TestDateInfo[];
  selectedDateIndex: number;
  handleSelectExtractedDate: (index: number) => void;
  onClose: () => void;
}

const OCRResultsDialog = ({
  isOpen,
  onOpenChange,
  extractedDates,
  selectedDateIndex,
  handleSelectExtractedDate,
  onClose
}: OCRResultsDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Test Results Extracted</AlertDialogTitle>
          <AlertDialogDescription>
            We found {extractedDates.length} test dates in your document. The values have been 
            pre-filled in the form. You can switch between dates or edit any values before submitting.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="py-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {extractedDates.map((dateInfo, index) => (
              <Button
                key={index}
                type="button"
                variant={selectedDateIndex === index ? "default" : "outline"}
                onClick={() => handleSelectExtractedDate(index)}
                className="w-full"
              >
                {dateInfo.label}
              </Button>
            ))}
          </div>
          
          <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700 flex items-start gap-2">
            <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Review the extracted values</p>
              <p>The values have been pre-filled based on your document. Please review and adjust if needed before submitting.</p>
            </div>
          </div>
        </div>
        
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>
            Review Results
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OCRResultsDialog;
