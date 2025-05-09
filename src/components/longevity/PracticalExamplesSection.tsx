
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
        <li><strong>Advanced Breathing Techniques:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Box Breathing:</strong> Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. This Navy SEAL technique quickly rebalances the nervous system.</li>
            <li><strong>4-7-8 Breathing:</strong> Inhale for 4 counts, hold for 7, exhale for 8. This pattern activates the parasympathetic nervous system and is particularly effective before sleep.</li>
            <li><strong>Wim Hof Method:</strong> Combines deep breathing with cold exposure to boost immunity, reduce inflammation, and improve stress resilience.</li>
          </ul>
        </li>
        <li><strong>Cold Exposure Therapy:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Cold Showers:</strong> Starting with just 30 seconds at the end of a regular shower can activate brown adipose tissue, improve circulation, boost mood via norepinephrine release, and strengthen immune function.</li>
            <li><strong>Gradual Progression:</strong> Start with 15-30 seconds of cold water at the end of showers, then gradually increase duration. Aim for 2-3 minutes of cold exposure 3-4 times per week.</li>
            <li><strong>Benefits:</strong> Research shows cold exposure activates longevity pathways, increases mitochondrial efficiency, and improves stress resilience.</li>
          </ul>
        </li>
        <li><strong>Meditation and Mindfulness:</strong> Regular practice decreases chronic stress, improves emotional regulation, and is linked to longer telomeres (a marker of biological aging). Start with 5-10 minutes daily.</li>
        <li><strong>Meditational Running:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Mindful Movement:</strong> Combining running with mindfulness by focusing on breath, footfall rhythm, and bodily sensations rather than distractions.</li>
            <li><strong>Benefits:</strong> Reduces exercise-induced stress, improves running economy, and creates a sense of flow that may enhance cognitive function alongside physical benefits.</li>
            <li><strong>Practice:</strong> Start with shorter, slower runs (20 minutes) where you focus entirely on breath and movement, gradually building to longer sessions with maintained awareness.</li>
          </ul>
        </li>
        <li><strong>Other Stress Management:</strong> Nature walks, journaling, gratitude practice, social connection help manage chronic stress, which accelerates aging and disease risk.</li>
      </ul>
    </div>
  );
};

export default PracticalExamplesSection;
