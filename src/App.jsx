import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import CreativeLab from "./components/CreativeLab";
import ExperienceJourney from "./components/ExperienceJourney";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    // Initialize Butter-smooth Lenis Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animId;
    function raf(time) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }

    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#060709] text-[#f5f5f7] selection:bg-violet-600/30 selection:text-white relative">
      {/* Custom Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Glass Pill Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero with 3D Quantum Orb Centerpiece */}
        <Hero />

        {/* Editorial Philosophy & Core Pillars */}
        <About />

        {/* Interactive Technical Matrix & Infinite Marquee */}
        <Skills />

        {/* Flagship Case Studies with Asymmetric Layouts & Deep-Dive Modal */}
        <FeaturedProjects />

        {/* Animmaster-Inspired Generative Canvas Lab Sandbox */}
        <CreativeLab />

        {/* Milestone Timeline & Career Trajectory */}
        <ExperienceJourney />

        {/* Peer Recognition & Endorsements */}
        <Testimonials />

        {/* Magnetic Headline, Functional Form, Confetti & Clocks */}
        <Contact />
      </main>
    </div>
  );
}
