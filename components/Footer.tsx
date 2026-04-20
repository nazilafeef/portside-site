import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-0 pb-10 border-t border-white/5">
      {/* PRE-FOOTER: Boutique Strength Bar */}
      <div className="bg-white/5 py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-brand-ivory mb-2 tracking-tight">
              Need something handled at short notice?
            </h3>
            <p className="text-brand-ivory/60 text-sm">
              We support vessels, cargo interests and chartering desks with fast, direct execution across Indian Ocean and regional routes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white transition-all">
              Contact Operations
            </Link>
            <a href="https://wa.me/9609249669" className="px-6 py-3 border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-brand-gold/10 transition-all">
              Send via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Logo" className="h-10 w-auto rounded-sm opacity-90" />
              <div className="flex flex-col">
                <span className="text-brand-ivory font-bold text-sm leading-none">Portside Agency</span>
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-tighter">Pvt Ltd</span>
              </div>
            </div>
            <p className="text-brand-ivory/50 text-[13px] leading-relaxed">
              Independent Maritime Agency & Commercial Desk. Supporting vessel operators and cargo interests with direct, execution-focused solutions across the Indian Ocean.
            </p>
          </div>

          {/* COLUMN 2: CORE SERVICES */}
          <div className="space-y-6">
            <h4 className="text-brand-gold text-[11px] font-black uppercase tracking-[0.2em]">Core Services</h4>
            <ul className="space-y-3 text-brand-ivory/70 text-sm font-medium">
              <li>Bunkering <span className="text-[10px] opacity-40 block font-normal">(Fuel & Lubricants Supply)</span></li>
              <li>Vessel Chartering</li>
              <li>Dry Bulk & Project Cargo Fix</li>
            </ul>
            <p className="text-[11px] text-brand-ivory/30 italic">Additional operational support available on request.</p>
          </div>

          {/* COLUMN 3: DIRECT CONTACT */}
          <div className="space-y-6">
            <h4 className="text-brand-gold text-[11px] font-black uppercase tracking-[0.2em]">Operations Desk (24/7)</h4>
            <div className="space-y-4">
              <div>
                <p className="text-brand-ivory text-lg font-bold tracking-tight">+960 924 9669</p>
                <p className="text-brand-ivory/40 text-[11px]">Direct coordination. Immediate response.</p>
              </div>
              <p className="text-brand-ivory/80 text-sm border-b border-white/10 pb-2 inline-block">admin@portsideagency.com</p>
              <p className="text-brand-ivory/50 text-xs">Male’, Republic of Maldives</p>
            </div>
          </div>

          {/* COLUMN 4: TRUST & CREDENTIALS */}
          <div className="space-y-6">
            <h4 className="text-brand-gold text-[11px] font-black uppercase tracking-[0.2em]">Credentials</h4>
            <div className="grid grid-cols-1 gap-2 text-[11px] text-brand-ivory/50 font-bold uppercase tracking-wider">
              <p>IMO Company No: 6418086</p>
              <p>D-U-N-S: 984560571</p>
              <p>BIMCO Member</p>
              <p>IBIA Member</p>
            </div>
            <p className="text-[10px] text-brand-ivory/30 leading-tight pt-2 border-t border-white/5">
              Operating in line with international maritime standards.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-brand-ivory/40 text-[10px] font-bold uppercase tracking-widest text-center lg:text-left">
            <p>© 2026 Portside Agency Pvt Ltd. All Rights Reserved.</p>
            <p className="mt-1">Reg No: C00212023 | IMO Company No: 6418086</p>
          </div>
          <div className="text-brand-ivory/30 text-[10px] font-bold uppercase tracking-widest text-center lg:text-right">
            <p>H. Maadhoofiya, 10th Floor</p>
            <p>Male’, 20082, Republic of Maldives</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
