'use client';

import React from "react";

/**
 * Header - Navigation bar with smooth scroll links and accessibility features.
 * Links: Hero, About, Skills, Projects, Contact
 * Glassmorphism, sticky, responsive, and accessible.
 */
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 glass shadow-md backdrop-blur-md bg-white/70 dark:bg-[#18181b]/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500" style={{ borderRadius: 0 }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-600 text-white px-4 py-2 z-50"
        tabIndex={0}
      >
        Skip to main content
      </a>
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3"
        role="navigation"
        aria-label="Main navigation"
      >
        <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Matteus Kasten
        </span>
        <ul className="flex gap-4 sm:gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-pink-400 transition-colors duration-200 focus:outline-none focus:underline focus:ring-2 focus:ring-blue-400 dark:focus:ring-pink-400"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 