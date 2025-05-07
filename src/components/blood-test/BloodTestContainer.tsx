import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Info, TestTube, FileImage, FilePdf, Calendar } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BloodMarker, BloodTestResult } from "@/lib/types";
import { getStatus, bloodMarkers } from "@/lib/bloodTestUtils";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { addTimelineEntry, updateTimelineEntry } from "@/lib/api";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import ReferenceValuesDialog from "@/components/ReferenceValuesDialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import GenderSwitch from "@/components/GenderSwitch";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BloodTestContainerProps {
  onSubmit?: (results: BloodTestResult[]) => void;
  userId: string;
  initialValues?: Record<string, string>;
  initialDate?: Date;
  isEditMode?: boolean;
  onResultsSubmit?: (results: BloodTestResult[], date: Date) => void;
  gender?: "male" | "female";
}

// Extend the form schema to dynamically include blood marker fields
const formSchema = z.object({
  date: z.date(),
  // We'll handle the dynamic marker fields separately
});

// Sample extracted values from test results with multiple dates
const sampleExtractedData = [
  {
    date: new Date(2025, 2, 10), // March 10, 2025
    values: {
      hemoglobin: "15.9",
      wbc: "7.14",
      platelets: "271",
      glucose: "98",
      cholesterol: "6.75", 
      ldl: "4.68",
      hdl: "1.55",
      triglycerides: "177",
      creatinine: "0.91",
      sodium: "139",
    }
  },
  {
    date: new Date(2025, 2, 17), // March 17, 2025
    values: {
      hemoglobin: "15.8",
      wbc: "7.5",
      platelets: "265",
      glucose: "97",
      cholesterol: "6.70",
      ldl: "4.65",
      hdl: "1.50",
      triglycerides: "175",
      creatinine: "0.90",
      sodium: "140",
    }
  }
];

// Health impact categories with colors
const healthCategories = {
  critical: {
    name: "Critical Markers",
    description: "These values have direct and significant impact on vital functions",
    color: "bg-red-100 hover:bg-red-200 border-red-300"
  },
  metabolic: {
    name: "Metabolic Health",
    description: "Related to energy production and metabolic processes",
    color: "bg-orange-100 hover:bg-orange-200 border-orange-300"
  },
  cardiovascular: {
    name: "Cardiovascular Health",
    description: "Important indicators for heart health and circulation",
    color: "bg-pink-100 hover:bg-pink-200 border-pink-300"
  },
  immune: {
    name: "Immune Function",
    description: "Related to immune system health and inflammation",
    color: "bg-purple-100 hover:bg-purple-200 border-purple-300"
  },
  nutrition: {
    name: "Nutritional Status",
    description: "Indicators of vitamin and mineral status",
    color: "bg-green-100 hover:bg-green-200 border-green-300"
  },
  general: {
    name: "General Health",
    description: "Overall health indicators",
    color: "bg-blue-100 hover:bg-blue-200 border-blue-300"
  }
};

const BloodTestContainer = ({ onSubmit, userId, initialValues, initialDate, isEditMode, onResultsSubmit, gender: initialGender = "male" }: BloodTestContainerProps) => {
  const [bloodMarkersData, setBloodMarkersData] = useState<BloodMarker[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());
  const [gender, setGender] = useState<"male" | "female">(initialGender);
  const [activeTab, setActiveTab] = useState("manual");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOCRDialogOpen, setIsOCRDialogOpen] = useState(false);
  const [extractedDates, setExtractedDates] = useState<{date: Date, label: string}[]>([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [showUploadInfo, setShowUploadInfo] = useState(false);

  useEffect(() => {
    // Using the imported bloodMarkers directly instead of fetching
    const updatedMarkers = bloodMarkers.map(marker => ({
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

  const assignHealthCategory = (markerId: string): string => {
    // Assign health categories based on marker ID
    const categoryMap: Record<string, string> = {
      // Critical markers
      hemoglobin: "critical",
      wbc: "critical",
      platelets: "critical",
      
      // Metabolic markers
      glucose: "metabolic",
      hba1c: "metabolic",
      insulin: "metabolic",
      
      // Cardiovascular markers
      cholesterol: "cardiovascular",
      ldl: "cardiovascular",
      hdl: "cardiovascular",
      triglycerides: "cardiovascular",
      
      // Other categories
      creatinine: "general",
      sodium: "nutrition",
      potassium: "nutrition",
      calcium: "nutrition",
      magnesium: "nutrition",
      vitaminD: "nutrition",
      vitaminB12: "nutrition",
      ferritin: "nutrition",
      tsh: "general",
      
      // Default
      default: "general"
    };
    
    return categoryMap[markerId] || "general";
  };

  // Create a form with just the date field in the schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: initialDate || new Date(),
    }
  });

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      setSelectedDate(date);
      form.setValue("date", date);
    }
  }

  const handleGenderChange = (newGender: "male" | "female") => {
    setGender(newGender);
  };

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

  const handleSubmit = (values: any) => {
    const testResults: BloodTestResult[] = bloodMarkersData.map(marker => {
      const value = values[marker.id];
      // Pass gender to getStatus for gender-specific reference values
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or image file (JPEG, PNG).",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    // Simulate OCR processing with a timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Format available dates for display
    const availableDates = sampleExtractedData.map(data => ({
      date: data.date,
      label: data.date.toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      })
    }));
    
    setExtractedDates(availableDates);
    
    // Initialize form with first date's values
    if (sampleExtractedData.length > 0) {
      const firstDateValues = sampleExtractedData[0].values;
      Object.entries(firstDateValues).forEach(([key, value]) => {
        form.setValue(key as any, value);
      });
      
      setSelectedDate(sampleExtractedData[0].date);
      form.setValue("date", sampleExtractedData[0].date);
    }
    
    toast({
      title: "File processed successfully",
      description: `${availableDates.length} test dates found in your document.`,
    });
    
    // Show dialog with results
    setIsOCRDialogOpen(true);
  };

  const handleSelectExtractedDate = (index: number) => {
    if (index >= 0 && index < sampleExtractedData.length) {
      const dateData = sampleExtractedData[index];
      
      // Update form values
      Object.entries(dateData.values).forEach(([key, value]) => {
        form.setValue(key as any, value);
      });
      
      setSelectedDate(dateData.date);
      form.setValue("date", dateData.date);
      setSelectedDateIndex(index);
      
      toast({
        title: "Test date changed",
        description: `Showing values from ${format(dateData.date, "PPP")}.`,
      });
    }
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
        <h2 className="text-2xl font-semibold tracking-tight">Blood Test Values</h2>
        
        <div className="flex items-center gap-2">
          <GenderSwitch gender={gender} onChange={handleGenderChange} className="mr-2" />
          <ReferenceValuesDialog />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Test Date
          </CardTitle>
          <CardDescription>
            The date when your blood test was performed. This is important for tracking changes over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <FormLabel>Select Date</FormLabel>
                      {extractedDates.length > 0 && (
                        <div className="text-sm text-blue-600 font-medium">
                          {extractedDates.length} dates found in your document
                        </div>
                      )}
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={handleDateSelect}
                          disabled={(date) =>
                            date > new Date() || date < new Date('2020-01-01')
                          }
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    
                    {extractedDates.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {extractedDates.map((dateInfo, index) => (
                          <Button
                            key={index}
                            type="button"
                            size="sm"
                            variant={selectedDateIndex === index ? "default" : "outline"}
                            onClick={() => handleSelectExtractedDate(index)}
                          >
                            {dateInfo.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </FormItem>
                )}
              />
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                      <TabsTrigger value="upload">Upload Document</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="upload">
                      <div className="space-y-4">
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-6 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors">
                          <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept=".pdf,image/jpeg,image/jpg,image/png"
                            onChange={handleFileChange}
                          />
                          <label htmlFor="file-upload" className="cursor-pointer w-full text-center">
                            <div className="flex flex-col items-center justify-center gap-2">
                              {selectedFile ? (
                                <>
                                  <div className="flex items-center gap-2 text-blue-700">
                                    {selectedFile.type === 'application/pdf' ? 
                                      <FilePdf className="h-10 w-10" /> : 
                                      <FileImage className="h-10 w-10" />
                                    }
                                    {selectedFile.name}
                                  </div>
                                  <p className="text-sm text-blue-600">Click to change file</p>
                                </>
                              ) : (
                                <>
                                  <div className="flex gap-4">
                                    <FilePdf className="h-10 w-10 text-blue-500" />
                                    <FileImage className="h-10 w-10 text-blue-500" />
                                  </div>
                                  <div className="text-lg font-medium text-blue-700">Click to upload or drag and drop</div>
                                  <div className="text-sm text-blue-500">PDF, JPG, or PNG</div>
                                </>
                              )}
                            </div>
                          </label>
                        </div>
                        
                        <Button 
                          type="button"
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={handleUpload}
                          disabled={!selectedFile}
                        >
                          Process Document with OCR
                        </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full flex items-center gap-2"
                          onClick={() => setShowUploadInfo(!showUploadInfo)}
                        >
                          <Info className="h-4 w-4" />
                          {showUploadInfo ? "Hide Information" : "What documents can I upload?"}
                        </Button>
                        
                        {showUploadInfo && (
                          <Card className="bg-blue-50 border-blue-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Document Processing Information</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 text-sm">
                              <p className="mb-2">Our OCR system can extract blood test values from:</p>
                              <ul className="list-disc pl-6 space-y-1">
                                <li>PDF lab reports from most hospitals and clinics</li>
                                <li>Scanned images of lab reports (JPG, PNG)</li>
                                <li>Photos of printed lab reports</li>
                              </ul>
                              <p className="mt-2">For best results:</p>
                              <ul className="list-disc pl-6 space-y-1">
                                <li>Ensure the document is clearly readable</li>
                                <li>Make sure all values and units are visible</li>
                                <li>Include the reference ranges if available</li>
                              </ul>
                              <p className="mt-2 text-blue-700 font-medium">The system can detect multiple test dates in a single document!</p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="manual">
                      {/* Category Legend */}
                      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {Object.entries(healthCategories).map(([key, category]) => (
                          <div 
                            key={key} 
                            className={`p-3 rounded-md border ${category.color} flex items-center gap-2`}
                          >
                            <div className="flex-1">
                              <h4 className="font-medium">{category.name}</h4>
                              <p className="text-xs text-gray-600">{category.description}</p>
                            </div>
                            <TestTube className="h-5 w-5" />
                          </div>
                        ))}
                      </div>
                    
                      {/* Health Categories */}
                      {Object.entries(groupedMarkers).map(([category, markers]) => (
                        <div key={category} className="space-y-4 mb-8">
                          <h3 className="text-lg font-medium border-b pb-1">
                            {healthCategories[category as keyof typeof healthCategories]?.name || category}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {markers.map((marker) => {
                              // Get gender-specific reference range
                              const refRange = marker.genderSpecificRanges && marker.genderSpecificRanges[gender]
                                ? marker.genderSpecificRanges[gender]
                                : marker.normalRange;

                              const categoryColor = healthCategories[category as keyof typeof healthCategories]?.color || "bg-gray-100";

                              return (
                                <div 
                                  key={marker.id} 
                                  className={`space-y-2 p-3 rounded-md border ${categoryColor} transition-colors`}
                                >
                                  <div className="flex items-center justify-between">
                                    <Label htmlFor={marker.id} className="font-semibold">{marker.name}</Label>
                                    <HoverCard>
                                      <HoverCardTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-6 w-6">
                                          <Info className="h-4 w-4" />
                                        </Button>
                                      </HoverCardTrigger>
                                      <HoverCardContent className="w-80">
                                        <div className="space-y-2">
                                          <h4 className="font-medium">{marker.name}</h4>
                                          <p className="text-sm">{marker.description}</p>
                                          {marker.lowImplication && (
                                            <p className="text-sm text-blue-600">Low: {marker.lowImplication}</p>
                                          )}
                                          {marker.highImplication && (
                                            <p className="text-sm text-red-600">High: {marker.highImplication}</p>
                                          )}
                                          <p className="text-xs text-gray-500 mt-2">
                                            <span className="font-medium">Reference ({gender}):</span> {refRange} {marker.unit}
                                          </p>
                                        </div>
                                      </HoverCardContent>
                                    </HoverCard>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Input
                                      type="number"
                                      id={marker.id}
                                      placeholder={`${refRange} ${marker.unit}`}
                                      defaultValue={initialValues ? initialValues[marker.id] : ''}
                                      {...form.register(marker.id as never)}
                                      className="flex-1"
                                    />
                                    <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{marker.unit}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Submit Blood Test Results
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {/* OCR Results Dialog */}
      <AlertDialog open={isOCRDialogOpen} onOpenChange={setIsOCRDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Test Results Extracted</AlertDialogTitle>
            <AlertDialogDescription>
              We found {extractedDates.length} test dates in your document. The values have been 
              pre-filled in the form. You can switch between dates or edit any values before submitting.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="py-4">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {extractedDates.map((dateInfo, index) => (
                <Button
                  key={index}
                  type="button"
                  variant={selectedDateIndex === index ? "default" : "outline"}
                  onClick={() => handleSelectExtractedDate(index)}
                  className="w-full"
                >
                  {dateInfo.label}
                </Button>
              ))}
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700 flex items-start gap-2">
              <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Review the extracted values</p>
                <p>The values have been pre-filled based on your document. Please review and adjust if needed before submitting.</p>
              </div>
            </div>
          </div>
          
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
              setIsOCRDialogOpen(false);
              setActiveTab("manual");
            }}>
              Review Results
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BloodTestContainer;
