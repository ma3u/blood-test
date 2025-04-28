
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface GenderSwitchProps {
  gender: "male" | "female";
  onChange: (value: "male" | "female") => void;
  className?: string;
}

const GenderSwitch = ({ gender, onChange, className }: GenderSwitchProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Label className="text-sm font-medium mr-4">Reference values for:</Label>
      <RadioGroup
        value={gender}
        onValueChange={(value) => onChange(value as "male" | "female")}
        className="flex items-center space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female" className="cursor-pointer">Female</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male" className="cursor-pointer">Male</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default GenderSwitch;
