
export interface BloodMarker {
  id: string;
  name: string;
  unit: string;
  normalRange: string;
  minValue: number;
  maxValue: number;
  description: string;
  lowImplication: string;
  highImplication: string;
}

export interface BloodTestResult {
  marker: BloodMarker;
  value: number | string;
  status: 'normal' | 'low' | 'high';
  isNormal: boolean;
}

export interface TestDateInfo {
  date: Date;
  label: string;
}

export interface TimelineEntry {
  id: string;
  date: string;
  results: BloodTestResult[];
}
