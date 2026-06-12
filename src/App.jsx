import React, { useState, useEffect, useRef } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Architecture from './components/Architecture';
import Capabilities from './components/Capabilities';
import Industries from './components/Industries';
import Integration from './components/Integration';
import Comparision from './components/Comparision';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Footerd from './components/footerd';


export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased selection:bg-[#FFB000] selection:text-black">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FFB000]/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-orange-400/5 rounded-full filter blur-[120px] pointer-events-none" />
        <Navbar />
        <Hero />
        <Trust />
        <Architecture />
        <Capabilities />
        <Industries />
        <Integration />
        <Comparision />
        <Pricing />
        <Footer />
        <Footerd />
      </div>
    </>
  );
}