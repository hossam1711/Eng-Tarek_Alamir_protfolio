import { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaTools,
} from "react-icons/fa";

export interface StatCard {
  icon: IconType;
  label: string;
  value: string;
  subtitle: string;
  color: string;
}

export interface Training {
  title: string;
  organization: string;
  period: string;
  icon: IconType;
  color: string;
}

export interface Education {
  degree: string;
  field: string;
  university: string;
  year: string;
  grade: string;
  description: string;
}

export interface Certificate {
  title: string;
  field: string;
  organization: string;
  year: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const statsCards: StatCard[] = [
  {
    icon: FaGraduationCap,
    label: "Degree",
    value: "B.Sc",
    subtitle: "Electrical Engineering",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaAward,
    label: "Experiences",
    value: "2+",
    subtitle: "Professional Roles",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
  {
    icon: FaTools,
    label: "Projects",
    value: "11+",
    subtitle: "Completed Works",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaLaptopCode,
    label: "Certified",
    value: "ELV",
    subtitle: "Light Current Systems",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
];

export const trainings: Training[] = [
  {
    title: "Light Current Engineer",
    organization: "Simple Sonic Technology",
    period: "Feb 2025 – Present",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    title: "Electrical Design Engineer",
    organization: "Easy Technology Solutions",
    period: "Aug 2024 – Dec 2024",
    icon: FaAward,
    color: "from-[#4682B4] to-[#20B2AA]",
  },
  {
    title: "Intern",
    organization: "Dar Alkahrabaa Training Center",
    period: "Jun – Sep 2023",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    title: "Intern",
    organization: "HA Consulting Group",
    period: "Jan – Mar 2023",
    icon: FaAward,
    color: "from-[#4682B4] to-[#20B2AA]",
  },
];

export const education: Education = {
  degree: "B.Sc. Electrical Engineering",
  field: "Power & Electric Machines",
  university: "Mansoura University",
  year: "Sep 2019 – Jul 2024",
  grade: "Very Good",
  description: "Graduation Project: Smart Electric System Mobility — Grade: Excellent",
};

export const certificate: Certificate = {
  title: "Professional Summary",
  field: "ELV Engineer",
  organization: "Fire Alarm, CCTV, Public Address & Access Control",
  year: "",
};

export const experience: Experience = {
  title: "Light Current Engineer",
  company: "Simple Sonic Technology",
  period: "Feb 2025 – Present",
  description: "Designed & reviewed Fire Alarm layouts (addressable & conventional) for residential and commercial projects. Supervised installation, T&C of Fire Alarm systems per NFPA & Egyptian Code. Prepared material submittals, quotations, and coordinated with consultants/contractors.",
  technologies: [
    "Simplex Programming",
    "AutoCAD",
    "Dialux Evo",
    "ETAP",
    "TIA Portal",
    "Logix Pro",
    "Factory IO",
    "Word",
    "Excel",
    "PowerPoint",
  ],
};
