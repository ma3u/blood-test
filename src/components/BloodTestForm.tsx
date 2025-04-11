
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BloodMarker, bloodMarkers, analyzeBloodTest } from "@/lib/bloodTestUtils";

interface BloodTestFormProps {
  onResultsSubmit: (results: any[]) => void;
}

const BloodTestForm = ({ onResultsSubmit }: BloodTestFormProps) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (id: string, value: string) => {
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const results = bloodMarkers.map((marker) => {
      const value = parseFloat(values[marker.id] || "0");
      return analyzeBloodTest(marker, value);
    });
    
    onResultsSubmit(results);
  };

  const handleReset = () => {
    setValues({});
  };

  // Generate random sample values within normal ranges
  const fillSampleData = () => {
    const sampleValues: { [key: string]: string } = {};
    bloodMarkers.forEach((marker) => {
      const range = marker.maxValue - marker.minValue;
      const randomValue = (Math.random() * range + marker.minValue).toFixed(1);
      sampleValues[marker.id] = randomValue;
    });
    
    // Add a few abnormal values to make it interesting
    sampleValues.cholesterol = (210).toString();
    sampleValues.glucose = (105).toString();
    
    setValues(sampleValues);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Enter Blood Test Values</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bloodMarkers.map((marker: BloodMarker) => (
              <div key={marker.id} className="space-y-2">
                <Label htmlFor={marker.id} className="flex justify-between">
                  <span>{marker.name}</span> 
                  <span className="text-muted-foreground text-sm">{marker.unit}</span>
                </Label>
                <div className="flex items-center">
                  <Input
                    id={marker.id}
                    type="number"
                    step="0.01"
                    placeholder={`${marker.minValue} - ${marker.maxValue}`}
                    value={values[marker.id] || ""}
                    onChange={(e) => handleInputChange(marker.id, e.target.value)}
                    className="flex-1"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Normal range: {marker.minValue} - {marker.maxValue} {marker.unit}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={fillSampleData}
              className="flex-1"
            >
              Fill Sample Data
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleReset}
              className="flex-1"
            >
              Clear Form
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Analyze Results
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BloodTestForm;
