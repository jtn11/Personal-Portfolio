"use client";

import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

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
    color: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "AI-Powered Speech Translator",
    subtitle: "Real-time Translator",
    date: "Oct 2025 - Nov 2025",
    tech: ["React.js", "TypeScript", "Groq's Whisper API", "State Management"],
    points: [
      "Engineered a real-time speech translation application leveraging Groq's Whisper API to transcribe and translate Hindi audio to English text.",
      "Implemented robust asynchronous API handling using FormData and MediaRecorder API to capture high-quality audio streams."
    ],
    github: "https://github.com/jtn11/AI-Translation",
    color: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
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
    color: "from-emerald-500/20 to-transparent",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "RAG-Powered AI Chatbot",
    subtitle: "Semantic Doc Chat",
    date: "Dec 2025 - Jan 2026",
    tech: ["Next.js", "FastAPI", "ChromaDB", "HuggingFace Embeddings", "Groq LLM"],
    points: [
      "Engineered a full Retrieval-Augmented Generation (RAG) system enabling users to upload PDFs and query private documents with grounded responses.",
      "Built a FastAPI backend for document ingestion, text extraction, chunking, and persistent vector storage using ChromaDB.",
      "Implemented semantic search for accuracy and integrated Groq LLM for strictly grounded answer generation."
    ],
    github: "https://github.com/jtn11/RAG-Based-AI-Chatbot",
    color: "from-rose-500/20 to-transparent",
    border: "group-hover:border-rose-500/50"
  },
  {
    title: "Resume Intelligence API",
    subtitle: "AI REST API Service",
    date: "Jan 2026",
    tech: ["Node.js", "TypeScript", "Groq LLM", "REST API", "Render"],
    points: [
      "Built a scalable Node.js and TypeScript REST API utilizing clean architecture and factory patterns to decouple business logic from LLM providers.",
      "Implemented production-grade SaaS features including API key authentication, per-key rate limiting, usage tracking, and deployment on Render."
    ],
    github: "https://github.com/jtn11/resume-intelligence-api",
    color: "from-indigo-500/20 to-transparent",
    border: "group-hover:border-indigo-500/50"
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
    color: "from-amber-500/20 to-transparent",
    border: "group-hover:border-amber-500/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">Selected <span className="font-serif italic text-zinc-500 dark:text-zinc-400">works</span></h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`relative group bg-zinc-50 dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-[#151515] hover:-translate-y-2 shadow-sm dark:shadow-none ${project.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                    <h4 className="text-md text-blue-600 dark:text-blue-400 mt-1">{project.subtitle}</h4>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-2 bg-zinc-200 dark:bg-zinc-800/80 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 z-20">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-zinc-200 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-300 dark:border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
                
                <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3">
                  {project.points.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"/>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
