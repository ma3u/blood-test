
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BloodValueInput from './BloodValueInput';
import { bloodMarkers } from '@/lib/bloodTestUtils';
import { BloodTestResult } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Info } from 'lucide-react';

interface BloodTestContainerProps {
  onSubmit: (results: BloodTestResult[]) => void;
}

const BloodTestContainer = ({ onSubmit }: BloodTestContainerProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const { toast } = useToast();

  const handleValueChange = (markerId: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [markerId]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const results: BloodTestResult[] = bloodMarkers.map(marker => {
      const value = values[marker.id] || '';
      const numericValue = parseFloat(value);
      const isNormal = !isNaN(numericValue) && 
        numericValue >= marker.minValue && 
        numericValue <= marker.maxValue;
      
      return {
        marker,
        value: numericValue || value,
        isNormal,
        status: isNaN(numericValue) ? 'normal' :
          numericValue < marker.minValue ? 'low' :
          numericValue > marker.maxValue ? 'high' : 'normal'
      };
    });

    onSubmit(results);
    toast({
      title: "Test results submitted",
      description: "Your blood test values have been recorded."
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Blood Test Values</span>
          <div className="flex items-center space-x-2">
            <Info className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">Reference values based on {gender}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={gender} onValueChange={(v) => setGender(v as 'male' | 'female')}>
          <TabsList className="mb-4">
            <TabsTrigger value="male">Male</TabsTrigger>
            <TabsTrigger value="female">Female</TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {bloodMarkers.map((marker) => (
              <BloodValueInput
                key={marker.id}
                marker={marker}
                value={values[marker.id] || ''}
                onChange={(value) => handleValueChange(marker.id, value)}
              />
            ))}
            <div className="flex justify-end mt-6">
              <Button type="submit">
                Analyze Results
              </Button>
            </div>
          </form>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BloodTestContainer;
