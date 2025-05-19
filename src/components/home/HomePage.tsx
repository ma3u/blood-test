
import { BloodTestResult } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import GenderSwitch from "../GenderSwitch";

interface HomePageProps {
  onSubmit: (results: BloodTestResult[]) => void;
  onLearnMoreClick: () => void;
  gender: "male" | "female";
  onGenderChange: (gender: "male" | "female") => void;
}

const HomePage = ({ onSubmit, onLearnMoreClick, gender, onGenderChange }: HomePageProps) => {
  const { t } = useLanguage();
  
  // Your existing component implementation
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          {t("app.title")}
        </h1>
        <p className="text-lg text-gray-600">
          {t("app.subtitle")}
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{t("form.title")}</h2>
        
        <div className="mb-4">
          <GenderSwitch 
            gender={gender} 
            onChange={onGenderChange} 
            className="mb-4"
          />
        </div>
        
        {/* Rest of your component implementation */}
      </div>
      
      <div className="text-center">
        <button
          onClick={onLearnMoreClick}
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          {t("learn.more")}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
