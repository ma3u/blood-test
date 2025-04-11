
import { Card, CardContent } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  value: number;
  total: number;
  color: string;
}

const InfoCard = ({ title, value, total, color }: InfoCardProps) => {
  // Calculate percentage for progress bar
  const percentage = Math.round((value / total) * 100);
  
  return (
    <Card className={`border ${color}`}>
      <CardContent className="p-6">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-baseline space-x-2 mt-2">
          <p className="text-4xl font-bold">{value}</p>
          <p className="text-sm opacity-70">of {total}</p>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color.replace('border-', 'bg-').replace('text-', 'bg-')}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
