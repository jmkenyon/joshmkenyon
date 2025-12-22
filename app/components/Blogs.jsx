import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Blogs = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="blogs"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl"
      >
        My blog
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-col items-center justify-center"
      >
        <Button asChild variant={"elevated"} className="max-w-lg text-xl mt-20 p-7 bg-blue-400 text-white ">
          <Link href="https://joshuakenyon.dev" target="_blank">
            joshuakenyon.dev
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;
