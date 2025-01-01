import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const services = [
    'Digital Marketing',
    'Web Development',
    'Brand Strategy',
    'Social Media'
  ];

  return (
    <div className="navbar-container">
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <h1 className="navbar-logo">CREATIVEPOOL®</h1>
        
        <div className="navbar-links">
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Brands</a>
          
          <div className="nav-item-dropdown">
            <button 
              className="nav-link dropdown-button"
              onClick={toggleSubmenu}
            >
              SERVICES
              <span className={`dropdown-arrow ${showSubmenu ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`submenu ${showSubmenu ? 'show' : ''}`}>
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="submenu-item"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
          
          <a href="#" className="nav-link">Press</a>
        </div>
        
        <div className="navbar-actions">
          <button className="lang-switch">EN</button>
          <button className="cart-button">
            <span>Cart</span>
            <span className="cart-icon">⊡</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;