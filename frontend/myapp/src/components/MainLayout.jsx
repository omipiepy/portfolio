import React from 'react'
import NavBar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const MainLayout = () => {
  return (
    <div>
        <div>
        <NavBar />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout