
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

type Language = "en" | "de";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "app.title": "Blood Test Oracle",
    "app.subtitle": "Medical Analysis Tool",
    "page.title": "Blood Test Analysis",
    "page.description": "Enter your blood test values or upload test results for instant analysis and interpretation",
    "learn.more": "Learn more",
    "language.toggle": "DE | EN",
    "dialog.title": "Welcome to mabu.red",
    "disclaimer.title": "Disclaimer",
    "back.to.test": "Back to Test Input",
    "footer.text": "Blood Test Oracle - A medical analysis tool for educational purposes",
  },
  de: {
    "app.title": "Bluttest-Orakel",
    "app.subtitle": "Medizinisches Analysewerkzeug",
    "page.title": "Bluttest-Analyse",
    "page.description": "Geben Sie Ihre Blutwerte ein oder laden Sie Testergebnisse für eine sofortige Analyse und Interpretation hoch",
    "learn.more": "Mehr erfahren",
    "language.toggle": "DE | EN",
    "dialog.title": "Willkommen bei mabu.red",
    "disclaimer.title": "Haftungsausschluss",
    "back.to.test": "Zurück zur Testeingabe",
    "footer.text": "Bluttest-Orakel - Ein medizinisches Analysewerkzeug für Bildungszwecke",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "de" ? "de" : "en";
  };

  const [language, setLanguage] = useState<Language>(() => {
    // Try to get from localStorage first
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage ? savedLanguage : getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
