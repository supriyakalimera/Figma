
import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">★ What they say</h2>
      <div className="testimonial-content">
        <div className="testimonial-left">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="user-image"
          />
          <div>
            <h3 className="user-name">Floyd Miles</h3>
            <p className="user-company">eBay</p>
          </div>
        </div>
        <div className="testimonial-right">
          <blockquote>
            <span className="quote">“</span>
            Synergy's resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy's resume
            builder is fantastic. It helped me create a professional resume that
            stood out to employers.
            <span className="quote">”</span>
          </blockquote>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </div>
    </div>
  );
};

export default Testimonial;
