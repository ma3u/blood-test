
import { SupportedLanguage } from "@/locales";

export const getPageHeadline = (language: SupportedLanguage): string => {
  switch (language) {
    case 'de':
      return "Bluttest-Analyse";
    case 'fr':
      return "Analyse de Test Sanguin";
    case 'es':
      return "Análisis de Prueba de Sangre";
    case 'ru':
      return "Анализ крови";
    case 'zh':
      return "血液测试分析";
    case 'ja':
      return "血液検査分析";
    default:
      return "Blood Test Analysis";
  }
};

export const getPageDescription = (language: SupportedLanguage): string => {
  switch (language) {
    case 'de':
      return "Geben Sie Ihre Blutwerte ein oder laden Sie Testergebnisse für eine sofortige Analyse und Interpretation hoch";
    case 'fr':
      return "Entrez vos valeurs de test sanguin ou téléchargez les résultats pour une analyse et une interprétation instantanées";
    case 'es':
      return "Ingrese sus valores de prueba de sangre o cargue resultados para un análisis e interpretación inmediatos";
    case 'ru':
      return "Введите результаты анализа крови или загрузите их для мгновенного анализа и интерпретации";
    case 'zh':
      return "输入您的血液测试值或上传测试结果以获取即时分析和解释";
    case 'ja':
      return "血液検査値を入力するか、テスト結果をアップロードして即時分析と解釈を得る";
    default:
      return "Enter your blood test values or upload test results for instant analysis and interpretation";
  }
};
