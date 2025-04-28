
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

const ReferenceValuesDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <FileText className="mr-2 h-4 w-4" />
          Reference Values
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Reference Values</DialogTitle>
          <DialogDescription>
            Based on Dr. Ulrich Strunz and Dr. med. Helena Orfanos-Boeckel recommendations
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full p-4">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Reference Values According to Dr. Ulrich Strunz and Dr. med. Helena Orfanos-Boeckel for Women and Men</h2>
            <p className="text-sm text-muted-foreground">
              The following table summarizes key laboratory reference values and therapeutic target ranges based on the recommendations of Dr. Ulrich Strunz and Dr. med. Helena Orfanos-Boeckel. Values are differentiated by sex where specifically indicated.
            </p>
            
            <div className="mt-6 space-y-6">
              <section>
                <h3 className="text-md font-semibold mb-4">🩺 General Parameters</h3>
                <div className="grid gap-4">
                  {/* Ferritin */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Ferritin (storage iron)</span>
                      <span className="text-muted-foreground">ng/ml</span>
                    </div>
                    <p className="text-sm">
                      Women: premenopausal: 15–150, postmenopausal: 15–300, optimal: 70–200<br />
                      Men: 30–400, optimal: 100–300
                    </p>
                  </div>
                  
                  {/* Vitamin D */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Vitamin D (25-OH)</span>
                      <span className="text-muted-foreground">ng/ml</span>
                    </div>
                    <p className="text-sm">50–70 (optimal)</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-md font-semibold mb-4">🧬 Amino Acids</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Leucine</span>
                      <span className="text-muted-foreground">µmol/L</span>
                    </div>
                    <p className="text-sm">110–217 (target: upper half)</p>
                    <p className="text-xs text-muted-foreground">BCAA, endurance, muscle</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-md font-semibold mb-4">🍊 Special Vitamins</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Vitamin A (Retinol)</span>
                      <span className="text-muted-foreground">µg/L</span>
                    </div>
                    <p className="text-sm">700–900 (optimal: 800)</p>
                    <p className="text-xs text-muted-foreground">For healthy skin, immune system</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-md font-semibold mb-4">🔥 Inflammation Markers</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">CRP (C-reactive protein, hsCRP)</span>
                      <span className="text-muted-foreground">mg/L</span>
                    </div>
                    <p className="text-sm">15 (optimal: up to 80)</p>
                  </div>
                </div>
              </section>

              <div className="mt-8 text-sm text-muted-foreground">
                <h3 className="font-semibold mb-2">Notes for Use:</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>These values are based on optimal target ranges for prevention and modern molecular medicine.</li>
                  <li>Values may vary depending on the laboratory and individual situation.</li>
                  <li>For hormones, consider cycle phase, age, and possible hormone therapy, especially in women.</li>
                  <li>Amino acids: For optimal health, each amino acid should be in the upper half of the reference range.</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ReferenceValuesDialog;
