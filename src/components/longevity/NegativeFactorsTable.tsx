
import React from "react";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('longevity');
  
  // Get headers and rows with defensive checks
  const headersData = t('sections.factors.negativeTable.headers', { returnObjects: true });
  const rowsData = t('sections.factors.negativeTable.rows', { returnObjects: true });
  
  const headers = Array.isArray(headersData) ? headersData : [];
  const rows = Array.isArray(rowsData) ? rowsData : [];

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
          {rows.map((row, idx) => (
            <TableRow key={idx} className={idx % 2 === 1 ? "bg-gray-50" : undefined}>
              {Array.isArray(row) ? row.map((cell, cidx) => {
                // Convert markdown links to accessible anchor tags
                const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
                let lastIndex = 0;
                const parts: React.ReactNode[] = [];
                let match: RegExpExecArray | null;
                let key = 0;
                while ((match = linkRegex.exec(cell)) !== null) {
                  if (match.index > lastIndex) {
                    parts.push(cell.slice(lastIndex, match.index));
                  }
                  parts.push(
                    <a
                      key={`link-${cidx}-${key++}`}
                      href={match[2]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {match[1]}
                    </a>
                  );
                  lastIndex = match.index + match[0].length;
                }
                if (lastIndex < cell.length) {
                  parts.push(cell.slice(lastIndex));
                }
                return (
                  <TableCell key={cidx} className={`border border-gray-300 px-4 py-2${cidx === 0 ? ' font-medium' : ''}`}>{parts.length > 0 ? parts : cell}</TableCell>
                );
              }) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NegativeFactorsTable;
