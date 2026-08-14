"use client";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";

interface LogoProps {
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  showSubtitle = true,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-3 group cursor-pointer ${className}`}
    >
      {/* Icon Container with Electric Circuit & Lightning Glow */}
      <div className="relative flex items-center justify-center">
        {/* Animated Electric Glow Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] via-[#00BFFF] to-[#87CEEB] rounded-xl blur-md opacity-40 group-hover:opacity-80 group-hover:blur-lg transition-all duration-500 animate-pulse"></div>

        <div className="relative w-12 h-12 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0a0a0a] rounded-xl flex items-center justify-center border border-[#1E90FF]/40 group-hover:border-[#00BFFF] transition-all duration-300 shadow-lg shadow-[#1E90FF]/20 overflow-hidden">
          {/* Subtle Electric Background */}
          <GiElectric className="absolute w-10 h-10 text-[#1E90FF]/15 group-hover:text-[#00BFFF]/30 transition-colors duration-300" />

          {/* Electric Lightning Bolt Icon */}
          <BsLightningChargeFill className="relative w-6 h-6 text-[#00BFFF] group-hover:text-[#87CEEB] group-hover:scale-115 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]" />
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#e4e4e4] via-[#ffffff] to-[#87CEEB] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 tracking-wide">
          T.A
        </h1>
        {showSubtitle && (
          <p className="text-[10px] font-semibold text-[#87CEEB]/80 group-hover:text-[#00BFFF] tracking-widest uppercase -mt-1 transition-colors duration-300">
            Electrical & ELV Engineer
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
