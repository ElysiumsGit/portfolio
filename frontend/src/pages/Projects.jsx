import React from 'react';
import { motion } from 'framer-motion';
import ProjectContent from './projects/ProjectContent';

const Projects = ({ activeNav }) => {
  if (activeNav !== "projects") {
    return null;
  }

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-[750px] bg-white rounded-b-[2rem] rounded-tr-[2rem] px-10 py-16 shadow-md text-left max-h-[550px] overflow-y-auto hide-scrollbar flex flex-col gap-12"
    >
      <ProjectContent/>
    </motion.div>
  );
};

export default Projects;
