
import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bloodMarkers } from "@/lib/bloodTestUtils";
import { useLanguage } from "@/context/LanguageContext";
import BloodValueInput from "@/components/blood-test/BloodValueInput";

interface ManualEntryFormProps {
  formValues: Record<string, string>;
  setFormValues: (values: Record<string, string>) => void;
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  isExtractedData: boolean;
}

const ManualEntryForm: React.FC<ManualEntryFormProps> = ({
  formValues,
  setFormValues,
  selectedDate,
  setSelectedDate,
  onSubmit,
  isExtractedData
}) => {
  const { t } = useLanguage();

  const handleInputChange = (marker: string, value: string) => {
    setFormValues({
      ...formValues,
      [marker]: value,
    });
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl">
          {isExtractedData 
            ? t("blood-test.extracted_values" as any)
            : t("blood-test.manual_entry_title" as any)
          }
        </CardTitle>
        
        <div className="mt-2">
          <Label htmlFor="test-date">Test Date</Label>
          <Input 
            id="test-date" 
            type="date" 
            value={selectedDate || new Date().toISOString().split('T')[0]} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full md:w-[250px]"
          />
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(bloodMarkers).map(([key, marker]) => (
              <BloodValueInput
                key={key}
                marker={marker}
                value={formValues[key] || ''}
                onChange={(value) => handleInputChange(key, value)}
              />
            ))}
          </div>
          
          <div className="flex justify-end">
            <Button type="submit">
              {t("blood-test.save_results" as any)}
            </Button>
          </div>
        </form>
      </CardContent>
    </>
  );
};

export default ManualEntryForm;
