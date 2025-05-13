import React from "react";
import { useTranslation } from 'react-i18next';

const ReferencesSection: React.FC = () => {
  // References updated to open in new tabs and with proper accessibility
  const { t } = useTranslation('longevity');
  const references = t('sections.references.list', { returnObjects: true }) as { id: string, title: string, author: string, url: string }[];

  // Defensive check
  const safeReferences = Array.isArray(references) ? references : [];

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-4" id="references">{t('sections.references.title')}</h2>
      <p className="mb-4">{t('sections.references.intro')}</p>
      
      <ol className="list-decimal pl-5 space-y-3">
        {safeReferences.map((ref, idx) => {
          // Split the title at the first colon or dash
          const match = ref.title.match(/^(.*?[:–-])\s*(.*)$/);
          let mainTitle = ref.title;
          let subtitle = '';
          if (match) {
            mainTitle = match[1];
            subtitle = match[2];
          }
          return (
            <li key={ref.id} className="text-sm">
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 hover:text-blue-900 underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Open external link: ${ref.title} by ${ref.author}`}
              >
                {mainTitle}
              </a>
              {subtitle
                ? (<><br /><span>{subtitle}</span>{ref.author && <><br /><span className="text-gray-800">- {ref.author}</span></>}</>)
                : (ref.author && <span className="text-gray-800"> - {ref.author}</span>)}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ReferencesSection;
