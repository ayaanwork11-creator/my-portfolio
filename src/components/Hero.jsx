import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Activity, Compass } from "lucide-react";
import HeroScene from "./HeroScene";
import { personalData, statsData } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/soundEffects";

export default function Hero() {
  const scrollTo = (id) => {
    playClickSound();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-cyber-grid"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-radial-glow pointer-events-none rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] ambient-cyan-glow pointer-events-none rounded-full blur-3xl opacity-50" />

      {/* Top Telemetry / Status Strip */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/5 text-zinc-400 font-mono text-[11px] tracking-wider relative z-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {personalData.status}
          </span>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-zinc-400">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            {personalData.location}
          </span>
        </div>

        <div className="flex items-center gap-4 text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-zinc-300">GPU ACCELERATED</span>
          </span>
          <span className="hidden md:inline">SYS_VER 2.5.0</span>
        </div>
      </div>

      {/* Main Hero Grid: Left Content + Right 3D Centerpiece */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8 relative z-10">
        {/* Left Column: Bold Editorial Typography & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Subtitle / Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
              {personalData.tagline}
            </span>
          </div>

          {/* Oversized Name Typography */}
          <div className="space-y-1">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
              <span className="block">{personalData.name.split(" ")[0]}</span>
              <span className="block gradient-text-electric">
                {personalData.name.split(" ").slice(1).join(" ") || "DEVELOPER"}
              </span>
            </h1>
          </div>

          {/* Headline & Description */}
          <p className="font-heading text-lg sm:text-xl font-normal text-zinc-300 max-w-2xl leading-relaxed">
            {personalData.headline}
          </p>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            {personalData.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollTo("projects")}
              onMouseEnter={playHoverSound}
              data-magnetic
              className="btn-primary-neon group"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              onMouseEnter={playHoverSound}
              data-magnetic
              className="btn-secondary-glass group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-violet-400" />
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive Centerpiece */}
        <div className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[520px] w-full flex items-center justify-center relative">
          {/* Subtle Outer Frame Crosshairs */}
          <div className="absolute inset-0 tech-corner-frame pointer-events-none opacity-40" />

          {/* Three.js Centerpiece Canvas */}
          <HeroScene />
        </div>
      </div>

      {/* Bottom Metrics Bar & Scroll Cue */}
      <div className="w-full max-w-7xl mx-auto pt-8 border-t border-white/5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Curated Stats Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-[10px] text-zinc-500 font-sans">{stat.detail}</span>
            </div>
          ))}
        </div>

        {/* Subtle Scroll Cue */}
        <button
          onClick={() => scrollTo("about")}
          onMouseEnter={playHoverSound}
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-violet-400 transition-colors">
            <span className="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200">
            SCROLL TO EXPLORE
          </span>
        </button>
      </div>
    </section>
  );
}
