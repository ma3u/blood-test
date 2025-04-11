
import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Blood Test Oracle</h1>
          <p className="text-sm text-gray-500">Medical Analysis Tool</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
