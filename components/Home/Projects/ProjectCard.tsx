"use client";
import React from "react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-3">
        <div className="relative">
          {/* <div className="absolute -inset-2 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-all duration-300"></div> */}
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

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 flex items-center justify-center gap-2 bg-blue-500 border border-blue-500 rounded-lg text-white text-sm font-medium transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.604-2.665-.305-5.466-1.334-5.466-5.933 0-1.31.468-2.383 1.236-3.222-.124-.304-.536-1.527.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.042.137 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.656 1.649.244 2.872.12 3.176.77.839 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.476 5.923.43.372.823 1.1.823 2.219v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 flex items-center justify-center gap-2 bg-green-500 border border-green-500 rounded-lg text-white text-sm font-medium transition-all duration-300"
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
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;