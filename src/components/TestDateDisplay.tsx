
import React from "react";
import { format } from "date-fns";

interface TestDateDisplayProps {
  date: Date;
}

const TestDateDisplay = ({ date }: TestDateDisplayProps) => {
  return (
    <div className="bg-white border rounded-md p-3 shadow-sm">
      <p className="text-gray-700 font-medium">
        Test Date: <span className="text-blue-600">{format(date, "MMMM d, yyyy")}</span>
      </p>
    </div>
  );
};

export default TestDateDisplay;
