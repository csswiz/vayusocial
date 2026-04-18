'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 text-center relative overflow-hidden">
      <div className="max-w-4xl z-10 w-full">
        <motion.span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8 block">07 / CONTACT</motion.span>
        <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 uppercase text-balance">
          LET'S BUILD <br />
          <span className="text-white/30">LEGENDARY.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div className="glass p-12 rounded-[50px] border border-white/5 text-left group hover:border-white/20 transition-all">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Inquiry</h3>
            <p className="text-xl md:text-2xl font-light mb-8 break-all">vayusocial098@gmail.com</p>
            <a href="mailto:vayusocial098@gmail.com" className="text-[11px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Email Us</a>
          </motion.div>

          <motion.div className="glass p-12 rounded-[50px] border border-white/5 text-left group hover:border-white/20 transition-all">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Presence</h3>
            <p className="text-xl md:text-2xl font-light mb-8 italic">@vayusocialagency</p>
            <a 
              href="https://www.instagram.com/vayusocialagency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all"
            >
              Instagram
            </a>
          </motion.div>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/20 gap-8">
          <p>© 2026 VAYUSOCIAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a 
              href="https://www.instagram.com/vayusocialagency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </footer>
      </div>
      
      {/* Visual flare */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-screen h-screen bg-white/5 blur-[200px] rounded-full pointer-events-none" />
    </section>
  );
}
