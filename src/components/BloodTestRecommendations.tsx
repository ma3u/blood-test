
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bloodMarkers } from "@/lib/bloodTestUtils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BloodTestRecommendationsProps {
  values: Record<string, number | string>;
}

type RecommendationType = 'nutrition' | 'exercise' | 'supplements' | 'lifestyle';

interface Recommendation {
  type: RecommendationType;
  title: string;
  description: string;
}

const BloodTestRecommendations: React.FC<BloodTestRecommendationsProps> = ({ values }) => {
  const recommendations = useMemo(() => {
    const result: Record<string, Recommendation[]> = {
      nutrition: [],
      exercise: [],
      supplements: [],
      lifestyle: []
    };
    
    // Check glucose levels
    if (values.glucose) {
      const glucose = Number(values.glucose);
      const glucoseRef = bloodMarkers.glucose;
      
      if (glucose > (glucoseRef?.referenceMax || 100)) {
        result.nutrition.push({
          type: 'nutrition',
          title: 'Reduce Simple Carbohydrates',
          description: 'Consider reducing intake of simple carbohydrates and sugars. Focus on complex carbohydrates with fiber.'
        });
        result.exercise.push({
          type: 'exercise',
          title: 'Regular Cardio Exercise',
          description: 'Aim for 30 minutes of moderate cardio exercise 5 times per week to help improve insulin sensitivity.'
        });
      }
      
      if (glucose > 110) {
        result.lifestyle.push({
          type: 'lifestyle',
          title: 'Regular Meal Timing',
          description: 'Consider eating at regular times throughout the day to help regulate blood glucose levels.'
        });
      }
    }
    
    // Check cholesterol levels
    if (values.cholesterol) {
      const cholesterol = Number(values.cholesterol);
      const cholesterolRef = bloodMarkers.cholesterol;
      
      if (cholesterol > (cholesterolRef?.referenceMax || 200)) {
        result.nutrition.push({
          type: 'nutrition',
          title: 'Heart-Healthy Diet',
          description: 'Consider increasing intake of soluble fiber, healthy fats like omega-3s, and reducing saturated fats.'
        });
        result.supplements.push({
          type: 'supplements',
          title: 'Consider Plant Sterols',
          description: 'Plant sterols and stanols may help reduce cholesterol absorption. Consult your healthcare provider before starting.'
        });
      }
    }
    
    // Check HDL levels (higher is better)
    if (values.hdl) {
      const hdl = Number(values.hdl);
      const hdlRef = bloodMarkers.hdl;
      
      if (hdl < (hdlRef?.referenceMin || 40)) {
        result.exercise.push({
          type: 'exercise',
          title: 'Aerobic Exercise',
          description: 'Regular aerobic exercise can help increase HDL ("good") cholesterol levels.'
        });
        result.nutrition.push({
          type: 'nutrition',
          title: 'Include Healthy Fats',
          description: 'Consider including sources of healthy fats like olive oil, avocados, and fatty fish in your diet.'
        });
      }
    }
    
    // Check LDL levels (lower is better)
    if (values.ldl) {
      const ldl = Number(values.ldl);
      const ldlRef = bloodMarkers.ldl;
      
      if (ldl > (ldlRef?.referenceMax || 100)) {
        result.nutrition.push({
          type: 'nutrition',
          title: 'Increase Soluble Fiber',
          description: 'Foods rich in soluble fiber like oats, legumes, and certain fruits can help reduce LDL cholesterol.'
        });
        result.lifestyle.push({
          type: 'lifestyle',
          title: 'Stress Management',
          description: 'Chronic stress may affect cholesterol levels. Consider stress reduction techniques like meditation or yoga.'
        });
      }
    }
    
    // Check liver enzymes (ALT/AST)
    if (values.alt && values.ast) {
      const alt = Number(values.alt);
      const ast = Number(values.ast);
      const altRef = bloodMarkers.alt;
      const astRef = bloodMarkers.ast;
      
      if (alt > (altRef?.referenceMax || 40) || ast > (astRef?.referenceMax || 40)) {
        result.nutrition.push({
          type: 'nutrition',
          title: 'Liver-Supportive Diet',
          description: 'Consider a diet rich in antioxidants from fruits and vegetables. Reduce processed foods and alcohol.'
        });
        result.supplements.push({
          type: 'supplements',
          title: 'Milk Thistle Consideration',
          description: 'Some studies suggest milk thistle may support liver health. Consult your healthcare provider before use.'
        });
      }
    }
    
    // Check vitamin D levels
    if (values.vitaminD) {
      const vitD = Number(values.vitaminD);
      const vitDRef = bloodMarkers.vitaminD;
      
      if (vitD < (vitDRef?.referenceMin || 30)) {
        result.supplements.push({
          type: 'supplements',
          title: 'Vitamin D Supplementation',
          description: 'Consider vitamin D supplementation after consulting with your healthcare provider.'
        });
        result.lifestyle.push({
          type: 'lifestyle',
          title: 'Sunlight Exposure',
          description: 'Spend 10-30 minutes in sunlight several times per week (without sunburn) to help vitamin D production.'
        });
      }
    }
    
    // Check iron levels
    if (values.iron) {
      const iron = Number(values.iron);
      const ironRef = bloodMarkers.iron;
      
      if (iron < (ironRef?.referenceMin || 60)) {
        result.nutrition.push({
          type: 'nutrition',
          title: 'Iron-Rich Foods',
          description: 'Consider increasing consumption of iron-rich foods like lean red meat, beans, and leafy greens.'
        });
        result.supplements.push({
          type: 'supplements',
          title: 'Iron Supplementation',
          description: 'Iron supplements may be beneficial. Consult your healthcare provider before starting.'
        });
      } else if (iron > (ironRef?.referenceMax || 170)) {
        result.nutrition.push({
          type: 'nutrition',
          title: 'Limit Iron-Rich Foods',
          description: 'Consider reducing consumption of iron-rich foods and supplements unless directed by your healthcare provider.'
        });
      }
    }
    
    // Default recommendations if no specific issues found
    if (Object.values(result).every(category => category.length === 0)) {
      result.nutrition.push({
        type: 'nutrition',
        title: 'Balanced Mediterranean Diet',
        description: 'Continue with a balanced diet rich in fruits, vegetables, whole grains, and healthy fats.'
      });
      result.exercise.push({
        type: 'exercise',
        title: 'Regular Physical Activity',
        description: 'Maintain a mix of cardio, strength training, and flexibility exercises for overall health.'
      });
      result.lifestyle.push({
        type: 'lifestyle',
        title: 'Stress Management',
        description: 'Regular stress management practices like meditation, deep breathing, or yoga can benefit overall health.'
      });
    }
    
    return result;
  }, [values]);
  
  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <CardTitle className="text-xl">Health Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="nutrition">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="exercise">Exercise</TabsTrigger>
            <TabsTrigger value="supplements">Supplements</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
          </TabsList>
          
          {Object.entries(recommendations).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {items.length > 0 ? (
                items.map((rec, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold text-lg">{rec.title}</h4>
                    <p className="text-gray-700">{rec.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No specific recommendations based on your current results.</p>
              )}
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  These recommendations are generated based on your blood test results and general health guidelines.
                  Always consult with your healthcare provider before making significant changes to your diet,
                  exercise routine, or starting supplements.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BloodTestRecommendations;
