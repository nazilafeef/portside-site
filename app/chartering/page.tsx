"use client";
import React from 'react';
import { useForm } from '@formspree/react';

export default function CharteringPage() {
  const [state, handleSubmit] = useForm("mgorznwk");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center text-center px-6">
        <h2 className="text-2xl font-display font-bold text-brand-gold uppercase tracking-tighter">Position Submitted</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-navy pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-brand-ivory uppercase tracking-tighter">Ship Chartering</h1>
          <p className="text-brand-gold uppercase tracking-[0.3em] text-xs mt-4">Market Your Open Position</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-12 rounded-lg border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest border-b border-white/10 pb-2">Vessel Details</div>
          <input name="vessel_name" placeholder="Vessel Name / IMO" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="dwt" placeholder="DWT (Metric Tonnes)" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="open_port" placeholder="Open Port" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="laycan" placeholder="Laycan Window" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />

          <div className="md:col-span-2 text-brand-gold text-[10px] uppercase font-bold tracking-widest border-b border-white/10 pb-2 mt-4">Ownership Information</div>
          <input name="owner_name" placeholder="Company Name" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="email" type="email" placeholder="Email Address" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <input name="phone" placeholder="Phone / WhatsApp" required className="bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold transition-colors" />
          <textarea name="cargo_history" placeholder="Recent Cargo History / Requirements" className="md:col-span-2 bg-transparent border border-white/20 p-4 outline-none focus:border-brand-gold h-32"></textarea>
          
          <button type="submit" disabled={state.submitting} className="md:col-span-2 bg-brand-gold text-brand-navy font-black uppercase py-5 hover:bg-white transition-all shadow-xl">
            Submit Open Position
          </button>
        </form>
      </div>
    </main>
  );
}
