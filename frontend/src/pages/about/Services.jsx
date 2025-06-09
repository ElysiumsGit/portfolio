import React from 'react'
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Services = () => {

   const services = [
    {
        icon: <MdOutlineMiscellaneousServices size={40} className="text-pink-500" />,
        title: 'Web Development',
        description: 'Building responsive, high-performance websites using modern frameworks and best practices for optimal user experience and SEO.',
    },
    {
        icon: <MdOutlineMiscellaneousServices size={40} className="text-pink-500" />,
        title: 'Software Development',
        description:'Designing and developing robust desktop and cloud-based software solutions tailored to business needs, with strong backend logic and security.',
    },
    {
        icon: <MdOutlineMiscellaneousServices size={40} className="text-pink-500" />,
        title: 'Mobile Development',
        description:'Creating scalable and engaging mobile applications for iOS and Android, with native or cross-platform technologies like Flutter and React Native.',
    },
    {
        icon: <MdOutlineMiscellaneousServices size={40} className="text-pink-500" />,
        title: 'UI/UX Design',
        description:'Crafting intuitive and visually appealing interfaces focused on user behavior, accessibility, and brand consistency across platforms.',
    },
    ]

  return (
    <section className="flex flex-col gap-6">
        <section className='flex'>
            <div className='py-2 border border-gray-500 rounded-full px-6'>
                <p className="text-xs text-gray-500">SERVICES</p>
            </div>
        </section>
        <section>
            <h1 className='text-2xl font-semibold'>What Services I Provide?</h1>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
                <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                >
                <div className="flex flex-col gap-4">
                    <div className='flex items-center gap-2'>
                        <div>{service.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                    </div>
                    <p className="text-gray-500">{service.description}</p>
                    <a href="#" className="text-pink-500 font-medium underline text-sm w-fit">
                    GET STARTED
                    </a>
                </div>
                </div>
            ))}
        </section>
    </section>
  )
}

export default Services