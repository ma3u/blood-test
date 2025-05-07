
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import locales, { SupportedLanguage, TranslationKey } from "../locales";

type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: TranslationKey) => string;
  availableLanguages: SupportedLanguage[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getBrowserLanguage = (): SupportedLanguage => {
    const browserLang = navigator.language.split("-")[0] as SupportedLanguage;
    return browserLang in locales ? browserLang : "en";
  };

  const [language, setLanguage] = useState<SupportedLanguage>(() => {
    // Try to get from localStorage first
    const savedLanguage = localStorage.getItem("language") as SupportedLanguage;
    return savedLanguage && savedLanguage in locales ? savedLanguage : getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: TranslationKey): string => {
    return locales[language][key] || key;
  };

  const availableLanguages: SupportedLanguage[] = ["en", "de", "fr"];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
