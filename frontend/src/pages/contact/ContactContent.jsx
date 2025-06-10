import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa';

const ContactContent = () => {
  return (
    <section>
      <div className="mb-6">
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1">
          <FaPaperPlane className="text-sm mr-2 text-gray-700" />
          <span className="text-sm text-gray-600 font-medium">CONTACT</span>
        </div>
      </div>

      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        LETS GET IN TOUCH!
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm">
          <FaPhoneAlt className="text-pink-500 text-2xl" />
          <div>
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <p className="text-md text-gray-700">+63 938 293 2202</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm">
          <FaEnvelope className="text-pink-500 text-2xl" />
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-md text-gray-700">jcaabanes07gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
        <FaMapMarkedAlt className="text-pink-500 text-2xl" />
        <div>
          <p className="text-sm font-medium text-gray-500">Address</p>
          <p className="text-md text-gray-700">Purok 1, Barangay Borabod Daet, Camarines Norte</p>
        </div>
      </div>

        <div className="overflow-hidden rounded-xl">
            <iframe
                title="map"
                className="w-full h-100 border-0"
                src="https://www.google.com/maps?q=Purok+1,+Barangay+Borabod,+Daet,+Camarines+Norte&output=embed"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    </section>
  );
};

export default ContactContent;
