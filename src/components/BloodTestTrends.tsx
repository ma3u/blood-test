
import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { bloodMarkers } from "@/lib/bloodTestUtils";

interface BloodTestTrendsProps {
  data: Array<{
    date: string;
    values: Record<string, number | string>;
  }>;
}

const BloodTestTrends: React.FC<BloodTestTrendsProps> = ({ data }) => {
  const { t } = useLanguage();
  const [selectedMarkers, setSelectedMarkers] = useState<string[]>(['glucose', 'cholesterol']);

  const markerOptions = useMemo(() => {
    return Object.entries(bloodMarkers)
      .filter(([key]) => {
        // Check if this marker has numeric values in the data
        return data.some(entry => 
          typeof entry.values[key] === 'number' || 
          !isNaN(Number(entry.values[key]))
        );
      })
      .map(([key, marker]) => ({
        key,
        name: marker.name,
        unit: marker.unit,
        referenceMin: marker.referenceMin,
        referenceMax: marker.referenceMax
      }));
  }, [data]);

  const chartData = useMemo(() => {
    return data
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(entry => {
        const result: any = { date: entry.date };
        selectedMarkers.forEach(marker => {
          result[marker] = typeof entry.values[marker] === 'string' 
            ? parseFloat(entry.values[marker] as string) 
            : entry.values[marker];
        });
        return result;
      });
  }, [data, selectedMarkers]);

  const handleMarkerChange = (value: string) => {
    const values = value.split(',');
    setSelectedMarkers(values.slice(0, 3)); // Limit to 3 markers for better visibility
  };

  const getMarkerColor = (index: number) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C'];
    return colors[index % colors.length];
  };

  const formatReferenceLines = (marker: string) => {
    const markerInfo = bloodMarkers[marker];
    if (!markerInfo || !markerInfo.referenceMin || !markerInfo.referenceMax) return [];
    
    return [
      { y: markerInfo.referenceMin, stroke: '#ffaeae', strokeDasharray: '3 3', label: `Min (${markerInfo.referenceMin})` },
      { y: markerInfo.referenceMax, stroke: '#ffaeae', strokeDasharray: '3 3', label: `Max (${markerInfo.referenceMax})` }
    ];
  };

  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <CardTitle className="text-xl">Blood Test Trends</CardTitle>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="space-y-2">
            <Label htmlFor="marker-select">Select markers to display (max 3)</Label>
            <Select 
              value={selectedMarkers.join(',')}
              onValueChange={handleMarkerChange}
            >
              <SelectTrigger id="marker-select" className="w-[250px]">
                <SelectValue placeholder="Select markers to display" />
              </SelectTrigger>
              <SelectContent>
                {markerOptions.map((marker, idx) => (
                  <SelectItem key={idx} value={marker.key}>
                    {marker.name} ({marker.unit})
                  </SelectItem>
                ))}
                {markerOptions.length > 1 && [
                  ['glucose', 'cholesterol'].every(m => markerOptions.some(mo => mo.key === m)) && (
                    <SelectItem key="glucose-cholesterol" value="glucose,cholesterol">
                      Glucose & Cholesterol
                    </SelectItem>
                  ),
                  ['ldl', 'hdl'].every(m => markerOptions.some(mo => mo.key === m)) && (
                    <SelectItem key="ldl-hdl" value="ldl,hdl">
                      LDL & HDL
                    </SelectItem>
                  ),
                  ['ast', 'alt'].every(m => markerOptions.some(mo => mo.key === m)) && (
                    <SelectItem key="ast-alt" value="ast,alt">
                      AST & ALT (Liver)
                    </SelectItem>
                  )
                ]}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString(undefined, { 
                      month: 'short', 
                      day: 'numeric' 
                    });
                  }}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value: number, name: string) => {
                    const marker = bloodMarkers[name];
                    return [`${value} ${marker?.unit || ''}`, marker?.name || name];
                  }}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    });
                  }}
                />
                <Legend />
                {selectedMarkers.map((marker, index) => (
                  <Line 
                    key={marker}
                    type="monotone"
                    dataKey={marker}
                    stroke={getMarkerColor(index)}
                    strokeWidth={2}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                    name={bloodMarkers[marker]?.name || marker}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              No trend data available. Add multiple test results to see trends.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodTestTrends;
