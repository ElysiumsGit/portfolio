import React from 'react';
import { FaLinkedinIn, FaRedditAlien, FaXTwitter, FaGithub } from 'react-icons/fa6';
import TyperAnimation from './TypeAnimation';

const Profile = () => {
  return (
    <div className="max-w-xs bg-white rounded-b-[2rem] rounded-tl-[2rem] p-6 shadow-md text-center">
      {/* <img
        src="https://randomuser.me/api/portraits/women/44.jpg" // Replace with actual image
        alt="Profile"
        className="w-full h-64 object-cover rounded-3xl mb-4"
      /> */}

      <div className="w-[275px] h-64 bg-gray-200 rounded-3xl mb-4"></div>

      <TyperAnimation/>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">John Carlo Abanes</h2>

      <div className="flex justify-center gap-4 mb-6">
        {[FaLinkedinIn, FaRedditAlien, FaXTwitter, FaGithub].map((Icon, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-gray-700 transition-colors cursor-pointer"
          >
            <Icon size={16} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <button className="py-3 rounded-xl bg-gray-100 text-sm font-medium hover:bg-gray-200">
          Download CV
        </button>
        <button className="py-3 rounded-xl bg-gray-800 text-white text-sm font-medium hover:bg-gray-700">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Profile;
