
import { BloodTestResult } from "@/lib/types";
import RecommendationsPanel from "@/components/recommendations/RecommendationsPanel";

interface ResultsRecommendationsProps {
  results: BloodTestResult[];
}

const ResultsRecommendations = ({ results }: ResultsRecommendationsProps) => {
  return (
    <div className="space-y-6">
      <RecommendationsPanel bloodTestResults={results} />
    </div>
  );
};

export default ResultsRecommendations;
