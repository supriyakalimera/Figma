import React from "react";
import "./FAQ.css"; // Import the CSS file

const FAQ = () => {
  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h2 className="faq-title">✴ Frequently asked questions</h2>
        <div className="faq-item">
          <h3>What is your design process?</h3>
          <p>
            My design process typically involves four key phases: research, design, prototype, and test. 
            In the research phase, I gather insights about the user and their needs. In the design phase, 
            I create wireframes and visual designs that meet those needs. In the prototype phase, I create 
            interactive models of the design for testing. In the test phase, I collect feedback from users 
            to refine the design.
          </p>
        </div>
        <div className="faq-item">
          <h3>What tools and software do you use for UX design?</h3>
        </div>
        <div className="faq-item">
          <h3>How do you measure the success of your UX designs?</h3>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
