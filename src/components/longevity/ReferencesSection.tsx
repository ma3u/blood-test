
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const ReferencesSection: React.FC = () => {
  const { t } = useLanguage();

  const references = [
    {
      title: "Keto Clarity: Your Definitive Guide to the Benefits",
      authors: "Jimmy Moore, Eric C. Westman, MD",
      url: "https://www.ketobook.com/keto-clarity/",
    },
    {
      title: "10% Human: How Your Body's Microbes Hold the Key to Health and Happiness",
      authors: "Alanna Collen",
      url: "https://www.harpercollins.com/products/10-human-alanna-collen",
    },
    {
      title: "The Gut Microbiome and Healthy Aging",
      authors: "Nature Review",
      url: "https://www.nature.com/articles/s41575-022-00605-x",
    },
    {
      title: "Effect of Diet on the Gut Microbiome: Rethinking Intervention Duration",
      authors: "Frontiers in Microbiology",
      url: "https://www.frontiersin.org/articles/10.3389/fmicb.2021.704670/full",
    },
    {
      title: "The Psychobiotic Revolution: Mood, Food, and the New Science of the Gut-Brain Connection",
      authors: "Scott C. Anderson, John F. Cryan, Ted Dinan",
      url: "https://www.nationalgeographic.com/science/article/the-psychobiotic-revolution",
    },
    {
      title: "Dietary Patterns and Longevity",
      authors: "Nutrients Journal",
      url: "https://www.mdpi.com/journal/nutrients/special_issues/dietary_patterns_longevity",
    },
    {
      title: "Ketogene Diäten: Grundlagen und Anwendung",
      authors: "German Society for Nutrition",
      url: "https://www.dge.de/wissenschaft/weitere-publikationen/fachinformationen/ketogene-diaet/",
    },
    {
      title: "The Wim Hof Method: Activate Your Full Human Potential",
      authors: "Wim Hof",
      url: "https://www.wimhofmethod.com/book",
    },
    {
      title: "Breath: The New Science of a Lost Art",
      authors: "James Nestor",
      url: "https://www.mrjamesnestor.com/breath",
    },
    {
      title: "Der Schlüssel zur Gesundheit: Erfahrungen und Überzeugungen",
      authors: "Ulrich Strunz",
      url: "https://www.penguin.de/autoren/ulrich-strunz/108225",
    },
  ];

  return (
    <section id="references" className="mt-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{t("references")}</h2>
      <Separator className="my-4" />
      <ul className="space-y-3">
        {references.map((ref, index) => (
          <li key={index} className="pl-5 border-l-2 border-blue-200 hover:border-blue-500 transition-colors">
            <a 
              href={ref.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start hover:text-blue-600 transition-colors group"
              aria-label={`${ref.title} by ${ref.authors} (opens in new tab)`}
            >
              <div>
                <div className="font-medium">{ref.title}</div>
                <div className="text-sm text-gray-600">{ref.authors}</div>
              </div>
              <ExternalLink 
                size={16} 
                className="ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReferencesSection;
