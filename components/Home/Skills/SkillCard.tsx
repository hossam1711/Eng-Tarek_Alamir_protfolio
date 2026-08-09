import React from "react";
import ProgressBar from "@/components/common/ProgressBar";
import { Skill } from "../../data/skills";
import {
  FaFireExtinguisher,
  FaDrawPolygon,
  FaLightbulb,
  FaBolt,
  FaCogs,
  FaMicrochip,
  FaIndustry,
  FaLaptop,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFire,
  FaVideo,
  FaVolumeUp,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  simplex: FaFireExtinguisher,
  autocad: FaDrawPolygon,
  dialux: FaLightbulb,
  etap: FaBolt,
  tia: FaCogs,
  logix: FaMicrochip,
  factoryio: FaIndustry,
  office: FaLaptop,
  word: FaFileWord,
  excel: FaFileExcel,
  powerpoint: FaFilePowerpoint,
  firealarm: FaFire,
  cctv: FaVideo,
  pa: FaVolumeUp,
  access: FaLock,
  nfpa: FaShieldAlt,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const Icon = iconMap[skill.icon];

  return (
    <div
      className="group relative bg-[#2a2a3e]/20 backdrop-blur-xl rounded-xl p-4 border border-[#6c757d]/20 hover:border-[#9ca3af]/30 transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2a2a3e] to-[#3a3a4e] rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="relative space-y-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* <div className="absolute -inset-2 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300"></div> */}
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#2a2a3e] to-[#3a3a4e] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-[#e4e4e4]" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-black text-[#e4e4e4] group-hover:text-[#9ca3af] transition-colors duration-300">
              {skill.name}
            </h3>
          </div>
          <div className="text-lg font-black bg-gradient-to-r from-[#9ca3af] to-[#b0b0b0] bg-clip-text text-transparent">
            {skill.percentage}%
          </div>
        </div>

        <ProgressBar percentage={skill.percentage} />
      </div>
    </div>
  );
};

export default SkillCard;