
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="flex items-center gap-1 text-white hover:text-blue-100"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "DE | EN" : "DE | EN"}</span>
    </Button>
  );
};

export default LanguageSwitcher;
