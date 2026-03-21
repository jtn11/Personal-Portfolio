import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 font-mono">My Journey</p>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">Experience</h2>
        </div>

        <div className="relative border-l border-zinc-300 dark:border-zinc-800 ml-3 md:ml-6 pl-8 py-4 space-y-12">
          
          {/* Timeline Item */}
          <div className="relative group">
            {/* Dot */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-zinc-50 dark:border-black bg-zinc-900 dark:bg-white group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors" />
            
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Full Stack Web Development Intern</h3>
            <h4 className="text-xl text-zinc-700 dark:text-zinc-300 font-semibold mb-4 flex items-center justify-start gap-4 flex-wrap">
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400"><Briefcase className="w-5 h-5"/> Global Next Consulting (GN CIPL)</span>
              <span className="flex items-center gap-1 text-zinc-500 text-sm"><MapPin className="w-4 h-4"/> Noida, India</span>
              <span className="flex items-center gap-1 text-zinc-500 text-sm"><Calendar className="w-4 h-4"/> Sept. 2025 – Nov 2025</span>
            </h4>
            
            <ul className="text-zinc-600 dark:text-zinc-400 space-y-3 list-disc ml-5 mt-4 text-base md:text-lg">
              <li className="pl-1">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Engineered</span> a live full-stack web application using React for the frontend and Node.js/Express for server-side logic.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Architected</span> responsive user interfaces and integrated RESTful APIs to ensure seamless data flow between the client and server.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Collaborated</span> in an industrial workshop environment, adhering to NCS (National Capability Standard) protocols for code quality and documentation.
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
