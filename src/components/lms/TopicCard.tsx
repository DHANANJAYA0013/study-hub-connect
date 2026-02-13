import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

interface TopicCardProps {
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  videoCount: number;
  classCount: number;
  onClick: () => void;
}

export const TopicCard = memo(function TopicCard({ 
  name, 
  description, 
  color, 
  icon, 
  videoCount, 
  classCount,
  onClick 
}: TopicCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-primary/50"
    >
      <CardContent className="p-0">
        <div className={`relative h-32 bg-gradient-to-br ${color} p-6`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex h-full items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              {icon}
            </div>
            <div className="flex gap-2">
              {classCount > 0 && (
                <Badge variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                  {classCount} Classes
                </Badge>
              )}
              <Badge variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                {videoCount} Videos
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {description}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
