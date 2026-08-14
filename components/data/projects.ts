import { IconType } from "react-icons";
import {
  FaHotel,
  FaClipboardCheck,
  FaShoppingCart,
  FaHome,
  FaUniversity,
  FaIndustry,
  FaBuilding,
  FaHospital,
} from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  slug: string;
  icon: IconType;
  sections?: { title: string; items: string[] }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "JAZ ALBERO Hotel",
    description: "Site Engineer for Fire Alarm (Simplex) — 4 levels, 1,300 detectors, integrated with firefighting & elevators.",
    image: "/images/jaz-albero.png",
    tags: ["Fire Alarm", "Simplex", "1,300 Detectors", "4 Levels"],
    demo: "#",
    slug: "jaz-albero-hotel",
    icon: FaHotel,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Existing/old project requiring completion and rehabilitation of the Fire Alarm System.",
          "Parts of the installation had already been completed.",
          "Some existing installations had no corresponding drawings.",
          "Available drawings were incomplete and did not clearly indicate cable routes.",
          "The project contained approximately 1,500 devices.",
          "Fire Alarm Graphics System was included.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Fire Alarm System Installation.",
          "Cable Installation.",
          "Field Device Installation.",
          "Device Addressing.",
          "Simplex 4100 Panel Programming.",
          "Network Configuration.",
          "System Troubleshooting.",
          "Loop Testing.",
          "Device Testing.",
          "Network Testing.",
          "System Commissioning.",
        ],
      },
      {
        title: "Existing System Assessment",
        items: [
          "Reviewed the existing Fire Alarm installation.",
          "Identified areas where installation was completed without proper documentation.",
          "Reviewed unclear and inconsistent cable routes.",
          "Investigated existing network communication issues.",
          "Identified problems affecting system testing and operation.",
        ],
      },
      {
        title: "Programming & Configuration",
        items: [
          "Simplex 4100 programming.",
          "Device addressing.",
          "Network configuration.",
          "System configuration.",
          "Fire Alarm Graphics configuration.",
        ],
      },
      {
        title: "Testing & Troubleshooting",
        items: [
          "Device testing.",
          "Loop testing.",
          "Network testing.",
          "Fault investigation.",
          "Communication troubleshooting.",
          "System verification.",
          "Final commissioning.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Existing system issues were identified and addressed.",
          "Field devices were configured and tested.",
          "Network issues were investigated and resolved.",
          "Fire Alarm Graphics were configured.",
          "System testing was completed.",
          "System was prepared for final commissioning.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "THE G HOTEL – AIN SOKHNA",
    description: "Installation, programming, testing and commissioning of a large-scale networked addressable fire alarm system for The G Hotel in Ain Sokhna.",
    image: "/images/sound-public.jpg",
    tags: ["Fire Alarm", "Simplex 4100", "Hotel / Hospitality", "Networked System"],
    demo: "#",
    slug: "the-g-hotel-ain-sokhna",
    icon: FaHotel,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Main hotel building.",
          "8 guest buildings.",
          "Each guest building consists of 4 floors.",
          "Each floor contains 6 rooms.",
          "External restaurant building.",
          "Restaurant is connected to the main building through the Fire Alarm Network.",
          "More than 1,000 field devices.",
          "4 repeater panels.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Fire Alarm System Installation.",
          "Field device installation.",
          "Device addressing.",
          "Simplex 4100 panel programming.",
          "Network configuration.",
          "Repeater configuration.",
          "Loop testing.",
          "Device testing.",
          "Alarm and fault testing.",
          "Cause & Effect testing.",
          "System commissioning.",
        ],
      },
      {
        title: "System Architecture",
        items: [
          "Main Building → Simplex 4100",
          "Main System → 1000+ Devices",
          "Main System → 4 Repeaters",
          "Fire Alarm Network → 8 Guest Buildings",
          "Fire Alarm Network → External Restaurant",
        ],
      },
      {
        title: "Guest Buildings",
        items: [
          "8 Buildings",
          "4 Floors / Building",
          "6 Rooms / Floor",
          "24 Rooms / Building",
        ],
      },
      {
        title: "Networked Restaurant",
        items: [
          "Separate external building.",
          "Connected to the main hotel through the Fire Alarm Network.",
          "Integrated with the main fire alarm system.",
        ],
      },
      {
        title: "Installation",
        items: [
          "Fire Alarm Control Panel.",
          "Repeater Panels.",
          "Smoke Detectors.",
          "Heat Detectors.",
          "Manual Call Points.",
          "Sounders / Strobes.",
          "Monitor & Control Modules.",
          "Field Devices.",
        ],
      },
      {
        title: "Programming & Configuration",
        items: [
          "Simplex 4100 programming.",
          "Device addressing.",
          "Network configuration.",
          "Repeater configuration.",
          "System configuration.",
        ],
      },
      {
        title: "Testing & Commissioning",
        items: [
          "Device testing.",
          "Loop testing.",
          "Panel testing.",
          "Network testing.",
          "Repeater testing.",
          "Alarm & fault testing.",
          "Cause & Effect testing.",
          "Final commissioning.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "Managing and testing 1000+ devices.",
          "Coordinating the fire alarm system across 8 separate buildings.",
          "Integrating the external restaurant with the main fire alarm network.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Installation completed.",
          "Devices addressed and configured.",
          "Network configured.",
          "Repeaters configured.",
          "System tested.",
          "Cause & Effect verified.",
          "System commissioned successfully.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "AL OTHAIM Mall",
    description: "Shop drawings for CCTV, PA across all floors; designed coring layouts from Basement to Roof.",
    image: "/images/al-othaim.jpg",
    tags: ["CCTV", "PA", "Shop Drawings", "Coring Design"],
    demo: "#",
    slug: "al-othaim-mall",
    icon: FaShoppingCart,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Commercial shopping mall with approximately 5,000 m² of area.",
          "Project included Access Control and CCTV systems.",
          "Shop drawings were required for both systems.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Access Control Shop Drawings.",
          "CCTV Shop Drawings.",
          "Device Location Planning.",
          "System Layout Preparation.",
          "Device Distribution.",
          "Drawing Coordination.",
          "AutoCAD Drafting.",
        ],
      },
      {
        title: "Access Control",
        items: [
          "Access Control system layout.",
          "Door and device locations.",
          "System device distribution.",
          "Drawing preparation according to project requirements.",
        ],
      },
      {
        title: "CCTV",
        items: [
          "CCTV camera layout.",
          "Camera location planning.",
          "Device distribution.",
          "Drawing preparation.",
          "Coordination with the project layout.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "Coordinating ELV system layouts within the mall architectural layout.",
          "Ensuring proper device locations and coverage.",
          "Maintaining clear and organized shop drawings.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Access Control shop drawings completed.",
          "CCTV shop drawings completed.",
          "System layouts prepared for implementation.",
          "Drawings coordinated with the project requirements.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Ghazala Village",
    description: "Designed CCTV coverage layout for entire village facilities.",
    image: "/images/project-2.png",
    tags: ["CCTV", "Design"],
    demo: "#",
    slug: "ghazala-village",
    icon: FaHome,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Outdoor CCTV system design for Ghazalla Village.",
          "Existing CCTV drawings were not available.",
          "The CCTV design had to be developed from the available site information.",
          "The project required planning of outdoor camera locations and coverage.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "CCTV System Design.",
          "Outdoor Camera Location Planning.",
          "Camera Coverage Planning.",
          "AutoCAD Drawing Preparation.",
          "System Layout Development.",
          "Device Distribution.",
        ],
      },
      {
        title: "Design Process",
        items: [
          "Reviewed the available project information.",
          "Developed the CCTV layout from scratch.",
          "Used AutoCAD Navigator to assist with the design.",
          "Determined suitable outdoor camera locations.",
          "Planned camera coverage areas.",
          "Prepared the final CCTV drawings.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "No existing CCTV drawings were available.",
          "Required developing the system layout from scratch.",
          "Required coordinating camera locations with the existing site layout.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Complete outdoor CCTV layout developed.",
          "Camera locations identified.",
          "Coverage areas planned.",
          "Drawings prepared for implementation.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "UMM AL-QURA University",
    description: "Prepared WAP shop drawings ensuring full Wi-Fi coverage across campus.",
    image: "/images/project-3.png",
    tags: ["WAP", "Wi-Fi Coverage", "Shop Drawings"],
    demo: "#",
    slug: "umm-al-qura-university",
    icon: FaUniversity,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Wireless network design project.",
          "Required planning Wireless Access Point locations.",
          "Required defining the expected coverage area for each Access Point.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Wireless Access Point Layout.",
          "Access Point Location Planning.",
          "Wireless Coverage Area Design.",
          "Drawing Preparation.",
          "Device Distribution.",
          "AutoCAD Drafting.",
        ],
      },
      {
        title: "Wireless Design",
        items: [
          "Identified suitable Access Point locations.",
          "Planned the required wireless coverage areas.",
          "Developed the Wireless Access Point layout.",
          "Prepared the drawings for implementation.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Wireless Access Point locations defined.",
          "Coverage areas identified.",
          "Complete Wireless Access Point drawings prepared.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Hyde Park",
    description: "Testing & Commissioning Fire Alarm system (Simplex Programming 4007 ES Panel).",
    image: "/images/hyde-park.png",
    tags: ["Fire Alarm", "T&C", "Simplex 4007 ES"],
    demo: "#",
    slug: "hyde-park",
    icon: FaClipboardCheck,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Fire Alarm System based on a Simplex 4007 panel.",
          "System contained approximately 200 points.",
          "Project included a Repeater Panel.",
          "Panel programming was performed on-site while construction was still in progress.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Simplex 4007 Panel Programming.",
          "Device Configuration.",
          "Point Programming.",
          "Repeater Configuration.",
          "System Testing.",
          "Troubleshooting.",
        ],
      },
      {
        title: "Programming & Configuration",
        items: [
          "Programmed approximately 200 points.",
          "Configured the fire alarm panel according to the required system operation.",
          "Configured the Repeater Panel.",
          "Verified communication between the panel and repeater.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "Programming was performed while the project was still under construction.",
          "The Repeater Panel had an abnormal startup delay.",
          "The repeater did not operate normally from the beginning of the project.",
          "Investigated the repeater behavior and system operation.",
        ],
      },
      {
        title: "Testing & Troubleshooting",
        items: [
          "Panel testing.",
          "Point testing.",
          "Repeater testing.",
          "Communication testing.",
          "Fault investigation.",
          "System verification.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Simplex 4007 programmed successfully.",
          "Approximately 200 points configured.",
          "Repeater issue investigated and addressed.",
          "System tested and verified.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Orascom Giza Hotel",
    description: "Testing & Commissioning Fire Alarm system (4010 ES Panel).",
    image: "/images/mans.jpg",
    tags: ["Fire Alarm", "T&C", "Simplex 4010 ES"],
    demo: "#",
    slug: "orascom-giza-hotel",
    icon: FaHotel,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Existing building consisting of 6 floors.",
          "Building was undergoing renovation.",
          "The building was being converted into accommodation for Orascom employees working on Cairo Metro Line 4.",
          "Existing Fire Alarm System required troubleshooting and restoration.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Fire Alarm System Troubleshooting.",
          "Simplex 4010 Configuration.",
          "Device Testing.",
          "Fault Investigation.",
          "System Verification.",
          "Final Testing.",
        ],
      },
      {
        title: "System Details",
        items: [
          "Simplex 4010 Fire Alarm Control Panel.",
          "Approximately 400 points.",
          "Six-floor building.",
          "Existing Fire Alarm installation.",
        ],
      },
      {
        title: "Troubleshooting",
        items: [
          "Investigated existing system faults.",
          "Identified abnormal system conditions.",
          "Tested field devices and system points.",
          "Troubleshot the existing Fire Alarm System.",
          "Verified system operation after corrective actions.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Existing Fire Alarm faults were identified and resolved.",
          "System operation was restored.",
          "Approximately 400 points were verified.",
          "System returned to normal operating condition.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Sunrise Group Hotels — Hurghada",
    description: "Testing & Commissioning Fire Alarm systems across multiple hotel properties (4100ES and two 4010 ES Panels).",
    image: "/images/sunrise.png",
    tags: ["Fire Alarm", "T&C", "Simplex 4100 ES", "Simplex 4010 ES"],
    demo: "#",
    slug: "sunrise-group-hotels-hurghada",
    icon: FaHotel,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Project consisted of a group of hotels undergoing renovation.",
          "System included 3 Fire Alarm Control Panels.",
          "Two panels were Simplex 4010.",
          "One main panel was Simplex 4100.",
          "Approximately 2,000 devices across the system.",
          "Panels were connected through the Fire Alarm Network.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Fire Alarm Panel Programming.",
          "Device Addressing.",
          "Network Configuration.",
          "Panel-to-Panel Communication.",
          "System Testing.",
          "Network Testing.",
          "Troubleshooting.",
          "Commissioning.",
        ],
      },
      {
        title: "System Architecture",
        items: [
          "Simplex 4100 Main Panel.",
          "2 × Simplex 4010 Panels.",
          "Approximately 2,000 Devices.",
          "Fire Alarm Network connecting the panels.",
        ],
      },
      {
        title: "Programming & Configuration",
        items: [
          "Simplex 4010 programming.",
          "Simplex 4100 programming.",
          "Device configuration.",
          "Network configuration.",
          "Panel communication configuration.",
        ],
      },
      {
        title: "Testing & Commissioning",
        items: [
          "Device testing.",
          "Panel testing.",
          "Network communication testing.",
          "Alarm and fault testing.",
          "System integration testing.",
          "Final commissioning.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "Managing a large system with approximately 2,000 devices.",
          "Coordinating multiple Fire Alarm Control Panels.",
          "Establishing reliable network communication between the panels.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Three panels configured.",
          "Approximately 2,000 devices programmed and tested.",
          "Network communication established.",
          "System tested and commissioned.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Chipsy Factory",
    description: "Programming of Fire Alarm system (Simplex Programming 4007 ES Panel).",
    image: "/images/access-control.jpg",
    tags: ["Fire Alarm", "Programming", "Simplex 4007 ES"],
    demo: "#",
    slug: "chipsy-factory",
    icon: FaIndustry,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Fire Alarm System for the Chipsy factory in 6th of October.",
          "Existing Simplex 4007 panel was damaged by water.",
          "A replacement panel was required.",
          "The new panel needed to maintain the existing system configuration.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Simplex 4007 Panel Replacement.",
          "Panel Programming.",
          "System Configuration.",
          "Device Configuration.",
          "System Testing.",
          "Commissioning.",
        ],
      },
      {
        title: "Panel Replacement",
        items: [
          "Installed the replacement Simplex 4007 panel.",
          "Recreated the previous system configuration.",
          "Programmed the new panel according to the existing system setup.",
          "Verified device operation and system functions.",
        ],
      },
      {
        title: "Testing & Commissioning",
        items: [
          "Panel testing.",
          "Device testing.",
          "Alarm testing.",
          "Fault testing.",
          "System verification.",
          "Final commissioning.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Replacement Simplex 4007 programmed successfully.",
          "Existing system configuration restored.",
          "System tested successfully.",
          "Fire Alarm System returned to normal operation.",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Building C — New Giza University",
    description: "Testing & Commissioning Fire Alarm system (Simplex Programming 4100ES Panel with Graphic and Evacuation).",
    image: "/images/building-c.jpg",
    tags: ["Fire Alarm", "T&C", "Simplex 4100 ES", "Graphic & Evacuation"],
    demo: "#",
    slug: "building-c-new-giza-university",
    icon: FaUniversity,
    sections: [
      {
        title: "Project Overview",
        items: [
          "University building consisting of 4 floors.",
          "Simplex 4100 Fire Alarm Control Panel.",
          "System contained more than 800 points.",
          "Devices were distributed across 4 loops.",
          "System included Audio & Evacuation Message functionality.",
          "Fire Alarm System was integrated with different mechanical systems.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Simplex 4100 Panel Programming.",
          "Device Configuration.",
          "Loop Configuration.",
          "Audio & Evacuation Configuration.",
          "Mechanical System Integration.",
          "System Testing.",
          "Cause & Effect Testing.",
          "Commissioning.",
        ],
      },
      {
        title: "System Architecture",
        items: [
          "Simplex 4100 Main Panel.",
          "800+ Points.",
          "4 Loops.",
          "Audio & Evacuation System.",
          "Mechanical System Interfaces.",
        ],
      },
      {
        title: "Programming & Integration",
        items: [
          "Programmed the Simplex 4100 panel.",
          "Configured more than 800 points.",
          "Configured the four loops.",
          "Configured Audio & Evacuation Messages.",
          "Integrated the Fire Alarm System with different mechanical systems.",
        ],
      },
      {
        title: "Testing & Commissioning",
        items: [
          "Device testing.",
          "Loop testing.",
          "Audio testing.",
          "Evacuation message testing.",
          "Mechanical interface testing.",
          "Cause & Effect testing.",
          "Final commissioning.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Simplex 4100 programmed successfully.",
          "800+ points configured.",
          "Four loops tested.",
          "Audio & Evacuation functionality verified.",
          "Mechanical system interfaces tested.",
          "System commissioned successfully.",
        ],
      },
    ],
  },
  {
    id: 11,
    title: "29 FB in Rehab City",
    description: "Testing & Commissioning Fire Alarm System (Simplex Programming 4010 ES Panel).",
    image: "/images/fire-alarm.jpg",
    tags: ["Fire Alarm", "T&C", "Simplex 4010 ES"],
    demo: "#",
    slug: "29-fb-in-rehab-city",
    icon: FaBuilding,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Fire Alarm System based on a Simplex 4010 panel.",
          "System required integration with the Fire Fighting System.",
          "Required programming and functional testing of the interface.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Simplex 4010 Panel Programming.",
          "System Configuration.",
          "Fire Fighting System Integration.",
          "Interface Configuration.",
          "System Testing.",
          "Cause & Effect Testing.",
        ],
      },
      {
        title: "System Integration",
        items: [
          "Fire Alarm System connected with the Fire Fighting System.",
          "Configured the required interface.",
          "Programmed the required system logic.",
          "Verified the response between the connected systems.",
        ],
      },
      {
        title: "Testing",
        items: [
          "Panel testing.",
          "Interface testing.",
          "Fire Fighting System integration testing.",
          "Alarm response testing.",
          "Cause & Effect verification.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Simplex 4010 programmed successfully.",
          "Fire Fighting System integration completed.",
          "Interface tested successfully.",
          "System operation verified.",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "AHL MASR – New Alamein",
    description: "Fire Alarm System for a residential building with Sounder Bases and Signal Control Modules.",
    image: "/images/fire-alarm.jpg",
    tags: ["Fire Alarm", "Simplex 4007", "Residential", "Sounder Bases"],
    demo: "#",
    slug: "ahl-masr-new-alamein",
    icon: FaBuilding,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Residential building.",
          "Each floor consists of 4 apartments.",
          "Fire Alarm System based on a Simplex 4007 panel.",
          "System included Sounder Bases.",
          "Bell/sounder lines were controlled through Signal Control Modules.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Simplex 4007 Panel Programming.",
          "Device Configuration.",
          "Sounder Base Configuration.",
          "Signal Control Module Configuration.",
          "Alarm Testing.",
          "System Testing.",
        ],
      },
      {
        title: "System Configuration",
        items: [
          "Simplex 4007 Fire Alarm Panel.",
          "Addressable field devices.",
          "Sounder Bases.",
          "Signal Control Modules.",
          "Controlled notification circuits.",
        ],
      },
      {
        title: "Programming & Testing",
        items: [
          "Programmed the Simplex 4007 panel.",
          "Configured Sounder Bases.",
          "Configured Signal Control Modules.",
          "Tested sounder operation.",
          "Verified alarm signaling.",
          "Tested system response.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Panel programmed successfully.",
          "Sounder Bases configured.",
          "Signal Control Modules configured.",
          "Notification system tested successfully.",
          "System operation verified.",
        ],
      },
    ],
  },
  {
    id: 13,
    title: "EL-GAMAA EL-SHAREYA Burn Hospital – Ahmed Orabi",
    description: "Fire Alarm renovation project for an existing hospital building.",
    image: "/images/fire-alarm.jpg",
    tags: ["Fire Alarm", "Renovation", "Simplex 4010", "Hospital"],
    demo: "#",
    slug: "el-gamaa-el-shareya-burn-hospital",
    icon: FaHospital,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Fire Alarm renovation project for an existing hospital building.",
          "Existing system required renovation and modification.",
          "Project included replacement and addition of Fire Alarm devices.",
          "Required installation and replacement of cables.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Fire Alarm System Renovation.",
          "Device Replacement.",
          "Additional Device Installation.",
          "Cable Installation.",
          "Cable Replacement.",
          "Simplex 4010 Programming.",
          "Device Configuration.",
          "System Testing.",
          "Commissioning.",
        ],
      },
      {
        title: "Installation & Modification",
        items: [
          "Replaced existing Fire Alarm devices.",
          "Added new required devices.",
          "Installed new cables where required.",
          "Replaced existing/required cables.",
          "Configured approximately 350 devices.",
        ],
      },
      {
        title: "Programming & Testing",
        items: [
          "Simplex 4010 programming.",
          "Device addressing.",
          "Device testing.",
          "Loop testing.",
          "Alarm testing.",
          "Fault testing.",
          "Final system verification.",
        ],
      },
      {
        title: "Challenges",
        items: [
          "Working within an existing hospital building.",
          "Integrating new devices with the existing Fire Alarm System.",
          "Replacing and extending cabling while maintaining system functionality.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Existing system renovated.",
          "Devices replaced and added.",
          "Required cabling completed.",
          "Approximately 350 devices configured and tested.",
          "System tested and commissioned.",
        ],
      },
    ],
  },
  {
    id: 14,
    title: "Mansoura University Hospitals",
    description: "Networked Addressable Fire Alarm System with 3 panels and addressable sounders.",
    image: "/images/fire-alarm.jpg",
    tags: ["Fire Alarm", "Networked", "Simplex 4010", "Simplex 4007"],
    demo: "#",
    slug: "mansoura-university-hospitals",
    icon: FaHospital,
    sections: [
      {
        title: "Project Overview",
        items: [
          "Fire Alarm System consisting of 3 Fire Alarm Control Panels.",
          "Two panels are Simplex 4010.",
          "One panel is Simplex 4007.",
          "Panels are connected through the Fire Alarm Network.",
          "System includes addressable sounders.",
        ],
      },
      {
        title: "My Responsibilities",
        items: [
          "Simplex 4010 Programming.",
          "Simplex 4007 Programming.",
          "Network Configuration.",
          "Panel-to-Panel Communication.",
          "Addressable Sounder Programming.",
          "Device Configuration.",
          "System Testing.",
          "Commissioning.",
        ],
      },
      {
        title: "System Architecture",
        items: [
          "2 × Simplex 4010",
          "1 × Simplex 4007",
          "Fire Alarm Network.",
          "Addressable Sounders.",
          "Networked Fire Alarm System.",
        ],
      },
      {
        title: "Addressable Sounders",
        items: [
          "Addressable sounders required dedicated programming.",
          "Sounders were configured according to the required signaling behavior.",
          "Different signal conditions required specific sounder configuration.",
          "Tested sounder operation and system response.",
        ],
      },
      {
        title: "Programming & Configuration",
        items: [
          "Programmed the three Fire Alarm Control Panels.",
          "Configured network communication.",
          "Configured addressable sounders.",
          "Defined the required signaling behavior.",
          "Tested communication between the networked panels.",
        ],
      },
      {
        title: "Testing & Commissioning",
        items: [
          "Panel testing.",
          "Network testing.",
          "Device testing.",
          "Addressable sounder testing.",
          "Alarm testing.",
          "Fault testing.",
          "System integration testing.",
          "Final commissioning.",
        ],
      },
      {
        title: "Project Outcome",
        items: [
          "Three Fire Alarm Control Panels programmed.",
          "Network communication configured.",
          "Addressable sounders configured and tested.",
          "System integration verified.",
          "Complete system testing and commissioning completed.",
        ],
      },
    ],
  },
];
