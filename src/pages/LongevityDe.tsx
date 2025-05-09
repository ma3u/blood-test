import React from "react";
import SEOHead from "@/components/SEOHead";

const LongevityDe = () => (
  <div className="min-h-screen bg-[#FAF6E2]">
    <SEOHead 
      title="Meine persönliche Reise zu Langlebigkeit und Gesundheitsspanne"
      description="Ein umfassender, evidenzbasierter Leitfaden zu Diagnostik, Gewohnheiten und Routinen für maximale Lebensdauer und Gesundheit."
    />
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6">
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
            alt="Blood Test Oracle Logo" 
            className="w-48 h-48 md:w-56 md:h-56 object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Meine persönliche Reise zu Langlebigkeit und Gesundheitsspanne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            [Hier folgt die vollständige deutsche Übersetzung des Longevity-Inhalts.]
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
        <nav className="mb-8" aria-label="Seitenabschnitte">
          <ul className="flex flex-wrap gap-4 text-sm">
            <li><a href="#diagnostics" className="text-blue-600 hover:underline">Diagnostik & Selbstüberwachung</a></li>
            <li><a href="#habits" className="text-blue-600 hover:underline">Gewohnheiten</a></li>
            <li><a href="#practical-examples" className="text-blue-600 hover:underline">Praktische Beispiele</a></li>
            <li><a href="#references" className="text-blue-600 hover:underline">Referenzen</a></li>
          </ul>
        </nav>
        <section id="diagnostics">
          <h2 className="text-2xl font-bold mb-4">Proaktive Diagnostik und Selbstüberwachung: Mein ganzheitlicher Ansatz</h2>
          <p>
            [Diagnostik-Abschnitt auf Deutsch einfügen.]
          </p>
        </section>
        <hr className="my-8" />
        <section id="habits">
          <h2 className="text-2xl font-bold mb-4">Handeln: Aufbau meiner neuen Gewohnheiten</h2>
          <p>
            Handeln für Langlebigkeit bedeutet, positive Lebensstiländerungen konsequent umzusetzen – Ernährung, Bewegung, Stressmanagement, Darmgesundheit und soziale Bindung – basierend auf den besten verfügbaren wissenschaftlichen Erkenntnissen. Mein persönlicher Weg zeigt, wie sich durch diese Gewohnheiten messbare Verbesserungen in Gesundheit und Wohlbefinden erzielen lassen.
          </p>
        </section>
        <hr className="my-8" />
        <section id="practical-examples">
          <h2 className="text-2xl font-bold mb-4">Praktische Beispiele für Langlebigkeit und Gesundheitsspanne: Ernährung, Bewegung und Mind-Body-Praktiken</h2>
          <ul className="list-disc pl-6">
            <li><b>Ernährung:</b> Low-Carb/ketogene Ernährung, Intervallfasten, mediterrane Ernährung und pflanzenbasierte Kost. Fokus auf vollwertige Lebensmittel, gesunde Fette und Minimierung von verarbeitetem Zucker.</li>
            <li><b>Bewegung:</b> Mischung aus Ausdauer (aerob), Krafttraining, HIIT und täglicher Bewegung. Konsistenz ist entscheidend.</li>
            <li><b>Mind-Body-Praktiken:</b> Meditation, Yoga, Achtsamkeit und Dankbarkeitsübungen zur Stressbewältigung und Unterstützung der psychischen Gesundheit.</li>
            <li><b>Soziale Verbindung:</b> Starke Beziehungen und Gemeinschaftspflege, die mit einer längeren Gesundheitsspanne verbunden sind.</li>
          </ul>
        </section>
        <hr className="my-8" />
        <section id="references">
          <h2 className="text-2xl font-bold mb-4">Referenzen</h2>
          <ul className="list-disc pl-6 text-xs">
            <li><a href="https://gh.bmj.com/content/6/3/e004124" target="_blank" rel="noopener noreferrer">Global Health: Longevity and Healthspan (BMJ)</a></li>
            <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8294064/" target="_blank" rel="noopener noreferrer">Physical Activity and Healthspan (PMC)</a></li>
            <li><a href="https://www.nature.com/articles/s41598-024-83802-9" target="_blank" rel="noopener noreferrer">Nature: Longevity and Exercise</a></li>
            <li><a href="https://www.insidetracker.com/a/articles/how-intermittent-fasting-impacts-longevity" target="_blank" rel="noopener noreferrer">Intermittent Fasting and Longevity (InsideTracker)</a></li>
            <li><a href="https://www.utsouthwestern.edu/newsroom/articles/year-2022/active-phase-calorie-restriction.html" target="_blank" rel="noopener noreferrer">Active Phase Calorie Restriction Study (UT Southwestern)</a></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default LongevityDe;
