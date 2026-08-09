"use client";
import React from "react";
import { FaCode, FaLaptopCode, FaHeart } from "react-icons/fa";

interface StatBadge {
  icon: React.ElementType;
  text: string;
  color: string;
}

const statsBadges: StatBadge[] = [
  {
    icon: FaCode,
    text: "1+ Years",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaLaptopCode,
    text: "10+ Projects",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
  {
    icon: FaHeart,
    text: "100% Quality",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-8 mb-6 flex gap-4 flex-wrap justify-center animate-fadeInUp animation-delay-1500">
      {statsBadges.map((badge, index) => (
        <div
          key={index}
          className="group relative px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 cursor-pointer"
        >
          <div
            className={`absolute -inset-1 bg-gradient-to-r ${badge.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          ></div>
          <div className="relative flex items-center gap-2">
            <badge.icon className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-300" />
            <p className="text-white font-bold text-base">{badge.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;