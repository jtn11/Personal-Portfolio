"use client";

import React from 'react';
import { BookOpen, MapPin, Calendar, User, Sparkles, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-4"
        >
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">About <span className="font-serif italic text-zinc-500 dark:text-zinc-400">me</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card - Spans 2 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative overflow-hidden bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-xl">
                  <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Who I Am</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                I am a passionate software engineer with a strong focus on building scalable web applications and integrating intelligent AI systems. With hands-on experience in full-stack development and a deep interest in Retrieval-Augmented Generation (RAG) and LLM APIs.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                I strive to create solutions that are both technically robust and seamlessly intuitive. Currently pursuing my B.Tech in Computer Science, I am always eager to tackle complex challenges and adopt cutting-edge technologies.
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors relative overflow-hidden group shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">KIET Group of Institutions</h4>
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <Calendar className="w-4 h-4" /> Nov 2022 – July 2026
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/60">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 block mb-1">Degree</span>
                    <span className="font-semibold">B.Tech, Computer Science</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 block mb-1">GPA</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">7.2<span className="text-sm text-zinc-500">/10</span></span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Status/Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-center shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20"></span>
                <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-medium mb-1">Location</p>
                <p className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  Ghaziabad, UP
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Available for Opportunities</p>
            </div>
          </motion.div>

          {/* Current Focus Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-br from-indigo-50/50 to-white dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-zinc-900 dark:text-white relative overflow-hidden group shadow-sm dark:shadow-lg"
          >
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mb-20 transition-transform duration-700 group-hover:scale-110" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Current Focus</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  Deep diving into Advanced Prompt Engineering, Vector Databases, and building autonomous AI agents.
                </p>
              </div>
              
              <div className="flex flex-wrap md:flex-col lg:flex-row gap-3">
                <span className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 text-sm font-mono border border-zinc-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-xl dark:shadow-black/20 text-indigo-700 dark:text-indigo-200">RAG</span>
                <span className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 text-sm font-mono border border-zinc-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-xl dark:shadow-black/20 text-indigo-700 dark:text-indigo-200">LLMs</span>
                <span className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 text-sm font-mono border border-zinc-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-xl dark:shadow-black/20 text-indigo-700 dark:text-indigo-200">Next.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
