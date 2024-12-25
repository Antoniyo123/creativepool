import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">CREATIVE VISION</h2>
          <div className="hero-year">2024</div>
          <div className="hero-grid">
            <div className="hero-image">
              <img src={require('../img/hero.jpg')} alt="Creative workspace" className="main-image" />
            </div>
            <div className="hero-info">
                        <div className="hero-text">
                            <h3>Crafting Digital Experiences with Purpose</h3>
                            <p>We transform ideas into immersive digital journeys, where design meets functionality.</p>
                        </div>
                        
                        <div className="hero-actions">
                            <button className="btn-primary">Explore Our Work</button>
                            <button className="btn-secondary">Our Process</button>
                        </div>
                    </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;