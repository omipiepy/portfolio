import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="flex items-center min-h-screen pt-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Hi, I’m Kohinoor 👋
              <br />
              Passionate Web Developer
            </h1>

            <p className="mt-6 text-slate-500 max-w-xl">
              I design and develop modern, scalable web applications using the
              MERN stack, focusing on clean UI, performance, and real-world
              solutions.
            </p>

            <div className="mt-8 flex gap-4">
              <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              <button
                className="mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition duration-300"
              >
                
              Contact Me
            
              </button>
</a>
              <a
                href="/cv.pdf"
                download
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/profile.jpeg"
              alt="Kohinoor"
              className="w-64 h-64 object-cover rounded-full border border-gray-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;