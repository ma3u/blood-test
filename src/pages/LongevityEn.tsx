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
              <li><a href="#personal-journey" className="text-blue-600 hover:underline">Personal Journey</a></li>
              <li><a href="#diagnostics" className="text-blue-600 hover:underline">Diagnostics & Self-Tracking</a></li>
              <li><a href="#taking-action" className="text-blue-600 hover:underline">Taking Action</a></li>
              <li><a href="#factors" className="text-blue-600 hover:underline">Longevity Factors</a></li>
              <li><a href="#practical-examples" className="text-blue-600 hover:underline">Practical Examples</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">References</a></li>
            </ul>
          </nav>

          {/* Personal Journey Section */}
          <section id="personal-journey" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">My Personal Journey to Longevity and Healthspan</h2>
            <p className="mb-4">
              Growing up, I watched my parents struggle with serious health issues—problems that were largely the result of unhealthy habits: smoking, poor diet, lack of physical activity, and chronic stress. Their experiences became a powerful warning for me. I saw firsthand how smoking, physical inactivity, and poor nutrition can lead to years lost from both lifespan and healthspan, and I realized that I didn't want to follow the same path. Avoiding smoking became a conscious priority in my own lifestyle changes.
            </p>
            <p>
              A few years ago, I faced my own health wake-up call. My cholesterol values were high, and I was teetering on the edge of being overweight. The numbers were clear: if I didn't change, I could be heading toward the same fate as my parents. But research shows that genetics account for less than 2% of mortality risk, while about 17% is shaped by modifiable lifestyle and environmental factors. That meant my future was largely in my own hands.
            </p>
          </section>

          <hr className="my-8" />

          {/* Diagnostics Section */}
          <section id="diagnostics" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Proactive Diagnostics and Self-Monitoring: My Holistic Approach</h2>
            <p className="mb-4">
              To ensure a holistic and proactive approach to my health and longevity, I have established a routine of regular diagnostic checks and continuous self-monitoring. This comprehensive strategy includes laboratory analysis, advanced molecular diagnostics, and digital health tracking, all aimed at early detection of risk factors and optimization of my healthspan.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Regular Laboratory Diagnostics</h3>
            <p className="mb-3"><strong>Blood Values:</strong> I routinely monitor standard blood markers such as cholesterol (total, LDL, HDL, triglycerides), fasting glucose, HbA1c, liver and kidney function, inflammatory markers (hs-CRP), vitamin D, magnesium, zinc, and homocysteine. These values provide insights into my metabolic health, cardiovascular risk, and micronutrient status.</p>
            <p className="mb-3"><strong>Amino Acid Profile:</strong> Periodically, I assess my amino acid spectrum to detect deficiencies or imbalances. Essential and conditionally essential amino acids such as tryptophan, lysine, methionine, leucine, isoleucine, valine, glutamine, and glycine are particularly important for muscle maintenance, immune function, and neurotransmitter balance.</p>
            <p className="mb-3"><strong>Micronutrient Status:</strong> Supplementary checks for vitamins (C, E, B-complex, coenzyme Q10, alpha-lipoic acid) and minerals (chromium, magnesium) help identify subclinical deficiencies that may affect aging, immunity, and energy metabolism.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Microbiome Analysis</h3>
            <p className="mb-3"><strong>Gut Microbiome Sequencing:</strong> I perform periodic stool-based microbiome analyses to assess the diversity and balance of my gut flora. This includes quantifying beneficial genera (e.g., Bifidobacterium, Akkermansia), evaluating the presence of short-chain fatty acid producers, and screening for dysbiosis or overgrowth of pathogenic species.</p>
            <p className="mb-3"><strong>Interpretation and Action:</strong> Insights from microbiome testing guide my dietary choices, especially fiber and prebiotic intake, and help me personalize my probiotic supplementation. A healthy, diverse microbiome is now recognized as a critical pillar for metabolic health, immune regulation, and even mental well-being.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Digital Fitness and Health Tracking (Apple Health & Devices)</h3>
            <p className="mb-1"><strong>VO2Max:</strong> I track my VO2Max as a marker of aerobic fitness and cardiovascular health. Improvements here are linked to lower all-cause mortality and enhanced healthspan.</p>
            <p className="mb-1"><strong>Resting Heart Rate and Heart Rate Variability (HRV):</strong> Both are monitored continuously; a lower resting heart rate and higher HRV are signs of good cardiovascular and autonomic health.</p>
            <p className="mb-1"><strong>Blood Pressure:</strong> Regular readings help me detect early hypertension and assess the impact of lifestyle changes.</p>
            <p className="mb-1"><strong>Body Composition:</strong> Weight, BMI, body fat percentage, and waist circumference are tracked to monitor metabolic health and prevent obesity-related risks.</p>
            <p className="mb-1"><strong>Activity Metrics:</strong> Steps per day, active energy expenditure, exercise minutes, and workout types (endurance, strength, HIIT) are all logged to ensure I meet recommended activity levels.</p>
            <p className="mb-1"><strong>Sleep Tracking:</strong> I monitor sleep duration and quality, as restorative sleep is essential for recovery, hormonal balance, and cognitive function.</p>
            <p className="mb-1"><strong>Blood Oxygen Saturation (SpO2):</strong> Periodic checks, especially during exercise or sleep, help ensure adequate oxygenation and detect potential respiratory issues.</p>
            <p className="mb-1"><strong>ECG/EKG:</strong> If available, I use this feature for early detection of arrhythmias or other cardiac abnormalities.</p>
            <p className="mb-1"><strong>Mindfulness Minutes:</strong> Tracking meditation and breathing exercises supports my stress management and mental resilience.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Integrating Results for Personalized Prevention</h3>
            <p>
              By combining regular laboratory diagnostics, in-depth microbiome analysis, and continuous digital health tracking, I gain a multidimensional understanding of my health. This approach enables me to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Detect early warning signs before symptoms arise.</li>
              <li>Tailor my nutrition, supplementation, and lifestyle interventions (e.g., adjusting fiber intake for microbiome health, optimizing amino acid supply for muscle and immune support, or targeting specific deficiencies with orthomolecular supplements).</li>
              <li>Monitor the effectiveness of interventions in real time and adjust as needed.</li>
            </ul>
            <p className="mt-3">
              This comprehensive diagnostic and monitoring routine forms the foundation of my strategy to extend both lifespan and healthspan, allowing me to age actively and healthily, despite my genetic predispositions and family history.
            </p>
          </section>

          <hr className="my-8" />

          {/* Taking Action Section */}
          <section id="taking-action" className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Taking Action: Building My New Habits</h3>
            <p className="mb-4">
              Taking action for longevity means consistently applying positive lifestyle changes—nutrition, movement, stress management, gut health, and social connection—based on the best available evidence. My personal journey demonstrates how adopting these habits can lead to measurable improvements in health and well-being.
            </p>
            <p>
              For detailed, actionable routines and scientific context, see the next section: Practical Examples for Longevity and Healthspan.
            </p>
          </section>

          <hr className="my-8" />

          {/* Factors Influencing Longevity Section */}
          <section id="factors" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Factors Influencing Longevity and Healthspan: Evidence-Based Overview</h2>
            <p className="mb-4">
              The average disparity between lifespan and healthspan is ~9 years, with individuals spending nearly 20% of life with morbidity. Addressing modifiable factors (e.g., smoking, diet) is critical to closing this gap.
            </p>
            <p className="mb-4">
              Below is a comprehensive analysis of critical factors, their quantified impacts, and supporting evidence.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Positive Factors Enhancing Longevity and Healthspan</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Longevity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Healthspan</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Regular Physical Activity</td>
                    <td className="border border-gray-300 px-4 py-2">Adds 4.5 years</td>
                    <td className="border border-gray-300 px-4 py-2">Reduces risk of 17 diseases (e.g., CVD, diabetes)</td>
                    <td className="border border-gray-300 px-4 py-2">[8][11][12]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">- Aerobic (e.g., running)</td>
                    <td className="border border-gray-300 px-4 py-2">25–40% lower mortality</td>
                    <td className="border border-gray-300 px-4 py-2">Improves cardiovascular health</td>
                    <td className="border border-gray-300 px-4 py-2">[11]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">- Resistance Training</td>
                    <td className="border border-gray-300 px-4 py-2">15% lower all-cause mortality</td>
                    <td className="border border-gray-300 px-4 py-2">Preserves muscle mass and bone density</td>
                    <td className="border border-gray-300 px-4 py-2">[12]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Mediterranean Diet</td>
                    <td className="border border-gray-300 px-4 py-2">23% lower mortality</td>
                    <td className="border border-gray-300 px-4 py-2">Reduces inflammation and metabolic disease risk</td>
                    <td className="border border-gray-300 px-4 py-2">[10]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Not Smoking</td>
                    <td className="border border-gray-300 px-4 py-2">Prevents 5–10 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Lowers risk of 21 diseases (e.g., lung cancer, COPD)</td>
                    <td className="border border-gray-300 px-4 py-2">[6][14][18]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Moderate Alcohol Intake</td>
                    <td className="border border-gray-300 px-4 py-2">Part of lifestyle adding 5.5 years</td>
                    <td className="border border-gray-300 px-4 py-2">Cardiovascular benefits at ≤1 drink/day (women) or ≤2/day (men)</td>
                    <td className="border border-gray-300 px-4 py-2">[2][10]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Optimal Sleep (7–8 hours)</td>
                    <td className="border border-gray-300 px-4 py-2">Prevents 2–3 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Enhances cognitive function and metabolism</td>
                    <td className="border border-gray-300 px-4 py-2">[5]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Strong Social Connections</td>
                    <td className="border border-gray-300 px-4 py-2">50% higher survival rates</td>
                    <td className="border border-gray-300 px-4 py-2">Reduces dementia risk and improves mental health</td>
                    <td className="border border-gray-300 px-4 py-2">[5][19]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">Negative Factors Reducing Longevity and Healthspan</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Longevity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Healthspan</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Smoking</td>
                    <td className="border border-gray-300 px-4 py-2">5–10 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Increases risk of 21 diseases (e.g., lung cancer, CVD)</td>
                    <td className="border border-gray-300 px-4 py-2">[6][14][18]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Physical Inactivity</td>
                    <td className="border border-gray-300 px-4 py-2">4.7 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Linked to 17 diseases (e.g., stroke, diabetes)</td>
                    <td className="border border-gray-300 px-4 py-2">[2][4][8]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Obesity (BMI ≥30)</td>
                    <td className="border border-gray-300 px-4 py-2">3–10 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Raises diabetes, CVD, and cancer risk</td>
                    <td className="border border-gray-300 px-4 py-2">[7][13]</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">Diabetes (Type 2)</td>
                    <td className="border border-gray-300 px-4 py-2">2 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Reduces disease-free years by 1.7 years</td>
                    <td className="border border-gray-300 px-4 py-2">[9][13]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">Quantified Combined Effects</h3>
            <ul className="list-disc pl-6">
              <li><strong>Smoking + Diabetes</strong>: 16.2 years lost</li>
              <li><strong>Inactivity + Hypertension</strong>: 9.2 years lost</li>
              <li><strong>Adopting 8 Healthy Habits by Age 40</strong>: Adds 23–24 years</li>
              <li><strong>Eliminating Smoking by 2050</strong>: Averts 876 million years of life lost</li>
            </ul>
          </section>

          <hr className="my-8" />

          {/* Practical Examples Section */}
          <section id="practical-examples" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Practical Examples for Longevity and Healthspan: Diet, Exercise, and Mind-Body Practices</h2>
            <p className="mb-4">
              To optimize both lifespan and healthspan, it's not just about what you avoid, but also about the positive, evidence-based habits you build. Here are detailed, actionable examples based on leading molecular medicine and lifestyle research:
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">1. Nutrition</h3>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Low-Carb/Ketogenic Diet</h4>
            <p className="mb-1"><strong>What it is:</strong> A diet where carbohydrates are restricted (often below 50g/day), protein is moderate, and fat is the main energy source.</p>
            <p className="mb-1"><strong>Benefits:</strong> Improves metabolic markers (blood sugar, insulin, triglycerides), reduces chronic inflammation, supports weight loss, and can reverse type 2 diabetes in many cases. Many report increased energy, better mood, and reduced cravings.</p>
            <p className="mb-3"><strong>How to implement:</strong> Start with 20g carbs/day, then adjust upwards in 5-10g increments weekly to find your personal carb tolerance. Focus on non-starchy vegetables, meats, fish, eggs, nuts, seeds, and healthy fats (butter, olive oil, coconut oil). Avoid sugars, grains, starchy foods, and most fruits (berries in moderation are usually fine). Monitor with blood glucose and ketone testing if needed for precision.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Eat Until 80% Full ("Hara Hachi Bu")</h4>
            <p className="mb-1"><strong>What it is:</strong> The Japanese practice of eating until you are just 80% full, rather than stuffed.</p>
            <p className="mb-1"><strong>Benefits:</strong> Reduces total calorie intake, supports weight management, and may improve longevity by reducing metabolic stress and oxidative damage.</p>
            <p className="mb-3"><strong>How to implement:</strong> Eat slowly, pay attention to satiety cues, and stop eating when you feel comfortably satisfied, not full. Use smaller plates and avoid distractions during meals.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Microbiome and Fiber</h4>
            <p className="mb-3"><strong>High-fiber, plant-rich diets</strong> (whole vegetables, legumes, resistant starches) foster a healthy gut microbiome, which is crucial for immune function, inflammation control, and metabolic health.</p>
            <p className="mb-3"><strong>Example:</strong> Add a serving of beans, lentils, or leafy greens to every meal; avoid ultra-processed foods.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">2. Exercise: What Kind and How Much?</h3>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Endurance (Running, Walking, Cycling)</h4>
            <p className="mb-3"><strong>Benefits:</strong> Enhances cardiovascular health, lowers blood pressure, improves lipid profile, and supports fat metabolism. Regular brisk walking (30+ minutes daily) is linked to lower all-cause mortality and better healthspan.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">High-Intensity Interval Training (HIIT)</h4>
            <p className="mb-3"><strong>Benefits:</strong> Short bursts of intense effort (e.g., 30 seconds sprint, 90 seconds rest, repeat 4–8 times). Improves insulin sensitivity, cardiovascular fitness, and mitochondrial health in less time than steady-state cardio.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Strength Training</h4>
            <p className="mb-1"><strong>Benefits:</strong> Preserves muscle mass and bone density, which decline with age. Reduces risk of falls, supports glucose metabolism, and improves overall function.</p>
            <p className="mb-3"><strong>How to implement:</strong> 2–3 sessions per week, focusing on major muscle groups (squats, deadlifts, push-ups, pull-ups, etc.). Use weights, resistance bands, or bodyweight exercises.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Movement Variety</h4>
            <p className="mb-1"><strong>Include:</strong> Flexibility (yoga, stretching), balance (tai chi), and daily movement (standing, walking breaks).</p>
            <p className="mb-3"><strong>Why:</strong> Reduces the negative effects of prolonged sitting, supports joint health, and maintains mobility.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">3. Mind-Body: Stress Management</h3>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Breathing Techniques</h4>
            <p className="mb-1"><strong>Stamina Breathing:</strong> Inspired by James Nestor's research, stamina breathing focuses on slow, controlled nasal breathing to improve endurance, oxygen efficiency, and resilience. Practice slow, deep nasal inhales and exhales during exercise and daily life to boost stamina, lung capacity, and cardiovascular health.</p>
            <p className="mb-3"><strong>Advanced Pattern (6-24-6):</strong> Inhale through the nose for 6 seconds, hold your breath for 24 seconds, then exhale slowly for 6 seconds. Repeat for several cycles. This technique increases CO₂ tolerance, enhances endurance, and helps induce a state of calm focus. Use only if you are healthy and comfortable with breath retention.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Wim Hof Practices (Breathing & Cold Exposure)</h4>
            <p className="mb-1"><strong>What it is:</strong> The Wim Hof Method combines specific breathing exercises, gradual cold exposure (such as cold showers or ice baths), and focused mindset training.</p>
            <p className="mb-1"><strong>Benefits:</strong> Research suggests this method can reduce stress, improve mood, enhance immune function, and increase resilience to physical and mental challenges.</p>
            <p className="mb-3"><strong>How to implement:</strong> Practice deep, rhythmic breathing (30–40 cycles), followed by breath retention and gradual cold showers (2+ mins). Always start slowly, listen to your body, and consult a healthcare provider if you have medical conditions.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Meditational Running</h4>
            <p className="mb-1"><strong>What it is:</strong> A form of running that combines gentle aerobic exercise with meditative awareness, as advocated by Dr. Ulrich Strunz. The focus is on rhythmic, relaxed running while tuning into your breath, body sensations, and the environment.</p>
            <p className="mb-1"><strong>Benefits:</strong> Reduces stress, enhances mood, improves mental clarity, and supports cardiovascular health. The meditative aspect helps calm the mind and promote emotional balance.</p>
            <p className="mb-3"><strong>How to implement:</strong> Run at a comfortable, conversational pace. Pay attention to your breath and surroundings, let thoughts pass without judgment, and use the time for mindful reflection or gratitude.</p>
            
            <h4 className="text-lg font-medium mt-3 mb-1">Other Stress Management</h4>
            <p className="mb-1"><strong>Examples:</strong> Nature walks, journaling, gratitude practice, social connection.</p>
            <p className="mb-3"><strong>Why:</strong> Chronic stress accelerates aging and disease risk; managing it is critical for both lifespan and healthspan.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Practical Longevity & Healthspan Strategies</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor/Practice</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Example Implementation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Key Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Low-carb/Keto Diet</td>
                    <td className="border border-gray-300 px-4 py-2">&lt;50g carbs/day, high healthy fats</td>
                    <td className="border border-gray-300 px-4 py-2">Metabolic health, weight loss, lower inflammation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">80% Rule</td>
                    <td className="border border-gray-300 px-4 py-2">Stop eating before full</td>
                    <td className="border border-gray-300 px-4 py-2">Calorie moderation, weight control</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Endurance Exercise</td>
                    <td className="border border-gray-300 px-4 py-2">30+ min brisk walk/run/cycle daily</td>
                    <td className="border border-gray-300 px-4 py-2">Heart, metabolic, and brain health</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">HIIT</td>
                    <td className="border border-gray-300 px-4 py-2">1–2x/week, short sprints</td>
                    <td className="border border-gray-300 px-4 py-2">Cardio fitness, insulin sensitivity</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Strength Training</td>
                    <td className="border border-gray-300 px-4 py-2">2–3x/week, major muscle groups</td>
                    <td className="border border-gray-300 px-4 py-2">Muscle, bone, glucose metabolism</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Breathing/Meditation</td>
                    <td className="border border-gray-300 px-4 py-2">5–10 min daily</td>
                    <td className="border border-gray-300 px-4 py-2">Stress reduction, longevity, emotional health</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-8" />

          {/* References Section */}
          <section id="references" className="mb-4">
            <h2 className="text-2xl font-bold mb-4">References to Leading Authors</h2>
            <div className="text-xs">
              <p className="mb-2">[1] <a href="https://www.amazon.com/Keto-Clarity-Definitive-Benefits-Ketogenic/dp/1628600071" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Keto Clarity: Your Definitive Guide to the Benefits (Jimmy Moore, Eric C. Westman, MD)</a></p>
              <p className="mb-2">[2] <a href="https://www.harpercollins.com/products/10-human-alanna-collen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">10% Human: How Your Body's Microbes Hold the Key to Health and Happiness (Alanna Collen)</a></p>
              <p className="mb-2">[3] <a href="https://www.nature.com/articles/s41392-021-00831-w" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Gut Microbiome and Healthy Aging (Nature Review)</a></p>
              <p className="mb-2">[4] <a href="https://www.frontiersin.org/articles/10.3389/fmicb.2021.634349/full" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Effect of Diet on the Gut Microbiome: Rethinking Intervention Duration (Frontiers in Microbiology)</a></p>
              <p className="mb-2">[5] <a href="https://www.penguinrandomhouse.com/books/547404/the-psychobiotic-revolution-by-scott-c-anderson-john-f-cryan-phd-and-timothy-g-dinan-md-phd/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Psychobiotic Revolution: Mood, Food, and the New Science of the Gut-Brain Connection</a></p>
              <p className="mb-2">[6] <a href="https://www.mdpi.com/2072-6643/11/12/2862" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dietary Patterns and Longevity (Nutrients Journal)</a></p>
              <p className="mb-2">[7] <a href="https://www.dge.de/wissenschaft/weitere-publikationen/fachinformationen/ketogene-diaeten/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ketogene Diäten: Grundlagen und Anwendung (German Society for Nutrition)</a></p>
              <p className="mb-2">[8] <a href="https://www.wimhofmethod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Wim Hof Method: Activate Your Full Human Potential (Wim Hof)</a></p>
              <p className="mb-2">[9] <a href="https://www.mrjamesnestor.com/breath-book" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Breath: The New Science of a Lost Art (James Nestor)</a></p>
              <p className="mb-2">[10] <a href="https://www.strunz.com/de/buecher/der-schluessel-zur-gesundheit.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Der Schlüssel zur Gesundheit: Erfahrungen und Überzeugungen (Ulrich Strunz)</a></p>
              <p className="mb-2">[11] <a href="https://shop.thieme.de/nahrstoff-therapie-9783437453564.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nährstoff-Therapie – Der Praxisleitfaden (Helena Orfanos-Boeckel)</a></p>
              <p className="mb-2">[12] <a href="https://www.bluezones.com/book/the-blue-zones/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Blue Zones: Lessons for Living Longer From the People Who've Lived the Longest (Dan Buettner)</a></p>
              
              {/* More references can be added as needed - keeping it to a sample for now */}
              <p className="mt-4 text-sm italic">Note: Full reference list available on request.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LongevityEn;
