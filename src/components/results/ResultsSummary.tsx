
import { BloodTestResult } from "@/lib/types";
import InfoCard from "@/components/InfoCard";
import MarkerExplanation from "@/components/MarkerExplanation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ResultsSummaryProps {
  results: BloodTestResult[];
}

const ResultsSummary = ({ results }: ResultsSummaryProps) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const { t } = useLanguage();
  
  const abnormalResults = results.filter(
    (result) => result.status === "high" || result.status === "low"
  );
  
  const selectedMarker = results.find(
    (result) => result.marker.id === selectedMarkerId
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard 
          title={t("results.summary.normal")} 
          value={results.filter(r => r.status === "normal").length} 
          total={results.length}
          color="bg-green-100 border-green-500 text-green-800"
        />
        <InfoCard 
          title={t("results.summary.low")} 
          value={results.filter(r => r.status === "low").length} 
          total={results.length}
          color="bg-blue-100 border-blue-500 text-blue-800" 
        />
        <InfoCard 
          title={t("results.summary.high")} 
          value={results.filter(r => r.status === "high").length} 
          total={results.length}
          color="bg-red-100 border-red-500 text-red-800"
        />
      </div>
      
      {abnormalResults.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">{t("results.summary.abnormal")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {abnormalResults.map((result) => {
              // Try to get translated marker name if available
              const markerNameKey = `marker.${result.marker.id}`;
              const markerName = t(markerNameKey as any) !== markerNameKey ? t(markerNameKey as any) : result.marker.name;
              
              return (
                <div
                  key={result.marker.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    result.status === "low"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-red-50 border-red-200"
                  }`}
                  onClick={() => setSelectedMarkerId(result.marker.id)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{markerName}</h4>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        result.status === "low"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {result.status === "low" ? t("results.status.low") : t("results.status.high")}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p>
                      {t("results.summary.your_value")} <strong>{result.value} {result.marker.unit}</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("results.summary.normal_range")} {result.marker.normalRange}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mt-6">
          <h3 className="text-lg font-semibold text-green-700">{t("results.summary.all_normal")}</h3>
          <p className="text-green-600 mt-2">
            {t("results.summary.all_normal_description")}
          </p>
        </div>
      )}

      {selectedMarker && (
        <MarkerExplanation
          result={selectedMarker}
          onClose={() => setSelectedMarkerId(null)}
        />
      )}
    </div>
  );
};

export default ResultsSummary;
