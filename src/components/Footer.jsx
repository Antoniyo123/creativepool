// Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="lets-talk-section">
        <h1 className="lets-talk">LET'S TALK</h1>
        <div className="create-text">
          <p>AND CREATE</p>
          <p>SOME STUFF</p>
          <p>TOGETHER!</p>
        </div>
      </div>
      
      <div className="footer-container">
        <div className="footer-left">
          <div className="company-info">
            <p>creativepool@gmail.com</p>
            <p>858 652 8917</p>
            <p>Blok A Jakarta Selatan</p>
            <p>DKI JAKARTA</p>
          </div>
          <div className="logo">
            <h2>CreativeVision</h2>
          </div>
        </div>

        <div className="footer-center">
          <div className="circular-button">
            <span className="arrow">↗</span>
            <span className="button-text">CONTACT US</span>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;