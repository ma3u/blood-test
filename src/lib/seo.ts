
/**
 * SEO Configuration
 * Following Open Graph Protocol guidelines: https://ogp.me/
 * and WCAG 2.1 accessibility standards
 */

export interface SEOConfig {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle?: string;
  themeColor: string;
}

export const seoConfig: SEOConfig = {
  siteName: "Blood Test Oracle",
  defaultTitle: "Blood Test Analysis",
  defaultDescription: "Enter your blood test values or upload test results for instant analysis and interpretation",
  defaultImage: "/lovable-uploads/a8f58481-d0d4-4ad7-9810-0adfab52053a.png",
  themeColor: "#ffffff"
};

/**
 * Validates if an Open Graph image meets recommended specifications
 * @param imageUrl URL of the image to validate
 * @returns Promise resolving to a boolean indicating if the image meets specs
 */
export const validateOGImage = async (imageUrl: string): Promise<boolean> => {
  try {
    const img = new Image();
    img.src = imageUrl;
    
    return new Promise((resolve) => {
      img.onload = () => {
        // Facebook recommends OG images of at least 1200 x 630 pixels
        // with aspect ratio of 1.91:1
        const minWidth = 1200;
        const minHeight = 630;
        const idealAspectRatio = 1.91;
        const actualAspectRatio = img.width / img.height;
        const aspectRatioWithinTolerance = Math.abs(actualAspectRatio - idealAspectRatio) < 0.2;
        
        resolve(img.width >= minWidth && img.height >= minHeight && aspectRatioWithinTolerance);
      };
      
      img.onerror = () => {
        resolve(false);
      };
    });
  } catch (error) {
    console.error("Error validating OG image:", error);
    return false;
  }
};

/**
 * Generates structured data in JSON-LD format for better SEO
 * @param data Object containing data for structured data
 * @returns String containing JSON-LD structured data
 */
export const generateStructuredData = (data: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": data.title,
    "description": data.description,
    "url": data.url,
    ...(data.imageUrl && { "image": data.imageUrl }),
    ...(data.datePublished && { "datePublished": data.datePublished }),
    ...(data.dateModified && { "dateModified": data.dateModified }),
    ...(data.authorName && { 
      "author": {
        "@type": "Person",
        "name": data.authorName
      }
    }),
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return JSON.stringify(structuredData);
};
