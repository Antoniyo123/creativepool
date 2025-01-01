import React from 'react';
import '../styles/Services1.css';
import { ArrowUpRight } from 'lucide-react';

const FurnitureCollection = () => {
  const collections = [
    {
      id: 1,
      name: 'Mondrian',
      image: require('../img/service1.jpg'),
      size: 'medium',
      gridArea: 'a'
    },
    {
      id: 2,
      name: 'Nirnia',
      image: require('../img/service3.jpg'),
      size: 'large',
      gridArea: 'b'
    },
    {
      id: 3,
      name: 'Artex',
      image: require('../img/service2.jpg'),
      size: 'medium',
      gridArea: 'c'
    }
  ];

  return (
    <div className="collection-container">
      <div className="header-section">
        <h1 className="main-title">Explore Our Proudly Collection</h1>
        <div className="header-right">
          <p className="subtitle">
            Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile.Milano 2024.
          </p>
          <button className="view-more-btn">
            View More <ArrowUpRight className="arrow-icon" size={16} />
          </button>
        </div>
      </div>

      <div className="collection-grid">
        {collections.map((collection) => (
          <div 
            key={collection.id} 
            className={`collection-item ${collection.size}`}
            style={{ gridArea: collection.gridArea }}
          >
            <div className="collection-image-wrapper">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="collection-image"
              />
              <div className="item-content">
                <span className="item-name">{collection.name}</span>
                <ArrowUpRight className="item-arrow" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCollection;