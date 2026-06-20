"use client";

import { motion } from "framer-motion";

export default function OverlayUI() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="glass-card flex flex-col items-center max-w-3xl w-full"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          PRITHBI
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl font-medium text-accentBlue mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Computer Science Engineering Student
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-10 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Footballer &bull; Web Developer &bull; Future Full Stack Developer
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-accentBlue text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors duration-300">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll to explore</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
          animate={{ height: ["0rem", "3rem", "0rem"], translateY: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
