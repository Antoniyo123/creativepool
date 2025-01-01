import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Featured from './components/Featured';
import './App.css';
import Footer from './components/Footer';
import Services1 from './components/Services1';
import Featured1 from './components/Featured1';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Featured1/>

      {/* <About /> */}
      <Services1/>
      {/* <Services /> */}
      <Featured />
      <Footer/>
    </div>
  );
};

export default App;