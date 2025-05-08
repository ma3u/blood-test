
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";

/**
 * AccessibilityMenu component provides accessibility options
 * Following WCAG 2.1 AA standards for keyboard navigation and screen reader support
 */
const AccessibilityMenu: React.FC = () => {
  const { t } = useLanguage();
  const [textSize, setTextSize] = useState<"normal" | "large" | "larger">("normal");
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Apply text size change
  const applyTextSize = (size: "normal" | "large" | "larger") => {
    setTextSize(size);
    
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    
    // Remove existing classes
    htmlElement.classList.remove("text-normal", "text-large", "text-larger");
    
    // Apply new class
    htmlElement.classList.add(`text-${size}`);
    
    // Save preference
    localStorage.setItem("accessibility-text-size", size);
  };

  // Toggle high contrast mode
  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    
    if (newValue) {
      htmlElement.classList.add("high-contrast");
    } else {
      htmlElement.classList.remove("high-contrast");
    }
    
    // Save preference
    localStorage.setItem("accessibility-high-contrast", String(newValue));
  };

  // Toggle reduced motion
  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    
    if (newValue) {
      htmlElement.classList.add("reduced-motion");
    } else {
      htmlElement.classList.remove("reduced-motion");
    }
    
    // Save preference
    localStorage.setItem("accessibility-reduced-motion", String(newValue));
  };

  // Load saved preferences on component mount
  React.useEffect(() => {
    const savedTextSize = localStorage.getItem("accessibility-text-size") as "normal" | "large" | "larger" | null;
    const savedHighContrast = localStorage.getItem("accessibility-high-contrast") === "true";
    const savedReducedMotion = localStorage.getItem("accessibility-reduced-motion") === "true";
    
    if (savedTextSize) {
      setTextSize(savedTextSize);
      applyTextSize(savedTextSize);
    }
    
    if (savedHighContrast) {
      setHighContrast(true);
      document.querySelector("html")?.classList.add("high-contrast");
    }
    
    if (savedReducedMotion) {
      setReducedMotion(true);
      document.querySelector("html")?.classList.add("reduced-motion");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="h-8 focus:ring-2 focus:ring-blue-500"
          aria-label="Accessibility options"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-4 w-4 mr-1"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
          </svg>
          <span>A11y</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className="w-56 bg-white border border-gray-200 shadow-lg z-50"
        align="end"
      >
        <DropdownMenuLabel>Accessibility Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-xs font-normal text-gray-500 pl-3">Text Size</DropdownMenuLabel>
        <DropdownMenuItem 
          className={textSize === "normal" ? "bg-blue-50 text-blue-700" : ""} 
          onClick={() => applyTextSize("normal")}
        >
          Normal Text
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={textSize === "large" ? "bg-blue-50 text-blue-700" : ""} 
          onClick={() => applyTextSize("large")}
        >
          Large Text (125%)
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={textSize === "larger" ? "bg-blue-50 text-blue-700" : ""} 
          onClick={() => applyTextSize("larger")}
        >
          Larger Text (150%)
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={toggleHighContrast}>
          <div className="flex items-center justify-between w-full">
            <span>High Contrast</span>
            <div className={`w-9 h-5 flex items-center rounded-full p-1 ${highContrast ? 'bg-blue-600' : 'bg-gray-300'}`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${highContrast ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={toggleReducedMotion}>
          <div className="flex items-center justify-between w-full">
            <span>Reduced Motion</span>
            <div className={`w-9 h-5 flex items-center rounded-full p-1 ${reducedMotion ? 'bg-blue-600' : 'bg-gray-300'}`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${reducedMotion ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilityMenu;
