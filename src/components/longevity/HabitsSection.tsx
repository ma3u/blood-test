
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const HabitsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Taking Action: Building My New Habits</h2>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">1. Nutrition: Adopting a Low-Carb and "80% Full" Approach</h3>
      <p className="mb-4">I started by transforming my diet. Inspired by the science behind low-carb and Mediterranean diets, I reduced my intake of sugars and processed carbohydrates, focusing instead on vegetables, healthy fats, fish, and lean meats.</p>
      <p className="mb-4">I also embraced the Japanese "hara hachi bu" or 80% rule—eating until I felt just satisfied, not stuffed. This simple practice helped me control my portions and avoid mindless overeating, supporting both weight loss and metabolic health.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">2. Movement: Making Exercise Non-Negotiable</h3>
      <p className="mb-4">Knowing that physical inactivity can cost up to five years of life and increase the risk of at least 17 chronic diseases, I made regular movement a priority. I built a routine that includes:</p>
      <ul className="list-disc pl-8 space-y-2 mb-4">
        <li><strong>Endurance training:</strong> Brisk walks or cycling 30–60 minutes most days, which is linked to lower all-cause mortality and improved cardiovascular health.</li>
        <li><strong>Strength training:</strong> Twice a week, focusing on major muscle groups to maintain muscle mass, bone density, and metabolic function.</li>
        <li><strong>HIIT (High-Intensity Interval Training):</strong> Once or twice a week, using short bursts of intense effort to boost insulin sensitivity and mitochondrial health.</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">3. Mind-Body Balance: Breathing and Stress Management</h3>
      <p className="mb-4">I learned that chronic stress and poor sleep can undermine even the best diet and exercise plans. So I began practicing daily breathing exercises—simple diaphragmatic breathing or "box breathing"—to reduce stress and support my heart and immune system.</p>
      <p className="mb-4">I also set aside 10 minutes each day for meditation or mindfulness, which research shows can lower inflammation and even slow biological aging.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">4. Gut Health: Feeding My Microbiome</h3>
      <p className="mb-4">I discovered that gut health is deeply connected to both mental and physical well-being. I increased my intake of fiber-rich foods—beans, leafy greens, and fermented foods like yogurt and sauerkraut—to nourish my gut bacteria and reduce inflammation.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">5. Social and Emotional Wellbeing</h3>
      <p className="mb-4">I made an effort to connect more with friends and family, knowing that strong social ties are linked to longer, healthier lives. I also focused on cultivating optimism and gratitude, which studies show can add years to life and improve resilience.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">The Results and What I've Learned</h3>
      <p className="mb-4">By making these changes, my cholesterol levels improved, my weight stabilized, and I felt more energetic and resilient. I realized that the most powerful medicine is not in a pill, but in the daily choices I make—what I eat, how I move, how I manage stress, and how I connect with others.</p>
      <p className="mb-4">My journey is ongoing, but I'm motivated by the knowledge that every healthy choice adds not just years to my life, but life to my years. I'm determined to age actively and gracefully, closing the gap between lifespan and healthspan, and setting a new example for the next generation.</p>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Key Takeaway:</h3>
      <p className="mb-4">My story is proof that even with a family history of illness, it's possible to rewrite your health destiny. By focusing on nutrition, movement, stress management, gut health, and social connection, I'm building a foundation for a longer, healthier, and more fulfilling life.</p>
    </section>
  );
};

export default HabitsSection;
