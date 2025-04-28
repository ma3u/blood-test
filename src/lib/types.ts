
export interface BloodMarker {
  id: string;
  name: string;
  unit: string;
  normalRange: string;
  minValue?: number;
  maxValue?: number;
  description?: string;
  lowImplication?: string;
  highImplication?: string;
}

export interface BloodTestResult {
  marker: BloodMarker;
  value: string | number;
  isNormal: boolean;
  status: 'normal' | 'high' | 'low';
}

export interface TestDateInfo {
  date: Date;
  label: string;
}

export const bloodMarkers: BloodMarker[] = [
  { id: 'hemoglobin', name: 'Hemoglobin', unit: 'g/dL', normalRange: '13.5 - 17.5', minValue: 13.5, maxValue: 17.5, 
    description: "Protein in red blood cells that carries oxygen throughout the body.",
    lowImplication: "May indicate anemia, blood loss, nutritional deficiencies, or bone marrow problems.",
    highImplication: "May indicate polycythemia, lung disease, heart disease, or dehydration." },
  { id: 'wbc', name: 'White Blood Cell Count', unit: '10³/µL', normalRange: '4.5 - 11', minValue: 4.5, maxValue: 11,
    description: "Cells that help fight infections and other diseases.",
    lowImplication: "May indicate bone marrow problems, autoimmune disorders, or certain medications.",
    highImplication: "May indicate infection, inflammation, leukemia, or tissue damage." },
  { id: 'platelets', name: 'Platelets', unit: '10³/µL', normalRange: '150 - 450', minValue: 150, maxValue: 450,
    description: "Cell fragments that help blood clot.",
    lowImplication: "May indicate bone marrow problems, autoimmune disorders, or certain medications.",
    highImplication: "May indicate inflammation, infection, or certain blood disorders." },
  { id: 'glucose', name: 'Glucose', unit: 'mg/dL', normalRange: '70 - 99', minValue: 70, maxValue: 99,
    description: "Main sugar found in blood and the major source of energy for the body's cells.",
    lowImplication: "May indicate hypoglycemia, liver disease, or certain medications.",
    highImplication: "May indicate diabetes, stress, infection, or certain medications." },
  { id: 'totalCholesterol', name: 'Total Cholesterol', unit: 'mg/dL', normalRange: '125 - 200', minValue: 125, maxValue: 200,
    description: "Fatty substance found in the blood.",
    lowImplication: "May indicate malnutrition, liver disease, or hyperthyroidism.",
    highImplication: "May indicate increased risk of heart disease or stroke." },
  { id: 'ldl', name: 'LDL Cholesterol', unit: 'mg/dL', normalRange: '0 - 100', minValue: 0, maxValue: 100,
    description: "Low-density lipoprotein, often called 'bad' cholesterol.",
    lowImplication: "Generally not a concern.",
    highImplication: "Associated with increased risk of heart disease and stroke." },
  { id: 'hdl', name: 'HDL Cholesterol', unit: 'mg/dL', normalRange: '40 - 60', minValue: 40, maxValue: 60,
    description: "High-density lipoprotein, often called 'good' cholesterol.",
    lowImplication: "May indicate increased risk of heart disease.",
    highImplication: "Generally beneficial and protective against heart disease." },
  { id: 'triglycerides', name: 'Triglycerides', unit: 'mg/dL', normalRange: '0 - 150', minValue: 0, maxValue: 150,
    description: "Type of fat found in the blood.",
    lowImplication: "Generally not a concern.",
    highImplication: "May indicate increased risk of heart disease, pancreatitis, or metabolic syndrome." },
  { id: 'creatinine', name: 'Creatinine', unit: 'mg/dL', normalRange: '0.6 - 1.2', minValue: 0.6, maxValue: 1.2,
    description: "Waste product from normal muscle breakdown.",
    lowImplication: "May indicate decreased muscle mass or pregnancy.",
    highImplication: "May indicate kidney disease or damage." },
  { id: 'sodium', name: 'Sodium', unit: 'mmol/L', normalRange: '135 - 145', minValue: 135, maxValue: 145,
    description: "Electrolyte that helps maintain fluid balance and is needed for nerve and muscle function.",
    lowImplication: "May indicate kidney problems, heart failure, certain medications, or excessive sweating.",
    highImplication: "May indicate dehydration, kidney disease, or heart failure." }
];
