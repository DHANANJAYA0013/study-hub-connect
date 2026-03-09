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
  chapterName?: string; // e.g. "Combustion and Flames", "Force and Pressure"
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  videos: Video[];
  section?: string; // Prastuti, Anubhav, Geomagic
  topic?: string; // Maths, Science, Box1, Box2, Line, Circle
  class?: string; // Class 8, Class 9, Class 10
  totalVideos?: number;
}

export const subjects: Subject[] = [
  // ========== Prastuti SECTION ==========
  // Prastuti - Science
  {
    id: "Prastuti-science-8",
    name: "Class 8",
    icon: "Microscope",
    description: "Interactive science experiments and activities for Class 8 students",
    color: "from-purple-500 to-pink-600",
    section: "Prastuti",
    topic: "Science",
    class: "Class 8",
    totalVideos: 17,
    videos: [
      // Combustion and Flames (5 videos)
      { id: "sci8-caf-v1", title: "Combustion and Flames - Video 1", description: "Introduction to combustion and types of combustion", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v2", title: "Combustion and Flames - Video 2", description: "Conditions necessary for combustion", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v3", title: "Combustion and Flames - Video 3", description: "Flame structure and zones", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v4", title: "Combustion and Flames - Video 4", description: "Fuel and calorific value", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v5", title: "Combustion and Flames - Video 5", description: "Fire control and fire extinguishers", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      // Force and Pressure (2 videos)
      { id: "sci8-fap-v1", title: "Force and Pressure - Video 1", description: "Understanding force and its effects", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Force and Pressure" },
      { id: "sci8-fap-v2", title: "Force and Pressure - Video 2", description: "Pressure and its applications", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Force and Pressure" },
      // Friction (3 videos)
      { id: "sci8-fri-v1", title: "Friction - Video 1", description: "Introduction to friction and its types", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Friction" },
      { id: "sci8-fri-v2", title: "Friction - Video 2", description: "Factors affecting friction", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Friction" },
      { id: "sci8-fri-v3", title: "Friction - Video 3", description: "Advantages and disadvantages of friction", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Friction" },
      // Light (3 videos)
      { id: "sci8-lgt-v1", title: "Light - Video 1", description: "Introduction to light and reflection", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Light" },
      { id: "sci8-lgt-v2", title: "Light - Video 2", description: "Laws of reflection and mirrors", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Light" },
      { id: "sci8-lgt-v3", title: "Light - Video 3", description: "Dispersion of light", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Light" },
      // Sound (3 videos)
      { id: "sci8-snd-v1", title: "Sound - Video 1", description: "Production and propagation of sound", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Sound" },
      { id: "sci8-snd-v2", title: "Sound - Video 2", description: "Characteristics of sound", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Sound" },
      { id: "sci8-snd-v3", title: "Sound - Video 3", description: "Human ear and sound pollution", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Sound" },
      // Synthetic Fibres and Plastics (1 video)
      { id: "sci8-sfp-v1", title: "Synthetic Fibres and Plastics - Video 1", description: "Types of synthetic fibres and plastics", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Synthetic Fibres and Plastics" }
    ]
  },
  {
    id: "Prastuti-science-9",
    name: "Class 9",
    icon: "Microscope",
    description: "Interactive science experiments and activities for Class 9 students",
    color: "from-purple-600 to-pink-700",
    section: "Prastuti",
    topic: "Science",
    class: "Class 9",
    totalVideos: 20,
    videos: [
      // Atoms and Molecules (1 video)
      { id: "sci9-atm-v1", title: "Atoms and Molecules - Video 1", description: "Introduction to atoms and molecules", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Atoms and Molecules" },
      // Force and Laws of Motion (3 videos)
      { id: "sci9-flm-v1", title: "Force and Laws of Motion - Video 1", description: "Newton's first law of motion", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Force and Laws of Motion" },
      { id: "sci9-flm-v2", title: "Force and Laws of Motion - Video 2", description: "Newton's second law of motion", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Force and Laws of Motion" },
      { id: "sci9-flm-v3", title: "Force and Laws of Motion - Video 3", description: "Newton's third law and conservation of momentum", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Force and Laws of Motion" },
      // Gravitation (1 video)
      { id: "sci9-grv-v1", title: "Gravitation - Video 1", description: "Universal law of gravitation", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Gravitation" },
      // Is Matter Around Us Pure (1 video)
      { id: "sci9-imp-v1", title: "Is Matter Around Us Pure - Video 1", description: "Pure substances and mixtures", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Is Matter Around Us Pure" },
      // Matter in Our Surroundings (3 videos)
      { id: "sci9-mos-v1", title: "Matter in Our Surroundings - Video 1", description: "States of matter", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Matter in Our Surroundings" },
      { id: "sci9-mos-v2", title: "Matter in Our Surroundings - Video 2", description: "Interconversion of states of matter", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Matter in Our Surroundings" },
      { id: "sci9-mos-v3", title: "Matter in Our Surroundings - Video 3", description: "Evaporation and its factors", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Matter in Our Surroundings" },
      // Motion (2 videos)
      { id: "sci9-mot-v1", title: "Motion - Video 1", description: "Distance, displacement and speed", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Motion" },
      { id: "sci9-mot-v2", title: "Motion - Video 2", description: "Acceleration and equations of motion", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Motion" },
      // Natural Resources (1 video)
      { id: "sci9-nrs-v1", title: "Natural Resources - Video 1", description: "Air, water and soil resources", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Natural Resources" },
      // Sound (2 videos)
      { id: "sci9-snd-v1", title: "Sound - Video 1", description: "Nature and propagation of sound", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Sound" },
      { id: "sci9-snd-v2", title: "Sound - Video 2", description: "Reflection of sound and echo", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Sound" },
      // Structure of Atom (2 videos)
      { id: "sci9-soa-v1", title: "Structure of Atom - Video 1", description: "Thomson and Rutherford models", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Structure of Atom" },
      { id: "sci9-soa-v2", title: "Structure of Atom - Video 2", description: "Bohr's model and electronic configuration", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Structure of Atom" },
      // The Fundamental Unit of Life (1 video)
      { id: "sci9-ful-v1", title: "The Fundamental Unit of Life - Video 1", description: "Cell structure and organelles", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "The Fundamental Unit of Life" },
      // Work and Energy (3 videos)
      { id: "sci9-wae-v1", title: "Work and Energy - Video 1", description: "Concept of work and conditions", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Work and Energy" },
      { id: "sci9-wae-v2", title: "Work and Energy - Video 2", description: "Kinetic and potential energy", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Work and Energy" },
      { id: "sci9-wae-v3", title: "Work and Energy - Video 3", description: "Law of conservation of energy", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Work and Energy" }
    ]
  },
  {
    id: "Prastuti-science-10",
    name: "Class 10",
    icon: "Microscope",
    description: "Interactive science experiments and activities for Class 10 students",
    color: "from-purple-700 to-pink-800",
    section: "Prastuti",
    topic: "Science",
    class: "Class 10",
    totalVideos: 1,
    videos: [
      // Chemical Reactions and Equations (1 video)
      { id: "sci10-cre-v1", title: "Chemical Reactions and Equations - Video 1", description: "Types of chemical reactions and balancing equations", duration: "0:00", url: "", thumbnail: thumbnailImage, chapterName: "Chemical Reactions and Equations" }
    ]
  },
  
  // Prastuti - Maths
  {
    id: "Prastuti-maths-8",
    name: "Class 8",
    icon: "Calculator",
    description: "Mathematics activities and concepts for Class 8 students",
    color: "from-blue-500 to-indigo-600",
    section: "Prastuti",
    topic: "Maths",
    class: "Class 8",
    totalVideos: 19,
    videos: 
    [
      // Ch 2 (2 videos)
      { id: "c8-ch2-act1", title: "Ch 2 - Activity 2.1", description: "Maths activity for Ch 2", duration: "0:14", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766758/CLASS_8_CHAPTER_2_Actvity_2.1_-_Experimind_LABS_fzq8br.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.1", chapterName: "Chapter 2" },
      { id: "c8-ch2-act2", title: "Ch 2 - Activity 2.2", description: "Maths activity for Ch 2", duration: "0:12", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766760/CLASS_8_CHAPTER_2_Actvity_2.2_-_Experimind_LABS_zaq8qo.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.2", chapterName: "Chapter 2" },
      // Ch 3 (2 videos)
      { id: "c8-ch3-act1", title: "Ch 3 - Activity 3.1", description: "Maths activity for Ch 3", duration: "0:15", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766788/CLASS_8_CHAPTER_3_Activity_3.1_-_Experimind_LABS_s1dbta.mp4", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.1", chapterName: "Chapter 3" },
      { id: "c8-ch3-act5", title: "Ch 3 - Activity 3.5", description: "Maths activity for Ch 3", duration: "0:05", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766762/CLASS_8_CHAPTER_3_Activity_3.5_-_Experimind_LABS_qwtdsb.mp4", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.5", chapterName: "Chapter 3" },
      // Ch 5 (3 videos)
      { id: "c8-ch4-act1", title: "Ch 5 - Activity 5.1", description: "Maths activity for Ch 5", duration: "0:48", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766773/CLASS_8_CHAPTER_4_Activity_4.1_-_Experimind_LABS_eugu1z.mp4", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.1", chapterName: "Chapter 5" },
      { id: "c8-ch4-act2", title: "Ch 5 - Activity 5.2", description: "Maths activity for Ch 5", duration: "1:47", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766782/CLASS_8_CHAPTER_4_Activity_4.2_-_Experimind_LABS_itdsi7.mp4", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.2", chapterName: "Chapter 5" },
      { id: "c8-ch4-act3", title: "Ch 5 - Activity 5.3", description: "Maths activity for Ch 5", duration: "4:03", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766767/class_8_chapter_4_activity_4.3_kzowls.mp4", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.3", chapterName: "Chapter 5" },
      // Ch 9 (6 videos)
      { id: "c8-ch8-act1", title: "Ch 9 - Activity 9.1", description: "Maths activity for Ch 9", duration: "2:52", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766775/class_8_chapter_8_activity_8.1_fcvdpx.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.1", chapterName: "Chapter 9" },
      { id: "c8-ch8-act2", title: "Ch 9 - Activity 9.2", description: "Maths activity for Ch 9", duration: "3:36", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766771/class_8_chapter_8_activity_8.2_iujzth.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.2", chapterName: "Chapter 9" },
      { id: "c8-ch8-act3", title: "Ch 9 - Activity 9.3", description: "Maths activity for Ch 9", duration: "3:58", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766769/class_8_chapter_8_activity_8.3_d4d1bm.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.3", chapterName: "Chapter 9" },
      { id: "c8-ch8-act4", title: "Ch 9 - Activity 9.4", description: "Maths activity for Ch 9", duration: "2:30", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766771/class_8_chapter_8_activity_8.4_iujzth.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.4", chapterName: "Chapter 9" },
      { id: "c8-ch8-act5", title: "Ch 9 - Activity 9.5", description: "Maths activity for Ch 9", duration: "2:36", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766755/class_8_chapter_8_activity_8.5_qtytpg.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.5", chapterName: "Chapter 9" },
      { id: "c8-ch8-act6", title: "Ch 9 - Activity 9.6", description: "Maths activity for Ch 9", duration: "2:36", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766765/CLASS_8_CHAPTER_8_Activity_8.6_tf1tfi.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.6", chapterName: "Chapter 9" },
      // Ch 11 (1 video)
      { id: "c8-ch9-act1", title: "Ch 11 - Activity 11.1", description: "Maths activity for Ch 11", duration: "2:08", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766754/CLASS_8_CHAPTER_9_Activity_9.1_pxetke.mp4", thumbnail: thumbnailImage, chapter: "Chapter 11", activity: "Activity 11.1", chapterName: "Chapter 11" },
      // Ch 14 (2 videos)
      { id: "c8-ch12-act1", title: "Ch 14 - Activity 14.1", description: "Maths activity for Ch 14", duration: "4:38", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766755/CLASS_8_CHAPTER_12_Activity_12.1_ie77n5.mp4", thumbnail: thumbnailImage, chapter: "Chapter 14", activity: "Activity 14.1", chapterName: "Chapter 14" },
      { id: "c8-ch12-act2", title: "Ch 14 - Activity 14.2", description: "Maths activity for Ch 14", duration: "4:57", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766754/CLASS_8_CHAPTER_12_Activity_12.2_ivwyjt.mp4", thumbnail: thumbnailImage, chapter: "Chapter 14", activity: "Activity 14.2", chapterName: "Chapter 14" },
      // Ch 15 (3 videos)
      { id: "c8-ch13-act1", title: "Ch 15 - Activity 15.1", description: "Maths activity for Ch 15", duration: "4:48", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766772/CLASS_8_CHAPTER_13_Activity_13.1_ndycrh.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.1", chapterName: "Chapter 15" },
      { id: "c8-ch13-act2", title: "Ch 15 - Activity 15.2", description: "Maths activity for Ch 15", duration: "4:40", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766784/CLASS_8_CHAPTER_13_Activity_13.2_ywy6bl.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.2", chapterName: "Chapter 15" },
      { id: "c8-ch13-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "5:01", url: "https://res.cloudinary.com/dv5z8id02/video/upload/v1769766756/CLASS_8_CHAPTER_13_Activity_13.3_blnana.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" }
    ]
  },
  {
    id: "Prastuti-maths-9",
    name: "Class 9",
    icon: "Calculator",
    description: "Mathematics activities and concepts for Class 9 students",
    color: "from-emerald-500 to-teal-600",
    section: "Prastuti",
    topic: "Maths",
    class: "Class 9",
    totalVideos: 16,
    videos: [
      // Ch 2 (4 videos)
      { id: "c9-ch2-act1", title: "Ch 2 - Activity 2.1", description: "Maths activity for Ch 2", duration: "1:53", url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.1 - Experimind LABS (1080p, h264).mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.1", chapterName: "Chapter 2" },
      { id: "c9-ch2-act2", title: "Ch 2 - Activity 2.2", description: "Maths activity for Ch 2", duration: "0:22", url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.2 - Experimind LABS (720p, h264).mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.2", chapterName: "Chapter 2" },
      { id: "c9-ch2-act3", title: "Ch 2 - Activity 2.3", description: "Maths activity for Ch 2", duration: "0:28", url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.3 - Experimind LABS (720p, h264).mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.3", chapterName: "Chapter 2" },
      { id: "c9-ch2-act4", title: "Ch 2 - Activity 2.4", description: "Maths activity for Ch 2", duration: "0:16", url: "/CLASS 9/CLASS 9 ｜ CHAPTER 2 ｜ Activity 2.4 - Experimind LABS (720p, h264).mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.4", chapterName: "Chapter 2" },
      // Ch 3 (1 video)
      { id: "c9-ch3-act1", title: "Ch 3 - Activity 3.1", description: "Maths activity for Ch 3", duration: "0:53", url: "/CLASS 9/CLASS 9 ｜ CHAPTER 3 ｜ Activity 3.1 - Experimind LABS (720p, h264).mp4", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.1", chapterName: "Chapter 3" },
      // Ch 6 (1 video)
      { id: "c9-ch6-act1", title: "Ch 6 - Activity 6.1", description: "Maths activity for Ch 6", duration: "0:15", url: "/CLASS 9/CLASS 9 ｜ CHAPTER 6 ｜ Activity 6.1 - Experimind LABS (720p, h264).mp4", thumbnail: thumbnailImage, chapter: "Chapter 6", activity: "Activity 6.1", chapterName: "Chapter 6" },
      // Ch 8 (1 video)
      { id: "c9-ch8-act1", title: "Ch 8 - Activity 8.1", description: "Maths activity for Ch 8", duration: "1:18", url: "/CLASS 9/CLASS 9  CHAPTER 8  Activity 8.1.mp4", thumbnail: thumbnailImage, chapter: "Chapter 8", activity: "Activity 8.1", chapterName: "Chapter 8" },
      // Ch 13 (6 videos)
      { id: "c9-ch13-act1", title: "Ch 13 - Activity 13.1", description: "Maths activity for Ch 13", duration: "2:08", url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.1.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.1", chapterName: "Chapter 13" },
      { id: "c9-ch13-act2", title: "Ch 13 - Activity 13.2", description: "Maths activity for Ch 13", duration: "1:43", url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.2.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.2", chapterName: "Chapter 13" },
      { id: "c9-ch13-act3", title: "Ch 13 - Activity 13.3", description: "Maths activity for Ch 13", duration: "2:34", url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.3.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.3", chapterName: "Chapter 13" },
      { id: "c9-ch13-act4", title: "Ch 13 - Activity 13.4", description: "Maths activity for Ch 13", duration: "3:05", url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.4.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.4", chapterName: "Chapter 13" },
      { id: "c9-ch13-act5", title: "Ch 13 - Activity 13.5", description: "Maths activity for Ch 13", duration: "2:27", url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.5.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.5", chapterName: "Chapter 13" },
      { id: "c9-ch13-act6", title: "Ch 13 - Activity 13.6", description: "Maths activity for Ch 13", duration: "4:17", url: "/CLASS 9/CLASS 9  CHAPTER 13  Activity 13.6.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.6", chapterName: "Chapter 13" },
      // Ch 15 (3 videos)
      { id: "c9-ch15-act1", title: "Ch 15 - Activity 15.1", description: "Maths activity for Ch 15", duration: "3:52", url: "/CLASS 9/CLASS 9  CHAPTER 15  Activity 15.1.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.1", chapterName: "Chapter 15" },
      { id: "c9-ch15-act2", title: "Ch 15 - Activity 15.2", description: "Maths activity for Ch 15", duration: "5:31", url: "/CLASS 9/CLASS 9  CHAPTER 15  Activity 15.2.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.2", chapterName: "Chapter 15" },
      { id: "c9-ch15-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "4:03", url: "/CLASS 9/CLASS 9  CHAPTER 15  Activity 15.3.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" }
    ]
  },
  {
    id: "Prastuti-maths-10",
    name: "Class 10",
    icon: "Calculator",
    description: "Mathematics activities and concepts for Class 10 students",
    color: "from-violet-500 to-purple-600",
    section: "Prastuti",
    topic: "Maths",
    class: "Class 10",
    totalVideos: 15,
    videos: [
      // Ch 4 (3 videos)
      { id: "c10-ch4-act1", title: "Ch 4 - Activity 4.1", description: "Maths activity for Ch 4", duration: "0:00", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772695448/Activity_4.1_cp_jfhmrh.mp4", thumbnail: thumbnailImage, chapter: "Chapter 4", activity: "Activity 4.1", chapterName: "Chapter 4" },
      { id: "c10-ch4-act2", title: "Ch 4 - Activity 4.2", description: "Maths activity for Ch 4", duration: "0:00", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772695898/Activity_4.2_cp_ylog5p.mp4", thumbnail: thumbnailImage, chapter: "Chapter 4", activity: "Activity 4.2", chapterName: "Chapter 4" },
      { id: "c10-ch4-act3", title: "Ch 4 - Activity 4.3", description: "Maths activity for Ch 4", duration: "0:00", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772695978/Activity_4.3_cp_u56qzh.mp4", thumbnail: thumbnailImage, chapter: "Chapter 4", activity: "Activity 4.3", chapterName: "Chapter 4" },
      // Ch 5 (2 videos)
      { id: "c10-ch5-act1", title: "Ch 5 - Activity 5.1", description: "Maths activity for Ch 5", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.1", chapterName: "Chapter 5" },
      { id: "c10-ch5-act2", title: "Ch 5 - Activity 5.2", description: "Maths activity for Ch 5", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.2", chapterName: "Chapter 5" },
      // Ch 6 (1 video)
      { id: "c10-ch6-act1", title: "Ch 6 - Activity 6.1", description: "Maths activity for Ch 6", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 6", activity: "Activity 6.1", chapterName: "Chapter 6" },
      // Ch 8 (2 videos)
      { id: "c10-ch8-act1", title: "Ch 8 - Activity 8.1", description: "Maths activity for Ch 8", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 8", activity: "Activity 8.1", chapterName: "Chapter 8" },
      { id: "c10-ch8-act2", title: "Ch 8 - Activity 8.2", description: "Maths activity for Ch 8", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 8", activity: "Activity 8.2", chapterName: "Chapter 8" },
      // Ch 9 (1 video)
      { id: "c10-ch9-act1", title: "Ch 9 - Activity 9.1", description: "Maths activity for Ch 9", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.1", chapterName: "Chapter 9" },
      // Ch 10 (1 video)
      { id: "c10-ch10-act1", title: "Ch 10 - Activity 10.1", description: "Maths activity for Ch 10", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 10", activity: "Activity 10.1", chapterName: "Chapter 10" },
      // Ch 11 (1 video)
      { id: "c10-ch11-act1", title: "Ch 11 - Activity 11.1", description: "Maths activity for Ch 11", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 11", activity: "Activity 11.1", chapterName: "Chapter 11" },
      // Ch 15 (4 videos)
      { id: "c10-ch15-act1", title: "Ch 15 - Activity 15.1", description: "Maths activity for Ch 15", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.1", chapterName: "Chapter 15" },
      { id: "c10-ch15-act2", title: "Ch 15 - Activity 15.2", description: "Maths activity for Ch 15", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.2", chapterName: "Chapter 15" },
      { id: "c10-ch15-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" },
      { id: "c10-ch15-act4", title: "Ch 15 - Activity 15.4", description: "Maths activity for Ch 15", duration: "0:00", url: "", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.4", chapterName: "Chapter 15" }
    ]
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

