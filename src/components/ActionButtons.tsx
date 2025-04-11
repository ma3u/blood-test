
import React from "react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onUploadAnother: () => void;
  onReviewAndModify: () => void;
  onViewTimeline: () => void;
  hasExtractedValues: boolean;
}

const ActionButtons = ({ 
  onUploadAnother, 
  onReviewAndModify, 
  onViewTimeline,
  hasExtractedValues 
}: ActionButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center mt-8 gap-4">
      <Button 
        onClick={onUploadAnother} 
        variant="secondary" 
        size="lg"
      >
        Enter New Test Values
      </Button>
      {hasExtractedValues && (
        <Button onClick={onReviewAndModify} variant="secondary" size="lg">
          Review & Modify Data
        </Button>
      )}
      <Button onClick={onViewTimeline} variant="default" size="lg">
        View Timeline
      </Button>
    </div>
  );
};

export default ActionButtons;
