"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* === AURORA ANIMATED BACKGROUND === */}
      <div className="absolute inset-0 z-0 bg-zinc-50 dark:bg-black transition-colors duration-300">
        {/* Aurora container */}
        <div className="aurora-bg absolute inset-0 opacity-80">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

        {/* Floating geometric shapes — enhanced for clarity & quantity */}
        {/* Large rotating square */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-20 h-20 border-2 border-zinc-400/30 dark:border-white/20 rounded-xl blur-[2px]"
          animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -20, 10, -15, 0], x: [0, 10, -5, 8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        {/* Medium drifting circle */}
        <motion.div
          className="absolute top-[60%] left-[10%] w-14 h-14 border border-zinc-400/40 dark:border-white/20 rounded-full blur-[3px]"
          animate={{ y: [0, -30, 10, -20, 0], x: [0, 20, -15, 25, 0], scale: [1, 1.1, 0.9, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pulsing colored dot */}
        <motion.div
          className="absolute top-[75%] right-[22%] w-6 h-6 bg-blue-500/30 dark:bg-blue-400/20 rounded-full blur-[4px]"
          animate={{ y: [0, -35, 10, -25, 0], scale: [1, 1.6, 0.8, 1.4, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating triangle */}
        <motion.div
          className="absolute bottom-[28%] left-[32%] w-10 h-10 border border-zinc-400/30 dark:border-white/15 blur-[2px]"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{ rotate: [360, 0], y: [0, -20, 10, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        {/* Diagonal scanning line */}
        <motion.div
          className="absolute top-[40%] right-[30%] w-32 h-[2px] bg-gradient-to-r from-transparent via-zinc-400/60 dark:via-white/30 to-transparent blur-[1px]"
          animate={{ scaleX: [0.3, 1.2, 0.5, 1, 0.3], opacity: [0.3, 0.9, 0.4, 0.8, 0.3], rotate: [-15, -10, -15, -20, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Vertical scanning line */}
        <motion.div
          className="absolute top-[15%] left-[45%] w-[2px] h-24 bg-gradient-to-b from-transparent via-indigo-400/50 dark:via-indigo-300/30 to-transparent blur-[2px]"
          animate={{ scaleY: [0.5, 1.5, 0.5], opacity: [0.2, 0.8, 0.2], y: [0, 40, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* New floating diamond */}
        <motion.div
          className="absolute top-[25%] left-[25%] w-12 h-12 border border-zinc-500/30 dark:border-white/20 rotate-45 blur-[3px]"
          animate={{ rotate: [45, 135, 225, 315, 405], y: [0, 25, -10, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        {/* New tiny rapid dot */}
        <motion.div
          className="absolute top-[55%] right-[40%] w-2 h-2 bg-purple-500/40 dark:bg-purple-400/30 rounded-full blur-[2px]"
          animate={{ y: [0, -50, 20, -30, 0], x: [0, -30, 40, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* New outlined circle */}
        <motion.div
          className="absolute bottom-[15%] right-[12%] w-24 h-24 border border-dashed border-zinc-400/40 dark:border-white/20 rounded-full blur-[2px]"
          animate={{ rotate: [0, -360], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-mono mb-6 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-full bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
            Full Stack Developer &middot; AI Enthusiast
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6"
        >
          <span className="block text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-300 dark:to-zinc-600 leading-[0.95]">
            Jatin Saini
          </span>
          <span className="block text-3xl md:text-6xl font-serif italic text-zinc-500 dark:text-zinc-400 mt-3 tracking-tight">
            crafting digital experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400 text-base md:text-lg mb-12 leading-relaxed"
        >
          I design and build full-stack web applications with modern technologies, blending clean architecture with intelligent AI integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-transform text-sm">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-sm backdrop-blur-sm">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-zinc-400 dark:text-zinc-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
