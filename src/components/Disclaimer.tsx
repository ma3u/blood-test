
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Disclaimer = () => {
  const { t, language } = useLanguage();
  
  return (
    <Alert className="mt-12 border-2 border-blue-200 bg-blue-50">
      <Info className="h-5 w-5 text-blue-800" />
      <AlertTitle className="text-lg font-semibold text-blue-800">{t("disclaimer.title")}</AlertTitle>
      <AlertDescription className="mt-3 space-y-4 text-blue-700">
        <p>{t("disclaimer.paragraph1")}</p>
        <p>{t("disclaimer.paragraph2")}</p>
        <p>{t("disclaimer.paragraph3")}</p>
        <p className="font-medium">{t("disclaimer.paragraph4")}</p>
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;
