import { Terminal, Quote, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "../data/portfolioData";
import { playHoverSound } from "../utils/soundEffects";

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#08090f] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-violet-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 06. PEER RECOGNITION</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              TESTIMONIALS & ENDORSEMENTS
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md">
            Unsolicited feedback from engineering leaders, product designers, and creative directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300 tech-corner-frame"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-violet-400/40 group-hover:text-violet-400 transition-colors" />
                <p className="font-heading text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                    {t.author}
                  </h4>
                  <p className="font-mono text-xs text-zinc-400">{t.role}</p>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
