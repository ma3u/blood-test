
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const DiagnosticsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Proactive Diagnostics and Self-Monitoring</h2>
      <p className="mb-4">To ensure a holistic and proactive approach to my health and longevity, I have established a routine of regular diagnostic checks and continuous self-monitoring. This comprehensive strategy includes laboratory analysis, advanced molecular diagnostics, and digital health tracking, all aimed at early detection of risk factors and optimization of my healthspan.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Regular Laboratory Diagnostics</h3>
      <p className="mb-4"><strong>Blood Values:</strong> I routinely monitor standard blood markers such as cholesterol (total, LDL, HDL, triglycerides), fasting glucose, HbA1c, liver and kidney function, inflammatory markers (hs-CRP), vitamin D, magnesium, zinc, and homocysteine. These values provide insights into my metabolic health, cardiovascular risk, and micronutrient status.</p>
      <p className="mb-4"><strong>Amino Acid Profile:</strong> Periodically, I assess my amino acid spectrum to detect deficiencies or imbalances. Essential and conditionally essential amino acids such as tryptophan, lysine, methionine, leucine, isoleucine, valine, glutamine, and glycine are particularly important for muscle maintenance, immune function, and neurotransmitter balance.</p>
      <p className="mb-4"><strong>Micronutrient Status:</strong> Supplementary checks for vitamins (C, E, B-complex, coenzyme Q10, alpha-lipoic acid) and minerals (chromium, magnesium) help identify subclinical deficiencies that may affect aging, immunity, and energy metabolism.</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Microbiome Analysis</h3>
      <p className="mb-4"><strong>Gut Microbiome Sequencing:</strong> I perform periodic stool-based microbiome analyses to assess the diversity and balance of my gut flora. This includes quantifying beneficial genera (e.g., Bifidobacterium, Akkermansia), evaluating the presence of short-chain fatty acid producers, and screening for dysbiosis or overgrowth of pathogenic species.</p>
      <p className="mb-4"><strong>Interpretation and Action:</strong> Insights from microbiome testing guide my dietary choices, especially fiber and prebiotic intake, and help me personalize my probiotic supplementation. A healthy, diverse microbiome is now recognized as a critical pillar for metabolic health, immune regulation, and even mental well-being.</p>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Digital Fitness and Health Tracking (Apple Health & Devices)</h3>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>VO2Max:</strong> I track my VO2Max as a marker of aerobic fitness and cardiovascular health. Improvements here are linked to lower all-cause mortality and enhanced healthspan.</li>
        <li><strong>Resting Heart Rate and Heart Rate Variability (HRV):</strong> Both are monitored continuously; a lower resting heart rate and higher HRV are signs of good cardiovascular and autonomic health.</li>
        <li><strong>Blood Pressure:</strong> Regular readings help me detect early hypertension and assess the impact of lifestyle changes.</li>
        <li><strong>Body Composition:</strong> Weight, BMI, body fat percentage, and waist circumference are tracked to monitor metabolic health and prevent obesity-related risks.</li>
        <li><strong>Activity Metrics:</strong> Steps per day, active energy expenditure, exercise minutes, and workout types (endurance, strength, HIIT) are all logged to ensure I meet recommended activity levels.</li>
        <li><strong>Sleep Tracking:</strong> I monitor sleep duration and quality, as restorative sleep is essential for recovery, hormonal balance, and cognitive function.</li>
        <li><strong>Blood Oxygen Saturation (SpO2):</strong> Periodic checks, especially during exercise or sleep, help ensure adequate oxygenation and detect potential respiratory issues.</li>
        <li><strong>ECG/EKG:</strong> If available, I use this feature for early detection of arrhythmias or other cardiac abnormalities.</li>
        <li><strong>Mindfulness Minutes:</strong> Tracking meditation and breathing exercises supports my stress management and mental resilience.</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Integrating Results for Personalized Prevention</h3>
      <p className="mb-4">By combining regular laboratory diagnostics, in-depth microbiome analysis, and continuous digital health tracking, I gain a multidimensional understanding of my health. This approach enables me to:</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li>Detect early warning signs before symptoms arise.</li>
        <li>Tailor my nutrition, supplementation, and lifestyle interventions (e.g., adjusting fiber intake for microbiome health, optimizing amino acid supply for muscle and immune support, or targeting specific deficiencies with orthomolecular supplements).</li>
        <li>Monitor the effectiveness of interventions in real time and adjust as needed.</li>
      </ul>
      <p className="mb-4">This comprehensive diagnostic and monitoring routine forms the foundation of my strategy to extend both lifespan and healthspan, allowing me to age actively and healthily, despite my genetic predispositions and family history.</p>
    </section>
  );
};

export default DiagnosticsSection;
