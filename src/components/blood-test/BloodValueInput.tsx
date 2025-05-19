
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BloodMarker } from '@/lib/types';
import { AlertCircle, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface BloodValueInputProps {
  marker: BloodMarker;
  value: string;
  onChange: (value: string) => void;
}

const BloodValueInput = ({ marker, value, onChange }: BloodValueInputProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Accept empty input
    if (!inputValue) {
      setError(null);
      onChange("");
      return;
    }

    // Allow both comma and dot as decimal separators
    // Replace comma with dot for internal value processing
    const normalizedValue = inputValue.replace(',', '.');
    
    // Check if the normalized value is a valid number
    if (!/^-?\d*\.?\d*$/.test(normalizedValue)) {
      setError("Please enter a valid number");
      onChange(inputValue); // Keep original input for UX
      return;
    }

    // Clear any existing errors
    setError(null);
    
    // Pass the normalized value (with dot as decimal separator) to parent component
    onChange(normalizedValue);
  };

  return (
    <div className="space-y-2 pb-2 border-b md:border-none">
      <div className="flex items-center gap-2">
        <Label htmlFor={marker.id} className={error ? "text-destructive" : "font-medium"}>
          {marker.name} 
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-blue-600 cursor-help opacity-70" />
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-[250px] p-4">
              <p className="font-medium">{marker.name}</p>
              <p className="text-sm text-gray-600">Reference range: {marker.normalRange} {marker.unit}</p>
              {marker.description && <p className="text-sm mt-2">{marker.description}</p>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative w-full">
          <Input
            id={marker.id}
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={`Normal range: ${marker.normalRange}`}
            className={`w-full ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
            aria-invalid={!!error}
          />
        </div>
        <span className="text-sm text-gray-500 min-w-[50px] flex-shrink-0">
          {marker.unit}
        </span>
      </div>
      
      {error && (
        <div className="flex items-center mt-1 space-x-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      <div className="text-xs text-gray-500 mt-1">
        Normal range: {marker.normalRange}
      </div>
    </div>
  );
};

export default BloodValueInput;
