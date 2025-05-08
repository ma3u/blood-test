
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
import { BloodTestResult } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("timeline.add")}</DialogTitle>
          <DialogDescription>
            {t("timeline.date")}
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
            {t("edit.cancel")}
          </Button>
          <Button onClick={onAddToTimeline}>
            {t("form.submit")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineAddDialog;
