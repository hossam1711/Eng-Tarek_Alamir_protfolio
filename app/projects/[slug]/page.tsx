"use client";
import React from "react";
import Link from "next/link";
import { projects } from "@/components/data/projects";
import { BsChevronLeft } from "react-icons/bs";
import { backgroundEffects, animationStyles } from "@/components/styles/theme";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailPage = ({ params }: PageProps) => {
  const [resolvedParams, setResolvedParams] = React.useState<{ slug: string } | null>(null);

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
      <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden flex items-center justify-center">
        {backgroundEffects}
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-[#87CEEB] mx-auto mb-4"></div>
          <p className="text-gray-400 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden flex items-center justify-center">
        {backgroundEffects}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-black text-white mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-[#87CEEB] hover:text-[#1E90FF] transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const sections = project.sections || [];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      {backgroundEffects}

      <div className="relative z-10">
        {/* Back Navigation */}
        <div className="w-full max-w-4xl mx-auto px-4 pt-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#87CEEB] hover:text-[#1E90FF] transition-colors duration-300 text-sm font-semibold"
          >
            <BsChevronLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              {project.title}
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-4 pb-10 space-y-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-black text-white mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#1E90FF] mt-1.5 text-sm">•</span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-black text-white mb-6">Installation Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="aspect-square bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-400 text-center px-2">{item}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Replace with actual project photos
          </p>
        </section>
      </div>

      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default ProjectDetailPage;