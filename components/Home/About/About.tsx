"use client";
import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import StatsCards from "./StatsCards";
import EducationCard from "./EducationCard";
import CertificateCard from "./CertificateCard";
import TrainingCard from "./TrainingCard";
import ExperienceCard from "./ExperienceCard";
import { trainings } from "../../data/about";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-8 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Section Header */}
<SectionHeader
          badge="About Me"
          title="Design &"
          highlightText="Develop"
          description="ELV Engineer passionate about delivering reliable, high-quality
            Fire Alarm, CCTV, Public Address, and Access Control systems"
        />

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 animate-fadeInUp animation-delay-600">
          {/* Left Column - Education & Certificate */}
          <div className="lg:col-span-4 space-y-5">
            <EducationCard />
            <CertificateCard />
          </div>

          {/* Right Column - Trainings & Experience */}
          <div className="lg:col-span-8 space-y-6">
            {/* Trainings */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-8 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-full"></div>
<h2 className="text-2xl font-extrabold text-[#e4e4e4]">Experience</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#4682B4] to-transparent rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {trainings.map((training, index) => (
                  <TrainingCard
                    key={index}
                    training={training}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Experience */}
            <ExperienceCard />
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default About;