"use client";

import React from 'react';
import { 
  Code2, 
  Server, 
  LayoutTemplate, 
  Database, 
  BrainCircuit, 
  Wrench,
  Wand2
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages & Core",
    icon: <Code2 className="w-6 h-6 text-yellow-500" />,
    items: "JavaScript, TypeScript, Python, Java",
    color: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    category: "Frontend Development",
    icon: <LayoutTemplate className="w-6 h-6 text-cyan-500" />,
    items: "React.js, Next.js, HTML, CSS, Tailwind CSS",
    color: "from-cyan-500/20 to-transparent",
    border: "group-hover:border-cyan-500/50"
  },
  {
    category: "Backend Engineering",
    icon: <Server className="w-6 h-6 text-green-500" />,
    items: "Node.js, Express, REST APIs, FastAPI",
    color: "from-green-500/20 to-transparent",
    border: "group-hover:border-green-500/50"
  },
  {
    category: "Database Systems",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    items: "PostgreSQL, Firebase Firestore",
    color: "from-emerald-500/20 to-transparent",
    border: "group-hover:border-emerald-500/50"
  },
  {
    category: "AI & Intelligent Systems",
    icon: <BrainCircuit className="w-6 h-6 text-purple-500" />,
    items: "LLMs, RAG, Embeddings, Prompt Engineering",
    color: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    items: "Git, GitHub, CI/CD, Vercel",
    color: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Wand2 className="w-8 h-8 text-zinc-800 dark:text-zinc-100" />
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase">Skills</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`relative group bg-zinc-50 dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-[#151515] shadow-sm dark:shadow-none ${skill.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 shrink-0 p-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{skill.category}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {skill.items}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
