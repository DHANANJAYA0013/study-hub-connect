import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/lms/Header";
import { SearchBar } from "@/components/lms/SearchBar";
import { SubjectGrid } from "@/components/lms/SubjectGrid";
import { VideoPlayer, VideoList } from "@/components/lms/VideoComponents";
import { ClassFilter } from "@/components/lms/ClassFilter";
import { subjects, Subject, Video } from "@/data/subjects";
import { ArrowLeft, BookOpen, PlayCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideoProgress } from "@/hooks/useVideoProgress";

export default function TopicView() {
  const { category, topic } = useParams<{ category: string; topic: string }>();
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [shouldAutoPlayNext, setShouldAutoPlayNext] = useState(false);
  const { saveProgress, getProgress, getStartTime } = useVideoProgress();
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const chapterSectionRef = useRef<HTMLDivElement>(null);
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

  // Compute chapter groups from the selected subject's videos
  const chapterGroups = useMemo(() => {
    if (!selectedSubject) return [];
    const map = new Map<string, number>();
    selectedSubject.videos.forEach(v => {
      if (v.chapterName) {
        map.set(v.chapterName, (map.get(v.chapterName) || 0) + 1);
      }
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, [selectedSubject]);

  // Videos filtered by selected chapter (if chapters exist)
  const chapterVideos = useMemo(() => {
    if (!selectedSubject) return [];
    if (chapterGroups.length === 0) return selectedSubject.videos;
    if (!selectedChapter) return [];
    return selectedSubject.videos.filter(v => v.chapterName === selectedChapter);
  }, [selectedSubject, selectedChapter, chapterGroups]);

  const handleSelectSubject = useCallback((subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setSelectedVideo(null);
    setShouldAutoPlayNext(false);
    const hasChapters = subject.videos.some(v => v.chapterName);
    setTimeout(() => {
      if (hasChapters) {
        chapterSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  const handleSelectChapter = useCallback((chapterName: string) => {
    setSelectedChapter(chapterName);
    setShouldAutoPlayNext(false);
    // Select first video of that chapter
    if (selectedSubject) {
      const first = selectedSubject.videos.find(v => v.chapterName === chapterName) || null;
      setSelectedVideo(first);
    }
    setTimeout(() => {
      videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, [selectedSubject]);

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
    if (!selectedVideo) return -1;
    return chapterVideos.findIndex((video) => video.id === selectedVideo.id);
  }, [chapterVideos, selectedVideo]);

  const hasNextVideo = currentVideoIndex >= 0 ? currentVideoIndex < chapterVideos.length - 1 : false;

  const handlePlayNextVideo = useCallback(() => {
    if (currentVideoIndex < 0) return;
    const nextVideo = chapterVideos[currentVideoIndex + 1];
    if (nextVideo) {
      setShouldAutoPlayNext(true);
      setSelectedVideo(nextVideo);
    }
  }, [chapterVideos, currentVideoIndex]);

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
        {/* <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
        </div> */}
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/category/${category}`)}
            className="gap-2 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            <span >Back to {categoryName}</span>
          </Button>

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {categoryName} - {topicName}
            </h1>
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

        {/* Chapter Topics Section - horizontal row style, distinct from class cards */}
        {selectedSubject && chapterGroups.length > 0 && (
          <section className="animate-fade-in" ref={chapterSectionRef}>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="h-8 w-1 rounded-full bg-primary" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold leading-tight">{selectedSubject.name} — Topics</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{chapterGroups.length} topics · tap to watch</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {chapterGroups.map((ch, idx) => {
                const isActive = selectedChapter === ch.name;
                return (
                  <button
                    key={ch.name}
                    onClick={() => handleSelectChapter(ch.name)}
                    className={`group w-full text-left flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-200 ${isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-card border-border hover:border-primary/50 hover:bg-accent/50 hover:shadow-sm"
                      }`}
                  >
                    {/* Index number */}
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isActive
                        ? "bg-white/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                      {isActive ? <CheckCircle2 className="h-4 w-4" /> : idx + 1}
                    </span>

                    {/* Topic name */}
                    <span className={`flex-1 font-medium text-sm sm:text-base truncate ${isActive ? "text-primary-foreground" : "text-foreground"
                      }`}>
                      {ch.name}
                    </span>

                    {/* Video count pill */}
                    <span className={`flex-shrink-0 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${isActive
                        ? "bg-white/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                      }`}>
                      <PlayCircle className="h-3 w-3" />
                      {ch.count}
                    </span>

                    {/* Arrow */}
                    <ChevronRight className={`flex-shrink-0 h-4 w-4 transition-transform duration-200 ${isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5"
                      }`} />
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Video Section */}
        {selectedSubject && (chapterGroups.length === 0 || selectedChapter) && (
          <section className="animate-fade-in" ref={videoSectionRef}>
            {selectedVideo ? (
              <>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">Now Watching</h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {selectedChapter ? selectedChapter : selectedSubject.name}
                    </p>
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
                      subject={{ ...selectedSubject, videos: chapterVideos }}
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
