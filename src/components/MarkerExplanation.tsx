
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { BloodTestResult } from "@/lib/types";
import { getStatusColor, getStatusText } from "@/lib/bloodTestUtils";

interface MarkerExplanationProps {
  result: BloodTestResult;
  onClose: () => void;
}

const MarkerExplanation = ({ result, onClose }: MarkerExplanationProps) => {
  const statusColor = getStatusColor(result.status);
  const statusText = getStatusText(result.status);

  const implications =
    result.status === "low"
      ? result.marker.lowImplication
      : result.status === "high"
      ? result.marker.highImplication
      : "Values are within normal range.";

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{result.marker.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Your value</p>
            <div className={`px-3 py-1 rounded-full ${statusColor}`}>
              {result.value} {result.marker.unit} ({statusText})
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-1">Description</p>
            <p className="text-sm text-gray-600">{result.marker.description}</p>
          </div>
          
          <div>
            <p className="font-medium mb-1">Normal Range</p>
            <p className="text-sm text-gray-600">
              {result.marker.minValue} - {result.marker.maxValue} {result.marker.unit}
            </p>
          </div>
          
          <div>
            <p className="font-medium mb-1">Health Implications</p>
            <p className="text-sm text-gray-600">{implications}</p>
          </div>
          
          <div className="mt-2 pt-2 border-t">
            <p className="text-xs text-gray-500">Reference: American Clinical Laboratory Association guidelines</p>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button onClick={onClose}>Understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MarkerExplanation;
