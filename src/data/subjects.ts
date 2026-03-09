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
      { id: "sci10-cre-v1", title: "Chemical Reactions and Equations - Video 1", description: "Types of chemical reactions and balancing equations", duration: "4:27", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1773038166/10.1.2_cp_cdbtwg.mp4", thumbnail: thumbnailImage, chapterName: "Chemical Reactions and Equations" }
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
      { id: "c8-ch2-act1", title: "Ch 2 - Activity 2.1", description: "Maths activity for Ch 2", duration: "2:06", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772695583/Actvity_2.1_cp_le24ik.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.1", chapterName: "Chapter 2" },
      { id: "c8-ch2-act2", title: "Ch 2 - Activity 2.2", description: "Maths activity for Ch 2", duration: "1:42", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772700173/Actvity_2.2_cp_abtlbr.mp4", thumbnail: thumbnailImage, chapter: "Chapter 2", activity: "Activity 2.2", chapterName: "Chapter 2" },
      // Ch 3 (2 videos)
      { id: "c8-ch3-act1", title: "Ch 3 - Activity 3.1", description: "Maths activity for Ch 3", duration: "1:44", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772700789/Activity_3.1_cp_eyqbvc.mp4", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.1", chapterName: "Chapter 3" },
      { id: "c8-ch3-act5", title: "Ch 3 - Activity 3.5", description: "Maths activity for Ch 3", duration: "1:17", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772700867/Activity_3.5_cp_uwswza.mp4", thumbnail: thumbnailImage, chapter: "Chapter 3", activity: "Activity 3.5", chapterName: "Chapter 3" },
      // Ch 5 (3 videos)
      { id: "c8-ch4-act1", title: "Ch 5 - Activity 5.1", description: "Maths activity for Ch 5", duration: "3:52", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701035/Activity_5.1_cp_yfhei7.mp4", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.1", chapterName: "Chapter 5" },
      { id: "c8-ch4-act3", title: "Ch 5 - Activity 5.3", description: "Maths activity for Ch 5", duration: "4:03", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701102/Activity_5.3_cp_svagrt.mp4", thumbnail: thumbnailImage, chapter: "Chapter 5", activity: "Activity 5.3", chapterName: "Chapter 5" },
      // Ch 9 (6 videos)
      { id: "c8-ch8-act1", title: "Ch 9 - Activity 9.1", description: "Maths activity for Ch 9", duration: "2:52", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701302/Activity_9.1_cp_dfn8xw.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.1", chapterName: "Chapter 9" },
      { id: "c8-ch8-act2", title: "Ch 9 - Activity 9.2", description: "Maths activity for Ch 9", duration: "3:36", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701433/Activity_9.2_cp_zw3epu.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.2", chapterName: "Chapter 9" },
      { id: "c8-ch8-act3", title: "Ch 9 - Activity 9.3", description: "Maths activity for Ch 9", duration: "3:58", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701498/Activity_9.3_cp_dfq6ij.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.3", chapterName: "Chapter 9" },
      { id: "c8-ch8-act4", title: "Ch 9 - Activity 9.4", description: "Maths activity for Ch 9", duration: "2:29", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701516/Activity_9.4_cp_kmuz8i.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.4", chapterName: "Chapter 9" },
      { id: "c8-ch8-act5", title: "Ch 9 - Activity 9.5", description: "Maths activity for Ch 9", duration: "2:36", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701525/Activity_9.5_cp_hzxrj6.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.5", chapterName: "Chapter 9" },
      { id: "c8-ch8-act6", title: "Ch 9 - Activity 9.6", description: "Maths activity for Ch 9", duration: "2:36", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772701533/Activity_9.6_cp_hvgz9q.mp4", thumbnail: thumbnailImage, chapter: "Chapter 9", activity: "Activity 9.6", chapterName: "Chapter 9" },
      // Ch 11 (1 video)
      { id: "c8-ch9-act1", title: "Ch 11 - Activity 11.1", description: "Maths activity for Ch 11", duration: "2:08", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772702315/Activity_11.1_cp_nkrd8c.mp4", thumbnail: thumbnailImage, chapter: "Chapter 11", activity: "Activity 11.1", chapterName: "Chapter 11" },
      // Ch 14 (2 videos)
      { id: "c8-ch12-act1", title: "Ch 14 - Activity 14.1", description: "Maths activity for Ch 14", duration: "4:38", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772702483/Activity_14.1_cp_vfhwev.mp4", thumbnail: thumbnailImage, chapter: "Chapter 14", activity: "Activity 14.1", chapterName: "Chapter 14" },
      { id: "c8-ch12-act2", title: "Ch 14 - Activity 14.2", description: "Maths activity for Ch 14", duration: "4:57", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772702496/Activity_14.2_cp_rja1n5.mp4", thumbnail: thumbnailImage, chapter: "Chapter 14", activity: "Activity 14.2", chapterName: "Chapter 14" },
      // Ch 15 (3 videos)
      { id: "c8-ch13-act3", title: "Ch 15 - Activity 15.3", description: "Maths activity for Ch 15", duration: "5:01", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772702508/Activity_15.3_cp_rzyydl.mp4", thumbnail: thumbnailImage, chapter: "Chapter 15", activity: "Activity 15.3", chapterName: "Chapter 15" }
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
    id: "anubhav-class8",
    name: "Class 8",
    icon: "BookOpen",
    description: "Hands-on learning activities for Class 8 students",
    color: "from-orange-500 to-red-600",
    section: "Anubhav",
    topic: "Class 8",
    class: "Anubhav Class 8",
    totalVideos: 5,
    videos: []
  },
  {
    id: "anubhav-class9",
    name: "Class 9",
    icon: "BookOpen",
    description: "Hands-on learning activities for Class 9 students",
    color: "from-pink-500 to-rose-600",
    section: "Anubhav",
    topic: "Class 9",
    class: "Anubhav Class 9",
    totalVideos: 4,
    videos: []
  },
  {
    id: "anubhav-class10",
    name: "Class 10",
    icon: "BookOpen",
    description: "Hands-on learning activities for Class 10 students",
    color: "from-violet-500 to-purple-600",
    section: "Anubhav",
    topic: "Class 10",
    class: "Anubhav Class 10",
    totalVideos: 4,
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
    id: "geomagic-circle-english",
    name: "English",
    icon: "Code",
    description: "Geometric concepts exploring circles — English medium",
    color: "from-teal-500 to-green-600",
    section: "Geomagic",
    topic: "Circle",
    class: "Geomagic Circle",
    totalVideos: 24,
    videos: [
      { id: "geo-cir-en-01", title: "Parts Of The Circle", description: "Parts Of The Circle", duration: "2:14", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706883/geometric_1-8_atpl7l.mp4", thumbnail: thumbnailImage, chapterName: "Parts Of The Circle" },
      { id: "geo-cir-en-02", title: "Relationship Between The Radius And Diameter 1", description: "Relationship Between The Radius And Diameter 1", duration: "3:07", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706897/2._Relationship_Between_The_Radius_And_Diameter_1_mcegy6.mp4", thumbnail: thumbnailImage, chapterName: "Relationship Between The Radius And Diameter 1" },
      { id: "geo-cir-en-03", title: "The Relationship Between The Circumference And Diameter Of The Circle 1", description: "The Relationship Between The Circumference And Diameter Of The Circle 1", duration: "2:48", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706900/3._The_Relationship_Between_The_Circumference_And_Diameter_Of_The_Circle_1_eamaq7.mp4", thumbnail: thumbnailImage, chapterName: "The Relationship Between The Circumference And Diameter Of The Circle 1" },
      { id: "geo-cir-en-04", title: "The Perpendicular From The Center Of A Circle To A Chord Bisects The Chord", description: "The Perpendicular From The Center Of A Circle To A Chord Bisects The Chord", duration: "3:31", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706914/4._The_Perpendicular_From_The_Center_Of_A_Circle_To_A_Chord_Bisects_The_Chord_cwzbzu.mp4", thumbnail: thumbnailImage, chapterName: "The Perpendicular From The Center Of A Circle To A Chord Bisects The Chord" },
      { id: "geo-cir-en-05", title: "The Chords Equidistant From The Center Are Equal", description: "The Chords Equidistant From The Center Are Equal", duration: "2:56", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706918/5._The_Chords_Equidistant_From_The_Center_Are_Equal_l0ofiz.mp4", thumbnail: thumbnailImage, chapterName: "The Chords Equidistant From The Center Are Equal" },
      { id: "geo-cir-en-06", title: "Equal Chords Of A Circle Subtends Equal Angles At The Center", description: "Equal Chords Of A Circle Subtends Equal Angles At The Center", duration: "3:18", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706930/6._Equal_Chords_Of_A_Circle_Subtends_Equal_Angles_At_The_Center_yu4a4x.mp4", thumbnail: thumbnailImage, chapterName: "Equal Chords Of A Circle Subtends Equal Angles At The Center" },
      { id: "geo-cir-en-07", title: "If Two Chords Of A Circle Are Equal", description: "If Two Chords Of A Circle Are Equal", duration: "2:33", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706929/7._If_Two_Chords_Of_A_Circle_Are_Equal_jrf3j1.mp4", thumbnail: thumbnailImage, chapterName: "If Two Chords Of A Circle Are Equal" },
      { id: "geo-cir-en-08", title: "Segments Formed By Equal Chords Are Equal", description: "Segments Formed By Equal Chords Are Equal", duration: "3:44", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706941/8._Segments_Formed_By_Equal_Chords_Are_Equal_p1gvsl.mp4", thumbnail: thumbnailImage, chapterName: "Segments Formed By Equal Chords Are Equal" },
      { id: "geo-cir-en-09", title: "Congruent Arcs Of A Circle Subtends Equal Angles At The Center", description: "Congruent Arcs Of A Circle Subtends Equal Angles At The Center", duration: "2:05", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772705873/9._Congruent_Arcs_Of_A_Circle_Subtends_Equal_Angles_At_The_Center_mok212.mp4", thumbnail: thumbnailImage, chapterName: "Congruent Arcs Of A Circle Subtends Equal Angles At The Center" },
      { id: "geo-cir-en-10", title: "An Angle Subtended By An Arc At The Center Of A Circle Is Twice", description: "An Angle Subtended By An Arc At The Center Of A Circle Is Twice", duration: "3:52", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706071/10._An_Angle_Subtended_By_An_Arc_At_The_Center_Of_A_Circle_Is_Twice_pattbe.mp4", thumbnail: thumbnailImage, chapterName: "An Angle Subtended By An Arc At The Center Of A Circle Is Twice" },
      { id: "geo-cir-en-11", title: "Angles In The Same Segment Of A Circle Are Equal", description: "Angles In The Same Segment Of A Circle Are Equal", duration: "2:41", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706663/11._Angles_In_The_Same_Segment_Of_A_Circle_Are_Equal_chi8jf.mp4", thumbnail: thumbnailImage, chapterName: "Angles In The Same Segment Of A Circle Are Equal" },
      { id: "geo-cir-en-12", title: "An Angle Subtended By An Arc In A Major Segment 1", description: "An Angle Subtended By An Arc In A Major Segment 1", duration: "3:09", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706724/12._An_Angle_Subtended_By_An_Arc_In_A_Major_Segment_1_untvc3.mp4", thumbnail: thumbnailImage, chapterName: "An Angle Subtended By An Arc In A Major Segment 1" },
      { id: "geo-cir-en-13", title: "Angle Subtended By The Chord In A Major Segment", description: "Angle Subtended By The Chord In A Major Segment", duration: "2:27", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706748/13._Angle_Subtended_By_The_Chord_In_A_Major_Segment_wcyoct.mp4", thumbnail: thumbnailImage, chapterName: "Angle Subtended By The Chord In A Major Segment" },
      { id: "geo-cir-en-14", title: "The Angle Subtended By The Chord In A Minor Segment", description: "The Angle Subtended By The Chord In A Minor Segment", duration: "3:38", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706770/14._The_Angle_Subtended_By_The_Chord_In_A_Minor_Segment_d4l0fs.mp4", thumbnail: thumbnailImage, chapterName: "The Angle Subtended By The Chord In A Minor Segment" },
      { id: "geo-cir-en-15", title: "An Angle Subtended By The Endpoints Of A Diameter At Any Point 1", description: "An Angle Subtended By The Endpoints Of A Diameter At Any Point 1", duration: "2:19", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706799/15._An_Angle_Subtended_By_The_Endpoints_Of_A_Diameter_At_Any_Point_1_khnmym.mp4", thumbnail: thumbnailImage, chapterName: "An Angle Subtended By The Endpoints Of A Diameter At Any Point 1" },
      { id: "geo-cir-en-16", title: "A Tangent Cannot Be Drawn To A Circle From A Point Inside The Circle", description: "A Tangent Cannot Be Drawn To A Circle From A Point Inside The Circle", duration: "3:02", url: "https://res.cloudinary.com/ds9xv9f9n/video/upload/v1772706822/16._A_Tangent_Cannot_Be_Drawn_To_A_Circle_From_A_Point_Inside_The_Circle_q7mv8r.mp4", thumbnail: thumbnailImage, chapterName: "A Tangent Cannot Be Drawn To A Circle From A Point Inside The Circle" },
      { id: "geo-cir-en-17", title: "Only Two Tangents Can Be Drawn To A Circle From The Same External Point", description: "Only Two Tangents Can Be Drawn To A Circle From The Same External Point", duration: "2:53", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772705976/17._Only_Two_Tangents_Can_Be_Drawn_To_A_Circle_From_The_Same_External_Point_ulzsgv.mp4", thumbnail: thumbnailImage, chapterName: "Only Two Tangents Can Be Drawn To A Circle From The Same External Point" },
      { id: "geo-cir-en-18", title: "Tangents Drawn From The Same External Point To A Circle", description: "Tangents Drawn From The Same External Point To A Circle", duration: "3:24", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706097/18._Tangents_Drawn_From_The_Same_External_Point_To_A_Circle_tiuvh4.mp4", thumbnail: thumbnailImage, chapterName: "Tangents Drawn From The Same External Point To A Circle" },
      { id: "geo-cir-en-19", title: "In Two Concentric Circle, If The Chord Of The Larger Circle Touches The Smaller Circle", description: "In Two Concentric Circle, If The Chord Of The Larger Circle Touches The Smaller Circle", duration: "2:47", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706105/19._In_Two_Concentric_Circle_If_The_Chord_Of_The_Larger_Circle_Touches_The_Smaller_Circle_cor17n.mp4", thumbnail: thumbnailImage, chapterName: "In Two Concentric Circle, If The Chord Of The Larger Circle Touches The Smaller Circle" },
      { id: "geo-cir-en-20", title: "The Tangent At Any Point Of A Circle Is Perpendicular To The Radius At Point Of Contact", description: "The Tangent At Any Point Of A Circle Is Perpendicular To The Radius At Point Of Contact", duration: "3:15", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706121/20._The_Tangent_At_Any_Point_Of_A_Circle_Is_Perpendicular_To_The_Radius_At_Point_Of_Contact_k6bzzl.mp4", thumbnail: thumbnailImage, chapterName: "The Tangent At Any Point Of A Circle Is Perpendicular To The Radius At Point Of Contact" },
      { id: "geo-cir-en-21", title: "In A Cyclic Quadrilateral, The Opposite Angles Are Supplementary", description: "In A Cyclic Quadrilateral, The Opposite Angles Are Supplementary", duration: "2:38", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706129/21._In_A_Cyclic_Quadrilateral_The_Opposite_Angles_Are_Supplementary_nrcy1n.mp4", thumbnail: thumbnailImage, chapterName: "In A Cyclic Quadrilateral, The Opposite Angles Are Supplementary" },
      { id: "geo-cir-en-22", title: "The Exterior Angle Of A Cyclic Quadrilateral Is Equal To The Interior Opposite Angle", description: "The Exterior Angle Of A Cyclic Quadrilateral Is Equal To The Interior Opposite Angle", duration: "3:46", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706143/22._The_Exterior_Angle_Of_A_Cyclic_Quadrilateral_Is_Equal_To_The_Interior_Opposite_Angle_ddi0mn.mp4", thumbnail: thumbnailImage, chapterName: "The Exterior Angle Of A Cyclic Quadrilateral Is Equal To The Interior Opposite Angle" },
      { id: "geo-cir-en-23", title: "In A Quadrilateral, The Product Of The Diagonals Is Equal To The Sum", description: "In A Quadrilateral, The Product Of The Diagonals Is Equal To The Sum", duration: "2:22", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706233/23._In_A_Quadrilateral_The_Product_Of_The_Diagonals_Is_Equal_To_The_v0amhd.mp4", thumbnail: thumbnailImage, chapterName: "In A Quadrilateral, The Product Of The Diagonals Is Equal To The Sum" },
      { id: "geo-cir-en-24", title: "The Angle Between Two Tangents Drawn To A Circle", description: "The Angle Between Two Tangents Drawn To A Circle", duration: "3:55", url: "https://res.cloudinary.com/dm8ozollp/video/upload/v1772706262/24._The_Angle_Between_Two_Tangents_Drawn_To_A_Circle_jst78x.mp4", thumbnail: thumbnailImage, chapterName: "The Angle Between Two Tangents Drawn To A Circle" },
    ]
  },
  {
    id: "geomagic-circle-kannada",
    name: "Kannada",
    icon: "Code",
    description: "Geometric concepts exploring circles — Kannada medium",
    color: "from-emerald-500 to-teal-600",
    section: "Geomagic",
    topic: "Circle",
    class: "Geomagic Circle",
    totalVideos: 24,
    videos: [
      { id: "geo-cir-kn-01", title: "ವೃತ್ತದ ಭಾಗಗಳು", description: "ವೃತ್ತದ ಭಾಗಗಳು", duration: "2:31", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706016/1_ವೃತ್ತದ_ವಿವಿಧ_ಭಾಗಗಳು_mlrtc1.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತದ ಭಾಗಗಳು" },
      { id: "geo-cir-kn-02", title: "ತ್ರಿಜ್ಯ ಮತ್ತು ವ್ಯಾಸದ ನಡುವಿನ ಸಂಬಂಧ", description: "ತ್ರಿಜ್ಯ ಮತ್ತು ವ್ಯಾಸದ ನಡುವಿನ ಸಂಬಂಧ", duration: "3:12", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706014/2._ತ್ರಿಜ್ಯ_ಮತ್ತು_ವ್ಯಾಸದ_ನಡುವಿನ_ಸಂಬಂಧ_vwn0cv.mp4", thumbnail: thumbnailImage, chapterName: "ತ್ರಿಜ್ಯ ಮತ್ತು ವ್ಯಾಸದ ನಡುವಿನ ಸಂಬಂಧ" },
      { id: "geo-cir-kn-03", title: "ವೃತ್ತದ ಪರಿಧಿ ಮತ್ತು ವ್ಯಾಸದ ನಡುವಿನ ಸಂಬಂಧ", description: "ವೃತ್ತದ ಪರಿಧಿ ಮತ್ತು ವ್ಯಾಸದ ನಡುವಿನ ಸಂಬಂಧ", duration: "2:44", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706014/3._ವೃತ್ತದ_ಪರಿಧಿ_ಮತ್ತು_ವ್ಯಾಸದ_ನಡುವಿನ_ಸಂಬಂಧ_jfwiai.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತದ ಪರಿಧಿ ಮತ್ತು ವ್ಯಾಸದ ನಡುವಿನ ಸಂಬಂಧ" },
      { id: "geo-cir-kn-04", title: "ಕೇಂದ್ರದಿಂದ ಜ್ಯಾಗೆ ಎಳೆದ ಲಂಬವು ಆ ಜ್ಯಾವನ್ನು ಸಮದ್ವಿಭಾಜಿಸುತ್ತದೆ", description: "ಕೇಂದ್ರದಿಂದ ಜ್ಯಾಗೆ ಎಳೆದ ಲಂಬವು ಆ ಜ್ಯಾವನ್ನು ಸಮದ್ವಿಭಾಜಿಸುತ್ತದೆ", duration: "3:27", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706012/4._ಕೇಂದ್ರದಿಂದ_ಜ್ಯಾಕ್ಕೆ_ಎಳೆದ_ಲಂಬವು_ಜ್ಯಾವನ್ನು_ಅರ್ಧಿಸುತ್ತದೆ_ಅಥವಾ_ಜ್ಯಾವನ್ನು_ಅರ್ಧಿಸುವಂತೆ_se9svx.mp4", thumbnail: thumbnailImage, chapterName: "ಕೇಂದ್ರದಿಂದ ಜ್ಯಾಗೆ ಎಳೆದ ಲಂಬವು ಆ ಜ್ಯಾವನ್ನು ಸಮದ್ವಿಭಾಜಿಸುತ್ತದೆ" },
      { id: "geo-cir-kn-05", title: "ವೃತ್ತದ ಕೇಂದ್ರದಿಂದ ಸಮಾನ ದೂರದಲ್ಲಿರುವ ಜ್ಯಾಗಳು ಸಮಾನವಾಗಿರುತ್ತವೆ", description: "ವೃತ್ತದ ಕೇಂದ್ರದಿಂದ ಸಮಾನ ದೂರದಲ್ಲಿರುವ ಜ್ಯಾಗಳು ಸಮಾನವಾಗಿರುತ್ತವೆ", duration: "2:58", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706009/5._ವೃತ್ತದಲ್ಲಿ_ಸಮನಾದ_ಜ್ಯಾಗಳು_ಕೇಂದ್ರದಿಂದ_ಸಮಾನ_ದೂರದಲ್ಲಿರುತ್ತವೆ_ಅಥವಾ_ವೃತ್ತಕೇಂದ್ರದಿಂದ_bsjzxz.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತದ ಕೇಂದ್ರದಿಂದ ಸಮಾನ ದೂರದಲ್ಲಿರುವ ಜ್ಯಾಗಳು ಸಮಾನವಾಗಿರುತ್ತವೆ" },
      { id: "geo-cir-kn-06", title: "ಸಮಾನ ಜ್ಯಾಗಳು ವೃತ್ತಕೇಂದ್ರದಲ್ಲಿ ಸಮಾನ ಕೋಣಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ", description: "ಸಮಾನ ಜ್ಯಾಗಳು ವೃತ್ತಕೇಂದ್ರದಲ್ಲಿ ಸಮಾನ ಕೋಣಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ", duration: "3:20", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706008/6._ಸಮನಾದ_ಜ್ಯಾಗಳು_ವೃತ್ತಕೇಂದ್ರದಲ್ಲಿ_ಸಮಾನ_ಕೋನಗಳನ್ನು_ಉಂಟುಮಾಡುತ್ತವೆ_ಅಥವಾ_ಕೇಂದ್ರದಲ್ಲಿ_cb8uwk.mp4", thumbnail: thumbnailImage, chapterName: "ಸಮಾನ ಜ್ಯಾಗಳು ವೃತ್ತಕೇಂದ್ರದಲ್ಲಿ ಸಮಾನ ಕೋಣಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ" },
      { id: "geo-cir-kn-07", title: "ಒಂದು ವೃತ್ತದ ಎರಡು ಜ್ಯಾಗಳು ಸಮಾನವಾಗಿದ್ದಲ್ಲಿ ಅವುಗಳ ಜ್ಯಾ ಕೋಣಗಳು ಸಮಾನ", description: "ಒಂದು ವೃತ್ತದ ಎರಡು ಜ್ಯಾಗಳು ಸಮಾನವಾಗಿದ್ದಲ್ಲಿ ಅವುಗಳ ಜ್ಯಾ ಕೋಣಗಳು ಸಮಾನ", duration: "2:35", url: "https://res.cloudinary.com/dlcbfz8z1/video/upload/v1772706003/7._ಸಮನಾದ_ಜ್ಯಾಗಳಿಂದ_ಉಂಟಾದ_ಕಂಸಗಳು_ಸಮನಾಗಿರುತ್ತವೆ_ಅಥವಾ_ವೃತ್ತದ_ಎರಡು_ಕಂಸಗಳು_o3gehi.mp4", thumbnail: thumbnailImage, chapterName: "ಒಂದು ವೃತ್ತದ ಎರಡು ಜ್ಯಾಗಳು ಸಮಾನವಾಗಿದ್ದಲ್ಲಿ ಅವುಗಳ ಜ್ಯಾ ಕೋಣಗಳು ಸಮಾನ" },
      { id: "geo-cir-kn-08", title: "ಸಮಾನ ಜ್ಯಾಗಳಿಂದ ರಚಿತ ವೃತ್ತಖಂಡಗಳು ಸಮಾನ ಕ್ಷೇತ್ರಫಲ ಹೊಂದಿರುತ್ತವೆ", description: "ಸಮಾನ ಜ್ಯಾಗಳಿಂದ ರಚಿತ ವೃತ್ತಖಂಡಗಳು ಸಮಾನ ಕ್ಷೇತ್ರಫಲ ಹೊಂದಿರುತ್ತವೆ", duration: "3:40", url: "https://res.cloudinary.com/dbz3saipn/video/upload/v1772706600/8._ಸಮಾನ_ಜ್ಯಾಗಳಿಂದ_ರಚಿತ_ವೃತ್ತಖಂಡಗಳು_ಸಮಾನ_ಕ್ಷೇತ್ರಫಲ_ಹೊಂದಿರುತ್ತವೆ_unipin.mp4", thumbnail: thumbnailImage, chapterName: "ಸಮಾನ ಜ್ಯಾಗಳಿಂದ ರಚಿತ ವೃತ್ತಖಂಡಗಳು ಸಮಾನ ಕ್ಷೇತ್ರಫಲ ಹೊಂದಿರುತ್ತವೆ" },
      { id: "geo-cir-kn-09", title: "ಸರ್ವಸಮ ಚಾಪಗಳಿಂದ ಕೇಂದ್ರದಲ್ಲಿ ಸಮಾನ ಕೋಣಗಳು ಉಂಟಾಗುತ್ತವೆ", description: "ಸರ್ವಸಮ ಚಾಪಗಳಿಂದ ಕೇಂದ್ರದಲ್ಲಿ ಸಮಾನ ಕೋಣಗಳು ಉಂಟಾಗುತ್ತವೆ", duration: "2:08", url: "https://res.cloudinary.com/dip88i7vp/video/upload/v1772703886/9._ಸರ್ವಸಮ_ಚಾಪಗಳಿಂದ_ಕೇಂದ್ರದಲ್ಲಿ_ಸಮಾನ_ಕೋಣಗಳು_ಉಂಟಾಗುತ್ತವೆ_bhgeni.mp4", thumbnail: thumbnailImage, chapterName: "ಸರ್ವಸಮ ಚಾಪಗಳಿಂದ ಕೇಂದ್ರದಲ್ಲಿ ಸಮಾನ ಕೋಣಗಳು ಉಂಟಾಗುತ್ತವೆ" },
      { id: "geo-cir-kn-10", title: "ಒಂದು ವೃತ್ತದ ಕೇಂದ್ರದಲ್ಲಿ ಚಾಪದಿಂದ ಉಂಟಾದ ಕೋಣ ಸ್ಪರ್ಶಕ ಕೋಣಕ್ಕಿಂತ ಎರಡು ಪಟ್ಟು", description: "ಒಂದು ವೃತ್ತದ ಕೇಂದ್ರದಲ್ಲಿ ಚಾಪದಿಂದ ಉಂಟಾದ ಕೋಣ ಸ್ಪರ್ಶಕ ಕೋಣಕ್ಕಿಂತ ಎರಡು ಪಟ್ಟು", duration: "3:50", url: "https://res.cloudinary.com/dip88i7vp/video/upload/v1772705886/10._ಒಂದು_ವೃತ್ತದ_ಕೇಂದ್ರದಲ್ಲಿ_ಚಾಪದಿಂದ_ಉಂಟಾದ_ಕೋಣ_ಸ್ಪರ್ಶಕ_ಕೋಣಕ್ಕಿಂತ_ಎರಡು_ಪಟ್ಟು_xwpthp.mp4", thumbnail: thumbnailImage, chapterName: "ಒಂದು ವೃತ್ತದ ಕೇಂದ್ರದಲ್ಲಿ ಚಾಪದಿಂದ ಉಂಟಾದ ಕೋಣ ಸ್ಪರ್ಶಕ ಕೋಣಕ್ಕಿಂತ ಎರಡು ಪಟ್ಟು" },
      { id: "geo-cir-kn-11", title: "ಒಂದು ವೃತ್ತದ ಒಂದೇ ಖಂಡದಲ್ಲಿರುವ ಕೋಣಗಳು ಪರಸ್ಪರ ಸಮ", description: "ಒಂದು ವೃತ್ತದ ಒಂದೇ ಖಂಡದಲ್ಲಿರುವ ಕೋಣಗಳು ಪರಸ್ಪರ ಸಮ", duration: "2:43", url: "https://res.cloudinary.com/dip88i7vp/video/upload/v1772705853/11._ಒಂದು_ವೃತ್ತದ_ಒಂದೇ_ಖಂಡದಲ್ಲಿರುವ_ಕೋಣಗಳು_ಪರಸ್ಪರ_ಸಮ_hotyir.mp4", thumbnail: thumbnailImage, chapterName: "ಒಂದು ವೃತ್ತದ ಒಂದೇ ಖಂಡದಲ್ಲಿರುವ ಕೋಣಗಳು ಪರಸ್ಪರ ಸಮ" },
      { id: "geo-cir-kn-12", title: "ಲಘು ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ಸ್ಪ್ರ್ಶ ಕೋನದ ಪ್ರಮಾಣ ಲಘು ಸ್ಪ್ರ್ಶ ಕೋಣ", description: "ಲಘು ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ಸ್ಪ್ರ್ಶ ಕೋನದ ಪ್ರಮಾಣ ಲಘು ಸ್ಪ್ರ್ಶ ಕೋಣ", duration: "3:11", url: "https://res.cloudinary.com/dip88i7vp/video/upload/v1772705833/12._ಲಘು_ವೃತ್ತಖಂಡದಲ್ಲಿ_ಜ್ಯಾ_ಅಲ್ಲಿ_ಕೋನಮಾಪನ_ಸ್ಪ್ರ್ಶ_ಕೋನದ_ಪ್ರಮಾಣ_ಲಘು_ಸ್ಪ್ರ್ಶ_ಕೋಣ_tollmm.mp4", thumbnail: thumbnailImage, chapterName: "ಲಘು ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ಸ್ಪ್ರ್ಶ ಕೋನದ ಪ್ರಮಾಣ ಲಘು ಸ್ಪ್ರ್ಶ ಕೋಣ" },
      { id: "geo-cir-kn-13", title: "ಲಘು ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ದೀರ್ಘ ಕೋಣಕ್ಕಿಂತ ಅಧಿಕ", description: "ಲಘು ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ದೀರ್ಘ ಕೋಣಕ್ಕಿಂತ ಅಧಿಕ", duration: "2:29", url: "https://res.cloudinary.com/dip88i7vp/video/upload/v1772706151/13._ಲಘು_ವೃತ್ತಖಂಡದಲ್ಲಿ_ಜ್ಯಾ_ಅಲ್ಲಿ_ಕೋನಮಾಪನ_ದೀರ್ಘ_ಕೋಣಕ್ಕಿಂತ_ಅಧಿಕ_crkebo.mp4", thumbnail: thumbnailImage, chapterName: "ಲಘು ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ದೀರ್ಘ ಕೋಣಕ್ಕಿಂತ ಅಧಿಕ" },
      { id: "geo-cir-kn-14", title: "ಕಿಂದಿನ ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ಲಘು ಕೋಣ", description: "ಕಿಂದಿನ ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ಲಘು ಕೋಣ", duration: "3:36", url: "https://res.cloudinary.com/dip88i7vp/video/upload/v1772706148/14._ಕಿಂದಿನ_ವೃತ್ತಖಂಡದಲ್ಲಿ_ಜ್ಯಾ_ಅಲ್ಲಿ_ಕೋನಮಾಪನ_ಲಘು_ಕೋಣ_w7nab7.mp4", thumbnail: thumbnailImage, chapterName: "ಕಿಂದಿನ ವೃತ್ತಖಂಡದಲ್ಲಿ ಜ್ಯಾ ಅಲ್ಲಿ ಕೋನಮಾಪನ ಲಘು ಕೋಣ" },
      { id: "geo-cir-kn-15", title: "ವ್ಯಾಸದ ತುದಿ ಬಿಂದುಗಳಿಂದ ವೃತ್ತದ ಮೇಲಿನ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಉಂಟಾದ ಕೋಣ 90°", description: "ವ್ಯಾಸದ ತುದಿ ಬಿಂದುಗಳಿಂದ ವೃತ್ತದ ಮೇಲಿನ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಉಂಟಾದ ಕೋಣ 90°", duration: "2:21", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706148/15._ವ್ಯಾಸದ_ತುದಿ_ಬಿಂದುಗಳಿಂದ_ವೃತ್ತದ_ಮೇಲಿನ_ಯಾವುದೇ_ಬಿಂದುವಿನಲ್ಲಿ_ಉಂಟಾದ_ಕೋಣ_90_egdpzv.mp4", thumbnail: thumbnailImage, chapterName: "ವ್ಯಾಸದ ತುದಿ ಬಿಂದುಗಳಿಂದ ವೃತ್ತದ ಮೇಲಿನ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಉಂಟಾದ ಕೋಣ 90°" },
      { id: "geo-cir-kn-16", title: "ವೃತ್ತದ ಒಳಗಿನ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಸ್ಪರ್ಶರೇಖೆ ಎಳೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ", description: "ವೃತ್ತದ ಒಳಗಿನ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಸ್ಪರ್ಶರೇಖೆ ಎಳೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ", duration: "3:04", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706148/16._ವೃತ್ತದ_ಒಳಗಿನ_ಬಿಂದುವಿನಿಂದ_ವೃತ್ತಕ್ಕೆ_ಸ್ಪರ್ಶರೇಖೆ_ಎಳೆಯಲು_ಸಾಧ್ಯವಿಲ್ಲ_vrdvpf.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತದ ಒಳಗಿನ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಸ್ಪರ್ಶರೇಖೆ ಎಳೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ" },
      { id: "geo-cir-kn-17", title: "ವೃತ್ತದ ಹೊರಗಿನ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಕೇವಲ ಎರಡು ಸ್ಪರ್ಶರೇಖೆಗಳನ್ನು ಎಳೆಯಬಹುದು", description: "ವೃತ್ತದ ಹೊರಗಿನ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಕೇವಲ ಎರಡು ಸ್ಪರ್ಶರೇಖೆಗಳನ್ನು ಎಳೆಯಬಹುದು", duration: "2:55", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706418/17._ವೃತ್ತದ_ಹೊರಗಿನ_ಬಿಂದುವಿನಿಂದ_ವೃತ್ತಕ್ಕೆ_ಕೇವಲ_ಎರಡು_ಸ್ಪರ್ಶರೇಖೆಗಳನ್ನು_ಎಳೆಯಬಹುದು_xgpdav.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತದ ಹೊರಗಿನ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಕೇವಲ ಎರಡು ಸ್ಪರ್ಶರೇಖೆಗಳನ್ನು ಎಳೆಯಬಹುದು" },
      { id: "geo-cir-kn-18", title: "ಒಂದೇ ಬಾಹ್ಯ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಎಳೆದ ಸ್ಪರ್ಶರೇಖಾ ಖಂಡಗಳು ಸಮಾನ", description: "ಒಂದೇ ಬಾಹ್ಯ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಎಳೆದ ಸ್ಪರ್ಶರೇಖಾ ಖಂಡಗಳು ಸಮಾನ", duration: "3:22", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706610/18._ಒಂದೇ_ಬಾಹ್ಯ_ಬಿಂದುವಿನಿಂದ_ವೃತ್ತಕ್ಕೆ_ಎಳೆದ_ಸ್ಪರ್ಶರೇಖಾ_ಖಂಡಗಳು_ಸಮಾನ_imf5it.mp4", thumbnail: thumbnailImage, chapterName: "ಒಂದೇ ಬಾಹ್ಯ ಬಿಂದುವಿನಿಂದ ವೃತ್ತಕ್ಕೆ ಎಳೆದ ಸ್ಪರ್ಶರೇಖಾ ಖಂಡಗಳು ಸಮಾನ" },
      { id: "geo-cir-kn-19", title: "ಎರಡು ಕೇಂದ್ರ ವೃತ್ತ ಗಳಿದ್ದಾಗ ದೊಡ್ಡ ವೃತ್ತದ ಜ್ಯಾ ಸಣ್ಣ ವೃತ್ತಕ್ಕೆ ಸ್ಪರ್ಶಿಸದ ಜ್ಯಾ ಸಮದ್ವಿಭಾಜಿತಗೊಳ್ಳುತ್ತದೆ", description: "ಎರಡು ಕೇಂದ್ರ ವೃತ್ತ ಗಳಿದ್ದಾಗ ದೊಡ್ಡ ವೃತ್ತದ ಜ್ಯಾ ಸಣ್ಣ ವೃತ್ತಕ್ಕೆ ಸ್ಪರ್ಶಿಸದ ಜ್ಯಾ ಸಮದ್ವಿಭಾಜಿತಗೊಳ್ಳುತ್ತದೆ", duration: "2:49", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706807/19._ಎರಡು_ಕೇಂದ್ರ_ವೃತ್ತ_ಗಳಿದ್ದಾಗ_ದೊಡ್ಡ_ವೃತ್ತದ_ಜ್ಯಾ_ಸಣ್ಣ_ವೃತ್ತಕ್ಕೆ_ಸ್ಪರ್ಶಿಸದ_ಜ್ಯಾ_ಸಮದ್ವಿಭಾಜಿತಗೊಳ್ಳುತ್ತದೆ_hbo7bx.mp4", thumbnail: thumbnailImage, chapterName: "ಎರಡು ಕೇಂದ್ರ ವೃತ್ತ ಗಳಿದ್ದಾಗ ದೊಡ್ಡ ವೃತ್ತದ ಜ್ಯಾ ಸಣ್ಣ ವೃತ್ತಕ್ಕೆ ಸ್ಪರ್ಶಿಸದ ಜ್ಯಾ ಸಮದ್ವಿಭಾಜಿತಗೊಳ್ಳುತ್ತದೆ" },
      { id: "geo-cir-kn-20", title: "ವೃತ್ತದ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಎಳೆದ ಸ್ಪರ್ಶರೇಖೆ ಆ ಬಿಂದುವಿನ ತ್ರಿಜ್ಯಕ್ಕೆ ಲಂಬವಾಗಿರುತ್ತದೆ", description: "ವೃತ್ತದ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಎಳೆದ ಸ್ಪರ್ಶರೇಖೆ ಆ ಬಿಂದುವಿನ ತ್ರಿಜ್ಯಕ್ಕೆ ಲಂಬವಾಗಿರುತ್ತದೆ", duration: "3:17", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706807/20._ವೃತ್ತದ_ಯಾವುದೇ_ಬಿಂದುವಿನಲ್ಲಿ_ಎಳೆದ_ಸ್ಪರ್ಶರೇಖೆ_ಆ_ಬಿಂದುವಿನ_ತ್ರಿಜ್ಯಕ್ಕೆ_ಲಂಬವಾಗಿರುತ್ತದೆ_ut8gak.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತದ ಯಾವುದೇ ಬಿಂದುವಿನಲ್ಲಿ ಎಳೆದ ಸ್ಪರ್ಶರೇಖೆ ಆ ಬಿಂದುವಿನ ತ್ರಿಜ್ಯಕ್ಕೆ ಲಂಬವಾಗಿರುತ್ತದೆ" },
      { id: "geo-cir-kn-21", title: "ವೃತ್ತಾಂತರ ಚತುರ್ಭುಜದ ವಿರುದ್ಧ ಕೋಣಗಳ ಮೊತ್ತ 180° ಆಗಿರುತ್ತದೆ", description: "ವೃತ್ತಾಂತರ ಚತುರ್ಭುಜದ ವಿರುದ್ಧ ಕೋಣಗಳ ಮೊತ್ತ 180° ಆಗಿರುತ್ತದೆ", duration: "2:40", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706807/21._ವೃತ್ತಾಂತರ_ಚತುರ್ಭುಜದ_ವಿರುದ್ಧ_ಕೋಣಗಳ_ಮೊತ್ತ_180_ಆಗಿರುತ್ತದೆ_ciwupi.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತಾಂತರ ಚತುರ್ಭುಜದ ವಿರುದ್ಧ ಕೋಣಗಳ ಮೊತ್ತ 180° ಆಗಿರುತ್ತದೆ" },
      { id: "geo-cir-kn-22", title: "ವೃತ್ತಾಂತರ ಚತುರ್ಭುಜದ ಬಾಹ್ಯ ಕೋಣ ಎದುರು ಆಂತರಿಕ ಕೋಣಕ್ಕೆ ಸಮ", description: "ವೃತ್ತಾಂತರ ಚತುರ್ಭುಜದ ಬಾಹ್ಯ ಕೋಣ ಎದುರು ಆಂತರಿಕ ಕೋಣಕ್ಕೆ ಸಮ", duration: "3:48", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706809/22._ವೃತ್ತಾಂತರ_ಚತುರ್ಭುಜದ_ಬಾಹ್ಯ_ಕೋಣ_ಎದುರು_ಆಂತರಿಕ_ಕೋಣಕ್ಕೆ_ಸಮ_clwups.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತಾಂತರ ಚತುರ್ಭುಜದ ಬಾಹ್ಯ ಕೋಣ ಎದುರು ಆಂತರಿಕ ಕೋಣಕ್ಕೆ ಸಮ" },
      { id: "geo-cir-kn-23", title: "ಚತುರ್ಭುಜದಲ್ಲಿ ಕರ್ಣಗಳ ಗುಣಲಬ್ಧ ಬಾಹುಗಳ ಯುಗ್ಮ ಗುಣಲಬ್ಧಗಳ ಮೊತ್ತಕ್ಕೆ ಸಮ", description: "ಚತುರ್ಭುಜದಲ್ಲಿ ಕರ್ಣಗಳ ಗುಣಲಬ್ಧ ಬಾಹುಗಳ ಯುಗ್ಮ ಗುಣಲಬ್ಧಗಳ ಮೊತ್ತಕ್ಕೆ ಸಮ", duration: "2:24", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706802/23._ಚತುರ್ಭುಜದಲ್ಲಿ_ಕರ್ಣಗಳ_ಗುಣಲಬ್ಧ_ಬಾಹುಗಳ_ಯುಗ್ಮ_ಗುಣಲಬ್ಧಗಳ_ಮೊತ್ತಕ್ಕೆ_ಸಮ_clwups.mp4", thumbnail: thumbnailImage, chapterName: "ಚತುರ್ಭುಜದಲ್ಲಿ ಕರ್ಣಗಳ ಗುಣಲಬ್ಧ ಬಾಹುಗಳ ಯುಗ್ಮ ಗುಣಲಬ್ಧಗಳ ಮೊತ್ತಕ್ಕೆ ಸಮ" },
      { id: "geo-cir-kn-24", title: "ವೃತ್ತಕ್ಕೆ ಎಳೆದ ಎರಡು ಸ್ಪರ್ಶರೇಖೆಗಳ ನಡುವಿನ ಕೋಣ ಮತ್ತು ಕೇಂದ್ರ ಕೋಣ ಸಮಪೂರಕ", description: "ವೃತ್ತಕ್ಕೆ ಎಳೆದ ಎರಡು ಸ್ಪರ್ಶರೇಖೆಗಳ ನಡುವಿನ ಕೋಣ ಮತ್ತು ಕೇಂದ್ರ ಕೋಣ ಸಮಪೂರಕ", duration: "3:57", url: "https://res.cloudinary.com/diuumrlo/video/upload/v1772706829/24._ವೃತ್ತಕ್ಕೆ_ಎಳೆದ_ಎರಡು_ಸ್ಪರ್ಶರೇಖೆಗಳ_ನಡುವಿನ_ಕೋಣ_ಮತ್ತು_ಕೇಂದ್ರ_ಕೋಣ_ಸಮಪೂರಕ_gbeask.mp4", thumbnail: thumbnailImage, chapterName: "ವೃತ್ತಕ್ಕೆ ಎಳೆದ ಎರಡು ಸ್ಪರ್ಶರೇಖೆಗಳ ನಡುವಿನ ಕೋಣ ಮತ್ತು ಕೇಂದ್ರ ಕೋಣ ಸಮಪೂರಕ" },
    ]
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

