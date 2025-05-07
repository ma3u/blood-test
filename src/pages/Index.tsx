
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/layout/PageIntro";
import BloodTestContainer from "@/components/blood-test/BloodTestContainer";
import ResultsPanel from "@/components/ResultsPanel";
import Disclaimer from "@/components/Disclaimer";
import { BloodTestResult } from "@/lib/types";
import GenderSwitch from "@/components/GenderSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

const Index = () => {
  const [results, setResults] = useState<BloodTestResult[] | null>(null);
  const [gender, setGender] = useState<"male" | "female">("male");

  const handleTestResults = (testResults: BloodTestResult[]) => {
    setResults(testResults);
    
    // This would be a good place to prompt for registration after showing results
    // as per User Journey step 5
    console.log("Blood test results received, user could be prompted to register here");
  };

  const handleGenderChange = (newGender: "male" | "female") => {
    setGender(newGender);
  };

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <Header />

      <main className="container mx-auto py-4 px-3">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col items-center mb-4">
            <img 
              src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
              alt="Blood Test Oracle Logo" 
              className="w-24 h-24 object-contain mb-2"
            />
            <PageIntro 
              title="Blood Test Analysis"
              description="Enter your blood test values or upload test results for instant analysis and interpretation"
            />
            <div className="mt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-blue-500 hover:text-blue-700">
                    <InfoIcon className="h-4 w-4" />
                    <span>Learn more</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-600 mb-4">Welcome to mabu.red</DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="space-y-6 text-foreground">
                    <p className="font-medium text-lg">
                      Where cutting-edge research in epigenetics, longevity, and molecular medicine converges to empower healthier, longer lives.
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p>
                        Aging is shaped not just by our genes but by dynamic interactions between epigenetic switches, environmental factors, and cellular health. 
                        Emerging science reveals that longevity hinges on maintaining biomarker balance – measurable indicators like DNA methylation patterns, 
                        nutrient levels, and hormonal activity. These biomarkers act as a "health dashboard," revealing gaps in essential nutrients 
                        (e.g., vitamin D, magnesium), amino acids, and hormones that accelerate aging if unaddressed.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">Personalized Health Strategies</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><span className="font-medium">Biomarker Diagnostics:</span> Advanced testing pinpoints deficiencies in nutrients (e.g., iron, B vitamins), antioxidants, and hormones like cortisol, enabling tailored interventions.</li>
                        <li><span className="font-medium">Micronutrient Optimization:</span> Targeted supplements – such as resveratrol (DNA repair), omega-3s (brain health), and CoQ10 (cellular energy) – address gaps identified through testing.</li>
                        <li><span className="font-medium">Hormonal & Metabolic Balance:</span> Lifestyle adjustments restore rhythm to systems disrupted by aging, including insulin sensitivity and stress response.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">Science-Backed Longevity Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><span className="font-medium">Movement:</span> Regular exercise boosts mitochondrial health and muscle-derived antioxidants like EcSOD, reducing oxidative stress.</li>
                        <li><span className="font-medium">Sleep Optimization:</span> 7+ hours nightly lowers mortality risk by 18% and supports metabolic repair.</li>
                        <li><span className="font-medium">Stress Resilience:</span> Techniques like active rest (light yoga, walking) and mindfulness modulate inflammation linked to chronic disease.</li>
                      </ul>
                    </div>
                    
                    <p className="mt-4 font-medium">
                      By bridging biomarker gaps and aligning lifestyle with cellular needs, we unlock possibilities for healthspan extension. 
                      Explore how these insights apply to your unique biology – ready to dive deeper?
                    </p>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {!results ? (
            <>
              <BloodTestContainer 
                onSubmit={handleTestResults} 
                userId="anonymous-user" 
                gender={gender}
              />
            </>
          ) : (
            <>
              <ResultsPanel results={results} />
              <div className="mt-6">
                <button 
                  onClick={() => setResults(null)} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md text-white transition-colors"
                >
                  Back to Test Input
                </button>
              </div>
            </>
          )}

          <Disclaimer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
