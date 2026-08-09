import React from "react";

interface ProgressBarProps {
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, className = "" }) => {
  return (
    <div className={`relative w-full h-2 bg-white/10 rounded-full overflow-hidden ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#20B2AA] via-[#4682B4] to-[#20B2AA] rounded-full transition-all duration-1000 ease-out group-hover:animate-gradient-x bg-[length:200%_200%]"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProgressBar;