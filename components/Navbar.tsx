"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 bg-[#111E36]/95 backdrop-blur-sm border-b border-[#C5A059]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col text-left">
            <span className="text-xl font-bold tracking-tight text-[#F8F9FA]">Portside Agency</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]/80">Republic of Maldives</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-widest text-[#F8F9FA]/80">
          <Link href="/services" className="hover:text-[#C5A059] transition">Services</Link>
          <Link href="/contact" className="border border-[#C5A059]/50 px-4 py-2 rounded-sm hover:bg-[#C5A059] hover:text-[#111E36] transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}