import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BloodMarker, BloodTestResult } from "@/lib/types";
import { getStatus, bloodMarkers } from "@/lib/bloodTestUtils";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { addTimelineEntry, updateTimelineEntry } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import GenderSwitch from "@/components/GenderSwitch";
import ReferenceValuesDialog from "@/components/ReferenceValuesDialog";
import { useLanguage } from "@/context/LanguageContext";

// Import our components
import BloodCategorySection from "./BloodCategorySection";
import DateSelectionField from "./DateSelectionField";
import EntryMethodTabs from "./EntryMethodTabs";
import FileUploadTab from "./FileUploadTab";
import OCRResultsDialog from "./OCRResultsDialog";
import { assignHealthCategory } from "./HealthCategories";
import { useSampleData } from "./useSampleData";
import { useHealthCategories } from "./HealthCategories";

interface BloodTestContainerProps {
  onSubmit?: (results: BloodTestResult[]) => void;
  userId: string;
  initialValues?: Record<string, string>;
  initialDate?: Date;
  isEditMode?: boolean;
  onResultsSubmit?: (results: BloodTestResult[], date: Date) => void;
  gender?: "male" | "female";
}

// Form schema definition
const formSchema = z.object({
  date: z.date(),
  // We'll handle the dynamic marker fields separately
});

// Define the correct type for form values to fix the TypeScript error
type FormValues = z.infer<typeof formSchema> & Record<string, string>;

const BloodTestContainer = ({
  onSubmit,
  userId,
  initialValues,
  initialDate,
  isEditMode,
  onResultsSubmit,
  gender: initialGender = "male"
}: BloodTestContainerProps) => {
  const [bloodMarkersData, setBloodMarkersData] = useState<BloodMarker[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());
  const [gender, setGender] = useState<"male" | "female">(initialGender);
  const [activeTab, setActiveTab] = useState("manual");
  const { t } = useLanguage();
  const healthCategories = useHealthCategories();
  
  // Use our custom hook for sample data and file upload logic
  const {
    selectedFile,
    setSelectedFile,
    isUploading,
    extractedDates,
    selectedDateIndex,
    isOCRDialogOpen,
    setIsOCRDialogOpen,
    handleUpload,
    handleSelectExtractedDate,
    getCurrentDateValues,
    getSelectedDate
  } = useSampleData();

  useEffect(() => {
    // Process bloodMarkers and assign categories
    const updatedMarkers = Object.values(bloodMarkers).map(marker => ({
      ...marker,
      category: assignHealthCategory(marker.id)
    }));
    setBloodMarkersData(updatedMarkers);
  }, []);

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate);
    }
  }, [initialDate]);

  const handleGenderChange = (newGender: "male" | "female") => {
    setGender(newGender);
  };

  // Create form with schema
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: initialDate || new Date(),
    } as unknown as Record<string, string>
  });

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      setSelectedDate(date);
      form.setValue("date", date);
    }
  }

  // Handle OCR dialog close
  const handleOCRDialogClose = () => {
    setIsOCRDialogOpen(false);
    setActiveTab("manual");
    
    // Set the form values based on the selected date
    const values = getCurrentDateValues();
    Object.entries(values).forEach(([key, value]) => {
      form.setValue(key as string, value as string);
    });
    
    const selectedDateObj = getSelectedDate();
    setSelectedDate(selectedDateObj);
    form.setValue("date", selectedDateObj);
  };

  // API mutations
  const { mutate: addEntryMutate } = useMutation({
    mutationFn: addTimelineEntry,
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Successfully added to timeline.",
      });
    },
    onError: () => {
      toast({
        title: "Error!",
        description: "Failed to add to timeline.",
      });
    }
  });

  const { mutate: updateEntryMutate } = useMutation({
    mutationFn: updateTimelineEntry,
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Successfully updated timeline entry.",
      });
    },
    onError: () => {
      toast({
        title: "Error!",
        description: "Failed to update timeline entry.",
      });
    }
  });

  // Form submission handler
  const handleSubmit = (values: FormValues) => {
    const testResults: BloodTestResult[] = bloodMarkersData.map(marker => {
      const value = values[marker.id];
      const { status, isNormal } = getStatus(marker, value, gender);

      return {
        marker: marker,
        value: value,
        status: status,
        isNormal: isNormal,
      };
    });

    if (isEditMode && onResultsSubmit) {
      updateEntryMutate({ userId, date: selectedDate, results: testResults });
      onResultsSubmit(testResults, selectedDate);
    } else {
      addEntryMutate({ userId, date: selectedDate, results: testResults });
    }

    onSubmit?.(testResults);
  };

  if (bloodMarkersData.length === 0) return <div>Loading markers...</div>;

  // Group markers by health category
  const groupedMarkers = bloodMarkersData.reduce<Record<string, BloodMarker[]>>((acc, marker) => {
    const category = marker.category || "general";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(marker);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight">{t("blood.test.title")}</h2>
        
        <div className="flex items-center gap-2">
          <GenderSwitch gender={gender} onChange={handleGenderChange} className="mr-2" />
          <ReferenceValuesDialog />
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              {/* Side-by-side layout with improved alignment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column - Date Selection */}
                <DateSelectionField 
                  form={form}
                  extractedDates={extractedDates}
                  selectedDateIndex={selectedDateIndex}
                  handleSelectExtractedDate={handleSelectExtractedDate}
                />
                
                {/* Right column - Entry Method Tabs */}
                <EntryMethodTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>

              {/* Content area for manual entry or file upload */}
              <div>
                {activeTab === "manual" && (
                  <div className="space-y-6">
                    {/* Health Categories */}
                    {Object.entries(groupedMarkers).map(([category, markers]) => {
                      const categoryKey = category as keyof typeof healthCategories;
                      return (
                        <BloodCategorySection
                          key={category}
                          category={category}
                          markers={markers}
                          categoryName={healthCategories[categoryKey]?.name || category}
                          categoryColor={healthCategories[categoryKey]?.color || "bg-gray-100"}
                          register={form.register}
                          initialValues={initialValues}
                        />
                      );
                    })}
                  </div>
                )}

                {activeTab === "upload" && (
                  <FileUploadTab
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    handleUpload={handleUpload}
                    isUploading={isUploading}
                  />
                )}
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t("blood.test.submit")}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {/* OCR Results Dialog */}
      <OCRResultsDialog 
        isOpen={isOCRDialogOpen}
        onOpenChange={setIsOCRDialogOpen}
        extractedDates={extractedDates}
        selectedDateIndex={selectedDateIndex}
        handleSelectExtractedDate={handleSelectExtractedDate}
        onClose={handleOCRDialogClose}
      />
    </div>
  );
};

export default BloodTestContainer;
