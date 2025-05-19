
const reference = {
  // Reference values dialog
  "reference.title": "Referenzwerte",
  "reference.description": "Basierend auf den Empfehlungen von Dr. Ulrich Strunz und Dr. med. Helena Orfanos-Boeckel",
  "reference.general": "Allgemeine Parameter",
  "reference.amino": "Aminosäuren",
  "reference.vitamins": "Spezielle Vitamine",
  "reference.inflammation": "Entzündungsmarker",
  "reference.hematology": "Hämatologie",
  "reference.hormones": "Hormone",
  "reference.caption.general": "Referenzwerte für Allgemeine Parameter",
  "reference.caption.amino": "Referenzwerte für Aminosäuren (Aminogramm, Serum/Plasma)",
  "reference.caption.vitamins": "Referenzwerte für Spezielle Vitamine",
  "reference.caption.inflammation": "Referenzwerte für Entzündungsmarker",
  "reference.caption.hematology": "Referenzwerte für Hämatologie",
  "reference.caption.hormones": "Referenzwerte für Hormone",
  "reference.column.parameter": "Parameter",
  "reference.column.unit": "Einheit",
  "reference.column.women": "Frauen (Referenz/Ziel)",
  "reference.column.men": "Männer (Referenz/Ziel)",
  "reference.column.comment": "Kommentar",
  "reference.notes.title": "Hinweise zur Verwendung:",
  "reference.notes.1": "Diese Werte basieren auf dem neuesten Stand der epigenetischen und makromolekularen Forschung aus der orthomolekularen Medizin.",
  "reference.notes.2": "Berücksichtigen Sie für die individuelle Interpretation immer die persönliche Vorgeschichte und den klinischen Kontext.",
  "reference.notes.3": "Bei Hormonen berücksichtigen Sie Zyklusphase, Alter und mögliche Hormontherapie, besonders bei Frauen.",
  "reference.notes.4": "Aminosäuren: Für optimale Gesundheit sollte jede Aminosäure in der oberen Hälfte des Referenzbereichs liegen; Werte basieren auf gesunden, leistungsstarken Individuen.",
  "reference.notes.5": "Spezielle Vitamine: Zielwerte liegen oft höher als Standard-Referenzbereiche, um Prävention und optimale Funktion zu unterstützen.",
  "reference.notes.6": "Entzündungsmarker: Niedrigere Werte sind generell besser; chronische niedriggradige Entzündungen sind ein Risikofaktor für viele Krankheiten.",
  "reference.notes.indicators": "Indikatoren: ✓ Tests werden von der gesetzlichen Krankenversicherung bezahlt, ⭐ Tests werden von Experten besonders empfohlen",
  "reference.sources": "Quellen: Nährstoff-Therapie – Der Praxisleitfaden, Dr. med. Helena Orfanos-Boeckel (2023); Der Blutwerte-Code, Thiemo Osterhaus (2023); Nährstoff-Therapie, Dr. med. Helena Orfanos-Boeckel (2022), Dr. Ulrich Strunz, \"Die Amino-Revolution\" (2022)",
  "gender.male": "Männlich",
  "gender.female": "Weiblich",

  // German table data
  "general": [
    { param: "Ferritin ⭐", unit: "ng/ml", women: "prämenopausal: 15–150\npostmenopausal: 15–300\noptimal: 70–200", men: "30–400\noptimal: 100–300", comment: "Eisenspeicherprotein; spiegelt Gesamtkörper-Eisenspeicher wider" },
    { param: "TSH ⭐", unit: "mIU/l", women: "0,5–2,5 (optimal)", men: "0,5–2,5 (optimal)", comment: "Schilddrüsenstimulierendes Hormon" },
    { param: "Vitamin D (25-OH) ⭐", unit: "ng/ml", women: "50–70 (optimal)", men: "50–70 (optimal)", comment: "Essentiell für Kalziumaufnahme, Knochengesundheit, Immunfunktion" },
    { param: "Vitamin B12 ⭐", unit: "pg/ml", women: ">600 (optimal 1000)", men: ">600 (optimal 1000)", comment: "Wichtig für Nervenfunktion, DNA-Synthese" },
    { param: "Holo-transcobalamin", unit: "pmol/l", women: ">100", men: ">100", comment: "Aktive Form von B12, die von Zellen genutzt werden kann" },
    { param: "Folsäure ⭐", unit: "ng/ml", women: ">16", men: ">16", comment: "Entscheidend für DNA-Synthese, -Reparatur und Methylierung" },
    { param: "Zink ⭐", unit: "mg/l", women: "6–7", men: "6–7", comment: "Wichtig für Immunfunktion, Proteinsynthese" },
    { param: "Magnesium (Vollblut) ⭐", unit: "mmol/l", women: "0,85–1,0", men: "0,85–1,0", comment: "Erforderlich für über 600 enzymatische Reaktionen" },
    { param: "Selen ⭐", unit: "µg/l", women: "140–160", men: "140–160", comment: "Antioxidatives Mineral, wesentlich für Schilddrüsenhormonstoffwechsel" },
    { param: "Omega-3-Index ⭐", unit: "%", women: ">8", men: ">8", comment: "Misst EPA und DHA in Erythrozytenmembranen" },
    { param: "Gesamtprotein", unit: "g/dl", women: ">7,0 (optimal 7,3–7,6)", men: ">7,0 (optimal 7,3–7,6)", comment: "Summe aller Proteine im Blut, hauptsächlich Albumin und Globuline" }
  ],

  "amino": [
    { param: "Leucin", unit: "µmol/L", women: "110–217 (Ziel: obere Hälfte)", men: "110–217 (Ziel: obere Hälfte)", comment: "BCAA, wichtig für Muskelproteinsynthese" },
    { param: "Isoleucin", unit: "µmol/L", women: "58–117 (Ziel: obere Hälfte)", men: "58–117 (Ziel: obere Hälfte)", comment: "BCAA, unterstützt Glukoseaufnahme im Muskel" },
    { param: "Valin", unit: "µmol/L", women: "206–317 (Ziel: obere Hälfte)", men: "206–317 (Ziel: obere Hälfte)", comment: "BCAA, unterstützt Stickstoffbilanz und Immunsystem" },
    { param: "Methionin", unit: "µmol/L", women: "25–40 (Ziel: obere Hälfte)", men: "25–40 (Ziel: obere Hälfte)", comment: "Schwefelhaltige Aminosäure für Methylierungsprozesse" },
    { param: "Lysin", unit: "µmol/L", women: "139–240 (Ziel: obere Hälfte)", men: "139–240 (Ziel: obere Hälfte)", comment: "Erforderlich für Kollagenbildung und Immunfunktion" },
    { param: "Phenylalanin", unit: "µmol/L", women: "51–109 (Ziel: obere Hälfte)", men: "51–109 (Ziel: obere Hälfte)", comment: "Vorstufe zu Tyrosin, Dopamin und anderen Neurotransmittern" },
    { param: "Tryptophan", unit: "µmol/L", women: "36–125 (Ziel: obere Hälfte)", men: "36–125 (Ziel: obere Hälfte)", comment: "Vorstufe zu Serotonin und Melatonin, Stimmungsregulation" },
    { param: "Threonin", unit: "µmol/L", women: "118–210 (Ziel: obere Hälfte)", men: "118–210 (Ziel: obere Hälfte)", comment: "Wichtig für Kollagen, Elastin und Antikörperproduktion" },
    { param: "Histidin", unit: "µmol/L", women: "60–110 (Ziel: obere Hälfte)", men: "60–110 (Ziel: obere Hälfte)", comment: "Bestandteil von Hämoglobin, Myelinscheidenerhaltung" },
    { param: "Arginin", unit: "µmol/L", women: "110–180 (Ziel: obere Hälfte)", men: "110–180 (Ziel: obere Hälfte)", comment: "Vorstufe zu Stickstoffmonoxid, verbessert Gefäßfunktion" },
    { param: "Glutamin", unit: "µmol/L", women: "500–900 (Ziel: obere Hälfte)", men: "500–900 (Ziel: obere Hälfte)", comment: "Primärer Brennstoff für Darm- und Immunzellen" }
  ],

  "vitamins": [
    { param: "Vitamin A (Retinol)", unit: "µg/L", women: "700–900 (optimal: 800)", men: "700–900 (optimal: 800)", comment: "Essentiell für Sehvermögen, Immunfunktion, zelluläre Differenzierung" },
    { param: "Vitamin B1 (Thiamin, aktiv)", unit: "µg/L", women: "39,8–60 (Ziel: 60)", men: "39,8–60 (Ziel: 60)", comment: "Wichtig für Kohlenhydratstoffwechsel und Nervenfunktion" },
    { param: "Vitamin B2 (Riboflavin, aktiv)", unit: "µg/L", women: "85–300 (Ziel: 250)", men: "85–300 (Ziel: 250)", comment: "Beteiligt an Energieproduktion und antioxidativer Funktion" },
    { param: "Vitamin B6 (P5P, aktiv)", unit: "µg/L", women: "10,1–36 (Ziel: 36)", men: "10,1–36 (Ziel: 36)", comment: "Essentiell für Aminosäurenstoffwechsel und Neurotransmittersynthese" },
    { param: "Vitamin B9 (Folat, aktiv)", unit: "µg/L", women: "100–270 (Ziel: 160)", men: "100–270 (Ziel: 160)", comment: "Wichtig für DNA-Synthese, -Reparatur und Methylierung" },
    { param: "Vitamin B12 (aktiv, Holo-TC)", unit: "pmol/L", women: ">100 (Ziel: 100–150)", men: ">100 (Ziel: 100–150)", comment: "Essentiell für Nervenfunktion, DNA-Synthese und Methylierung" },
    { param: "Vitamin C", unit: "mg/L", women: "10–20 (Ziel: 10–20, bis zu 100 möglich)", men: "10–20 (Ziel: 10–20, bis zu 100 möglich)", comment: "Starkes Antioxidans, essentiell für Kollagensynthese" },
    { param: "Vitamin E", unit: "mg/L", women: "16–25 (Ziel: 16–25)", men: "16–25 (Ziel: 16–25)", comment: "Schützt Zellmembranen vor oxidativen Schäden" },
    { param: "Vitamin K2 (MK-7)", unit: "ng/L", women: "1000–6000 (Ziel: >1000)", men: "1000–6000 (Ziel: >1000)", comment: "Essentiell für Kalziumregulation und kardiovaskuläre Gesundheit" }
  ],

  "inflammation": [
    { param: "CRP (C-reaktives Protein, hsCRP)", unit: "mg/L", women: "<1,0 (optimal: <0,8)", men: "<1,0 (optimal: <0,8)", comment: "Empfindlicher Marker für systemische Entzündung" },
    { param: "BDNF (Brain-derived neurotrophic factor)", unit: "ng/ml", women: "30–40 (Ziel)", men: "30–40 (Ziel)", comment: "Protein zur Unterstützung des neuronalen Wachstums und der Neuroplastizität" },
    { param: "AGEs (Advanced glycation endproducts)", unit: "µg/ml", women: "<50 (je niedriger, desto besser)", men: "<50 (je niedriger, desto besser)", comment: "Verbindungen im Zusammenhang mit Alterung und Gewebeschäden" },
    { param: "Nitrotyrosin", unit: "nmol/L", women: "<200 (Ziel)", men: "<200 (Ziel)", comment: "Marker für Proteinoxidation und nitrosativen Stress" },
    { param: "Zonulin (Marker für Leaky Gut)", unit: "ng/ml", women: "<30 (je niedriger, desto besser)", men: "<30 (je niedriger, desto besser)", comment: "Zeigt intestinale Permeabilität an" }
  ],

  "hematology": [
    { param: "Hämoglobin ✓ ⭐", unit: "g/dL", women: "12,0-15,5", men: "13,5-17,5", comment: "Sauerstoffträgerprotein in roten Blutkörperchen" },
    { param: "Hämatokrit ✓", unit: "%", women: "36-46", men: "41-53", comment: "Prozentualer Anteil des Blutvolumens, der von Erythrozyten eingenommen wird" },
    { param: "Rote Blutkörperchen (RBC) ✓", unit: "10^6/µL", women: "4,0-5,2", men: "4,5-5,9", comment: "Zellen verantwortlich für den Sauerstofftransport" },
    { param: "Mittleres Korpuskuläres Volumen (MCV) ✓ ⭐", unit: "fL", women: "80-100", men: "80-100", comment: "Durchschnittliche Größe der roten Blutkörperchen" },
    { param: "Mittleres Korpuskuläres Hämoglobin (MCH) ✓", unit: "pg", women: "27-33", men: "27-33", comment: "Durchschnittliche Hämoglobinmenge pro RBC" },
    { param: "Mittlere Korpuskuläre Hämoglobinkonzentration (MCHC) ✓", unit: "g/dL", women: "32-36", men: "32-36", comment: "Durchschnittliche Hämoglobinkonzentration in RBCs" },
    { param: "Erythrozyten-Verteilungsbreite (RDW) ✓ ⭐", unit: "%", women: "11,5-14,5", men: "11,5-14,5", comment: "Variation der Größe der roten Blutkörperchen" },
    { param: "Weiße Blutkörperchen (WBC) ✓ ⭐", unit: "10^3/µL", women: "4,0-11,0", men: "4,0-11,0", comment: "Immunsystemzellen zur Bekämpfung von Infektionen" },
    { param: "Neutrophile ✓", unit: "%", women: "40-60", men: "40-60", comment: "Ersthelfer bei bakteriellen Infektionen" },
    { param: "Lymphozyten ✓ ⭐", unit: "%", women: "20-40", men: "20-40", comment: "T-Zellen und B-Zellen der adaptiven Immunität" },
    { param: "Monozyten ✓", unit: "%", women: "2-8", men: "2-8", comment: "Phagozytische Zellen, die zu Makrophagen werden" },
    { param: "Eosinophile ✓", unit: "%", women: "1-4", men: "1-4", comment: "Reaktion auf Parasiten und Allergien" },
    { param: "Basophile ✓", unit: "%", women: "0,5-1", men: "0,5-1", comment: "Histaminfreisetzung bei allergischen Reaktionen" },
    { param: "Thrombozyten ✓ ⭐", unit: "10^3/µL", women: "150-450", men: "150-450", comment: "Blutzellen für die Blutgerinnung" },
    { param: "Mittleres Thrombozytenvolumen (MPV) ✓", unit: "fL", women: "7,5-11,5", men: "7,5-11,5", comment: "Durchschnittliche Größe der Thrombozyten" }
  ],

  "hormones": [
    { param: "DHEA-S ⭐", unit: "µg/dl", women: "35,4–256 (altersabhängig, optimal oberes Drittel)", men: "44,3–331 (altersabhängig, optimal oberes Drittel)", comment: "Häufigstes Steroidhormon im Körper" },
    { param: "Testosteron gesamt", unit: "ng/ml", women: "bis 50 Jahre: 0,5–2\nüber 50 Jahre: 0,4–2", men: "3,0–9,0", comment: "Ziel: oberer Bereich" },
    { param: "Freies Testosteron ⭐", unit: "pg/ml", women: "2–4", men: "8–30 (altersabhängig)", comment: "Biologisch aktive Form, wichtig für metabolische Gesundheit" },
    { param: "Östradiol (E2) ⭐", unit: "pg/ml", women: "Follikelphase: 12–170\nOvulation: 100–500\nLutealphase: 40–200\nPostmenopause: bis zu 40", men: "bis zu 40\noptimal: 20–25", comment: "Wichtig für Knochendichte und kardiovaskuläre Gesundheit" },
    { param: "Progesteron", unit: "ng/ml", women: "2. Zyklushälfte: >10\nHRT: 2–6", men: "1–2", comment: "Balanciert Östrogeneffekte, wichtig für Schlaf und Stimmung" },
    { param: "SHBG ⭐", unit: "nmol/l", women: "30–130", men: "20–75", comment: "Reguliert die Bioverfügbarkeit von Sexualhormonen" },
    { param: "Cortisol (morgens)", unit: "µg/dl", women: "16–18", men: "17–18", comment: "Primäres Stresshormon mit diurnaler Rhythmik" },
    { param: "FSH", unit: "mIU/ml", women: "Follikelphase: 3–15\nOvulation: 4–23\nLutealphase: 1,5–9\nPostmenopause: bis zu 100", men: "bis zu 10", comment: "Unter HRT: 40–60" },
    { param: "LH", unit: "mIU/ml", women: "Follikelphase: 2,5–13\nOvulation: 9–70\nLutealphase: 1–13\nPostmenopause: 16–55", men: "1,5–10", comment: "FSH/LH-Verhältnis 2:1" },
    { param: "HbA1c ⭐", unit: "%", women: "<5,6", men: "<5,6", comment: "<5,7" }
  ]
};

export default reference;
