"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/components/data/projects";
import { BsChevronLeft, BsChevronDown } from "react-icons/bs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailPage = ({ params }: PageProps) => {
  const [resolvedParams, setResolvedParams] = React.useState<{ slug: string } | null>(null);
  const [openSections, setOpenSections] = useState<number[]>([0, 1]);
  const [animatingSections, setAnimatingSections] = useState<number[]>([]);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  React.useEffect(() => {
    const navbar = document.querySelector('[class*="z-[1000]"][class*="fixed"]');
    if (navbar) {
      (navbar as HTMLElement).style.display = "none";
    }
    return () => {
      if (navbar) {
        (navbar as HTMLElement).style.display = "";
      }
    };
  }, []);

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-[#f7f7f8] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-t-2 border-[#1E90FF] mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f7f7f8] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-[#1E90FF] hover:text-[#0f6fd6] transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const sections = project.sections || [];

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        setAnimatingSections((a) => a.filter((i) => i !== index));
        return prev.filter((i) => i !== index);
      }
      setAnimatingSections((a) => [...a, index]);
      return [...prev, index];
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      {/* Back Navigation */}
      <div className="max-w-3xl mx-auto px-4 pt-4 md:pt-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[#1E90FF] hover:text-[#0f6fd6] transition-colors duration-300 text-sm md:text-base font-medium"
        >
          <BsChevronLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="max-w-sm md:max-w-3xl mx-auto px-4 mt-4 md:mt-6">
          <div className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
            />
          </div>
        </div>
      )}

      {/* Project Header */}
      <section className="max-w-3xl mx-auto px-4 py-8 md:py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          {project.title}
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-5 md:mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm text-gray-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Sections as accordion */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-3">
        {sections.map((section, idx) => {
          const isOpen = openSections.includes(idx);
          const isAnimating = animatingSections.includes(idx);
          return (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex items-center justify-between px-4 py-3 md:px-5 md:py-4 text-left"
              >
                <span className="text-gray-900 font-medium text-base md:text-lg">
                  {section.title}
                </span>
                <BsChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-500 ease-out flex-shrink-0 ml-3 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: isOpen || isAnimating ? `${section.items.length * 60 + 40}px` : "0px",
                  opacity: isOpen || isAnimating ? 1 : 0,
                }}
              >
                <ul className="px-4 pb-4 md:px-5 md:pb-5 space-y-2 md:space-y-2.5">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#1E90FF] mt-1.5 md:mt-2 text-xs">•</span>
                      <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Gallery */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Installation Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {[
            "Fire Alarm Control Panel",
            "Repeater Panels",
            "Smoke Detectors",
            "Heat Detectors",
            "Manual Call Points",
            "Sounders / Strobes",
            "Monitor & Control Modules",
            "Field Devices",
          ].map((item, index) => (
            <div
              key={index}
              className="aspect-square bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center p-2 md:p-4 shadow-sm"
            >
              <span className="text-xs md:text-sm font-semibold text-gray-600 text-center leading-snug">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs md:text-sm mt-4 md:mt-6">
          Replace with actual project photos
        </p>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
