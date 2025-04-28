
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
import TestDateDisplay from "@/components/TestDateDisplay";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setUserId(data.session.user.id);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Test Results</DialogTitle>
          <DialogDescription>
            Modify the values for this test.
          </DialogDescription>
        </DialogHeader>
        
        {/* Add the TestDateDisplay component to show the date in the consistent format */}
        <div className="mb-4">
          <TestDateDisplay date={selectedDate} />
        </div>
        
        <div className="py-4">
          {userId && (
            <BloodTestForm 
              userId={userId}
              initialValues={editableValues}
              initialDate={selectedDate}
              isEditMode={true}
              onResultsSubmit={onUpdateEntry}
            />
          )}
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
