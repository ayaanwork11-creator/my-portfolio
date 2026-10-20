/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this file to customize all text, projects, skills, and links across the site.
 * Replace placeholders like [YOUR NAME] with your personal details whenever you want!
 */

export const personalData = {
  name: "ALEXANDER CHEN", // Easily customizable to your name
  tagline: "Creative Developer & Digital Architect",
  headline: "CRAFTING HIGH-FREQUENCY DIGITAL EXPERIENCES AT THE INTERSECTION OF CODE, MOTION & ARCHITECTURE.",
  bio: "I build award-winning digital experiences, GPU-accelerated WebGL environments, and scalable frontend architectures. Driven by visual polish, technical rigor, and 60fps motion choreography.",
  status: "AVAILABLE FOR SELECTIVE ROLES & HIGH-IMPACT CLIENTS",
  location: "SAN FRANCISCO, CA // 37.7749° N, 122.4194° W",
  email: "alexander@chen.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  dribbble: "https://dribbble.com",
  readcv: "https://read.cv",
};

export const statsData = [
  { label: "Years of Craft", value: "05+", detail: "Design engineering & WebGL" },
  { label: "Production Ships", value: "30+", detail: "Global web platforms" },
  { label: "Performance Standard", value: "99.8%", detail: "Lighthouse audit score" },
  { label: "Awwwards & Honors", value: "04x", detail: "Site of the Day / Nominee" },
];

export const aboutData = {
  sectionTitle: "PHILOSOPHY & DOCTRINE",
  statement: "I treat the browser not merely as a document viewer, but as a real-time GPU-accelerated canvas for human expression and high-frequency interaction.",
  paragraphs: [
    "Over the past five years, I have specialized in the thin boundary where creative visual direction meets deep frontend systems architecture. I reject both bloated, generic templates and fragile, over-decorated experiments that degrade usability.",
    "Every interface I engineer balances hyper-responsive 60fps animations with bulletproof TypeScript patterns, sub-second initial loads, and accessible interaction models."
  ],
  pillars: [
    {
      index: "01",
      title: "CREATIVE ENGINEERING & WEBGL",
      description: "Harnessing Three.js, GLSL custom fragment shaders, and the Canvas API to compose tactile, interactive worlds that respond to physical intuition."
    },
    {
      index: "02",
      title: "SCALABLE FRONTEND ARCHITECTURE",
      description: "Architecting resilient, component-driven design systems in React, Next.js, and TypeScript built to withstand massive enterprise scale and rapid iteration."
    },
    {
      index: "03",
      title: "PERFORMANCE AS A DESIGN PILLAR",
      description: "Relentless optimization of GPU paint cycles, memory footprint, layout shifts, and tree-shaken bundles to deliver buttery 120Hz smoothness on every device."
    }
  ]
};

export const skillsCategories = [
  { id: "all", label: "ALL DISCIPLINES" },
  { id: "frontend", label: "FRONTEND ARCHITECTURE" },
  { id: "creative", label: "CREATIVE & 3D" },
  { id: "backend", label: "BACKEND & CLOUD" },
  { id: "systems", label: "SYSTEMS & TOOLING" },
];

export const skillsData = [
  // Frontend
  { name: "React 19 & Next.js", category: "frontend", level: "Core Architecture", tags: ["SSR", "RSC", "Suspense", "Hooks"] },
  { name: "TypeScript", category: "frontend", level: "Type Systems", tags: ["Generics", "Strict Mode", "Utility Types"] },
  { name: "Tailwind CSS & CSS Grid", category: "frontend", level: "Design Tokens", tags: ["Subgrid", "Flexbox", "Custom Variables"] },
  { name: "Zustand & Redux Toolkit", category: "frontend", level: "State Machines", tags: ["Predictable State", "Selectors", "Persist"] },
  { name: "HTML5 Semantic & a11y", category: "frontend", level: "Accessibility", tags: ["ARIA", "Screen Readers", "WCAG 2.1"] },
  
  // Creative & 3D
  { name: "Three.js & WebGL", category: "creative", level: "3D Environments", tags: ["Geometries", "Materials", "Post-processing"] },
  { name: "GLSL Shaders", category: "creative", level: "Fragment & Vertex", tags: ["Noise", "SDF", "Procedural Texture"] },
  { name: "GSAP & ScrollTrigger", category: "creative", level: "Motion Choreography", tags: ["Timelines", "Flip", "SplitText"] },
  { name: "HTML5 Canvas 2D", category: "creative", level: "Generative Art", tags: ["Particle Physics", "Path2D", "Vectors"] },
  { name: "Web Audio API", category: "creative", level: "Spatial Synthesis", tags: ["Oscillators", "Gain Nodes", "Dynamic SFX"] },

  // Backend & Cloud
  { name: "Node.js & Express", category: "backend", level: "API Services", tags: ["Microservices", "REST", "WebSockets"] },
  { name: "Python & FastAPI", category: "backend", level: "AI & ML Tooling", tags: ["AsyncIO", "Pydantic", "Inference APIs"] },
  { name: "PostgreSQL & Prisma", category: "backend", level: "Relational DB", tags: ["Migrations", "Indexing", "ACID"] },
  { name: "Redis", category: "backend", level: "In-Memory Cache", tags: ["Pub/Sub", "Rate Limiting", "KV Cache"] },
  { name: "Docker & Containers", category: "backend", level: "DevOps", tags: ["Compose", "Multi-stage", "Isolation"] },

  // Systems & Tooling
  { name: "Vite & Rollup", category: "systems", level: "Build Systems", tags: ["HMR", "Tree Shaking", "Code Splitting"] },
  { name: "Git & GitHub Actions", category: "systems", level: "Version Control", tags: ["CI/CD Pipelines", "Branching", "Hooks"] },
  { name: "Figma to Code", category: "systems", level: "Design Systems", tags: ["Auto Layout", "Tokens", "Prototypes"] },
  { name: "Lighthouse & Profiling", category: "systems", level: "Performance Audits", tags: ["Chrome DevTools", "FPS", "Memory Leaks"] },
];

export const marqueeTech = [
  "REACT 19", "THREE.JS", "TYPESCRIPT", "GLSL SHADERS", "GSAP", "NEXT.JS", 
  "WEBGL 2.0", "TAILWIND CSS", "NODE.JS", "PYTHON", "POSTGRESQL", "WEB AUDIO API", 
  "LENIS", "DOCKER", "FIGMA", "ZUSTAND"
];

export const projectsData = [
  {
    id: "aura-ai",
    number: "01",
    title: "AURA AI STUDIO",
    subtitle: "Autonomous Neural Interface & Multimodal AI Studio",
    category: "AI INFRASTRUCTURE // DESIGN SYSTEM",
    year: "2025",
    image: "/projects/aura.jpg",
    accentColor: "#8b5cf6",
    summary: "A next-generation web application designed for real-time model telemetry, latent space exploration, and interactive neural network topology visualization.",
    metrics: [
      { label: "Inference Latency", value: "<35ms" },
      { label: "Active Nodes", value: "12,000+" },
      { label: "GPU Utilization", value: "98.2%" }
    ],
    stack: ["React 19", "Three.js", "WebGL", "TypeScript", "Tailwind CSS", "FastAPI"],
    overview: "AURA AI was engineered as an enterprise-grade control room for distributed neural models. Traditional AI tooling suffers from static, table-heavy dashboards that fail to convey multi-dimensional data flows. By introducing hardware-accelerated 3D node meshes and dynamic gradient waveforms, operators can inspect live tensor computations in real-time.",
    architecture: [
      "Custom WebGL shader pipeline for rendering 15,000 active neural connections at 60 FPS.",
      "Binary WebSocket stream parser buffering 40MB/s telemetry data with zero UI frame drops.",
      "Predictive anomaly detection dashboard built with custom SVG sub-pixel sparklines."
    ],
    liveUrl: "https://example.com/aura-preview",
    githubUrl: "https://github.com/example/aura-neural-studio",
    featured: true
  },
  {
    id: "kinesis-3d",
    number: "02",
    title: "KINESIS SPATIAL",
    subtitle: "WebGL Spatial Audio & Generative Sound Experience",
    category: "CREATIVE COMPUTING // WEB AUDIO",
    year: "2025",
    image: "/projects/kinesis.jpg",
    accentColor: "#06b6d4",
    summary: "An interactive browser-based 3D digital audio workstation allowing producers to position acoustic nodes in a virtual spatialized environment with binaural reverberation.",
    metrics: [
      { label: "Audio Nodes", value: "64-Ch Spatial" },
      { label: "FPS Stability", value: "60 FPS Locked" },
      { label: "Render Precision", value: "32-Bit Float" }
    ],
    stack: ["Three.js", "Web Audio API", "GLSL Shaders", "GSAP", "React", "Vite"],
    overview: "KINESIS reimagines audio production beyond conventional two-dimensional channel faders. Using the browser's Web Audio PannerNode API coupled with a reactive Three.js coordinate grid, users can drag sound emitters in 3D space, witnessing sound waves dynamically distort and propagate across physical virtual boundaries.",
    architecture: [
      "Convolution reverb algorithms simulating authentic acoustic spaces in pure JavaScript.",
      "Reactive particle field driven by Fast Fourier Transform (FFT) frequency bands.",
      "Custom gesture-based 3D orbit controls optimized for both mouse and multi-touch."
    ],
    liveUrl: "https://example.com/kinesis-preview",
    githubUrl: "https://github.com/example/kinesis-spatial-audio",
    featured: true
  },
  {
    id: "chronos-quantum",
    number: "03",
    title: "CHRONOS QUANTUM",
    subtitle: "High-Frequency Financial Visualizer & Depth Engine",
    category: "FINTECH // REAL-TIME SYSTEMS",
    year: "2024",
    image: "/projects/chronos.jpg",
    accentColor: "#a855f7",
    summary: "Sub-millisecond market depth heatmaps, liquidity flow waterfalls, and algorithmic execution analytics engineered for institutional trading desks.",
    metrics: [
      { label: "Tick Throughput", value: "250k/sec" },
      { label: "Frame Budget", value: "<16.6ms" },
      { label: "Data Pipeline", value: "Direct UDP Stream" }
    ],
    stack: ["TypeScript", "Canvas API", "WebGL 2.0", "Node.js", "Redis", "Rust/Wasm"],
    overview: "Financial dashboards frequently choke when processing hundreds of thousands of price updates per second. Chronos was architected from the ground up using WebAssembly and raw Canvas 2D/WebGL buffers, bypassing DOM reconciliation entirely to achieve instant, uncompromised fidelity.",
    architecture: [
      "Custom Ring Buffer and memory-mapped Wasm arrays for zero-allocation tick processing.",
      "Adaptive Level-of-Detail (LOD) rendering for order book heatmaps spanning 100,000 price levels.",
      "Custom dark-mode glass terminal with micro-interactions and keyboard-driven command bar."
    ],
    liveUrl: "https://example.com/chronos-preview",
    githubUrl: "https://github.com/example/chronos-quantum-terminal",
    featured: true
  },
  {
    id: "void-archive",
    number: "04",
    title: "VOID PROTOCOL",
    subtitle: "Cybernetic Digital Monument & Decentralized Archive",
    category: "EXPERIMENTAL 3D // CRYPTO-DATA",
    year: "2024",
    image: "/projects/void.jpg",
    accentColor: "#c084fc",
    summary: "An atmospheric brutalist monolith in zero gravity, exploring permanent encrypted data preservation and futuristic cybernetic archaeology.",
    metrics: [
      { label: "Polygons Rendered", value: "450k Triangles" },
      { label: "Shader Passes", value: "4 Post-FX" },
      { label: "Community Stars", value: "2.4k GitHub" }
    ],
    stack: ["Three.js", "GLSL Shaders", "GSAP ScrollTrigger", "Lenis", "React"],
    overview: "An experimental digital monolith exploring the permanence of human knowledge in an era of ephemeral feeds. Inspired by brutalist architecture and sci-fi relics, VOID features a floating geometric monolith etched with holographic encrypted glyphs that unlock as the visitor scrolls.",
    architecture: [
      "Multi-pass post-processing pipeline featuring custom chromatic aberration and bloom.",
      "Raymarching distance fields for procedural rock fissures and crystalline lattice textures.",
      "ScrollTrigger sequence orchestrating camera flight paths across six distinct archaeological phases."
    ],
    liveUrl: "https://example.com/void-preview",
    githubUrl: "https://github.com/example/void-protocol-3d",
    featured: true
  }
];

export const journeyTimeline = [
  {
    period: "2024 — PRESENT",
    role: "Senior Creative Technologist & Lead Architect",
    company: "NEO / LABS",
    location: "San Francisco, CA (Remote)",
    description: "Leading the creative engineering team in developing flagship 3D web applications, WebGL visualizers, and high-performance design systems for tier-1 tech brands.",
    highlights: [
      "Architected custom WebGL component library adopted across 14 enterprise projects.",
      "Achieved 100% 60fps compliance on all client portfolio launches.",
      "Mentored team of 8 frontend engineers in WebGL, GSAP, and advanced React patterns."
    ],
    tags: ["Three.js", "React 19", "GLSL", "TypeScript", "Performance"]
  },
  {
    period: "2022 — 2024",
    role: "Staff Frontend Engineer",
    company: "VORTEX DYNAMICS",
    location: "New York, NY",
    description: "Spearheaded frontend architecture for real-time collaborative workspace and data visualization platforms with over 250,000 active users.",
    highlights: [
      "Refactored legacy state layer to modern reactive patterns, slashing initial load by 54%.",
      "Built canvas-based high-throughput charting suite handling 100k events/sec.",
      "Created internal UI animation guidelines and GSAP motion primitives."
    ],
    tags: ["React", "TypeScript", "Canvas API", "WebSocket", "Tailwind"]
  },
  {
    period: "2020 — 2022",
    role: "Interactive Developer",
    company: "SYNAPSE STUDIO",
    location: "Austin, TX",
    description: "Designed and engineered award-winning campaign websites, promotional 3D microsites, and interactive branding experiences.",
    highlights: [
      "Won 2x Awwwards Site of the Day and FWA of the Day awards for client showcases.",
      "Pioneered smooth scroll and physics-based cursor interactions across agency deliverables."
    ],
    tags: ["Three.js", "GSAP", "JavaScript", "WebGL", "Creative Code"]
  },
  {
    period: "2019 — 2020",
    role: "Open Source Contributor & Freelance Developer",
    company: "SELF-EMPLOYED",
    location: "Global",
    description: "Authored open-source shader experiments, canvas animation libraries, and crafted custom websites for independent creative agencies and artists.",
    highlights: [
      "Published 10+ WebGL shader demos accumulating over 25,000 views on CodePen & Twitter.",
      "Maintained open-source React animation utilities with 1,500+ GitHub stars."
    ],
    tags: ["WebGL", "HTML5", "CSS3", "JavaScript", "Open Source"]
  }
];

export const testimonialsData = [
  {
    quote: "Alexander doesn't just write code; he orchestrates digital cinema in the browser. His WebGL implementations are not only gorgeous, they are impeccably optimized and maintainable.",
    author: "Elena Rostova",
    role: "VP of Engineering, Apex Digital",
    verified: true
  },
  {
    quote: "Working with Alexander was a revelation. He understood our aesthetic ambition instantly and elevated every interaction beyond what we thought was possible in a browser.",
    author: "Marcus Vance",
    role: "Creative Director, Studio Hyperion",
    verified: true
  },
  {
    quote: "The rare engineer who genuinely cares as much about sub-millisecond execution budgets as he does about 1-pixel typography kerning. An absolute powerhouse.",
    author: "Dr. Julian Croft",
    role: "Principal Architect, Neuralis Systems",
    verified: true
  }
];
