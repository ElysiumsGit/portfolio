import React from 'react';

const ContactField = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        MESSAGE ME!
      </h1>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-gray-100 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition flex items-center gap-2"
          >
            SEND MESSAGE
            <span className="text-lg">&rarr;</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactField;
