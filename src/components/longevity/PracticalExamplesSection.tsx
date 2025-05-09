
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const PracticalExamplesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Practical Examples for Longevity and Healthspan</h3>
      <p className="mb-4">To optimize both lifespan and healthspan, it's not just about what you avoid, but also about the positive, evidence-based habits you build. Here are detailed, actionable examples based on leading molecular medicine and lifestyle research:</p>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">1. Nutrition: Low-Carb Diets & the 80% Rule</h4>
      <p className="mb-2"><strong>Low-Carb/Ketogenic Diet</strong></p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>What it is:</strong> A diet where carbohydrates are restricted (often below 50g/day), protein is moderate, and fat is the main energy source.</li>
        <li><strong>Benefits:</strong> Improves metabolic markers, reduces chronic inflammation, supports weight loss, and can reverse type 2 diabetes in many cases. Many report increased energy, better mood, and reduced cravings.</li>
        <li><strong>How to implement:</strong> Start with 20g carbs/day, then adjust upwards in 5-10g increments weekly to find your personal carb tolerance. Focus on non-starchy vegetables, meats, fish, eggs, nuts, seeds, and healthy fats.</li>
      </ul>

      <p className="mb-2"><strong>Eat Until 80% Full ("Hara Hachi Bu")</strong></p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>What it is:</strong> A principle from Okinawan longevity culture—stop eating when you feel about 80% full.</li>
        <li><strong>Benefits:</strong> Promotes calorie moderation naturally, prevents overeating, supports healthy weight and metabolic function.</li>
        <li><strong>How to implement:</strong> Eat slowly and mindfully, pausing before feeling completely full. Use smaller plates, and focus on satiety cues rather than finishing everything on the plate.</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">2. Exercise: What Kind and How Much?</h4>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>Endurance (Running, Walking, Cycling):</strong> Enhances cardiovascular health, lowers blood pressure, improves lipid profile, and supports fat metabolism. Regular brisk walking (30+ minutes daily) is linked to lower all-cause mortality and better healthspan.</li>
        <li><strong>High-Intensity Interval Training (HIIT):</strong> Short bursts of intense effort improve insulin sensitivity, cardiovascular fitness, and mitochondrial health in less time than steady-state cardio.</li>
        <li><strong>Strength Training:</strong> Preserves muscle mass and bone density, which decline with age. Reduces risk of falls, supports glucose metabolism, and improves overall function. 2-3 sessions per week focusing on major muscle groups.</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">3. Mind-Body: Breathing, Meditation, and Stress Management</h4>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>Breathing Techniques:</strong> Diaphragmatic breathing, box breathing, or slow nasal breathing reduce stress hormones, lower blood pressure, and improve heart rate variability.</li>
        <li><strong>Meditation and Mindfulness:</strong> Regular practice decreases chronic stress, improves emotional regulation, and is linked to longer telomeres (a marker of biological aging). Start with 5-10 minutes daily.</li>
        <li><strong>Other Stress Management:</strong> Nature walks, journaling, gratitude practice, social connection help manage chronic stress, which accelerates aging and disease risk.</li>
      </ul>
    </div>
  );
};

export default PracticalExamplesSection;
