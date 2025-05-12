
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

const PositiveFactorsTable: React.FC = () => {
  const { t } = useTranslation('longevity');
  const headers: string[] = t('sections.factors.positiveTable.headers', { returnObjects: true });
  const rows: string[][] = t('sections.factors.positiveTable.rows', { returnObjects: true });
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow className="bg-blue-50">
            {headers.map((header, idx) => (
              <TableHead key={idx} className="border border-gray-300 px-4 py-2 text-left font-bold">{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row: string[], idx: number) => (
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

export default PositiveFactorsTable;
