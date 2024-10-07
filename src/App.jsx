// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe'; 

function App() {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Sections */}
      <Hero />       {/* Hero Section */}
      <AboutMe />    {/* About Me Section */}
      <Technologies /> {/* Technologies Section */}
      <Portfolio />  {/* Portfolio Section */}
      
      {/* Contact Me Section */}
      <ContactMe /> {/* Includes the Contact Me form */}
    </div>
  );
}

export default App;
