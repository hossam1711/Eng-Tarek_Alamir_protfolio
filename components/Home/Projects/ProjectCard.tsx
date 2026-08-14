"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Project } from "../../data/projects";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  onModalStateChange?: (isOpen: boolean) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onModalStateChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    onModalStateChange?.(true);
  };

  return (
    <>
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 transition-all duration-300 group">
        <div className="flex items-start gap-4 mb-3">
          <div className="relative">
            <div className="relative w-12 h-12 bg-gradient-to-br from-[#87CEEB] to-[#1E90FF] rounded-xl flex items-center justify-center">
              {React.createElement(project.icon, { className: "w-6 h-6 text-white" })}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-snug">{project.description}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gradient-to-r from-[#87CEEB]/10 to-[#1E90FF]/10 rounded-lg text-xs font-semibold text-[#87CEEB] border border-[#1E90FF]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex">
          {project.slug ? (
            <Link href={`/projects/${project.slug}`} className="w-full">
              <button
                type="button"
                className="w-full px-4 py-2.5 flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 border border-emerald-300 rounded-xl text-gray-950 text-sm font-extrabold transition-all duration-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3z" />
                  <path d="M5 5h5V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2v5H5V5z" />
                </svg>
                View Project Details
              </button>
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleOpenModal}
              className="w-full px-4 py-2.5 flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 border border-emerald-300 rounded-xl text-gray-950 text-sm font-extrabold transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3z" />
                <path d="M5 5h5V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2v5H5V5z" />
              </svg>
              View Project Details
            </button>
          )}
        </div>
      </div>

      {/* Project Details Modal - only show if no slug */}
      {!project.slug && (
        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;