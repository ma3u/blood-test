
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import type { SupportedLanguage } from "@/locales";
import { enhanceAccessibility } from "@/lib/accessibilityUtils";

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

// Map of supported languages to their corresponding page routes
const languagePageMap: Record<string, Record<SupportedLanguage, string>> = {
  'longevity': {
    en: '/longevityEn',
    de: '/longevityDe',
    fr: '/longevityEn', // Currently redirecting to English for unsupported languages
    es: '/longevityEn',
    ru: '/longevityEn',
    zh: '/longevityEn',
    ja: '/longevityEn'
  }
};

export default function A11yLanguageSwitcher() {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Apply accessibility enhancements
  const a11yProps = enhanceAccessibility({
    role: "combobox",
    component: "language-selector",
    expanded: isOpen
  });

  // Check if we're on a page that has language-specific versions
  const isLongevityPage = location.pathname.includes('longevity');

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setIsOpen(false);
    
    // If we're on a longevity page, navigate to the corresponding language version
    if (isLongevityPage) {
      navigate(languagePageMap['longevity'][lang]);
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-16 md:w-auto px-3 text-base font-medium flex gap-2 items-center focus-visible:ring-2 focus-visible:ring-offset-2"
          aria-label={`${languageInfo[language].name} - ${t("language.toggle")}`}
          {...a11yProps}
        >
          <span aria-hidden="true">{languageInfo[language].flag}</span>
          <span className="sr-only md:not-sr-only">{languageInfo[language].name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48"
        aria-label="language.toggle" 
      >
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`flex gap-2 items-center ${
              language === lang ? "font-semibold bg-accent" : ""
            }`}
            aria-current={language === lang ? "true" : "false"}
          >
            <span aria-hidden="true">{languageInfo[lang].flag}</span>
            <span>{languageInfo[lang].name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
