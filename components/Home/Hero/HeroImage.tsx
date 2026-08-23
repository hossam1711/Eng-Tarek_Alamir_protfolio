"use client";
import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative group">
      {/* Image Wrapper */}
      <div className="relative rounded-full overflow-hidden border-[10px] border-[#6c757d]">
        <Image
          src="/images/TAREK_PIC.jpeg"
          alt="Tarek Mahmoud Alamir"
          width={240}
          height={240}
          className="object-contain w-[240px] h-[240px] bg-black/20"
          priority
        />
      </div>

    </div>
  );
};

export default HeroImage;