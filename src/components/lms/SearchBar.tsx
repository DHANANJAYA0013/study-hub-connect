import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = memo(function SearchBar({
  value,
  onChange,
  placeholder = "Search subjects...",
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative group">
        <Search className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            h-10 sm:h-12 pl-10 sm:pl-12 pr-10 sm:pr-12 text-sm sm:text-base rounded-xl
            border-2 border-border/50
            bg-card
            text-foreground
            font-semibold
            placeholder:text-muted-foreground
            shadow-card
            transition-all
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
          "
        />

        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onChange("")}
            className="absolute right-1 sm:right-2 top-1/2 h-7 w-7 sm:h-8 sm:w-8 -translate-y-1/2 rounded-lg hover:bg-muted"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        )}
      </div>
    </div>
  );
});
