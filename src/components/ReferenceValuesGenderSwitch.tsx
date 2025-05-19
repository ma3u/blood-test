
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface ReferenceValuesGenderSwitchProps {
  gender: "male" | "female";
  onChange: (value: "male" | "female") => void;
  className?: string;
}

const ReferenceValuesGenderSwitch = ({ gender, onChange, className }: ReferenceValuesGenderSwitchProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={cn("flex items-center space-x-2 p-2", className)}>
      <div className="flex items-center">
        <Label className="text-sm font-medium mr-2">{t("gender.reference")}</Label>
        <RadioGroup
          value={gender}
          onValueChange={(value) => onChange(value as "male" | "female")}
          className="flex items-center space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="reference-female" />
            <Label htmlFor="reference-female" className="cursor-pointer">{t("gender.female")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="reference-male" />
            <Label htmlFor="reference-male" className="cursor-pointer">{t("gender.male")}</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default ReferenceValuesGenderSwitch;
