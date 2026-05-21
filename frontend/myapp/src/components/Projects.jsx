import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Blog Platform",
    desc: "Full-stack MERN blog application with authentication and CRUD.",
    img: "/blog.png",
  },
  {
    title: "E-Commerce Website",
    desc: "Shopping cart, payments, admin dashboard using MERN.",
    img: "/ecommerce.png",
  },
  {
    title: "Todo App",
    desc: "Simple productivity app with clean UI.",
    img: "/todo.png",
  },
  {
    title: "Weather App",
    desc: "Real-time weather data using API.",
    img: "/weather.png",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const Navigate = useNavigate();
  const handleReadMore = () => {
    Navigate(`/projects/${projects[index].title}`);
  };

  return (
    <section
      id="projects"
      className="flex items-center bg-slate-50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">
          Projects
        </h2>

        <div className="flex items-center justify-center gap-8">

          {/* Left Button */}
          <button
            className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 hover:scale-105 transition"
            onClick={() =>
              setIndex((index - 1 + projects.length) % projects.length)
            }
          >
            &lt;
          </button>

          {/* Card */}
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12 w-225 h-70">

            {/* Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900">
                {projects[index].title}
              </h3>
              <p className="text-slate-500 mt-4">
                {projects[index].desc}
              </p>
              {/* Read More Button */}
              <button
                onClick={handleReadMore}
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
              >
                Read More
              </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={projects[index].img}
                alt={projects[index].title}
                className="rounded-lg w-full max-w-87.5 object-cover"
              />
            </div>

          </div>

          {/* Right Button */}
          <button
            className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 hover:scale-105 transition"
            onClick={() =>
              setIndex((index + 1) % projects.length)
            }
          >
            &gt;
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;