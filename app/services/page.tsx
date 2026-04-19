"use client";
import { Ship, Fuel, Globe } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { title: 'Vessel Chartering', desc: 'Strategic ship management and cargo fixing.', icon: <Ship /> },
    { title: 'Bunker Solutions', desc: 'Premium fuel procurement and logistics.', icon: <Fuel /> },
    { title: 'Market Intelligence', desc: 'Real-time data for shipping executives.', icon: <Globe /> }
  ];

  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="text-blue-600 mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}