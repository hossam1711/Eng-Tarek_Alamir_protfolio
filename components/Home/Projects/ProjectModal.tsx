"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../../data/projects";
import { CgClose } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[2500] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-gradient-to-br from-[#0a1120] via-[#162238] to-[#0a1120] border border-[#1E90FF]/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-[#1E90FF]/30 max-h-[85vh] overflow-y-auto transition-all transform scale-100 animate-slideUp"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#1E90FF]/20 to-transparent blur-3xl pointer-events-none"></div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-gray-300 hover:text-white cursor-pointer z-10"
          aria-label="Close details"
        >
          <CgClose className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-14 h-14 bg-gradient-to-br from-[#87CEEB] to-[#1E90FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1E90FF]/30 flex-shrink-0">
            {React.createElement(project.icon, { className: "w-7 h-7 text-white" })}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BsBuilding className="w-4 h-4 text-[#87CEEB]" />
              <span className="text-xs font-semibold text-[#87CEEB] uppercase tracking-wider">
                Engineering Case Details
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-[#87CEEB] bg-clip-text text-transparent">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#1E90FF]/15 rounded-lg text-xs font-semibold text-[#87CEEB] border border-[#1E90FF]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex justify-end pt-2 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-gray-950 font-extrabold text-sm rounded-xl transition-all shadow-md shadow-emerald-400/20 hover:scale-[1.02] cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
