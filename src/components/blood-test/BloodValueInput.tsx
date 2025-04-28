
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BloodMarker } from '@/lib/types';

interface BloodValueInputProps {
  marker: BloodMarker;
  value: string;
  onChange: (value: string) => void;
}

const BloodValueInput = ({ marker, value, onChange }: BloodValueInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={marker.id}>
        {marker.name} ({marker.unit})
      </Label>
      <div className="flex items-center space-x-2">
        <Input
          id={marker.id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Normal range: ${marker.normalRange}`}
          className="w-full"
        />
        <span className="text-sm text-gray-500 min-w-[100px]">
          {marker.normalRange}
        </span>
      </div>
    </div>
  );
};

export default BloodValueInput;
