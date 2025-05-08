
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
  es: "🇪🇸",
  ru: "🇷🇺",
  zh: "🇨🇳",
  ja: "🇯🇵"
};

// Language names to display in full form
const languageNames: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  ru: "Русский",
  zh: "中文",
  ja: "日本語"
};

const LanguageSwitcher = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 h-8 bg-white text-gray-800 border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`Change language, current language is ${languageNames[language]}`}
        >
          <Globe className="h-4 w-4 mr-1" aria-hidden="true" />
          <span className="mr-1" aria-hidden="true">{languageFlags[language]}</span>
          <span className="text-sm font-medium uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-white border border-gray-300 shadow-lg rounded-md w-48 z-50"
        sideOffset={5}
      >
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`${
              language === lang ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
            } focus:bg-blue-100 focus:text-blue-800 focus:outline-none`}
          >
            <div className="flex items-center w-full px-1 py-1">
              <span className="mr-2" aria-hidden="true">{languageFlags[lang]}</span>
              <span className="font-medium">{languageNames[lang]}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
