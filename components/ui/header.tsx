"use client";

import { useState, useEffect } from "react";

import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import NavButtons from "./nav-buttons";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-10 bg-opacity-50 md:bg-opacity-70 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-12 md:h-20">
          <Logo />
          <MobileMenu />
          <div className="hidden sm:block w-1/3">
            <NavButtons mobileNavOpen={false} onClick={false}></NavButtons>
          </div>
        </div>
      </div>
    </header>
  );
}
