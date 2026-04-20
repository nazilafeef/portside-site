"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-auto rounded-sm" />
          <span className="text-brand-ivory font-display font-bold tracking-tighter text-lg md:text-xl">
            Portside Agency <span className="text-brand-gold">Pvt Ltd</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-brand-ivory/80">
          <Link href="/chartering" className="hover:text-brand-gold transition-colors">Chartering</Link>
          <Link href="/bunkering" className="hover:text-brand-gold transition-colors">Bunkering</Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors border border-brand-gold/30 px-4 py-2 rounded-full">Connect</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
