
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";
import FileUploader from "@/components/FileUploader";
import ManualEntryForm from "@/components/blood-test/ManualEntryForm";
import EntryMethodTabs from "@/components/blood-test/EntryMethodTabs";

interface BloodTestEntryMethodsProps {
  entryMethod: "manual" | "upload";
  setEntryMethod: (method: "manual" | "upload") => void;
  formValues: Record<string, string>;
  setFormValues: (values: Record<string, string>) => void;
  availableDates: Array<{date: Date, label: string}>;
  setAvailableDates: (dates: Array<{date: Date, label: string}>) => void;
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResultsExtracted: (values: Record<string, string>, dates?: Array<{date: Date, label: string}>) => void;
}

const BloodTestEntryMethods: React.FC<BloodTestEntryMethodsProps> = ({
  entryMethod,
  setEntryMethod,
  formValues,
  setFormValues,
  availableDates,
  setAvailableDates,
  selectedDate,
  setSelectedDate,
  onSubmit,
  onResultsExtracted
}) => {
  const { t } = useLanguage();
  
  return (
    <Tabs value={entryMethod} onValueChange={(v) => setEntryMethod(v as "manual" | "upload")} className="w-full max-w-4xl mx-auto">
      <EntryMethodTabs activeTab={entryMethod} setActiveTab={(tab) => setEntryMethod(tab as "manual" | "upload")} />
      
      <TabsContent value="upload" className="space-y-6">
        <FileUploader onResultsExtracted={onResultsExtracted} />
        
        {Object.keys(formValues).length > 0 && (
          <Card className="mt-6">
            <ManualEntryForm
              formValues={formValues}
              setFormValues={setFormValues}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              onSubmit={onSubmit}
              isExtractedData={true}
            />
          </Card>
        )}
      </TabsContent>
      
      <TabsContent value="manual" className="space-y-6">
        <Card>
          <ManualEntryForm
            formValues={formValues}
            setFormValues={setFormValues}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            onSubmit={onSubmit}
            isExtractedData={false}
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BloodTestEntryMethods;
