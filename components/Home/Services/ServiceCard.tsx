"use client";
import React from "react";
import { Service } from "../../data/services";
import { BsArrowRight } from "react-icons/bs";

interface ServiceCardProps {
  service: Service;
  index: number;
  onBookNow: (message: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onBookNow }) => {
  return (
    <div
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#4682B4]/40 transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#4682B4] to-[#20B2AA] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="relative space-y-4">
        {/* Service Image */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4682B4]/20 to-[#20B2AA]/20"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4682B4] to-[#20B2AA] rounded-xl flex items-center justify-center">
              <span className="text-2xl font-black text-white">💻</span>
            </div>
          </div>
        </div>

        {/* Service Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#20B2AA] to-[#4682B4] bg-clip-text text-transparent">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#20B2AA] rounded-full"></div>
              <span className="text-xs text-gray-400">{feature}</span>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => onBookNow(service.whatsappMessage)}
          className="group relative w-full px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4682B4] to-[#20B2AA]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4682B4] to-[#20B2AA] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
          <span className="relative flex items-center justify-center gap-2 text-white font-semibold text-sm">
            Book Now
            <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;