
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BloodTestForm from "@/components/BloodTestForm";
import { BloodTestResult } from "@/lib/bloodTestUtils";

interface TimelineEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editableValues: Record<string, string>;
  selectedDate: Date;
  onUpdateEntry: (testResults: BloodTestResult[], date: Date) => void;
}

const TimelineEditDialog = ({
  open,
  onOpenChange,
  editableValues,
  selectedDate,
  onUpdateEntry,
}: TimelineEditDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Test Results</DialogTitle>
          <DialogDescription>
            Modify the values for this test.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <BloodTestForm 
            onResultsSubmit={onUpdateEntry}
            initialValues={editableValues}
            initialDate={selectedDate}
            isEditMode={true}
          />
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineEditDialog;
