
import React from "react";

interface PageIntroProps {
  title: string;
  description: string;
}

const PageIntro = ({ title, description }: PageIntroProps) => {
  return (
    <div className="mb-4 text-center">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-white mt-1 text-sm">{description}</p>
    </div>
  );
};

export default PageIntro;
