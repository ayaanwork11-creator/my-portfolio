import { useState } from "react";
import { Terminal, Code, Cpu, Database, Wrench, Sparkles } from "lucide-react";
import { skillsData, skillsCategories, marqueeTech } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/soundEffects";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "frontend":
        return <Code className="w-4 h-4 text-violet-400" />;
      case "creative":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "backend":
        return <Database className="w-4 h-4 text-pink-400" />;
      case "systems":
        return <Wrench className="w-4 h-4 text-indigo-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-12 bg-[#08090f] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 02. TECHNICAL MATRIX & STACK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              SKILLS & CAPABILITIES
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md">
            Production-grade competencies focused on modern design engineering, high-throughput frontend architecture, and hardware-accelerated 3D graphics.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClickSound();
                setSelectedCategory(cat.id);
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-violet-600 text-white border border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:bg-violet-500/10 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span className="font-heading font-semibold text-base text-white group-hover:text-violet-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-xs pt-1">
                  <span className="text-zinc-400">{skill.level}</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/5">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Tag Chips */}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] text-zinc-400 bg-white/[0.02] px-2 py-0.5 rounded border border-white/5 group-hover:border-violet-500/20 group-hover:text-zinc-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee Ticker */}
        <div className="pt-10 border-t border-white/5 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08090f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08090f] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-8 py-3">
            {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="font-mono text-sm tracking-widest text-zinc-400 hover:text-white transition-colors cursor-default whitespace-nowrap">
                  {tech}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
