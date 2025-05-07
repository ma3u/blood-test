
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="bg-[#2596be] text-white border-b border-blue-400">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">{t("app.title")}</h1>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <p className="text-xs text-white">{t("app.subtitle")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
