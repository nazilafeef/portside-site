'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 bg-brand-navy text-brand-ivory overflow-hidden flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
        <div className="w-full max-w-4xl">
          
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold uppercase mb-8 tracking-[-0.05em]"
          >
            <span className="block text-white text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] break-words">
              Trusted Maritime Partners
            </span>
            <span className="block text-brand-gold mt-2 text-[clamp(1.25rem,4vw,3rem)] leading-tight break-words">
              In the Indian Ocean
            </span>
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(1rem,1.5vw,1.25rem)] text-brand-ivory/60 max-w-2xl font-light leading-relaxed mb-10"
          >
            We bridge the gap between ship owners and charterers with{' '}
            <span className="text-brand-ivory font-medium">
              local expertise and global reach
            </span>.
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex"
          >
            <Link 
              href="/contact" 
              className="bg-brand-gold text-brand-navy px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl shadow-brand-gold/20"
            >
              Discuss a Fixture
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
