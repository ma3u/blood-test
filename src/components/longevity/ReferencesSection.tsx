import React from "react";
import { useTranslation } from 'react-i18next';

const ReferencesSection: React.FC = () => {
  // References updated to open in new tabs and with proper accessibility
  const { t } = useTranslation('longevity');
  const references = t('sections.references.list', { returnObjects: true });

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-4" id="references">{t('sections.references.title')}</h2>
      <p className="mb-4">{t('sections.references.intro')}</p>
      
      <div className="space-y-4">
        {references.map(ref => (
          <div key={ref.id} className="p-3 bg-gray-50 rounded-md">
            <p className="font-medium">{ref.title}</p>
            <p className="text-sm text-gray-600 mb-2">{ref.author}</p>
            <a 
              href={ref.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
              aria-label={`Read ${ref.title} by ${ref.author} (opens in new tab)`}
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferencesSection;
