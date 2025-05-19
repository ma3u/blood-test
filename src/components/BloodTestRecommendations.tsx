
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BloodTestResult } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { useUserProfile } from "@/context/UserProfileContext";

interface BloodTestRecommendationsProps {
  results: BloodTestResult[];
}

const BloodTestRecommendations = ({ results }: BloodTestRecommendationsProps) => {
  const { t } = useLanguage();
  const { profile } = useUserProfile();
  
  // Generate recommendations based on blood test results and gender
  const getRecommendations = () => {
    const recommendations: string[] = [];
    const abnormalResults = results.filter(result => !result.isNormal);
    
    if (abnormalResults.length === 0) {
      return [t("recommendations.normal" as any)];
    }
    
    // General recommendation
    recommendations.push(t("recommendations.general" as any));
    
    // Check for specific issues and provide gender-specific recommendations
    abnormalResults.forEach(result => {
      const marker = result.marker;
      
      if (marker.id === "ferritin" && result.status === "low") {
        if (profile.gender === "female") {
          recommendations.push(t("recommendations.ferritin.low.female" as any));
        } else {
          recommendations.push(t("recommendations.ferritin.low.male" as any));
        }
      }
      
      if (marker.id === "vitamin_d" && result.status === "low") {
        recommendations.push(t("recommendations.vitamin_d.low" as any));
      }
      
      // Add more marker-specific recommendations
    });
    
    // Add general lifestyle recommendations
    if (abnormalResults.length > 2) {
      recommendations.push(t("recommendations.lifestyle" as any));
    }
    
    return recommendations;
  };
  
  const recommendations = getRecommendations();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("recommendations.title" as any)}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="text-gray-700">{recommendation}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BloodTestRecommendations;
