import { assets, blogData } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Blogs = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="blogs"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        Browse through my latest posts and reflections.
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl"
      >
        My blogs
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {blogData.map(({ title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="
            border border-gray-400 rounded-lg px-8 py-12 
            cursor-pointer 
            hover:bg-[#fcf4ff]
            hover:-translate-y-1
            transition duration-500
             dark:hover:bg-[#2a004a]
            dark:hover:shadow-white
          "
          >
            {/* <Image src={icon} alt="image from blog" className="w-16 "/> */}

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="arrow icon for read more"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://joshmkenyon.substack.com/"
        className="w-max flex items-center justify-center gap-2
       text-gray-700 border-[0.5px] border-gray-700 rounded-full 
       py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]"
      >
        Show more{" "}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Blogs;
