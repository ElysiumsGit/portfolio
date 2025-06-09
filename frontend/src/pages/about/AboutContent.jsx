import React from 'react'

const stats = [
  { value: '96', label1: 'Completed', label2: 'Projects' },
  { value: '4', label1: 'Years', label2: 'Experience' },
  { value: '10+', label1: 'Mobile', label2: 'Projects' },
]


const AboutContent = () => {
  return (
    <section className='flex flex-col gap-6'>
      <p className="text-2xl text-gray-500">
        Hello, I’m <span className="text-pink-500 font-semibold">Software Developer</span>
      </p>

      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        SOFTWARE DEVELOPER, WEB DEVELOPER AND MOBILE DEVELOPER
      </h1>

      <p className="text-gray-500 text-base">
        With over 6 years of professional experience in AAA game development, I have a proven track
        record in Unity, C++ proficiency, and have led the production of mobile games. My leadership
        in cross-functional teams has significantly contributed to enhancing user engagement.
      </p>

      <div className="flex justify-between text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-center gap-4">
            <div>
              <p className="text-4xl font-semibold">{stat.value}</p>
            </div>
            <div>
              <p className="text-gray-500 text-start text-1xl">{stat.label1}</p>
              <p className="text-1xl text-gray-500 text-start">{stat.label2}</p>
            </div>
          </div>
        ))}
      </div>

        
    </section>
  )
}

export default AboutContent
