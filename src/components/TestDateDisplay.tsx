
import { format } from "date-fns";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TestDateDisplayProps {
  date: Date;
}

const TestDateDisplay = ({ date }: TestDateDisplayProps) => {
  // Format the date to show day, month, and year in a clear format
  // Using the en-GB locale to match the document format (DD.MM.YYYY)
  const formattedDate = format(date, "dd.MM.yyyy");

  return (
    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-100">
      <div className="text-lg font-bold text-blue-700">{formattedDate}</div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="text-blue-600">
            <Info className="h-4 w-4" />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">Test Date</h4>
            <p className="text-sm">The date when your blood test was performed. This is important for tracking changes over time.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default TestDateDisplay;
