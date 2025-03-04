import React from "react";
import "./style.css"; // Import CSS

const Expertise = () => {
  return (
    <section className="expertise">
      <h2>✹ Expertise</h2>
      <div className="expertise-container">
        <div className="expertise-item">
          <h3>▪ Branding</h3>
          <p>
            I create efficient, adaptable, and engaging websites. No predefined patterns.
            No sluggish, complex code. Webflow forms the foundation of my web development approach.
          </p>
        </div>
        <div className="expertise-item">
          <h3>▪ UI Design</h3>
          <p>
            I create efficient, adaptable, and engaging websites. No predefined patterns.
            No sluggish, complex code. Webflow forms the foundation of my web development approach.
          </p>
        </div>
        <div className="expertise-item">
          <h3>▪ UX Design</h3>
          <p>
            I comprehend and resolve digital product issues using a user-focused methodology.
            Investigation, compassion, and visual conveyance are key techniques I use.
          </p>
        </div>
        <div className="expertise-item">
          <h3>▪ Development</h3>
          <p>
            I create user-friendly, adaptive, and engaging websites. No cookie-cutters. No cumbersome, complex coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
