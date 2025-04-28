
import { format } from "date-fns";
import { TimelineEntry } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import ResultsPanel from "@/components/ResultsPanel";

interface TimelineHistoryViewProps {
  timelineData: TimelineEntry[];
  selectedEntryId: string | null;
  setSelectedEntryId: (id: string | null) => void;
  onEditEntry: (entry: TimelineEntry) => void;
  onDeleteEntry: (id: string) => void;
  onClearTimeline: () => void;
}

const TimelineHistoryView = ({
  timelineData,
  selectedEntryId,
  setSelectedEntryId,
  onEditEntry,
  onDeleteEntry,
  onClearTimeline,
}: TimelineHistoryViewProps) => {
  const selectedEntry = selectedEntryId 
    ? timelineData.find(entry => entry.id === selectedEntryId) 
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1">
        <TimelineEntryList 
          timelineData={timelineData}
          selectedEntryId={selectedEntryId}
          setSelectedEntryId={setSelectedEntryId}
          onDeleteEntry={onDeleteEntry}
          onEditEntry={onEditEntry}
          onClearTimeline={onClearTimeline}
        />
      </div>
      
      <div className="col-span-2">
        {selectedEntry ? (
          <div className="space-y-4">
            <div className="bg-white border rounded-md p-3 shadow-sm">
              <p className="text-gray-700 font-medium">
                Test Date: <span className="text-blue-600">{format(new Date(selectedEntry.date), "MMMM d, yyyy")}</span>
              </p>
            </div>
            <ResultsPanel results={selectedEntry.results} />
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500">Select a test result to view details</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TimelineHistoryView;

// Import at top
import TimelineEntryList from "./TimelineEntryList";
