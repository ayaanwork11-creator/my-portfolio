import { useState, useEffect } from "react";
import { ArrowUpRight, Copy, Check, Send, FileText, Terminal, Clock, ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from "./BrandIcons";
import confetti from "canvas-confetti";
import { personalData } from "../data/portfolioData";
import { playHoverSound, playClickSound, playSuccessSound } from "../utils/soundEffects";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [utcTime, setUtcTime] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Live dual clocks
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setUtcTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    playClickSound();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessSound();

      // Trigger celebratory cyber confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#8b5cf6", "#06b6d4", "#c084fc", "#ffffff"],
      });
    }, 1000);
  };

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GITHUB", url: personalData.github, icon: <GithubIcon className="w-4 h-4" /> },
    { name: "LINKEDIN", url: personalData.linkedin, icon: <LinkedinIcon className="w-4 h-4" /> },
    { name: "TWITTER / X", url: personalData.twitter, icon: <TwitterIcon className="w-4 h-4" /> },
    { name: "DRIBBBLE", url: personalData.dribbble, icon: <DribbbleIcon className="w-4 h-4" /> },
    { name: "READ.CV", url: personalData.readcv, icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <section
      id="contact"
      className="relative pt-28 pb-12 px-6 md:px-12 bg-[#06070a] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ambient-radial-glow pointer-events-none rounded-full blur-[160px] opacity-60" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-violet-400 font-mono text-xs tracking-widest uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>// 07. TRANSMISSION & INQUIRY</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
            LET'S BUILD SOMETHING <br />
            <span className="gradient-text-electric">UNFORGETTABLE.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Have a project requiring high-impact creative engineering, WebGL motion, or a frontend architecture overhaul? Let's connect.
          </p>
        </div>

        {/* Dual Column: Left Email & Socials + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Email & Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Copy Email Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4 tech-corner-frame">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                DIRECT INBOX
              </span>

              <div className="flex items-center justify-between gap-3 bg-black/40 p-4 rounded-xl border border-white/10">
                <span className="font-mono text-sm sm:text-base text-white truncate">
                  {personalData.email}
                </span>

                <button
                  onClick={copyEmail}
                  onMouseEnter={playHoverSound}
                  title="Copy email to clipboard"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600/30 text-violet-300 hover:bg-violet-600/50 border border-violet-500/40 font-mono text-xs transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <p className="font-sans text-xs text-zinc-400">
                Typical response window: &lt; 24 hours. Open for selective contracts & high-impact leadership roles.
              </p>
            </div>

            {/* Social Link Badges */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                DIGITAL FOOTPRINT
              </span>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:border-violet-400/50 hover:bg-white/[0.06] text-zinc-300 hover:text-white font-mono text-xs transition-all cursor-pointer"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Live Dual Clocks */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LOCAL TIME</span>
                </div>
                <div className="text-white text-base font-bold">{localTime || "--:--:--"}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  <span>UTC TIME</span>
                </div>
                <div className="text-white text-base font-bold">{utcTime || "--:--:--"}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl tech-corner-frame">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-sans text-sm text-zinc-300 max-w-sm mx-auto">
                  Thank you, {formState.name}. Your inquiry has been routed directly to my personal terminal. I will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", projectType: "Full-Stack Web App", message: "" });
                  }}
                  className="btn-secondary-glass text-xs py-2 px-5 mt-4"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                    INQUIRY DISPATCH
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">ENCRYPTED // TLS 1.3</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                    PROJECT CATEGORY
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                  >
                    <option value="Full-Stack Web App" className="bg-[#090a12]">
                      Full-Stack Web Application (React / Next.js)
                    </option>
                    <option value="3D WebGL / Canvas Experience" className="bg-[#090a12]">
                      3D WebGL / Canvas Interactive Experience
                    </option>
                    <option value="Design System & Architecture" className="bg-[#090a12]">
                      Design System & Performance Architecture
                    </option>
                    <option value="Advisory or Technical Leadership" className="bg-[#090a12]">
                      Advisory or Technical Leadership
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                    MESSAGE & BRIEF *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your vision, timeline, and goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={playHoverSound}
                  className="w-full btn-primary-neon py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>ENCRYPTING & DISPATCHING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Polished Editorial Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personalData.name}. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span>DESIGNED & ENGINEERED WITH REACT 19 + THREE.JS</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-violet-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
