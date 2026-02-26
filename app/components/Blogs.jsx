import { assets, blogData } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Blogs = ({ isDarkMode }) => {
  return (
    <div id="blogs" className="w-full px-[8%] md:px-[12%] py-20 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 dark:text-blue-400">
            Insights
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Latest Thoughts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map(({ title, description, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group flex flex-col justify-between p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm dark:text-slate-400">
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium mt-8 text-slate-900 dark:text-slate-300">
                Read article
                <Image
                  src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
                  alt="arrow"
                  className="w-4 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://joshmkenyon.substack.com/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-50 text-slate-700 font-medium hover:bg-slate-100 transition-colors border border-slate-200 dark:bg-zinc-900 dark:border-zinc-800 dark:text-slate-300 dark:hover:bg-zinc-800"
          >
            View all on Substack
            <Image
              src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
              alt="arrow"
              className="w-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;