
import React from "react";

const LoadingState: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF6E2] flex items-center justify-center">
      <div className="text-center p-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-blue-800 font-medium">Loading Blood Test Oracle...</p>
      </div>
    </div>
  );
};

export default LoadingState;
