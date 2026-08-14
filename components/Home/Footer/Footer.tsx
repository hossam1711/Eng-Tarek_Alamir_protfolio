"use client";
import React from "react";
import { navLinks, socialLinks, contactInfo } from "../../data/navigation";
import {
  FaEnvelope,
  FaHeart,
  FaWhatsapp,
} from "react-icons/fa";
import { BsStars, BsArrowUp } from "react-icons/bs";
import { animationStyles } from "../../styles/theme";
import Logo from "../../common/Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#16213e] to-[#1a1a2e]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,117,125,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(156,163,175,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(108,117,125,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,117,125,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(108,117,125,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#2a2a3e] to-[#3a3a4e] rounded-full blur-[120px] opacity-15 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#3a3a4e] to-[#2a2a3e] rounded-full blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#6c757d] to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 animate-fadeInUp">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo onClick={scrollToTop} />
            <p className="text-[#b0b0b0] text-sm leading-relaxed">
              ELV Engineer with hands-on experience in Fire Alarm, CCTV, Public Address, and Access Control systems.
            </p>
            <div className="flex items-center gap-2 text-sm animate-pulse">
              <BsStars className="w-4 h-4 text-[#9ca3af]" />
              <span className="text-[#9ca3af] font-semibold">
                Available for freelance <br /> and full-time jobs
              </span>
            </div>
          </div>

          {/* Quick Links + Services */}
          <div className="flex flex-wrap justify-between gap-8 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div className="flex-1 min-w-[140px] space-y-4 animation-delay-200">
              <h4 className="text-lg font-bold text-[#e4e4e4] flex items-center gap-2">
                Quick Links
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#9ca3af] to-[#b0b0b0]"></div>
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={link.name} style={{ animationDelay: `${index * 100}ms` }}>
                    <button
                      onClick={() => scrollToSection(link.path)}
                      className="group flex items-center gap-2 text-[#b0b0b0] hover:text-[#9ca3af] transition-all duration-300"
                    >
                      <span className="w-0 h-[2px] bg-gradient-to-r from-[#9ca3af] to-[#b0b0b0] group-hover:w-4 transition-all duration-300"></span>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex-1 min-w-[140px] space-y-4 animation-delay-400">
              <h4 className="text-lg font-bold text-[#e4e4e4] flex items-center gap-2">
                Services
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#b0b0b0] to-[#9ca3af]"></div>
              </h4>
              <ul className="space-y-2">
{["Fire Alarm", "CCTV Systems", "Public Address"].map((service, index) => (
                  <li key={service} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="group flex items-center gap-2 text-[#b0b0b0] hover:text-[#9ca3af] transition-all duration-300 cursor-pointer">
                      <span className="w-0 h-[2px] bg-gradient-to-r from-[#b0b0b0] to-[#9ca3af] group-hover:w-4 transition-all duration-300"></span>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {service}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 animation-delay-600">
            <h4 className="text-lg font-bold text-[#e4e4e4] flex items-center gap-2">
              Get in Touch
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#9ca3af] to-[#b0b0b0]"></div>
            </h4>

            {/* Whatsapp */}
            <a
              href={socialLinks.whatsapp}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[#b0b0b0] hover:text-[#9ca3af] transition-all duration-300"
            >
              <div className="relative p-2 bg-[#2a2a3e]/20 rounded-lg group-hover:bg-[#3a3a4e]/20 transition-all duration-300 border border-[#6c757d]/20 group-hover:border-[#9ca3af]/30">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2a2a3e] to-[#3a3a4e] rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <FaWhatsapp className="relative w-4 h-4 text-[#e4e4e4] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium text-[#e4e4e4]">{contactInfo.phone}</span>
            </a>

            {/* Email */}
            <a
              href={socialLinks.email}
              className="group flex items-center gap-3 text-[#b0b0b0] hover:text-[#9ca3af] transition-all duration-300"
            >
              <div className="relative p-2 bg-[#2a2a3e]/20 rounded-lg group-hover:bg-[#3a3a4e]/20 transition-all duration-300 border border-[#6c757d]/20 group-hover:border-[#9ca3af]/30">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2a2a3e] to-[#3a3a4e] rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <FaEnvelope className="relative w-4 h-4 text-[#e4e4e4] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium text-[#e4e4e4]">{contactInfo.email}</span>
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#6c757d]/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a2e] px-4">
            <BsStars className="w-4 h-4 text-[#9ca3af] animate-pulse-fast" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fadeInUp animation-delay-900">
          <p className="text-sm text-[#9ca3af] flex items-center gap-2 flex-wrap justify-center">
<span>© 2025 Tarek Mahmoud Alamir.</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="w-4 h-4 text-[#9ca3af] animate-pulse" />
            </span>
            <span>All rights reserved.</span>
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group relative px-6 py-3 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a3e]/10 to-[#3a3a4e]/10 group-hover:from-[#2a2a3e]/20 group-hover:to-[#3a3a4e]/20 transition-all duration-300"></div>
            <div className="absolute inset-0 border border-[#6c757d]/30 group-hover:border-[#9ca3af]/60 rounded-xl transition-colors duration-300"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e4e4e4]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2a2a3e] to-[#3a3a4e] rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2 text-sm font-bold text-[#9ca3af]">
              Back to Top
              <BsArrowUp className="w-4 h-4 group-hover:-translate-y-1 group-hover:scale-125 transition-all duration-300" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{animationStyles}</style>
    </footer>
  );
};

export default Footer;
