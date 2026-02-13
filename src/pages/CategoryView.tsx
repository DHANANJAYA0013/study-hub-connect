import { useState, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/lms/Header";
import { TopicCard } from "@/components/lms/TopicCard";
import { subjects } from "@/data/subjects";
import { ArrowLeft, Calculator, Microscope, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoryView() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get category name
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || "";

  // Get unique topics for this category
  const topics = useMemo(() => {
    const topicMap = new Map<string, { videoCount: number; classCount: number }>();
    
    subjects
      .filter(subject => subject.section === categoryName)
      .forEach(subject => {
        if (subject.topic) {
          const current = topicMap.get(subject.topic) || { videoCount: 0, classCount: 0 };
          topicMap.set(subject.topic, {
            videoCount: current.videoCount + subject.videos.length,
            classCount: subject.class ? current.classCount + 1 : current.classCount
          });
        }
      });

    const topicIcons: Record<string, { icon: React.ReactNode; color: string; description: string }> = {
      Maths: {
        icon: <Calculator className="h-7 w-7 text-white" />,
        color: "from-purple-500 to-pink-600",
        description: "Mathematical concepts and problem-solving activities"
      },
      Science: {
        icon: <Microscope className="h-7 w-7 text-white" />,
        color: "from-blue-500 to-indigo-600",
        description: "Scientific experiments and interactive activities"
      },
      Box1: {
        icon: <BookOpen className="h-7 w-7 text-white" />,
        color: "from-orange-500 to-red-600",
        description: "Experiential learning activities collection 1"
      },
      Box2: {
        icon: <BookOpen className="h-7 w-7 text-white" />,
        color: "from-pink-500 to-rose-600",
        description: "Experiential learning activities collection 2"
      },
      Line: {
        icon: <Code className="h-7 w-7 text-white" />,
        color: "from-cyan-500 to-blue-600",
        description: "Geometric concepts exploring lines and patterns"
      },
      Circle: {
        icon: <Code className="h-7 w-7 text-white" />,
        color: "from-teal-500 to-green-600",
        description: "Geometric concepts exploring circles and curves"
      }
    };

    return Array.from(topicMap.entries()).map(([topicName, counts]) => ({
      name: topicName,
      videoCount: counts.videoCount,
      classCount: counts.classCount,
      icon: topicIcons[topicName]?.icon || <BookOpen className="h-7 w-7 text-white" />,
      color: topicIcons[topicName]?.color || "from-gray-500 to-gray-600",
      description: topicIcons[topicName]?.description || `${topicName} activities and content`
    }));
  }, [categoryName]);

  const handleTopicClick = useCallback((topicName: string) => {
    navigate(`/category/${category}/topic/${topicName.toLowerCase()}`);
  }, [category, navigate]);

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 space-y-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{categoryName}</h1>
            <p className="text-muted-foreground">
              {topics.length} topics available
            </p>
          </div>
        </div>

        {/* Topics */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Browse Topics</h2>
            <p className="text-muted-foreground">Choose a topic to explore activities and classes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TopicCard
                key={topic.name}
                name={topic.name}
                description={topic.description}
                color={topic.color}
                icon={topic.icon}
                videoCount={topic.videoCount}
                classCount={topic.classCount}
                onClick={() => handleTopicClick(topic.name)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
