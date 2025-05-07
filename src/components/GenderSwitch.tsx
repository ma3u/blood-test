
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { Button } from "./ui/button";
import ReferenceValuesDialog from "./ReferenceValuesDialog";

interface GenderSwitchProps {
  gender: "male" | "female";
  onChange: (value: "male" | "female") => void;
  className?: string;
}

const GenderSwitch = ({ gender, onChange, className }: GenderSwitchProps) => {
  return (
    <div className={cn("flex items-center space-x-2 p-2 border rounded-md bg-white", className)}>
      <div className="flex items-center">
        <Label className="text-sm font-medium mr-2">Reference values for:</Label>
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

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <span className="sr-only">Show reference information</span>
            <Info className="h-4 w-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between">
            <p className="text-sm">Reference values may vary based on gender.</p>
            <ReferenceValuesDialog />
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default GenderSwitch;
