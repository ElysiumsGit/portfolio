import React from 'react';
import { motion } from 'framer-motion';
import WorkExperienceContent from './experience/WorkExperienceContent';
import EducationContent from './experience/EducationContent';
import useResponsive from '../utils/useResponsive';

const WorkExperience = ({ activeNav }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  if (isDesktop && activeNav !== "experience") {
    return null;
  }

  return (
   <>
    {
      isDesktop && (
         <motion.div
          key="experience"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-[750px] bg-white rounded-b-[2rem] rounded-tr-[2rem] px-10 py-16 shadow-md text-left max-h-[550px] overflow-y-auto hide-scrollbar flex flex-col gap-12"
        >
          <WorkExperienceContent />
          <EducationContent />
        </motion.div>
      )
    }

    {
      isTablet && (
         <motion.div
          key="experience"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className=" text-left max-h-[550px] px-6 flex flex-col gap-12 mt-12"
        >
          {/* <WorkExperienceContent /> */}
          {/* <EducationContent /> */}
          
        </motion.div>
      )
    }

    {
      isMobile && (
         <motion.div
          key="experience"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className=" text-left max-h-[550px] px-6 flex flex-col gap-12 mt-12"
        >
          <WorkExperienceContent />
          <EducationContent />
        </motion.div>
      )
    }
   </>
  );
};

export default WorkExperience;
