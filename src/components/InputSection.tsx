
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BloodTestForm from "@/components/BloodTestForm";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";

interface InputSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onResultsSubmit: (results: any[], date: Date) => void;
  onResultsExtracted: (values: Record<string, string>) => void;
  initialValues: Record<string, string>;
  initialDate: Date;
  showForm: boolean;
  results: any[] | null;
  onCancelEditing?: () => void;
}

const InputSection = ({
  activeTab,
  setActiveTab,
  onResultsSubmit,
  onResultsExtracted,
  initialValues,
  initialDate,
  showForm,
  results,
  onCancelEditing
}: InputSectionProps) => {
  if (!showForm) return null;

  // When in edit mode (reviewing existing results)
  if (showForm && results) {
    return (
      <div className="mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-700">You are now reviewing and modifying the extracted data. Submit the form to update your results.</p>
        </div>
        <BloodTestForm 
          onResultsSubmit={onResultsSubmit} 
          initialValues={initialValues}
          initialDate={initialDate}
          isEditMode={true}
        />
        <div className="flex justify-end mt-4">
          <Button 
            variant="outline" 
            onClick={onCancelEditing}
            className="mt-2"
          >
            Cancel Editing
          </Button>
        </div>
      </div>
    );
  }

  const handleSwitchToUpload = () => {
    setActiveTab("upload");
  };

  // For new test entry (showing both tabs)
  return (
    <div className="mt-8">
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="upload">Upload Test Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="manual">
          <BloodTestForm 
            onResultsSubmit={onResultsSubmit} 
            initialValues={{}} // Always use empty values for new tests
            initialDate={new Date()} // Always use current date for new tests
            onSwitchToUpload={handleSwitchToUpload}
          />
        </TabsContent>
        
        <TabsContent value="upload">
          <FileUploader onResultsExtracted={onResultsExtracted} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InputSection;
