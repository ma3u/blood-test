
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BloodTestResult, 
  TimelineEntry
} from "@/lib/types";
import { 
  getTimelineData,
  deleteTimelineEntry,
  saveTimelineEntry,
  clearTimelineData
} from "@/lib/bloodTestUtils";
import TimelineTrendChart from "./TimelineTrendChart";
import TimelineHeader from "./timeline/TimelineHeader";
import TimelineHistoryView from "./timeline/TimelineHistoryView";
import TimelineAddDialog from "./timeline/TimelineAddDialog";
import TimelineEditDialog from "./timeline/TimelineEditDialog";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineManagerProps {
  results: BloodTestResult[] | null;
  onBack: () => void;
  initialDate?: Date;
}

const TimelineManager = ({ results, onBack, initialDate }: TimelineManagerProps) => {
  const [timelineData, setTimelineData] = useState<TimelineEntry[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const [editableValues, setEditableValues] = useState<Record<string, string>>({});
  const { t } = useLanguage();

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

  const handleEditEntry = (entry: TimelineEntry) => {
    const values: Record<string, string> = {};
    entry.results.forEach(result => {
      values[result.marker.id] = result.value.toString();
    });
    
    setEditableValues(values);
    setSelectedDate(new Date(entry.date));
    setSelectedEntryId(entry.id);
    setShowEditDialog(true);
  };

  const handleUpdateEntry = (results: BloodTestResult[], date: Date) => {
    if (selectedEntryId) {
      // Delete old entry
      deleteTimelineEntry(selectedEntryId);
      
      // Create new entry with the same ID but updated values
      const updatedEntry = {
        id: selectedEntryId,
        date: date.toISOString(),
        results: results
      };
      
      // Save to localStorage
      const updatedTimeline = timelineData.map(entry => 
        entry.id === selectedEntryId ? updatedEntry : entry
      );
      localStorage.setItem('bloodTestTimeline', JSON.stringify(updatedTimeline));
      
      // Update state
      setTimelineData(updatedTimeline);
      setShowEditDialog(false);
      setSelectedEntryId(updatedEntry.id);
    }
  };

  const handleClearTimeline = () => {
    clearTimelineData();
    setTimelineData([]);
    setSelectedEntryId(null);
  };

  return (
    <div className="space-y-6">
      <TimelineHeader 
        onBack={onBack}
        onAddDialogOpen={() => setShowAddDialog(true)}
      />

      <Tabs defaultValue="chart">
        <TabsList>
          <TabsTrigger value="chart">Trend Chart</TabsTrigger>
          <TabsTrigger value="history">{t("timeline.select")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chart">
          <TimelineTrendChart timelineData={timelineData} />
        </TabsContent>
        
        <TabsContent value="history">
          <TimelineHistoryView
            timelineData={timelineData}
            selectedEntryId={selectedEntryId}
            setSelectedEntryId={setSelectedEntryId}
            onEditEntry={handleEditEntry}
            onDeleteEntry={handleDeleteEntry}
            onClearTimeline={handleClearTimeline}
          />
        </TabsContent>
      </Tabs>

      {/* Dialog components */}
      <TimelineAddDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onAddToTimeline={handleAddToTimeline}
      />

      <TimelineEditDialog
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
        editableValues={editableValues}
        selectedDate={selectedDate}
        onUpdateEntry={handleUpdateEntry}
      />
    </div>
  );
};

export default TimelineManager;
