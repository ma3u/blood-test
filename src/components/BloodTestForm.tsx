
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BloodMarker, bloodMarkers, analyzeBloodTest } from "@/lib/bloodTestUtils";
import { format } from "date-fns";
import { CalendarIcon, Upload } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface BloodTestFormProps {
  onResultsSubmit: (results: any[], testDate: Date) => void;
  initialValues?: Record<string, string>;
  initialDate?: Date;
  isEditMode?: boolean;
  onSwitchToUpload?: () => void;
}

const BloodTestForm = ({ 
  onResultsSubmit, 
  initialValues = {}, 
  initialDate, 
  isEditMode = false,
  onSwitchToUpload
}: BloodTestFormProps) => {
  const [values, setValues] = useState<{ [key: string]: string }>(initialValues);
  const [testDate, setTestDate] = useState<Date>(initialDate || new Date());
  
  // Update values when initialValues prop changes
  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      setValues(initialValues);
    }
  }, [initialValues]);
  
  // Update test date when initialDate prop changes
  useEffect(() => {
    if (initialDate) {
      setTestDate(initialDate);
    }
  }, [initialDate]);

  const handleInputChange = (id: string, value: string) => {
    setValues({
      ...values,
      [id]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const results = bloodMarkers.map(marker => {
      const valueStr = values[marker.id] || "";
      const value = parseFloat(valueStr);
      if (isNaN(value) || valueStr === "") return null;
      return analyzeBloodTest(marker, value);
    }).filter(Boolean);
    
    onResultsSubmit(results, testDate);
  };

  const handleReset = () => {
    setValues({});
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {isEditMode ? "Edit Your Blood Test Values" : "Enter Your Blood Test Values"}
        </CardTitle>
        <p className="text-center text-gray-500">
          {isEditMode 
            ? "Update the values from your blood test results."
            : "Fill in the values from your blood test results. Leave fields blank if not available."
          }
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <div className="flex-1">
            <Label htmlFor="test-date" className="mb-2 block">Test Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !testDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {testDate ? format(testDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={testDate}
                  onSelect={(date) => date && setTestDate(date)}
                  initialFocus
                  disabled={(date) => date > new Date()}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          {!isEditMode && onSwitchToUpload && (
            <div className="ml-4 self-end mb-1">
              <Button
                variant="outline"
                onClick={onSwitchToUpload}
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload Results Instead
              </Button>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bloodMarkers.map((marker: BloodMarker) => (
              <div key={marker.id} className="space-y-2">
                <Label htmlFor={marker.id}>{marker.name} ({marker.unit})</Label>
                <div className="space-y-1">
                  <Input
                    id={marker.id}
                    type="text"
                    inputMode="decimal"
                    placeholder={`${marker.minValue} - ${marker.maxValue}`}
                    value={values[marker.id] || ""}
                    onChange={(e) => handleInputChange(marker.id, e.target.value)}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">Normal range: {marker.minValue} - {marker.maxValue} {marker.unit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
            >
              Clear All Values
            </Button>
            <Button type="submit">
              {isEditMode ? "Save Changes" : "Analyze Results"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BloodTestForm;
