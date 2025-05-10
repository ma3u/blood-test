
import React from "react";

const LongevityFactorsSectionDe: React.FC = () => {
  return (
    <>
      <h2 id="longevity-factors-title" className="text-2xl font-bold text-blue-800 mb-4">
        Faktoren, die Langlebigkeit und Gesundheitsspanne beeinflussen: Evidenzbasierter Überblick
      </h2>
      
      <p className="mb-4 text-gray-700">
        Die durchschnittliche Diskrepanz zwischen Lebensdauer und Gesundheitsspanne beträgt etwa 9 Jahre, wobei Menschen fast 20% des Lebens mit Morbidität verbringen. Die Behandlung modifizierbarer Faktoren (z.B. Rauchen, Ernährung) ist entscheidend, um diese Lücke zu schließen.
      </p>
      
      <p className="mb-6 text-gray-700">
        Nachfolgend finden Sie eine umfassende Analyse kritischer Faktoren, ihrer quantifizierten Auswirkungen und unterstützender Belege.
      </p>

      <h3 id="positive-factors" className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        Positive Faktoren zur Verbesserung von Langlebigkeit und Gesundheitsspanne
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Faktor</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Auswirkung</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Evidenz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Regelmäßige körperliche Aktivität</td>
              <td className="border border-gray-300 px-4 py-2">3-7 Jahre hinzugefügt</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.mdpi.com/1660-4601/20/4/3270" className="text-blue-600 hover:underline">MDPI Forschung zu körperlicher Aktivität und Langlebigkeit</a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Mediterrane Ernährung</td>
              <td className="border border-gray-300 px-4 py-2">3-6 Jahre hinzugefügt</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://pubmed.ncbi.nlm.nih.gov/35835225/" className="text-blue-600 hover:underline">PubMed-Studie zur Ernährungslanglebigkeit</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Soziale Verbindung</td>
              <td className="border border-gray-300 px-4 py-2">7 Jahre hinzugefügt</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.sciencedirect.com/science/article/pii/S0277953617305919" className="text-blue-600 hover:underline">Soziale Beziehungen und Sterblichkeit</a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Ausreichender Schlaf (7-8 Stunden)</td>
              <td className="border border-gray-300 px-4 py-2">2-5 Jahre hinzugefügt</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.nature.com/articles/s43587-023-00410-4" className="text-blue-600 hover:underline">Nature-Studie zu Schlaf und Langlebigkeit</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Kalorienreduktion & Intervall-Fasten</td>
              <td className="border border-gray-300 px-4 py-2">2-5 Jahre hinzugefügt</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5001368/" className="text-blue-600 hover:underline">Kalorische Restriktion bei Menschen</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="negative-factors" className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        Negative Faktoren, die Langlebigkeit und Gesundheitsspanne reduzieren
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Faktor</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Auswirkung</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Evidenz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Rauchen</td>
              <td className="border border-gray-300 px-4 py-2">10-15 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.nejm.org/doi/full/10.1056/nejmsa1211128" className="text-blue-600 hover:underline">New England Journal of Medicine</a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Sitzender Lebensstil</td>
              <td className="border border-gray-300 px-4 py-2">3-5 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://journals.lww.com/acsm-msse/Fulltext/2019/06000/Sitting_Time,_Physical_Activity,_and_Risk_of.25.aspx" className="text-blue-600 hover:underline">Sitzzeit und Mortalitätsrisiko</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Verarbeitete Lebensmittel & zugesetzter Zucker</td>
              <td className="border border-gray-300 px-4 py-2">7-10 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2809132" className="text-blue-600 hover:underline">JAMA Studie zu ultraverarbeiteten Lebensmitteln</a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Chronischer Stress</td>
              <td className="border border-gray-300 px-4 py-2">4-8 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0306453020301268" className="text-blue-600 hover:underline">Chronischer Stress und Telomerlänge</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Schlafmangel (&lt; 6 Stunden)</td>
              <td className="border border-gray-300 px-4 py-2">3-5 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0047637421002359" className="text-blue-600 hover:underline">Schlafqualität und epigenetische Alterung</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="combined-effects" className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        Quantifizierte kombinierte Effekte
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Kombinierte Faktoren</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Auswirkung</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Evidenz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Rauchen + Diabetes</td>
              <td className="border border-gray-300 px-4 py-2">16,2 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.nature.com/articles/s41591-024-03483-9" className="text-blue-600 hover:underline" aria-label="Nature Medicine Artikel zu kombinierten Lifestyle-Risikofaktoren lesen">Studie zu kombinierten Risikofaktoren</a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Inaktivität + Bluthochdruck</td>
              <td className="border border-gray-300 px-4 py-2">9,2 Jahre verloren</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7325954/" className="text-blue-600 hover:underline" aria-label="PMC-Artikel zu Lifestyle-Faktoren und Sterblichkeit bei älteren Erwachsenen lesen">Lifestyle-Faktoren bei älteren Erwachsenen</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Annahme von 8 gesunden Gewohnheiten bis zum Alter von 40</td>
              <td className="border border-gray-300 px-4 py-2">Fügt 23-24 Jahre hinzu</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://www.eurekalert.org/news-releases/1059853" className="text-blue-600 hover:underline" aria-label="Eurekalert-Artikel zu Lifestyle-Faktoren und biologischer Alterung lesen">Lifestyle & biologische Alterung</a>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Gesundheitsspanne-Lebensdauer-Lücke</td>
              <td className="border border-gray-300 px-4 py-2">~9 Jahre (20% des Lebens mit Morbidität)</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="https://nutritionsource.hsph.harvard.edu/healthy-longevity/" className="text-blue-600 hover:underline" aria-label="Harvard-Artikel zu gesunder Langlebigkeit lesen">Harvard Healthy Longevity Forschung</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LongevityFactorsSectionDe;
