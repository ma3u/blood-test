
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

// This component is no longer rendered directly, but its content is used in the dialog
const IntroductionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">{t("intro.title")}</h2>
          <h3 className="text-xl text-blue-700 mb-4">{t("intro.subtitle")}</h3>
          
          <p className="text-gray-700 mb-6">
            {t("intro.welcome")} {" "}
            <Link to="/longevity" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Learn more about longevity and healthspan
            </Link>.
          </p>
          
          <h4 className="text-xl font-semibold text-blue-700 mb-3">{t("intro.why.title")}</h4>
          <p className="text-gray-700 mb-4">{t("intro.why.content")}</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-gray-700">{t("intro.why.point1")}</li>
            <li className="text-gray-700">{t("intro.why.point2")}</li>
            <li className="text-gray-700">{t("intro.why.point3")}</li>
          </ul>
          
          <Separator className="my-6" />
          
          <h4 className="text-xl font-semibold text-blue-700 mb-3">{t("intro.next.title")}</h4>
          <p className="text-gray-700 mb-4">{t("intro.next.content")}</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-700">{t("intro.next.point1")}</li>
            <li className="text-gray-700">{t("intro.next.point2")}</li>
            <li className="text-gray-700">{t("intro.next.point3")}</li>
            <li className="text-gray-700">{t("intro.next.point4")}</li>
            <li className="text-gray-700">{t("intro.next.point5")}</li>
          </ul>
          
          <p className="text-gray-700 italic mb-6">{t("intro.next.conclusion")}</p>
          
          <Separator className="my-6" />
          
          <h4 className="text-xl font-semibold text-blue-700 mb-3">{t("intro.feedback.title")}</h4>
          <p className="text-gray-700 mb-4">{t("intro.feedback.content")}</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-700">{t("intro.feedback.point1")}</li>
            <li className="text-gray-700">{t("intro.feedback.point2")}</li>
            <li className="text-gray-700">{t("intro.feedback.point3")}</li>
          </ul>
          
          <p className="text-gray-700 mb-3">{t("intro.feedback.conclusion")}</p>
          <p className="text-gray-700 font-medium">{t("intro.feedback.question")}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntroductionSection;
