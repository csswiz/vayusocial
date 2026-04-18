'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`Growth Audit Request: ${formData.brand}`);
    const body = encodeURIComponent(
      `VAYU SOCIAL GROWTH AUDIT REQUEST\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Brand: ${formData.brand}\n\n` +
      `Please prepare my free growth strategy and audit.`
    );
    
    window.location.href = `mailto:vayusocialagency@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block font-bold"
          >
            Limited Availability / Free
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-10"
          >
            CLAIM YOUR <br />
            <span className="text-white/30 italic underline decoration-white/10 underline-offset-8">VIRAL PLAN.</span>
          </motion.h2>
          <p className="max-w-lg text-lg text-white/60 leading-relaxed font-medium mb-12">
            Get a FREE comprehensive Social Media Audit & Growth Strategy Call. 
            We'll breakdown your current performance and show you exactly how to double your reach.
          </p>
          
          <div className="flex items-center gap-6">
             <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
             </div>
             <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold animate-pulse">
                ONLY 3 SLOTS LEFT FOR THIS MONTH
             </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 md:p-14 rounded-[60px] border border-white/10 shadow-2xl relative"
        >
          {submitted ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-6">📩</div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Mail Client Opened.</h3>
              <p className="text-white/40 text-sm">Please hit send in your email app to finalize your request.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors"
              >
                ← Back to form
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-4 font-bold ml-4">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-full px-8 py-5 text-sm text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/10 italic"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-4 font-bold ml-4">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@company.com"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-full px-8 py-5 text-sm text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/10 italic"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-4 font-bold ml-4">Brand / Business Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.brand}
                  onChange={(e) => setFormData({...formData, brand: e.target.value})}
                  placeholder="VAYO LUX"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-full px-8 py-5 text-sm text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/10 italic"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-6 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all active:scale-95 shadow-xl mt-4"
              >
                Claim My Free Audit →
              </button>
              
              <div className="text-center">
                 <p className="text-[9px] text-white/20 uppercase tracking-widest">Opens your secure email client.</p>
              </div>
            </form>
          )}

          {/* Decorative glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
