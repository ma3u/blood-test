import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { BloodMarker, BloodTestResult } from '@/lib/types';
import { useLanguage } from '@/context/LanguageContext';
import { TranslationKey } from '@/locales';

interface MarkerExplanationProps {
  marker?: BloodMarker;
  gender?: "male" | "female";
  result?: BloodTestResult;
  onClose?: () => void;
}

const MarkerExplanation = ({ marker, gender = "male", result, onClose }: MarkerExplanationProps) => {
  const { t } = useLanguage();
  
  // Use marker from result if provided, otherwise use the directly provided marker
  const activeMarker = result ? result.marker : marker;
  
  // If no marker is available, don't render
  if (!activeMarker) {
    return null;
  }
  
  // Get gender-specific reference range
  const refRange = activeMarker.genderSpecificRanges && activeMarker.genderSpecificRanges[gender]
    ? activeMarker.genderSpecificRanges[gender]
    : activeMarker.normalRange;

  // Translate marker name and description if translation keys exist
  const markerNameKey = `marker.${activeMarker.id}` as TranslationKey;
  const markerDescKey = `marker.${activeMarker.id}.description` as TranslationKey;
  const markerLowKey = `marker.low.${activeMarker.id}` as TranslationKey;
  const markerHighKey = `marker.high.${activeMarker.id}` as TranslationKey;
  
  // Use dynamic translations or fall back to original values
  const markerName = t(markerNameKey) !== markerNameKey ? t(markerNameKey) : activeMarker.name;
  const markerDesc = t(markerDescKey as any) !== markerDescKey ? t(markerDescKey as any) : activeMarker.description;
  const markerLow = t(markerLowKey) !== markerLowKey ? t(markerLowKey) : (activeMarker.lowImplication || t("marker.low.general" as TranslationKey));
  const markerHigh = t(markerHighKey) !== markerHighKey ? t(markerHighKey) : (activeMarker.highImplication || t("marker.high.general" as TranslationKey));

  // If we're showing it as a dialog (with onClose function), show a full dialog
  if (onClose) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{markerName}</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </div>
          
          <div className="space-y-4">
            <p>{markerDesc}</p>
            
            {result && (
              <div className="p-3 border rounded-md bg-gray-50">
                <p className="font-medium">
                  {t("results.summary.your_value")}: <span className={
                    result.status === "high" ? "text-red-600" : 
                    result.status === "low" ? "text-blue-600" : 
                    "text-green-600"
                  }>{result.value} {activeMarker.unit}</span>
                </p>
                <p className="text-sm text-gray-600">
                  {t("results.summary.normal_range")}: {refRange} {activeMarker.unit}
                </p>
              </div>
            )}
            
            {(activeMarker.lowImplication || activeMarker.highImplication) && (
              <>
                <h4 className="font-medium">{t("implications" as any)}:</h4>
                {activeMarker.lowImplication && (
                  <p className="text-blue-600">{t("results.status.low" as TranslationKey)}: {markerLow}</p>
                )}
                {activeMarker.highImplication && (
                  <p className="text-red-600">{t("results.status.high" as TranslationKey)}: {markerHigh}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Otherwise show the hover card
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
          
          {(activeMarker.lowImplication || activeMarker.highImplication) && (
            <>
              <h5 className="text-sm font-medium">{t("implications" as any)}:</h5>
              {activeMarker.lowImplication && (
                <p className="text-sm text-blue-600">{t("results.status.low" as TranslationKey)}: {markerLow}</p>
              )}
              {activeMarker.highImplication && (
                <p className="text-sm text-red-600">{t("results.status.high" as TranslationKey)}: {markerHigh}</p>
              )}
            </>
          )}
          
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-medium">{t("reference" as any)}:</span> {refRange} {activeMarker.unit}
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
