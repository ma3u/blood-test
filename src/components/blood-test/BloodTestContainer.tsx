
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { getStatus } from "@/lib/bloodTestUtils";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addTimelineEntry, getBloodMarkers, updateTimelineEntry } from "@/lib/api";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import ReferenceValuesDialog from "@/components/ReferenceValuesDialog";

interface BloodTestContainerProps {
  onSubmit?: (results: BloodTestResult[]) => void;
  userId: string;
  initialValues?: Record<string, string>;
  initialDate?: Date;
  isEditMode?: boolean;
  onResultsSubmit?: (results: BloodTestResult[], date: Date) => void;
}

// Extend the form schema to dynamically include blood marker fields
const formSchema = z.object({
  date: z.date(),
  // We'll handle the dynamic marker fields separately
});

const BloodTestContainer = ({ onSubmit, userId, initialValues, initialDate, isEditMode, onResultsSubmit }: BloodTestContainerProps) => {
  const [bloodMarkers, setBloodMarkers] = useState<BloodMarker[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());

  const { data: markersData, isLoading, isError } = useQuery({
    queryKey: ['bloodMarkers'],
    queryFn: getBloodMarkers,
  });

  useEffect(() => {
    if (markersData) {
      setBloodMarkers(markersData);
    }
  }, [markersData]);

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
    const testResults: BloodTestResult[] = bloodMarkers.map(marker => {
      const value = values[marker.id];
      const { status, isNormal } = getStatus(marker, value);

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

  if (isLoading) return <div>Loading markers...</div>;
  if (isError) return <div>Error fetching markers</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight">Blood Test Values</h2>
        <ReferenceValuesDialog />
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

          {bloodMarkers.map((marker) => (
            <div key={marker.id} className="grid gap-2">
              <Label htmlFor={marker.id}>{marker.name} ({marker.unit})</Label>
              <Input
                type="number"
                id={marker.id}
                defaultValue={initialValues ? initialValues[marker.id] : ''}
                {...form.register(marker.id as never)} {/* Cast to never to bypass TypeScript's type checking here */}
              />
            </div>
          ))}

          <Button type="submit">Submit Results</Button>
        </form>
      </Form>
    </div>
  );
};

export default BloodTestContainer;
