
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";
import { ClipboardCheck, Upload } from "lucide-react";

interface EntryMethodTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EntryMethodTabs = ({ activeTab, setActiveTab }: EntryMethodTabsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-2">{t("entry.methods")}</h3>
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="manual" className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4" />
            {t("manual.entry")}
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            {t("file.upload")}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default EntryMethodTabs;
