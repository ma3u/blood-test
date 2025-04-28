
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface BloodTestFormProps {
  userId: string;
}

export default function BloodTestForm({ userId }: BloodTestFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [testDate, setTestDate] = useState("");
  const [values, setValues] = useState<Record<string, string>>({});

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
      const { error } = await supabase.from("blood_tests").insert({
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
      setTestDate("");
      setValues({});
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
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Results"}
      </Button>
    </form>
  );
}
