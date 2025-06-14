"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[60vh] py-24 text-center overflow-hidden parallax"
      style={{
        background:
          "linear-gradient(120deg, #6366f1 0%, #a5b4fc 50%, #fbc2eb 100%)",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/30 animate-gradient-x" />
      <div className="glass glass-highlight glass-glow glass-reflection max-w-2xl w-full mx-auto p-8 md:p-12 flex flex-col items-center shadow-2xl animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl mb-3 tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          Matteus Kasten Guimarães
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-lg tracking-wide">
          Managing Partner @ Tropicalia
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
          I help organizations unlock value with AI, data, and strategy. Passionate about building impactful solutions at the intersection of technology and business.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 