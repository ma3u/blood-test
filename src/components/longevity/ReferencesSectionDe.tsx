
import React from "react";

const ReferencesSectionDe: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Referenzen</h2>
      <ul className="list-disc pl-8 space-y-2">
        <li>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5830305/" className="text-blue-600 hover:underline">
            Langlebigkeitsgenomik - Die Rolle der Genetik bei der Bestimmung der Lebensdauer (2018)
          </a>
        </li>
        <li>
          <a href="https://www.aarp.org/health/healthy-living/info-2018/extending-life-expectancy-fd.html" className="text-blue-600 hover:underline">
            AARP-Bericht: Langlebigkeitsfaktoren im modernen Leben
          </a>
        </li>
        <li>
          <a href="https://www.strunzundpartner.de" className="text-blue-600 hover:underline">
            Dr. Ulrich Strunz: Präventivmedizin und leistungsorientierte Gesundheit
          </a>
        </li>
        <li>
          <a href="https://time.com/6051632/live-to-100-longevity-diet/" className="text-blue-600 hover:underline">
            TIME-Artikel: Die Wissenschaft hinter der Langlebigkeitsdiät
          </a>
        </li>
      </ul>
    </>
  );
};

export default ReferencesSectionDe;
