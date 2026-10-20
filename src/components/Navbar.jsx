import { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { playHoverSound, playClickSound, setAudioMuted, getAudioMuted } from "../utils/soundEffects";
import { personalData } from "../data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(getAudioMuted());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "projects", "journey", "lab", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    setAudioMuted(nextState);
    if (!nextState) {
      setTimeout(() => playClickSound(), 50);
    }
  };

  const scrollTo = (id) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "01 // ABOUT" },
    { id: "skills", label: "02 // SKILLS" },
    { id: "projects", label: "03 // PROJECTS" },
    { id: "journey", label: "04 // JOURNEY" },
    { id: "lab", label: "05 // LAB" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 md:px-8 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-7xl mx-auto px-5 py-3 rounded-full transition-all duration-500 border ${
            isScrolled
              ? "bg-[#0a0b12]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              : "bg-[#0c0d16]/40 backdrop-blur-md border-white/5"
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#07080f] rounded-[7px] flex items-center justify-center">
                <span className="font-display font-bold text-xs tracking-tighter text-white">
                  AC
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-semibold text-xs tracking-wider text-white group-hover:text-violet-300 transition-colors">
                {personalData.name}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  onMouseEnter={playHoverSound}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white bg-violet-600/30 border border-violet-500/50 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              onMouseEnter={playHoverSound}
              title={isMuted ? "Enable ambient UI audio feedback" : "Mute audio"}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
                isMuted
                  ? "border-white/10 text-zinc-400 hover:text-white hover:border-white/20 bg-white/[0.02]"
                  : "border-violet-500/60 text-violet-400 bg-violet-500/10 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollTo("contact")}
              onMouseEnter={playHoverSound}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-heading text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-violet-600 to-indigo-600 border border-violet-400/40 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>INITIATE CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-full border border-white/10 text-zinc-300 hover:text-white bg-white/[0.02] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#060709]/95 backdrop-blur-2xl flex flex-col justify-center px-8 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
          <div className="flex items-center gap-2 pb-6 border-b border-white/10">
            <Terminal className="w-4 h-4 text-violet-400" />
            <span className="font-mono text-xs text-zinc-400 tracking-wider">SYSTEM NAVIGATION</span>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left font-display font-bold text-2xl text-zinc-300 hover:text-white hover:translate-x-2 transition-all flex items-center justify-between group cursor-pointer"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-violet-400 transition-opacity" />
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="mt-6 w-full py-4 rounded-full font-heading text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-violet-600 to-indigo-600 border border-violet-400/50 shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>LET'S BUILD SOMETHING</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
