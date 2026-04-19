'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { name: 'Story', href: '#story' },
    { name: 'Work', href: '#work' },
    { name: 'Trust', href: '#trust' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex justify-center py-6 pointer-events-none`}
    >
      <div 
        className={`flex items-center gap-8 px-8 py-3 rounded-full border border-white/5 backdrop-blur-xl transition-all duration-500 pointer-events-auto
          ${isScrolled ? 'bg-black/40 scale-95 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'bg-transparent'}
        `}
      >
        <div 
          className="text-lg font-black tracking-tighter text-white cursor-pointer mr-4"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          VAYU<span className="text-amber-400">SOCIAL</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <a 
              key={i} 
              href={item.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="h-6 w-px bg-white/10 mx-2 hidden md:block" />
        
        <a 
          href="#contact"
          className="px-6 py-2 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors"
        >
          Book Audit
        </a>
      </div>
    </motion.nav>
  );
}
