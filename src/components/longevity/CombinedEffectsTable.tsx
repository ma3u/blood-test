
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
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Combined Factors</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Impact</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Evidence</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2">Smoking + Diabetes</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">16.2 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.nature.com/articles/s41591-024-03483-9" className="text-blue-600 hover:underline" aria-label="Read Nature Medicine article on combined lifestyle risk factors">Combined Risk Factors Study</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2">Inactivity + Hypertension</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">9.2 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7325954/" className="text-blue-600 hover:underline" aria-label="Read PMC article on lifestyle factors and mortality in older adults">Lifestyle Factors in Older Adults</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2">Adopting 8 Healthy Habits by Age 40</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Adds 23–24 years</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.eurekalert.org/news-releases/1059853" className="text-blue-600 hover:underline" aria-label="Read Eurekalert article on lifestyle factors and biological aging">Lifestyle & Biological Aging</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2">Healthspan-Lifespan Gap</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">~9 years (20% of life with morbidity)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://nutritionsource.hsph.harvard.edu/healthy-longevity/" className="text-blue-600 hover:underline" aria-label="Read Harvard article on healthy longevity">Harvard Healthy Longevity Research</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CombinedEffectsTable;
