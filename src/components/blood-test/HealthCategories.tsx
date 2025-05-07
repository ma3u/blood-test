// Health impact categories with colors
export const healthCategories = {
  critical: {
    name: "Critical Markers",
    description: "These values have direct and significant impact on vital functions",
    color: "bg-red-100 hover:bg-red-200 border-red-300"
  },
  metabolic: {
    name: "Metabolic Health",
    description: "Related to energy production and metabolic processes",
    color: "bg-orange-100 hover:bg-orange-200 border-orange-300"
  },
  cardiovascular: {
    name: "Cardiovascular Health",
    description: "Important indicators for heart health and circulation",
    color: "bg-pink-100 hover:bg-pink-200 border-pink-300"
  },
  immune: {
    name: "Immune Function",
    description: "Related to immune system health and inflammation",
    color: "bg-purple-100 hover:bg-purple-200 border-purple-300"
  },
  nutrition: {
    name: "Nutritional Status",
    description: "Indicators of vitamin and mineral status",
    color: "bg-green-100 hover:bg-green-200 border-green-300"
  },
  general: {
    name: "General Health",
    description: "Overall health indicators",
    color: "bg-blue-100 hover:bg-blue-200 border-blue-300"
  }
};

export const assignHealthCategory = (markerId: string): string => {
  // Assign health categories based on marker ID
  const categoryMap: Record<string, string> = {
    // Critical markers
    hemoglobin: "critical",
    wbc: "critical",
    platelets: "critical",
    
    // Metabolic markers
    glucose: "metabolic",
    hba1c: "metabolic",
    insulin: "metabolic",
    
    // Cardiovascular markers
    cholesterol: "cardiovascular",
    ldl: "cardiovascular",
    hdl: "cardiovascular",
    triglycerides: "cardiovascular",
    
    // Other categories
    creatinine: "general",
    sodium: "nutrition",
    potassium: "nutrition",
    calcium: "nutrition",
    magnesium: "nutrition",
    vitaminD: "nutrition",
    vitaminB12: "nutrition",
    ferritin: "nutrition",
    tsh: "general",
    
    // Default
    default: "general"
  };
  
  return categoryMap[markerId] || "general";
};
