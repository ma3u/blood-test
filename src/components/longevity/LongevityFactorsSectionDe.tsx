
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LongevityFactorsSectionDe: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Langlebigkeitsfaktoren: Die Wissenschaft hinter einem längeren, gesünderen Leben</h2>
      <p className="mb-4">
        Die Wissenschaft der Langlebigkeit hat mehrere Schlüsselfaktoren identifiziert, die unsere Lebensdauer und Gesundheitsspanne beeinflussen. Basierend auf meiner kontinuierlichen Recherche habe ich diese Faktoren nach ihrer evidenzbasierten Wirkung auf die Langlebigkeit und die Gesundheitsspanne kategorisiert.
      </p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Positive Faktoren für die Langlebigkeit</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Faktor</TableHead>
            <TableHead className="w-1/3">Auswirkung auf die Langlebigkeit</TableHead>
            <TableHead className="w-1/3">Auswirkung auf die Gesundheitsspanne</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Kalorienrestriktion (15-25%)</TableCell>
            <TableCell>Stark positiv - Verlängert die Lebensdauer in zahlreichen Studien mit verschiedenen Organismen</TableCell>
            <TableCell>Stark positiv - Verbessert die Stoffwechselgesundheit, reduziert Entzündungen und altersbezogene Krankheiten</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Regelmäßige körperliche Aktivität</TableCell>
            <TableCell>Stark positiv - 20-30% Reduktion der Gesamtmortalität</TableCell>
            <TableCell>Stark positiv - Verbessert praktisch jeden biomedizinischen Marker und die funktionelle Unabhängigkeit</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Mediterrane Ernährung</TableCell>
            <TableCell>Moderat positiv - 10-15% Reduktion der Gesamtmortalität</TableCell>
            <TableCell>Stark positiv - Reduziert das Risiko für Herz-Kreislauf-Erkrankungen, Krebs und neurodegenerative Erkrankungen</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Soziale Verbindungen</TableCell>
            <TableCell>Stark positiv - 50% erhöhte Wahrscheinlichkeit des Überlebens bei starken sozialen Beziehungen</TableCell>
            <TableCell>Moderat positiv - Verbesserte psychische Gesundheit, Stressresilienz und Krankheitserholung</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ausreichender Schlaf (7-8 Stunden)</TableCell>
            <TableCell>Moderat positiv - Optimale Schlafdauer mit der niedrigsten Mortalität verbunden</TableCell>
            <TableCell>Stark positiv - Kritisch für die kognitive Funktion, das Immunsystem und die metabolische Gesundheit</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Negative Faktoren für die Langlebigkeit</h3>
      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Faktor</TableHead>
            <TableHead className="w-1/3">Auswirkung auf die Langlebigkeit</TableHead>
            <TableHead className="w-1/3">Auswirkung auf die Gesundheitsspanne</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Rauchen</TableCell>
            <TableCell>Stark negativ - Reduziert die Lebensdauer um 10+ Jahre</TableCell>
            <TableCell>Stark negativ - Erhöht das Risiko für zahlreiche chronische Erkrankungen und beschleunigt die Alterung</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sitzender Lebensstil</TableCell>
            <TableCell>Moderat negativ - Mit 20-30% erhöhter Mortalität verbunden</TableCell>
            <TableCell>Stark negativ - Trägt zu Stoffwechselstörungen, Herz-Kreislauf-Erkrankungen und einem Rückgang der körperlichen Funktion bei</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Chronischer Stress</TableCell>
            <TableCell>Leicht bis moderat negativ - Verkürzung der Telomere und erhöhte Entzündungswerte mit verkürzter Lebensdauer verbunden</TableCell>
            <TableCell>Stark negativ - Beeinträchtigt das Immunsystem, die kardiovaskuläre Gesundheit und die kognitive Funktion</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ultraverarbeitete Lebensmittel</TableCell>
            <TableCell>Moderat negativ - 14% erhöhtes Risiko für Gesamtmortalität pro 10% Erhöhung des Konsums</TableCell>
            <TableCell>Moderat negativ - Mit Übergewicht, Insulinresistenz und systemischen Entzündungen verbunden</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Schlafmangel ({'<'}6 oder {'>'}9 Stunden)</TableCell>
            <TableCell>Leicht bis moderat negativ - J-förmiger Zusammenhang zwischen Schlafdauer und Mortalität</TableCell>
            <TableCell>Moderat negativ - Beeinträchtigte kognitive Funktion, Stoffwechselgesundheit und Immunität</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Kombinierte Effekte und Synergien</h3>
      <p className="mb-4">
        Die kumulative Wirkung von Lifestyle-Faktoren auf die Langlebigkeit kann dramatisch sein. Studien deuten darauf hin, dass die kombinierte Wirkung mehrerer positiver Gewohnheiten stärker sein kann als ihre einfache Summe.
      </p>
      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead>Lebensstilkombination</TableHead>
            <TableHead>Geschätzte Auswirkung auf die Lebensdauer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Nichtrauchen + Gesunde Ernährung + Regelmäßige Bewegung + Moderater Alkoholkonsum</TableCell>
            <TableCell>+10-14 Jahre verlängerte Lebensdauer im Vergleich zu keinem dieser Faktoren</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Mediterrane Ernährung + Tägliche Bewegung + Ausreichender Schlaf</TableCell>
            <TableCell>50-70% reduziertes Risiko für die häufigsten altersbedingten Krankheiten</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gesundes Gewicht + Blutdruckkontrolle + Regelmäßige soziale Interaktionen</TableCell>
            <TableCell>30-40% reduziertes Risiko für Demenz und kognitive Beeinträchtigungen</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <p className="mb-4">
        Das Verständnis dieser Faktoren hat einen profunden Einfluss auf meine persönlichen Gesundheitsentscheidungen gehabt, und ich optimiere kontinuierlich meine Gewohnheiten basierend auf den neuesten wissenschaftlichen Erkenntnissen. Die gute Nachricht ist, dass selbst kleine, schrittweise Veränderungen in diesen Bereichen kumulativ ein signifikantes Potenzial haben, sowohl die Lebensdauer als auch die Gesundheitsspanne zu verlängern.
      </p>
    </>
  );
};

export default LongevityFactorsSectionDe;
