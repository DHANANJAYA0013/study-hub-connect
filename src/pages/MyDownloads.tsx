import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useVideoDownload } from "@/hooks/useVideoDownload";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useVideoProgress } from "@/hooks/useVideoProgress";
import { Header } from "@/components/lms/Header";
import { VideoPlayer } from "@/components/lms/VideoComponents";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Video } from "@/data/subjects";
import {
  Download,
  Trash2,
  Play,
  WifiOff,
  Wifi,
  HardDrive,
  Calendar,
  Clock,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import type { OfflineVideoMetadata } from "@/lib/videoStorage";
import { isVideoExpired } from "@/lib/videoStorage";

export default function MyDownloads() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { offlineVideos, deleteVideo, clearAllVideos } = useVideoDownload();
  const { saveProgress, getStartTime } = useVideoProgress();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const selectedVideoRef = useRef<Video | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    selectedVideoRef.current = selectedVideo;
  }, [selectedVideo]);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatSize = (bytes?: number) => {
    if (!bytes) return "Unknown";
    const mb = bytes / (1024 * 1024);
    if (mb < 1024) return `${mb.toFixed(1)} MB`;
    const gb = mb / 1024;
    return `${gb.toFixed(2)} GB`;
  };

  const getDaysRemaining = (expiresAt: number) => {
    const remaining = expiresAt - Date.now();
    const days = Math.ceil(remaining / (1000 * 60 * 60 * 24));
    return days;
  };

  const handleDelete = async (video: OfflineVideoMetadata) => {
    await deleteVideo(video.videoId, video.videoUrl);
    if (selectedVideo?.id === video.videoId) {
      setSelectedVideo(null);
    }
  };

  const handleClearAll = async () => {
    if (confirm("Are you sure you want to delete all downloaded videos?")) {
      await clearAllVideos();
      setSelectedVideo(null);
    }
  };

  const handlePlayVideo = (video: OfflineVideoMetadata) => {
    const videoData: Video = {
      id: video.videoId,
      title: video.title,
      description: "Offline video",
      duration: "00:00",
      url: video.videoUrl,
      thumbnail: "",
    };
    setSelectedVideo(videoData);
  };

  const handleBackToList = () => {
    setSelectedVideo(null);
  };

  const handleVideoTimeUpdate = useCallback((currentTime: number, duration: number) => {
    if (selectedVideoRef.current) {
      saveProgress(selectedVideoRef.current.id, currentTime, duration);
    }
  }, [saveProgress]);

  const totalSize = offlineVideos.reduce((sum, v) => sum + (v.size || 0), 0);
  const expiredVideos = offlineVideos.filter((v) => isVideoExpired(v.expiresAt));
  const activeVideos = offlineVideos.filter((v) => !isVideoExpired(v.expiresAt));

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {selectedVideo && (
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={handleBackToList}
              className="mb-4 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Downloads
            </Button>
            <VideoPlayer
              video={selectedVideo}
              startTime={getStartTime(selectedVideo.id)}
              onTimeUpdate={handleVideoTimeUpdate}
            />
          </div>
        )}

        {!selectedVideo && (
          <>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    My Downloads
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Videos available for offline viewing
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={isOnline ? "default" : "secondary"} className="gap-2">
                    {isOnline ? (
                      <>
                        <Wifi className="h-3 w-3" />
                        Online
                      </>
                    ) : (
                      <>
                        <WifiOff className="h-3 w-3" />
                        Offline
                      </>
                    )}
                  </Badge>
                  {offlineVideos.length > 0 && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleClearAll}
                      className="gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Clear All
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Download className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{activeVideos.length}</p>
                        <p className="text-sm text-muted-foreground">Active Downloads</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <HardDrive className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{formatSize(totalSize)}</p>
                        <p className="text-sm text-muted-foreground">Total Storage Used</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{expiredVideos.length}</p>
                        <p className="text-sm text-muted-foreground">Expired Videos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}

        {!selectedVideo && offlineVideos.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-12">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No downloaded videos</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Download videos from the course library to watch them offline.
                </p>
                <Button onClick={() => navigate("/")}>
                  Browse Videos
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : !selectedVideo ? (
          <div className="space-y-4">
            {offlineVideos.map((video) => {
              const daysRemaining = getDaysRemaining(video.expiresAt);
              const expired = isVideoExpired(video.expiresAt);

              return (
                <Card
                  key={video.videoId}
                  className={`transition-all hover:shadow-md ${expired ? "opacity-60" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-24 w-40 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Play className="h-10 w-10 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-1 truncate">
                              {video.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>Downloaded {formatDate(video.downloadedAt)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <HardDrive className="h-3 w-3" />
                                <span>{formatSize(video.size)}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 flex-shrink-0">
                            {expired ? (
                              <Badge variant="destructive" className="gap-1">
                                <AlertCircle className="h-3 w-3" />
                                Expired
                              </Badge>
                            ) : (
                              <Badge
                                variant={daysRemaining <= 2 ? "destructive" : "default"}
                                className="gap-1"
                              >
                                <Clock className="h-3 w-3" />
                                {daysRemaining} day{daysRemaining !== 1 ? "s" : ""} left
                              </Badge>
                            )}
                            {video.status === "downloaded" && !expired && (
                              <Badge variant="outline" className="border-green-500 text-green-600">
                                <Download className="h-3 w-3 mr-1" />
                                Ready
                              </Badge>
                            )}
                          </div>
                        </div>

                        {video.progress < 100 && (
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-muted-foreground">
                                {video.status === "downloading"
                                  ? "Downloading..."
                                  : video.status === "failed"
                                  ? "Download failed"
                                  : "Download incomplete"}
                              </span>
                              <span className="font-medium">{video.progress.toFixed(0)}%</span>
                            </div>
                            <Progress value={video.progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            onClick={() => handlePlayVideo(video)}
                            disabled={expired || video.status !== "downloaded"}
                            className="gap-2"
                          >
                            <Play className="h-4 w-4" />
                            Play
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(video)}
                            className="gap-2"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
