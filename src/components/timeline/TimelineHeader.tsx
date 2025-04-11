
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface TimelineHeaderProps {
  onBack: () => void;
  onAddDialogOpen: () => void;
}

const TimelineHeader = ({ onBack, onAddDialogOpen }: TimelineHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">Blood Test Timeline</h2>
        <p className="text-gray-600">Track your blood test results over time</p>
      </div>
      <div className="space-x-2">
        <Button variant="outline" onClick={onBack}>
          Back to Results
        </Button>
        <Button onClick={onAddDialogOpen}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Save Current Results
        </Button>
      </div>
    </div>
  );
};

export default TimelineHeader;
