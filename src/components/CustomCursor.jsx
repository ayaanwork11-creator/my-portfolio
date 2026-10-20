import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Detect touch device to avoid rendering cursor on mobile/touch screens
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setCursorPos({ x: targetX, y: targetY });

      // Check hovered element
      const target = e.target;
      const interactiveEl = target.closest("button, a, input, textarea, [data-magnetic], [data-cursor]");
      
      if (interactiveEl) {
        setIsPointer(true);
        const customText = interactiveEl.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      } else {
        setIsPointer(false);
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setCursorPos({ x: -100, y: -100 });
      setFollowerPos({ x: -100, y: -100 });
    };

    // Smooth lag interpolation for outer ring
    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setFollowerPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHovered ? "0px" : isPointer ? "4px" : "6px",
          height: isHovered ? "0px" : isPointer ? "4px" : "6px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 10px #8b5cf6, 0 0 20px #38bdf8",
          opacity: cursorPos.x === -100 ? 0 : 1,
        }}
      />

      {/* Fluid Trailing Glow Ring / Badge */}
      <div
        ref={followerRef}
        className={`pointer-events-none fixed z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out ${
          isHovered
            ? "bg-violet-600/90 text-white font-mono text-[11px] font-bold tracking-widest px-4 py-2 border border-violet-400/50 shadow-[0_0_25px_rgba(139,92,246,0.6)]"
            : isPointer
            ? "w-12 h-12 border border-violet-400/60 bg-violet-500/10 backdrop-blur-[2px]"
            : "w-8 h-8 border border-white/20 bg-transparent"
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          opacity: followerPos.x === -100 ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : isPointer ? 1.25 : 1})`,
        }}
      >
        {cursorText && (
          <span className="uppercase text-[10px] tracking-wider font-semibold">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
