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

const ReferenceValuesDialog = () => {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <FileText className="mr-2 h-4 w-4" />
          {t("reference.title")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>{t("reference.title")}</DialogTitle>
          <DialogDescription>
            {t("reference.description")}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[65vh] w-full">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="general">{t("reference.general")}</TabsTrigger>
              <TabsTrigger value="amino">{t("reference.amino")}</TabsTrigger>
              <TabsTrigger value="vitamins">{t("reference.vitamins")}</TabsTrigger>
              <TabsTrigger value="inflammation">{t("reference.inflammation")}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Table>
                <TableCaption>{t("reference.caption.general")}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("reference.column.parameter")}</TableHead>
                    <TableHead>{t("reference.column.unit")}</TableHead>
                    <TableHead>{t("reference.column.women")}</TableHead>
                    <TableHead>{t("reference.column.men")}</TableHead>
                    <TableHead>{t("reference.column.comment")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.ferritin")}</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>premenopausal: 15–150<br/>postmenopausal: 15–300<br/>optimal: 70–200</TableCell>
                    <TableCell>30–400<br/>optimal: 100–300</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.vitaminD")}</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>50–70 (optimal)</TableCell>
                    <TableCell>50–70 (optimal)</TableCell>
                    <TableCell>Reference: 10–100, optimal higher</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.vitaminB12")}</TableCell>
                    <TableCell>pg/ml</TableCell>
                    <TableCell>&gt;600 (optimal 1000)</TableCell>
                    <TableCell>&gt;600 (optimal 1000)</TableCell>
                    <TableCell>Reference: 200–2000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Holo-transcobalamin</TableCell>
                    <TableCell>pmol/l</TableCell>
                    <TableCell>&gt;100</TableCell>
                    <TableCell>&gt;100</TableCell>
                    <TableCell>Reference: 37.5–150</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.folicAcid")}</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>&gt;16</TableCell>
                    <TableCell>&gt;16</TableCell>
                    <TableCell>Reference: 4.5–20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zinc (whole blood)</TableCell>
                    <TableCell>mg/l</TableCell>
                    <TableCell>6–7</TableCell>
                    <TableCell>6–7</TableCell>
                    <TableCell>Reference: 4.5–7.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Magnesium (serum)</TableCell>
                    <TableCell>mmol/l</TableCell>
                    <TableCell>0.85–1.0</TableCell>
                    <TableCell>0.85–1.0</TableCell>
                    <TableCell>Reference: 0.75–1.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Selenium (whole blood)</TableCell>
                    <TableCell>µg/l</TableCell>
                    <TableCell>140–160</TableCell>
                    <TableCell>140–160</TableCell>
                    <TableCell>Reference: 100–140</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Omega-3 Index</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>&gt;8</TableCell>
                    <TableCell>&gt;8</TableCell>
                    <TableCell>Reference: 4–11, optimal &gt;8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total protein</TableCell>
                    <TableCell>g/dl</TableCell>
                    <TableCell>&gt;7.0 (optimal 7.3–7.6)</TableCell>
                    <TableCell>&gt;7.0 (optimal 7.3–7.6)</TableCell>
                    <TableCell>Reference: 6.2–8.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DHEA-S</TableCell>
                    <TableCell>µg/dl</TableCell>
                    <TableCell>35.4–256 (age-dependent, optimal upper third)</TableCell>
                    <TableCell>44.3–331 (age-dependent, optimal upper third)</TableCell>
                    <TableCell>Age-dependent, measure in morning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total testosterone</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>up to 50 yrs: 0.5–2<br/>over 50 yrs: 0.4–2</TableCell>
                    <TableCell>3.0–9.0</TableCell>
                    <TableCell>Target: upper range</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Free testosterone</TableCell>
                    <TableCell>pg/ml</TableCell>
                    <TableCell>2–4</TableCell>
                    <TableCell>8–30 (age-dependent)</TableCell>
                    <TableCell>Target: upper reference third</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Estradiol (E2)</TableCell>
                    <TableCell>pg/ml</TableCell>
                    <TableCell>Follicular: 12–170<br/>Ovulation: 100–500<br/>Luteal: 40–200<br/>Postmeno: up to 40</TableCell>
                    <TableCell>up to 40<br/>optimal: 20–25</TableCell>
                    <TableCell>Under HRT: 60–80 (max. 100)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="amino">
              <Table>
                <TableCaption>{t("reference.caption.amino")}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("reference.column.parameter")}</TableHead>
                    <TableHead>{t("reference.column.unit")}</TableHead>
                    <TableHead>{t("reference.column.women")}</TableHead>
                    <TableHead>{t("reference.column.men")}</TableHead>
                    <TableHead>{t("reference.column.comment")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Leucine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>110–217 (target: upper half)</TableCell>
                    <TableCell>110–217 (target: upper half)</TableCell>
                    <TableCell>BCAA, endurance, muscle</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Isoleucine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>58–117 (target: upper half)</TableCell>
                    <TableCell>58–117 (target: upper half)</TableCell>
                    <TableCell>BCAA, mental performance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Valine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>206–317 (target: upper half)</TableCell>
                    <TableCell>206–317 (target: upper half)</TableCell>
                    <TableCell>BCAA, immune system</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Methionine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>25–40 (target: upper half)</TableCell>
                    <TableCell>25–40 (target: upper half)</TableCell>
                    <TableCell>Antioxidant, methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lysine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>139–240 (target: upper half)</TableCell>
                    <TableCell>139–240 (target: upper half)</TableCell>
                    <TableCell>Collagen, immune defense</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Phenylalanine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>51–109 (target: upper half)</TableCell>
                    <TableCell>51–109 (target: upper half)</TableCell>
                    <TableCell>Mood, neurotransmitters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tryptophan</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>36–125 (target: upper half)</TableCell>
                    <TableCell>36–125 (target: upper half)</TableCell>
                    <TableCell>Mood, sleep, serotonin</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Threonine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>118–210 (target: upper half)</TableCell>
                    <TableCell>118–210 (target: upper half)</TableCell>
                    <TableCell>Connective tissue, immunity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Arginine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>110–180 (target: upper half)</TableCell>
                    <TableCell>110–180 (target: upper half)</TableCell>
                    <TableCell>Circulation, NO production</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Glutamine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>500–900 (target: upper half)</TableCell>
                    <TableCell>500–900 (target: upper half)</TableCell>
                    <TableCell>Gut, immune system</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="vitamins">
              <Table>
                <TableCaption>{t("reference.caption.vitamins")}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("reference.column.parameter")}</TableHead>
                    <TableHead>{t("reference.column.unit")}</TableHead>
                    <TableHead>{t("reference.column.women")}</TableHead>
                    <TableHead>{t("reference.column.men")}</TableHead>
                    <TableHead>{t("reference.column.comment")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin A (Retinol)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>700–900 (optimal: 800)</TableCell>
                    <TableCell>700–900 (optimal: 800)</TableCell>
                    <TableCell>For healthy skin, immune system</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B1 (Thiamine, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>39.8–60 (target: 60)</TableCell>
                    <TableCell>39.8–60 (target: 60)</TableCell>
                    <TableCell>Nerve health, energy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B2 (Riboflavin, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>85–300 (target: 250)</TableCell>
                    <TableCell>85–300 (target: 250)</TableCell>
                    <TableCell>Mitochondria, energy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B6 (P5P, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>10.1–36 (target: 36)</TableCell>
                    <TableCell>10.1–36 (target: 36)</TableCell>
                    <TableCell>Neurotransmitters, homocysteine</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B9 (Folate, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>100–270 (target: 160)</TableCell>
                    <TableCell>100–270 (target: 160)</TableCell>
                    <TableCell>DNA synthesis, methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B12 (active, Holo-TC)</TableCell>
                    <TableCell>pmol/L</TableCell>
                    <TableCell>&gt;100 (target: 100–150)</TableCell>
                    <TableCell>&gt;100 (target: 100–150)</TableCell>
                    <TableCell>Nerve, blood, methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin C</TableCell>
                    <TableCell>mg/L</TableCell>
                    <TableCell>10–20 (target: 10–20, up to 100 possible)</TableCell>
                    <TableCell>10–20 (target: 10–20, up to 100 possible)</TableCell>
                    <TableCell>Antioxidant, immune system</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="inflammation">
              <Table>
                <TableCaption>{t("reference.caption.inflammation")}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("reference.column.parameter")}</TableHead>
                    <TableHead>{t("reference.column.unit")}</TableHead>
                    <TableHead>{t("reference.column.women")}</TableHead>
                    <TableHead>{t("reference.column.men")}</TableHead>
                    <TableHead>{t("reference.column.comment")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">CRP (C-reactive protein, hsCRP)</TableCell>
                    <TableCell>mg/L</TableCell>
                    <TableCell>15 (optimal: up to 80)</TableCell>
                    <TableCell>&gt;15 (optimal: up to 80)</TableCell>
                    <TableCell>Histamine breakdown</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BDNF (Brain-derived neurotrophic factor)</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>30–40 (target)</TableCell>
                    <TableCell>30–40 (target)</TableCell>
                    <TableCell>Brain health, avoid &lt;20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AGEs (Advanced glycation endproducts)</TableCell>
                    <TableCell>µg/ml</TableCell>
                    <TableCell>&lt;50 (the lower the better)</TableCell>
                    <TableCell>&lt;50 (the lower the better)</TableCell>
                    <TableCell>Aging, metabolic health</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Nitrotyrosine</TableCell>
                    <TableCell>nmol/L</TableCell>
                    <TableCell>&lt;200 (target)</TableCell>
                    <TableCell>&lt;200 (target)</TableCell>
                    <TableCell>Nitrosative stress</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zonulin (leaky gut marker)</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>&lt;30 (the lower the better)</TableCell>
                    <TableCell>&lt;30 (the lower the better)</TableCell>
                    <TableCell>Intestinal permeability</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            <h3 className="font-semibold mb-2">{t("reference.notes.title")}</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
              <li>{t("reference.notes.1")}</li>
              <li>{t("reference.notes.2")}</li>
              <li>{t("reference.notes.3")}</li>
              <li><strong>{t("reference.amino")}</strong>: {t("reference.notes.4")}</li>
              <li><strong>{t("reference.vitamins")}</strong>: {t("reference.notes.5")}</li>
              <li><strong>{t("reference.inflammation")}</strong>: {t("reference.notes.6")}</li>
            </ul>
            <p className="text-xs mt-4 text-muted-foreground">
              <strong>Sources:</strong> {t("reference.sources")}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ReferenceValuesDialog;
