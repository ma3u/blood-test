
import { UserProfileForm } from "@/components/profile/UserProfileForm";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";

export default function Profile() {
  const { t } = useLanguage();
  
  return (
    <div className="container max-w-4xl py-8">
      <SEOHead 
        title={t("profile.page.title")} 
        description={t("profile.page.description")} 
      />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("profile.page.title")}</h1>
          <p className="text-muted-foreground mt-2">{t("profile.page.description")}</p>
        </div>
        
        <UserProfileForm />
      </div>
    </div>
  );
}
