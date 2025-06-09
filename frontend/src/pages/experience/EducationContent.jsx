import React from 'react';

const educationData = [
  {
    year: '2017 – 2019',
    degree: 'Information Technology',
    field: 'Software Engineering, NY',
    description: 'Master’s degree focusing on advanced topics in software development and systems architecture.',
    link: '#',
  },
  {
    year: '2017 – 2019',
    degree: 'Master of Science',
    field: 'Software Engineering, NY',
    description: 'Master’s degree focusing on advanced topics in software development and systems architecture.',
    link: '#',
  },
  {
    year: '2017 – 2019',
    degree: 'Master of Science',
    field: 'Software Engineering, NY',
    description: 'Master’s degree focusing on advanced topics in software development and systems architecture.',
    link: '#',
  },
  {
    year: '2017 – 2019',
    degree: 'Master of Science',
    field: 'Software Engineering, NY',
    description: 'Master’s degree focusing on advanced topics in software development and systems architecture.',
    link: '#',
  },
];

const EducationContent = () => {
  return (
    <section>
      <div className="mb-6">
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1">
          <span className="text-sm text-gray-600 font-medium">EDUCATION</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl shadow p-4">
            <div className="text-sm text-gray-500 mb-1">{edu.year}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
            <p className="text-gray-700 mb-2">{edu.field}</p>
            <p className="text-gray-600 text-sm mb-3">{edu.description}</p>
            <a href={edu.link} className="text-sm font-semibold text-gray-900 hover:underline">
              LEARN MORE &rsaquo;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationContent;
