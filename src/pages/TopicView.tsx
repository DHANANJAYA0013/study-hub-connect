import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/lms/Header";
import { SearchBar } from "@/components/lms/SearchBar";
import { SubjectGrid } from "@/components/lms/SubjectGrid";
import { VideoPlayer, VideoList } from "@/components/lms/VideoComponents";
import { ClassFilter } from "@/components/lms/ClassFilter";
import { subjects, Subject, Video } from "@/data/subjects";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideoProgress } from "@/hooks/useVideoProgress";

export default function TopicView() {
  const { category, topic } = useParams<{ category: string; topic: string }>();
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [shouldAutoPlayNext, setShouldAutoPlayNext] = useState(false);
  const { saveProgress, getProgress, getStartTime } = useVideoProgress();
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const selectedVideoRef = useRef<Video | null>(null);
  
  // Keep ref in sync with state
  useEffect(() => {
    selectedVideoRef.current = selectedVideo;
  }, [selectedVideo]);

  // Get category and topic names
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || "";
  const topicName = topic?.charAt(0).toUpperCase() + topic?.slice(1) || "";

  // Filter subjects by category and topic
  const topicSubjects = useMemo(() => {
    return subjects.filter(
      subject => 
        subject.section === categoryName && 
        subject.topic === topicName
    );
  }, [categoryName, topicName]);

  const filteredSubjects = useMemo(() => {
    let filtered = topicSubjects;
    
    // Filter by class if selected
    if (selectedClass) {
      filtered = filtered.filter(subject => subject.class === selectedClass);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((subject) => {
        const matchesSubject = 
          subject.name.toLowerCase().includes(query) ||
          subject.description.toLowerCase().includes(query);
        
        const matchesVideo = subject.videos.some(
          (video) =>
            video.title.toLowerCase().includes(query) ||
            video.description.toLowerCase().includes(query)
        );
        
        return matchesSubject || matchesVideo;
      });
    }
    
    return filtered;
  }, [topicSubjects, searchQuery, selectedClass]);

  const classCounts = useMemo(() => {
    const counts: { class: string; count: number }[] = [];
    const classMap = new Map<string, number>();
    
    topicSubjects.forEach(subject => {
      if (subject.class) {
        const current = classMap.get(subject.class) || 0;
        classMap.set(subject.class, current + subject.videos.length);
      }
    });
    
    classMap.forEach((count, className) => {
      counts.push({ class: className, count });
    });
    
    return counts.sort((a, b) => a.class.localeCompare(b.class));
  }, [topicSubjects]);

  const handleSelectSubject = useCallback((subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedVideo(subject.videos[0] || null);
    setShouldAutoPlayNext(false);
    
    // Scroll to video section after a short delay to allow state update
    setTimeout(() => {
      videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const handleVideoTimeUpdate = useCallback((currentTime: number, duration: number) => {
    if (selectedVideoRef.current) {
      saveProgress(selectedVideoRef.current.id, currentTime, duration);
    }
  }, [saveProgress]);

  const handleSelectVideo = useCallback((video: Video) => {
    setSelectedVideo(video);
    setShouldAutoPlayNext(false);
  }, []);

  const currentVideoIndex = useMemo(() => {
    if (!selectedSubject || !selectedVideo) {
      return -1;
    }

    return selectedSubject.videos.findIndex((video) => video.id === selectedVideo.id);
  }, [selectedSubject, selectedVideo]);

  const hasNextVideo = currentVideoIndex >= 0 && selectedSubject ? currentVideoIndex < selectedSubject.videos.length - 1 : false;

  const handlePlayNextVideo = useCallback(() => {
    if (!selectedSubject || currentVideoIndex < 0) {
      return;
    }

    const nextVideo = selectedSubject.videos[currentVideoIndex + 1];
    if (nextVideo) {
      setShouldAutoPlayNext(true);
      setSelectedVideo(nextVideo);
    }
  }, [selectedSubject, currentVideoIndex]);

  const handleAutoPlayHandled = useCallback(() => {
    setShouldAutoPlayNext(false);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleClassSelect = useCallback((classValue: string | null) => {
    setSelectedClass(classValue);
  }, []);

  // Show loading state while auth is initializing
  if (loading) {
    return null;
  }

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-4 sm:py-6 md:py-8 px-4 space-y-6 sm:space-y-8">
        {/* Header with Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/category/${category}`)}
            className="gap-2 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to {categoryName}</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{categoryName} - {topicName}</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {topicSubjects.length} classes available
            </p>
          </div>
        </div>

        {/* Search */}
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search classes and videos..."
        />

        {/* Subjects */}
        <section>
          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Browse Classes</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Choose a class to start learning</p>
            </div>
            
            {/* Class Filter - only show if there are classes */}
            {classCounts.length > 0 && (
              <ClassFilter
                selectedClass={selectedClass}
                onSelectClass={handleClassSelect}
                classCounts={classCounts}
              />
            )}
          </div>
          
          <SubjectGrid
            subjects={filteredSubjects}
            selectedSubject={selectedSubject}
            onSelectSubject={handleSelectSubject}
          />
        </section>

        {/* Video Section */}
        {selectedSubject && (
          <section className="animate-fade-in" ref={videoSectionRef}>
            {selectedVideo ? (
              <>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">Now Watching</h2>
                    <p className="text-sm sm:text-base text-muted-foreground">From {selectedSubject.name}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="lg:col-span-2">
                    <VideoPlayer
                      video={selectedVideo}
                      startTime={getStartTime(selectedVideo.id)}
                      onTimeUpdate={handleVideoTimeUpdate}
                      wasCompleted={getProgress(selectedVideo.id).completed}
                      onPlayNext={handlePlayNextVideo}
                      hasNextVideo={hasNextVideo}
                      autoPlay={shouldAutoPlayNext}
                      onAutoPlayHandled={handleAutoPlayHandled}
                    />
                  </div>
                  
                  <div className="lg:col-span-1">
                    <VideoList
                      subject={selectedSubject}
                      selectedVideo={selectedVideo}
                      onSelectVideo={handleSelectVideo}
                      getProgress={getProgress}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8 sm:py-12 bg-muted/30 rounded-lg">
                <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-muted-foreground mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">No Videos Available</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Videos for {selectedSubject.name} will be added soon.</p>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
