import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import { memo } from "react";

interface SectionFilterProps {
  selectedSection: string | null;
  onSelectSection: (sectionValue: string | null) => void;
  sectionCounts: { section: string; count: number }[];
}

export const SectionFilter = memo(function SectionFilter({ selectedSection, onSelectSection, sectionCounts }: SectionFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
        <Layers className="h-3 w-3 sm:h-4 sm:w-4" />
        <span className="font-medium hidden sm:inline">Filter by Section:</span>
        <span className="font-medium sm:hidden">Section:</span>
      </div>
      
      <Button
        variant={selectedSection === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectSection(null)}
        className="h-7 sm:h-8 text-xs sm:text-sm"
      >
        All
        <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs">
          {sectionCounts.reduce((acc, c) => acc + c.count, 0)}
        </Badge>
      </Button>

      {sectionCounts.map(({ section: sectionValue, count }) => (
        <Button
          key={sectionValue}
          variant={selectedSection === sectionValue ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectSection(sectionValue)}
          className="h-7 sm:h-8 text-xs sm:text-sm"
        >
          {sectionValue}
          <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs">
            {count}
          </Badge>
        </Button>
      ))}
    </div>
  );
});
