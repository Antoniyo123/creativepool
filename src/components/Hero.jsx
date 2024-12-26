import React from 'react';
import '../styles/Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-text-content">
                <span className="hero-title-line">CREATIVE</span>
                <span className="hero-title-line">VISION</span>
                    {/* <span className="hero-eyebrow">2024</span> */}
                    {/* <h1 className="hero-title">

                    </h1> */}
                    <div className="hero-description">
                        <h2>Crafting Digital Experiences with Purpose</h2>
                        <p>We transform ideas into immersive digital journeys, where design meets functionality.</p>
                    </div>
                    <div className="hero-actions">
                        <button className="btn-primary">Explore Our Work</button>
                        <button className="btn-secondary">Our Process</button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <img src={require('../img/hero.jpg')} alt="Creative workspace" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;