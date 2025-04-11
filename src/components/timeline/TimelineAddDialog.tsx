
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { BloodTestResult } from "@/lib/bloodTestUtils";

interface TimelineAddDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  onAddToTimeline: () => void;
}

const TimelineAddDialog = ({
  open,
  onOpenChange,
  selectedDate,
  setSelectedDate,
  onAddToTimeline,
}: TimelineAddDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Test Results</DialogTitle>
          <DialogDescription>
            Select the date when this test was taken.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="mx-auto pointer-events-auto"
            disabled={(date) => date > new Date()}
          />
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onAddToTimeline}>
            Save to Timeline
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineAddDialog;
