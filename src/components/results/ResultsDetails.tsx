
import { BloodTestResult } from "@/lib/types";
import BloodMarkerChart from "@/components/BloodMarkerChart";
import { useLanguage } from "@/context/LanguageContext";

interface ResultsDetailsProps {
  results: BloodTestResult[];
}

const ResultsDetails = ({ results }: ResultsDetailsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8">
      <BloodMarkerChart results={results} />
      
      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.marker.id}
            className={`p-4 rounded-lg border ${
              result.status === "normal"
                ? "bg-green-50 border-green-200"
                : result.status === "low"
                ? "bg-blue-50 border-blue-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{result.marker.name}</h4>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  result.status === "normal"
                    ? "bg-green-100 text-green-800"
                    : result.status === "low"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {result.status === "normal"
                  ? t("results.status.normal")
                  : result.status === "low"
                  ? t("results.status.low")
                  : t("results.status.high")}
              </span>
            </div>
            <div className="mt-2">
              <p>
                {t("results.value")} <strong>{result.value} {result.marker.unit}</strong>
              </p>
              <p className="text-sm text-gray-600">
                {t("results.range")} {result.marker.normalRange}
              </p>
              <p className="text-sm mt-2">{result.marker.description}</p>
              
              {result.status !== "normal" && (
                <p className="text-sm mt-2 font-medium">
                  {result.status === "low"
                    ? result.marker.lowImplication
                    : result.marker.highImplication}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsDetails;
