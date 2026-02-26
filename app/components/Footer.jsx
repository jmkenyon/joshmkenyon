import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full py-12 px-[8%] md:px-[12%] bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail" className="w-5" />
          <a href="mailto:joshmkenyon1@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            joshmkenyon1@gmail.com
          </a>
        </div>
        
        <p className="text-slate-500 text-sm dark:text-slate-500">
          © {new Date().getFullYear()} Joshua Kenyon. All rights reserved.
        </p>

        <ul className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <li>
            <a href="https://github.com/jmkenyon" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joshmkenyon/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;