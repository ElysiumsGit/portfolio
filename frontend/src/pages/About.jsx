import React from 'react';
import Services from './about/Services';
import AboutContent from './about/AboutContent';
import { motion } from 'framer-motion';
import useResponsive from '../utils/useResponsive';

const About = ({ activeNav }) => {
  if (activeNav !== "about") {
    return null;
  }

  const {isMobile, isTablet, isDesktop} = useResponsive();

  return (
    <>
      {
        isDesktop && (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-[750px] bg-white rounded-b-[2rem] rounded-tr-[2rem] px-10 py-16 shadow-md text-left max-h-[550px] overflow-y-auto hide-scrollbar flex flex-col gap-12"
          >
            <AboutContent />
            <Services />
          </motion.div>
        )
      }

      {
        isMobile && (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-6 text-left flex flex-col gap-12"
          >
            <AboutContent />
            <Services />
          </motion.div>
        )
      }
    </>
    
  );
};

export default About;
