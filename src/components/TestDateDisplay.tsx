
import { format } from "date-fns";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface TestDateDisplayProps {
  date: Date;
}

const TestDateDisplay = ({ date }: TestDateDisplayProps) => {
  // Format the date to show day, month, and year in a clear format
  // Using the en-GB locale to match the document format (DD.MM.YYYY)
  const formattedDate = format(date, "dd.MM.yyyy");

  return (
    <div className="flex items-center justify-center bg-blue-50 p-3 rounded-lg border border-blue-100">
      <div className="text-center">
        <p className="text-lg font-bold text-blue-700">{formattedDate}</p>
      </div>
    </div>
  );
};

export default TestDateDisplay;
