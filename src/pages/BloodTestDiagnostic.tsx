
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
import FileUploader from "@/components/FileUploader";
import { bloodMarkers } from "@/lib/bloodTestUtils";
import BloodTestTrends from "@/components/BloodTestTrends";
import BloodTestRecommendations from "@/components/BloodTestRecommendations";
import { BloodTestResult } from "@/lib/types";

const BloodTestDiagnostic = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [entryMethod, setEntryMethod] = useState<"manual" | "upload">("upload");
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [availableDates, setAvailableDates] = useState<Array<{date: Date, label: string}>>([]);
  const [savedResults, setSavedResults] = useState<Array<{date: string, values: Record<string, number | string>}>>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  const handleResultsExtracted = (values: Record<string, string>, dates?: Array<{date: Date, label: string}>) => {
    setFormValues(values);
    
    if (dates && dates.length) {
      setAvailableDates(dates);
      toast({
        title: t("blood-test.results_processed" as any),
        description: `${dates.length} ${t("blood-test.test_dates_found" as any)}`,
      });
    }
  };
  
  const handleInputChange = (marker: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [marker]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const testDate = selectedDate || new Date().toISOString().split('T')[0];
    
    // Save the current results
    const newResults = {
      date: testDate,
      values: { ...formValues }
    };
    
    // Add to saved results, replacing if same date exists
    const updatedResults = savedResults.filter(r => r.date !== testDate);
    updatedResults.push(newResults);
    setSavedResults(updatedResults);
    
    // Reset form after saving if needed
    // setFormValues({});
    
    toast({
      title: t("blood-test.data_saved" as any),
      description: t("blood-test.results_available_dashboard" as any),
    });
  };

  return (
    <div className="container mx-auto py-8">
      <SEOHead
        title={t("blood-test.diagnostic_title" as any)}
        description={t("blood-test.diagnostic_description" as any)}
      />
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("blood-test.diagnostic_title" as any)}
      </h1>
      
      <Tabs value={entryMethod} onValueChange={(v) => setEntryMethod(v as "manual" | "upload")} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="upload">{t("blood-test.upload_results" as any)}</TabsTrigger>
          <TabsTrigger value="manual">{t("blood-test.manual_entry" as any)}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <FileUploader onResultsExtracted={handleResultsExtracted} />
          
          {Object.keys(formValues).length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl">
                  {t("blood-test.extracted_values" as any)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(formValues).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">{bloodMarkers[key]?.name || key}:</span>
                      <span>{value} {bloodMarkers[key]?.unit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleSubmit}>
                    {t("blood-test.save_results" as any)}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="manual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t("blood-test.manual_entry_title" as any)}
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(bloodMarkers).map(([key, marker]) => (
                    <div key={key} className="space-y-2">
                      <Label htmlFor={key}>{marker.name}</Label>
                      <div className="flex items-center">
                        <Input 
                          id={key}
                          type="text"
                          placeholder={`${t("blood-test.enter" as any)} ${marker.name.toLowerCase()}`}
                          value={formValues[key] || ''}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                        />
                        <span className="ml-2 text-gray-500 text-sm">{marker.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit">
                    {t("blood-test.save_results" as any)}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Sample data for demonstration - in real app, this would use the actual savedResults */}
      {(savedResults.length > 0 || true) && (
        <>
          <BloodTestTrends 
            data={savedResults.length > 0 ? savedResults : [
              { 
                date: '2023-01-15', 
                values: { 
                  glucose: 95, 
                  cholesterol: 180, 
                  hdl: 55, 
                  ldl: 110,
                  triglycerides: 120,
                  vitaminD: 35
                } 
              },
              { 
                date: '2023-04-20', 
                values: { 
                  glucose: 92, 
                  cholesterol: 175, 
                  hdl: 58, 
                  ldl: 105,
                  triglycerides: 115,
                  vitaminD: 38
                } 
              },
              { 
                date: '2023-07-10', 
                values: { 
                  glucose: 88, 
                  cholesterol: 170, 
                  hdl: 60, 
                  ldl: 100,
                  triglycerides: 110,
                  vitaminD: 42
                } 
              },
              { 
                date: '2023-10-05', 
                values: { 
                  glucose: 86, 
                  cholesterol: 165, 
                  hdl: 62, 
                  ldl: 95,
                  triglycerides: 105,
                  vitaminD: 45
                } 
              }
            ]} 
          />
          
          <BloodTestRecommendations 
            results={
              savedResults.length > 0 
                ? Object.entries(savedResults[savedResults.length - 1].values).map(([key, value]) => {
                    const marker = bloodMarkers[key];
                    if (!marker) return null;
                    
                    const numValue = typeof value === 'string' ? parseFloat(value) : value;
                    return {
                      marker: {
                        id: key,
                        name: marker.name,
                        unit: marker.unit,
                        normalRange: marker.normalRange,
                        minValue: marker.minValue,
                        maxValue: marker.maxValue,
                        description: marker.description,
                        lowImplication: marker.lowImplication,
                        highImplication: marker.highImplication,
                      },
                      value: numValue,
                      status: isNaN(numValue) ? 'normal' : 
                              numValue < marker.minValue ? 'low' : 
                              numValue > marker.maxValue ? 'high' : 'normal',
                      isNormal: isNaN(numValue) ? true : 
                                numValue >= marker.minValue && numValue <= marker.maxValue
                    };
                  }).filter(Boolean) as BloodTestResult[]
                : [
                    {
                      marker: {
                        id: "glucose",
                        name: "Glucose",
                        unit: "mg/dL",
                        normalRange: "70-100",
                        minValue: 70,
                        maxValue: 100,
                        description: "Blood sugar level",
                        lowImplication: "Hypoglycemia",
                        highImplication: "Hyperglycemia",
                      },
                      value: 86,
                      status: "normal" as const,
                      isNormal: true
                    },
                    {
                      marker: {
                        id: "cholesterol",
                        name: "Total Cholesterol",
                        unit: "mg/dL",
                        normalRange: "< 200",
                        minValue: 0,
                        maxValue: 200,
                        description: "Total blood cholesterol",
                        lowImplication: "",
                        highImplication: "Increased cardiovascular risk",
                      },
                      value: 165,
                      status: "normal" as const,
                      isNormal: true
                    }
                    // Add more sample results as needed
                  ]
            } 
          />
        </>
      )}
    </div>
  );
};

export default BloodTestDiagnostic;
