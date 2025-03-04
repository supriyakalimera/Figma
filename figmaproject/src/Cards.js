import React from "react";
import "./Cards.css";
import envelopeImage from "./images/img6.jpeg";

const Card = () => {
  return (
  <div className="card-wrapper">
      <div className="card-container full-width">
        <div className="card-layout">
          <div className="card-image full-width-image">
            <img src={envelopeImage} alt="Envelope Design" className="fixed-image" />
          </div>
          <div className="card-content">
            <h2>Analysis Application</h2>
            <p className="description">
              With a user-centered approach, the goal was to create an
              intuitive interface for enhanced financial intelligence.
            </p>
            <div className="tags">
              <span className="tag">FIGMA</span>
              <span className="tag">UX</span>
            </div>
            <button className="view-case-study">View Case Study</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="card-list">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
