
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DiagnosticsSectionDe: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Proaktive Diagnostik und Selbstüberwachung</h2>
      <p className="mb-4">Um einen ganzheitlichen und proaktiven Ansatz für meine Gesundheit und Langlebigkeit zu gewährleisten, habe ich eine Routine regelmäßiger Diagnosekontrollen und kontinuierlicher Selbstüberwachung etabliert. Diese umfassende Strategie umfasst Laboranalysen, fortschrittliche molekulare Diagnostik und digitale Gesundheitsüberwachung, die alle auf die Früherkennung von Risikofaktoren und die Optimierung meiner Gesundheitsspanne abzielen.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Regelmäßige Labordiagnostik</h3>
      <p className="mb-4"><strong>Blutwerte:</strong> Ich überwache routinemäßig Standard-Blutmarker wie Cholesterin (Gesamt, LDL, HDL, Triglyceride), Nüchternglukose, HbA1c, Leber- und Nierenfunktion, Entzündungsmarker (hs-CRP), Vitamin D, Magnesium, Zink und Homocystein. Diese Werte geben Aufschluss über meine Stoffwechselgesundheit, kardiovaskuläres Risiko und Mikronährstoffstatus.</p>
      <p className="mb-4"><strong>Aminosäureprofil:</strong> Periodisch bewerte ich mein Aminosäurespektrum, um Defizite oder Ungleichgewichte zu erkennen. Essentielle und bedingt essentielle Aminosäuren wie Tryptophan, Lysin, Methionin, Leucin, Isoleucin, Valin, Glutamin und Glycin sind besonders wichtig für die Muskelerhaltung, Immunfunktion und das Neurotransmitter-Gleichgewicht.</p>
      <p className="mb-4"><strong>Mikronährstoffstatus:</strong> Ergänzende Kontrollen für Vitamine (C, E, B-Komplex, Coenzym Q10, Alpha-Liponsäure) und Mineralien (Chrom, Magnesium) helfen, subklinische Defizite zu identifizieren, die Alterung, Immunität und Energiestoffwechsel beeinflussen können.</p>

      <Card className="mb-6 bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold text-blue-700 mb-2">Bluttest-Oracle Tool</h4>
          <p className="mb-4">
            Nutzen Sie unser interaktives Bluttest-Tool, um Ihre Werte einzugeben, zu verfolgen und personalisierte Empfehlungen zu erhalten.
          </p>
          <div className="flex justify-end">
            <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Zum Bluttest-Tool
            </a>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Mikrobiomanalyse</h3>
      <p className="mb-4"><strong>Darm-Mikrobiom-Sequenzierung:</strong> Ich führe periodische stuhlbasierte Mikrobiomanalysen durch, um die Vielfalt und Balance meiner Darmflora zu bewerten. Dies umfasst die Quantifizierung nützlicher Gattungen (z.B. Bifidobakterien, Akkermansia), die Bewertung des Vorhandenseins von kurzkettige Fettsäureproduzenten und das Screening auf Dysbiose oder Überwucherung pathogener Spezies.</p>
      <p className="mb-4"><strong>Interpretation und Handlung:</strong> Erkenntnisse aus Mikrobiom-Tests leiten meine Ernährungsentscheidungen, insbesondere die Ballaststoff- und Präbiotika-Aufnahme, und helfen mir, meine Probiotika-Ergänzung zu personalisieren. Ein gesundes, diverses Mikrobiom wird heute als eine kritische Säule für die Stoffwechselgesundheit, Immunregulation und sogar das mentale Wohlbefinden anerkannt.</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Digitale Fitness- und Gesundheitsüberwachung</h3>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>VO2Max:</strong> Ich verfolge meinen VO2Max als Marker für aerobe Fitness und kardiovaskuläre Gesundheit. Verbesserungen hier sind mit niedrigerer Gesamtmortalität und verbesserter Gesundheitsspanne verbunden.</li>
        <li><strong>Ruheherzfrequenz und Herzfrequenzvariabilität (HRV):</strong> Beide werden kontinuierlich überwacht; eine niedrigere Ruheherzfrequenz und höhere HRV sind Anzeichen für gute kardiovaskuläre und autonome Gesundheit.</li>
        <li><strong>Blutdruck:</strong> Regelmäßige Messungen helfen mir, frühe Hypertonie zu erkennen und die Auswirkungen von Lebensstiländerungen zu bewerten.</li>
        <li><strong>Körperzusammensetzung:</strong> Gewicht, BMI, Körperfettanteil und Taillenumfang werden verfolgt, um die Stoffwechselgesundheit zu überwachen und adipositasbedingten Risiken vorzubeugen.</li>
        <li><strong>Aktivitätsmetriken:</strong> Schritte pro Tag, aktiver Energieverbrauch, Bewegungsminuten und Trainingsarten (Ausdauer, Kraft, HIIT) werden alle protokolliert, um sicherzustellen, dass ich die empfohlenen Aktivitätsniveaus erreiche.</li>
        <li><strong>Schlafverfolgung:</strong> Ich überwache die Schlafdauer und -qualität, da erholsamer Schlaf für die Erholung, das Hormongleichgewicht und die kognitive Funktion wesentlich ist.</li>
        <li><strong>Blutsauerstoffsättigung (SpO2):</strong> Regelmäßige Kontrollen, besonders während des Trainings oder Schlafs, helfen, eine ausreichende Sauerstoffversorgung zu gewährleisten und mögliche Atemprobleme zu erkennen.</li>
        <li><strong>EKG:</strong> Falls verfügbar, nutze ich diese Funktion für die Früherkennung von Arrhythmien oder anderen Herzanomalien.</li>
        <li><strong>Achtsamkeitsminuten:</strong> Die Verfolgung von Meditation und Atemübungen unterstützt mein Stressmanagement und meine mentale Resilienz.</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Integration von Ergebnissen für personalisierte Prävention</h3>
      <p className="mb-4">Durch die Kombination von regelmäßiger Labordiagnostik, tiefgehender Mikrobiomanalyse und kontinuierlicher digitaler Gesundheitsüberwachung erhalte ich ein multidimensionales Verständnis meiner Gesundheit. Dieser Ansatz ermöglicht es mir:</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>Frühe Warnsignale zu erkennen, bevor Symptome auftreten.</li>
        <li>Meine Ernährung, Nahrungsergänzung und Lebensstilinterventionen anzupassen (z.B. Anpassung der Ballaststoffaufnahme für die Mikrobiomgesundheit, Optimierung der Aminosäureversorgung für Muskel- und Immununterstützung oder gezielte Behandlung spezifischer Defizite mit orthomolekularen Nahrungsergänzungsmitteln).</li>
        <li>Die Wirksamkeit von Interventionen in Echtzeit zu überwachen und bei Bedarf anzupassen.</li>
      </ul>
      <p className="mb-4">Diese umfassende Diagnostik- und Überwachungsroutine bildet die Grundlage meiner Strategie zur Verlängerung sowohl der Lebensdauer als auch der Gesundheitsspanne und ermöglicht es mir, trotz meiner genetischen Veranlagungen und Familiengeschichte aktiv und gesund zu altern.</p>
    </>
  );
};

export default DiagnosticsSectionDe;
