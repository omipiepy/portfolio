import React from "react";

const NavBar = () => {
  return (

    <nav className="fixed top-5 w-4/5 mx-auto left-1/2 transform -translate-x-1/2 bg-white backdrop-blur-md border-b border-white/10 rounded z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-slate-900">
          Kohinoor's Portfolio
        </h1>

        <ul className="flex gap-6 text-slate-900 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;