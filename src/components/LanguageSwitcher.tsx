
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SupportedLanguage } from "@/locales";

const LanguageSwitcher = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();

  const languageNames: Record<SupportedLanguage, string> = {
    en: "English",
    de: "Deutsch",
    fr: "Français",
    es: "Español"
  };

  const countryFlags: Record<SupportedLanguage, string> = {
    en: "🇬🇧",
    de: "🇩🇪",
    fr: "🇫🇷",
    es: "🇪🇸"
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-white hover:text-blue-100"
        >
          <Globe className="h-4 w-4 mr-1" />
          <span className="text-lg mr-1">{countryFlags[language]}</span>
          <span>{languageNames[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`${lang === language ? "bg-muted" : ""} flex items-center gap-2`}
          >
            <span className="text-lg">{countryFlags[lang]}</span>
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
