import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Featured from './components/Featured';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Featured />
      <Footer/>
    </div>
  );
};

export default App;