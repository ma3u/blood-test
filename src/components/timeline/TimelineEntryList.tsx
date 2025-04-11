
import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Edit } from "lucide-react";
import { TimelineEntry, deleteTimelineEntry } from "@/lib/bloodTestUtils";

interface TimelineEntryListProps {
  timelineData: TimelineEntry[];
  selectedEntryId: string | null;
  setSelectedEntryId: (id: string | null) => void;
  onDeleteEntry: (id: string) => void;
  onEditEntry: (entry: TimelineEntry) => void;
  onClearTimeline: () => void;
}

const TimelineEntryList = ({
  timelineData,
  selectedEntryId,
  setSelectedEntryId,
  onDeleteEntry,
  onEditEntry,
  onClearTimeline,
}: TimelineEntryListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Test History</span>
          {timelineData.length > 0 && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClearTimeline}
              title="Clear all history"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {timelineData.length === 0 ? (
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p>No test results saved yet.</p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => {}}
            >
              Save Current Results
            </Button>
          </div>
        ) : (
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
            {timelineData
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map(entry => (
                <div 
                  key={entry.id}
                  className={`p-3 rounded-lg border cursor-pointer ${
                    selectedEntryId === entry.id 
                      ? 'bg-blue-50 border-blue-300' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-center" onClick={() => setSelectedEntryId(entry.id)}>
                    <div>
                      <p className="font-medium">
                        {format(new Date(entry.date), 'MMM d, yyyy')}
                      </p>
                      <p className="text-sm text-gray-500">
                        {entry.results.length} markers
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEntryId(entry.id);
                          onEditEntry(entry);
                        }}
                      >
                        <Edit className="w-4 h-4 text-blue-500" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteEntry(entry.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineEntryList;
