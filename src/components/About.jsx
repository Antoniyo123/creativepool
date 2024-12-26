import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image-container">
          <img 
            src={require('../img/about2.jpg')} 
            alt="Creative impact" 
            className="main-image"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="about-content">
          <div className="text-content">
            <h1 className="heading">
              MAKING AN <span className="bold">IMPACT</span><br />
              THROUGH <span className="bold">SOCIAL</span><br />
              MEDIA & ADVERTISING<br />
              PLATFORMS
            </h1>
            
            <div className="subheading">
              Scenester williamsburg small batch<br />
              viral typewriter blog
            </div>
            
            <div className="description">
              Scenester williamsburg small batch viral typewriter blog schlitz 
              skateboard squid XOXO four loko. Hoodie intelligentsia affogato 
              salvia photo booth literally sriracha four dollar toast coloring book 
              typewriter tumblrsexual cardigan. Brunch cornhole small batch 
              poutine asymmetrical mixtape.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;