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

const STORAGE_KEY_PREFIX = "lms_video_progress";

const getStorageKey = (userId?: string) => `${STORAGE_KEY_PREFIX}_${userId || "guest"}`;

const getStoredProgress = (userId?: string) => {
  const stored = localStorage.getItem(getStorageKey(userId));
  if (!stored) {
    return {};
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse video progress:", e);
    return {};
  }
};

const mergeProgressMaps = (firestoreProgress: VideoProgress, localProgress: VideoProgress): VideoProgress => {
  const merged: VideoProgress = {};
  const allVideoIds = new Set([
    ...Object.keys(firestoreProgress || {}),
    ...Object.keys(localProgress || {})
  ]);

  allVideoIds.forEach((videoId) => {
    const fsEntry = firestoreProgress?.[videoId];
    const localEntry = localProgress?.[videoId];

    if (!fsEntry && !localEntry) {
      return;
    }

    if (!fsEntry) {
      merged[videoId] = localEntry;
      return;
    }

    if (!localEntry) {
      merged[videoId] = fsEntry;
      return;
    }

    merged[videoId] = (localEntry.percentage ?? 0) > (fsEntry.percentage ?? 0) ? localEntry : fsEntry;
  });

  return merged;
};

const applyCompletedIds = (progressMap: VideoProgress, completedIds: string[]): VideoProgress => {
  if (!completedIds.length) {
    return progressMap;
  }

  const updated = { ...progressMap };

  completedIds.forEach((videoId) => {
    const existing = updated[videoId];
    if (existing) {
      updated[videoId] = {
        ...existing,
        completed: true,
        percentage: Math.max(existing.percentage ?? 0, 90),
      };
      return;
    }

    updated[videoId] = {
      currentTime: 0,
      duration: 0,
      percentage: 100,
      completed: true,
    };
  });

  return updated;
};

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
          const localProgress = getStoredProgress(user.id);
          const mergedProgress = mergeProgressMaps(firestoreProgress, localProgress);
          const completedIds = await api.getCompletedVideoIds(user.id);
          const finalProgress = applyCompletedIds(mergedProgress, completedIds);
          setProgress(finalProgress);
          localStorage.setItem(getStorageKey(user.id), JSON.stringify(finalProgress));
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
    setProgress(getStoredProgress(user?.id));
  };

  // Save progress to Firestore (if authenticated) or localStorage
  // This function can be called frequently, but Firestore writes are already throttled at the component level
  const saveProgress = useCallback(async (videoId: string, currentTime: number, duration: number) => {
    const previousProgress = progressRef.current[videoId];
    const rawPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
    const completed = Boolean(previousProgress?.completed) || rawPercentage >= 90;
    const percentage = Math.min(100, Math.max(0, rawPercentage));
    const persistedCurrentTime = currentTime;
    const persistedDuration = Math.max(previousProgress?.duration ?? 0, duration);

    const progressData = {
      currentTime: persistedCurrentTime,
      duration: persistedDuration,
      percentage,
      completed
    };

    // Update local state immediately for responsive UI
    setProgress((prev) => ({
      ...prev,
      [videoId]: progressData
    }));

    // Always save to localStorage first for immediate persistence
    saveToLocalStorage(videoId, progressData);

    // Also save to Firestore if authenticated
    if (user?.id) {
      try {
        // Await the save to ensure it completes
        await api.saveVideoProgress(user.id, videoId, progressData.currentTime, progressData.duration);
        if (progressData.completed) {
          await api.saveCompletedVideo(user.id, videoId);
        }
      } catch (error) {
        console.error("Failed to save video progress to Firestore:", error);
        // localStorage already saved above, so we're covered
      }
    }
  }, [user?.id]);

  const saveToLocalStorage = (videoId: string, progressData: any) => {
    const key = getStorageKey(user?.id);
    const stored = localStorage.getItem(key);
    const current = stored ? JSON.parse(stored) : {};
    const updated = { ...current, [videoId]: progressData };
    localStorage.setItem(key, JSON.stringify(updated));
  };

  const getProgress = useCallback((videoId: string) => {
    return progressRef.current[videoId] || { currentTime: 0, duration: 0, percentage: 0, completed: false };
  }, []);

  const getStartTime = useCallback((videoId: string) => {
    const videoProgress = progressRef.current[videoId];
    return videoProgress?.currentTime || 0;
  }, []);

  return { progress, saveProgress, getProgress, getStartTime, isLoading };
}
