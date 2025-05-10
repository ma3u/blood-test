
import React from "react";

interface ErrorStateProps {
  error: string | null;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className="min-h-screen bg-[#FAF6E2] flex items-center justify-center">
      <div className="text-center p-4">
        <p className="text-red-600 font-medium">Error: {error}</p>
        <p className="mt-4">Please refresh the page or contact support.</p>
      </div>
    </div>
  );
};

export default ErrorState;
