
import { BloodTestResult } from "@/lib/types";
import { getRecommendations } from "@/lib/bloodTestUtils";

interface ResultsRecommendationsProps {
  results: BloodTestResult[];
}

const ResultsRecommendations = ({ results }: ResultsRecommendationsProps) => {
  const recommendations = getRecommendations(results);

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">Important Notice</h3>
        <p className="text-blue-700">
          This analysis is for informational purposes only and is not a substitute for professional medical advice. 
          Always consult with your healthcare provider regarding your blood test results.
        </p>
      </div>
      
      {recommendations.length > 0 ? (
        <div className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="p-4 bg-white border rounded-lg shadow-sm">
              <p>{recommendation}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No specific recommendations available.</p>
      )}
    </div>
  );
};

export default ResultsRecommendations;
