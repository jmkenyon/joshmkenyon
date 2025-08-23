import { assets, projectData } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        Here's a showcase of what I've built using code.
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl"
      >
        My projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {projectData.map((project, index) => (
          <a key={index} href={project.link} target="_blank">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{duration: 0.3}}
              key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
            -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
            group-hover:bottom-7
            "
              >
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div
                  className="border rounded-full border-black w-9 h-9
              aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition "
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
