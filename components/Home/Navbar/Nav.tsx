"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { navLinks } from "../../data/navigation";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

interface NavProps {
  toggleMobileNav: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleMobileNav }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);

      const sections = navLinks.map((link) => link.path.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`transition-all ${
        navBg
          ? "bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#6c757d]/30"
          : "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#6c757d]/20"
      } duration-700 h-[12vh] z-[1000] fixed w-full top-0`}
    >

      <div className="flex items-center h-full justify-between w-[92%] xl:w-[88%] 2xl:w-[85%] mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-[#1a1a2e] rounded-lg flex items-center justify-center border border-[#6c757d] group-hover:bg-[#2a2a3e] transition-all duration-300">
            <FaCode className="w-6 h-6 text-[#e4e4e4] group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black text-[#e4e4e4] group-hover:scale-105 transition-transform duration-300">
              T.A
            </h1>
            <p className="text-[10px] font-semibold text-[#9ca3af] tracking-widest uppercase -mt-1">
              Electrical & ELV Engineer
            </p>
          </div>
        </button>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.path)}
              className={`px-4 py-2 text-base font-medium transition-all duration-300 ${
                activeSection === link.path.replace("#", "")
                  ? "bg-[#2a2a3e] text-[#e4e4e4] border-[#9ca3af]"
                  : "bg-[#1a1a2e] text-[#b0b0b0] border-[#6c757d] hover:bg-[#2a2a3e] hover:text-[#e4e4e4] hover:border-[#9ca3af]"
              } rounded-md border-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 xl:space-x-4">
          {/* Download CV */}
          <a
href="/Tarek_Alamir_CV.pdf"
            download="Tarek_Alamir_CV.pdf"
            className="group relative px-4 py-3 text-base font-medium cursor-pointer rounded-md bg-[#1a1a2e] text-[#e4e4e4] border-2 border-[#6c757d] transition-all duration-300 hover:bg-[#2a2a3e] hover:translate-y-[-3px] flex items-center space-x-2"
          >
            <BiDownload className="w-5 h-5 relative z-10" />
            <span className="relative z-10 hidden sm:inline">Download CV</span>
            <span className="relative z-10 sm:hidden">CV</span>
          </a>

          {/* Burger Menu */}
          <button onClick={toggleMobileNav} className="lg:hidden px-3 py-2 rounded-md bg-[#1a1a2e] text-[#e4e4e4] border border-[#6c757d] hover:bg-[#2a2a3e] transition-all duration-300">
            <HiBars3BottomRight className="w-6 h-6" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Nav;
