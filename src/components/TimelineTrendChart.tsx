
import { format, parseISO } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { 
  TimelineEntry,
  BloodMarker,
  bloodMarkers 
} from "@/lib/bloodTestUtils";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TimelineTrendChartProps {
  timelineData: TimelineEntry[];
}

const TimelineTrendChart = ({ timelineData }: TimelineTrendChartProps) => {
  const [selectedMarker, setSelectedMarker] = useState<string>(bloodMarkers[0].id);
  const [viewMode, setViewMode] = useState<"chart" | "table">("chart");
  
  // Sort timeline data by date (newest first for display)
  const sortedTimelineData = useMemo(() => {
    return [...timelineData].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [timelineData]);
  
  const transformedData = useMemo(() => {
    return timelineData
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(entry => {
        const result = entry.results.find(r => r.marker.id === selectedMarker);
        return {
          date: format(new Date(entry.date), "MMM d, yyyy"),
          rawDate: entry.date,
          value: result?.value || 0,
          status: result?.status || "normal",
          entryId: entry.id,
        };
      });
  }, [timelineData, selectedMarker]);

  const selectedMarkerInfo = useMemo(() => 
    bloodMarkers.find(marker => marker.id === selectedMarker),
    [selectedMarker]
  );

  const getLineColor = () => {
    const hasHighValues = transformedData.some(item => {
      const marker = bloodMarkers.find(m => m.id === selectedMarker);
      if (!marker) return false;
      
      const numericValue = typeof item.value === 'string' ? parseFloat(item.value) : item.value;
      return numericValue > marker.maxValue;
    });
    
    const hasLowValues = transformedData.some(item => {
      const marker = bloodMarkers.find(m => m.id === selectedMarker);
      if (!marker) return false;
      
      const numericValue = typeof item.value === 'string' ? parseFloat(item.value) : item.value;
      return numericValue < marker.minValue;
    });
    
    if (hasHighValues) return "#EF4444"; // red
    if (hasLowValues) return "#3B82F6"; // blue
    return "#10B981"; // green
  };

  if (timelineData.length < 2) {
    return (
      <Card className="w-full mt-6">
        <CardContent className="pt-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p>Add at least two test results to view trends over time.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Blood Test Trends</CardTitle>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("chart")}
                className={`px-3 py-1 text-sm rounded-md ${viewMode === "chart" 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-gray-100 hover:bg-gray-200"}`}
              >
                Chart View
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1 text-sm rounded-md ${viewMode === "table" 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-gray-100 hover:bg-gray-200"}`}
              >
                Date Table
              </button>
            </div>
            <div className="w-full max-w-xs">
              <Select value={selectedMarker} onValueChange={setSelectedMarker}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a marker" />
                </SelectTrigger>
                <SelectContent>
                  {bloodMarkers.map(marker => (
                    <SelectItem key={marker.id} value={marker.id}>
                      {marker.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === "chart" ? (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4 h-80">
              <ChartContainer 
                config={{
                  normal: { label: "Normal", color: "#10B981" },
                  high: { label: "High", color: "#EF4444" },
                  low: { label: "Low", color: "#3B82F6" },
                }}
              >
                <LineChart data={transformedData} margin={{ top: 20, right: 30, left: 30, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis
                    domain={[
                      (dataMin: number) => Math.max(0, dataMin * 0.9), 
                      (dataMax: number) => dataMax * 1.1
                    ]}
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  
                  {selectedMarkerInfo && (
                    <>
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line 
                        name={selectedMarkerInfo.name}
                        type="monotone" 
                        dataKey="value" 
                        stroke={getLineColor()} 
                        strokeWidth={2}
                        dot={{ r: 5 }}
                        activeDot={{ r: 7 }}
                        animationDuration={500}
                      />
                      {/* Reference lines for normal range */}
                      {selectedMarkerInfo && (
                        <>
                          <Line 
                            name="Min Normal" 
                            dataKey={() => selectedMarkerInfo.minValue}
                            stroke="#10B981" 
                            strokeDasharray="3 3"
                            dot={false}
                            activeDot={false}
                          />
                          <Line 
                            name="Max Normal" 
                            dataKey={() => selectedMarkerInfo.maxValue}
                            stroke="#EF4444" 
                            strokeDasharray="3 3"
                            dot={false}
                            activeDot={false}
                          />
                        </>
                      )}
                    </>
                  )}
                </LineChart>
              </ChartContainer>
            </div>
            
            {/* Marker information box - moved to the side instead of below */}
            {selectedMarkerInfo && (
              <div className="lg:w-1/4 p-4 bg-gray-50 rounded-lg h-fit">
                <h3 className="font-medium mb-2">{selectedMarkerInfo.name} ({selectedMarkerInfo.unit})</h3>
                <p className="text-sm">{selectedMarkerInfo.description}</p>
                <p className="text-sm mt-2">
                  <span className="font-medium">Normal range:</span> {selectedMarkerInfo.minValue} - {selectedMarkerInfo.maxValue} {selectedMarkerInfo.unit}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Test Name</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTimelineData.map(entry => {
                  const formattedDate = format(new Date(entry.date), "MMM d, yyyy");
                  const result = entry.results.find(r => r.marker.id === selectedMarker);
                  
                  if (!result) return null;
                  
                  return (
                    <TableRow key={`${entry.id}-${selectedMarker}`}>
                      <TableCell className="font-medium">{formattedDate}</TableCell>
                      <TableCell>{result.marker.name}</TableCell>
                      <TableCell className="text-right">
                        {result.value} {result.marker.unit}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs 
                          ${result.status === 'normal' ? 'bg-green-100 text-green-800' : 
                            result.status === 'high' ? 'bg-red-100 text-red-800' : 
                            'bg-blue-100 text-blue-800'}`}
                        >
                          {result.status === 'normal' ? 'Normal' : 
                            result.status === 'high' ? 'High' : 'Low'}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineTrendChart;
