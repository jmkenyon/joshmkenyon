import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto min-h-[90vh] flex flex-col items-center justify-center gap-6 pt-20">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl opacity-50 -z-10"></div>
        <Image
          src={assets.profile_img}
          alt="Joshua Kenyon"
          className="rounded-full w-28 h-28 object-cover shadow-xl border-4 border-white dark:border-zinc-800"
        />
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="flex items-center justify-center gap-2 text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 mb-2">
          Hi, I'm Josh Kenyon
          <motion.div 
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <Image src={assets.hand_icon} alt="wave" className="w-5" />
          </motion.div>
        </h3>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Crafting responsive <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800 dark:from-slate-200 dark:to-slate-500">
            digital experiences.
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg sm:text-xl leading-relaxed mt-2"
      >
        Front-end developer based in the UK. Proficient in React, Python, and Tailwind CSS. I build aesthetic, user-centric web applications.
      </motion.p>

      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
      >
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium flex items-center gap-2 hover:bg-slate-800 hover:shadow-lg transition-all dark:bg-white dark:text-zinc-900 dark:hover:bg-slate-100"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>
        <a
          href="/CV_JoshuaKenyon.pdf"
          download
          className="px-8 py-3.5 rounded-full bg-white text-slate-700 font-medium flex items-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm dark:bg-zinc-900 dark:border-zinc-700 dark:text-slate-300 dark:hover:bg-zinc-800"
        >
          Download CV
          <Image src={assets.download_icon} alt="download" className="w-4 opacity-70" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;