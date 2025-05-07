
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2596be] text-white border-b border-blue-400">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Blood Test Oracle</h1>
          <p className="text-xs text-white">Medical Analysis Tool</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
