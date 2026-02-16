import { BookOpen, Code, Palette, Calculator, Globe, Music, Microscope, History } from "lucide-react";
import thumbnailImage from "@/components/assets/thumbnailEXLAB.png";

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  url: string;
  thumbnail: string;
  chapter?: string;
  activity?: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  videos: Video[];
  section?: string; // Prasthuti, Anubhav, Geomagic
  topic?: string; // Maths, Science, Box1, Box2, Line, Circle
  class?: string; // Class 8, Class 9, Class 10
  totalVideos?: number;
}

export const subjects: Subject[] = [
  // ========== PRASTHUTI SECTION ==========
  // Prasthuti - Science
  {
    id: "prasthuti-science-8",
    name: "Class 8",
    icon: "Microscope",
    description: "Interactive science experiments and activities for Class 8 students",
    color: "from-purple-500 to-pink-600",
    section: "Prasthuti",
    topic: "Science",
    class: "Class 8",
    totalVideos: 0,
    videos: []
  },
  {
    id: "prasthuti-science-9",
    name: "Class 9",
    icon: "Microscope",
    description: "Interactive science experiments and activities for Class 9 students",
    color: "from-purple-600 to-pink-700",
    section: "Prasthuti",
    topic: "Science",
    class: "Class 9",
    totalVideos: 0,
    videos: []
  },
  {
    id: "prasthuti-science-10",
    name: "Class 10",
    icon: "Microscope",
    description: "Interactive science experiments and activities for Class 10 students",
    color: "from-purple-700 to-pink-800",
    section: "Prasthuti",
    topic: "Science",
    class: "Class 10",
    totalVideos: 0,
    videos: []
  },
  
  // Prasthuti - Maths
  {
    id: "prasthuti-maths-8",
    name: "Class 8",
    icon: "Calculator",
    description: "Mathematics activities and concepts for Class 8 students",
    color: "from-blue-500 to-indigo-600",
    section: "Prasthuti",
    topic: "Maths",
    class: "Class 8",
    totalVideos: 19,
    videos: [
      {
        id: "c8-ch2-act1",
        title: "Chapter 2 - Activity 2.1",
        description: "Maths activity for Chapter 2",
        duration: "0:14",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766758/CLASS_8_CHAPTER_2_Actvity_2.1_-_Experimind_LABS_fzq8br.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 2",
        activity: "Activity 2.1"
      },
      {
        id: "c8-ch2-act2",
        title: "Chapter 2 - Activity 2.2",
        description: "Maths activity for Chapter 2",
        duration: "0:12",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766760/CLASS_8_CHAPTER_2_Actvity_2.2_-_Experimind_LABS_zaq8qo.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 2",
        activity: "Activity 2.2"
      },
      {
        id: "c8-ch3-act1",
        title: "Chapter 3 - Activity 3.1",
        description: "Maths activity for Chapter 3",
        duration: "0:15",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766788/CLASS_8_CHAPTER_3_Activity_3.1_-_Experimind_LABS_s1dbta.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 3",
        activity: "Activity 3.1"
      },
      {
        id: "c8-ch3-act5",
        title: "Chapter 3 - Activity 3.5",
        description: "Maths activity for Chapter 3",
        duration: "0:05",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766762/CLASS_8_CHAPTER_3_Activity_3.5_-_Experimind_LABS_qwtdsb.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 3",
        activity: "Activity 3.5"
      },
      {
        id: "c8-ch4-act1",
        title: "Chapter 4 - Activity 4.1",
        description: "Maths activity for Chapter 4",
        duration: "0:48",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766773/CLASS_8_CHAPTER_4_Activity_4.1_-_Experimind_LABS_eugu1z.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 4",
        activity: "Activity 4.1"
      },
      {
        id: "c8-ch4-act2",
        title: "Chapter 4 - Activity 4.2",
        description: "Maths activity for Chapter 4",
        duration: "1:47",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766782/CLASS_8_CHAPTER_4_Activity_4.2_-_Experimind_LABS_itdsi7.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 4",
        activity: "Activity 4.2"
      },
      {
        id: "c8-ch4-act3",
        title: "Chapter 4 - Activity 4.3",
        description: "Maths activity for Chapter 4",
        duration: "4:03",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766767/class_8_chapter_4_activity_4.3_kzowls.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 4",
        activity: "Activity 4.3"
      },
      {
        id: "c8-ch8-act1",
        title: "Chapter 8 - Activity 8.1",
        description: "Maths activity for Chapter 8",
        duration: "2:52",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766775/class_8_chapter_8_activity_8.1_fcvdpx.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.1"
      },
      {
        id: "c8-ch8-act2",
        title: "Chapter 8 - Activity 8.2",
        description: "Maths activity for Chapter 8",
        duration: "3:36",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766771/class_8_chapter_8_activity_8.2_iujzth.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.2"
      },
      {
        id: "c8-ch8-act3",
        title: "Chapter 8 - Activity 8.3",
        description: "Maths activity for Chapter 8",
        duration: "3:58",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766769/class_8_chapter_8_activity_8.3_d4d1bm.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.3"
      },
      {
        id: "c8-ch8-act4",
        title: "Chapter 8 - Activity 8.4",
        description: "Maths activity for Chapter 8",
        duration: "2:30",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766771/class_8_chapter_8_activity_8.4_iujzth.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.4"
      },
      {
        id: "c8-ch8-act5",
        title: "Chapter 8 - Activity 8.5",
        description: "Maths activity for Chapter 8",
        duration: "2:36",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766755/class_8_chapter_8_activity_8.5_qtytpg.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.5"
      },
      {
        id: "c8-ch8-act6",
        title: "Chapter 8 - Activity 8.6",
        description: "Maths activity for Chapter 8",
        duration: "2:36",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766765/CLASS_8_CHAPTER_8_Activity_8.6_tf1tfi.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.6"
      },
      {
        id: "c8-ch9-act1",
        title: "Chapter 9 - Activity 9.1",
        description: "Maths activity for Chapter 9",
        duration: "2:08",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766754/CLASS_8_CHAPTER_9_Activity_9.1_pxetke.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 9",
        activity: "Activity 9.1"
      },
      {
        id: "c8-ch12-act1",
        title: "Chapter 12 - Activity 12.1",
        description: "Maths activity for Chapter 12",
        duration: "4:38",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766755/CLASS_8_CHAPTER_12_Activity_12.1_ie77n5.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 12",
        activity: "Activity 12.1"
      },
      {
        id: "c8-ch12-act2",
        title: "Chapter 12 - Activity 12.2",
        description: "Maths activity for Chapter 12",
        duration: "4:57",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766754/CLASS_8_CHAPTER_12_Activity_12.2_ivwyjt.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 12",
        activity: "Activity 12.2"
      },
      {
        id: "c8-ch13-act1",
        title: "Chapter 13 - Activity 13.1",
        description: "Maths activity for Chapter 13",
        duration: "4:48",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766772/CLASS_8_CHAPTER_13_Activity_13.1_ndycrh.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.1"
      },
      {
        id: "c8-ch13-act2",
        title: "Chapter 13 - Activity 13.2",
        description: "Maths activity for Chapter 13",
        duration: "4:40",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766784/CLASS_8_CHAPTER_13_Activity_13.2_ywy6bl.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.2"
      },
      {
        id: "c8-ch13-act3",
        title: "Chapter 13 - Activity 13.3",
        description: "Maths activity for Chapter 13",
        duration: "5:01",
        url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766756/CLASS_8_CHAPTER_13_Activity_13.3_blnana.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.3"
      }
    ]
  },
  {
    id: "prasthuti-maths-9",
    name: "Class 9",
    icon: "Calculator",
    description: "Mathematics activities and concepts for Class 9 students",
    color: "from-emerald-500 to-teal-600",
    section: "Prasthuti",
    topic: "Maths",
    class: "Class 9",
    totalVideos: 16,
    videos: [
      {
        id: "c9-ch2-act1",
        title: "Chapter 2 - Activity 2.1",
        description: "Maths activity for Chapter 2",
        duration: "1:53",
        url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.1 - Experimind LABS (1080p, h264).mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 2",
        activity: "Activity 2.1"
      },
      {
        id: "c9-ch2-act2",
        title: "Chapter 2 - Activity 2.2",
        description: "Maths activity for Chapter 2",
        duration: "0:22",
        url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.2 - Experimind LABS (720p, h264).mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 2",
        activity: "Activity 2.2"
      },
      {
        id: "c9-ch2-act3",
        title: "Chapter 2 - Activity 2.3",
        description: "Maths activity for Chapter 2",
        duration: "0:28",
        url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.3 - Experimind LABS (720p, h264).mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 2",
        activity: "Activity 2.3"
      },
      {
        id: "c9-ch2-act4",
        title: "Chapter 2 - Activity 2.4",
        description: "Maths activity for Chapter 2",
        duration: "0:16",
        url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.4 - Experimind LABS (720p, h264).mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 2",
        activity: "Activity 2.4"
      },
      {
        id: "c9-ch3-act1",
        title: "Chapter 3 - Activity 3.1",
        description: "Maths activity for Chapter 3",
        duration: "0:53",
        url: "/CLASS 9/CLASS 9 ｜ CHAPTER 3 ｜ Activity 3.1 - Experimind LABS (720p, h264).mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 3",
        activity: "Activity 3.1"
      },
      {
        id: "c9-ch6-act1",
        title: "Chapter 6 - Activity 6.1",
        description: "Maths activity for Chapter 6",
        duration: "0:15",
        url: "/CLASS 9/CLASS 9 ｜ CHAPTER 6 ｜ Activity 6.1 - Experimind LABS (720p, h264).mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 6",
        activity: "Activity 6.1"
      },
      {
        id: "c9-ch8-act1",
        title: "Chapter 8 - Activity 8.1",
        description: "Maths activity for Chapter 8",
        duration: "1:18",
        url: "/CLASS 9/CLASS 9  CHAPTER 8  Activity 8.1.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 8",
        activity: "Activity 8.1"
      },
      {
        id: "c9-ch13-act1",
        title: "Chapter 13 - Activity 13.1",
        description: "Maths activity for Chapter 13",
        duration: "2:08",
        url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.1.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.1"
      },
      {
        id: "c9-ch13-act2",
        title: "Chapter 13 - Activity 13.2",
        description: "Maths activity for Chapter 13",
        duration: "1:43",
        url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.2.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.2"
      },
      {
        id: "c9-ch13-act3",
        title: "Chapter 13 - Activity 13.3",
        description: "Maths activity for Chapter 13",
        duration: "2:34",
        url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.3.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.3"
      },
      {
        id: "c9-ch13-act4",
        title: "Chapter 13 - Activity 13.4",
        description: "Maths activity for Chapter 13",
        duration: "3:05",
        url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.4.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.4"
      },
      {
        id: "c9-ch13-act5",
        title: "Chapter 13 - Activity 13.5",
        description: "Maths activity for Chapter 13",
        duration: "2:27",
        url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.5.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.5"
      },
      {
        id: "c9-ch13-act6",
        title: "Chapter 13 - Activity 13.6",
        description: "Maths activity for Chapter 13",
        duration: "4:17",
        url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.6.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 13",
        activity: "Activity 13.6"
      },
      {
        id: "c9-ch15-act1",
        title: "Chapter 15 - Activity 15.1",
        description: "Maths activity for Chapter 15",
        duration: "3:52",
        url: "/CLASS 9/CLASS 9  CHAPTER 15  Activity 15.1.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 15",
        activity: "Activity 15.1"
      },
      {
        id: "c9-ch15-act2",
        title: "Chapter 15 - Activity 15.2",
        description: "Maths activity for Chapter 15",
        duration: "5:31",
        url: "/CLASS 9/CLASS 9  CHAPTER 15  Activity 15.2.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 15",
        activity: "Activity 15.2"
      },
      {
        id: "c9-ch15-act3",
        title: "Chapter 15 - Activity 15.3",
        description: "Maths activity for Chapter 15",
        duration: "4:03",
        url: "/CLASS 9/CLASS 9  CHAPTER 15  Activity 15.3.mp4",
        thumbnail: thumbnailImage,
        chapter: "Chapter 15",
        activity: "Activity 15.3"
      }
    ]
  },
  {
    id: "prasthuti-maths-10",
    name: "Class 10",
    icon: "Calculator",
    description: "Mathematics activities and concepts for Class 10 students",
    color: "from-violet-500 to-purple-600",
    section: "Prasthuti",
    topic: "Maths",
    class: "Class 10",
    totalVideos: 0,
    videos: []
  },

  // ========== ANUBHAV SECTION ==========
  {
    id: "anubhav-box1",
    name: "Anubhav - Box1",
    icon: "BookOpen",
    description: "Hands-on learning activities from Box1 collection",
    color: "from-orange-500 to-red-600",
    section: "Anubhav",
    topic: "Box1",
    totalVideos: 0,
    videos: []
  },
  {
    id: "anubhav-box2",
    name: "Anubhav - Box2",
    icon: "BookOpen",
    description: "Hands-on learning activities from Box2 collection",
    color: "from-pink-500 to-rose-600",
    section: "Anubhav",
    topic: "Box2",
    totalVideos: 0,
    videos: []
  },

  // ========== GEOMAGIC SECTION ==========
  {
    id: "geomagic-line",
    name: "Geomagic - Line",
    icon: "Code",
    description: "Geometric concepts and activities exploring lines",
    color: "from-cyan-500 to-blue-600",
    section: "Geomagic",
    topic: "Line",
    totalVideos: 0,
    videos: []
  },
  {
    id: "geomagic-circle",
    name: "Geomagic - Circle",
    icon: "Code",
    description: "Geometric concepts and activities exploring circles",
    color: "from-teal-500 to-green-600",
    section: "Geomagic",
    topic: "Circle",
    totalVideos: 0,
    videos: []
  }
];

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Code,
  Palette,
  Calculator,
  Globe,
  Music,
  Microscope,
  History
};

