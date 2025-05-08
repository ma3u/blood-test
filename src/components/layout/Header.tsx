
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Moon, Sun, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background sticky top-0 z-10 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Blood Test Oracle
        </Link>
        
        <nav className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Link to="/profile" className="flex items-center gap-1 text-sm">
            <UserCircle size={16} />
            <span>{t("profile.title")}</span>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
