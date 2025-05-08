
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { BloodTestResult } from "@/lib/types";
import { useRecommendations, Recommendation, RecommendationType } from "@/lib/recommendationUtils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, Pill, Activity, Wind } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecommendationItemProps {
  recommendation: Recommendation;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({ recommendation }) => {
  const { t } = useLanguage();
  
  const importanceColors = {
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{recommendation.title}</CardTitle>
          <Badge 
            variant="outline" 
            className={`${importanceColors[recommendation.importance]} text-xs`}
          >
            {t(`recommendation.importance.${recommendation.importance}`)}
          </Badge>
        </div>
        
        {recommendation.markers.length > 0 && (
          <CardDescription className="text-xs">
            {t("recommendation.related.to")}: {recommendation.markers.join(", ")}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm">{recommendation.description}</p>
        
        {recommendation.contraindications && recommendation.contraindications.length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-red-500 font-medium">
              {t("recommendation.contraindications")}: {recommendation.contraindications.join(", ")}
            </p>
          </div>
        )}
        
        <div className="mt-3 text-xs text-muted-foreground">
          <p>{t(`recommendation.evidence.${recommendation.evidenceLevel}`)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const RecommendationsList: React.FC<{recommendations: Recommendation[], type: RecommendationType}> = ({ 
  recommendations, 
  type 
}) => {
  const { t } = useLanguage();
  
  if (recommendations.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        {t("recommendation.none")}
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {recommendations.map((recommendation) => (
        <RecommendationItem 
          key={`${recommendation.id}-${recommendation.type}`}
          recommendation={recommendation} 
        />
      ))}
    </div>
  );
};

interface RecommendationsPanelProps {
  bloodTestResults: BloodTestResult[];
}

const RecommendationsPanel: React.FC<RecommendationsPanelProps> = ({ bloodTestResults }) => {
  const { t } = useLanguage();
  const {
    nutritionRecommendations,
    supplementRecommendations,
    exerciseRecommendations,
    stressRecommendations
  } = useRecommendations(bloodTestResults);
  
  const totalRecommendations = 
    nutritionRecommendations.length + 
    supplementRecommendations.length + 
    exerciseRecommendations.length + 
    stressRecommendations.length;

  if (totalRecommendations === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t("recommendations.title")}</CardTitle>
          <CardDescription>{t("recommendations.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center py-8 text-muted-foreground">
            {t("recommendation.none.all")}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("recommendations.title")}</CardTitle>
        <CardDescription>{t("recommendations.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="nutrition">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="nutrition" className="flex items-center gap-2">
              <Apple size={16} />
              <span className="hidden sm:inline">{t("recommendation.type.nutrition")}</span>
              {nutritionRecommendations.length > 0 && (
                <Badge variant="secondary" className="ml-1">{nutritionRecommendations.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="supplements" className="flex items-center gap-2">
              <Pill size={16} />
              <span className="hidden sm:inline">{t("recommendation.type.supplement")}</span>
              {supplementRecommendations.length > 0 && (
                <Badge variant="secondary" className="ml-1">{supplementRecommendations.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="exercise" className="flex items-center gap-2">
              <Activity size={16} />
              <span className="hidden sm:inline">{t("recommendation.type.exercise")}</span>
              {exerciseRecommendations.length > 0 && (
                <Badge variant="secondary" className="ml-1">{exerciseRecommendations.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="stress" className="flex items-center gap-2">
              <Wind size={16} />
              <span className="hidden sm:inline">{t("recommendation.type.lifestyle")}</span>
              {stressRecommendations.length > 0 && (
                <Badge variant="secondary" className="ml-1">{stressRecommendations.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="nutrition">
            <RecommendationsList 
              recommendations={nutritionRecommendations} 
              type="nutrition" 
            />
          </TabsContent>
          
          <TabsContent value="supplements">
            <RecommendationsList 
              recommendations={supplementRecommendations} 
              type="supplement" 
            />
          </TabsContent>
          
          <TabsContent value="exercise">
            <RecommendationsList 
              recommendations={exerciseRecommendations} 
              type="exercise" 
            />
          </TabsContent>
          
          <TabsContent value="stress">
            <RecommendationsList 
              recommendations={stressRecommendations} 
              type="lifestyle" 
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RecommendationsPanel;
