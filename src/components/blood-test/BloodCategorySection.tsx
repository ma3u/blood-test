
import { BloodMarker } from "@/lib/types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

interface BloodCategorySectionProps {
  category: string;
  markers: BloodMarker[];
  categoryName: string;
  categoryColor: string;
  gender: "male" | "female";
  register: UseFormRegister<any>;
  initialValues?: Record<string, string>;
}

const BloodCategorySection = ({
  category,
  markers,
  categoryName,
  categoryColor,
  gender,
  register,
  initialValues
}: BloodCategorySectionProps) => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-lg font-medium border-b pb-1">
        {categoryName}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {markers.map((marker) => {
          // Get gender-specific reference range
          const refRange = marker.genderSpecificRanges && marker.genderSpecificRanges[gender]
            ? marker.genderSpecificRanges[gender]
            : marker.normalRange;

          return (
            <div 
              key={marker.id} 
              className={`space-y-2 p-3 rounded-md border ${categoryColor} transition-colors`}
            >
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
                  {...register(marker.id as never)}
                  className="flex-1"
                />
                <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{marker.unit}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BloodCategorySection;
