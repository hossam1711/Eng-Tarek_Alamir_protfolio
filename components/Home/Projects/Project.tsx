"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { BsStars, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";
import { projects } from "../../data/projects";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);
  const singleSetWidthRef = useRef(0);

  const getItemTotalWidth = useCallback(() => {
    if (!scrollContainerRef.current) return 62;
    const firstItem = scrollContainerRef.current.querySelector("button");
    if (!firstItem) return 62;
    return firstItem.offsetWidth + 6;
  }, []);

  const initDimensions = useCallback(() => {
    const itemWidth = getItemTotalWidth();
    singleSetWidthRef.current = projects.length * itemWidth;
  }, [getItemTotalWidth]);

  useEffect(() => {
    initDimensions();

    const animate = () => {
      const container = scrollContainerRef.current;
      if (!container) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (!isHovering) {
        scrollPosRef.current += 0.3;

        if (singleSetWidthRef.current > 0 && scrollPosRef.current >= singleSetWidthRef.current) {
          scrollPosRef.current = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosRef.current;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, initDimensions]);

  const prevProject = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div
      id="projects"
      className="relative py-6 md:py-10 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-6 animate-fadeInLeft min-w-0 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-[#87CEEB]/10 to-[#1E90FF]/10 rounded-full border border-[#1E90FF]/30">
              <BsStars className="w-3 h-3 md:w-4 md:h-4 text-[#87CEEB] animate-pulse" />
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent">
                Featured Projects
              </span>
            </div>

            {/* Heading */}
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-1 md:mb-2">
                <span className="text-white">Key</span>
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] opacity-40"></span>
                  <span className="relative bg-gradient-to-r from-[#87CEEB] via-[#1E90FF] to-[#87CEEB] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                    ELV Projects
                  </span>
                </span>
                <br />
                <span className="text-white">Across Hospitality & Commercial</span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed max-w-md break-words">
                Explore my collection of Fire Alarm, CCTV, Public Address,
                Access Control and ELV projects - designed and delivered with care.
              </p>
            </div>

            {/* Project info updated with current slide */}
            <div className="min-w-0 w-full">
              <ProjectCard project={projects[currentSlide]} />
            </div>

            {/* Project Icon Bar */}
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-1 md:gap-1.5 overflow-x-auto pb-1 md:pb-2 -mx-1 px-1 w-full min-w-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ msOverflowStyle: "none", scrollbarWidth: "none", overflowX: "auto" }}
            >
              {duplicatedProjects.map((project, index) => {
                const realIndex = index % projects.length;
                const isActive = realIndex === currentSlide;
                const Icon = project.icon;
                return (
                  <button
                    key={`${project.id}-${index}`}
                    onClick={() => setCurrentSlide(realIndex)}
                    className={`relative flex-shrink-0 flex flex-col items-center gap-0.5 w-10 md:w-12 lg:w-14 transition-all duration-300 cursor-pointer ${
                      isActive ? "scale-105" : "opacity-70 hover:opacity-100"
                    }`}
                    aria-label={project.title}
                  >
                    <div
                      className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#87CEEB] to-[#1E90FF] shadow-md shadow-[#1E90FF]/30"
                          : "bg-white/5 border border-white/10 text-gray-400 hover:text-[#87CEEB] hover:border-[#1E90FF]/30"
                      }`}
                    >
                      <Icon className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ${isActive ? "text-white" : ""}`} />
                    </div>
                    <span
                      className={`text-[8px] md:text-[9px] lg:text-[10px] font-semibold leading-tight text-center line-clamp-2 ${
                        isActive ? "text-[#87CEEB]" : "text-gray-400"
                      }`}
                    >
                      {project.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-2 md:gap-3 pt-0.5 md:pt-1">
              <button
                onClick={prevProject}
                className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white hover:border-[#1E90FF]/30 transition-all duration-300 cursor-pointer"
                aria-label="Previous project"
              >
                <BsChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
              <button
                onClick={nextProject}
                className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white hover:border-[#1E90FF]/30 transition-all duration-300 cursor-pointer"
                aria-label="Next project"
              >
                <BsChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>

          {/* Pass control to slider */}
          <div className="min-w-0 w-full">
            <ProjectSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
          </div>

        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default Project;