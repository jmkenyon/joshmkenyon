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
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.light_logo : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo image, says Josh"
          />
        </a>
        <ul
          className={`
        hidden 
        md:flex 
        items-center 
        gap-6 
        lg:gap-8 
        rounded-full
        px-12
        py-3
        ${
          isScroll
            ? ""
            : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
        }
        `}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#projects">My projects</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div
          className="
            flex
            items-center
            gap-4
        "
        >
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Moon Icon to set to night mode"
              className="w-6"
            />
          </button>
          <a
            className="
          hidden
          lg:flex
          items-center
          gap-3
          px-10
          py-2.5
          border
          border-gray-500
          rounded-full
          ml-4
          dark:border-white/50

          "
            href="#contact"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow icon"
            />
          </a>
          <button
            className="
           block
           md:hidden
           ml-3
           "
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu icon for mobile devices"
              className="w-6"
            />
          </button>
        </div>
        {/* mobile menu */}

        <ul
          ref={sideMenuRef}
          className="
        flex 
        md:hidden
        flex-col
        gap-4
        py-20
        px-10
        fixed
        -right-64
        top-0
        bottom-0
        w-64
        z-50
        h-screen
        bg-rose-50
        transition
        duration-500 
        dark:bg-[#2a004a]
        dark:text-white
        "
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close button"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          {/* <li>
            <a onClick={closeMenu} href="#about">About me</a>
          </li> */}
          <li>
            <a onClick={closeMenu} href="#projects">
              My projects
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#blogs">
              Blogs
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
