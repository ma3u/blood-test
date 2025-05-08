
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";

interface EntryMethodTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EntryMethodTabs = ({ activeTab, setActiveTab }: EntryMethodTabsProps) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{t("entry.methods")}</h3>
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="manual">{t("manual.entry")}</TabsTrigger>
          <TabsTrigger value="upload">{t("file.upload")}</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default EntryMethodTabs;
