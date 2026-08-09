"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <div>
      <Nav toggleMobileNav={toggleMobileNav} />
      {isMobileNavOpen && <MobileNav closeMobileNav={closeMobileNav} />}
    </div>
  );
};

export default ResponsiveNav;

