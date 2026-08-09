import { IconType } from "react-icons";
import {
  FaHotel,
  FaClipboardCheck,
  FaShoppingCart,
  FaHome,
  FaUniversity,
  FaFire,
  FaIndustry,
  FaBuilding,
} from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  icon: IconType;
}

export const projects: Project[] = [
{
id: 1,
    title: "JAZ ALBERO Hotel",
    description: "Site Engineer for Fire Alarm (Simplex) — 4 levels, 1,300 detectors, integrated with firefighting & elevators.",
    image: "/images/jaz-albero.png",
    tags: ["Fire Alarm", "Simplex", "1,300 Detectors", "4 Levels"],
    github: "#",
    demo: "#",
    icon: FaHotel,
  },
  {
    id: 2,
    title: "The G Hotel EinBay",
    description: "Supervised construction & full commissioning of Fire Alarm (Simplex 4100 ES Panel) + PA (TOA) systems.",
    image: "/images/sound-public.jpg",
    tags: ["Fire Alarm", "Simplex 4100 ES", "PA / TOA"],
    github: "#",
    demo: "#",
    icon: FaHotel,
  },
  {
    id: 3,
    title: "AL OTHAIM Mall",
    description: "Shop drawings for CCTV, PA across all floors; designed coring layouts from Basement to Roof.",
    image: "/images/al-othaim.jpg",
    tags: ["CCTV", "PA", "Shop Drawings", "Coring Design"],
    github: "#",
    demo: "#",
    icon: FaShoppingCart,
  },
  {
    id: 4,
    title: "Ghazala Village",
    description: "Designed CCTV coverage layout for entire village facilities.",
    image: "/images/project-2.png",
    tags: ["CCTV", "Design"],
    github: "#",
    demo: "#",
    icon: FaHome,
  },
  {
    id: 5,
    title: "UMM AL-QURA University",
    description: "Prepared WAP shop drawings ensuring full Wi-Fi coverage across campus.",
    image: "/images/project-3.png",
    tags: ["WAP", "Wi-Fi Coverage", "Shop Drawings"],
    github: "#",
    demo: "#",
    icon: FaUniversity,
  },
  {
    id: 6,
    title: "Hyde Park",
    description: "Testing & Commissioning Fire Alarm system (Simplex Programming 4007 ES Panel).",
    image: "/images/hyde-park.png",
    tags: ["Fire Alarm", "T&C", "Simplex 4007 ES"],
    github: "#",
    demo: "#",
    icon: FaClipboardCheck,
  },
  {
    id: 7,
    title: "Orascom Giza Hotel",
    description: "Testing & Commissioning Fire Alarm system (4010 ES Panel).",
    image: "/images/mans.jpg",
    tags: ["Fire Alarm", "T&C", "Simplex 4010 ES"],
    github: "#",
    demo: "#",
    icon: FaHotel,
  },
  {
    id: 8,
    title: "Sunrise Group Hotels — Hurghada",
    description: "Testing & Commissioning Fire Alarm systems across multiple hotel properties (4100ES and two 4010 ES Panels).",
    image: "/images/sunrise.png",
    tags: ["Fire Alarm", "T&C", "Simplex 4100 ES", "Simplex 4010 ES"],
    github: "#",
    demo: "#",
    icon: FaHotel,
  },
  {
    id: 9,
    title: "Chipsy Factory",
    description: "Programming of Fire Alarm system (Simplex Programming 4007 ES Panel).",
    image: "/images/access-control.jpg",
    tags: ["Fire Alarm", "Programming", "Simplex 4007 ES"],
    github: "#",
    demo: "#",
    icon: FaIndustry,
  },
  {
    id: 10,
    title: "Building C — New Giza University",
    description: "Testing & Commissioning Fire Alarm system (Simplex Programming 4100ES Panel with Graphic and Evacuation).",
    image: "/images/building-c.jpg",
    tags: ["Fire Alarm", "T&C", "Simplex 4100 ES", "Graphic & Evacuation"],
    github: "#",
    demo: "#",
    icon: FaUniversity,
  },
  {
    id: 11,
    title: "29 FB in Rehab City",
    description: "Testing & Commissioning Fire Alarm System (Simplex Programming 4010 ES Panel).",
    image: "/images/fire-alarm.jpg",
    tags: ["Fire Alarm", "T&C", "Simplex 4010 ES"],
    github: "#",
    demo: "#",
    icon: FaBuilding,
  },
];
