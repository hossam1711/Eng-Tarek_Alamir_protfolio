import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightText: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center mb-8 animate-fadeInUp ${className}`}>
      <Badge text={badge} className="mb-4" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
        <span className="text-white">{title} </span>
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] blur-2xl opacity-40"></span>
          <span className="relative bg-gradient-to-r from-[#20B2AA] via-[#4682B4] to-[#20B2AA] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
            {highlightText}
          </span>
        </span>
      </h1>

      {description && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;