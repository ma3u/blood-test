
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

// Flag emojis for each language
const languageFlags: Record<string, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸"
};

const LanguageSwitcher = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 h-8">
          <Globe className="h-4 w-4 mr-1" />
          <span className="mr-1">{languageFlags[language]}</span>
          <span className="text-sm uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={language === lang ? "bg-accent" : ""}
          >
            <div className="flex items-center">
              <span className="mr-2">{languageFlags[lang]}</span>
              <span>{lang.toUpperCase()}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
