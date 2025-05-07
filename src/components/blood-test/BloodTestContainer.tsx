
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Info } from "lucide-react";

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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import ReferenceValuesDialog from "@/components/ReferenceValuesDialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import GenderSwitch from "@/components/GenderSwitch";

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

const BloodTestContainer = ({ onSubmit, userId, initialValues, initialDate, isEditMode, onResultsSubmit, gender: initialGender = "male" }: BloodTestContainerProps) => {
  const [bloodMarkersData, setBloodMarkersData] = useState<BloodMarker[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());
  const [gender, setGender] = useState<"male" | "female">(initialGender);

  useEffect(() => {
    // Using the imported bloodMarkers directly instead of fetching
    setBloodMarkersData(bloodMarkers);
  }, []);

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate);
    }
  }, [initialDate]);

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

  if (bloodMarkersData.length === 0) return <div>Loading markers...</div>;

  // Group markers into categories for better organization
  const groupedMarkers = bloodMarkersData.reduce<Record<string, BloodMarker[]>>((acc, marker) => {
    // Group by category if it exists, otherwise use "General"
    const category = marker.category || "General";
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
        
        <GenderSwitch gender={gender} onChange={handleGenderChange} className="mr-2" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Test Date</FormLabel>
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
                    <Calendar
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
                <FormDescription>
                  This is the date when the test was performed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Map through each category and create a section */}
          {Object.entries(groupedMarkers).map(([category, markers]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-medium">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {markers.map((marker) => {
                  // Get gender-specific reference range
                  const refRange = marker.genderSpecificRanges && marker.genderSpecificRanges[gender]
                    ? marker.genderSpecificRanges[gender]
                    : marker.normalRange;

                  return (
                    <div key={marker.id} className="space-y-2 p-3 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
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

          <Button type="submit" className="w-full">Submit Blood Test Results</Button>
        </form>
      </Form>
    </div>
  );
};

export default BloodTestContainer;
