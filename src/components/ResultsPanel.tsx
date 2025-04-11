
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BloodTestResult, getRecommendations } from "@/lib/bloodTestUtils";
import InfoCard from "./InfoCard";
import MarkerExplanation from "./MarkerExplanation";
import BloodMarkerChart from "./BloodMarkerChart";

interface ResultsPanelProps {
  results: BloodTestResult[];
}

const ResultsPanel = ({ results }: ResultsPanelProps) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  
  const recommendations = getRecommendations(results);
  
  const abnormalResults = results.filter(
    (result) => result.status === "high" || result.status === "low"
  );
  
  const selectedMarker = results.find(
    (result) => result.marker.id === selectedMarkerId
  );

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
          
          <TabsContent value="summary" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoCard 
                title="Normal Values" 
                value={results.filter(r => r.status === "normal").length} 
                total={results.length}
                color="bg-green-100 border-green-500 text-green-800"
              />
              <InfoCard 
                title="Low Values" 
                value={results.filter(r => r.status === "low").length} 
                total={results.length}
                color="bg-blue-100 border-blue-500 text-blue-800" 
              />
              <InfoCard 
                title="High Values" 
                value={results.filter(r => r.status === "high").length} 
                total={results.length}
                color="bg-red-100 border-red-500 text-red-800"
              />
            </div>
            
            {abnormalResults.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Abnormal Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {abnormalResults.map((result) => (
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
                        <h4 className="font-medium">{result.marker.name}</h4>
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            result.status === "low"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {result.status === "low" ? "Low" : "High"}
                        </span>
                      </div>
                      <div className="mt-2">
                        <p>
                          Your value: <strong>{result.value} {result.marker.unit}</strong>
                        </p>
                        <p className="text-sm text-gray-600">
                          Normal range: {result.marker.minValue} - {result.marker.maxValue} {result.marker.unit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mt-6">
                <h3 className="text-lg font-semibold text-green-700">All Results Normal</h3>
                <p className="text-green-600 mt-2">
                  All your blood test markers are within the normal range.
                </p>
              </div>
            )}

            {selectedMarker && (
              <MarkerExplanation
                result={selectedMarker}
                onClose={() => setSelectedMarkerId(null)}
              />
            )}
          </TabsContent>
          
          <TabsContent value="details">
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
                          ? "Normal"
                          : result.status === "low"
                          ? "Low"
                          : "High"}
                      </span>
                    </div>
                    <div className="mt-2">
                      <p>
                        Value: <strong>{result.value} {result.marker.unit}</strong>
                      </p>
                      <p className="text-sm text-gray-600">
                        Normal range: {result.marker.minValue} - {result.marker.maxValue} {result.marker.unit}
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
          </TabsContent>
          
          <TabsContent value="recommendations">
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ResultsPanel;
