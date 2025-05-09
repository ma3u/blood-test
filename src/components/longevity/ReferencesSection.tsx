
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const ReferencesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{t("references")}</h2>
      <div className="text-sm space-y-2">
        <p><a href="https://www.amazon.com/Keto-Clarity-Definitive-Benefits-Low-Carb/dp/1628600071" className="text-blue-600 hover:underline">Keto Clarity: Your Definitive Guide to the Benefits (Jimmy Moore, Eric C. Westman, MD)</a></p>
        <p><a href="https://www.harpercollins.com/products/10-human-alanna-collen" className="text-blue-600 hover:underline">10% Human: How Your Body's Microbes Hold the Key to Health and Happiness (Alanna Collen)</a></p>
        <p><a href="https://www.nature.com/articles/s41392-021-00831-w" className="text-blue-600 hover:underline">The Gut Microbiome and Healthy Aging (Nature Review)</a></p>
        <p><a href="https://www.frontiersin.org/articles/10.3389/fmicb.2021.634349/full" className="text-blue-600 hover:underline">Effect of Diet on the Gut Microbiome: Rethinking Intervention Duration (Frontiers in Microbiology)</a></p>
        <p><a href="https://www.penguinrandomhouse.com/books/547404/the-psychobiotic-revolution-by-scott-c-anderson/" className="text-blue-600 hover:underline">The Psychobiotic Revolution: Mood, Food, and the New Science of the Gut-Brain Connection</a></p>
        <p><a href="https://www.mdpi.com/2072-6643/11/12/2862" className="text-blue-600 hover:underline">Dietary Patterns and Longevity (Nutrients Journal)</a></p>
        <p><a href="https://www.dge.de/wissenschaft/weitere-publikationen/fachinformationen/ketogene-diaeten/" className="text-blue-600 hover:underline">Ketogene Diäten: Grundlagen und Anwendung (German Society for Nutrition)</a></p>
        <p><a href="https://www.wimhofmethod.com/" className="text-blue-600 hover:underline">The Wim Hof Method: Activate Your Full Human Potential (Wim Hof)</a></p>
        <p><a href="https://www.mrjamesnestor.com/breath" className="text-blue-600 hover:underline">Breath: The New Science of a Lost Art (James Nestor)</a></p>
        <p><a href="https://www.strunz.com/de/" className="text-blue-600 hover:underline">Der Schlüssel zur Gesundheit: Erfahrungen und Überzeugungen (Ulrich Strunz)</a></p>
      </div>
    </section>
  );
};

export default ReferencesSection;
