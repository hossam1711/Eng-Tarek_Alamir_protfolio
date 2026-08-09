"use client";
import React from "react";

import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";


const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen pt-[18vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]"
    >
      {backgroundEffects}



      <div className="relative z-10 flex flex-col items-center px-4 max-w-7xl mx-auto">
        <HeroImage />

{/* Name */}
        <div className="mt-6 animate-fadeInUp animation-delay-300">
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-center relative">
            <span className="relative inline-block bg-gradient-to-r from-[#9ca3af] via-[#b0b0b0] to-[#9ca3af] bg-clip-text text-transparent">
              Tarek
            </span>{" "}
            <span className="text-[#e4e4e4]">Mahmoud Alamir</span>
          </p>
        </div>

        {/* Headline */}
        <h1 className="w-full lg:w-[70%] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center font-black leading-tight animate-fadeInUp animation-delay-600 text-[#e4e4e4]">
          Electrical & ELV Engineer with{" "}
          <span className="bg-gradient-to-r from-[#9ca3af] via-[#b0b0b0] to-[#9ca3af] bg-clip-text text-transparent">
            precision and adaptability
          </span>{" "}
          delivering reliable, high-quality{" "}
          <span className="text-[#b0b0b0]">technical solutions</span>
        </h1>

        {/* Typewriter */}
        <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-black flex flex-wrap justify-center gap-3 animate-fadeInUp animation-delay-900">
          A passionate
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9ca3af] via-[#b0b0b0] to-[#9ca3af]">
            <Typewriter
              options={{
                strings: ["Electrical & ELV Engineer", "Light Current Systems", "Fire Alarm Engineer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>

        {/* Button */}
        <button
          onClick={scrollToProjects}
          className="group mt-5 px-10 py-4 relative cursor-pointer rounded-full text-lg font-black text-[#e4e4e4] overflow-hidden transform hover:scale-110 transition-all duration-500 animate-fadeInUp animation-delay-1200"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a3e] via-[#3a3a4e] to-[#2a2a3e] animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a3e] via-[#3a3a4e] to-[#2a2a3e] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e4e4e4]/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
          <span className="relative flex items-center gap-3">
            See my work
            <BsArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
          </span>
        </button>

        <HeroStats />
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default Hero;
