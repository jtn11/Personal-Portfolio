"use client";

import React from 'react';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Text & Links */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black mb-4 text-zinc-900 dark:text-white">Let&apos;s Connect</h2>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
                I am always open to discussing web development work, AI integrations, or partnership opportunities. Reach out to me directly and let&apos;s build something great.
              </p>
            </div>
            
            <div className="space-y-6 text-lg">
              <a href="mailto:jatinsainii2003@gmail.com" className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white group">
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                </div>
                <span>jatinsainii2003@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300 group">
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-purple-500 dark:group-hover:text-purple-400" />
                </div>
                <span>9650329139</span>
              </div>
              
              <div className="flex gap-6 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <a href="https://www.linkedin.com/in/jatin-saini-214795257/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  LinkedIn <ExternalLink className="w-4 h-4"/>
                </a>
                <a href="https://github.com/jtn11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  GitHub <ExternalLink className="w-4 h-4"/>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Clean Form */}
          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">First Name</label>
                  <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Last Name</label>
                  <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Email Address</label>
                <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="name@domain.com" />
                </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Message</label>
                <textarea rows={5} className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                Send Message <Send className="w-4 h-4"/>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
