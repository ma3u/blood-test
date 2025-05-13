
import React from "react";
import { useTranslation } from 'react-i18next';

const HabitsSection: React.FC = () => {
  const { t } = useTranslation('longevity');
  const title = t('sections.habits.title');
  const sectionsData = t('sections.habits.sections', { returnObjects: true });
  
  // Ensure we have an array to map over
  const sections = Array.isArray(sectionsData) ? sectionsData : [];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{title}</h2>
      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">{section.heading}</h3>
          {Array.isArray(section.paragraphs) && section.paragraphs.map((para, pidx) => (
            <p className="mb-4" key={pidx}>{para}</p>
          ))}
          {Array.isArray(section.list) && section.list.length > 0 && (
            <ul className="list-disc pl-8 space-y-2 mb-4">
              {section.list.map((item, lidx) => (
                <li key={lidx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default HabitsSection;
