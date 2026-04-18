'use client';

import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Story from '@/components/ui/Story';
import GrowthDashboard from '@/components/ui/GrowthDashboard';
import CaseStudies from '@/components/ui/CaseStudies';
import Projects from '@/components/ui/Projects';
import ContentShowcase from '@/components/ui/ContentShowcase';
import Testimonials from '@/components/ui/Testimonials';
import Recognition from '@/components/ui/Recognition';
import ExperienceSection from '@/components/ui/ExperienceSection';
import TechStack from '@/components/ui/TechStack';
import Process from '@/components/ui/Process';
import Pricing from '@/components/ui/Pricing';
import Insights from '@/components/ui/Insights';
import LeadMagnet from '@/components/ui/LeadMagnet';
import CTABanner from '@/components/ui/CTABanner';
import Team from '@/components/ui/Team';
import Contact from '@/components/ui/Contact';
import ConversionEngine from '@/components/ui/ConversionEngine';
import LazyScene from '@/components/canvas/LazyScene';

export default function Home() {
  return (
    <main className="relative bg-[#050505]">
      {/* 3D Scene - fixed background */}
      <div className="fixed inset-0 z-0">
        <LazyScene />
      </div>

      {/* Dimming vignette for legibility */}
      <div className="vignette" />

      {/* UI Content - Reordered for High-Performance Portfolio Narrative */}
      <div className="relative z-10">
        {/* Phase 1: Attention & Hook */}
        <div id="hero"><Hero /></div>
        
        {/* Phase 2: Who & Why (Connection) */}
        <div id="impact"><About /></div>
        <div id="story"><Story /></div>
        
        {/* Phase 3: Immediate Proof (Authority) */}
        <div id="live"><GrowthDashboard /></div>
        <div id="cases"><CaseStudies /></div>
        <div id="work"><Projects /></div>
        <div id="showcase"><ContentShowcase /></div>
        
        {/* Phase 4: Validation (Trust) */}
        <div id="trust"><Testimonials /></div>
        <div id="awards"><Recognition /></div>
        
        {/* Phase 5: The Engine (Solution) */}
        <div id="services"><ExperienceSection /></div>
        <div id="tech"><TechStack /></div>
        <div id="process"><Process /></div>
        
        {/* Phase 6: Investment & Logic (Conversion) */}
        <div id="pricing"><Pricing /></div>
        <div id="insights"><Insights /></div>
        <div id="audit"><LeadMagnet /></div>
        <CTABanner />
        
        {/* Phase 7: The Final Bridge (Humanize & Contact) */}
        <div id="team"><Team /></div>
        <div id="contact"><Contact /></div>
      </div>

      {/* Persistent Navigation - Realigned to new logic */}
      <nav className="fixed top-0 left-0 w-full px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center z-50 pointer-events-none gap-4">
        <div className="text-base md:text-lg font-bold tracking-tighter text-white pointer-events-auto cursor-pointer select-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          VAYU<span className="text-white/30">SOCIAL</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-mono tracking-widest text-white/40 pointer-events-auto uppercase">
          <a href="#story" className="hover:text-white transition-colors duration-300">Story</a>
          <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
          <a href="#trust" className="hover:text-white transition-colors duration-300">Trust</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
          <a href="#process" className="hover:text-white transition-colors duration-300">Process</a>
          <a href="#team" className="hover:text-white transition-colors duration-300">Team</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </nav>

      <ConversionEngine />

      <div
        className="fixed inset-0 pointer-events-none z-[200] opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '128px' }}
      />
    </main>
  );
}
