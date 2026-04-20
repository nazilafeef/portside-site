"use client";
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mgorznwk");
  const [intent, setIntent] = useState('general');

  const getButtonText = () => {
    switch(intent) {
      case 'bunkering': return 'Request Fuel Quote';
      case 'chartering': return 'Contact Chartering Desk';
      case 'cargo': return 'Submit Cargo Fix';
      case 'position': return 'List Open Position';
      case 'agency': return 'Request Agency Services';
      default: return 'Send Inquiry';
    }
  };

  if (state.succeeded) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-navy px-6">
        <div className="glass-morphism p-12 rounded-3xl border border-brand-gold/20 text-center max-w-md">
          <h2 className="text-3xl font-display font-bold text-brand-gold mb-4 uppercase">Inquiry Received</h2>
          <p className="text-brand-ivory/80 mb-8">Our desk has been notified. A specialist will review your requirements and respond shortly.</p>
          <button onClick={() => window.location.reload()} className="text-brand-gold font-bold uppercase tracking-widest text-sm hover:underline">New Request</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Context */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-ivory mb-6 uppercase tracking-tight">
                Connect with <br/><span className="text-brand-gold">The Desk</span>
              </h1>
              <div className="flex items-center gap-3 text-brand-gold text-sm font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                Dedicated Desk for Regional Operations
              </div>
            </div>

            <div className="space-y-6 text-brand-ivory/70">
              <p className="text-lg leading-relaxed">
                Select your intent to route your inquiry to the appropriate department. 
                <span className="block mt-4 text-brand-ivory font-medium">
                  For urgent bunker nominations or vessel emergencies, please use the WhatsApp Direct link for immediate coordination.
                </span>
              </p>
              
              <div className="pt-6 border-t border-white/10">
                <a href="https://wa.me/9609249669" className="inline-flex items-center gap-4 bg-brand-gold hover:bg-white text-brand-navy px-8 py-4 rounded-full transition-all font-bold uppercase tracking-widest text-xs shadow-lg shadow-brand-gold/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.888 11.887-2.01 0-3.987-.508-5.747-1.472l-6.237 1.696zm6.349-3.413l.353.209c1.479.879 3.187 1.344 4.933 1.344 5.333 0 9.673-4.34 9.673-9.671s-4.341-9.673-9.673-9.673c-2.585 0-5.015 1.004-6.841 2.83s-2.83 4.257-2.83 6.842c0 1.708.452 3.376 1.309 4.831l.229.392-1.01 3.693 3.781-.986zm11.312-6.522c-.27-.135-1.592-.785-1.839-.875-.246-.089-.426-.135-.606.135-.18.27-.696.875-.853 1.055-.157.18-.314.202-.584.067-.27-.135-1.138-.419-2.167-1.338-.8-.713-1.34-1.593-1.497-1.863-.157-.27-.017-.416.118-.551.121-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.606-1.461-.83-1.999-.219-.529-.441-.456-.606-.464-.157-.008-.337-.008-.517-.008s-.472.067-.719.337c-.246.27-.944.922-.944 2.25s.966 2.61 1.101 2.79c.135.18 1.901 2.903 4.605 4.069.643.277 1.144.442 1.535.567.646.204 1.234.175 1.7.105.519-.078 1.592-.651 1.816-1.281.225-.63.225-1.169.157-1.281-.068-.113-.247-.18-.517-.315z"/></svg>
                  WhatsApp Direct Link
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Intent Router Form */}
          <form onSubmit={handleSubmit} className="glass-morphism p-8 md:p-10 rounded-3xl border border-brand-gold/10 space-y-6 shadow-2xl">
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Nature of Inquiry</label>
              <select 
                name="intent" 
                onChange={(e) => setIntent(e.target.value)}
                className="w-full bg-brand-navy border border-brand-gold/30 rounded-xl px-4 py-4 text-brand-ivory focus:border-brand-gold outline-none cursor-pointer text-lg font-medium"
              >
                <option value="general">General Inquiry</option>
                <option value="bunkering">Bunkering (Fuel Supply)</option>
                <option value="chartering">Vessel Chartering</option>
                <option value="cargo">Cargo Fix</option>
                <option value="position">Open Position (Vessel Availability)</option>
                <option value="agency">Port Agency Services</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" required placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory focus:border-brand-gold outline-none" />
              <input type="text" name="company" required placeholder="Company Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory focus:border-brand-gold outline-none" />
              <input type="email" name="email" required placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory focus:border-brand-gold outline-none" />
              <input type="text" name="phone" placeholder="Phone / WhatsApp" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory focus:border-brand-gold outline-none" />
            </div>

            <div className="pt-4 border-t border-white/5">
              {intent === 'bunkering' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select name="fuel_type" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none">
                    <option value="VLSFO">VLSFO</option>
                    <option value="LSMGO">LSMGO</option>
                    <option value="IFO380">IFO 380</option>
                  </select>
                  <input type="text" name="quantity" placeholder="Quantity (MT)" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="port" defaultValue="Male Anchorage" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="eta" placeholder="ETA (Date/Time)" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                </div>
              )}

              {intent === 'chartering' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="vessel_type" placeholder="Vessel Type" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="dwt" placeholder="DWT" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="open_port" placeholder="Open Port" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="laycan" placeholder="Laycan Window" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                </div>
              )}

              {intent === 'cargo' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="cargo_type" placeholder="Cargo Type" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="quantity" placeholder="Quantity" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="load_port" placeholder="Load Port" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="disch_port" placeholder="Discharge Port" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                </div>
              )}

              {intent === 'position' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="vessel_name" placeholder="Vessel Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="imo" placeholder="IMO Number" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="open_port" placeholder="Open Port" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="available_date" placeholder="Available From" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                </div>
              )}

              {intent === 'agency' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="vessel_type" placeholder="Vessel Type" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <input type="text" name="eta" placeholder="ETA" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
                  <select name="service_type" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none col-span-full">
                    <option value="full">Full Agency & Husbandry</option>
                    <option value="clearance">Customs & Immigration Only</option>
                    <option value="crew">Crew Change / Medical</option>
                  </select>
                </div>
              )}

              <div className="mt-4">
                <textarea name="message" rows={3} placeholder="Additional requirements..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-ivory outline-none" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={state.submitting} 
              className="w-full bg-brand-gold hover:bg-white text-brand-navy py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all transform active:scale-95 shadow-xl shadow-brand-gold/10"
            >
              {state.submitting ? 'Transmitting...' : getButtonText()}
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}
