import React from "react";
import { IoReorderThree, IoMoonOutline, IoPersonSharp } from "react-icons/io5";
import { FaUniversity, FaBriefcase, FaPaperPlane } from "react-icons/fa";
import useResponsive from "../utils/useResponsive";
import TyperAnimation from "./TypeAnimation";

const headerIcons = [
  { id: "menu", icon: IoReorderThree, bg: "bg-white" },
  { id: "darkmode", icon: IoMoonOutline, bg: "bg-white" },
];

const navIcons = [
  { id: "about", icon: IoPersonSharp, bg: "bg-gray-100" },
  { id: "experience", icon: FaUniversity, bg: "bg-gray-100" },
  { id: "projects", icon: FaBriefcase, bg: "bg-gray-100" },
  { id: "contact", icon: FaPaperPlane, bg: "bg-gray-100" },
];

const Navigation = ({ active, onNavChange }) => {
  
  const handleClick = (id) => {
    onNavChange(id);
  };

  const handleClickDark = () => {
    console.log("dark");
  };

  const { isMobile, isTablet, isDesktop } = useResponsive();

  const iconSize = isMobile ? 24 : isTablet ? 20 : 16;
  const headerTopIconSize = isMobile ? 24 : isTablet ? 20 : 16;

  return (
    <>
      {isDesktop && (
        <div className="flex flex-col items-center gap-4">
          {headerIcons.map(({ id, icon: Icon, bg }) => (
            <button
              key={id}
              onClick={handleClickDark}
              className={`p-4 rounded-full ${bg} shadow hover:scale-105 transition-transform`}
              title={id}
            >
              <Icon size={iconSize} />
            </button>
          ))}

          <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-white shadow-lg">
            {navIcons.map(({ id, icon: Icon, bg, text }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`cursor-pointer p-4 rounded-full ${bg} ${text || "text-black"} ${
                  active === id ? "bg-pink-100 text-pink-500" : ""
                } hover:scale-105 transition-transform`}
                title={id}
              >
                <Icon size={iconSize} />
              </button>
            ))}
          </div>
        </div>
      )}

      {isTablet && <div className="text-center">Tablet view coming soon...</div>}

      {isMobile && (
        <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 px-4 py-4">
          <section className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 className="text-sm font-semibold">John Carlo Abanes</h1>
              <TyperAnimation />
            </div>
            <div className="flex items-center gap-3">
              {headerIcons.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={handleClickDark}
                  className="hover:scale-105 transition-transform"
                  title={id}
                >
                  <Icon size={headerTopIconSize} />
                </button>
              ))}
            </div>
          </section>

          <section className="flex justify-between mt-4 px-2">
            {navIcons.map(({ id, icon: Icon, bg, text }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`cursor-pointer p-5 rounded-full ${bg} ${text || "text-black"} ${
                  active === id ? "bg-pink-100 text-pink-500" : ""
                } hover:scale-105 transition-transform`}
                title={id}
              >
                <Icon size={iconSize} />
              </button>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Navigation;
