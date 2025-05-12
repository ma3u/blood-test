
import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation('longevity');
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-collapse border border-gray-300 mb-6">
        <TableHeader>
          <TableRow className="bg-blue-50">
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">{t('sections.factors.combinedTable.headers.0')}</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left font-bold">{t('sections.factors.combinedTable.headers.1')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
  {(t('sections.factors.combinedTable.rows', { returnObjects: true }) as string[][]).map((row, idx) => (
    <TableRow key={idx} className={idx % 2 === 1 ? "bg-gray-50" : undefined}>
      {row.map((cell, cidx) => (
        <TableCell key={cidx} className={`border border-gray-300 px-4 py-2${cidx === 0 ? ' font-medium' : ''}`}>{cell}</TableCell>
      ))}
    </TableRow>
  ))}
</TableBody>
      </Table>
    </div>
  );
};

export default CombinedEffectsTable;
