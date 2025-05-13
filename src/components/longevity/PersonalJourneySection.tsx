
import React from "react";
import { useTranslation } from 'react-i18next';
import { Separator } from "@/components/ui/separator";

const PersonalJourneySection: React.FC = () => {
  const { t } = useTranslation('longevity');
  // Defensive: get paragraphs as array, fallback to single string if needed
  let paragraphs: string[] = [];
  const paraResult = t('sections.personalJourney.paragraphs', { returnObjects: true });
  if (Array.isArray(paraResult)) {
    paragraphs = paraResult.filter((p): p is string => typeof p === 'string');
  } else if (typeof paraResult === 'string') {
    paragraphs = [paraResult];
  } else {
    // fallback: try indexed keys
    let idx = 0;
    let para;
    while ((para = t(`sections.personalJourney.paragraphs.${idx}`)) && typeof para === 'string' && para !== `sections.personalJourney.paragraphs.${idx}`) {
      paragraphs.push(para);
      idx++;
    }
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{t('sections.personalJourney.title')}</h2>
      {paragraphs.map((p, idx) => {
        // Defensive: if p still looks like a translation key, skip rendering
        if (/^[a-zA-Z0-9_]+$/.test(p) && !p.includes(' ')) return null;
        const referenceList = t('sections.references.list', { returnObjects: true }) as { id: string, title: string, author: string, url: string }[];
        let processed = p;
        processed = processed.replace(/\[(\d+)\]/g, (match, num) => {
          const ref = referenceList.find(r => r.id === num);
          if (ref) {
            return `<a href='${ref.url}' target='_blank' rel='noopener noreferrer' class='text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-400'>[${num}]</a>`;
          }
          return match;
        });
        return (
          <p key={idx} className="mb-4" dangerouslySetInnerHTML={{ __html: processed }} />
        );
      })}
    </section>
  );
};

export default PersonalJourneySection;
