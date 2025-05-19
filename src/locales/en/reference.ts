
const reference = {
  // General Reference Parameters
  general: [
    { param: "Ferritin ⭐", unit: "ng/ml", women: "premenopausal: 15–150\npostmenopausal: 15–300\noptimal: 70–200", men: "30–400\noptimal: 100–300", comment: "Iron storage protein; reflects total body iron stores" },
    { param: "TSH ⭐", unit: "mIU/l", women: "0.5–2.5 (optimal)", men: "0.5–2.5 (optimal)", comment: "Thyroid stimulating hormone" },
    { param: "Vitamin D (25-OH) ⭐", unit: "ng/ml", women: "50–70 (optimal)", men: "50–70 (optimal)", comment: "Essential for calcium absorption, bone health, immune function" },
    { param: "Vitamin B12 ⭐", unit: "pg/ml", women: ">600 (optimal 1000)", men: ">600 (optimal 1000)", comment: "Critical for nerve function, DNA synthesis" },
    { param: "Holo-transcobalamin", unit: "pmol/l", women: ">100", men: ">100", comment: "Active form of B12 that can be utilized by cells" },
    { param: "Folate (RBC) ⭐", unit: "ng/ml", women: ">16", men: ">16", comment: "Crucial for DNA synthesis, repair, and methylation" },
    { param: "Zinc ⭐", unit: "mg/l", women: "6–7", men: "6–7", comment: "Essential for immune function, protein synthesis" },
    { param: "Magnesium (whole blood) ⭐", unit: "mmol/l", women: "0.85–1.0", men: "0.85–1.0", comment: "Required for over 600 enzymatic reactions" },
    { param: "Selenium ⭐", unit: "µg/l", women: "140–160", men: "140–160", comment: "Antioxidant mineral essential for thyroid hormone metabolism" },
    { param: "Omega-3 Index ⭐", unit: "%", women: ">8", men: ">8", comment: "Measures EPA and DHA in red blood cell membranes" },
    { param: "Total protein", unit: "g/dl", women: ">7.0 (optimal 7.3–7.6)", men: ">7.0 (optimal 7.3–7.6)", comment: "Sum of all proteins in blood, primarily albumin and globulins" }
  ],

  // Amino Acids Reference Parameters
  amino: [
    { param: "Leucine", unit: "µmol/L", women: "110–217 (Target: upper half)", men: "110–217 (Target: upper half)", comment: "BCAA, essential for muscle protein synthesis" },
    { param: "Isoleucine", unit: "µmol/L", women: "58–117 (Target: upper half)", men: "58–117 (Target: upper half)", comment: "BCAA, supports glucose uptake in muscle" },
    { param: "Valine", unit: "µmol/L", women: "206–317 (Target: upper half)", men: "206–317 (Target: upper half)", comment: "BCAA, supports nitrogen balance and immune system" },
    { param: "Methionine", unit: "µmol/L", women: "25–40 (Target: upper half)", men: "25–40 (Target: upper half)", comment: "Sulfur-containing amino acid for methylation processes" },
    { param: "Lysine", unit: "µmol/L", women: "139–240 (Target: upper half)", men: "139–240 (Target: upper half)", comment: "Required for collagen formation, immune function" },
    { param: "Phenylalanine", unit: "µmol/L", women: "51–109 (Target: upper half)", men: "51–109 (Target: upper half)", comment: "Precursor to tyrosine, dopamine, other neurotransmitters" },
    { param: "Tryptophan", unit: "µmol/L", women: "36–125 (Target: upper half)", men: "36–125 (Target: upper half)", comment: "Precursor to serotonin and melatonin, mood regulation" },
    { param: "Threonine", unit: "µmol/L", women: "118–210 (Target: upper half)", men: "118–210 (Target: upper half)", comment: "Important for collagen, elastin, and antibody production" },
    { param: "Histidine", unit: "µmol/L", women: "60–110 (Target: upper half)", men: "60–110 (Target: upper half)", comment: "Component of hemoglobin, myelin sheath maintenance" },
    { param: "Arginine", unit: "µmol/L", women: "110–180 (Target: upper half)", men: "110–180 (Target: upper half)", comment: "Precursor to nitric oxide, improves vascular function" },
    { param: "Glutamine", unit: "µmol/L", women: "500–900 (Target: upper half)", men: "500–900 (Target: upper half)", comment: "Primary fuel for gut and immune cells" }
  ],

  // Special Vitamins Reference Parameters
  vitamins: [
    { param: "Vitamin A (Retinol)", unit: "µg/L", women: "700–900 (optimal: 800)", men: "700–900 (optimal: 800)", comment: "Essential for vision, immune function, cellular differentiation" },
    { param: "Vitamin B1 (Thiamine, active)", unit: "µg/L", women: "39.8–60 (Target: 60)", men: "39.8–60 (Target: 60)", comment: "Important for carbohydrate metabolism and nerve function" },
    { param: "Vitamin B2 (Riboflavin, active)", unit: "µg/L", women: "85–300 (Target: 250)", men: "85–300 (Target: 250)", comment: "Involved in energy production and antioxidant function" },
    { param: "Vitamin B6 (P5P, active)", unit: "µg/L", women: "10.1–36 (Target: 36)", men: "10.1–36 (Target: 36)", comment: "Essential for amino acid metabolism and neurotransmitter synthesis" },
    { param: "Vitamin B9 (Folate, active)", unit: "µg/L", women: "100–270 (Target: 160)", men: "100–270 (Target: 160)", comment: "Important for DNA synthesis, repair, and methylation" },
    { param: "Vitamin B12 (active, Holo-TC)", unit: "pmol/L", women: ">100 (Target: 100–150)", men: ">100 (Target: 100–150)", comment: "Essential for nerve function, DNA synthesis, and methylation" },
    { param: "Vitamin C", unit: "mg/L", women: "10–20 (Target: 10–20, up to 100 possible)", men: "10–20 (Target: 10–20, up to 100 possible)", comment: "Strong antioxidant, essential for collagen synthesis" },
    { param: "Vitamin E", unit: "mg/L", women: "16–25 (Target: 16–25)", men: "16–25 (Target: 16–25)", comment: "Protects cell membranes from oxidative damage" },
    { param: "Vitamin K2 (MK-7)", unit: "ng/L", women: "1000–6000 (Target: >1000)", men: "1000–6000 (Target: >1000)", comment: "Essential for calcium regulation and cardiovascular health" }
  ],

  // Inflammation Markers Reference Parameters
  inflammation: [
    { param: "CRP (C-reactive protein, hsCRP)", unit: "mg/L", women: "<1.0 (optimal: <0.8)", men: "<1.0 (optimal: <0.8)", comment: "Sensitive marker for systemic inflammation" },
    { param: "BDNF (Brain-derived neurotrophic factor)", unit: "ng/ml", women: "30–40 (Target)", men: "30–40 (Target)", comment: "Protein supporting neuronal growth and neuroplasticity" },
    { param: "AGEs (Advanced glycation endproducts)", unit: "µg/ml", women: "<50 (lower is better)", men: "<50 (lower is better)", comment: "Compounds associated with aging and tissue damage" },
    { param: "Nitrotyrosine", unit: "nmol/L", women: "<200 (Target)", men: "<200 (Target)", comment: "Marker for protein oxidation and nitrosative stress" },
    { param: "Zonulin (Leaky gut marker)", unit: "ng/ml", women: "<30 (lower is better)", men: "<30 (lower is better)", comment: "Indicates intestinal permeability" }
  ],
  
  // Hematology Reference Parameters
  hematology: [
    { param: "Hemoglobin ✓ ⭐", unit: "g/dL", women: "12.0-15.5", men: "13.5-17.5", comment: "Oxygen-carrying protein in red blood cells" },
    { param: "Hematocrit ✓", unit: "%", women: "36-46", men: "41-53", comment: "Percentage of blood volume occupied by red blood cells" },
    { param: "Red Blood Cells (RBC) ✓", unit: "10^6/µL", women: "4.0-5.2", men: "4.5-5.9", comment: "Cells responsible for oxygen transport" },
    { param: "Mean Corpuscular Volume (MCV) ✓ ⭐", unit: "fL", women: "80-100", men: "80-100", comment: "Average size of red blood cells" },
    { param: "Mean Corpuscular Hemoglobin (MCH) ✓", unit: "pg", women: "27-33", men: "27-33", comment: "Average hemoglobin amount per RBC" },
    { param: "Mean Corpuscular Hemoglobin Concentration (MCHC) ✓", unit: "g/dL", women: "32-36", men: "32-36", comment: "Average hemoglobin concentration in RBCs" },
    { param: "Red Cell Distribution Width (RDW) ✓ ⭐", unit: "%", women: "11.5-14.5", men: "11.5-14.5", comment: "Variation in red blood cell size" },
    { param: "White Blood Cells (WBC) ✓ ⭐", unit: "10^3/µL", women: "4.0-11.0", men: "4.0-11.0", comment: "Immune system cells that fight infections" },
    { param: "Neutrophils ✓", unit: "%", women: "40-60", men: "40-60", comment: "First responders to bacterial infections" },
    { param: "Lymphocytes ✓ ⭐", unit: "%", women: "20-40", men: "20-40", comment: "T cells and B cells of adaptive immunity" },
    { param: "Monocytes ✓", unit: "%", women: "2-8", men: "2-8", comment: "Phagocytic cells that become macrophages" },
    { param: "Eosinophils ✓", unit: "%", women: "1-4", men: "1-4", comment: "Respond to parasites and allergies" },
    { param: "Basophils ✓", unit: "%", women: "0.5-1", men: "0.5-1", comment: "Release histamine in allergic reactions" },
    { param: "Platelets ✓ ⭐", unit: "10^3/µL", women: "150-450", men: "150-450", comment: "Blood cells for clotting" },
    { param: "Mean Platelet Volume (MPV) ✓", unit: "fL", women: "7.5-11.5", men: "7.5-11.5", comment: "Average size of platelets" }
  ],
  
  // Hormones Reference Parameters
  hormones: [
    { param: "DHEA-S ⭐", unit: "µg/dl", women: "35.4–256 (age-dependent, optimal upper third)", men: "44.3–331 (age-dependent, optimal upper third)", comment: "Most abundant steroid hormone in the body" },
    { param: "Total Testosterone", unit: "ng/ml", women: "under 50: 0.5–2\nover 50: 0.4–2", men: "3.0–9.0", comment: "Target: upper range" },
    { param: "Free Testosterone ⭐", unit: "pg/ml", women: "2–4", men: "8–30 (age-dependent)", comment: "Biologically active form, important for metabolic health" },
    { param: "Estradiol (E2) ⭐", unit: "pg/ml", women: "Follicular phase: 12–170\nOvulation: 100–500\nLuteal phase: 40–200\nPostmenopause: up to 40", men: "up to 40\noptimal: 20–25", comment: "Important for bone density and cardiovascular health" },
    { param: "Progesterone", unit: "ng/ml", women: "2nd half of cycle: >10\nHRT: 2–6", men: "1–2", comment: "Balances estrogen effects, important for sleep and mood" },
    { param: "SHBG ⭐", unit: "nmol/l", women: "30–130", men: "20–75", comment: "Regulates bioavailability of sex hormones" },
    { param: "Cortisol (morning)", unit: "µg/dl", women: "16–18", men: "17–18", comment: "Primary stress hormone with diurnal rhythm" },
    { param: "FSH", unit: "mIU/ml", women: "Follicular phase: 3–15\nOvulation: 4–23\nLuteal phase: 1.5–9\nPostmenopause: up to 100", men: "up to 10", comment: "On HRT: 40–60" },
    { param: "LH", unit: "mIU/ml", women: "Follicular phase: 2.5–13\nOvulation: 9–70\nLuteal phase: 1–13\nPostmenopause: 16–55", men: "1.5–10", comment: "FSH/LH ratio 2:1" },
    { param: "HbA1c ⭐", unit: "%", women: "<5.6", men: "<5.6", comment: "<5.7" }
  ],

  // Notes and additional text
  notes: {
    title: "Instructions for use:",
    note1: "These values are based on the latest epigenetic and macromolecular research from orthomolecular medicine experts.",
    note2: "For individual interpretation, always consider personal history and clinical context.",
    note3: "For hormones, consider cycle phase, age, and possible hormone therapy, especially for women.",
    note4: "Amino acids: For optimal health, each amino acid should be in the upper half of the reference range; values are based on healthy, high-performing individuals.",
    note5: "Special vitamins: Target values are often higher than standard reference ranges to support prevention and optimal function.",
    note6: "Inflammation markers: Lower values are generally better; chronic low-grade inflammation is a risk factor for many diseases.",
    indicators: "Indicators: ✓ Tests paid by public health insurance, ⭐ Tests highly recommended by experts",
    sources: "Sources: Nutrient Therapy - The Practice Guide, Dr. Helena Orfanos-Boeckel (2023); The Blood Value Code, Thiemo Osterhaus (2023); Nutrient Therapy, Dr. Helena Orfanos-Boeckel (2022), Dr. Ulrich Strunz, \"The Amino Revolution\" (2022)"
  }
};

export default reference;
