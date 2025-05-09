
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const ReferencesSection: React.FC = () => {
  const { t } = useLanguage();

  const references = [
    {
      id: "keto-clarity",
      title: "Keto Clarity: Your Definitive Guide to the Benefits",
      authors: "Jimmy Moore, Eric C. Westman, MD",
      url: "https://www.ketobook.com/keto-clarity/",
      year: "2014",
      description: "Comprehensive guide to ketogenic diet benefits and implementation"
    },
    {
      id: "10-human",
      title: "10% Human: How Your Body's Microbes Hold the Key to Health and Happiness",
      authors: "Alanna Collen",
      url: "https://www.harpercollins.com/products/10-human-alanna-collen",
      year: "2015",
      description: "Explores the relationship between gut microbiome and overall health"
    },
    {
      id: "gut-microbiome",
      title: "The Gut Microbiome and Healthy Aging",
      authors: "Nature Review",
      url: "https://www.nature.com/articles/s41575-022-00605-x",
      year: "2022",
      description: "Scientific review of microbiome's role in aging and longevity"
    },
    {
      id: "diet-microbiome",
      title: "Effect of Diet on the Gut Microbiome: Rethinking Intervention Duration",
      authors: "Frontiers in Microbiology",
      url: "https://www.frontiersin.org/articles/10.3389/fmicb.2021.704670/full",
      year: "2021",
      description: "Research on dietary interventions and microbiome modifications"
    },
    {
      id: "psychobiotic",
      title: "The Psychobiotic Revolution: Mood, Food, and the New Science of the Gut-Brain Connection",
      authors: "Scott C. Anderson, John F. Cryan, Ted Dinan",
      url: "https://www.nationalgeographic.com/science/article/the-psychobiotic-revolution",
      year: "2017",
      description: "Explores gut-brain connection and impact on mental health"
    },
    {
      id: "dietary-patterns",
      title: "Dietary Patterns and Longevity",
      authors: "Nutrients Journal",
      url: "https://www.mdpi.com/journal/nutrients/special_issues/dietary_patterns_longevity",
      year: "2020",
      description: "Collection of studies on how dietary patterns affect lifespan"
    },
    {
      id: "ketogenic-diets",
      title: "Ketogene Diäten: Grundlagen und Anwendung",
      authors: "German Society for Nutrition",
      url: "https://www.dge.de/wissenschaft/weitere-publikationen/fachinformationen/ketogene-diaet/",
      year: "2019",
      description: "German nutrition society's evaluation of ketogenic diets"
    },
    {
      id: "wim-hof",
      title: "The Wim Hof Method: Activate Your Full Human Potential",
      authors: "Wim Hof",
      url: "https://www.wimhofmethod.com/book",
      year: "2020",
      description: "Guide to cold exposure, breathing techniques, and mindset training"
    },
    {
      id: "breath",
      title: "Breath: The New Science of a Lost Art",
      authors: "James Nestor",
      url: "https://www.mrjamesnestor.com/breath",
      year: "2020",
      description: "Explores the science and practice of breathing techniques"
    },
    {
      id: "strunz",
      title: "Der Schlüssel zur Gesundheit: Erfahrungen und Überzeugungen",
      authors: "Ulrich Strunz",
      url: "https://www.penguin.de/autoren/ulrich-strunz/108225",
      year: "2017",
      description: "Health approaches including meditational running concepts"
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold text-blue-800 mb-4">References and Further Reading</h2>
      <p className="mb-6 text-gray-700">
        These resources provide scientific background and practical guidance for implementing the longevity and healthspan practices discussed on this page.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((ref) => (
          <a
            key={ref.id}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-labelledby={`title-${ref.id}`}
          >
            <div className="flex justify-between">
              <h3 
                id={`title-${ref.id}`} 
                className="font-medium text-blue-700 group-hover:text-blue-800 mb-1"
              >
                {ref.title}
              </h3>
              <ExternalLink 
                size={16} 
                className="text-gray-400 group-hover:text-blue-600 flex-shrink-0" 
                aria-hidden="true"
              />
            </div>
            <p className="text-sm text-gray-600 mb-1">{ref.authors} ({ref.year})</p>
            <p className="text-sm text-gray-700">{ref.description}</p>
          </a>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 italic">
          Note: All links open in a new tab. For additional resources or specific research papers on any topic, please contact us.
        </p>
      </div>
    </>
  );
};

export default ReferencesSection;
