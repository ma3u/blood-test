
import React from "react";
import BloodTestTrends from "@/components/BloodTestTrends";
import BloodTestRecommendations from "@/components/BloodTestRecommendations";
import { BloodTestResult } from "@/lib/types";
import { bloodMarkers } from "@/lib/bloodTestUtils";

interface BloodTestResultsProps {
  savedResults: Array<{date: string, values: Record<string, number | string>}>;
}

const BloodTestResults: React.FC<BloodTestResultsProps> = ({ 
  savedResults 
}) => {
  // Sample data for demonstration if no saved results
  const sampleData = [
    { 
      date: '2023-01-15', 
      values: { 
        glucose: 95, 
        cholesterol: 180, 
        hdl: 55, 
        ldl: 110,
        triglycerides: 120,
        vitaminD: 35
      } 
    },
    { 
      date: '2023-04-20', 
      values: { 
        glucose: 92, 
        cholesterol: 175, 
        hdl: 58, 
        ldl: 105,
        triglycerides: 115,
        vitaminD: 38
      } 
    },
    { 
      date: '2023-07-10', 
      values: { 
        glucose: 88, 
        cholesterol: 170, 
        hdl: 60, 
        ldl: 100,
        triglycerides: 110,
        vitaminD: 42
      } 
    },
    { 
      date: '2023-10-05', 
      values: { 
        glucose: 86, 
        cholesterol: 165, 
        hdl: 62, 
        ldl: 95,
        triglycerides: 105,
        vitaminD: 45
      } 
    }
  ];

  const displayData = savedResults.length > 0 ? savedResults : sampleData;
  
  // Generate BloodTestResult objects for the recommendations component
  const generateResultObjects = (): BloodTestResult[] => {
    if (savedResults.length === 0) {
      return [
        {
          marker: {
            id: "glucose",
            name: "Glucose",
            unit: "mg/dL",
            normalRange: "70-100",
            minValue: 70,
            maxValue: 100,
            description: "Blood sugar level",
            lowImplication: "Hypoglycemia",
            highImplication: "Hyperglycemia",
          },
          value: 86,
          status: "normal" as const,
          isNormal: true
        },
        {
          marker: {
            id: "cholesterol",
            name: "Total Cholesterol",
            unit: "mg/dL",
            normalRange: "< 200",
            minValue: 0,
            maxValue: 200,
            description: "Total blood cholesterol",
            lowImplication: "",
            highImplication: "Increased cardiovascular risk",
          },
          value: 165,
          status: "normal" as const,
          isNormal: true
        }
      ];
    } else {
      const latestResult = savedResults[savedResults.length - 1];
      return Object.entries(latestResult.values)
        .map(([key, value]) => {
          const marker = bloodMarkers[key];
          if (!marker) return null;
          
          const numValue = typeof value === 'string' ? parseFloat(value) : value;
          if (isNaN(numValue)) return null;
          
          return {
            marker: {
              id: key,
              name: marker.name,
              unit: marker.unit,
              normalRange: marker.normalRange,
              minValue: marker.minValue,
              maxValue: marker.maxValue,
              description: marker.description,
              lowImplication: marker.lowImplication,
              highImplication: marker.highImplication,
            },
            value: numValue,
            status: numValue < marker.minValue ? 'low' : 
                    numValue > marker.maxValue ? 'high' : 'normal',
            isNormal: numValue >= marker.minValue && numValue <= marker.maxValue
          };
        })
        .filter(Boolean) as BloodTestResult[];
    }
  };

  return (
    <>
      <BloodTestTrends data={displayData} />
      <BloodTestRecommendations results={generateResultObjects()} />
    </>
  );
};

export default BloodTestResults;
