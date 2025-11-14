import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.7, type: "string", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="
                rounded-full
                w-32
            "
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="
            flex
            items-end
            gap-2
            text-xl
            md:text-2xl
            mb-3
        "
      >
        Hi! I'm Josh Kenyon
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px]"
      >
        A front-end developer based in the UK
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        Proficient in React, TypeScript, JavaScript, and Tailwind CSS, I build responsive and
        user-friendly web applications that deliver exceptional user
        experiences.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          href="#contact"
          className="
                px-10
                py-3
                border
                border-white
                rounded-full
                bg-black
                text-white
                flex
                items-center
                gap-2
                dark:bg-transparent
            "
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="arrow image"
            className="
                w-4
            "
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="/JoshuaKenyonCV.pdf"
          download
          className="
            px-10
            py-3
            border
            rounded-full
            border-gray-500
            flex
            items-center
            gap-2
            bg-white
            dark:text-black

        "
        >
          My CV
          <Image src={assets.download_icon} alt="arrow image" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
