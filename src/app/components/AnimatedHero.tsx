"use client";
import React, { useEffect, useState } from "react";

/**
 * AnimatedHero - Hero section with animated intro text.
 * Glassmorphism, gradient, responsive, and accessible.
 */
const phrases = [
  "AI, Data & Strategy Consultant.",
  "Building impactful solutions.",
  "Unlocking value with technology.",
];

const AnimatedHero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setShow(true);
      }, 400);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

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
      <div className="glass max-w-2xl w-full mx-auto p-8 md:p-12 flex flex-col items-center shadow-2xl animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg mb-4 tracking-tight">
          Matteus Kasten Guimarães
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6 min-h-[2.5rem]">
          <span
            className={`inline-block transition-opacity duration-400 ${show ? "opacity-100" : "opacity-0"}`}
            aria-live="polite"
          >
            {phrases[index]}
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
          I help organizations unlock value with AI, data, and strategy. Passionate about building impactful solutions at the intersection of technology and business.
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg btn-animated focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default AnimatedHero; 