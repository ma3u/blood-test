
import React from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import Impressum from '@/components/Impressum';

const Header = () => {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    checkAuth();
  }, []);

  // Skip to content link for improved keyboard accessibility (WCAG 2.1)
  const skipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 py-3 shadow-sm" role="banner">
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="skip-to-content" 
        onClick={(e) => {
          e.preventDefault();
          skipToContent();
        }}
      >
        Skip to content
      </a>

      <div className="container mx-auto px-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a 
            href="/" 
            className="text-xl font-bold text-blue-800 flex items-center"
            aria-label="Blood Test Oracle Home"
          >
            <span className="hidden sm:inline">Blood Test Oracle</span>
          </a>
        </div>
        
        <nav className="flex items-center space-x-2" role="navigation" aria-label="Main navigation">
          {isAuthenticated ? (
            <>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="focus:ring-2 focus:ring-blue-500"
              >
                <a href="/dashboard" aria-label="Go to dashboard">{t("dashboard")}</a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => supabase.auth.signOut()}
                className="focus:ring-2 focus:ring-blue-500"
                aria-label="Sign out of your account"
              >
                {t("sign.out")}
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="focus:ring-2 focus:ring-blue-500"
              >
                <a href="/auth" aria-label="Sign in to your account">{t("sign.in")}</a>
              </Button>
            </>
          )}
          
          <Impressum />
          
          <div className="flex items-center space-x-2">
            <AccessibilityMenu />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
