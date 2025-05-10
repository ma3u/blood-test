
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

const CombinedEffectsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-collapse border border-gray-300 mb-6">
        <TableHeader>
          <TableRow className="bg-blue-50">
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">Combined Factors</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">Impact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Smoking + Diabetes</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">16.2 years lost</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Inactivity + Hypertension</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">9.2 years lost</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Adopting 8 Healthy Habits by Age 40</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Adds 23–24 years</TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-medium">Healthspan-Lifespan Gap</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">~9 years (20% of life with morbidity)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CombinedEffectsTable;
