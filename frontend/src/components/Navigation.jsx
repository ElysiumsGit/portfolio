import React from 'react';
import { IoReorderThree, IoMoonOutline, IoPersonSharp } from "react-icons/io5";
import { FaUniversity, FaBriefcase, FaIdBadge, FaPaperPlane } from "react-icons/fa";

const icons = [
  { icon: <IoReorderThree size={20} />, bg: 'bg-white' },
  { icon: <IoMoonOutline size={20} />, bg: 'bg-white' },
];

const navIcons = [
  { icon: <IoPersonSharp size={18} />, bg: 'bg-gray-100' },
  { icon: <FaUniversity size={18} />, bg: 'bg-gray-100' },
  { icon: <FaBriefcase size={18} />, bg: 'bg-gray-100' },
  { icon: <FaIdBadge size={18} />, bg: 'bg-gray-100' },
  { icon: <FaPaperPlane size={18} />, bg: 'bg-pink-100', text: 'text-pink-500' },
];

const Navigation = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {icons.map((item, index) => (
        <div key={index} className={`p-4 rounded-full ${item.bg} shadow`}>
          {item.icon}
        </div>
      ))}

      <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-white shadow-lg">
        {navIcons.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-full ${item.bg} ${item.text || 'text-black'} hover:scale-105 transition-transform`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
