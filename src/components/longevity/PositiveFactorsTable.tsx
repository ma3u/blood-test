
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const PositiveFactorsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow className="bg-blue-50">
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">Factor</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">Impact on Longevity</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">Impact on Healthspan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Regular Physical Activity</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Adds 4.5 years</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces risk of 17 diseases (e.g., CVD, diabetes)</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 pl-6">- Aerobic (e.g., running)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">25–40% lower mortality</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Improves cardiovascular health</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 pl-6">- Resistance Training</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">15% lower all-cause mortality</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Preserves muscle mass and bone density</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Mediterranean Diet</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">23% lower mortality</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces inflammation and metabolic disease risk</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Not Smoking</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Prevents 5–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Lowers risk of 21 diseases (e.g., lung cancer, COPD)</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Moderate Alcohol Intake</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Part of lifestyle adding 5.5 years</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Cardiovascular benefits at ≤1 drink/day (women) or ≤2/day (men)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Optimal Sleep (7–8 hours)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Prevents 2–3 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Enhances cognitive function and metabolism</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Strong Social Connections</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">50% higher survival rates</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces dementia risk and improves mental health</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Stress Management (incl. cold showers)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Mitigates 23–24 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Lowers chronic inflammation; cold showers may help reduce stress and improve mood</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Healthy BMI (18.5–24.9)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Prevents 3–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces diabetes, CVD, and metabolic syndrome</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">High Socioeconomic Status</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">2.5x higher longevity</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Better healthcare access and nutrition</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PositiveFactorsTable;
