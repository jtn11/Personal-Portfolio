"use client";

import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "TailorAI",
    subtitle: "Resume Analysis Platform",
    date: "Dec 2025 - Jan 2026",
    tech: ["Next.js", "Node.js", "jSearch API" ,"Firebase", "LLM API"],
    points: [
      "Engineered an AI career co-pilot using Next.js 15 and Groq LLM to parse PDFs and generate structured resume-to-job match evaluations.",
      "Integrated jSearch RapidAPI for live job matching and utilized Firebase Firestore via serverless APIs to persist user analysis history."
    ],
    github: "https://github.com/jtn11/TailorAI",
    image: "/projects/tailor_ai.png",
    color: "from-blue-600 to-blue-400",
    glow: "shadow-blue-500/40"
  },
  {
    title: "Speech Translator",
    subtitle: "Real-time AI Translator",
    date: "Oct 2025 - Nov 2025",
    tech: ["React.js", "TypeScript", "Groq's Whisper API", "State Management"],
    points: [
      "Engineered a real-time speech translation application leveraging Groq's Whisper API to transcribe and translate Hindi audio to English text.",
      "Implemented robust asynchronous API handling using FormData and MediaRecorder API to capture high-quality audio streams."
    ],
    github: "https://github.com/jtn11/AI-Translation",
    image: "/projects/speech_translator.png",
    color: "from-purple-600 to-purple-400",
    glow: "shadow-purple-500/40"
  },
  {
    title: "TaskNest",
    subtitle: "Task Management Platform",
    date: "Sept 2025 - Oct 2025",
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "Express", "Firebase"],
    points: [
      "Built a collaborative productivity platform using Next.js and TypeScript, enabling real-time task synchronization across multiple user workspaces.",
      "Integrated a secure authentication system and Firebase Firestore backend to manage complex data relations and scalable user assignments."
    ],
    github: "https://github.com/jtn11/TaskNest",
    image: "/projects/task_nest.png",
    color: "from-emerald-600 to-emerald-400",
    glow: "shadow-emerald-500/40"
  },
  {
    title: "RAG AI Chatbot",
    subtitle: "Semantic Doc Chat",
    date: "Dec 2025 - Jan 2026",
    tech: ["Next.js", "FastAPI", "ChromaDB", "HuggingFace Embeddings", "Groq LLM"],
    points: [
      "Engineered a full Retrieval-Augmented Generation (RAG) system enabling users to upload PDFs and query private documents with grounded responses.",
      "Built a FastAPI backend for document ingestion, text extraction, chunking, and persistent vector storage using ChromaDB."
    ],
    github: "https://github.com/jtn11/RAG-Based-AI-Chatbot",
    image: "/projects/rag_chatbot.png",
    color: "from-rose-600 to-rose-400",
    glow: "shadow-rose-500/40"
  },
  {
    title: "Intelligence API",
    subtitle: "AI REST API Service",
    date: "Jan 2026",
    tech: ["Node.js", "TypeScript", "Groq LLM", "REST API", "Render"],
    points: [
      "Built a scalable Node.js and TypeScript REST API utilizing clean architecture and factory patterns to decouple business logic from LLM providers.",
      "Implemented production-grade SaaS features including API key authentication, rate limiting, and usage tracking."
    ],
    github: "https://github.com/jtn11/resume-intelligence-api",
    image: "/projects/resume_api.png",
    color: "from-indigo-600 to-indigo-400",
    glow: "shadow-indigo-500/40"
  },
  {
    title: "AI Summariser",
    subtitle: "Browser Extension",
    date: "Aug 2025",
    tech: ["JavaScript", "Google Gemini API", "DOM Parsing", "Browser API"],
    points: [
      "Built a JavaScript browser extension that extracts active tab content and generates real-time, concise summaries using the Google Gemini API.",
      "Engineered custom script injection and DOM parsing to interface seamlessly with modern LLM endpoints."
    ],
    github: "https://github.com/jtn11/AI-Summarizer",
    image: "/projects/ai_summariser.png",
    color: "from-amber-600 to-amber-400",
    glow: "shadow-amber-500/40"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Selected <span className="font-serif italic text-zinc-500 dark:text-zinc-400">Works</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A collection of projects exploring the intersection of AI, real-time systems, and seamless user experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Visible Glow behind the card on hover */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-25 blur-2xl rounded-[2.5rem] transition-all duration-500 group-hover:scale-105 pointer-events-none`} />
              
              <div className={`relative h-full bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 shadow-none hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:${project.glow} hover:-translate-y-3 z-10`}>
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    priority={idx < 2}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-md text-zinc-800 dark:text-white rounded-full border border-white/20 dark:border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className={`text-3xl font-bold text-zinc-900 dark:text-white transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r ${project.color} inline-block cursor-default`}>
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 mt-1 font-medium">{project.subtitle}</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-2xl transition-colors border border-zinc-200 dark:border-zinc-700/50"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {project.points.map((p, i) => (
                      <div key={i} className="flex gap-4">
                        <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} shrink-0`} />
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white group/link"
                  >
                    View Project Case Study
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </motion.a>
                </div>
                
                {/* Decorative Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-[0.03] group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
