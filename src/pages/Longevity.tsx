
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import PageIntro from "@/components/layout/PageIntro";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/components/SEOHead";

const Longevity = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF6E2]">
      <SEOHead 
        title="My Personal Journey to Longevity and Healthspan"
        description="Insights on longevity, healthspan, and evidence-based lifestyle practices for optimal health and well-being."
      />

      <div className="container mx-auto py-8 px-4">
        <PageIntro 
          title="My Personal Journey to Longevity and Healthspan"
          description="Evidence-based approaches to extending both lifespan and healthspan"
        />

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">My Personal Journey</h2>
            <p className="mb-4">Growing up, I watched my parents struggle with serious health issues—problems that were largely the result of unhealthy habits: smoking, poor diet, lack of physical activity, and chronic stress. Their experiences became a powerful warning for me. I saw firsthand how smoking, physical inactivity, and poor nutrition can lead to years lost from both lifespan and healthspan, and I realized that I didn't want to follow the same path. Avoiding smoking became a conscious priority in my own lifestyle changes.</p>
            <p className="mb-4">A few years ago, I faced my own health wake-up call. My cholesterol values were high, and I was teetering on the edge of being overweight. The numbers were clear: if I didn't change, I could be heading toward the same fate as my parents. But research shows that genetics account for less than 2% of mortality risk, while about 17% is shaped by modifiable lifestyle and environmental factors. That meant my future was largely in my own hands.</p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Proactive Diagnostics and Self-Monitoring</h2>
            <p className="mb-4">To ensure a holistic and proactive approach to my health and longevity, I have established a routine of regular diagnostic checks and continuous self-monitoring. This comprehensive strategy includes laboratory analysis, advanced molecular diagnostics, and digital health tracking, all aimed at early detection of risk factors and optimization of my healthspan.</p>
            
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Regular Laboratory Diagnostics</h3>
            <p className="mb-4"><strong>Blood Values:</strong> I routinely monitor standard blood markers such as cholesterol (total, LDL, HDL, triglycerides), fasting glucose, HbA1c, liver and kidney function, inflammatory markers (hs-CRP), vitamin D, magnesium, zinc, and homocysteine. These values provide insights into my metabolic health, cardiovascular risk, and micronutrient status.</p>
            <p className="mb-4"><strong>Amino Acid Profile:</strong> Periodically, I assess my amino acid spectrum to detect deficiencies or imbalances. Essential and conditionally essential amino acids such as tryptophan, lysine, methionine, leucine, isoleucine, valine, glutamine, and glycine are particularly important for muscle maintenance, immune function, and neurotransmitter balance.</p>
            <p className="mb-4"><strong>Micronutrient Status:</strong> Supplementary checks for vitamins (C, E, B-complex, coenzyme Q10, alpha-lipoic acid) and minerals (chromium, magnesium) help identify subclinical deficiencies that may affect aging, immunity, and energy metabolism.</p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Microbiome Analysis</h3>
            <p className="mb-4"><strong>Gut Microbiome Sequencing:</strong> I perform periodic stool-based microbiome analyses to assess the diversity and balance of my gut flora. This includes quantifying beneficial genera (e.g., Bifidobacterium, Akkermansia), evaluating the presence of short-chain fatty acid producers, and screening for dysbiosis or overgrowth of pathogenic species.</p>
            <p className="mb-4"><strong>Interpretation and Action:</strong> Insights from microbiome testing guide my dietary choices, especially fiber and prebiotic intake, and help me personalize my probiotic supplementation. A healthy, diverse microbiome is now recognized as a critical pillar for metabolic health, immune regulation, and even mental well-being.</p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Digital Fitness and Health Tracking (Apple Health & Devices)</h3>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li><strong>VO2Max:</strong> I track my VO2Max as a marker of aerobic fitness and cardiovascular health. Improvements here are linked to lower all-cause mortality and enhanced healthspan.</li>
              <li><strong>Resting Heart Rate and Heart Rate Variability (HRV):</strong> Both are monitored continuously; a lower resting heart rate and higher HRV are signs of good cardiovascular and autonomic health.</li>
              <li><strong>Blood Pressure:</strong> Regular readings help me detect early hypertension and assess the impact of lifestyle changes.</li>
              <li><strong>Body Composition:</strong> Weight, BMI, body fat percentage, and waist circumference are tracked to monitor metabolic health and prevent obesity-related risks.</li>
              <li><strong>Activity Metrics:</strong> Steps per day, active energy expenditure, exercise minutes, and workout types (endurance, strength, HIIT) are all logged to ensure I meet recommended activity levels.</li>
              <li><strong>Sleep Tracking:</strong> I monitor sleep duration and quality, as restorative sleep is essential for recovery, hormonal balance, and cognitive function.</li>
              <li><strong>Blood Oxygen Saturation (SpO2):</strong> Periodic checks, especially during exercise or sleep, help ensure adequate oxygenation and detect potential respiratory issues.</li>
              <li><strong>ECG/EKG:</strong> If available, I use this feature for early detection of arrhythmias or other cardiac abnormalities.</li>
              <li><strong>Mindfulness Minutes:</strong> Tracking meditation and breathing exercises supports my stress management and mental resilience.</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Integrating Results for Personalized Prevention</h3>
            <p className="mb-4">By combining regular laboratory diagnostics, in-depth microbiome analysis, and continuous digital health tracking, I gain a multidimensional understanding of my health. This approach enables me to:</p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>Detect early warning signs before symptoms arise.</li>
              <li>Tailor my nutrition, supplementation, and lifestyle interventions (e.g., adjusting fiber intake for microbiome health, optimizing amino acid supply for muscle and immune support, or targeting specific deficiencies with orthomolecular supplements).</li>
              <li>Monitor the effectiveness of interventions in real time and adjust as needed.</li>
            </ul>
            <p className="mb-4">This comprehensive diagnostic and monitoring routine forms the foundation of my strategy to extend both lifespan and healthspan, allowing me to age actively and healthily, despite my genetic predispositions and family history.</p>
          </section>

          <Separator className="my-8" />

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

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Factors Influencing Longevity and Healthspan: Evidence-Based Overview</h2>
            
            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Key Findings Summary</h3>
            <p className="mb-4">Below is a comprehensive analysis of critical factors, their quantified impacts, and supporting evidence.</p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Positive Factors Enhancing Longevity and Healthspan</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Longevity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Healthspan</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Regular Physical Activity</td>
                    <td className="border border-gray-300 px-4 py-2">Adds 4.5 years</td>
                    <td className="border border-gray-300 px-4 py-2">Reduces risk of 17 diseases (e.g., CVD, diabetes)</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://www.tandfonline.com/doi/full/10.1080/02640414.2020.1803630" className="text-blue-600 hover:underline">Source 1</a>, <a href="https://www.nature.com/articles/s41598-020-61241-6" className="text-blue-600 hover:underline">Source 2</a></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">- Aerobic (e.g., running)</td>
                    <td className="border border-gray-300 px-4 py-2">25–40% lower mortality</td>
                    <td className="border border-gray-300 px-4 py-2">Improves cardiovascular health</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://www.nature.com/articles/s41598-020-61241-6" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">- Resistance Training</td>
                    <td className="border border-gray-300 px-4 py-2">15% lower all-cause mortality</td>
                    <td className="border border-gray-300 px-4 py-2">Preserves muscle mass and bone density</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://www.fisiologiadelejercicio.com/wp-content/uploads/2019/05/The-association-of-resistance-training.pdf" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Mediterranean Diet</td>
                    <td className="border border-gray-300 px-4 py-2">23% lower mortality</td>
                    <td className="border border-gray-300 px-4 py-2">Reduces inflammation and metabolic disease risk</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3489349/" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Not Smoking</td>
                    <td className="border border-gray-300 px-4 py-2">Prevents 5–10 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Lowers risk of 21 diseases</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://onlinelibrary.wiley.com/doi/10.1111/add.16757" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Negative Factors Reducing Longevity and Healthspan</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Longevity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Impact on Healthspan</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Smoking</td>
                    <td className="border border-gray-300 px-4 py-2">5–10 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Increases risk of 21 diseases</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://onlinelibrary.wiley.com/doi/10.1111/add.16757" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Physical Inactivity</td>
                    <td className="border border-gray-300 px-4 py-2">4.7 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Linked to 17 diseases</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://pubmed.ncbi.nlm.nih.gov/33609364/" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Obesity (BMI ≥30)</td>
                    <td className="border border-gray-300 px-4 py-2">3–10 years lost</td>
                    <td className="border border-gray-300 px-4 py-2">Raises diabetes, CVD, and cancer risk</td>
                    <td className="border border-gray-300 px-4 py-2"><a href="https://www.hopkinsarthritis.org/arthritis-news/years-of-life-lost-due-to-obesity/" className="text-blue-600 hover:underline">Source</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

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
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">References</h2>
            <div className="text-sm space-y-2">
              <p><a href="https://www.amazon.com/Keto-Clarity-Definitive-Benefits-Ketogenic/dp/1628600071" className="text-blue-600 hover:underline">[1] Keto Clarity: Your Definitive Guide to the Benefits (Jimmy Moore, Eric C. Westman, MD)</a></p>
              <p><a href="https://www.harpercollins.com/products/10-human-alanna-collen" className="text-blue-600 hover:underline">[2] 10% Human: How Your Body's Microbes Hold the Key to Health and Happiness (Alanna Collen)</a></p>
              <p><a href="https://www.nature.com/articles/s41392-021-00831-w" className="text-blue-600 hover:underline">[3] The Gut Microbiome and Healthy Aging (Nature Review)</a></p>
              <p><a href="https://www.frontiersin.org/articles/10.3389/fmicb.2021.634349/full" className="text-blue-600 hover:underline">[4] Effect of Diet on the Gut Microbiome: Rethinking Intervention Duration (Frontiers in Microbiology)</a></p>
              <p><a href="https://www.penguinrandomhouse.com/books/547404/the-psychobiotic-revolution-by-scott-c-anderson-john-f-cryan-phd-and-timothy-g-dinan-md-phd/" className="text-blue-600 hover:underline">[5] The Psychobiotic Revolution: Mood, Food, and the New Science of the Gut-Brain Connection</a></p>
              <p><a href="https://www.mdpi.com/2072-6643/11/12/2862" className="text-blue-600 hover:underline">[6] Dietary Patterns and Longevity (Nutrients Journal)</a></p>
              <p><a href="https://www.dge.de/wissenschaft/weitere-publikationen/fachinformationen/ketogene-diaeten/" className="text-blue-600 hover:underline">[7] Ketogene Diäten: Grundlagen und Anwendung (German Society for Nutrition)</a></p>
              <p><a href="https://www.wimhofmethod.com/" className="text-blue-600 hover:underline">[8] The Wim Hof Method: Activate Your Full Human Potential (Wim Hof)</a></p>
              <p><a href="https://www.mrjamesnestor.com/breath-book" className="text-blue-600 hover:underline">[9] Breath: The New Science of a Lost Art (James Nestor)</a></p>
              <p><a href="https://www.strunz.com/de/buecher/der-schluessel-zur-gesundheit.html" className="text-blue-600 hover:underline">[10] Der Schlüssel zur Gesundheit: Erfahrungen und Überzeugungen (Ulrich Strunz)</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Longevity;
