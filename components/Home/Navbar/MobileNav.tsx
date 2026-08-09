import React from "react";
import { navLinks } from "../../data/navigation";
import Link from "next/link";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { BsLightningChargeFill, BsStars } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

interface MobileNavProps {
  closeMobileNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeMobileNav }) => {
  return (
    <div className="lg:hidden">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
        onClick={closeMobileNav}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] md:w-[45%] bg-gradient-to-b from-gray-900 via-[#0a1a2e] to-gray-900 z-[1001] transition-transform duration-500 animate-slideIn overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeMobileNav}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
        >
          <CgClose className="w-6 h-6 text-white" />
        </button>

        {/* Header with Profile */}
        <div className="flex flex-col items-center px-6 pt-8 pb-6 border-b border-[#4682B4]/20">
          <div className="relative group mb-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#87CEEB] via-[#1E90FF] to-[#87CEEB] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-spin-slow"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#1E90FF] via-[#87CEEB] to-[#1E90FF] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500 animate-spin-slower"></div>

            <div className="relative transform transition-all duration-500 group-hover:scale-105">
              <Image
                src="/pic.jpg"
                alt="Hossam Yasser Hussein"
                width={100}
                height={100}
                className="relative rounded-full border-4 border-white transition-all duration-500"
              />
            </div>

            <span className="absolute bottom-1 right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-[3px] border-white animate-pulse-slow">
              <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping"></span>
            </span>

            <BsStars className="absolute -top-2 -right-2 w-5 h-5 text-[#20B2AA] animate-pulse-fast" />
            <BsStars className="absolute -bottom-1 -left-1 w-4 h-4 text-[#4682B4] animate-pulse-fast animation-delay-1000" />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-black bg-gradient-to-r from-[#87CEEB] via-[#1E90FF] to-[#87CEEB] bg-clip-text text-transparent mb-1">
              Hossam Yasser Hussein
            </h2>
            <p className="text-sm text-gray-400 font-semibold">Front-End Developer</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#87CEEB]/20 to-[#1E90FF]/20 rounded-lg flex items-center justify-center border border-[#1E90FF]/30">
                <FaCode className="w-4 h-4 text-[#87CEEB]" />
              </div>
              <span className="text-xs text-gray-500">Portfolio</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3 px-6 py-3">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={closeMobileNav}
              className="group relative flex items-center justify-between px-5 py-2 rounded-xl hover:bg-gradient-to-r hover:from-[#87CEEB]/10 hover:to-[#1E90FF]/10 transition-all border border-transparent hover:border-[#1E90FF]/30 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>

              <span className="relative text-lg text-gray-200 font-bold group-hover:text-[#87CEEB] transition-colors">
                {link.name}
              </span>
              <BsLightningChargeFill className="relative w-5 h-5 text-[#20B2AA] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
              
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] group-hover:w-4/5 transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 border-t border-[#1E90FF]/20">
          <div className="text-center">
            <p className="text-sm bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] bg-clip-text text-transparent font-bold">
              Made with 💙 by Hossam Yasser Hussein
            </p>
            <p className="text-xs text-gray-500 mt-1">© 2025 All rights reserved</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-slideIn { animation: slideIn 0.4s ease-out; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 30s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 1.5s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default MobileNav;