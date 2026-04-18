'use client';

import { motion } from 'framer-motion';

export default function Team() {
  const members = [
    { name: 'Vishal', role: 'Founder', initial: 'V' },
    { name: 'Yash', role: 'CEO', initial: 'Y' },
    { name: 'Nitin', role: 'CMO', initial: 'N' },
    { name: 'Lucky', role: 'Graphic Designer', initial: 'L' },
    { name: 'Sharad', role: 'SMM Head', initial: 'S' },
    { name: 'Bipin', role: 'Task Manager', initial: 'B' },
    { name: 'Mukul', role: 'Analyst', initial: 'M' },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="max-w-xl mb-20 text-center md:text-left">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">06 / COLLECTIVE</motion.span>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight uppercase">Meet the Minds <br /> <span className="text-white/30">Behind Vayu.</span></h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center group transition-colors hover:bg-white/[0.03]"
            >
              <div className="w-16 h-16 rounded-full bg-white/[0.05] flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                {member.initial}
              </div>
              <h3 className="text-xl font-bold leading-none mb-2">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/30">{member.role}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="https://www.instagram.com/vayusocialagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </motion.div>
          ))}
          
          <div className="p-10 rounded-[40px] border border-dashed border-white/10 flex flex-col items-center justify-center text-center text-white/20">
            <h3 className="text-xl font-bold mb-4">Want to Join?</h3>
            <button className="text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">Work With Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
