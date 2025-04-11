
import { format } from "date-fns";
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

interface TimelineTrendChartProps {
  timelineData: TimelineEntry[];
}

const TimelineTrendChart = ({ timelineData }: TimelineTrendChartProps) => {
  const [selectedMarker, setSelectedMarker] = useState<string>(bloodMarkers[0].id);
  
  const transformedData = useMemo(() => {
    return timelineData
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(entry => {
        const result = entry.results.find(r => r.marker.id === selectedMarker);
        return {
          date: format(new Date(entry.date), "MMM d, yyyy"),
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
      return marker && item.value > marker.maxValue;
    });
    
    const hasLowValues = transformedData.some(item => {
      const marker = bloodMarkers.find(m => m.id === selectedMarker);
      return marker && item.value < marker.minValue;
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
        <CardTitle className="text-xl">Blood Test Trends</CardTitle>
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
      </CardHeader>
      <CardContent>
        <div className="h-80">
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
        
        {selectedMarkerInfo && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">{selectedMarkerInfo.name} ({selectedMarkerInfo.unit})</h3>
            <p className="text-sm">{selectedMarkerInfo.description}</p>
            <p className="text-sm mt-2">
              <span className="font-medium">Normal range:</span> {selectedMarkerInfo.minValue} - {selectedMarkerInfo.maxValue} {selectedMarkerInfo.unit}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineTrendChart;
