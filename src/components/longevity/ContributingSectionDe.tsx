
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

const ContributingSectionDe: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Mitwirken und Gemeinschaft aufbauen</h2>
      <p className="mb-4">
        Meine Reise zur Langlebigkeit ist ein kontinuierliches, sich entwickelndes Projekt, und ich glaube an die Kraft des kollektiven Wissens. Ich lade dich ein, deine eigenen Erkenntnisse, Erfahrungen und Feedback zu teilen.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Dein Wissen teilen</h3>
        <p className="mb-4">
          Hast du eigene Langlebigkeitsstrategien entdeckt, die für dich funktionieren? Vielleicht Forschungen gefunden, die hier nicht erwähnt wurden? Oder möchtest du einfach ein Feedback zu diesem Leitfaden geben? Teile deine Gedanken unten.
        </p>
        
        <Textarea 
          placeholder="Teile deine Erkenntnisse, Fragen oder Feedback zur Langlebigkeit..."
          className="mb-4 min-h-[150px]"
        />
        
        <div className="flex justify-end">
          <Button type="submit">
            Beitrag einreichen
          </Button>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Verbinde dich mit der Gemeinschaft</h3>
      <p className="mb-4">
        Die Reise zu einem längeren, gesünderen Leben ist am befriedigendsten, wenn sie mit anderen geteilt wird. Erwäge, dich mit Gleichgesinnten zu verbinden, die ebenfalls an Langlebigkeit, Gesundheitsoptimierung und präventiver Gesundheit interessiert sind.
      </p>
      
      <ul className="list-disc pl-8 space-y-2 mb-6">
        <li>Lokale Biohacking- und Langlebigkeits-Meetups</li>
        <li>Online-Foren und Social-Media-Gruppen zur Gesundheitsoptimierung</li>
        <li>Wissenschaftliche Konferenzen und Webinare zum Thema Langlebigkeit</li>
        <li>Gesundheits-Coaching-Programm mit Fokus auf Langlebigkeit</li>
      </ul>
      
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
        <p className="text-amber-800">
          <span className="font-bold">Haftungsausschluss:</span> Die auf dieser Seite geteilten Informationen dienen nur zu Bildungszwecken und sollten nicht als medizinischer Rat ausgelegt werden. Konsultiere immer einen qualifizierten Gesundheitsdienstleister, bevor du wesentliche Änderungen an deinem Gesundheitsprogramm vornimmst.
        </p>
      </div>
      
      <p className="italic text-gray-600">
        Danke, dass du dich auf dieser Reise zu einem längeren, gesünderen Leben mit mir verbunden hast. Die kontinuierliche Erforschung, das Lernen und der Austausch von Erkenntnissen sind der Schlüssel zur Verbesserung unserer kollektiven Gesundheit und Langlebigkeit.
      </p>
    </>
  );
};

export default ContributingSectionDe;
