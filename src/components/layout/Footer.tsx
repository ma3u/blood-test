
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#2596be] text-white border-t border-blue-400 mt-6">
      <div className="container mx-auto py-2 px-4 text-center text-white text-xs">
        {t("footer.text")}
      </div>
    </footer>
  );
};

export default Footer;
