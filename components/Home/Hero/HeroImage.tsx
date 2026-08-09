"use client";
import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative group">
      {/* Image Wrapper */}
      <div className="relative rounded-full overflow-hidden border-[6px] border-[#6c757d]">
<Image
          src="/profile-pic.jpg"
          alt="Tarek Mahmoud Alamir"
          width={180}
          height={180}
          className="object-cover w-[180px] h-[180px]"
          priority
        />
      </div>

    </div>
  );
};

export default HeroImage;