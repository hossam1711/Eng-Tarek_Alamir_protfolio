"use client";
import React from "react";
import { FaCertificate } from "react-icons/fa";
import { certificate } from "../../data/about";

const CertificateCard = () => {
  return (
    <div className="relative">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-12 h-12 bg-gradient-to-br from-[#4682B4] to-[#20B2AA] rounded-xl flex items-center justify-center">
            <FaCertificate className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">
              {certificate.title}
            </h3>
            <p className="text-[#20B2AA] text-md font-semibold">
              {certificate.field}
            </p>
            <p className="text-gray-400 text-sm">
              {certificate.organization} • {certificate.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;