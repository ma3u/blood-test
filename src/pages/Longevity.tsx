
import React from "react";
import SEOHead from "@/components/SEOHead";

const Longevity = () => (
  <div className="min-h-screen bg-[#FAF6E2] flex flex-col items-center justify-center">
    <SEOHead 
      title="Longevity Content Moved"
      description="Please select your language-specific longevity page."
    />
    <div className="bg-white rounded-lg shadow-md p-8 mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Longevity Content Simplified</h1>
      <p className="mb-6 text-gray-600">The longevity content is now available as a dedicated page for each language:</p>
      <div className="flex flex-col gap-2 items-center">
        <a href="/LongevityEn" className="text-blue-600 underline">English Version</a>
        <a href="/LongevityDe" className="text-blue-600 underline">Deutsche Version</a>
      </div>
    </div>
  </div>
);

export default Longevity;
