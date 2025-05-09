
import React from "react";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";

const LongevityEn = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title="My Personal Journey to Longevity and Healthspan"
        description="A comprehensive, evidence-based guide to diagnostics, habits, and routines for maximum lifespan and health."
      />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png" 
              alt="Blood Test Oracle Logo" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              My Personal Journey to Longevity and Healthspan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A comprehensive, evidence-based approach to optimizing my biological age through diagnostics, habits, and mindset.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <nav className="mb-8" aria-label="Page sections">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#diagnostics" className="text-blue-600 hover:underline">Diagnostics & Self-Tracking</a></li>
              <li><a href="#habits" className="text-blue-600 hover:underline">Habits</a></li>
              <li><a href="#mindbody" className="text-blue-600 hover:underline">{t("longevity.sections.mindBody")}</a></li>
              <li><a href="#practical" className="text-blue-600 hover:underline">{t("longevity.sections.practical")}</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">References</a></li>
            </ul>
          </nav>
          <section id="diagnostics">
            <h2 className="text-2xl font-bold mb-4">Proactive Diagnostics and Self-Tracking: My Holistic Approach</h2>
            <p className="mb-4">
              A cornerstone of my longevity journey is the regular analysis of biomarkers through comprehensive blood testing. 
              This data-driven approach has allowed me to build a personalized health baseline and identify areas for improvement.
            </p>
            <p>
              My preferred testing schedule involves quarterly comprehensive panels, supplemented with specialized tests 
              based on previous findings, family history, and emerging research.
            </p>
          </section>
          <hr className="my-8" />
          <section id="habits">
            <h2 className="text-2xl font-bold mb-4">Action: Building My New Habits</h2>
            <p>
              Longevity action means consistently implementing positive lifestyle changes—nutrition, exercise, stress management, 
              gut health, and social connection—based on the best available scientific evidence. My personal journey 
              demonstrates how these habits lead to measurable improvements in health and well-being.
            </p>
          </section>
          <hr className="my-8" />
          <section id="mindbody">
            <h2 className="text-2xl font-bold mb-4">Mind-Body Practices for Longevity</h2>
            <p>
              My longevity journey emphasizes the critical connection between mental and physical health. Regular meditation,
              breath work, cold exposure therapy, and mindful movement have significantly reduced my stress levels and improved
              recovery metrics.
            </p>
          </section>
          <hr className="my-8" />
          <section id="practical">
            <h2 className="text-2xl font-bold mb-4">Practical Examples for Longevity and Healthspan: Nutrition, Exercise, and Mind-Body Practices</h2>
            <ul className="list-disc pl-6">
              <li><b>Nutrition:</b> Low-carb/ketogenic diet, intermittent fasting, Mediterranean diet, and plant-based eating. Focus on whole foods, healthy fats, and minimizing processed sugars.</li>
              <li><b>Exercise:</b> Mix of endurance (aerobic), strength training, HIIT, and daily movement. Consistency is key.</li>
              <li><b>Mind-Body Practices:</b> Meditation, yoga, mindfulness, and gratitude exercises for stress management and mental health support.</li>
              <li><b>Social Connection:</b> Strong relationships and community building, which are linked to longer healthspan.</li>
            </ul>
          </section>
          <hr className="my-8" />
          <section id="references">
            <h2 className="text-2xl font-bold mb-4">References</h2>
            <ul className="list-disc pl-6 text-xs">
              <li><a href="https://gh.bmj.com/content/6/3/e004124" target="_blank" rel="noopener noreferrer">Global Health: Longevity and Healthspan (BMJ)</a></li>
              <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8294064/" target="_blank" rel="noopener noreferrer">Physical Activity and Healthspan (PMC)</a></li>
              <li><a href="https://www.nature.com/articles/s41598-024-83802-9" target="_blank" rel="noopener noreferrer">Nature: Longevity and Exercise</a></li>
              <li><a href="https://www.insidetracker.com/a/articles/how-intermittent-fasting-impacts-longevity" target="_blank" rel="noopener noreferrer">Intermittent Fasting and Longevity (InsideTracker)</a></li>
              <li><a href="https://www.utsouthwestern.edu/newsroom/articles/year-2022/active-phase-calorie-restriction.html" target="_blank" rel="noopener noreferrer">Active Phase Calorie Restriction Study (UT Southwestern)</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LongevityEn;
