
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { BloodTestResult } from "@/lib/types";
import { bloodMarkers } from "@/lib/bloodTestUtils";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";

interface BloodTestFormProps {
  userId: string;
  initialValues?: Record<string, string>;
  initialDate?: Date;
  isEditMode?: boolean;
  onSwitchToUpload?: () => void;
  onResultsSubmit?: (results: BloodTestResult[], date: Date) => void;
}

export default function BloodTestForm({ 
  userId,
  initialValues = {},
  initialDate = new Date(),
  isEditMode = false,
  onSwitchToUpload,
  onResultsSubmit
}: BloodTestFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [testDate, setTestDate] = useState(initialDate ? format(initialDate, "yyyy-MM-dd") : "");
  const [values, setValues] = useState<Record<string, string>>(initialValues || {});

  const handleValueChange = (marker: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [marker]: value,
    }));
  };

  const handleClearAll = () => {
    setValues({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Convert values to BloodTestResult array
      const results: BloodTestResult[] = Object.entries(values).map(([markerId, value]) => {
        const marker = bloodMarkers[markerId];
        if (!marker) throw new Error(`Invalid marker: ${markerId}`);
        
        const numValue = Number(value);
        const isNormal = !isNaN(numValue) && 
          numValue >= marker.minValue && 
          numValue <= marker.maxValue;
        const status = isNormal ? 'normal' : (numValue < marker.minValue ? 'low' : 'high');

        return {
          marker,
          value,
          isNormal,
          status
        };
      });

      // If in edit mode and handling via parent component
      if (isEditMode && onResultsSubmit) {
        onResultsSubmit(results, testDate ? new Date(testDate) : new Date());
        return;
      }

      // Otherwise save to localStorage for now until we set up Supabase tables
      // We'll skip the Supabase code for now since the tables don't exist yet
      localStorage.setItem(`blood_test_${Date.now()}`, JSON.stringify({
        user_id: userId,
        test_date: testDate,
        test_values: values,
      }));

      toast({
        title: "Success",
        description: "Blood test results saved successfully",
      });

      // Reset form if not in edit mode
      if (!isEditMode) {
        setTestDate("");
        setValues({});
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Enter Your Blood Test Values</h1>
          <p className="text-gray-500">Fill in the values from your blood test results. Leave fields blank if not available.</p>
        </div>
        {onSwitchToUpload && (
          <Button 
            type="button" 
            variant="outline"
            onClick={onSwitchToUpload}
            className="whitespace-nowrap"
          >
            Upload Results Instead
          </Button>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Test Date</label>
        <Input
          type="date"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
          required
          className="mb-6"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(bloodMarkers).map((marker) => (
          <div key={marker.id} className="space-y-2">
            <label className="block text-sm font-medium">
              {marker.name} ({marker.unit})
            </label>
            <Input
              type="text"
              placeholder={marker.normalRange}
              value={values[marker.id] || ""}
              onChange={(e) => handleValueChange(marker.id, e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Normal range: {marker.normalRange} {marker.unit}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleClearAll}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear All Values
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Analyze Results"}
        </Button>
      </div>
    </form>
  );
};
