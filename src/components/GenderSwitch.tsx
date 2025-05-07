
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { Button } from "./ui/button";
import ReferenceValuesDialog from "./ReferenceValuesDialog";
import { useLanguage } from "@/context/LanguageContext";

interface GenderSwitchProps {
  gender: "male" | "female";
  onChange: (value: "male" | "female") => void;
  className?: string;
}

const GenderSwitch = ({ gender, onChange, className }: GenderSwitchProps) => {
  const { t } = useLanguage();
  
  // Improved handler to ensure the event doesn't bubble up to the form
  const handleInfoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Just show the HoverCard, no additional action needed
  };

  return (
    <div className={cn("flex items-center space-x-2 p-2 border rounded-md bg-white", className)}>
      <div className="flex items-center">
        <Label className="text-sm font-medium mr-2">{t("gender.reference")}</Label>
        <RadioGroup
          value={gender}
          onValueChange={(value) => onChange(value as "male" | "female")}
          className="flex items-center space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female" className="cursor-pointer">{t("gender.female")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male" className="cursor-pointer">{t("gender.male")}</Label>
          </div>
        </RadioGroup>
      </div>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0"
            type="button"
            onClick={handleInfoClick}
            aria-label={t("gender.info")}
          >
            <span className="sr-only">{t("gender.info")}</span>
            <Info className="h-4 w-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between">
            <p className="text-sm">{t("gender.info.text")}</p>
            <ReferenceValuesDialog />
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default GenderSwitch;
