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
    <main className="relative bg-[#050505] selection:bg-white selection:text-black">
      {/* ── Seamless In-Depth Backdrop ────────────────────────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Field Grid - Hyper-optimized SVG */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='white' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* Soft Atmospheric Glows - CSS only, no filters */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-[120px]" />
        
        {/* Corner Accents */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
      </div>

      {/* Dimming vignette - simplified for performance */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* UI Content - Optimized with contain-intrinsic-size for faster layout */}
      <div className="relative z-10 overflow-x-hidden">
        <div id="hero"><Hero /></div>
        <div id="impact"><About /></div>
        <div id="story"><Story /></div>
        <div id="live"><GrowthDashboard /></div>
        <div id="cases"><CaseStudies /></div>
        <div id="work"><Projects /></div>
        <div id="showcase"><ContentShowcase /></div>
        <div id="trust"><Testimonials /></div>
        <div id="awards"><Recognition /></div>
        <div id="services"><ExperienceSection /></div>
        <div id="tech"><TechStack /></div>
        <div id="process"><Process /></div>
        <div id="pricing"><Pricing /></div>
        <div id="insights"><Insights /></div>
        <div id="audit"><LeadMagnet /></div>
        <CTABanner />
        <div id="team"><Team /></div>
        <div id="contact"><Contact /></div>
      </div>

      {/* Persistent Navigation */}
      <nav className="fixed top-0 left-0 w-full px-4 md:px-10 py-4 md:py-8 flex flex-col md:flex-row justify-between items-center z-50 pointer-events-none gap-2 md:gap-4 transition-all">
        <div className="text-base md:text-lg font-bold tracking-tighter text-white pointer-events-auto cursor-pointer select-none bg-black/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/5 md:bg-transparent md:backdrop-blur-none md:border-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          VAYU<span className="text-white/30">SOCIAL</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 text-[8px] md:text-[11px] font-mono tracking-widest text-white/40 pointer-events-auto uppercase bg-black/20 backdrop-blur-lg px-6 py-3 rounded-full border border-white/5 md:bg-transparent md:backdrop-blur-none md:border-none">
          <a href="#story" className="hover:text-white transition-colors duration-300">Story</a>
          <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
          <a href="#trust" className="hover:text-white transition-colors duration-300">Trust</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
          <a href="#process" className="hover:text-white transition-colors duration-300">Process</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </nav>

      <ConversionEngine />
    </main>
  );
}
