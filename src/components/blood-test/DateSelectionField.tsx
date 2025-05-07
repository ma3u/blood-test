
import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Info, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { TestDateInfo } from "@/lib/types";

interface DateSelectionFieldProps {
  form: UseFormReturn<z.infer<any>>;
  extractedDates?: TestDateInfo[];
  selectedDateIndex: number;
  handleSelectExtractedDate: (index: number) => void;
}

const DateSelectionField = ({
  form,
  extractedDates,
  selectedDateIndex,
  handleSelectExtractedDate
}: DateSelectionFieldProps) => {
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      form.setValue("date", date);
    }
  };

  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FormLabel className="text-lg font-medium">Select Date</FormLabel>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-600 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">The date when your blood test was performed. This is important for tracking changes over time.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
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
          
          {extractedDates && extractedDates.length > 0 && (
            <div className="mt-4">
              <div className="text-sm text-blue-600 font-medium mb-2">
                {extractedDates.length} dates found in your document
              </div>
              <div className="flex flex-wrap gap-2">
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
            </div>
          )}
        </FormItem>
      )}
    />
  );
};

export default DateSelectionField;
