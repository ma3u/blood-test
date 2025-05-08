
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import type { SupportedLanguage } from "@/locales";

// Language display names and flags
const languageInfo: Record<SupportedLanguage, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇬🇧" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  fr: { name: "Français", flag: "🇫🇷" },
  es: { name: "Español", flag: "🇪🇸" },
  ru: { name: "Русский", flag: "🇷🇺" },
  zh: { name: "中文", flag: "🇨🇳" },
  ja: { name: "日本語", flag: "🇯🇵" }
};

export default function LanguageSwitcher() {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-16 md:w-auto px-3 text-base font-medium flex gap-2 items-center"
          aria-label="Select language"
        >
          <span aria-hidden="true">{languageInfo[language].flag}</span>
          <span className="sr-only md:not-sr-only">{languageInfo[language].name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => {
              setLanguage(lang);
              setIsOpen(false);
            }}
            className={`flex gap-2 items-center ${
              language === lang ? "font-semibold bg-accent" : ""
            }`}
          >
            <span aria-hidden="true">{languageInfo[lang].flag}</span>
            <span>{languageInfo[lang].name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
