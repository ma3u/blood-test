
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] text-white border-b border-gray-700">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#9b87f5]">Blood Test Oracle</h1>
          <p className="text-xs text-gray-300">Medical Analysis Tool</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
