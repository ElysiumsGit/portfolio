import React from "react";
import { IoReorderThree, IoMoonOutline, IoPersonSharp } from "react-icons/io5";
import { FaUniversity, FaBriefcase, FaIdBadge, FaPaperPlane } from "react-icons/fa";

const headerIcons = [
  { id: "menu", icon: <IoReorderThree size={20} />, bg: "bg-white" },
  { id: "darkmode", icon: <IoMoonOutline size={20} />, bg: "bg-white" },
];

const navIcons = [
  { id: "about", icon: <IoPersonSharp size={18} />, bg: "bg-gray-100" },
  { id: "experience", icon: <FaUniversity size={18} />, bg: "bg-gray-100" },
  { id: "projects", icon: <FaBriefcase size={18} />, bg: "bg-gray-100" },
  { id: "badge", icon: <FaIdBadge size={18} />, bg: "bg-gray-100" },
  { id: "send", icon: <FaPaperPlane size={18} />, bg: "bg-gray-100" },
];

const Navigation = ({ active, onNavChange }) => {
  const handleClick = (id) => {
    onNavChange(id);
  };

  const handleClickDark = () =>{
    console.log("dark");
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {headerIcons.map(({ id, icon, bg }) => (
        <button
          key={id}
          onClick={handleClickDark}
          className={`p-4 rounded-full ${bg} shadow hover:scale-105 transition-transform`}
          title={id}
        >
          {icon}
        </button>
      ))}

      <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-white shadow-lg">
        {navIcons.map(({ id, icon, bg, text }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`cursor-pointer p-4 rounded-full ${bg} ${text || "text-black"} ${
              active === id ? "bg-pink-100 text-pink-500" : ""
            } hover:scale-105 transition-transform`}
            title={id}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
