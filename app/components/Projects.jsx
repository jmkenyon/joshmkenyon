import { assets, projectData } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[8%] md:px-[12%] py-20 scroll-mt-10 bg-slate-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3 dark:text-blue-400">
            Portfolio
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.a 
              key={index} 
              href={project.link} 
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative block rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-zinc-900 dark:border-zinc-800"
            >
              <div 
                className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              <div className="p-6 relative bg-white dark:bg-zinc-900">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 transition-colors duration-300 dark:bg-zinc-800 dark:group-hover:bg-white">
                    <Image
                      src={assets.send_icon}
                      alt="view"
                      className="w-4 opacity-50 group-hover:invert transition-all dark:invert dark:group-hover:invert-0"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;