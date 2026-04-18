'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '₹9,999', features: ['2 Platforms', '12 Posts / Mo', 'Basic Analytics', 'Email Support'] },
    { name: 'Growth', price: '₹24,999', features: ['4 Platforms', '30 Posts / Mo', 'Ad Management', 'Priority Support'], popular: true },
    { name: 'Pro', price: '₹49,999', features: ['All Platforms', 'Unlimited Posts', 'Video Production', 'Manager'] },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 bg-white/[0.01]">
      <div className="max-w-7xl w-full">
        <motion.div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block">03 / PRICING</span>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter">Scale with <span className="text-white/30">Clarity.</span></h2>
          <p className="mt-6 text-white/70 max-w-lg mx-auto font-medium">No hidden fees. Pick the plan that fits your ambition.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[40px] border flex flex-col items-center text-center relative ${
                plan.popular ? 'border-white/30 bg-white/5' : 'border-white/10 glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-black mb-4 uppercase">{plan.name}</h3>
              <div className="text-4xl font-black mb-8">{plan.price}<span className="text-sm font-medium text-white/40">/mo</span></div>
              <ul className="space-y-4 mb-10 text-sm text-white/80 w-full text-left max-w-[200px] mx-auto font-medium">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href="#audit"
                className={`w-full py-4 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all text-center ${
                  plan.popular ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 hover:bg-white/5'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
