
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
    fr: "Français"
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
          <span className="flex gap-1">
            {availableLanguages.map((lang) => (
              <span 
                key={lang} 
                className={`
                  px-1 py-0.5 rounded transition-all 
                  ${lang === language ? "font-bold bg-blue-600" : "opacity-80 hover:opacity-100 hover:bg-blue-600/50"}
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage(lang);
                }}
                role="button"
                aria-label={`Switch to ${languageNames[lang]}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setLanguage(lang);
                  }
                }}
              >
                {lang.toUpperCase()}
                {lang !== availableLanguages[availableLanguages.length - 1] && " | "}
              </span>
            ))}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={lang === language ? "bg-muted" : ""}
          >
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
