import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-text outlined-text">FLOW</div>
        <span className="symbol">✷</span>
        <div className="footer-text outlined-text">FIGMA</div>
        <span className="symbol">✷</span>
        <div className="footer-text outlined-text">DESIGNER</div>
        <span className="symbol">✷</span>
        <div className="footer-text outlined-text">DEVELOPER</div>
      </div>
      <div className="footer-middle">
        <h2 className="footer-heading">LET’S TALK!</h2>
        <p className="footer-email">rehanurraihan@gmail.com ↗</p>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© Rehan Raihan - 2023</p>
        <div className="footer-links">
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
