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
      { id: "sci8-caf-v1", title: "Combustion and Flames - Video 1", description: "Introduction to combustion and types of combustion", duration: "2:06", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772695240/Activity_8.4.1_cp_qzz8mv.mp4", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v2", title: "Combustion and Flames - Video 2", description: "Conditions necessary for combustion", duration: "2:13", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772695777/Activity_8.4.2_cp_vfk7gd.mp4", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v3", title: "Combustion and Flames - Video 3", description: "Flame structure and zones", duration: "2:05", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772695777/Activity_8.4.3_cp_x41vxt.mp4", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v4", title: "Combustion and Flames - Video 4", description: "Fuel and calorific value", duration: "3:42", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772695779/Activity_8.4.4Mp4_cp_sln8bn.mp4", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      { id: "sci8-caf-v5", title: "Combustion and Flames - Video 5", description: "Fire control and fire extinguishers", duration: "2:32", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772695780/Activity_8.4.5_1_cp_zcvjrq.mp4", thumbnail: thumbnailImage, chapterName: "Combustion and Flames" },
      // Force and Pressure (2 videos)
      { id: "sci8-fap-v1", title: "Force and Pressure - Video 1", description: "Understanding force and its effects", duration: "2:11", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696068/Activity_8.6.1_cp_vyngel.mp4", thumbnail: thumbnailImage, chapterName: "Force and Pressure" },
      { id: "sci8-fap-v2", title: "Force and Pressure - Video 2", description: "Pressure and its applications", duration: "2:42", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696085/Activity_8.6.2_cp_vjcusz.mp4", thumbnail: thumbnailImage, chapterName: "Force and Pressure" },
      // Friction (3 videos)
      { id: "sci8-fri-v1", title: "Friction - Video 1", description: "Introduction to friction and its types", duration: "4:02", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696310/Activity_8.7.1_cp_ypgurh.mp4", thumbnail: thumbnailImage, chapterName: "Friction" },
      { id: "sci8-fri-v2", title: "Friction - Video 2", description: "Factors affecting friction", duration: "1:51", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696302/Activity_8.7.2_cp_zcp9j1.mp4", thumbnail: thumbnailImage, chapterName: "Friction" },
      { id: "sci8-fri-v3", title: "Friction - Video 3", description: "Advantages and disadvantages of friction", duration: "1:51", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696304/Activity_8.7.3_cp_xftttx.mp4", thumbnail: thumbnailImage, chapterName: "Friction" },
      // Light (3 videos)
      { id: "sci8-lgt-v1", title: "Light - Video 1", description: "Introduction to light and reflection", duration: "1:52", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696738/Activity_8.10.1_cp_ekxa4c.mp4", thumbnail: thumbnailImage, chapterName: "Light" },
      { id: "sci8-lgt-v2", title: "Light - Video 2", description: "Laws of reflection and mirrors", duration: "3:42", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696744/Activity_8.10.2_cp_h7hdlm.mp4", thumbnail: thumbnailImage, chapterName: "Light" },
      { id: "sci8-lgt-v3", title: "Light - Video 3", description: "Dispersion of light", duration: "2:08", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696738/Activity_8.10.3_cp_sxobru.mp4", thumbnail: thumbnailImage, chapterName: "Light" },
      // Sound (3 videos)
      { id: "sci8-snd-v1", title: "Sound - Video 1", description: "Production and propagation of sound", duration: "1:52", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696887/Activity_8.8.1_cp_ywuvkt.mp4", thumbnail: thumbnailImage, chapterName: "Sound" },
      { id: "sci8-snd-v2", title: "Sound - Video 2", description: "Characteristics of sound", duration: "3:09", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696892/8.8.2_cp_igqrzs.mp4", thumbnail: thumbnailImage, chapterName: "Sound" },
      { id: "sci8-snd-v3", title: "Sound - Video 3", description: "Human ear and sound pollution", duration: "1:39", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772696887/Activity_8.8.3_cp_qbnxms.mp4", thumbnail: thumbnailImage, chapterName: "Sound" },
      // Synthetic Fibres and Plastics (1 video)
      { id: "sci8-sfp-v1", title: "Synthetic Fibres and Plastics - Video 1", description: "Types of synthetic fibres and plastics", duration: "3:46", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772697049/8.3.1_cp_tcsagx.mp4", thumbnail: thumbnailImage, chapterName: "Synthetic Fibres and Plastics" }
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
      
      // Force and Laws of Motion (3 videos)
      { id: "sci9-flm-v1", title: "Activity 9.8.1 - Demonstrating Newton’S First Law Using An Inertia Apparatus", description: "Newton's first law of motion", duration: "1:56", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772695261/Activity_9.8.1_-_Demonstrating_Newton_S_First_Law_Using_An_Inertia_Apparatus_cxeuji.mp4", thumbnail: thumbnailImage, chapterName: "Force and Laws of Motion" },
      { id: "sci9-flm-v2", title: "Activity 9.8.2", description: "Newton's second law of motion", duration: "2:34", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772696174/Activity_9.8.3_oo4q0k.mp4", thumbnail: thumbnailImage, chapterName: "Force and Laws of Motion" },
      { id: "sci9-flm-v3", title: "Activity 9.8.3 - Demonstrating Newton’S Third Law Using A Balloon And Straw", description: "Newton's third law and conservation of momentum", duration: "2:02", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772695947/Activity_9.8.2_-_Demonstrating_Newton_S_Third_Law_Using_A_Balloon_And_Straw_sb3jho.mp4", thumbnail: thumbnailImage, chapterName: "Force and Laws of Motion" },
      // Gravitation (1 video)
      { id: "sci9-grv-v1", title: "Activity 9.9.2", description: "Universal law of gravitation", duration: "2:16", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772696314/Activity_9.9.2_cp_ppib78.mp4", thumbnail: thumbnailImage, chapterName: "Gravitation" },
      // Is Matter Around Us Pure (1 video)
      { id: "sci9-imp-v1", title: "Activity 9.2.1", description: "Pure substances and mixtures", duration: "2:48", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772696988/Activity_9.2.1_cp_ua1vc5.mp4", thumbnail: thumbnailImage, chapterName: "Is Matter Around Us Pure" },
      // Matter in Our Surroundings (3 videos)
      
      { id: "sci9-mos-v2", title: "Activity 9.1.2 Observing Evaporation And Sublimation", description: "Interconversion of states of matter", duration: "2:11", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697077/Activity_9.1.2_Observing_Evaporation_And_Sublimation_cp_oeknob.mp4", thumbnail: thumbnailImage, chapterName: "Matter in Our Surroundings" },
      { id: "sci9-mos-v3", title: "Activity 9.1.3 - Effect Of Heat On Change In Boiling Points Of Pure Liquid And Saturated Salt Solution", description: "Evaporation and its factors", duration: "3:07", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697138/Activity_9.1.3_-_Effect_Of_Heat_On_Change_In_Boiling_Points_Of_Pure_Liquid_And_Saturated_Salt_Solution_cp_dzuqv6.mp4", thumbnail: thumbnailImage, chapterName: "Matter in Our Surroundings" },
      // Motion (2 videos)
      { id: "sci9-mot-v1", title: "Activity 9.7.1 - Observing Circular Motion" , description: "Distance, displacement and speed", duration: "1:49", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697199/Activity_9.7.1_-_Observing_Circular_Motion_cp_kw2nyw.mp4", thumbnail: thumbnailImage, chapterName: "Motion" },
      { id: "sci9-mot-v2", title: "Activity 9.7.2.Demonstrating Motion", description: "Acceleration and equations of motion", duration: "1:54", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697776/Activity_9.7.2.Demonstrating_Motion_cp_eqcuzy.mp4", thumbnail: thumbnailImage, chapterName: "Motion" },
      // Natural Resources (1 video)
      { id: "sci9-nrs-v1", title: "Activity 9.12.1", description: "Air, water and soil resources", duration: "3:39", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697854/9.12.1_cp_pswwl3.mp4", thumbnail: thumbnailImage, chapterName: "Natural Resources" },
      // Sound (2 videos)
      { id: "sci9-snd-v1", title: "Activity 9.11.1" , description: "Nature and propagation of sound", duration: "2:20", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697930/Activity_9.11.1_cp_nwcptj.mp4", thumbnail: thumbnailImage, chapterName: "Sound" },
      { id: "sci9-snd-v2", title: "Activity 9.11.2" , description: "Reflection of sound and echo", duration: "2:00", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772697982/Activity_9.11.3_cp_p3qro5.mp4", thumbnail: thumbnailImage, chapterName: "Sound" },
      // Structure of Atom (2 videos)
      { id: "sci9-soa-v1", title: "Activity 9.4.1", description: "Thomson and Rutherford models", duration: "3:03", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772698043/Activity_9.4.1_cp_zixuka.mp4", thumbnail: thumbnailImage, chapterName: "Structure of Atom" },
      { id: "sci9-soa-v2", title: "Activity 9.4.2", description: "Bohr's model and electronic configuration", duration: "1:59", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772698093/Activity_9.4.2_cp_dkxrcr.mp4", thumbnail: thumbnailImage, chapterName: "Structure of Atom" },
      // The Fundamental Unit of Life (1 video)
     
      // Work and Energy (3 videos)
      { id: "sci9-wae-v1", title: "Activity 9.10.1", description: "Concept of work and conditions", duration: "2:21", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772698191/Activity_9.10.1_esrtvi.mp4", thumbnail: thumbnailImage, chapterName: "Work and Energy" },
      { id: "sci9-wae-v2", title: "Activity 9.10.2", description: "Kinetic and potential energy", duration: "2:22", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772698247/Activity_9.10.2_vnohfb.mp4", thumbnail: thumbnailImage, chapterName: "Work and Energy" },
      { id: "sci9-wae-v3", title: "Activity 9.10.3", description: "Law of conservation of energy", duration: "1:51", url: "https://res.cloudinary.com/dlusrnr3o/video/upload/v1772698306/Activity_9.10.3_cp_exogz4.mp4", thumbnail: thumbnailImage, chapterName: "Work and Energy" }
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
<<<<<<< HEAD
      { id: "c9-ch2-act1", title: "Ch 2 - Activity 2.1", description: "Maths activity for Ch 2", duration: "05:02", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772695513/Activity_2.1_cp_bpmsgd.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.1", chapterName: "Chapter 2" },
      { id: "c9-ch2-act2", title: "Ch 2 - Activity 2.2", description: "Maths activity for Ch 2", duration: "03:48", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772699939/Activity_2.2_Cp_o3tvew.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.2", chapterName: "Chapter 2" },
      { id: "c9-ch2-act3", title: "Ch 2 - Activity 2.3", description: "Maths activity for Ch 2", duration: "03:26", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772700268/Activity_2.3_cp_whuwjy.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.3", chapterName: "Chapter 2" },
      { id: "c9-ch2-act4", title: "Ch 2 - Activity 2.4", description: "Maths activity for Ch 2", duration: "3:31", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772700633/Activity_2.4_cp_bs0zpp.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.4", chapterName: "Chapter 2" },
      // Ch 3 (1 video)
      { id: "c9-ch3-act1", title: "Ch 3 - Activity 3.1", description: "Maths activity for Ch 3", duration: "04:48", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772700823/Activity_3.1_cp_qvlr4n.mp4", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.1", chapterName: "Chapter 3" },
      // Ch 6 (1 video)
      { id: "c9-ch6-act1", title: "Ch 6 - Activity 6.1", description: "Maths activity for Ch 6", duration: "01:44", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701066/Activity_6.1_cp_hvdfsm.mp4", thumbnail: thumbnailImage, chapter: "Chapter 6", activity: "Activity 6.1", chapterName: "Chapter 6" },
      // Ch 8 (1 video)
      { id: "c9-ch8-act1", title: "Ch 8 - Activity 8.1", description: "Maths activity for Ch 8", duration: "01:17", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701166/Activity_8.1_bguxfr.mp4", thumbnail: thumbnailImage, chapter: "Chapter 8", activity: "Activity 8.1", chapterName: "Chapter 8" },
      // Ch 13 (6 videos)
      { id: "c9-ch13-act1", title: "Ch 13 - Activity 13.1", description: "Maths activity for Ch 13", duration: "2:08", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701352/Activity_13.1_fu6xuo.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.1", chapterName: "Chapter 13" },
      { id: "c9-ch13-act2", title: "Ch 13 - Activity 13.2", description: "Maths activity for Ch 13", duration: "1:43", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701425/Activity_13.2_yuh3ja.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.2", chapterName: "Chapter 13" },
      { id: "c9-ch13-act3", title: "Ch 13 - Activity 13.3", description: "Maths activity for Ch 13", duration: "2:34", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701481/Activity_13.3_xl4xpy.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.3", chapterName: "Chapter 13" },
      { id: "c9-ch13-act4", title: "Ch 13 - Activity 13.4", description: "Maths activity for Ch 13", duration: "3:05", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701542/Activity_13.4_anzroy.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.4", chapterName: "Chapter 13" },
      { id: "c9-ch13-act5", title: "Ch 13 - Activity 13.5", description: "Maths activity for Ch 13", duration: "2:27", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772701974/Activity_13.5_slgip8.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.5", chapterName: "Chapter 13" },
      { id: "c9-ch13-act6", title: "Ch 13 - Activity 13.6", description: "Maths activity for Ch 13", duration: "4:17", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772702080/Activity_13.6_skoxtb.mp4", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.6", chapterName: "Chapter 13" },
      // Ch 15 (3 videos)
      { id: "c9-ch15-act1", title: "Ch 15 - Activity 15.1", description: "Maths activity for Ch 15", duration: "3:52", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772702264/Activity_15.1_osnqpv.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.1", chapterName: "Chapter 15" },
      { id: "c9-ch15-act2", title: "Ch 15 - Activity 15.2", description: "Maths activity for Ch 15", duration: "5:31", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772702446/Activity_15.2_klwkfx.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.2", chapterName: "Chapter 15" },
      { id: "c9-ch15-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "4:03", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772702520/Activity_15.3_pcbgvd.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" }
=======
      { id: "c9-ch2-act1", title: "Ch 2 - Activity 2.1", description: "Maths activity for Ch 2", duration: "05:02", url: "https://collection.cloudinary.com/dm8ozollp/ecfe35eebb51473a96203f795ff46a75", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.1", chapterName: "Chapter 2" },
      { id: "c9-ch2-act2", title: "Ch 2 - Activity 2.2", description: "Maths activity for Ch 2", duration: "03:48", url: "https://collection.cloudinary.com/dm8ozollp/946916d4c35d3d3c493955c78eacb1ee", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.2", chapterName: "Chapter 2" },
      { id: "c9-ch2-act3", title: "Ch 2 - Activity 2.3", description: "Maths activity for Ch 2", duration: "03:26", url: "https://collection.cloudinary.com/dm8ozollp/81b6e0ca754463e7b104779dea190d45", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.3", chapterName: "Chapter 2" },
      { id: "c9-ch2-act4", title: "Ch 2 - Activity 2.4", description: "Maths activity for Ch 2", duration: "3:31", url: "https://collection.cloudinary.com/dm8ozollp/5e61c9930b3d61735e9c9a5fdca94cd2", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.4", chapterName: "Chapter 2" },
      // Ch 3 (1 video)
      { id: "c9-ch3-act1", title: "Ch 3 - Activity 3.1", description: "Maths activity for Ch 3", duration: "04:48", url: "https://collection.cloudinary.com/dm8ozollp/872909b926daddbc3037506a22349323", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.1", chapterName: "Chapter 3" },
      // Ch 6 (1 video)
      { id: "c9-ch6-act1", title: "Ch 6 - Activity 6.1", description: "Maths activity for Ch 6", duration: "01:44", url: "https://collection.cloudinary.com/dm8ozollp/fbd11232fc08fabcf1a6f218169a8b94", thumbnail: thumbnailImage, chapter: "Chapter 6", activity: "Activity 6.1", chapterName: "Chapter 6" },
      // Ch 8 (1 video)
      { id: "c9-ch8-act1", title: "Ch 8 - Activity 8.1", description: "Maths activity for Ch 8", duration: "01:17", url: "https://collection.cloudinary.com/dm8ozollp/21bb633566b2c0edb66f37546257f0d9", thumbnail: thumbnailImage, chapter: "Chapter 8", activity: "Activity 8.1", chapterName: "Chapter 8" },
      // Ch 13 (6 videos)
      { id: "c9-ch13-act1", title: "Ch 13 - Activity 13.1", description: "Maths activity for Ch 13", duration: "2:08", url: "https://collection.cloudinary.com/dm8ozollp/8185d9c3068478ca7a0157f1d2c02dc7", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.1", chapterName: "Chapter 13" },
      { id: "c9-ch13-act2", title: "Ch 13 - Activity 13.2", description: "Maths activity for Ch 13", duration: "1:43", url: "https://collection.cloudinary.com/dm8ozollp/82c7397370db130c9740ef8b784a62c2", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.2", chapterName: "Chapter 13" },
      { id: "c9-ch13-act3", title: "Ch 13 - Activity 13.3", description: "Maths activity for Ch 13", duration: "2:34", url: "https://collection.cloudinary.com/dm8ozollp/26dbf647f32e4d6e2ea7cb9ae6991178", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.3", chapterName: "Chapter 13" },
      { id: "c9-ch13-act4", title: "Ch 13 - Activity 13.4", description: "Maths activity for Ch 13", duration: "3:05", url: "https://collection.cloudinary.com/dm8ozollp/7ad5edf6cb1ba8ad3e2b7308d4a5a243", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.4", chapterName: "Chapter 13" },
      { id: "c9-ch13-act5", title: "Ch 13 - Activity 13.5", description: "Maths activity for Ch 13", duration: "2:27", url: "https://collection.cloudinary.com/dm8ozollp/4886b10a27556daa586165df4b204c1d", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.5", chapterName: "Chapter 13" },
      { id: "c9-ch13-act6", title: "Ch 13 - Activity 13.6", description: "Maths activity for Ch 13", duration: "4:17", url: "https://collection.cloudinary.com/dm8ozollp/c0a87fc037ddd80ec204a331eb71441e", thumbnail: thumbnailImage, chapter: "Chapter 13", activity: "Activity 13.6", chapterName: "Chapter 13" },
      // Ch 15 (3 videos)
      { id: "c9-ch15-act1", title: "Ch 15 - Activity 15.1", description: "Maths activity for Ch 15", duration: "3:52", url: "https://collection.cloudinary.com/dm8ozollp/049e57821b52f0b8e2f7cdcd1fdb39a9", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.1", chapterName: "Chapter 15" },
      { id: "c9-ch15-act2", title: "Ch 15 - Activity 15.2", description: "Maths activity for Ch 15", duration: "5:31", url: "https://collection.cloudinary.com/dm8ozollp/89ea7fdb98c9eb2f2694da2ca425f4da", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.2", chapterName: "Chapter 15" },
      { id: "c9-ch15-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "4:03", url: "https://collection.cloudinary.com/dm8ozollp/af48d55490be3a14a3e74dfc0da94dc7", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" }
>>>>>>> 5a90334ddceebf0ba92640f364fbab4edf3aca45
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
      { id: "c10-ch4-act1", title: "Ch 4 - Activity 4.1", description: "Maths activity for Ch 4", duration: "2:45", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772695448/Activity_4.1_cp_jfhmrh.mp4", thumbnail: thumbnailImage, chapter: "Chapter 4", activity: "Activity 4.1", chapterName: "Chapter 4" },
      { id: "c10-ch4-act2", title: "Ch 4 - Activity 4.2", description: "Maths activity for Ch 4", duration: "3:36", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772695898/Activity_4.2_cp_ylog5p.mp4", thumbnail: thumbnailImage, chapter: "Chapter 4", activity: "Activity 4.2", chapterName: "Chapter 4" },
      { id: "c10-ch4-act3", title: "Ch 4 - Activity 4.3", description: "Maths activity for Ch 4", duration: "3:23", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772695978/Activity_4.3_cp_u56qzh.mp4", thumbnail: thumbnailImage, chapter: "Chapter 4", activity: "Activity 4.3", chapterName: "Chapter 4" },
      // Ch 5 (1 video)
        { id: "c10-ch5-act3", title: "Ch 5 - Activity 5.3", description: "Maths activity for Ch 5", duration: "3:59", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772696082/Actvity_5.3_cp_tmoywr.mp4", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.3", chapterName: "Chapter 5" },
 // Ch 6 (1 video)
      { id: "c10-ch6-act1", title: "Ch 6 - Activity 6.1", description: "Maths activity for Ch 6", duration: "3:51", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772696179/Activity_6.1_cp_fvcqnl.mp4", thumbnail: thumbnailImage, chapter: "Chapter 6", activity: "Activity 6.1", chapterName: "Chapter 6" },
      // Ch 8 (2 videos)
      { id: "c10-ch8-act3", title: "Ch 8 - Activity 8.3", description: "Maths activity for Ch 8", duration: "11:24", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772696251/Activity_8.3_cp_ugkkix.mp4", thumbnail: thumbnailImage, chapter: "Chapter 8", activity: "Activity 8.3", chapterName: "Chapter 8" },
// Ch 9 (1 video)
      { id: "c10-ch9-act1", title: "Ch 9 - Activity 9.1", description: "Maths activity for Ch 9", duration: "7:01", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772696342/Activity_9.1_cp_m79s6t.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.1", chapterName: "Chapter 9" },
      // Ch 11 (1 video)
      { id: "c10-ch11-act1", title: "Ch 11 - Activity 11.1", description: "Maths activity for Ch 11", duration: "2:59", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772696669/Activity_11.1_cp_gjnji8.mp4", thumbnail: thumbnailImage, chapter: "Chapter 11", activity: "Activity 11.1", chapterName: "Chapter 11" },
      // Ch 15 (3 videos)
      { id: "c10-ch15-act1", title: "Ch 15 - Activity 15.1", description: "Maths activity for Ch 15", duration: "3:52", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772696734/Activity_15.1_cp_y68ye2.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.1", chapterName: "Chapter 15" },
      { id: "c10-ch15-act2", title: "Ch 15 - Activity 15.2", description: "Maths activity for Ch 15", duration: "5:31", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772701537/Activity_15.2_Cp_alkgad.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.2", chapterName: "Chapter 15" },
      { id: "c10-ch15-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "3:43", url: "https://res.cloudinary.com/djp98li7g/video/upload/v1772701567/Activity_15.3_Cp_zzp3eu.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" },
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

