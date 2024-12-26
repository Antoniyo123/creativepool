import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    'SOCIAL MEDIA MANAGEMENT',
    'SOCIAL MEDIA STRATEGY', 
    'CONTENT CREATION',
    'USER-GENERATED CONTENT',
    '1:1 COACHING CALLS'
  ];

  return (
    <div className="services-container">
      <div className="services-wrapper">
        {/* Left side */}
        <div className="services-left">
          <h1 className="services-title">SERVICES</h1>
          {/* <div className="decorative-images">
            <div className="image-wrapper image-top">
              <img 
                src="/path-to-your-image-1.jpg" 
                alt="Decorative" 
                className="decorative-img"
              />
            </div>
            <div className="image-wrapper image-bottom">
              <img 
                src="/path-to-your-image-2.jpg" 
                alt="Decorative" 
                className="decorative-img"
              />
            </div>
          </div> */}
        </div>

        {/* Right side */}
        <div className="services-right">
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <button className="service-button">
                  <span className="service-text">{service}</span>
                  <span className="expand-icon">+</span>
                </button>
              </div>
            ))}
          </div>
          
          <button className="explore-button">
            EXPLORE OUR SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;