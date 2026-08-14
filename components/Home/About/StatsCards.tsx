"use client";
import React from "react";
import { statsCards } from "../../data/about";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 animate-fadeInUp animation-delay-300">
      {statsCards.map((stat, index) => (
        <div key={index} className="relative">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 transition-all duration-300 text-center">
            <stat.icon className="w-6 h-6 mx-auto mb-2 text-white" />
            <p
              className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
            >
              {stat.value}
            </p>
            <p className="text-gray-400 text-xs font-semibold">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;