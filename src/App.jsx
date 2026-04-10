import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dishes from './components/Dishes';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Dishes />
        <Restaurants />
      </main>
      <Footer />
    </div>
  );
}

export default App;
