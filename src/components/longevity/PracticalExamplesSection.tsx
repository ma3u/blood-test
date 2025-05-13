import React from "react";
import { useTranslation } from 'react-i18next';

const PracticalExamplesSection: React.FC = () => {
  const { t } = useTranslation('longevity');
  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">
        {t('Practical Examples for Longevity and Healthspan: Diet, Exercise, and Mind-Body Practices')}
      </h3>
      <p className="mb-4">
        {t('To optimize both lifespan and healthspan, it\'s not just about what you avoid, but also about the positive, evidence-based habits you build. Here are detailed, actionable examples based on leading molecular medicine and lifestyle research:')}
      </p>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        Nutrition
      </h4>
      <p className="mb-2"><strong>Low-Carb/Ketogenic Diet</strong></p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>What it is:</strong> A diet where carbohydrates are restricted (often below 50g/day), protein is moderate, and fat is the main energy source.</li>
        <li><strong>Benefits:</strong> Improves metabolic markers (blood sugar, insulin, triglycerides), reduces chronic inflammation, supports weight loss, and can reverse type 2 diabetes in many cases. Many report increased energy, better mood, and reduced cravings.</li>
        <li><strong>How to implement:</strong> Start with 20g carbs/day, then adjust upwards in 5-10g increments weekly to find your personal carb tolerance. Focus on non-starchy vegetables, meats, fish, eggs, nuts, seeds, and healthy fats (butter, olive oil, coconut oil). Avoid sugars, grains, starchy foods, and most fruits (berries in moderation are usually fine). Monitor with blood glucose and ketone testing if needed for precision.</li>
      </ul>

      <p className="mb-2"><strong>Eat Until 80% Full ("Hara Hachi Bu")</strong></p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>What it is:</strong> The Japanese practice of eating until you are just 80% full, rather than stuffed.</li>
        <li><strong>Benefits:</strong> Reduces total calorie intake, supports weight management, and may improve longevity by reducing metabolic stress and oxidative damage.</li>
        <li><strong>How to implement:</strong> Eat slowly, pay attention to satiety cues, and stop eating when you feel comfortably satisfied, not full. Use smaller plates and avoid distractions during meals.</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        Exercise: What Kind and How Much?
      </h4>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>Endurance (Running, Walking, Cycling):</strong> Enhances cardiovascular health, lowers blood pressure, improves lipid profile, and supports fat metabolism. Regular brisk walking (30+ minutes daily) is linked to lower all-cause mortality and better healthspan.</li>
        <li><strong>High-Intensity Interval Training (HIIT):</strong> Short bursts of intense effort (e.g., 30 seconds sprint, 90 seconds rest, repeat 4–8 times). Improves insulin sensitivity, cardiovascular fitness, and mitochondrial health in less time than steady-state cardio.</li>
        <li><strong>Strength Training:</strong> Preserves muscle mass and bone density, which decline with age. Reduces risk of falls, supports glucose metabolism, and improves overall function.</li>
      </ul>

      <h4 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        Mind-Body: Stress Management
      </h4>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>Breathing Techniques:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Box Breathing:</strong> Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat for several cycles. This technique can help reduce stress and improve focus.</li>
            <li><strong>4-7-8 Breathing:</strong> Inhale through your nose for 4 seconds, hold your breath for 7 seconds, then exhale completely through your mouth for 8 seconds. Repeat 3-4 times. This technique can help reduce anxiety and improve sleep.</li>
            <li><strong>Wim Hof Method:</strong> A combination of controlled breathing, cold exposure, and meditation. Practice 30-40 deep breaths, followed by breath retention, and repeat for 3 rounds. This technique can help boost energy, improve immune function, and reduce stress.</li>
          </ul>
        </li>
        <li><strong>Cold Exposure:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Cold Showers:</strong> Start with a normal shower, then gradually decrease the temperature for the last 30 seconds. Over time, increase the cold exposure to 2-3 minutes.</li>
            <li><strong>Gradual Progression:</strong> Begin with brief exposure to cold (even just washing hands or face with cold water) and gradually build up tolerance over time.</li>
            <li><strong>Benefits:</strong> Cold exposure activates brown fat, improves circulation, reduces inflammation, and may enhance mood and energy levels.</li>
          </ul>
        </li>
        <li><strong>Meditation and Mindfulness:</strong> Regular practice (10-20 minutes daily) can reduce stress, improve focus, and enhance overall well-being. Start with guided meditations and gradually work toward independent practice.</li>
        <li><strong>Meditational Running:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-1">
            <li><strong>Mindful Movement:</strong> Combine gentle running with mindfulness practice by focusing on breath, footfalls, and body sensations.</li>
            <li><strong>Benefits:</strong> Combines the mental benefits of meditation with the physical benefits of exercise, potentially enhancing both.</li>
            <li><strong>Practice:</strong> Start with short sessions (10-15 minutes), focus on breath and form, and gradually increase duration as comfort improves.</li>
          </ul>
        </li>
        <li><strong>Other Stress Management:</strong> Regular time in nature, digital detoxes, journaling, gratitude practices, and social connection all contribute to stress reduction and improved well-being.</li>
      </ul>
    </div>
  );
};

export default PracticalExamplesSection;
