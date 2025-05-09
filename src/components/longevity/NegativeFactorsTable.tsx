
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
      <Table className="w-full border-collapse border border-gray-300 mb-6">
        <TableHeader>
          <TableRow className="bg-blue-50">
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Factor</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Impact on Longevity</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Impact on Healthspan</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2 text-left">Evidence</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Smoking</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">5–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Increases risk of 21 diseases</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://onlinelibrary.wiley.com/doi/10.1111/add.16757" className="text-blue-600 hover:underline" aria-label="Read systematic review on smoking and lifespan">Smoking Impact Systematic Review</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Physical Inactivity</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">4.7 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Linked to 17 diseases</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://pubmed.ncbi.nlm.nih.gov/33609364/" className="text-blue-600 hover:underline" aria-label="Read PubMed article on physical activity and mortality">Physical Inactivity Research</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Obesity (BMI ≥30)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">3–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Raises diabetes, CVD, and cancer risk</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.hopkinsarthritis.org/arthritis-news/years-of-life-lost-due-to-obesity/" className="text-blue-600 hover:underline" aria-label="Read Hopkins study on obesity and lifespan">Obesity & Lifespan Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Diabetes (Type 2)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">2 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces disease-free years by 1.7 years</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.nature.com/articles/s41591-025-03570-5" className="text-blue-600 hover:underline" aria-label="Read Nature Medicine study on diabetes and healthspan">Healthspan & Diabetes Study</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Hypertension</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">4–5 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Increases stroke and kidney disease risk</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/484996" className="text-blue-600 hover:underline" aria-label="Read JAMA article on hypertension mortality impact">JAMA Hypertension Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Low Socioeconomic Status</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">5–7 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Limits access to healthcare and healthy food</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1432701/pdf" className="text-blue-600 hover:underline" aria-label="Read Frontiers article on socioeconomic status and health outcomes">Public Health Impact Study</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Poor Diet (High processed foods)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">3–5 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Elevates chronic inflammation and metabolic disorders</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.mdpi.com/2072-6643/11/12/2862" className="text-blue-600 hover:underline" aria-label="Read MDPI article on dietary patterns and longevity">Dietary Patterns Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Excessive Alcohol</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">2–3 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Linked to liver disease and cancers</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1326149/" className="text-blue-600 hover:underline" aria-label="Read PMC article on excessive alcohol consumption health impacts">Alcohol Mortality Study</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default NegativeFactorsTable;
