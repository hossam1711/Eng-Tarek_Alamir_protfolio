"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight, BsStars } from "react-icons/bs";
import { projects } from "../../data/projects";

interface ProjectSliderProps {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ currentSlide, setCurrentSlide }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [setCurrentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative animate-fadeInRight">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] rounded-3xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
        <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-500">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
<Image src={project.image} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
        >
          <BsChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
        >
          <BsChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Sparkles */}
      <BsStars className="absolute -top-4 -right-4 w-8 h-8 text-[#20B2AA] animate-pulse-fast" />
      <BsStars className="absolute -bottom-0 -left-4 w-6 h-6 text-[#4682B4] animate-pulse-fast animation-delay-1000" />
    </div>
  );
};

export default ProjectSlider;
