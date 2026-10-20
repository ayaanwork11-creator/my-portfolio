import { useState } from "react";
import { ArrowUpRight, ExternalLink, X, Terminal, CheckCircle2, Cpu, BarChart3 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projectsData } from "../data/portfolioData";
import { playHoverSound, playClickSound, playSwooshSound } from "../utils/soundEffects";

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  const openProjectModal = (project) => {
    playSwooshSound();
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    playClickSound();
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-12 bg-[#060709] border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambient Radial Highlights */}
      <div className="absolute top-1/3 left-10 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-violet-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 03. SELECTED CASE STUDIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              FLAGSHIP PROJECTS
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md">
            Custom engineered case studies demonstrating full-stack architecture, WebGL spatial interactions, and sub-millisecond data rendering.
          </p>
        </div>

        {/* Varied Project Layouts */}
        <div className="space-y-24">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Showcase Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:col-start-6 lg:order-2"
                  }`}
                >
                  <div
                    onClick={() => openProjectModal(project)}
                    onMouseEnter={playHoverSound}
                    data-cursor="EXPLORE ↗"
                    className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-violet-500/60 transition-all duration-500 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  >
                    {/* Corner Crosshairs */}
                    <div className="absolute inset-0 tech-corner-frame pointer-events-none z-20" />

                    {/* Image Container with Zoom & Tint */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <span>{project.category}</span>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400 font-mono text-[10px]">
                        RELEASE // {project.year}
                      </div>

                      {/* Interactive View Prompt */}
                      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/90 text-white font-heading text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span>OPEN CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    isEven ? "lg:order-2" : "lg:col-start-1 lg:col-span-5 lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm">
                      <span className="text-violet-400 font-bold">{project.number}</span>
                      <span>// 04</span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-heading text-sm text-zinc-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Impact Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="font-mono font-bold text-sm text-white">
                          {m.value}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/5 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => openProjectModal(project)}
                      onMouseEnter={playHoverSound}
                      className="btn-primary-neon text-xs py-2.5 px-5"
                    >
                      <span>VIEW DEEP DIVE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                      className="p-2.5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Full Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-2xl overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#090a12] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-violet-400 font-bold">
                  CASE STUDY // {activeProject.number}
                </span>
                <span className="text-zinc-600">|</span>
                <span className="font-heading text-xs uppercase tracking-wider text-zinc-300">
                  {activeProject.title}
                </span>
              </div>

              <button
                onClick={closeProjectModal}
                onMouseEnter={playHoverSound}
                className="p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* Full Banner Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] w-full">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                      {activeProject.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {activeProject.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-neon text-xs py-2 px-4 flex items-center gap-2"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-glass text-xs py-2 px-4 flex items-center gap-2"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Extended Overview & Challenge */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-heading font-semibold text-lg text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-violet-400" />
                    <span>SYSTEM OVERVIEW & DESIGN RATIONALE</span>
                  </h4>
                  <p className="font-sans text-zinc-300 text-sm leading-relaxed">
                    {activeProject.overview}
                  </p>

                  <h4 className="font-heading font-semibold text-lg text-white pt-4 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {activeProject.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Side Metrics & Tech Stack */}
                <div className="space-y-6 glass-panel p-6 rounded-2xl border border-white/10">
                  <div>
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-3">
                      PERFORMANCE AUDIT
                    </span>
                    <div className="space-y-3 font-mono text-xs">
                      {activeProject.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between py-1.5 border-b border-white/5">
                          <span className="text-zinc-400">{m.label}</span>
                          <span className="text-white font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-3">
                      CORE TECHNOLOGIES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-white/[0.04] text-zinc-200 border border-white/10 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
