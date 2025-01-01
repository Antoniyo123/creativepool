import React, { useState } from 'react';
import '../styles/Featured1.css';

const WhyChooseUs = () => {
  const [expanded, setExpanded] = useState(null);

  const reasons = [
    {
      title: 'UNRIVALED QUALITY',
      content: ''
    },
    {
      title: 'UNMATCHED VARIETY',
      content: 'KORLUX OFFERS A DIVERSE RANGE OF LIGHTING SOLUTIONS TO SUIT ANY STYLE OR DECOR FOR EVERY TASTE AND SPACE.'
    },
    {
      title: 'SUSTAINABILITY',
      content: ''
    },
    {
      title: 'LEGACY OF EXCELLENCE',
      content: ''
    }
  ];

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="choose-us-container">
      <div className="image-section">
        <img src={require('../img/service2.jpg')} alt="Modern desk lamp" />
        {/* <p className="image-text">
          WE UNDERSTAND THAT THE WAY YOU SIT CAN<br />
          SIGNIFICANTLY IMPACT YOUR DAILY LIFE.<br />
          THAT'S WHY WE'VE MADE ERGONOMIC
        </p> */}
      </div>
      
      <div className="content-section">
        <h1>WHY CHOOSE US</h1>
        <p className="subtitle">
          HERE ARE THE REASONS WHY KORLUX STANDS OUT AS THE
          ULTIMATE CHOICE IN LIGHTING SOLUTIONS:
        </p>
        
        <div className="accordion">
          {reasons.map((reason, index) => (
            <div key={index} className="accordion-item">
              <div 
                className="accordion-header"
                onClick={() => handleToggle(index)}
              >
                <span>{reason.title}</span>
                <span className="toggle-icon">
                  {expanded === index ? '×' : '+'}
                </span>
              </div>
              {expanded === index && reason.content && (
                <div className="accordion-content">
                  {reason.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;