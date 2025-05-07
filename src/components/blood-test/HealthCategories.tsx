
// Health impact categories with colors
import { useLanguage } from "@/context/LanguageContext";

export const useHealthCategories = () => {
  const { t } = useLanguage();

  const healthCategories = {
    critical: {
      name: t("health.category.critical"),
      description: t("health.category.critical.description"),
      color: "bg-red-100 hover:bg-red-200 border-red-300"
    },
    metabolic: {
      name: t("health.category.metabolic"),
      description: t("health.category.metabolic.description"),
      color: "bg-orange-100 hover:bg-orange-200 border-orange-300"
    },
    cardiovascular: {
      name: t("health.category.cardiovascular"),
      description: t("health.category.cardiovascular.description"),
      color: "bg-pink-100 hover:bg-pink-200 border-pink-300"
    },
    immune: {
      name: t("health.category.immune"),
      description: t("health.category.immune.description"),
      color: "bg-purple-100 hover:bg-purple-200 border-purple-300"
    },
    nutrition: {
      name: t("health.category.nutrition"),
      description: t("health.category.nutrition.description"),
      color: "bg-green-100 hover:bg-green-200 border-green-300"
    },
    general: {
      name: t("health.category.general"),
      description: t("health.category.general.description"),
      color: "bg-blue-100 hover:bg-blue-200 border-blue-300"
    }
  };

  return healthCategories;
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
