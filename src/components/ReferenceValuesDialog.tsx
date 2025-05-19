
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

interface ReferenceValuesDialogProps {
  gender?: "male" | "female";
}

const ReferenceValuesDialog = ({ gender = "male" }: ReferenceValuesDialogProps) => {
  const { t } = useLanguage();
  
  // Helper function to determine which column to show based on gender
  const getGenderSpecificValue = (femaleValue: string, maleValue: string) => {
    return gender === "female" ? femaleValue : maleValue;
  };
  
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
            <TabsList className="mb-4">
              <TabsTrigger value="general">{t("reference.general")}</TabsTrigger>
              <TabsTrigger value="amino">{t("reference.amino")}</TabsTrigger>
              <TabsTrigger value="vitamins">{t("reference.vitamins")}</TabsTrigger>
              <TabsTrigger value="inflammation">{t("reference.inflammation")}</TabsTrigger>
              <TabsTrigger value="hematology">{t("reference.hematology")}</TabsTrigger>
              <TabsTrigger value="hormones">{t("reference.hormones")}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Table>
                <TableCaption>{t("reference.caption.general")}</TableCaption>
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
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.ferritin")}</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>
                      {getGenderSpecificValue(
                        "premenopausal: 15–150<br/>postmenopausal: 15–300<br/>optimal: 70–200",
                        "30–400<br/>optimal: 100–300"
                      )}
                    </TableCell>
                    <TableCell>Iron storage protein; reflects total body iron stores</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TSH</TableCell>
                    <TableCell>mIU/l</TableCell>
                    <TableCell>0.5–2.5 (optimal)</TableCell>
                    <TableCell>Thyroid stimulating hormone</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.vitaminD")}</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>50–70 (optimal)</TableCell>
                    <TableCell>Essential for calcium absorption, bone health, immune function</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.vitaminB12")}</TableCell>
                    <TableCell>pg/ml</TableCell>
                    <TableCell>&gt;600 (optimal 1000)</TableCell>
                    <TableCell>Critical for nerve function, DNA synthesis</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Holo-transcobalamin</TableCell>
                    <TableCell>pmol/l</TableCell>
                    <TableCell>&gt;100</TableCell>
                    <TableCell>Active form of B12 that can be utilized by cells</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("marker.folicAcid")}</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>&gt;16</TableCell>
                    <TableCell>Crucial for DNA synthesis, repair, and methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zinc (whole blood)</TableCell>
                    <TableCell>mg/l</TableCell>
                    <TableCell>6–7</TableCell>
                    <TableCell>Essential for immune function, protein synthesis</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Magnesium (serum)</TableCell>
                    <TableCell>mmol/l</TableCell>
                    <TableCell>0.85–1.0</TableCell>
                    <TableCell>Required for over 600 enzymatic reactions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Selenium (whole blood)</TableCell>
                    <TableCell>µg/l</TableCell>
                    <TableCell>140–160</TableCell>
                    <TableCell>Antioxidant mineral essential for thyroid hormone metabolism</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Omega-3 Index</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>&gt;8</TableCell>
                    <TableCell>Measures EPA and DHA in red blood cell membranes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="amino">
              <Table>
                <TableCaption>{t("reference.caption.amino")}</TableCaption>
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
                  <TableRow>
                    <TableCell className="font-medium">Leucine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>110–217 (target: upper half)</TableCell>
                    <TableCell>BCAA, endurance, muscle</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Isoleucine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>58–117 (target: upper half)</TableCell>
                    <TableCell>BCAA, mental performance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Valine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>206–317 (target: upper half)</TableCell>
                    <TableCell>BCAA, immune system</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Methionine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>25–40 (target: upper half)</TableCell>
                    <TableCell>Antioxidant, methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lysine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>139–240 (target: upper half)</TableCell>
                    <TableCell>Collagen, immune defense</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Phenylalanine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>51–109 (target: upper half)</TableCell>
                    <TableCell>Mood, neurotransmitters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tryptophan</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>36–125 (target: upper half)</TableCell>
                    <TableCell>Mood, sleep, serotonin</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Threonine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>118–210 (target: upper half)</TableCell>
                    <TableCell>Connective tissue, immunity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Arginine</TableCell>
                    <TableCell>µmol/L</TableCell>
                    <TableCell>110–180 (target: upper half)</TableCell>
                    <TableCell>Circulation, NO production</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Glutamine</TableCell>
                    <TableCell>µmol/L</TableCell>
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
                    <TableHead className="w-1/4">{t("reference.column.parameter")}</TableHead>
                    <TableHead className="w-1/6">{t("reference.column.unit")}</TableHead>
                    <TableHead className="w-1/3">
                      {gender === "female" ? t("reference.column.women") : t("reference.column.men")}
                    </TableHead>
                    <TableHead className="w-1/4">{t("reference.column.comment")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin A (Retinol)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>700–900 (optimal: 800)</TableCell>
                    <TableCell>For healthy skin, immune system</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B1 (Thiamine, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>39.8–60 (target: 60)</TableCell>
                    <TableCell>Nerve health, energy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B2 (Riboflavin, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>85–300 (target: 250)</TableCell>
                    <TableCell>Mitochondria, energy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B6 (P5P, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>10.1–36 (target: 36)</TableCell>
                    <TableCell>Neurotransmitters, homocysteine</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B9 (Folate, active)</TableCell>
                    <TableCell>µg/L</TableCell>
                    <TableCell>100–270 (target: 160)</TableCell>
                    <TableCell>DNA synthesis, methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin B12 (active, Holo-TC)</TableCell>
                    <TableCell>pmol/L</TableCell>
                    <TableCell>&gt;100 (target: 100–150)</TableCell>
                    <TableCell>Nerve, blood, methylation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin C</TableCell>
                    <TableCell>mg/L</TableCell>
                    <TableCell>10–20 (target: 10–20, up to 100 possible)</TableCell>
                    <TableCell>Antioxidant, immune system</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vitamin E</TableCell>
                    <TableCell>mg/L</TableCell>
                    <TableCell>16–25 (target: 16–25)</TableCell>
                    <TableCell>Cell membranes, antioxidant</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="inflammation">
              <Table>
                <TableCaption>{t("reference.caption.inflammation")}</TableCaption>
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
                  <TableRow>
                    <TableCell className="font-medium">CRP (C-reactive protein, hsCRP)</TableCell>
                    <TableCell>mg/L</TableCell>
                    <TableCell>&lt;1.0 (optimal: &lt;0.8)</TableCell>
                    <TableCell>Acute phase protein, inflammation marker</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BDNF (Brain-derived neurotrophic factor)</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>30–40 (target)</TableCell>
                    <TableCell>Brain health, avoid &lt;20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AGEs (Advanced glycation endproducts)</TableCell>
                    <TableCell>µg/ml</TableCell>
                    <TableCell>&lt;50 (the lower the better)</TableCell>
                    <TableCell>Aging, metabolic health</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Nitrotyrosine</TableCell>
                    <TableCell>nmol/L</TableCell>
                    <TableCell>&lt;200 (target)</TableCell>
                    <TableCell>Nitrosative stress</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zonulin (leaky gut marker)</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>&lt;30 (the lower the better)</TableCell>
                    <TableCell>Intestinal permeability</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="hematology">
              <Table>
                <TableCaption>Reference Values for Hematology Parameters</TableCaption>
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
                  <TableRow>
                    <TableCell className="font-medium">Hemoglobin</TableCell>
                    <TableCell>g/dL</TableCell>
                    <TableCell>{gender === "female" ? "12.0-15.5" : "13.5-17.5"}</TableCell>
                    <TableCell>Oxygen carrier in red blood cells</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Hematocrit</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>{gender === "female" ? "36-46" : "41-53"}</TableCell>
                    <TableCell>Percentage of blood volume occupied by RBCs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Red Blood Cells (RBC)</TableCell>
                    <TableCell>10^6/µL</TableCell>
                    <TableCell>{gender === "female" ? "4.0-5.2" : "4.5-5.9"}</TableCell>
                    <TableCell>Oxygen transport cells</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mean Corpuscular Volume (MCV)</TableCell>
                    <TableCell>fL</TableCell>
                    <TableCell>80-100</TableCell>
                    <TableCell>Average size of red blood cells</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">White Blood Cells (WBC)</TableCell>
                    <TableCell>10^3/µL</TableCell>
                    <TableCell>4.0-11.0</TableCell>
                    <TableCell>Immune system cells</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lymphocytes</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>20-40</TableCell>
                    <TableCell>T-cells and B-cells of adaptive immunity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Platelets</TableCell>
                    <TableCell>10^3/µL</TableCell>
                    <TableCell>150-450</TableCell>
                    <TableCell>Blood clotting cells</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="hormones">
              <Table>
                <TableCaption>Reference Values for Hormones</TableCaption>
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
                  <TableRow>
                    <TableCell className="font-medium">DHEA-S</TableCell>
                    <TableCell>µg/dl</TableCell>
                    <TableCell>
                      {gender === "female" ? 
                        "35.4–256 (age-dependent, optimal upper third)" : 
                        "44.3–331 (age-dependent, optimal upper third)"}
                    </TableCell>
                    <TableCell>Most abundant steroid hormone in the body</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total testosterone</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>
                      {gender === "female" ? 
                        "up to 50 yrs: 0.5–2<br/>over 50 yrs: 0.4–2" : 
                        "3.0–9.0"}
                    </TableCell>
                    <TableCell>Target: upper range</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Free testosterone</TableCell>
                    <TableCell>pg/ml</TableCell>
                    <TableCell>
                      {gender === "female" ? "2–4" : "8–30 (age-dependent)"}
                    </TableCell>
                    <TableCell>Target: upper reference third</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Estradiol (E2)</TableCell>
                    <TableCell>pg/ml</TableCell>
                    <TableCell>
                      {gender === "female" ? 
                        "Follicular: 12–170<br/>Ovulation: 100–500<br/>Luteal: 40–200<br/>Postmeno: up to 40" : 
                        "up to 40<br/>optimal: 20–25"}
                    </TableCell>
                    <TableCell>Under HRT: 60–80 (max. 100)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Progesterone</TableCell>
                    <TableCell>ng/ml</TableCell>
                    <TableCell>
                      {gender === "female" ? 
                        "2nd cycle half: &gt;10<br/>HRT: 2–6" : 
                        "1–2"}
                    </TableCell>
                    <TableCell>Protection against estrogen dominance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SHBG</TableCell>
                    <TableCell>nmol/l</TableCell>
                    <TableCell>
                      {gender === "female" ? "30–130" : "20–75"}
                    </TableCell>
                    <TableCell>&gt;100 binds hormones too strongly</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cortisol (morning)</TableCell>
                    <TableCell>µg/dl</TableCell>
                    <TableCell>
                      {gender === "female" ? "16–18" : "17–18"}
                    </TableCell>
                    <TableCell>Optimal range</TableCell>
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
              <li><strong>Indicators</strong>: ✓ tests paid by public health insurance, ⭐ tests highly recommended by experts</li>
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
