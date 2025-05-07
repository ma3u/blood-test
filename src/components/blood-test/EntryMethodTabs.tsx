
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EntryMethodTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EntryMethodTabs = ({ activeTab, setActiveTab }: EntryMethodTabsProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Entry Method</h3>
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="upload">Upload Document</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default EntryMethodTabs;
