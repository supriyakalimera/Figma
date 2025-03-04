import React from 'react';
import './HeroSection.css';
import img1 from './images/image1.jpg'; 
import img2 from './images/image2.jpg';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>
        I AM A <span className="image-text"><img src={img1} alt="Design" /></span> FREELANCE<br />
        DESIGNER <span className="image-text"><img src={img2} alt="Portfolio" /></span> FROM<br />
        SAN FRANCISCO
      </h1>
      <p className="subtext">
        Welcome to my portfolio. Here, artistry meets functionality.<br />
        Dive into a curated showcase of distinctive branding and<br />
        web designs, each crafted to captivate and inspire.
      </p>
    </section>
  );
};

export default HeroSection;
