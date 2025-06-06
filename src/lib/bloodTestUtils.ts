import type { BloodMarker, BloodTestResult, TimelineEntry } from "./types";

// Export types for convenience
export type { BloodMarker, BloodTestResult, TimelineEntry };

// Changed from array to record for easier access by key
export const bloodMarkers: Record<string, BloodMarker> = {
  ferritin: {
    id: "ferritin",
    name: "Ferritin (storage iron)",
    unit: "ng/ml",
    normalRange: "Male: 30-400, Female: 15-150 (premenopausal), 15-300 (postmenopausal)",
    minValue: 15,
    maxValue: 400,
    description: "Protein that stores iron in the body's cells.",
    lowImplication: "May indicate iron deficiency, which can lead to anemia.",
    highImplication: "May indicate iron overload, inflammation, liver disease or certain types of cancer.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "30-400",
      female: "15-150"
    }
  },
  vitamin_d: {
    id: "vitamin_d",
    name: "Vitamin D (25-OH)",
    unit: "ng/ml",
    normalRange: "50-70 (optimal)",
    minValue: 50,
    maxValue: 70,
    description: "Essential for calcium absorption and bone health.",
    lowImplication: "May lead to bone diseases, muscle weakness, and increased risk of certain conditions.",
    highImplication: "Excessive supplementation may lead to hypercalcemia and associated complications.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "50-70",
      female: "50-70"
    }
  },
  vitamin_b12: {
    id: "vitamin_b12",
    name: "Vitamin B12 (total)",
    unit: "pg/ml",
    normalRange: ">600 (optimal 1000)",
    minValue: 600,
    maxValue: 2000,
    description: "Essential for nerve function, DNA synthesis, and red blood cell formation.",
    lowImplication: "May lead to anemia, neurological problems, fatigue, and weakness.",
    highImplication: "Generally not a concern as excess is usually excreted.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: ">600 (optimal 1000)",
      female: ">600 (optimal 1000)"
    }
  },
  holo_transcobalamin: {
    id: "holo_transcobalamin",
    name: "Holo-transcobalamin",
    unit: "pmol/l",
    normalRange: ">100",
    minValue: 100,
    maxValue: 150,
    description: "Active form of vitamin B12 available for cell use.",
    lowImplication: "May indicate vitamin B12 deficiency even when total B12 appears normal.",
    highImplication: "Generally not a concern.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: ">100",
      female: ">100"
    }
  },
  folic_acid: {
    id: "folic_acid",
    name: "Folic acid",
    unit: "ng/ml",
    normalRange: ">16",
    minValue: 16,
    maxValue: 20,
    description: "B vitamin important for cell growth and metabolism.",
    lowImplication: "May lead to anemia and increased homocysteine levels.",
    highImplication: "Generally not a concern unless extremely high from supplements.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: ">16",
      female: ">16"
    }
  },
  zinc: {
    id: "zinc",
    name: "Zinc (whole blood)",
    unit: "mg/l",
    normalRange: "6-7",
    minValue: 6,
    maxValue: 7,
    description: "Essential mineral for immune function, protein synthesis, and cell division.",
    lowImplication: "May lead to impaired immune function, poor wound healing, and taste abnormalities.",
    highImplication: "May cause nausea, vomiting, and impair copper absorption.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "6-7",
      female: "6-7"
    }
  },
  magnesium: {
    id: "magnesium",
    name: "Magnesium (serum)",
    unit: "mmol/l",
    normalRange: "0.85-1.0",
    minValue: 0.85,
    maxValue: 1.0,
    description: "Essential for muscle and nerve function, blood glucose control, and blood pressure regulation.",
    lowImplication: "May cause muscle cramps, fatigue, and irregular heartbeat.",
    highImplication: "May cause nausea, vomiting, and low blood pressure.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "0.85-1.0",
      female: "0.85-1.0"
    }
  },
  selenium: {
    id: "selenium",
    name: "Selenium (whole blood)",
    unit: "µg/l",
    normalRange: "140-160",
    minValue: 140,
    maxValue: 160,
    description: "Trace element important for cognitive function, immune system, and fertility.",
    lowImplication: "May lead to muscle weakness, fatigue, and increased susceptibility to infections.",
    highImplication: "May cause garlic breath odor, nausea, and nerve damage in excess.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "140-160",
      female: "140-160"
    }
  },
  omega3: {
    id: "omega3",
    name: "Omega-3 Index",
    unit: "%",
    normalRange: ">8",
    minValue: 8,
    maxValue: 11,
    description: "Measures the amount of omega-3 fatty acids in red blood cell membranes.",
    lowImplication: "Associated with increased risk of cardiovascular disease.",
    highImplication: "Generally not a concern as higher levels are beneficial.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: ">8",
      female: ">8"
    }
  },
  total_protein: {
    id: "total_protein",
    name: "Total protein",
    unit: "g/dl",
    normalRange: ">7.0 (optimal 7.3-7.6)",
    minValue: 7.0,
    maxValue: 8.5,
    description: "Measures all proteins in blood, important for fluid balance and immune function.",
    lowImplication: "May indicate liver or kidney disease, malnutrition, or malabsorption.",
    highImplication: "May indicate inflammation, infection, or certain bone marrow disorders.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: ">7.0 (optimal 7.3-7.6)",
      female: ">7.0 (optimal 7.3-7.6)"
    }
  },
  hemoglobin: {
    id: "hemoglobin",
    name: "Hemoglobin",
    unit: "g/dL",
    normalRange: "13.5 - 17.5",
    minValue: 13.5,
    maxValue: 17.5,
    description: "Protein in red blood cells that carries oxygen throughout the body.",
    lowImplication: "May indicate anemia, blood loss, nutritional deficiencies, or bone marrow problems.",
    highImplication: "May indicate polycythemia, lung disease, heart disease, or dehydration.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "13.5 - 17.5",
      female: "13.5 - 17.5"
    }
  },
  wbc: {
    id: "wbc",
    name: "White Blood Cell Count",
    unit: "10³/µL",
    normalRange: "4.5 - 11.0",
    minValue: 4.5,
    maxValue: 11.0,
    description: "Cells that help fight infections and other diseases.",
    lowImplication: "May indicate bone marrow problems, autoimmune disorders, or certain medications.",
    highImplication: "May indicate infection, inflammation, leukemia, or tissue damage.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "4.5 - 11.0",
      female: "4.5 - 11.0"
    }
  },
  platelets: {
    id: "platelets",
    name: "Platelets",
    unit: "10³/µL",
    normalRange: "150 - 450",
    minValue: 150,
    maxValue: 450,
    description: "Cell fragments that help blood clot.",
    lowImplication: "May indicate bone marrow problems, autoimmune disorders, or certain medications.",
    highImplication: "May indicate inflammation, infection, or certain blood disorders.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "150 - 450",
      female: "150 - 450"
    }
  },
  glucose: {
    id: "glucose",
    name: "Glucose",
    unit: "mg/dL",
    normalRange: "70 - 99",
    minValue: 70,
    maxValue: 99,
    description: "Main sugar found in blood and the major source of energy for the body's cells.",
    lowImplication: "May indicate hypoglycemia, liver disease, or certain medications.",
    highImplication: "May indicate diabetes, stress, infection, or certain medications.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "70 - 99",
      female: "70 - 99"
    }
  },
  cholesterol: {
    id: "cholesterol",
    name: "Total Cholesterol",
    unit: "mg/dL",
    normalRange: "125 - 200",
    minValue: 125,
    maxValue: 200,
    description: "Fatty substance found in the blood.",
    lowImplication: "May indicate malnutrition, liver disease, or hyperthyroidism.",
    highImplication: "May indicate increased risk of heart disease or stroke.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "125 - 200",
      female: "125 - 200"
    }
  },
  ldl: {
    id: "ldl",
    name: "LDL Cholesterol",
    unit: "mg/dL",
    normalRange: "0 - 100",
    minValue: 0,
    maxValue: 100,
    description: "Low-density lipoprotein, often called 'bad' cholesterol.",
    lowImplication: "Generally not a concern.",
    highImplication: "Associated with increased risk of heart disease and stroke.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "0 - 100",
      female: "0 - 100"
    }
  },
  hdl: {
    id: "hdl",
    name: "HDL Cholesterol",
    unit: "mg/dL",
    normalRange: "40 - 60",
    minValue: 40,
    maxValue: 60,
    description: "High-density lipoprotein, often called 'good' cholesterol.",
    lowImplication: "May indicate increased risk of heart disease.",
    highImplication: "Generally beneficial and protective against heart disease.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "40 - 60",
      female: "40 - 60"
    }
  },
  triglycerides: {
    id: "triglycerides",
    name: "Triglycerides",
    unit: "mg/dL",
    normalRange: "0 - 150",
    minValue: 0,
    maxValue: 150,
    description: "Type of fat found in the blood.",
    lowImplication: "Generally not a concern.",
    highImplication: "May indicate increased risk of heart disease, pancreatitis, or metabolic syndrome.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "0 - 150",
      female: "0 - 150"
    }
  },
  creatinine: {
    id: "creatinine",
    name: "Creatinine",
    unit: "mg/dL",
    normalRange: "0.6 - 1.2",
    minValue: 0.6,
    maxValue: 1.2,
    description: "Waste product from normal muscle breakdown.",
    lowImplication: "May indicate decreased muscle mass or pregnancy.",
    highImplication: "May indicate kidney disease or damage.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "0.6 - 1.2",
      female: "0.6 - 1.2"
    }
  },
  sodium: {
    id: "sodium",
    name: "Sodium",
    unit: "mmol/L",
    normalRange: "135 - 145",
    minValue: 135,
    maxValue: 145,
    description: "Electrolyte that helps maintain fluid balance and is needed for nerve and muscle function.",
    lowImplication: "May indicate kidney problems, heart failure, certain medications, or excessive sweating.",
    highImplication: "May indicate dehydration, kidney disease, or heart failure.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "135 - 145",
      female: "135 - 145"
    }
  },
  alt: {
    id: "alt",
    name: "ALT",
    unit: "U/L",
    normalRange: "7 - 56",
    minValue: 7,
    maxValue: 56,
    description: "Enzyme found primarily in the liver that helps convert proteins into energy for liver cells.",
    lowImplication: "Generally not a concern.",
    highImplication: "May indicate liver damage, hepatitis, or other liver conditions.",
    category: "Liver",
    genderSpecificRanges: {
      male: "7 - 56",
      female: "7 - 56"
    }
  },
  ast: {
    id: "ast",
    name: "AST",
    unit: "U/L",
    normalRange: "8 - 48",
    minValue: 8,
    maxValue: 48,
    description: "Enzyme found in various tissues, including liver, heart, and muscles.",
    lowImplication: "Generally not a concern.",
    highImplication: "May indicate liver damage, heart attack, or other conditions affecting tissues containing this enzyme.",
    category: "Liver",
    genderSpecificRanges: {
      male: "8 - 48",
      female: "8 - 48"
    }
  },
  vitaminD: {
    id: "vitaminD",
    name: "Vitamin D",
    unit: "ng/mL",
    normalRange: "30 - 80",
    minValue: 30,
    maxValue: 80,
    description: "Fat-soluble vitamin essential for bone health and immune function.",
    lowImplication: "May lead to bone softening, weakness, and increased risk of fractures.",
    highImplication: "Excessive levels can cause calcium to build up in the blood, affecting heart and kidney function.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "30 - 80",
      female: "30 - 80"
    }
  },
  iron: {
    id: "iron",
    name: "Iron",
    unit: "μg/dL",
    normalRange: "60 - 170",
    minValue: 60,
    maxValue: 170,
    description: "Essential mineral needed for hemoglobin production and oxygen transport.",
    lowImplication: "May lead to iron deficiency anemia, fatigue, and compromised immune function.",
    highImplication: "May indicate hemochromatosis or iron poisoning.",
    category: "General Parameters",
    genderSpecificRanges: {
      male: "60 - 170",
      female: "60 - 170"
    }
  },
};

// Updated getStatus function to work with the new bloodMarkers structure
export const getStatus = (marker: BloodMarker, value: number | string, gender?: "male" | "female"): { status: "normal" | "low" | "high"; isNormal: boolean } => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numValue)) {
    return { status: "normal", isNormal: true };
  }
  
  // Adjust min/max values based on gender for gender-specific markers
  let minValue = marker.minValue;
  let maxValue = marker.maxValue;
  
  if (gender && marker.genderSpecificRanges) {
    // Handle gender-specific reference ranges
    if (gender === "female" && marker.id === "ferritin") {
      minValue = 15;
      maxValue = 150; // Using premenopausal values as default for females
    } else if (gender === "male" && marker.id === "ferritin") {
      minValue = 30;
      maxValue = 400;
    }
    // Add other gender-specific ranges as needed
  }
  
  if (numValue < minValue) {
    return { status: "low", isNormal: false };
  } 
  
  if (numValue > maxValue) {
    return { status: "high", isNormal: false };
  }
  
  return { status: "normal", isNormal: true };
};

export const analyzeBloodTest = (marker: BloodMarker, value: number): BloodTestResult => {
  const { status, isNormal } = getStatus(marker, value);
  
  return {
    marker,
    value,
    status,
    isNormal
  };
};

export const getRecommendations = (results: BloodTestResult[]): string[] => {
  const recommendations: string[] = [];
  const abnormalResults = results.filter(result => result.status !== "normal");
  
  if (abnormalResults.length === 0) {
    recommendations.push("Your blood test results appear to be within normal ranges. Continue to maintain your healthy lifestyle.");
    return recommendations;
  }
  
  // Add general recommendation
  recommendations.push("Consider discussing these results with your healthcare provider for personalized advice.");
  
  // Add specific recommendations based on abnormal results
  for (const result of abnormalResults) {
    if (result.status === "low") {
      switch (result.marker.id) {
        case "hemoglobin":
          recommendations.push("Consider iron-rich foods like lean red meat, beans, and leafy greens to help with low hemoglobin.");
          break;
        case "wbc":
          recommendations.push("Support your immune system with adequate rest and a balanced diet.");
          break;
        case "hdl":
          recommendations.push("Consider increasing physical activity and consuming healthy fats like olive oil and fatty fish to improve HDL levels.");
          break;
      }
    } else if (result.status === "high") {
      switch (result.marker.id) {
        case "glucose":
          recommendations.push("Consider reducing sugar intake and increasing physical activity to help manage blood glucose levels.");
          break;
        case "cholesterol":
        case "ldl":
        case "triglycerides":
          recommendations.push("Consider heart-healthy dietary changes like reducing saturated fats and increasing fiber intake.");
          break;
        case "creatinine":
          recommendations.push("Ensure adequate hydration and consider discussing kidney function with your doctor.");
          break;
      }
    }
  }
  
  return [...new Set(recommendations)]; // Remove duplicates
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "normal":
      return "bg-green-100 border-green-500 text-green-800";
    case "low":
      return "bg-blue-100 border-blue-500 text-blue-800";
    case "high":
      return "bg-red-100 border-red-500 text-red-800";
    default:
      return "bg-gray-100 border-gray-500 text-gray-800";
  }
};

export const getStatusText = (status: string): string => {
  switch (status) {
    case "normal":
      return "Normal";
    case "low":
      return "Low";
    case "high":
      return "High";
    default:
      return "Unknown";
  }
};

export const saveTimelineEntry = (date: Date, results: BloodTestResult[]): TimelineEntry => {
  const id = `entry-${Date.now()}`;
  const entry: TimelineEntry = {
    id,
    date: date.toISOString(),
    results,
  };
  
  const existingTimeline = getTimelineData();
  
  const updatedTimeline = [...existingTimeline, entry];
  
  localStorage.setItem('bloodTestTimeline', JSON.stringify(updatedTimeline));
  
  return entry;
};

export const getTimelineData = (): TimelineEntry[] => {
  const timelineData = localStorage.getItem('bloodTestTimeline');
  return timelineData ? JSON.parse(timelineData) : [];
};

export const clearTimelineData = (): void => {
  localStorage.setItem('bloodTestTimeline', JSON.stringify([]));
};

export const deleteTimelineEntry = (id: string): void => {
  const existingTimeline = getTimelineData();
  const updatedTimeline = existingTimeline.filter(entry => entry.id !== id);
  localStorage.setItem('bloodTestTimeline', JSON.stringify(updatedTimeline));
};

export const getTimelineEntryById = (id: string): TimelineEntry | undefined => {
  const existingTimeline = getTimelineData();
  return existingTimeline.find(entry => entry.id === id);
};

export const getReferenceRange = (markerId: string, gender: "male" | "female") => {
  const referenceRanges: Record<string, { male: string; female: string }> = {
    "ferritin": {
      male: "30-400 ng/ml",
      female: "15-150 ng/ml (premenopausal), 15-300 ng/ml (postmenopausal)"
    },
    "vitamin_d": {
      male: "50-70 ng/ml",
      female: "50-70 ng/ml"
    },
    "vitamin_b12": {
      male: ">600 pg/ml",
      female: ">600 pg/ml"
    },
  };

  const range = referenceRanges[markerId];
  if (range) {
    return range[gender];
  }
  
  return "No reference range available";
};
