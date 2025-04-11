
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Trash2, Calendar as CalendarIcon, PlusCircle } from "lucide-react";
import { 
  BloodTestResult, 
  TimelineEntry, 
  getTimelineData,
  deleteTimelineEntry,
  saveTimelineEntry,
  clearTimelineData
} from "@/lib/bloodTestUtils";
import TimelineTrendChart from "./TimelineTrendChart";
import ResultsPanel from "./ResultsPanel";

interface TimelineManagerProps {
  results: BloodTestResult[] | null;
  onBack: () => void;
  initialDate?: Date;
}

const TimelineManager = ({ results, onBack, initialDate }: TimelineManagerProps) => {
  const [timelineData, setTimelineData] = useState<TimelineEntry[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  // Load timeline data
  useEffect(() => {
    const data = getTimelineData();
    setTimelineData(data);
  }, []);

  const handleAddToTimeline = () => {
    if (results) {
      const newEntry = saveTimelineEntry(selectedDate, results);
      setTimelineData([...timelineData, newEntry]);
      setShowAddDialog(false);
    }
  };

  const handleDeleteEntry = (id: string) => {
    deleteTimelineEntry(id);
    setTimelineData(timelineData.filter(entry => entry.id !== id));
    if (selectedEntryId === id) {
      setSelectedEntryId(null);
    }
  };

  const handleClearTimeline = () => {
    clearTimelineData();
    setTimelineData([]);
    setSelectedEntryId(null);
  };

  const selectedEntry = selectedEntryId 
    ? timelineData.find(entry => entry.id === selectedEntryId) 
    : null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Blood Test Timeline</h2>
          <p className="text-gray-600">Track your blood test results over time</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={onBack}>
            Back to Results
          </Button>
          <Button onClick={() => setShowAddDialog(true)}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Save Current Results
          </Button>
        </div>
      </div>

      <Tabs defaultValue="chart">
        <TabsList>
          <TabsTrigger value="chart">Trend Chart</TabsTrigger>
          <TabsTrigger value="history">Test History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chart">
          <TimelineTrendChart timelineData={timelineData} />
        </TabsContent>
        
        <TabsContent value="history">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Test History</span>
                    {timelineData.length > 0 && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={handleClearTimeline}
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
                        onClick={() => setShowAddDialog(true)}
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
                            className={`p-3 rounded-lg border cursor-pointer flex justify-between items-center ${
                              selectedEntryId === entry.id 
                                ? 'bg-blue-50 border-blue-300' 
                                : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setSelectedEntryId(entry.id)}
                          >
                            <div>
                              <p className="font-medium">
                                {format(new Date(entry.date), 'MMM d, yyyy')}
                              </p>
                              <p className="text-sm text-gray-500">
                                {entry.results.length} markers
                              </p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteEntry(entry.id);
                              }}
                            >
                              <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                            </Button>
                          </div>
                        ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="col-span-2">
              {selectedEntry ? (
                <ResultsPanel results={selectedEntry.results} />
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500">Select a test result to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
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
              className="mx-auto"
              disabled={(date) => date > new Date()}
            />
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddToTimeline}>
              Save to Timeline
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TimelineManager;
