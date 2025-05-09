
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { UserCircle, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import A11yLanguageSwitcher from "@/components/A11yLanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-background sticky top-0 z-10 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Blood Test Oracle
        </Link>
        
        <nav className="flex items-center space-x-4">
          <A11yLanguageSwitcher />
          <AccessibilityMenu />
          <Link to="/profile" className="flex items-center gap-1 text-sm">
            <UserCircle size={16} />
            <span>{t("profile.title")}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
