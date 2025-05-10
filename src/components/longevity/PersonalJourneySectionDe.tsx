
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";

const PersonalJourneySectionDe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Meine persönliche Reise</h2>
      <p className="mb-4">In meiner Kindheit habe ich miterlebt, wie meine Eltern mit schwerwiegenden gesundheitlichen Problemen zu kämpfen hatten – Probleme, die größtenteils das Ergebnis ungesunder Gewohnheiten waren: Rauchen, schlechte Ernährung, Mangel an körperlicher Aktivität und chronischer Stress. Ihre Erfahrungen wurden für mich zu einer eindringlichen Warnung. Ich habe aus erster Hand gesehen, wie Rauchen, körperliche Inaktivität und schlechte Ernährung zu verlorenen Jahren sowohl bei der Lebensdauer als auch bei der Gesundheitsspanne führen können, und mir wurde klar, dass ich nicht denselben Weg einschlagen wollte.</p>
      <p className="mb-4">Vor einigen Jahren erlebte ich meinen eigenen gesundheitlichen Weckruf. Meine Cholesterinwerte waren hoch, und ich stand am Rande des Übergewichts. Die Zahlen waren eindeutig: Wenn ich nichts änderte, könnte ich auf dasselbe Schicksal wie meine Eltern zusteuern. Aber Forschungen zeigen, dass die Genetik weniger als 2% des Mortalitätsrisikos ausmacht, während etwa 17% durch veränderbare Lebensstil- und Umweltfaktoren geprägt werden. Das bedeutete, dass meine Zukunft größtenteils in meinen eigenen Händen lag.</p>
    </section>
  );
};

export default PersonalJourneySectionDe;
