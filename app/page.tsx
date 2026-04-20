import React from 'react';
import Hero from '../components/Hero';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-brand-navy min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Services Overview Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bunkering Card */}
          <div className="bg-brand-ivory/5 p-12 border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-all group">
            <h2 className="font-display text-3xl font-bold text-white uppercase mb-6">Bunker Fuel Maldives</h2>
            <p className="text-brand-ivory/60 mb-8 text-lg font-light leading-relaxed">
              Strategically positioned to serve vessels transiting the Indian Ocean. We provide VLSFO and LSMGO with institutional reliability.
            </p>
            <Link href="/bunkering" className="text-brand-gold uppercase tracking-widest text-sm font-bold group-hover:translate-x-2 transition-transform inline-block">
              Request Quotation →
            </Link>
          </div>

          {/* Chartering Card */}
          <div className="bg-brand-ivory/5 p-12 border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-all group">
            <h2 className="font-display text-3xl font-bold text-white uppercase mb-6">Vessel Chartering</h2>
            <p className="text-brand-ivory/60 mb-8 text-lg font-light leading-relaxed">
              Specializing in Handy and Supramax fixtures. We bridge the gap between ship owners and charterers with global reach.
            </p>
            <Link href="/chartering" className="text-brand-gold uppercase tracking-widest text-sm font-bold group-hover:translate-x-2 transition-transform inline-block">
              Discuss a Fixture →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <Footer />
    </main>
  );
}
