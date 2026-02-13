import { Subject, iconMap } from "@/data/subjects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";
import { memo } from "react";

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
  isSelected: boolean;
}

export const SubjectCard = memo(function SubjectCard({ subject, onClick, isSelected }: SubjectCardProps) {
  const IconComponent = iconMap[subject.icon];

  return (
    <Card
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isSelected
          ? "ring-2 ring-primary shadow-primary"
          : "hover:ring-1 hover:ring-primary/30"
      }`}
    >
      <CardContent className="p-0">
        <div className={`relative h-24 bg-gradient-to-br ${subject.color} p-4`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex h-full items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">
              <PlayCircle className="mr-1 h-3 w-3" />
              {subject.videos.length} videos
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {subject.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {subject.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
});

interface SubjectGridProps {
  subjects: Subject[];
  selectedSubject: Subject | null;
  onSelectSubject: (subject: Subject) => void;
}

export const SubjectGrid = memo(function SubjectGrid({ subjects, selectedSubject, onSelectSubject }: SubjectGridProps) {
  if (subjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">No subjects found</h3>
        <p className="text-muted-foreground">Try adjusting your search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
          onClick={() => onSelectSubject(subject)}
          isSelected={selectedSubject?.id === subject.id}
        />
      ))}
    </div>
  );
});
