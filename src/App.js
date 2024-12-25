import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Featured from './components/Featured';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Featured />
    </div>
  );
};

export default App;