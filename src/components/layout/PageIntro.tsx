
import React from "react";

interface PageIntroProps {
  title: string;
  description: string;
}

const PageIntro = ({ title, description }: PageIntroProps) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default PageIntro;
