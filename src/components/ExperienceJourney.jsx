import { Terminal, Briefcase, MapPin, CheckCircle2, Calendar } from "lucide-react";
import { journeyTimeline } from "../data/portfolioData";
import { playHoverSound } from "../utils/soundEffects";

export default function ExperienceJourney() {
  return (
    <section
      id="journey"
      className="relative py-28 px-6 md:px-12 bg-[#06070a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 05. CAREER & TRAJECTORY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              EXPERIENCE & JOURNEY
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md">
            Chronological milestone trajectory spanning senior engineering leadership, 3D WebGL architectures, and open-source contributions.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 ml-2 sm:ml-6">
          {journeyTimeline.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="relative group space-y-4"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#06070a] border-2 border-violet-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-violet-500/40 transition-all duration-300 space-y-4 tech-corner-frame">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-violet-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 pt-1">
                      <span className="text-cyan-400 font-semibold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-violet-300 self-start sm:self-center">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                    KEY MILESTONES:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/5 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
