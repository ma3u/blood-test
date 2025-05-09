
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";

const PersonalJourneySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">My Personal Journey</h2>
      <p className="mb-4">Growing up, I watched my parents struggle with serious health issues—problems that were largely the result of unhealthy habits: smoking, poor diet, lack of physical activity, and chronic stress. Their experiences became a powerful warning for me. I saw firsthand how smoking, physical inactivity, and poor nutrition can lead to years lost from both lifespan and healthspan, and I realized that I didn't want to follow the same path. Avoiding smoking became a conscious priority in my own lifestyle changes.</p>
      <p className="mb-4">A few years ago, I faced my own health wake-up call. My cholesterol values were high, and I was teetering on the edge of being overweight. The numbers were clear: if I didn't change, I could be heading toward the same fate as my parents. But research shows that genetics account for less than 2% of mortality risk, while about 17% is shaped by modifiable lifestyle and environmental factors. That meant my future was largely in my own hands.</p>
    </section>
  );
};

export default PersonalJourneySection;
