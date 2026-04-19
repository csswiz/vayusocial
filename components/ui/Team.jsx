'use client';

import { motion } from 'framer-motion';

export default function Team() {
  const members = [
    { name: 'Vishal', role: 'Founder', initial: 'V' },
    { name: 'Yash', role: 'CEO', initial: 'Y' },
    { name: 'Nitin', role: 'CMO', initial: 'N' },
    { name: 'Lucky', role: 'Graphic Designer', initial: 'L' },
    { name: 'Sharad', role: 'SMM Head', initial: 'S' },
    { name: 'Kishan', role: 'Task Manager', initial: 'K' },
    { name: 'Mukul', role: 'Analyst', initial: 'M' },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="max-w-xl mb-24 md:mb-32">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">06 / COLLECTIVE</motion.span>
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            The Minds <br /> 
            <span className="text-white/30 italic underline decoration-white/10 underline-offset-[12px]">Behind.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -15 }}
              className="glass p-12 rounded-[55px] border border-white/5 flex flex-col items-center text-center group transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-24 h-24 rounded-[30px] bg-white/[0.05] border border-white/10 flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500 shadow-xl"
              >
                {member.initial}
              </motion.div>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 group-hover:text-white transition-colors">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">{member.role}</p>
              
              <div className="mt-10 pt-8 border-t border-white/5 w-full">
                <a 
                  href="https://www.instagram.com/vayusocialagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer text-white/20 hover:text-amber-400 transition-colors"
                >
                  CONNECT ↗
                </a>
              </div>
            </motion.div>
          ))}
          
          <div className="glass p-12 rounded-[55px] border border-dashed border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-amber-400/30 transition-colors">
            <h3 className="text-xl font-black uppercase leading-tight mb-4 text-white/20 group-hover:text-white transition-colors italic">Ready to <br/> scale?</h3>
            <button className="px-6 py-2 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/30 group-hover:bg-white group-hover:text-black transition-all">Join Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
