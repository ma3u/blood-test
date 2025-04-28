export interface BloodMarker {
  id: string;
  name: string;
  unit: string;
  normalRange: string;
}

export interface BloodTestResult {
  marker: BloodMarker;
  value: string;
  isNormal: boolean;
  status: 'normal' | 'high' | 'low';
}

export const bloodMarkers: BloodMarker[] = [
  { id: 'hemoglobin', name: 'Hemoglobin', unit: 'g/dL', normalRange: '13.5 - 17.5' },
  { id: 'wbc', name: 'White Blood Cell Count', unit: '10³/µL', normalRange: '4.5 - 11' },
  { id: 'platelets', name: 'Platelets', unit: '10³/µL', normalRange: '150 - 450' },
  { id: 'glucose', name: 'Glucose', unit: 'mg/dL', normalRange: '70 - 99' },
  { id: 'totalCholesterol', name: 'Total Cholesterol', unit: 'mg/dL', normalRange: '125 - 200' },
  { id: 'ldl', name: 'LDL Cholesterol', unit: 'mg/dL', normalRange: '0 - 100' },
  { id: 'hdl', name: 'HDL Cholesterol', unit: 'mg/dL', normalRange: '40 - 60' },
  { id: 'triglycerides', name: 'Triglycerides', unit: 'mg/dL', normalRange: '0 - 150' },
  { id: 'creatinine', name: 'Creatinine', unit: 'mg/dL', normalRange: '0.6 - 1.2' },
  { id: 'sodium', name: 'Sodium', unit: 'mmol/L', normalRange: '135 - 145' }
];

export interface TestDateInfo {
  date: Date;
  label: string;
}
