
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { BloodTestResult } from "@/lib/types";
import { getStatusColor, getStatusText } from "@/lib/bloodTestUtils";
import { useLanguage } from "@/context/LanguageContext";

interface MarkerExplanationProps {
  result: BloodTestResult;
  onClose: () => void;
}

const MarkerExplanation = ({ result, onClose }: MarkerExplanationProps) => {
  const { t } = useLanguage();
  const statusColor = getStatusColor(result.status);
  const statusText = getStatusText(result.status);
  
  // Get translated marker name and description if available
  const markerNameKey = `marker.${result.marker.id}`;
  const markerDescKey = `marker.${result.marker.id}.description`;
  
  const markerName = t(markerNameKey as any) !== markerNameKey ? t(markerNameKey as any) : result.marker.name;
  const markerDescription = t(markerDescKey as any) !== markerDescKey ? t(markerDescKey as any) : result.marker.description;

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
          <DialogTitle>{markerName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">{t("results.value")}</p>
            <div className={`px-3 py-1 rounded-full ${statusColor}`}>
              {result.value} {result.marker.unit} ({t(statusText)})
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-1">{t("marker.description")}</p>
            <p className="text-sm text-gray-600">{markerDescription}</p>
          </div>
          
          <div>
            <p className="font-medium mb-1">{t("results.range")}</p>
            <p className="text-sm text-gray-600">
              {result.marker.minValue} - {result.marker.maxValue} {result.marker.unit}
            </p>
          </div>
          
          <div>
            <p className="font-medium mb-1">{t("implications")}</p>
            <p className="text-sm text-gray-600">{implications}</p>
          </div>
          
          <div className="mt-2 pt-2 border-t">
            <p className="text-xs text-gray-500">{t("reference")}: American Clinical Laboratory Association guidelines</p>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose}>{t("edit.cancel")}</Button>
          <Button onClick={onClose}>{t("understand")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MarkerExplanation;
