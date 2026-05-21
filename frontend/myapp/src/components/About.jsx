import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex items-center min-h-screen pt-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/profile.jpeg"
              alt="Kohinoor"
              className="object-cover border border-gray-200"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Hi, I am Kohinoor Dallakoti.
              <br />
              
            </h1>

            <p className="mt-6 text-slate-500 max-w-xl">
              Passed out Student of Bachelor in Computer Engineering from Thapathali Campus, Kathmandu.
              Studied +2 from Skyrider Higher Secoundary English Boarding School. 
              Have a good knowledge of HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
              Done variety of projects, including a blog platform, e-commerce website, and real-time chat app.
              Got a certificate of completion for the MERN Stack Course fron letslearn.asia.
              Also have knowledge about AI and machine learning through text book and major minor projects from college.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About