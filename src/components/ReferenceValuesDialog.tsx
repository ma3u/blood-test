
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo } from "react";

interface ReferenceValuesDialogProps {
  gender?: "male" | "female";
}

interface ReferenceValue {
  param: string;
  unit: string;
  women: string;
  men: string;
  comment: string;
}

const ReferenceValuesDialog = ({ gender = "male" }: ReferenceValuesDialogProps) => {
  const { t, language } = useLanguage();
  
  // Get the appropriate reference data from translations
  const referenceData = useMemo(() => {
    // Make sure we're accessing the reference data arrays correctly
    return {
      general: Array.isArray(t("reference.general")) ? t("reference.general") : [],
      amino: Array.isArray(t("reference.amino")) ? t("reference.amino") : [],
      vitamins: Array.isArray(t("reference.vitamins")) ? t("reference.vitamins") : [],
      inflammation: Array.isArray(t("reference.inflammation")) ? t("reference.inflammation") : [],
      hematology: Array.isArray(t("reference.hematology")) ? t("reference.hematology") : [],
      hormones: Array.isArray(t("reference.hormones")) ? t("reference.hormones") : [],
    };
  }, [t, language]);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <FileText className="mr-2 h-4 w-4" />
          {t("reference.title")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>
            {t("reference.title")} - {gender === "male" ? t("gender.male") : t("gender.female")}
          </DialogTitle>
          <DialogDescription>
            {t("reference.description")}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[65vh] w-full">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-4 flex flex-wrap">
              <TabsTrigger value="general">{t("reference.general")}</TabsTrigger>
              <TabsTrigger value="amino">{t("reference.amino")}</TabsTrigger>
              <TabsTrigger value="vitamins">{t("reference.vitamins")}</TabsTrigger>
              <TabsTrigger value="inflammation">{t("reference.inflammation")}</TabsTrigger>
              <TabsTrigger value="hematology">{t("reference.hematology")}</TabsTrigger>
              <TabsTrigger value="hormones">{t("reference.hormones")}</TabsTrigger>
            </TabsList>
            
            {/* General Parameters Tab */}
            <TabsContent value="general">
              <ReferenceTable 
                data={referenceData.general} 
                caption={t("reference.caption.general")} 
                gender={gender} 
              />
            </TabsContent>

            {/* Amino Acids Tab */}
            <TabsContent value="amino">
              <ReferenceTable 
                data={referenceData.amino} 
                caption={t("reference.caption.amino")} 
                gender={gender} 
              />
            </TabsContent>

            {/* Special Vitamins Tab */}
            <TabsContent value="vitamins">
              <ReferenceTable 
                data={referenceData.vitamins} 
                caption={t("reference.caption.vitamins")} 
                gender={gender} 
              />
            </TabsContent>
            
            {/* Inflammation Markers Tab */}
            <TabsContent value="inflammation">
              <ReferenceTable 
                data={referenceData.inflammation} 
                caption={t("reference.caption.inflammation")} 
                gender={gender} 
              />
            </TabsContent>

            {/* Hematology Tab */}
            <TabsContent value="hematology">
              <ReferenceTable 
                data={referenceData.hematology} 
                caption={t("reference.caption.hematology")} 
                gender={gender} 
              />
            </TabsContent>

            {/* Hormones Tab */}
            <TabsContent value="hormones">
              <ReferenceTable 
                data={referenceData.hormones} 
                caption={t("reference.caption.hormones")} 
                gender={gender} 
              />
            </TabsContent>
          </Tabs>

          {/* Notes Section */}
          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            <h3 className="font-semibold mb-2">{t("reference.notes.title")}</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
              <li>{t("reference.notes.1")}</li>
              <li>{t("reference.notes.2")}</li>
              <li>{t("reference.notes.3")}</li>
              <li><strong>{t("reference.amino")}</strong>: {t("reference.notes.4")}</li>
              <li><strong>{t("reference.vitamins")}</strong>: {t("reference.notes.5")}</li>
              <li><strong>{t("reference.inflammation")}</strong>: {t("reference.notes.6")}</li>
              <li>{t("reference.notes.indicators")}</li>
            </ul>
            <p className="text-xs mt-4 text-muted-foreground">
              <strong>{t("reference.sources")}</strong>
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

// Separate component for the tables to make the code more maintainable
interface ReferenceTableProps {
  data: ReferenceValue[];
  caption: string;
  gender: "male" | "female";
}

const ReferenceTable = ({ data = [], caption, gender }: ReferenceTableProps) => {
  const { t } = useLanguage();
  
  // Add default value and ensure data is an array
  const safeData = Array.isArray(data) ? data : [];
  
  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">{t("reference.column.parameter")}</TableHead>
          <TableHead className="w-1/6">{t("reference.column.unit")}</TableHead>
          <TableHead className="w-1/3">
            {gender === "female" ? t("reference.column.women") : t("reference.column.men")}
          </TableHead>
          <TableHead className="w-1/4">{t("reference.column.comment")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {safeData.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium whitespace-pre-wrap">{item.param}</TableCell>
            <TableCell>{item.unit}</TableCell>
            <TableCell className="whitespace-pre-wrap">
              {gender === "female" ? item.women : item.men}
            </TableCell>
            <TableCell>{item.comment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReferenceValuesDialog;
