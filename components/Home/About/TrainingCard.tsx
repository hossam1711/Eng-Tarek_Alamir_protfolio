"use client";
import React from "react";
import { Training } from "../../data/about";

interface TrainingCardProps {
  training: Training;
  index: number;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ training, index }) => {
  return (
    <div key={index} className="relative">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 transition-all duration-300 h-full">
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 bg-gradient-to-br ${training.color} rounded-lg flex items-center justify-center`}
          >
            <training.icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white leading-tight mb-1">
              {training.title}
            </h3>
            <p className="text-[#20B2AA] text-sm font-semibold mb-1">
              {training.organization}
            </p>
            <p className="text-gray-400 text-sm">{training.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;