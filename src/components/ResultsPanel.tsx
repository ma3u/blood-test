
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BloodTestResult } from "@/lib/types";
import ResultsSummary from "./results/ResultsSummary";
import ResultsDetails from "./results/ResultsDetails";
import ResultsRecommendations from "./results/ResultsRecommendations";

interface ResultsPanelProps {
  results: BloodTestResult[];
}

const ResultsPanel = ({ results }: ResultsPanelProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Blood Test Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="details">Detailed Results</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
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
