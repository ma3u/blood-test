
import React from "react";

const ReferencesSection: React.FC = () => {
  // References updated to open in new tabs and with proper accessibility
  const references = [
    { id: 1, title: "Keto Clarity: Your Definitive Guide to the Benefits", author: "Jimmy Moore, Eric C. Westman, MD", url: "https://www.amazon.com/Keto-Clarity-Definitive-Benefits-Ketogenic/dp/1628600071" },
    { id: 2, title: "10% Human: How Your Body's Microbes Hold the Key to Health and Happiness", author: "Alanna Collen", url: "https://www.harpercollins.com/products/10-human-alanna-collen" },
    { id: 3, title: "The Gut Microbiome and Healthy Aging", author: "Nature Review", url: "https://www.nature.com/articles/s41392-021-00831-w" },
    { id: 4, title: "Effect of Diet on the Gut Microbiome: Rethinking Intervention Duration", author: "Frontiers in Microbiology", url: "https://www.frontiersin.org/articles/10.3389/fmicb.2021.634349/full" },
    { id: 5, title: "The Psychobiotic Revolution", author: "Scott C. Anderson, John F. Cryan, Timothy G. Dinan", url: "https://www.penguinrandomhouse.com/books/547404/the-psychobiotic-revolution-by-scott-c-anderson-john-f-cryan-phd-and-timothy-g-dinan-md-phd/" },
    { id: 6, title: "Dietary Patterns and Longevity", author: "Nutrients Journal", url: "https://www.mdpi.com/2072-6643/11/12/2862" },
    { id: 7, title: "Ketogene Diäten: Grundlagen und Anwendung", author: "German Society for Nutrition", url: "https://www.dge.de/wissenschaft/weitere-publikationen/fachinformationen/ketogene-diaeten/" },
    { id: 8, title: "The Wim Hof Method: Activate Your Full Human Potential", author: "Wim Hof", url: "https://www.wimhofmethod.com/" },
    { id: 9, title: "Breath: The New Science of a Lost Art", author: "James Nestor", url: "https://www.mrjamesnestor.com/breath-book" },
    { id: 10, title: "Lifestyle Factors Most Strongly Linked to Biological Aging", author: "EurekAlert!", url: "https://www.eurekalert.org/news-releases/1059853" },
    // Adding the requested experts
    { id: 11, title: "Nährstoff-Therapie – Der Praxisleitfaden", author: "Dr. Helena Orfanos-Boeckel", url: "https://shop.thieme.de/nahrstoff-therapie-9783437453564.html" },
    { id: 12, title: "Das Stress-weg-Buch – Das Geheimnis der Resilienz", author: "Dr. Ulrich Strunz", url: "https://www.strunz.com/de/buecher/das-stress-weg-buch.html" },
    { id: 13, title: "Blutwerte verstehen", author: "Thiemo Osterhaus", url: "https://www.thiemoosterhaus.de/publikationen/" },
    { id: 14, title: "Das große Buch vom Stoffwechsel", author: "Dr. Ingo Froböse", url: "https://www.amazon.de/grosse-Buch-vom-Stoffwechsel-dauerhaft/dp/3833878060" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-4" id="references">References</h2>
      <p className="mb-4">These resources provide evidence-based information on longevity, healthspan, and lifestyle interventions:</p>
      
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
