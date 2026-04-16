/**
 * HeroBackground - multi-layered architectural background for the homepage hero.
 * No image files; pure SVG + CSS. Subtle float animations create depth without distraction.
 */
export default function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft architectural lines: skyline silhouette */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[55%] opacity-[0.14]"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8A97E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8A97E" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Far buildings */}
        <g stroke="#C8A97E" strokeWidth="1">
          <rect x="40" y="280" width="90" height="220" fill="url(#bldGrad)" />
          <rect x="160" y="210" width="110" height="290" fill="url(#bldGrad)" />
          <rect x="300" y="260" width="80" height="240" fill="url(#bldGrad)" />
          <rect x="410" y="180" width="130" height="320" fill="url(#bldGrad)" />
          <rect x="570" y="230" width="100" height="270" fill="url(#bldGrad)" />
          <rect x="700" y="160" width="140" height="340" fill="url(#bldGrad)" />
          <rect x="870" y="220" width="100" height="280" fill="url(#bldGrad)" />
          <rect x="1000" y="190" width="120" height="310" fill="url(#bldGrad)" />
          <rect x="1150" y="250" width="90" height="250" fill="url(#bldGrad)" />
          <rect x="1270" y="200" width="130" height="300" fill="url(#bldGrad)" />
        </g>
        {/* Window dot rows */}
        <g fill="#C8A97E" opacity="0.55">
          {[160, 410, 700, 1000, 1270].map((x, idx) =>
            [0, 1, 2, 3, 4, 5, 6, 7].map((r) => (
              <g key={`${idx}-${r}`}>
                <rect x={x + 16} y={230 + r * 32} width="4" height="10" />
                <rect x={x + 36} y={230 + r * 32} width="4" height="10" />
                <rect x={x + 56} y={230 + r * 32} width="4" height="10" />
                <rect x={x + 76} y={230 + r * 32} width="4" height="10" />
              </g>
            ))
          )}
        </g>
      </svg>

      {/* Blueprint grid: subtle */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        preserveAspectRatio="none"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8A97E" strokeWidth="0.5" />
          </pattern>
          <mask id="gridMask">
            <rect width="1600" height="900" fill="url(#gridMask-grad)" />
          </mask>
          <radialGradient id="gridMask-grad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>

      {/* Floating architectural shape, top-right (hexagon/diamond) */}
      <div className="absolute top-16 end-8 md:end-24 hero-float">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.18]">
          <polygon points="100,12 180,60 180,140 100,188 20,140 20,60" stroke="#C8A97E" strokeWidth="1.5" fill="none" />
          <polygon points="100,36 156,70 156,130 100,164 44,130 44,70" stroke="#C8A97E" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="6" fill="#C8A97E" />
        </svg>
      </div>

      {/* Floating architectural shape, bottom-left (concentric squares) */}
      <div className="absolute bottom-20 start-8 md:start-16 hero-float hero-float-slow">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.16]">
          <rect x="10" y="10" width="120" height="120" stroke="#C8A97E" strokeWidth="1.3" fill="none" />
          <rect x="30" y="30" width="80" height="80" stroke="#C8A97E" strokeWidth="1" fill="none" />
          <rect x="50" y="50" width="40" height="40" stroke="#C8A97E" strokeWidth="0.8" fill="none" />
          <line x1="10" y1="10" x2="130" y2="130" stroke="#C8A97E" strokeWidth="0.5" />
          <line x1="130" y1="10" x2="10" y2="130" stroke="#C8A97E" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating architectural shape, middle-right small */}
      <div className="absolute top-1/3 end-1/4 hero-float hero-float-fast hidden md:block">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.22]">
          <polygon points="36,4 68,36 36,68 4,36" stroke="#C8A97E" strokeWidth="1.4" fill="none" />
          <circle cx="36" cy="36" r="4" fill="#C8A97E" />
        </svg>
      </div>

      {/* Gold glow blobs */}
      <div className="absolute -top-32 -end-32 w-[30rem] h-[30rem] rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div className="absolute bottom-0 -start-20 w-96 h-96 rounded-full bg-[var(--color-primary-light)]/30 blur-3xl" />

      {/* Overlay: darken for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/0 via-[var(--color-primary)]/10 to-[var(--color-primary)]/50" />
    </div>
  );
}
