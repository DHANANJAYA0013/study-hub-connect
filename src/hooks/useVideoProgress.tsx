import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import * as api from "@/services/api";

interface VideoProgress {
  [videoId: string]: {
    currentTime: number;
    duration: number;
    percentage: number;
    completed: boolean;
  };
}

const STORAGE_KEY = "lms_video_progress";

export function useVideoProgress() {
  const [progress, setProgress] = useState<VideoProgress>({});
  const progressRef = useRef<VideoProgress>({});
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Keep ref in sync with state
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Load progress on mount - from Firestore if authenticated, otherwise localStorage
  useEffect(() => {
    const loadProgress = async () => {
      if (user?.id) {
        // Load from Firestore for authenticated users
        setIsLoading(true);
        try {
          const firestoreProgress = await api.getAllVideoProgress(user.id);
          setProgress(firestoreProgress);
        } catch (error) {
          console.error("Failed to load video progress from Firestore:", error);
          // Fallback to localStorage if Firestore fails
          loadFromLocalStorage();
        } finally {
          setIsLoading(false);
        }
      } else {
        // Load from localStorage for non-authenticated users
        loadFromLocalStorage();
      }
    };

    loadProgress();
  }, [user?.id]);

  const loadFromLocalStorage = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse video progress:", e);
      }
    }
  };

  // Save progress to Firestore (if authenticated) or localStorage
  // This function can be called frequently, but Firestore writes are already throttled at the component level
  const saveProgress = useCallback(async (videoId: string, currentTime: number, duration: number) => {
    const percentage = duration > 0 ? (currentTime / duration) * 100 : 0;
    const completed = percentage >= 90;

    const progressData = {
      currentTime,
      duration,
      percentage,
      completed
    };

    // Update local state immediately for responsive UI
    setProgress((prev) => ({
      ...prev,
      [videoId]: progressData
    }));

    // Save to Firestore if authenticated, otherwise localStorage
    if (user?.id) {
      try {
        // Non-blocking save to Firestore
        api.saveVideoProgress(user.id, videoId, currentTime, duration);
      } catch (error) {
        console.error("Failed to save video progress to Firestore:", error);
        // Fallback to localStorage if Firestore fails
        saveToLocalStorage(videoId, progressData);
      }
    } else {
      // Save to localStorage for non-authenticated users
      saveToLocalStorage(videoId, progressData);
    }
  }, [user?.id]);

  const saveToLocalStorage = (videoId: string, progressData: any) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const current = stored ? JSON.parse(stored) : {};
    const updated = { ...current, [videoId]: progressData };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getProgress = useCallback((videoId: string) => {
    return progressRef.current[videoId] || { currentTime: 0, duration: 0, percentage: 0, completed: false };
  }, []);

  const getStartTime = useCallback((videoId: string) => {
    return progressRef.current[videoId]?.currentTime || 0;
  }, []);

  return { progress, saveProgress, getProgress, getStartTime, isLoading };
}
