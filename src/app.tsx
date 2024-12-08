import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;