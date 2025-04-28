import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { BloodTestResult } from "@/lib/bloodTestUtils";
import { format } from "date-fns";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // If in edit mode and handling via parent component
      if (isEditMode && onResultsSubmit) {
        const results: BloodTestResult[] = Object.entries(values).map(([marker, value]) => ({
          marker: { id: marker, name: marker, unit: "" },
          value: value,
          isNormal: true
        }));
        onResultsSubmit(results, testDate ? new Date(testDate) : new Date());
        return;
      }

      // Otherwise save to Supabase
      const { error } = await supabase
        .from("blood_tests")
        .insert({
          user_id: userId,
          test_date: testDate,
          test_values: values,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blood test results saved successfully",
      });

      // Reset form
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="date"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Input
          placeholder="Hemoglobin"
          value={values.hemoglobin || ""}
          onChange={(e) => handleValueChange("hemoglobin", e.target.value)}
        />
        <Input
          placeholder="White Blood Cells"
          value={values.wbc || ""}
          onChange={(e) => handleValueChange("wbc", e.target.value)}
        />
        <Input
          placeholder="Red Blood Cells"
          value={values.rbc || ""}
          onChange={(e) => handleValueChange("rbc", e.target.value)}
        />
        <Input
          placeholder="Glucose"
          value={values.glucose || ""}
          onChange={(e) => handleValueChange("glucose", e.target.value)}
        />
        <Input
          placeholder="Cholesterol"
          value={values.cholesterol || ""}
          onChange={(e) => handleValueChange("cholesterol", e.target.value)}
        />
        <Input
          placeholder="Vitamin D"
          value={values.vitaminD || ""}
          onChange={(e) => handleValueChange("vitaminD", e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Results"}
        </Button>
        
        {onSwitchToUpload && (
          <Button 
            type="button" 
            variant="outline"
            onClick={onSwitchToUpload}
          >
            Upload Results
          </Button>
        )}
      </div>
    </form>
  );
}
