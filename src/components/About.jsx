import React from 'react';
import '../styles/About.css';

const About = () => {
    const stats = [
      { number: '10+', label: 'Years Experience' },
      { number: '250+', label: 'Projects Completed' },
      { number: '40+', label: 'Team Members' },
      { number: '15+', label: 'Awards Won' }
    ];
  
    return (
      <section className="about">
        <h3 className="section-title">ABOUT</h3>
        <div className="about-content">
          <div className="about-left">
            <div className="about-logo">
              <div className="logo-circle outer"></div>
              <div className="logo-circle inner"></div>
            </div>
            <p className="about-text">
              A creative studio focused on building exceptional digital experiences 
              and brand identities. Now serving clients worldwide with innovative solutions.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <img src={require('../img/about2.jpg')} alt="Team at work" className="about-image" />
          </div>
        </div>
      </section>
    );
  };

export default About;