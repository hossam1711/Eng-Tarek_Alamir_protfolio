import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  gradient = "from-[#20B2AA] to-[#4682B4]",
  hover = true,
}) => {
  return (
    <div className={`group relative ${className}`}>
      {/* Glow Effect */}
      {hover && (
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
        ></div>
      )}

      {/* Card Content */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-[#4682B4]/40 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default Card;