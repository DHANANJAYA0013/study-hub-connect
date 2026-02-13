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
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Layers className="h-4 w-4" />
        <span className="font-medium">Filter by Section:</span>
      </div>
      
      <Button
        variant={selectedSection === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectSection(null)}
        className="h-8"
      >
        All Sections
        <Badge variant="secondary" className="ml-2">
          {sectionCounts.reduce((acc, c) => acc + c.count, 0)}
        </Badge>
      </Button>

      {sectionCounts.map(({ section: sectionValue, count }) => (
        <Button
          key={sectionValue}
          variant={selectedSection === sectionValue ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectSection(sectionValue)}
          className="h-8"
        >
          {sectionValue}
          <Badge variant="secondary" className="ml-2">
            {count}
          </Badge>
        </Button>
      ))}
    </div>
  );
});
