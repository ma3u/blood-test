
import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

/**
 * SEOHead component for managing Open Graph meta tags and other SEO elements
 * Implements WCAG 2.1 accessibility standards and Open Graph protocol
 */
const SEOHead: React.FC<SEOHeadProps> = ({ 
  title,
  description,
  image = "/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png",
  url = window.location.href,
  type = "website"
}) => {
  const { language, t } = useLanguage();
  
  // Get language-specific default title and description if not provided
  const defaultTitle = title || (() => {
    switch (language) {
      case 'de': return "Bluttest-Analyse";
      case 'fr': return "Analyse de Test Sanguin";
      case 'es': return "Análisis de Prueba de Sangre";
      case 'ru': return "Анализ крови";
      case 'zh': return "血液测试分析";
      case 'ja': return "血液検査分析";
      default: return "Blood Test Analysis";
    }
  })();
  
  const defaultDescription = description || (() => {
    switch (language) {
      case 'de': return "Geben Sie Ihre Blutwerte ein oder laden Sie Testergebnisse für eine sofortige Analyse und Interpretation hoch";
      case 'fr': return "Entrez vos valeurs de test sanguin ou téléchargez les résultats pour une analyse et une interprétation instantanées";
      case 'es': return "Ingrese sus valores de prueba de sangre o cargue resultados para un análisis e interpretación inmediatos";
      case 'ru': return "Введите результаты анализа крови или загрузите их для мгновенного анализа и интерпретации";
      case 'zh': return "输入您的血液测试值或上传测试结果以获取即时分析和解释";
      case 'ja': return "血液検査値を入力するか、テスト結果をアップロードして即時分析と解釈を得る";
      default: return "Enter your blood test values or upload test results for instant analysis and interpretation";
    }
  })();
  
  const siteUrl = window.location.origin;
  const canonicalUrl = `${siteUrl}${window.location.pathname}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="language" content={language} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Blood Test Oracle" />
      <meta property="og:locale" content={language} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Additional Meta Tags for Accessibility and SEO */}
      <html lang={language} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default SEOHead;
