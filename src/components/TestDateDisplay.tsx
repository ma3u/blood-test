
import { format } from "date-fns";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TestDateDisplayProps {
  date: Date;
}

const TestDateDisplay = ({ date }: TestDateDisplayProps) => {
  const { t } = useLanguage();
  
  // Format the date to show day, month, and year in a clear format
  // Using the en-GB locale to match the document format (DD.MM.YYYY)
  const formattedDate = format(date, "dd.MM.yyyy");

  // Improved handler to ensure the event doesn't bubble up to the form
  const handleInfoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Just show the HoverCard, no additional action needed
  };

  return (
    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-100">
      <div className="text-lg font-bold text-blue-700">{formattedDate}</div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <button 
            className="text-blue-600" 
            type="button" 
            onClick={handleInfoClick}
            aria-label={t("gender.info")}
          >
            <Info className="h-4 w-4" />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">{t("timeline.date")}</h4>
            <p className="text-sm">{t("test.date.info")}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default TestDateDisplay;
