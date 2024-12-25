import React from 'react';
import '../styles/Featured.css';

const Featured = () => {
    const projects = [
      {
        title: "Minimalist Brand Identity",
        category: "Creative Direction • Photography",
        image: require('../img/brandidentity.jpg'),
        year: "2024"
      },
      {
        title: "Digital Experience Design",
        category: "UI/UX • Development",
        image: require('../img/digital.jpg'),
        year: "2024"
      },
      {
        title: "Product Photography",
        category: "Photography • Styling",
        image: require('../img/product.jpg'),
        year: "2023"
      }
    ];
  
    return (
      <section className="featured">
        <h3 className="section-title">FEATURED NEWS</h3>
        <div className="featured-grid">
          {projects.map((project, index) => (
            <div key={index} className="featured-card">
              <div className="featured-image-container">
                <img src={project.image} alt={project.title} className="featured-image" />
                <div className="featured-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="featured-info">
                <h4 className="featured-title">{project.title}</h4>
                <p className="featured-desc">{project.category}</p>
                <span className="featured-year">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Featured;