
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BloodTestForm from "@/components/BloodTestForm";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

interface InputSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onResultsSubmit: (results: any[], date: Date) => void;
  onResultsExtracted: (values: Record<string, string>, dates?: Array<{date: Date, label: string}>) => void;
  initialValues: Record<string, string>;
  initialDate: Date;
  showForm: boolean;
  results: any[] | null;
  onCancelEditing?: () => void;
  availableDates?: Array<{date: Date, label: string}>;
  onDateSelect?: (date: Date) => void;
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
  onCancelEditing,
  availableDates,
  onDateSelect
}: InputSectionProps) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");
  const { t } = useLanguage();

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
      }
    };
    getCurrentUser();
  }, []);

  useEffect(() => {
    // Log the initial date when component mounts or initialDate changes
    console.log("InputSection initialDate:", initialDate);
  }, [initialDate]);

  if (!showForm) return null;

  // When in edit mode (reviewing existing results)
  if (showForm && results) {
    return (
      <div className="mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-700">You are now reviewing and modifying the extracted data. Submit the form to update your results.</p>
        </div>
        {userId && (
          <BloodTestForm 
            userId={userId}
            onResultsSubmit={onResultsSubmit} 
            initialValues={initialValues}
            initialDate={initialDate}
            isEditMode={true}
          />
        )}
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

  const handleDateSelect = (index: string) => {
    const idx = parseInt(index, 10);
    setSelectedDateIndex(idx);
    console.log("Selected date at index:", idx);
    
    if (availableDates && onDateSelect) {
      console.log("Selecting date:", availableDates[idx].date);
      onDateSelect(availableDates[idx].date);
    }
  };

  // For new test entry (showing both tabs)
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: Available Test Dates */}
        <div>
          {availableDates && availableDates.length > 0 ? (
            <div className="mb-6 bg-green-50 p-4 rounded-lg border border-green-200">
              <Label htmlFor="available-dates" className="block mb-2 font-medium text-green-800">
                {t("date.extracted")}
              </Label>
              <div className="flex flex-col gap-2">
                <Select 
                  value={selectedDateIndex.toString()} 
                  onValueChange={handleDateSelect}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder={t("select.date")} />
                  </SelectTrigger>
                  <SelectContent>
                    {availableDates.map((dateObj, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {dateObj.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-sm text-green-600">
                  {availableDates.length} test dates found in your document
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
              <div className="text-center text-blue-700">
                <p className="font-medium mb-1">No test dates available yet</p>
                <p className="text-sm">Upload a document to extract test dates automatically</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Right column: Tabs */}
        <div>
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="manual">{t("manual.entry")}</TabsTrigger>
              <TabsTrigger value="upload">{t("file.upload")}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="manual">
              {userId && (
                <BloodTestForm 
                  userId={userId}
                  onResultsSubmit={onResultsSubmit} 
                  initialValues={initialValues} 
                  initialDate={initialDate} 
                  onSwitchToUpload={handleSwitchToUpload}
                />
              )}
            </TabsContent>
            
            <TabsContent value="upload">
              <FileUploader onResultsExtracted={onResultsExtracted} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
