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
import GlobalBackdrop from '@/components/ui/GlobalBackdrop';
import Header from '@/components/ui/Header';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Home() {
  return (
    <main className="relative bg-[#0a1128] selection:bg-white selection:text-black">
      <CustomCursor />
      {/* ── Immersive Multi-Layer Backdrop ────────────────────────── */}
      <GlobalBackdrop />

      {/* Dimming vignette - simplified for performance */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* Persistent Navigation */}
      <Header />

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

      <ConversionEngine />
    </main>
  );
}
