'use client';

import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setDisplayValue(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
}

export default function GrowthDashboard() {
  const metrics = [
    { label: 'Followers Gained', value: 342150, suffix: '+' },
    { label: 'Total Reach', value: 12400000, suffix: '+' },
    { label: 'Campaigns Running', value: 48, suffix: '' },
    { label: 'Revenue Generated', value: 8500000, suffix: ' ₹' },
  ];

  const chartBars = [40, 65, 45, 90, 75, 55, 80, 60, 95];

  return (
    <section className="min-h-section w-full flex items-center justify-center px-6 md:px-20 py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl w-full z-10">
        <div className="mb-20">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">02 / REAL-TIME ENGINE</motion.span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            LIVE GROWTH <br />
            <span className="text-white/30">MONITOR.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 glass p-10 rounded-[50px] border border-white/5 relative overflow-hidden group"
          >
            <div className="flex justify-between items-center mb-16">
               <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Aggregate Performance</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/20">Monthly Viral Velocity Index</p>
               </div>
               <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-green-400 uppercase tracking-widest">Live Feed</span>
               </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-1 md:gap-4">
               {chartBars.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${val}%` }}
                    transition={{ delay: i * 0.05, duration: 1, ease: "circOut" }}
                    className="flex-1 bg-gradient-to-t from-white/[0.05] via-white/10 to-white/20 rounded-t-xl group-hover:to-white/40 transition-all cursor-crosshair"
                  >
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 hidden md:block">
                        <span className="text-[9px] font-mono text-white/40">{val}%</span>
                     </div>
                  </motion.div>
               ))}
            </div>
            
            <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none text-9xl font-black tracking-tighter italic select-none">VAYU</div>
          </motion.div>

          {/* Stats Column */}
          <div className="grid grid-cols-1 gap-6">
            {metrics.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[40px] border border-white/5 group hover:border-white/20 transition-all"
              >
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">{stat.label}</p>
                <div className="text-3xl md:text-4xl font-black tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-4 w-full h-1 bg-white/[0.03] rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ x: '-100%' }}
                     whileInView={{ x: '0%' }}
                     transition={{ duration: 2, delay: 0.5 }}
                     className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
