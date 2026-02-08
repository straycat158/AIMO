import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlayerPreview from './components/PlayerPreview';
import Features from './components/Features';
import StorySection from './components/StorySection';
import CoverGallery from './components/CoverGallery';
import Changelog from './components/Changelog';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simple loading simulation for smooth entry
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-t-2 border-l-2 border-white rounded-full animate-spin"></div>
          <span className="text-neutral-500 text-sm tracking-[0.3em] uppercase">AIMO INITIALIZING</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <PlayerPreview />
        <StorySection />
        <CoverGallery />
        <Features />
        <Changelog />
      </main>
      <Footer />
    </div>
  );
};

export default App;