import React from "react";
import { BsStars } from "react-icons/bs";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#20B2AA]/10 to-[#4682B4]/10 rounded-full border border-[#4682B4]/30 ${className}`}
    >
      <BsStars className="w-4 h-4 text-[#20B2AA] animate-pulse" />
      <span className="text-sm font-semibold bg-gradient-to-r from-[#20B2AA] to-[#4682B4] bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
};

export default Badge;