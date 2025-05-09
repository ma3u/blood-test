
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
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Regular Physical Activity</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Adds 4.5 years</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces risk of 17 diseases (e.g., CVD, diabetes)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.tandfonline.com/doi/full/10.1080/02640414.2020.1803630" className="text-blue-600 hover:underline" aria-label="Read research on exercise science and longevity">Exercise Science Research</a>, <a href="https://www.nature.com/articles/s41598-020-61241-6" className="text-blue-600 hover:underline" aria-label="Read Nature journal article on exercise and mortality">Nature: Exercise & Mortality Study</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2">- Aerobic (e.g., running)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">25–40% lower mortality</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Improves cardiovascular health</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.nature.com/articles/s41598-020-61241-6" className="text-blue-600 hover:underline" aria-label="Read Nature journal article on aerobic exercise benefits">Nature: Aerobic Exercise Benefits</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2">- Resistance Training</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">15% lower all-cause mortality</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Preserves muscle mass and bone density</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.fisiologiadelejercicio.com/wp-content/uploads/2019/05/The-association-of-resistance-training.pdf" className="text-blue-600 hover:underline" aria-label="Read research on resistance training and longevity">Resistance Training Longevity Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Mediterranean Diet</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">23% lower mortality</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces inflammation and metabolic disease risk</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3489349/" className="text-blue-600 hover:underline" aria-label="Read PMC article on Mediterranean diet and longevity">Mediterranean Diet Longevity Study</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Not Smoking</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Prevents 5–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Lowers risk of 21 diseases</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://onlinelibrary.wiley.com/doi/10.1111/add.16757" className="text-blue-600 hover:underline" aria-label="Read Wiley journal article on smoking and life expectancy">Smoking & Life Expectancy Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Moderate Alcohol Intake</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Part of lifestyle adding 5.5 years</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Cardiovascular benefits at ≤1 drink/day (women) or ≤2/day (men)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1326149/" className="text-blue-600 hover:underline" aria-label="Read PMC article on alcohol consumption and mortality">Alcohol Consumption Study</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Optimal Sleep (7–8 hours)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Prevents 2–3 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Enhances cognitive function and metabolism</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.sleepdiplomat.com/book" className="text-blue-600 hover:underline" aria-label="Learn about sleep science and its impact on health">Why We Sleep Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Strong Social Connections</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">50% higher survival rates</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces dementia risk and improves mental health</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.pnas.org/doi/10.1073/pnas.1900712116" className="text-blue-600 hover:underline" aria-label="Read PNAS article on social integration and mortality risk">Social Integration Study</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Stress Management</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Mitigates 23–24 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Lowers chronic inflammation</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://news.harvard.edu/gazette/story/2022/06/optimism-lengthens-life-study-finds/" className="text-blue-600 hover:underline" aria-label="Read Harvard study on optimism and longevity">Optimism & Longevity Research</a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-50">
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">Healthy BMI (18.5–24.9)</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Prevents 3–10 years lost</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Reduces diabetes, CVD, and metabolic syndrome</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://www.hopkinsarthritis.org/arthritis-news/years-of-life-lost-due-to-obesity/" className="text-blue-600 hover:underline" aria-label="Read Hopkins research on obesity and life expectancy">Years Lost to Obesity Study</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 px-4 py-2 font-semibold">High Socioeconomic Status</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">2.5x higher longevity</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">Better healthcare access and nutrition</TableCell>
            <TableCell className="border border-gray-300 px-4 py-2">
              <a href="https://gh.bmj.com/content/6/3/e004124" className="text-blue-600 hover:underline" aria-label="Read BMJ article on socioeconomic status and longevity">Global Health & Longevity Study</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PositiveFactorsTable;
