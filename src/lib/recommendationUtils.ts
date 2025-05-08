
import { BloodTestResult, BloodMarker } from "@/lib/types";
import { useUserProfile } from "@/context/UserProfileContext";

// Define recommendation types
export type RecommendationType = "nutrition" | "supplement" | "exercise" | "lifestyle";

export interface Recommendation {
  id: string;
  type: RecommendationType;
  title: string;
  description: string;
  importance: "high" | "medium" | "low";
  markers: string[]; // related markers
  evidenceLevel: "strong" | "moderate" | "preliminary";
  contraindications?: string[];
}

// Determine key markers that need attention
export const identifyKeyMarkers = (results: BloodTestResult[]): BloodTestResult[] => {
  if (!results || results.length === 0) return [];
  
  return results.filter(result => {
    // Consider abnormal results as key markers
    return result.isNormal === false;
  });
};

// Generate nutrition recommendations based on blood test results
export const generateNutritionRecommendations = (
  results: BloodTestResult[],
  gender: "male" | "female",
  age?: number,
  healthIssues: string[] = []
): Recommendation[] => {
  const keyMarkers = identifyKeyMarkers(results);
  const recommendations: Recommendation[] = [];

  // Process each key marker
  keyMarkers.forEach(result => {
    const marker = result.marker;
    
    // Different recommendations based on marker type
    switch (marker.id) {
      case "hemoglobin":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "iron_rich_foods",
            type: "nutrition",
            title: "Iron-Rich Foods",
            description: "Include more iron-rich foods like lean red meat, spinach, beans, and fortified cereals in your diet.",
            importance: "high",
            markers: ["hemoglobin", "hematocrit", "rbc"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "glucose":
        if (parseFloat(result.value.toString()) > marker.referenceRange.max) {
          recommendations.push({
            id: "low_glycemic_diet",
            type: "nutrition",
            title: "Low Glycemic Diet",
            description: "Focus on foods with low glycemic index such as whole grains, legumes, and non-starchy vegetables.",
            importance: "high",
            markers: ["glucose", "hba1c"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "cholesterol":
      case "ldl":
        if (parseFloat(result.value.toString()) > marker.referenceRange.max) {
          recommendations.push({
            id: "heart_healthy_diet",
            type: "nutrition",
            title: "Heart-Healthy Diet",
            description: "Reduce saturated fats and increase omega-3 fatty acids through fatty fish, nuts, and olive oil.",
            importance: "high",
            markers: ["cholesterol", "ldl", "hdl", "triglycerides"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "vitaminD":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "vitamin_d_foods",
            type: "nutrition",
            title: "Vitamin D-Rich Foods",
            description: "Include fatty fish, egg yolks, and fortified dairy products in your diet.",
            importance: "medium",
            markers: ["vitaminD"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "calcium":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "calcium_rich_foods",
            type: "nutrition",
            title: "Calcium-Rich Foods",
            description: "Increase intake of dairy products, leafy greens, and fortified plant-based milks.",
            importance: "medium",
            markers: ["calcium"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "sodium":
        if (parseFloat(result.value.toString()) > marker.referenceRange.max) {
          recommendations.push({
            id: "low_sodium_diet",
            type: "nutrition",
            title: "Low Sodium Diet",
            description: "Reduce intake of processed foods, canned soups, and added salt.",
            importance: "high",
            markers: ["sodium"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "potassium":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "potassium_rich_foods",
            type: "nutrition",
            title: "Potassium-Rich Foods",
            description: "Include bananas, sweet potatoes, spinach, and avocados in your diet.",
            importance: "medium",
            markers: ["potassium"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      // Additional markers can be added here
    }
  });

  // Deduplicate recommendations
  return recommendations.filter((recommendation, index, self) =>
    index === self.findIndex((r) => r.id === recommendation.id)
  );
};

// Generate supplement recommendations based on blood test results
export const generateSupplementRecommendations = (
  results: BloodTestResult[],
  gender: "male" | "female",
  age?: number,
  healthIssues: string[] = []
): Recommendation[] => {
  const keyMarkers = identifyKeyMarkers(results);
  const recommendations: Recommendation[] = [];

  keyMarkers.forEach(result => {
    const marker = result.marker;
    
    switch (marker.id) {
      case "hemoglobin":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "iron_supplement",
            type: "supplement",
            title: "Iron Supplement",
            description: "Consider taking an iron supplement, preferably with vitamin C for better absorption.",
            importance: "high",
            markers: ["hemoglobin", "hematocrit", "rbc"],
            evidenceLevel: "strong",
            contraindications: ["hemochromatosis"]
          });
        }
        break;
        
      case "vitaminD":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "vitamin_d_supplement",
            type: "supplement",
            title: "Vitamin D Supplement",
            description: "A daily vitamin D3 supplement may help improve your levels. Consult with your healthcare provider for dosage.",
            importance: "medium",
            markers: ["vitaminD"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "calcium":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "calcium_supplement",
            type: "supplement",
            title: "Calcium Supplement",
            description: "Consider taking a calcium supplement, ideally combined with vitamin D for better absorption.",
            importance: "medium",
            markers: ["calcium"],
            evidenceLevel: "strong",
            contraindications: ["kidney stones", "hypercalcemia"]
          });
        }
        break;
        
      case "vitaminB12":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "vitamin_b12_supplement",
            type: "supplement",
            title: "Vitamin B12 Supplement",
            description: "A B12 supplement may be beneficial, especially if you follow a plant-based diet.",
            importance: "medium",
            markers: ["vitaminB12"],
            evidenceLevel: "strong"
          });
        }
        break;
        
      case "ferritin":
        if (parseFloat(result.value.toString()) < marker.referenceRange.min) {
          recommendations.push({
            id: "iron_supplement",
            type: "supplement",
            title: "Iron Supplement",
            description: "An iron supplement may help improve your iron stores. Take between meals with vitamin C for better absorption.",
            importance: "medium",
            markers: ["ferritin", "hemoglobin"],
            evidenceLevel: "strong",
            contraindications: ["hemochromatosis"]
          });
        }
        break;
        
      // Additional markers can be added here
    }
  });

  // Deduplicate recommendations
  return recommendations.filter((recommendation, index, self) =>
    index === self.findIndex((r) => r.id === recommendation.id)
  );
};

// Generate exercise recommendations based on blood test results and user profile
export const generateExerciseRecommendations = (
  results: BloodTestResult[],
  gender: "male" | "female",
  age?: number,
  bmi?: number,
  healthIssues: string[] = []
): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  // Default recommendation for general health
  recommendations.push({
    id: "regular_physical_activity",
    type: "exercise",
    title: "Regular Physical Activity",
    description: "Aim for at least 150 minutes of moderate-intensity exercise per week.",
    importance: "high",
    markers: [],
    evidenceLevel: "strong"
  });
  
  // Check glucose levels
  const glucoseResult = results.find(r => r.marker.id === "glucose");
  if (glucoseResult && parseFloat(glucoseResult.value.toString()) > glucoseResult.marker.referenceRange.max) {
    recommendations.push({
      id: "combine_aerobic_strength",
      type: "exercise",
      title: "Combined Aerobic and Strength Training",
      description: "Combine aerobic exercise (like walking or cycling) with strength training for better glucose control.",
      importance: "high",
      markers: ["glucose", "hba1c"],
      evidenceLevel: "strong"
    });
  }
  
  // Check cholesterol levels
  const cholesterolResult = results.find(r => r.marker.id === "cholesterol" || r.marker.id === "ldl");
  if (cholesterolResult && parseFloat(cholesterolResult.value.toString()) > cholesterolResult.marker.referenceRange.max) {
    recommendations.push({
      id: "aerobic_exercise",
      type: "exercise",
      title: "Regular Aerobic Exercise",
      description: "Engage in moderate-intensity aerobic activities like brisk walking, swimming, or cycling for at least 30 minutes daily.",
      importance: "high",
      markers: ["cholesterol", "ldl", "hdl", "triglycerides"],
      evidenceLevel: "strong"
    });
  }
  
  // BMI-based recommendations
  if (bmi) {
    if (bmi >= 25) {
      recommendations.push({
        id: "weight_management_exercise",
        type: "exercise",
        title: "Weight Management Exercise",
        description: "Include a mix of cardio and strength training with at least 45-60 minutes of moderate activity daily.",
        importance: "high",
        markers: [],
        evidenceLevel: "strong"
      });
    }
  }
  
  // Age-specific recommendations
  if (age) {
    if (age > 50) {
      recommendations.push({
        id: "bone_strengthening",
        type: "exercise",
        title: "Bone-Strengthening Activities",
        description: "Include weight-bearing exercises like walking, jogging, or resistance training to maintain bone health.",
        importance: "medium",
        markers: ["calcium", "vitaminD"],
        evidenceLevel: "strong"
      });
    }
  }
  
  // Deduplicate recommendations
  return recommendations.filter((recommendation, index, self) =>
    index === self.findIndex((r) => r.id === recommendation.id)
  );
};

// Generate stress reduction recommendations
export const generateStressReductionRecommendations = (
  results: BloodTestResult[],
  healthIssues: string[] = []
): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  // Default recommendation for stress management
  recommendations.push({
    id: "mindfulness_practice",
    type: "lifestyle",
    title: "Mindfulness Practice",
    description: "Incorporate mindfulness meditation or deep breathing exercises for 10-15 minutes daily to reduce stress levels.",
    importance: "medium",
    markers: [],
    evidenceLevel: "moderate"
  });
  
  // Check cortisol levels if available
  const cortisolResult = results.find(r => r.marker.id === "cortisol");
  if (cortisolResult && parseFloat(cortisolResult.value.toString()) > cortisolResult.marker.referenceRange.max) {
    recommendations.push({
      id: "stress_reduction_techniques",
      type: "lifestyle",
      title: "Active Stress Reduction",
      description: "Practice yoga, progressive muscle relaxation, or tai chi for 20-30 minutes daily to help reduce elevated cortisol levels.",
      importance: "high",
      markers: ["cortisol"],
      evidenceLevel: "moderate"
    });
  }
  
  // Check for stress-related health issues
  const stressRelatedConditions = ["anxiety", "hypertension", "depression", "insomnia", "stress"];
  const hasStressCondition = healthIssues.some(issue => 
    stressRelatedConditions.includes(issue.toLowerCase())
  );
  
  if (hasStressCondition) {
    recommendations.push({
      id: "breathing_techniques",
      type: "lifestyle",
      title: "Breathing Techniques",
      description: "Practice 4-7-8 breathing (inhale for 4 seconds, hold for 7, exhale for 8) for 5 minutes, 2-3 times daily.",
      importance: "high",
      markers: [],
      evidenceLevel: "moderate"
    });
  }
  
  return recommendations;
};

// Hook to generate recommendations based on blood test results and user profile
export const useRecommendations = (results: BloodTestResult[]) => {
  const { profile } = useUserProfile();
  
  if (!results || results.length === 0) {
    return {
      nutritionRecommendations: [],
      supplementRecommendations: [],
      exerciseRecommendations: [],
      stressRecommendations: []
    };
  }
  
  const healthIssueNames = profile.healthIssues.map(issue => issue.name);
  
  const nutritionRecommendations = generateNutritionRecommendations(
    results,
    profile.gender,
    profile.age,
    healthIssueNames
  );
  
  const supplementRecommendations = generateSupplementRecommendations(
    results,
    profile.gender,
    profile.age,
    healthIssueNames
  );
  
  const exerciseRecommendations = generateExerciseRecommendations(
    results,
    profile.gender,
    profile.age,
    profile.bodyMassIndex,
    healthIssueNames
  );
  
  const stressRecommendations = generateStressReductionRecommendations(
    results,
    healthIssueNames
  );
  
  return {
    nutritionRecommendations,
    supplementRecommendations,
    exerciseRecommendations,
    stressRecommendations
  };
};
