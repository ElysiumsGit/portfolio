import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useResponsive from '../../utils/useResponsive';

const experiencePairs = [
  [
    {
      date: '2022 - Present',
      role: 'Fullstack Developer',
      location: 'Praetorian Intelligence INC',
      description:
        'Developed several successful video games using Unity 3D, Unreal and Cocos2D. Designed game features, levels and characters.',
    },
    {
      date: '2021 - 2022',
      role: 'Freelancing',
      location: 'N/A',
      description:
        'Created and designed game levels and characters. Developed game features and functions. Fixed bugs and optimized games.',
    },
  ],
  [
    {
      date: '2019 - 2021',
      role: 'Technical Assitant',
      location: 'AMA Daet.',
      description:
        'Engineered a robust AI system for an open-world action game, enhancing NPC behaviors that significantly increased player immersion.',
    },
    {
      date: '2018 - 2019',
      role: 'QA Tester',
      location: 'San Diego, GameWorks',
      description:
        'Tested gameplay features and collaborated with developers to report and resolve bugs. Ensured smooth gameplay experience.',
    },
  ],
  [
    {
      date: '2019 - 2021',
      role: 'Gameplay Programmer',
      location: 'Carson, ABC Inc.',
      description:
        'Engineered a robust AI system for an open-world action game, enhancing NPC behaviors that significantly increased player immersion.',
    },
    {
      date: '2018 - 2019',
      role: 'QA Tester',
      location: 'San Diego, GameWorks',
      description:
        'Tested gameplay features and collaborated with developers to report and resolve bugs. Ensured smooth gameplay experience.',
    },
  ],
];

const WorkExperienceContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <>
      {
        isDesktop && (
          <div className='flex flex-col gap-8'>
            <section>
                  <div className="mb-4">
                      <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1">
                      <span className="text-sm text-gray-600 font-medium">RESUME</span>
                      </div>
                  </div>

                  <h1 className="text-4xl font-semibold text-gray-900 mb-8">
                      WORK EXPERIENCE AND EDUCATION
                  </h1>

                  <div className="flex justify-between text-pink-500 font-medium text-sm relative mb-2 px-[130px]">
                      {experiencePairs[currentIndex].map((item, idx) => (
                      <span key={idx}>{item.date}</span>
                      ))}
                      <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200 mt-5">
                      <div className="absolute left-1/4 w-3 h-3 bg-pink-500 rounded-full top-[-6px]"></div>
                      <div className="absolute right-1/4 w-3 h-3 bg-pink-500 rounded-full top-[-6px]"></div>
                      </div>
                  </div>

                  <div className="relative h-[170px] mt-12">
                      <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                          key={currentIndex}
                          custom={direction}
                          initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
                          transition={{ type: 'tween', duration: 0.5 }}
                          className="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-8"
                      >
                          {experiencePairs[currentIndex].map((item, idx) => (
                          <div key={idx} className="text-center md:text-left">
                              <h3 className="text-lg text-center font-semibold text-gray-900">{item.role}</h3>
                              <p className="text-xs text-center uppercase text-gray-400 mt-1">{item.location}</p>
                              <p className="text-center mt-3 text-sm text-gray-600">{item.description}</p>
                          </div>
                          ))}
                      </motion.div>
                      </AnimatePresence>
                  </div>

                  <div className="flex justify-center space-x-2">
                      {experiencePairs.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentIndex === index ? 'bg-pink-500 scale-110' : 'bg-gray-300'
                          }`}
                      />
                      ))}
                  </div>
            </section>
          </div>
        )
      }

     {
        isMobile && (
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1">
                <span className="text-sm text-gray-600 font-medium">RESUME</span>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              WORK EXPERIENCE AND EDUCATION
            </h1>

            {experiencePairs.flat().map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <div className="text-pink-500 font-medium text-sm mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                <p className="text-xs uppercase text-gray-400 mt-1">{item.location}</p>
                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )
      }
    </>
  );
};

export default WorkExperienceContent;
