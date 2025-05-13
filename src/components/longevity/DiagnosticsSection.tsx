
import React from "react";
import { useTranslation } from 'react-i18next';

const DiagnosticsSection: React.FC = () => {
  const { t } = useTranslation('longevity');
  const metrics = t('sections.diagnostics.digitalTracking.metrics', { returnObjects: true }) as string[];
  const integrationBenefits = t('sections.diagnostics.integration.benefits', { returnObjects: true }) as string[];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{t('sections.diagnostics.title')}</h2>
      <p className="mb-4">{t('sections.diagnostics.intro')}</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">{t('sections.diagnostics.labDiagnostics.title')}</h3>
      <p className="mb-4"><strong>{t('sections.diagnostics.labDiagnostics.bloodValues').split(':')[0]}:</strong> {t('sections.diagnostics.labDiagnostics.bloodValues').split(':').slice(1).join(':')}</p>
      <p className="mb-4"><strong>{t('sections.diagnostics.labDiagnostics.aminoAcids').split(':')[0]}:</strong> {t('sections.diagnostics.labDiagnostics.aminoAcids').split(':').slice(1).join(':')}</p>
      <p className="mb-4"><strong>{t('sections.diagnostics.labDiagnostics.micronutrients').split(':')[0]}:</strong> {t('sections.diagnostics.labDiagnostics.micronutrients').split(':').slice(1).join(':')}</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">{t('sections.diagnostics.microbiome.title')}</h3>
      <p className="mb-4"><strong>{t('sections.diagnostics.microbiome.sequencing').split(':')[0]}:</strong> {t('sections.diagnostics.microbiome.sequencing').split(':').slice(1).join(':')}</p>
      <p className="mb-4"><strong>{t('sections.diagnostics.microbiome.interpretation').split(':')[0]}:</strong> {t('sections.diagnostics.microbiome.interpretation').split(':').slice(1).join(':')}</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">{t('sections.diagnostics.digitalTracking.title')}</h3>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        {metrics.map((metric, idx) => (
          <li key={idx}>{metric}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">{t('sections.diagnostics.integration.title')}</h3>
      <p className="mb-4">{t('sections.diagnostics.integration.paragraph')}</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        {integrationBenefits.map((benefit, idx) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>
      <p className="mb-4">{t('sections.diagnostics.integration.conclusion')}</p>
    </section>
  );
};

export default DiagnosticsSection;
