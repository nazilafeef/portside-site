"use client";
import React from 'react';
import { useForm } from '@formspree/react';

export default function BunkeringPage() {
  const [state, handleSubmit] = useForm("mgorznwk");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center text-center">
        <h2 className="text-2xl font-display font-bold text-brand-gold uppercase">RFQ Received</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-navy pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-brand-ivory uppercase tracking-tight">
  Bunker Fuel Maldives
</h1>
<h3 className="text-2xl md:text-3xl font-display font-bold text-brand-ivory uppercase tracking-tight mt-2">
  Your Operational Link for Indian Ocean Physical Supply
</h3>
<p className="text-brand-gold uppercase tracking-[0.25em] text-[10px] sm:text-xs mt-6 font-medium opacity-90">
  Fuel & Lubricant Supply RFQ
</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-12 rounded-lg border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest border-b border-white/10 pb-2">Vessel & Delivery</div>
          <input name="vessel_name" placeholder="Vessel Name" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="port" placeholder="Delivery Port (e.g. Male')" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="eta" type="datetime-local" placeholder="ETA" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          
          <select name="fuel_type" className="bg-brand-navy border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors">
            <option value="VLSFO">VLSFO (0.5% Sulfur)</option>
            <option value="LSMGO">LSMGO (0.1% Sulfur)</option>
            <option value="HFO">HFO (3.5% Sulfur)</option>
          </select>

          <div className="md:col-span-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest border-b border-white/10 pb-2 mt-4">Volume & Contact</div>
          <input name="quantity" placeholder="Quantity (MT)" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="company" placeholder="Company Name" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="email" type="email" placeholder="Email Address" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="phone" placeholder="Phone / WhatsApp" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          
          <textarea name="requirements" placeholder="Additional Requirements (Additives, etc.)" className="md:col-span-2 bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold h-32"></textarea>
          
          <button type="submit" disabled={state.submitting} className="md:col-span-2 bg-brand-gold text-brand-navy font-black uppercase py-5 hover:bg-white transition-all">
            Request Fuel Quote
          </button>
        </form>
      </div>
    </main>
  );
}
