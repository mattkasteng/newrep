'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header - Navigation bar with smooth scroll links and accessibility features.
 * Links: Home, Projects, Blog, About, Contact
 * Glassmorphism, sticky, responsive, and accessible.
 */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>('');

  useEffect(() => {
    setActiveHash(window.location.hash);
  }, []);

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
        <Link 
          href="/"
          className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Matteus Kasten
        </Link>
        <ul className="flex gap-4 sm:gap-8 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href.startsWith('/#') && pathname === '/' && activeHash === link.href.substring(1));
            
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-pink-400 transition-colors duration-200 focus:outline-none focus:underline focus:ring-2 focus:ring-blue-400 dark:focus:ring-pink-400 ${
                    isActive ? 'text-blue-600 dark:text-pink-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 