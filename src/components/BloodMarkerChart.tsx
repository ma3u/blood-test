import { useState, useEffect } from "react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ReferenceLine,
  Cell,
  CartesianGrid
} from "recharts";
import { BloodMarker, BloodTestResult } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BloodMarkerChartProps {
  results: BloodTestResult[];
}

const BloodMarkerChart = ({ results }: BloodMarkerChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const data = results.map(result => {
      const numericValue = typeof result.value === 'string' ? parseFloat(result.value) : result.value;
      const percentFromMin = ((numericValue - result.marker.minValue) / 
        (result.marker.maxValue - result.marker.minValue)) * 100;
      
      return {
        name: result.marker.name,
        value: numericValue,
        unit: result.marker.unit,
        min: result.marker.minValue,
        max: result.marker.maxValue,
        percentFromMin,
        status: result.status
      };
    });
    
    setChartData(data);
  }, [results]);

  const getBarColor = (status: string) => {
    switch (status) {
      case "normal":
        return "#10B981"; // green-500
      case "low":
        return "#3B82F6"; // blue-500
      case "high":
        return "#EF4444"; // red-500
      default:
        return "#6B7280"; // gray-500
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 shadow-md border rounded-md">
          <p className="font-medium">{data.name}</p>
          <p>
            Value: <span className="font-medium">{data.value} {data.unit}</span>
          </p>
          <p className="text-sm text-gray-600">
            Normal range: {data.min} - {data.max} {data.unit}
          </p>
          <p className="text-sm mt-1">
            Status: <span 
              className={`font-medium ${
                data.status === "normal" 
                  ? "text-green-600" 
                  : data.status === "low" 
                    ? "text-blue-600" 
                    : "text-red-600"
              }`}
            >
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Blood Test Results Visualization</h3>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-3/4 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis 
                type="number" 
                domain={[0, 100]} 
                tickFormatter={() => ''} 
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={100}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine x={0} stroke="#666" />
              <ReferenceLine x={100} stroke="#666" />
              <Bar dataKey="percentFromMin" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="lg:w-1/4 mt-4 lg:mt-0 lg:ml-4">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 space-y-3">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: getBarColor(item.status) }}
                />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-gray-600">
                    {item.value} {item.unit} 
                    <span className="text-xs ml-1">
                      ({item.min}-{item.max})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodMarkerChart;
