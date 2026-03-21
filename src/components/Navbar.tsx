"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-zinc-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">JS.</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500 dark:text-gray-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-700" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
