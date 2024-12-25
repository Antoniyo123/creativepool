import React from 'react';
import '../styles/Services.css';

const Services = () => {
    const services = [
      {
        icon: "strategy",
        title: "Strategy",
        desc: "Brand strategy and digital planning",
        image: require('../img/strategy.jpg'),
        features: ["Market Research", "Brand Positioning", "Growth Strategy"]
      },
      {
        icon: "monitor",
        title: "Design",
        desc: "UI/UX and visual design solutions",
        image: require('../img/design.jpg'),
        features: ["User Interface", "User Experience", "Visual Identity"]
      },
      {
        icon: "camera",
        title: "Content",
        desc: "Photography and video production",
        image: require('../img/content.jpg'),
        features: ["Photography", "Videography", "Art Direction"]
      },
      {
        icon: "heart",
        title: "Growth",
        desc: "Marketing and brand development",
        image: require('../img/growth.jpg'),
        features: ["Digital Marketing", "Social Media", "Analytics"]
      }
    ];
  
    return (
      <section className="services">
        <h3 className="section-title">SERVICES</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={`service-icon ${service.icon}`}></i>
              <img src={service.image} alt={service.title} className="service-image" />
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Services;
