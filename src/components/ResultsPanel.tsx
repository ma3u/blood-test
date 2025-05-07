
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BloodTestResult } from "@/lib/types";
import ResultsSummary from "./results/ResultsSummary";
import ResultsDetails from "./results/ResultsDetails";
import ResultsRecommendations from "./results/ResultsRecommendations";
import { useLanguage } from "@/context/LanguageContext";

interface ResultsPanelProps {
  results: BloodTestResult[];
}

const ResultsPanel = ({ results }: ResultsPanelProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{t("results.panel.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="summary">{t("results.panel.summary")}</TabsTrigger>
            <TabsTrigger value="details">{t("results.panel.details")}</TabsTrigger>
            <TabsTrigger value="recommendations">{t("results.panel.recommendations")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary">
            <ResultsSummary results={results} />
          </TabsContent>
          
          <TabsContent value="details">
            <ResultsDetails results={results} />
          </TabsContent>
          
          <TabsContent value="recommendations">
            <ResultsRecommendations results={results} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ResultsPanel;
