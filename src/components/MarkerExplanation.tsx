
import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { BloodMarker } from '@/lib/types';
import { useLanguage } from '@/context/LanguageContext';
import { TranslationKey } from '@/locales';

interface MarkerExplanationProps {
  marker: BloodMarker;
  gender: "male" | "female";
}

const MarkerExplanation = ({ marker, gender }: MarkerExplanationProps) => {
  const { t } = useLanguage();
  
  // Get gender-specific reference range
  const refRange = marker.genderSpecificRanges && marker.genderSpecificRanges[gender]
    ? marker.genderSpecificRanges[gender]
    : marker.normalRange;

  // Translate marker name and description if translation keys exist
  const markerNameKey = `marker.${marker.id}` as TranslationKey;
  const markerDescKey = `marker.${marker.id}.description` as TranslationKey;
  const markerLowKey = `marker.low.${marker.id}` as TranslationKey;
  const markerHighKey = `marker.high.${marker.id}` as TranslationKey;
  
  // Use dynamic translations or fall back to original values
  const markerName = t(markerNameKey) !== markerNameKey ? t(markerNameKey) : marker.name;
  const markerDesc = t(markerDescKey as any) !== markerDescKey ? t(markerDescKey as any) : marker.description;
  const markerLow = t(markerLowKey) !== markerLowKey ? t(markerLowKey) : (marker.lowImplication || t("marker.low.general" as TranslationKey));
  const markerHigh = t(markerHighKey) !== markerHighKey ? t(markerHighKey) : (marker.highImplication || t("marker.high.general" as TranslationKey));

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full p-0">
          <InfoIcon className="h-4 w-4" />
          <span className="sr-only">More information</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">{markerName}</h4>
          <p className="text-sm">{t("marker.description" as any)}: {markerDesc}</p>
          
          {(marker.lowImplication || marker.highImplication) && (
            <>
              <h5 className="text-sm font-medium">{t("implications" as any)}:</h5>
              {marker.lowImplication && (
                <p className="text-sm text-blue-600">{t("results.status.low" as TranslationKey)}: {markerLow}</p>
              )}
              {marker.highImplication && (
                <p className="text-sm text-red-600">{t("results.status.high" as TranslationKey)}: {markerHigh}</p>
              )}
            </>
          )}
          
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-medium">{t("reference" as any)}:</span> {refRange} {marker.unit}
          </p>
          
          <Button variant="link" size="sm" className="text-blue-500 p-0 h-auto">
            {t("understand" as any)}
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MarkerExplanation;
