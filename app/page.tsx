"use client";
import { motion } from 'framer-motion';

export default function HomePage() {
  const discussFixture = () => {
    const msg = "Let's discuss a fixture.";
    window.open("https://wa.me/9609249669?text=" + encodeURIComponent(msg), '_blank');
  };

  return (
    <main className="hero-bg min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-4xl md:text-7xl mb-6 leading-tight max-w-4xl font-serif text-[#F8F9FA]">
          Trusted Maritime Partners in the <span className="text-[#C5A059]">Indian Ocean</span>
        </h1>
        <p className="max-w-xl text-lg text-[#F8F9FA]/70 mb-12 mx-auto font-light">
          We bridge the gap between ship owners and charterers with local expertise and global reach.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button onClick={discussFixture} className="bg-[#C5A059] text-[#111E36] px-12 py-4 font-bold uppercase tracking-widest hover:scale-105 transition shadow-xl">
            Discuss a Fixture
          </button>
        </div>
      </motion.div>

      <section className="w-full mt-24 opacity-50 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] flex justify-center gap-8">
        <span>BIMCO Member</span> <span>IBIA Member</span> <span>IMO Registered</span>
      </section>
    </main>
  );
}