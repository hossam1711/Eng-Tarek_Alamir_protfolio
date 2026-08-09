export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface SkillsData {
  expert: Skill[];
  familiar: Skill[];
}

export const skillsData: SkillsData = {
  expert: [
    { name: "Simplex Programming", percentage: 95, icon: "simplex" },
    { name: "AutoCAD", percentage: 95, icon: "autocad" },
    { name: "Dialux Evo", percentage: 90, icon: "dialux" },
    { name: "ETAP", percentage: 85, icon: "etap" },
    { name: "TIA Portal", percentage: 85, icon: "tia" },
    { name: "Logix Pro", percentage: 80, icon: "logix" },
    { name: "Factory IO", percentage: 80, icon: "factoryio" },
    { name: "Microsoft Office", percentage: 95, icon: "office" },
  ],
  familiar: [
    { name: "Word", percentage: 95, icon: "word" },
    { name: "Excel", percentage: 95, icon: "excel" },
    { name: "PowerPoint", percentage: 90, icon: "powerpoint" },
    { name: "Fire Alarm Systems", percentage: 90, icon: "firealarm" },
    { name: "CCTV Systems", percentage: 88, icon: "cctv" },
    { name: "Public Address", percentage: 85, icon: "pa" },
    { name: "Access Control", percentage: 85, icon: "access" },
    { name: "NFPA & Egyptian Code", percentage: 90, icon: "nfpa" },
  ]
};

// Icon mapping for skills
export const skillIconMap: Record<string, string> = {
  simplex: "FaFireExtinguisher",
  autocad: "FaDrawPolygon",
  dialux: "FaLightbulb",
  etap: "FaBolt",
  tia: "FaCogs",
  logix: "FaMicrochip",
  factoryio: "FaIndustry",
  office: "FaLaptop",
  word: "FaFileWord",
  excel: "FaFileExcel",
  powerpoint: "FaFilePowerpoint",
  firealarm: "FaFire",
  cctv: "FaVideo",
  pa: "FaVolumeUp",
  access: "FaLock",
  nfpa: "FaShieldAlt",
};
