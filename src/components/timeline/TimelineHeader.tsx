
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineHeaderProps {
  onBack: () => void;
  onAddDialogOpen: () => void;
}

const TimelineHeader = ({ onBack, onAddDialogOpen }: TimelineHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">{t("timeline.title")}</h2>
        <p className="text-gray-600">{t("timeline.description")}</p>
      </div>
      <div className="space-x-2">
        <Button variant="outline" onClick={onBack}>
          {t("timeline.back")}
        </Button>
        <Button onClick={onAddDialogOpen}>
          <PlusCircle className="w-4 h-4 mr-2" />
          {t("timeline.add")}
        </Button>
      </div>
    </div>
  );
};

export default TimelineHeader;
