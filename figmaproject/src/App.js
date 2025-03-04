import React, { useState } from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import Expertise from "./Expertise";
import Cards from "./Cards";
import ExperienceSection from "./ExperienceSection";
import Blog from "./Blog"
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Footer from "./Footer";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">R.</div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <button className="hire-me">Hire Me</button>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Expertise />
      <Cards/>
      <ExperienceSection/>
      <Blog/>
      <Testimonial/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
