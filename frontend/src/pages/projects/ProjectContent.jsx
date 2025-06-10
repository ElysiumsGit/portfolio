import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import businessSuite from "../../assets/businessSuite.png";
import storeWatch from "../../assets/storeWatch.png";
import popina from "../../assets/popina.png";

const techFilters = ['All', 'Web Development', 'Software Development', 'Mobile Development'];

const projects = [
  {
    id: 1,
    title: 'Software Suite',
    tech: ['Software Development'],
    image: businessSuite,
  },
  {
    id: 2,
    title: 'Store Watch',
    tech: ['Mobile Development'],
    image: storeWatch,
  },
  {
    id: 3,
    title: 'Document Repository',
    tech: ['Web Development'],
    image: popina,

  },
  {
    id: 4,
    title: 'Popina',
    tech: ['Mobile Development'],
    image: popina,

  },
];

const ProjectContent = () => {
  const [activeTech, setActiveTech] = useState('All');

  const filtered = projects.filter(
    p => activeTech === 'All' || p.tech.includes(activeTech)
  );

  return (
    <section>
      <div className="mb-4">
        <span className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-600 font-medium">
          PROJECTS
        </span>
      </div>

      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        Explore Portfolio By Technology
      </h1>

      <div className="flex flex-wrap gap-4 mb-8 text-2xl">
        {techFilters.map(label => (
          <button
            key={label}
            onClick={() => setActiveTech(label)}
            className={`text-[11px] px-4 py-1 rounded-full transition
                ${
                  activeTech === label
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
          >
            {label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(card => (
          <article
            key={card.id}
            className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-sm p-2"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover rounded-2xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                {card.title}
              </h2>

              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {card.tech[0]}
                </span>
                <FaExternalLinkAlt className="text-gray-500" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectContent;
