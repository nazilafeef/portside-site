'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  details: string[];
}

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <div className="glass p-8 rounded-xl hover:border-brand-gold/30 transition-all">
      <Icon size={28} className="text-brand-gold mb-6" />
      <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-brand-muted mb-6">{service.description}</p>
      <Link href={service.href} className="text-brand-gold flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}
