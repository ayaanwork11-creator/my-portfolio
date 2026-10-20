import { useState, useEffect, useRef } from "react";
import { Sparkles, Sliders, RefreshCw, Zap, Layers, Terminal } from "lucide-react";
import { playHoverSound, playClickSound } from "../utils/soundEffects";

export default function CreativeLab() {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState("vortex"); // 'vortex', 'neural', 'pulse'
  const [colorTheme, setColorTheme] = useState("violet"); // 'violet', 'cyan', 'emerald'
  const [particleCount, setParticleCount] = useState(120);
  const [liveFps, setLiveFps] = useState(60);

  const colors = {
    violet: { primary: "#8b5cf6", secondary: "#c084fc", rgb: "139, 92, 246" },
    cyan: { primary: "#06b6d4", secondary: "#38bdf8", rgb: "6, 182, 212" },
    emerald: { primary: "#10b981", secondary: "#34d399", rgb: "16, 185, 129" },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle state
    let particles = [];
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1.2,
          baseRadius: Math.random() * 2 + 1.2,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Mouse coordinates
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleClick = () => {
      playClickSound();
      // Impulse wave
      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = 180 / dist;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    // Animation & FPS tracking
    let animId;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    const render = (time) => {
      animId = requestAnimationFrame(render);

      // Calculate FPS
      frameCount++;
      if (time - fpsTimer >= 1000) {
        setLiveFps(Math.round((frameCount * 1000) / (time - fpsTimer)));
        frameCount = 0;
        fpsTimer = time;
      }

      // Semi-transparent fade for motion trails
      ctx.fillStyle = "rgba(6, 7, 10, 0.25)";
      ctx.fillRect(0, 0, width, height);

      const theme = colors[colorTheme];

      // Update & draw particles
      particles.forEach((p, idx) => {
        if (mode === "vortex" && mouse.active) {
          // Gravitational spiral around cursor
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(dist * 0.0006, 0.08);
          
          // Tangential spiral force
          p.vx += (dx / dist) * force - (dy / dist) * 0.03;
          p.vy += (dy / dist) * force + (dx / dist) * 0.03;
          p.vx *= 0.96;
          p.vy *= 0.96;
        } else if (mode === "pulse") {
          // Sinusoidal wave
          p.angle += 0.03;
          p.y += Math.sin(p.angle) * 0.8;
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              p.vx += (dx / dist) * 1.5;
              p.vy += (dy / dist) * 1.5;
            }
          }
          p.vx *= 0.95;
          p.vy *= 0.95;
        } else {
          // Neural mesh: Gentle floating
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              p.vx += (dx / dist) * 0.8;
              p.vy += (dy / dist) * 0.8;
            }
          }
          p.vx *= 0.98;
          p.vy *= 0.98;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Screen boundary bounce
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme.secondary;
        ctx.shadowBlur = 8;
        ctx.shadowColor = theme.primary;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Neural Mesh connection lines
        if (mode === "neural" || mode === "vortex") {
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            const maxDist = mode === "neural" ? 95 : 65;
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.35;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${theme.rgb}, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      });
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [mode, colorTheme, particleCount]);

  return (
    <section
      id="lab"
      className="relative py-28 px-6 md:px-12 bg-[#050608] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-pink-400 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 04. EXPERIMENTAL PLAYGROUND</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              REACTIVE LAB // PARTICLES
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md">
            Interactive Animmaster-inspired canvas physics simulator. Move your cursor or click inside the viewport to disrupt the vector field.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 tech-corner-frame">
          {/* Top Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-black/60 backdrop-blur-md">
            {/* Simulation Mode Selector */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-400 hidden sm:inline">ALGORITHM:</span>
              {[
                { id: "vortex", label: "QUANTUM VORTEX" },
                { id: "neural", label: "NEURAL MESH" },
                { id: "pulse", label: "CYBER PULSE" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    playClickSound();
                    setMode(m.id);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`px-3 py-1.5 rounded-full font-mono text-[11px] tracking-wider transition-all duration-300 cursor-pointer ${
                    mode === m.id
                      ? "bg-violet-600 text-white border border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Color Palette Selector & Telemetry */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[
                  { id: "violet", color: "#8b5cf6", name: "Violet" },
                  { id: "cyan", color: "#06b6d4", name: "Cyan" },
                  { id: "emerald", color: "#10b981", name: "Emerald" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      playClickSound();
                      setColorTheme(t.id);
                    }}
                    onMouseEnter={playHoverSound}
                    title={t.name}
                    className={`w-6 h-6 rounded-full border transition-all duration-200 cursor-pointer ${
                      colorTheme === t.id ? "scale-110 border-white" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: t.color }}
                  />
                ))}
              </div>

              {/* Live FPS */}
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{liveFps} FPS</span>
              </div>
            </div>
          </div>

          {/* Interactive Canvas Viewport */}
          <div className="h-[450px] sm:h-[520px] w-full relative bg-[#06070a] cursor-crosshair">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Interaction Prompt Overlay */}
            <div className="absolute bottom-4 left-6 pointer-events-none flex items-center gap-2 font-mono text-[11px] text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>CLICK TO DISPERSE // MOVE CURSOR TO ATTRACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
