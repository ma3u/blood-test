
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

const NegativeFactorsTable: React.FC = () => {
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
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Smoking</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">5–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Increases risk of 21 diseases (e.g., lung cancer, CVD)</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Physical Inactivity</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">4.7 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Linked to 17 diseases (e.g., stroke, diabetes)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Obesity (BMI ≥30)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">3–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Raises diabetes, CVD, and cancer risk</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Diabetes (Type 2)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">2 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces disease-free years by 1.7 years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Hypertension</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">4–5 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Increases stroke and kidney disease risk</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Low Socioeconomic Status</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">5–7 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Limits access to healthcare and healthy food</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Poor Diet (High processed foods)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">3–5 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Elevates chronic inflammation and metabolic disorders</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Excessive Alcohol</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">2–3 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Linked to liver disease and cancers</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default NegativeFactorsTable;
