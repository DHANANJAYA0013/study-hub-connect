import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { memo } from "react";

interface ClassFilterProps {
  selectedClass: string | null;
  onSelectClass: (classValue: string | null) => void;
  classCounts: { class: string; count: number }[];
}

export const ClassFilter = memo(function ClassFilter({ selectedClass, onSelectClass, classCounts }: ClassFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <GraduationCap className="h-4 w-4" />
        <span className="font-medium">Filter by Class:</span>
      </div>
      
      <Button
        variant={selectedClass === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectClass(null)}
        className="h-8"
      >
        All Classes
        <Badge variant="secondary" className="ml-2">
          {classCounts.reduce((acc, c) => acc + c.count, 0)}
        </Badge>
      </Button>

      {classCounts.map(({ class: classValue, count }) => (
        <Button
          key={classValue}
          variant={selectedClass === classValue ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectClass(classValue)}
          className="h-8"
        >
          {classValue}
          <Badge variant="secondary" className="ml-2">
            {count}
          </Badge>
        </Button>
      ))}
    </div>
  );
});
