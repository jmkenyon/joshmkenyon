import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm dark:bg-zinc-950/80 dark:border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Image
            src={isDarkMode ? assets.light_logo : assets.logo}
            className="w-24 cursor-pointer"
            alt="Josh Kenyon Logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
            isScroll
              ? "text-slate-700 dark:text-slate-300"
              : "bg-white/60 backdrop-blur-sm border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-slate-800 dark:bg-zinc-900/50 dark:border-zinc-700 dark:text-slate-200"
          }`}
        >
          {["Home", "Projects", "Blogs", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Theme"
              className="w-5 opacity-80"
            />
          </button>
          <a
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg dark:bg-white dark:text-zinc-900 dark:hover:bg-slate-100"
            href="#contact"
          >
            Let's Talk
            <Image
              src={isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark}
              className="w-3"
              alt="arrow"
            />
          </a>
          <button className="block md:hidden p-2" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-5"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className="md:hidden fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-50 border-l border-slate-200 transition-transform duration-400 ease-in-out dark:bg-zinc-950 dark:border-zinc-800"
        >
          <button className="absolute right-6 top-6 p-2" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-4 opacity-70 hover:opacity-100 transition-opacity"
            />
          </button>
          <ul className="flex flex-col gap-6 pt-24 px-10 text-lg font-medium text-slate-800 dark:text-slate-200">
            {["Home", "Projects", "Blogs", "Contact"].map((item) => (
              <li key={item}>
                <a onClick={closeMenu} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
