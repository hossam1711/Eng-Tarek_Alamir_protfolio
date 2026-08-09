"use client";
import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import SkillCard from "./SkillCard";
import { skillsData } from "../../data/skills";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-8 md:py-10 bg-gradient-to-br from-[#0a0a0a] via-[#16213e] to-[#1a1a2e] overflow-hidden"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
<SectionHeader
          badge="My Skills"
          title="Technical"
          highlightText="Skills"
          description="A concise overview of my software programs and ELV engineering skills."
        />

        <div className="animate-fadeInUp animation-delay-300 md:flex md:gap-6">
          {/* Core Skills */}
          <div className="md:flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-[#9ca3af] to-[#b0b0b0] rounded-full"></div>
              <h2 className="text-2xl font-black text-[#e4e4e4]">Core Skills</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#b0b0b0] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.expert.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px bg-[#6c757d]/20 mx-3"></div>
    
          {/* Additional Skills */}
          <div className="md:flex-1 mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-[#b0b0b0] to-[#9ca3af] rounded-full"></div>
              <h2 className="text-2xl font-black text-[#e4e4e4]">Additional Skills</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#9ca3af] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.familiar.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default Skills;

