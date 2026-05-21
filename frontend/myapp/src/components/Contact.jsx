import React from 'react'

const Contact = () => {
  return (
    <section id ="contact" className="flex items-center min-h-screen bg-slate-50">
      <div className="border border-gray-300 rounded-xl shadow-xl py-5 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
          <p className="text-slate-500 mb-6">
            Open for opportunities, collaborations, and freelance work.
          </p>

          <div className="flex gap-6 text-lg">
            <a className="text-blue-600">LinkedIn</a>
            <a className="text-blue-500">Facebook</a>
            <a className="text-pink-500">Instagram</a>
          </div>
        </div>

        <div className="p-4 bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
            <label className="mb-0">Name:</label>
            <input className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Name" />
            </div>
            <div className="flex flex-col">
            <label>Email:</label>
            <input className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email" />
            </div>
            <div className="flex flex-col">
            <label>Message:</label>
            <textarea className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none" rows="4" placeholder="Message" />
            </div>
            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
