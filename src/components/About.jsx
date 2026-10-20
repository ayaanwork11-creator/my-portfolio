import { Cpu, Layers, Zap, CheckCircle2, Terminal } from "lucide-react";
import { aboutData, personalData } from "../data/portfolioData";
import { playHoverSound } from "../utils/soundEffects";

export default function About() {
  const pillarIcons = [
    <Cpu key="cpu" className="w-5 h-5 text-violet-400" />,
    <Layers key="layers" className="w-5 h-5 text-cyan-400" />,
    <Zap key="zap" className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 bg-[#06070a] border-t border-white/5 overflow-hidden"
    >
      {/* Background Subtle Noise / Ambient Light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-violet-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 01. PERSPECTIVE & DOCTRINE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              {aboutData.sectionTitle}
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 tracking-wider">
            <span>DISCIPLINE: CREATIVE COMPUTING</span>
          </div>
        </div>

        {/* Editorial Bold Statement & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-medium text-2xl sm:text-3xl md:text-4xl text-zinc-100 leading-snug tracking-tight">
              "{aboutData.statement}"
            </h3>

            <div className="space-y-4 pt-4 text-zinc-400 font-sans text-base leading-relaxed">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Quick Technical Specs Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl space-y-6 tech-corner-frame">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                ENGINEERING PROFILE
              </span>
              <span className="font-mono text-[11px] text-violet-400">STATUS: ACTIVE</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-white/5 text-zinc-400">
                <span>IDENTITY:</span>
                <span className="text-white font-medium">{personalData.name}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5 text-zinc-400">
                <span>PRIMARY FOCUS:</span>
                <span className="text-white font-medium">WebGL // React // Shaders</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5 text-zinc-400">
                <span>DEV ENVIRONMENT:</span>
                <span className="text-white font-medium">Vite + React 19 + GSAP</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5 text-zinc-400">
                <span>ANIMATION TARGET:</span>
                <span className="text-emerald-400 font-medium">60 FPS Locked</span>
              </div>
              <div className="flex justify-between py-1.5 text-zinc-400">
                <span>DESIGN SYSTEM:</span>
                <span className="text-white font-medium">Custom Dark Obsidian</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 bg-white/[0.02] p-3 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full source code easily configured in portfolioData.js</span>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {aboutData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="glass-panel p-8 rounded-2xl relative group hover:border-violet-500/50 transition-all duration-300 tech-corner-frame flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 group-hover:bg-violet-500/10 transition-all">
                    {pillarIcons[idx]}
                  </div>
                  <span className="font-mono text-xl font-bold text-zinc-600 group-hover:text-violet-400 transition-colors">
                    {pillar.index}
                  </span>
                </div>

                <h4 className="font-heading font-semibold text-lg text-white group-hover:text-violet-300 transition-colors">
                  {pillar.title}
                </h4>

                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>STANDARD SPEC</span>
                <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors">
                  [VERIFIED]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
