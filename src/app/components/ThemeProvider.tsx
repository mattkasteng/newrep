"use client";
import React, { useEffect, useState } from "react";

/**
 * ThemeProvider - Handles automatic theme detection based on system preferences
 * without showing a manual toggle button.
 */
const ThemeProvider: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    setMounted(true);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return null;
};

export default ThemeProvider; 