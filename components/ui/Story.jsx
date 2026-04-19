'use client';

import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 overflow-hidden relative">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-24">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block font-bold">13 / THE GENESIS</motion.span>
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
            Beyond the <br />
            <span className="text-white/30 italic underline decoration-white/10 underline-offset-8">Algorithm.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Narrative Blocks */}
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-10 border-l border-white/10"
            >
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6">The Spark</h3>
              <p className="text-lg text-white/50 leading-relaxed font-medium">
                VAYU SOCIAL was born in 2021 from a simple realization: the digital ocean is filled with noise, not narrative.
                We saw ambitious brands struggling to be heard amidst flickering trends and soul-less automation.
                We didn't just want to manage social media; we wanted to engineer digital heartbeats.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative pl-10 border-l border-white/10"
            >
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6">The Mission</h3>
              <p className="text-lg text-white/50 leading-relaxed font-medium">
                To synthesize high-end aesthetic with data-driven performance. We believe that
                true scaling happens at the intersection of psychology and cinema. Our goal
                is to build the most influential digital identities for the brands that define the next decade.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Vision</h4>
                <p className="text-sm text-white/50 font-medium">Global dominance of high-impact storytelling and authentic engagement.</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Belief</h4>
                <p className="text-sm text-white/50 font-medium">Every frame must convert. Every hook must resonate. Every brand must survive.</p>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col gap-8"
          >
            <div className="relative aspect-video rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/main.jpeg"
                alt=""
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            <div className="glass p-10 rounded-[50px] border border-white/5">
              <blockquote className="text-xl md:text-2xl font-black italic tracking-tighter leading-tight text-white mb-6">
                "Social media isn't a platform; it's the nervous system of modern culture. We just know how to pulse it."
              </blockquote>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">— THE VAYU COLLECTIVE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
