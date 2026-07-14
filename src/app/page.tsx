import Link from "next/link";

// ── SVG Illustrations ──────────────────────────────────────────────────────

function CrystalD() {
  return (
    <svg
      viewBox="0 0 260 340"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 40px rgba(129,140,248,0.5))" }}
    >
      <defs>
        <linearGradient id="dg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="20%" stopColor="#818cf8" />
          <stop offset="45%" stopColor="#67e8f9" />
          <stop offset="70%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f9a8d4" />
        </linearGradient>
        <linearGradient id="dg2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#ede9fe" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.5" />
        </linearGradient>
        <filter id="dblur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="b" />
          <feFlood floodColor="#818cf8" floodOpacity="0.45" result="c" />
          <feComposite in="c" in2="b" operator="in" result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dshine" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="b" />
          <feFlood floodColor="white" floodOpacity="0.5" result="c" />
          <feComposite in="c" in2="b" operator="in" result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow halo */}
      <path
        d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z"
        fill="#818cf8" opacity="0.18" filter="url(#dblur)"
      />

      {/* Main D body */}
      <path
        d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z"
        fill="url(#dg1)" opacity="0.78" filter="url(#dshine)"
      />

      {/* Glass shimmer overlay */}
      <path
        d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z"
        fill="url(#dg2)" opacity="0.38"
      />

      {/* Inner hollow */}
      <path
        d="M 65 62 L 65 278 Q 182 278 182 170 Q 182 62 65 62 Z"
        fill="white" opacity="0.07"
      />
      <path
        d="M 65 62 L 65 278 Q 182 278 182 170 Q 182 62 65 62 Z"
        fill="none" stroke="white" strokeWidth="1" opacity="0.28"
      />

      {/* Left edge highlight bar */}
      <rect x="20" y="18" width="7" height="304" rx="3.5" fill="white" opacity="0.42" />

      {/* Top edge shine */}
      <path
        d="M 22 18 Q 108 12 168 36"
        fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.38"
      />

      {/* Outer border */}
      <path
        d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z"
        fill="none" stroke="white" strokeWidth="1.5" opacity="0.45"
      />

      {/* Diagonal facet lines */}
      <line x1="22" y1="90" x2="155" y2="42" stroke="white" strokeWidth="0.8" opacity="0.22" />
      <line x1="22" y1="250" x2="155" y2="298" stroke="white" strokeWidth="0.8" opacity="0.22" />

      {/* Right curve sheen */}
      <path
        d="M 205 108 Q 238 138 240 170 Q 238 202 205 232"
        fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.28"
      />

      {/* Inner sparkle top */}
      <circle cx="90" cy="75" r="3" fill="white" opacity="0.5" />
      <circle cx="130" cy="90" r="2" fill="white" opacity="0.35" />
    </svg>
  );
}

function RobotSVG() {
  return (
    <svg viewBox="0 0 80 108" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <line x1="40" y1="3" x2="40" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <circle cx="40" cy="2" r="3" fill="white" opacity="0.9" />
      <rect x="20" y="15" width="40" height="28" rx="8" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.5" strokeOpacity="0.75" />
      <circle cx="31" cy="29" r="5.5" fill="white" fillOpacity="0.92" />
      <circle cx="49" cy="29" r="5.5" fill="white" fillOpacity="0.92" />
      <circle cx="31" cy="29" r="2.8" fill="#4f46e5" />
      <circle cx="49" cy="29" r="2.8" fill="#4f46e5" />
      <circle cx="32.2" cy="27.8" r="1.2" fill="white" />
      <circle cx="50.2" cy="27.8" r="1.2" fill="white" />
      <rect x="34" y="43" width="12" height="7" rx="2.5" fill="white" fillOpacity="0.45" />
      <rect x="14" y="50" width="52" height="36" rx="8" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="40" cy="68" r="7" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.65" />
      <circle cx="40" cy="68" r="2.5" fill="white" fillOpacity="0.85" />
      <rect x="26" y="56" width="8" height="3.5" rx="1.75" fill="white" fillOpacity="0.5" />
      <rect x="46" y="56" width="8" height="3.5" rx="1.75" fill="white" fillOpacity="0.5" />
      <rect x="3" y="52" width="11" height="24" rx="5.5" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <rect x="66" y="52" width="11" height="24" rx="5.5" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <rect x="20" y="86" width="16" height="20" rx="6" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.65" />
      <rect x="44" y="86" width="16" height="20" rx="6" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.65" />
    </svg>
  );
}

function GlobeSVG() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="50" cy="50" r="44" fill="white" fillOpacity="0.14" stroke="white" strokeWidth="1.5" strokeOpacity="0.82" />
      <ellipse cx="50" cy="50" rx="44" ry="14" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="50" cy="50" rx="22" ry="44" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="50" cy="50" rx="40" ry="44" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.32" />
      <ellipse cx="50" cy="32" rx="36" ry="8" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.38" />
      <ellipse cx="50" cy="68" rx="36" ry="8" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.38" />
      <circle cx="50" cy="37" r="4.5" fill="white" fillOpacity="0.95" />
      <circle cx="50" cy="37" r="8" fill="none" stroke="white" strokeWidth="1.2" strokeOpacity="0.55" />
      <path d="M 20 25 Q 28 16 41 13" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.42" />
    </svg>
  );
}

function AstronautSVG() {
  return (
    <svg viewBox="0 0 80 112" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {([[7, 8], [70, 14], [75, 52], [4, 72], [73, 90]] as [number, number][]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill="white" fillOpacity="0.7" />
      ))}
      <circle cx="40" cy="27" r="23" fill="white" fillOpacity="0.17" stroke="white" strokeWidth="1.5" strokeOpacity="0.82" />
      <ellipse cx="40" cy="27" rx="14" ry="12" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M 31 21 Q 35 17 40 18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.58" />
      <rect x="33" y="48" width="14" height="8" rx="3" fill="white" fillOpacity="0.32" />
      <path
        d="M 15 57 Q 11 68 13 80 L 67 80 Q 69 68 65 57 Q 55 52 40 52 Q 25 52 15 57 Z"
        fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.72"
      />
      <rect x="32" y="59" width="16" height="10" rx="3" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M 15 59 Q 5 67 7 77 Q 11 83 15 79" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.68" strokeLinejoin="round" />
      <path d="M 65 59 Q 75 67 73 77 Q 69 83 65 79" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.68" strokeLinejoin="round" />
      <rect x="17" y="80" width="19" height="26" rx="7" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.68" />
      <rect x="44" y="80" width="19" height="26" rx="7" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="1.5" strokeOpacity="0.68" />
    </svg>
  );
}

function TrackIllustration({ num }: { num: string }) {
  if (num === "01") return <RobotSVG />;
  if (num === "02") return <GlobeSVG />;
  return <AstronautSVG />;
}

function CitySceneSVG() {
  return (
    <svg
      viewBox="0 0 480 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMaxYMax meet"
    >
      <defs>
        <linearGradient id="csb1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="csb2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="csb3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="cs-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.72" />
        </linearGradient>
        <radialGradient id="cs-atmo" cx="0.62" cy="0.32" r="0.52">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cs-gnd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ede9fe" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Atmospheric glow in sky */}
      <rect width="480" height="600" fill="url(#cs-atmo)" />

      {/* === Back layer (very faded, distance) === */}
      <rect x="5"   y="345" width="36" height="215" fill="url(#csb2)" opacity="0.09" rx="2" />
      <rect x="48"  y="308" width="42" height="252" fill="url(#csb1)" opacity="0.10" rx="2" />
      <rect x="98"  y="272" width="38" height="288" fill="url(#csb3)" opacity="0.09" rx="2" />
      <rect x="144" y="242" width="46" height="318" fill="url(#csb2)" opacity="0.10" rx="2" />
      <rect x="198" y="212" width="50" height="348" fill="url(#csb1)" opacity="0.09" rx="2" />
      <rect x="256" y="185" width="56" height="375" fill="url(#csb3)" opacity="0.10" rx="2" />
      <rect x="320" y="158" width="62" height="402" fill="url(#csb2)" opacity="0.10" rx="2" />
      <rect x="390" y="132" width="68" height="428" fill="url(#csb1)" opacity="0.09" rx="2" />
      <rect x="456" y="108" width="72" height="452" fill="url(#csb3)" opacity="0.09" rx="2" />

      {/* === Mid layer === */}
      <rect x="22"  y="318" width="40" height="242" fill="url(#csb1)" opacity="0.16" rx="3" />
      <rect x="70"  y="282" width="46" height="278" fill="url(#csb2)" opacity="0.17" rx="3" />
      <rect x="124" y="248" width="44" height="312" fill="url(#csb3)" opacity="0.16" rx="3" />
      <rect x="176" y="218" width="52" height="342" fill="url(#csb1)" opacity="0.17" rx="3" />
      <rect x="236" y="188" width="58" height="372" fill="url(#csb2)" opacity="0.18" rx="3" />
      <rect x="302" y="158" width="64" height="402" fill="url(#csb3)" opacity="0.19" rx="3" />
      <rect x="374" y="128" width="70" height="432" fill="url(#csb1)" opacity="0.19" rx="3" />
      <rect x="451" y="100" width="76" height="460" fill="url(#csb2)" opacity="0.18" rx="3" />

      {/* === Front layer (most visible, main buildings) === */}
      <rect x="162" y="238" width="50" height="322" fill="url(#csb1)" opacity="0.32" rx="4" />
      <rect x="222" y="205" width="58" height="355" fill="url(#csb2)" opacity="0.34" rx="4" />
      <rect x="288" y="172" width="65" height="388" fill="url(#csb3)" opacity="0.36" rx="4" />
      <rect x="361" y="142" width="72" height="418" fill="url(#csb1)" opacity="0.38" rx="4" />
      <rect x="440" y="112" width="80" height="448" fill="url(#csb2)" opacity="0.35" rx="4" />

      {/* Penthouse / stepped tops on the tallest buildings */}
      <rect x="296" y="148" width="49" height="24" fill="url(#csb3)" opacity="0.33" rx="3" />
      <rect x="369" y="118" width="56" height="24" fill="url(#csb1)" opacity="0.33" rx="3" />
      <rect x="448" y="88"  width="64" height="24" fill="url(#csb2)" opacity="0.31" rx="3" />

      {/* Antennas */}
      <rect x="319.5" y="100" width="2"   height="48" fill="#818cf8" opacity="0.26" rx="1" />
      <circle cx="320.5" cy="100" r="3.5" fill="#a5b4fc" opacity="0.36" />
      <rect x="397"    y="72"  width="2.2" height="46" fill="#6366f1" opacity="0.23" rx="1.1" />
      <circle cx="398.1" cy="72" r="3"   fill="#818cf8" opacity="0.32" />
      <rect x="479.5"  y="44"  width="2.5" height="44" fill="#818cf8" opacity="0.21" rx="1.25" />
      <circle cx="480.75" cy="44" r="4"  fill="#c4b5fd" opacity="0.34" />

      {/* Windows — building at x=288 */}
      <rect x="296" y="192" width="5" height="7" fill="#fbbf24" opacity="0.55" rx="1" />
      <rect x="306" y="192" width="5" height="7" fill="#fbbf24" opacity="0.35" rx="1" />
      <rect x="316" y="192" width="5" height="7" fill="#fbbf24" opacity="0.50" rx="1" />
      <rect x="296" y="209" width="5" height="7" fill="#fbbf24" opacity="0.28" rx="1" />
      <rect x="306" y="209" width="5" height="7" fill="#fbbf24" opacity="0.55" rx="1" />
      <rect x="316" y="209" width="5" height="7" fill="#fbbf24" opacity="0.40" rx="1" />
      <rect x="296" y="226" width="5" height="7" fill="#fbbf24" opacity="0.45" rx="1" />
      <rect x="316" y="226" width="5" height="7" fill="#fbbf24" opacity="0.32" rx="1" />
      <rect x="306" y="226" width="5" height="7" fill="#fbbf24" opacity="0.22" rx="1" />

      {/* Windows — building at x=361 */}
      <rect x="370" y="162" width="5" height="7" fill="#fbbf24" opacity="0.52" rx="1" />
      <rect x="381" y="162" width="5" height="7" fill="#fbbf24" opacity="0.33" rx="1" />
      <rect x="392" y="162" width="5" height="7" fill="#fbbf24" opacity="0.47" rx="1" />
      <rect x="370" y="180" width="5" height="7" fill="#fbbf24" opacity="0.28" rx="1" />
      <rect x="381" y="180" width="5" height="7" fill="#fbbf24" opacity="0.52" rx="1" />
      <rect x="392" y="180" width="5" height="7" fill="#fbbf24" opacity="0.38" rx="1" />
      <rect x="370" y="198" width="5" height="7" fill="#fbbf24" opacity="0.44" rx="1" />
      <rect x="392" y="198" width="5" height="7" fill="#fbbf24" opacity="0.30" rx="1" />

      {/* Windows — building at x=440 */}
      <rect x="450" y="132" width="5" height="7" fill="#fbbf24" opacity="0.50" rx="1" />
      <rect x="461" y="132" width="5" height="7" fill="#fbbf24" opacity="0.32" rx="1" />
      <rect x="472" y="132" width="5" height="7" fill="#fbbf24" opacity="0.55" rx="1" />
      <rect x="450" y="150" width="5" height="7" fill="#fbbf24" opacity="0.26" rx="1" />
      <rect x="461" y="150" width="5" height="7" fill="#fbbf24" opacity="0.48" rx="1" />
      <rect x="472" y="150" width="5" height="7" fill="#fbbf24" opacity="0.36" rx="1" />
      <rect x="450" y="168" width="5" height="7" fill="#fbbf24" opacity="0.42" rx="1" />
      <rect x="472" y="168" width="5" height="7" fill="#fbbf24" opacity="0.28" rx="1" />

      {/* Ground plane */}
      <rect x="0" y="555" width="480" height="45" fill="url(#cs-gnd)" />
      <line x1="0" y1="560" x2="480" y2="560" stroke="#c7d2fe" strokeWidth="0.8" opacity="0.35" />

      {/* Bottom haze (fade into page background) */}
      <rect x="0" y="478" width="480" height="122" fill="url(#cs-haze)" />

      {/* Stars / sparkle particles in sky */}
      <circle cx="42"  cy="82"  r="1.5" fill="#818cf8" opacity="0.45" />
      <circle cx="118" cy="52"  r="1.2" fill="#a5b4fc" opacity="0.50" />
      <circle cx="196" cy="68"  r="1.8" fill="#818cf8" opacity="0.38" />
      <circle cx="275" cy="38"  r="1.2" fill="#c4b5fd" opacity="0.52" />
      <circle cx="422" cy="56"  r="1.5" fill="#818cf8" opacity="0.44" />
      <circle cx="12"  cy="162" r="1.0" fill="#a5b4fc" opacity="0.38" />
      <circle cx="88"  cy="142" r="1.5" fill="#818cf8" opacity="0.32" />
      <circle cx="168" cy="118" r="1.2" fill="#a5b4fc" opacity="0.36" />
      <circle cx="340" cy="78"  r="1.0" fill="#c4b5fd" opacity="0.42" />

      {/* Floating translucent orbs in sky */}
      <circle cx="72"  cy="188" r="20" fill="#c4b5fd" opacity="0.12" />
      <circle cx="72"  cy="188" r="13" fill="#c4b5fd" opacity="0.08" />
      <circle cx="162" cy="112" r="24" fill="#a5b4fc" opacity="0.10" />
      <circle cx="162" cy="112" r="15" fill="#a5b4fc" opacity="0.07" />
      <circle cx="238" cy="152" r="16" fill="#ddd6fe" opacity="0.13" />
      <circle cx="28"  cy="252" r="14" fill="#c7d2fe" opacity="0.11" />

      {/* Ring orbs (outlines for depth) */}
      <circle cx="132" cy="198" r="28" fill="none" stroke="#a5b4fc" strokeWidth="0.8" opacity="0.18" />
      <circle cx="132" cy="198" r="18" fill="none" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.12" />
      <circle cx="52"  cy="118" r="20" fill="none" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.16" />
      <circle cx="218" cy="88"  r="14" fill="none" stroke="#818cf8" strokeWidth="0.6" opacity="0.14" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { icon: "⚡", value: "48 小时", label: "Vibe Coding Festival" },
  { icon: "◈", value: "3 大赛道", label: "Hardware / Commerce\nDeep Space" },
  { icon: "◎", value: "1000+", label: "青年创造者" },
  { icon: "✦", value: "顶尖导师", label: "行业专家" },
  { icon: "◆", value: "创新体验", label: "超越传统黑客松" },
];

const tracks = [
  {
    num: "01",
    bg: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
    title: "Hardware",
    titleCn: "硬件创新",
    desc: "探索硬件 × Agent 的无限可能",
    tags: ["IoT", "AI Agent", "Hardware/Device", "wearables"],
  },
  {
    num: "02",
    bg: "linear-gradient(135deg, #1e40af 0%, #4f46e5 100%)",
    title: "Global Commerce",
    titleCn: "全球商业",
    desc: "用 Agent 重塑全球商业体验",
    tags: ["E-commerce", "Fintech", "AI Retail"],
  },
  {
    num: "03",
    bg: "linear-gradient(135deg, #c2410c 0%, #ea580c 100%)",
    title: "Deep Space",
    titleCn: "深空探索",
    desc: "探索宇宙边界，连接人类未来",
    tags: ["Space Tech", "Exploration", "Science"],
  },
];

const experiences = [
  { emoji: "⚡", title: "Hackathon Challenge", desc: "48 小时极限创造\n从 0 到 1 打造你的\nAgent 项目" },
  { emoji: "🔮", title: "D-Lab Technology Experience", desc: "前沿科技地体验\n与行业顶尖技术\n零距离接触" },
  { emoji: "🎉", title: "Dream Disco Creator Night", desc: "创意派对之夜\n音乐 × 创意 ×\n灵感碰撞" },
  { emoji: "🏕️", title: "D-Camp Experience", desc: "沉浸式营地体验\n学习 · 追梦 ·\n共同成长" },
  { emoji: "🏆", title: "Final Demo Day", desc: "巅峰展示创意\n向世界展示\n你的创造力" },
];

const schedule = [
  {
    day: "Day 1", date: "08.27", accent: "#6366f1",
    items: [
      { time: "09:00 - 10:00", title: "签到 & 开幕式" },
      { time: "10:00 - 12:00", title: "灵感分享 & 技术体验" },
      { time: "13:00 - 24:00", title: "团队组建 & 黑客松开始" },
    ],
  },
  {
    day: "Day 2", date: "08.28", accent: "#f97316",
    items: [
      { time: "00:00 - 18:00", title: "项目开发 & 导师辅导" },
      { time: "19:00 - 22:00", title: "Dream Disco 派对之夜" },
      { time: "22:00 - 24:00", title: "冲刺阶段" },
    ],
  },
  {
    day: "Day 3", date: "08.29", accent: "#6366f1",
    items: [
      { time: "00:00 - 12:00", title: "最后冲刺" },
      { time: "13:00 - 17:00", title: "Final Demo Day" },
      { time: "17:00 - 18:00", title: "颁奖典礼 & 闭幕" },
    ],
  },
];

const whyChoose = [
  "真实场景驱动：聚焦 Agent 在真实世界的应用",
  "顶尖资源加持：行业导师、技术平台、投资机构",
  "跨界连接：技术 × 商业 × 创意 × 科学",
  "沉浸式体验：不仅是比赛，更是一场成长之旅",
];


// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "calc(100vh - 64px)",
          background: [
            "radial-gradient(ellipse 55% 68% at 72% 32%, rgba(139,92,246,0.42) 0%, transparent 58%)",
            "radial-gradient(ellipse 35% 48% at 10% 80%, rgba(59,130,246,0.22) 0%, transparent 52%)",
            "radial-gradient(ellipse 30% 40% at 85% 92%, rgba(249,115,22,0.16) 0%, transparent 48%)",
            "radial-gradient(ellipse 22% 30% at 48% 5%, rgba(236,72,153,0.10) 0%, transparent 42%)",
            "linear-gradient(155deg, #fafbff 0%, #ede8ff 50%, #e4dcff 100%)",
          ].join(", "),
        }}
      >
        {/* City scene — right half */}
        <div className="absolute top-0 right-0 bottom-0 w-[62%] pointer-events-none hidden md:block overflow-hidden">
          <CitySceneSVG />
        </div>

        {/* Left-edge fade: blend city into text area */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none hidden md:block z-[1]"
          style={{
            left: "34%",
            width: "16%",
            background: "linear-gradient(to right, #fafbff 0%, transparent 100%)"
          }}
        />

        {/* Crystal D — floating in sky above city */}
        <div className="absolute top-[6%] right-[4%] w-[22vw] max-w-[240px] min-w-[150px] aspect-[26/34] pointer-events-none hidden md:block z-[2]">
          <CrystalD />
        </div>

        {/* Animated orbs */}
        <div className="absolute top-[16%] right-[32%] w-10 h-10 rounded-full bg-violet-300 opacity-28 blur-xl pointer-events-none hidden md:block z-[1] float-slow" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[44%] right-[25%] w-6 h-6 rounded-full bg-indigo-200 opacity-40 blur-sm pointer-events-none hidden md:block z-[1] orb-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[24%] right-[14%] w-5 h-5 rounded-full bg-white opacity-60 blur-sm pointer-events-none hidden md:block z-[2] float-animation" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[60%] right-[37%] w-7 h-7 rounded-full bg-blue-200 opacity-32 pointer-events-none hidden md:block z-[1] float-slow" style={{ animationDelay: "2.2s" }} />
        <div className="absolute top-[72%] right-[22%] w-4 h-4 rounded-full bg-pink-200 opacity-38 pointer-events-none hidden md:block z-[1] orb-pulse" style={{ animationDelay: "0.4s" }} />
        <div className="absolute top-[8%] right-[45%] w-3 h-3 rounded-full bg-violet-300 opacity-50 pointer-events-none hidden md:block z-[1] float-animation" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[35%] right-[10%] w-8 h-8 rounded-full bg-indigo-100 opacity-30 blur-md pointer-events-none hidden md:block z-[1] float-slow" style={{ animationDelay: "1s" }} />

        {/* Text content — left */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-24">
          <div className="max-w-[580px]">
            <h1 className="font-black leading-[0.88] tracking-tight" style={{ fontSize: "clamp(3.4rem, 9vw, 7.5rem)" }}>
              <span className="block text-[#0f0e2a]">
                VENTURE
                <span style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>D</span>
              </span>
              <span className="block text-[#0f0e2a]">HACKATHON</span>
            </h1>

            <p
              className="text-[#6366f1] mt-5"
              style={{ fontFamily: "var(--font-dancing), cursive", fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)" }}
            >
              Agent for the Real World
            </p>

            <p className="text-base font-semibold text-[#0f0e2a]/72 mt-2 mb-8 tracking-wide">
              — 让 Agent 进入真实世界
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-[#0f0e2a]/65">
              <span className="flex items-center gap-2">
                <span className="text-base">📅</span> 2026.08.27 – 08.29
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">📍</span> 中国·杭州 Hangzhou, China
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
              >
                立即报名 Apply Now →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-[#0f0e2a]/22 text-[#0f0e2a]/68 hover:border-[#0f0e2a]/40 bg-white/50 transition-all"
              >
                了解更多 Learn More ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="px-6 -mt-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4 py-1 gap-1">
                  <span className="text-[#6366f1] text-lg font-bold">{s.icon}</span>
                  <span className="text-base font-black text-[#0f0e2a]">{s.value}</span>
                  <span className="text-[11px] text-gray-500 whitespace-pre-line leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE TRACKS ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-48 shrink-0">
            <h2 className="text-2xl font-black text-[#0f0e2a] leading-tight">三大赛道</h2>
            <h3 className="text-base font-bold text-[#6366f1] mb-4">Three Tracks</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">选择你的赛道，用 Agent 创造真实世界的改变。</p>
            <Link href="/services" className="text-sm font-semibold text-[#6366f1] hover:underline">了解更多 →</Link>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            {tracks.map((t) => (
              <div
                key={t.num}
                className="rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between"
                style={{ background: t.bg, minHeight: "220px" }}
              >
                {/* SVG illustration */}
                <div className="absolute top-4 right-3 bottom-4 w-[38%] flex items-center justify-center opacity-85">
                  <TrackIllustration num={t.num} />
                </div>

                <div className="relative z-10 pr-[36%]">
                  <span className="text-[11px] font-bold opacity-58 block mb-1">{t.num}</span>
                  <h3 className="text-xl font-black leading-tight">{t.title}</h3>
                  <h4 className="text-sm font-bold opacity-88 mt-0.5">{t.titleCn}</h4>
                  <p className="text-xs opacity-78 mt-2 leading-relaxed">{t.desc}</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-5">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-white/22 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVE CORE EXPERIENCES ── */}
      <section className="py-16 px-6 bg-[#ece8ff]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-48 shrink-0">
            <h2 className="text-2xl font-black text-[#0f0e2a] leading-tight">五大核心体验</h2>
            <h3 className="text-base font-bold text-[#6366f1] mb-4">Five Core Experiences</h3>
            <Link href="/services" className="text-sm font-semibold text-[#6366f1] hover:underline">查看更多 →</Link>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {experiences.map((e, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl mb-3">{e.emoji}</div>
                <h4 className="font-bold text-[#0f0e2a] text-xs leading-snug mb-2">{e.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed whitespace-pre-line">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO TO JOIN + SCHEDULE ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Who Should Join */}
          <div>
            <h2 className="text-lg font-black text-[#0f0e2a]">
              谁应该参加 <span className="text-[#6366f1] font-normal">/</span> Who Should Join?
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-5 text-white" style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}>
                <div className="text-3xl mb-3">🎒</div>
                <div className="text-[9px] font-bold tracking-widest opacity-60 mb-1">DISCOVERY DIVISION</div>
                <h3 className="font-black text-sm">中学生组</h3>
                <p className="text-[11px] opacity-80 mt-2 leading-relaxed">适合 14-18 岁，对科技与创造充满好奇的中学生</p>
              </div>
              <div className="rounded-2xl p-5 text-white" style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}>
                <div className="text-3xl mb-3">🎓</div>
                <div className="text-[9px] font-bold tracking-widest opacity-60 mb-1">DELTA DIVISION</div>
                <h3 className="font-black text-sm">大学生组</h3>
                <p className="text-[11px] opacity-80 mt-2 leading-relaxed">适合大学生、研究生和青年开发者</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl p-4 bg-indigo-50 border border-indigo-100">
              <div className="font-bold text-[#6366f1] text-sm">Open Showcase</div>
              <p className="text-xs text-gray-600 mt-1">面向企业、团队、创投机构和企业</p>
            </div>
          </div>

          {/* Event Schedule */}
          <div>
            <h2 className="text-lg font-black text-[#0f0e2a]">
              赛事流程 <span className="text-[#f97316] font-normal">/</span> Event Schedule
            </h2>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {schedule.map((day) => (
                <div key={day.day} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="px-3 py-3 text-white" style={{ background: day.accent }}>
                    <div className="font-black text-sm">{day.day}</div>
                    <div className="text-[11px] opacity-75 mt-0.5">●{day.date}</div>
                  </div>
                  <div className="bg-white p-3 space-y-3">
                    {day.items.map((item, idx) => (
                      <div key={idx}>
                        <div className="text-[9px] text-gray-400 font-medium">{item.time}</div>
                        <div className="text-[11px] font-semibold text-[#0f0e2a] mt-0.5 leading-snug">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE VENTURED ── */}
      <section className="py-16 px-6 bg-[#ece8ff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#0f0e2a] mb-8">为什么选择 VentureD?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="text-[#6366f1] font-black mt-0.5 text-base shrink-0">✓</span>
                <span className="text-sm text-[#0f0e2a] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-black text-[#0f0e2a] mb-8">
            合作伙伴 <span className="text-[#6366f1] font-normal">/</span> Our Partners
          </h2>
          <div className="flex flex-wrap items-center gap-8">
            <span className="font-black text-[#1677ff] text-xl">Tencent 腾讯</span>
            <div className="text-center leading-none">
              <div className="font-black text-[#00ADEF] text-base">蚂蚁集团</div>
              <div className="font-bold text-[#00ADEF] text-[10px] tracking-widest">ANT GROUP</div>
            </div>
            <span className="font-black text-[#ff6a00] text-xl">阿里云 aliyun</span>
            <span className="font-black text-[#e31e24] text-xl">商迈</span>
            <span className="font-black text-[#0078d4] text-xl">Microsoft</span>
            <span className="font-black text-[#76b900] text-xl">NVIDIA</span>
            <span className="text-xs text-gray-400 border border-dashed border-gray-300 px-4 py-2.5 rounded-xl text-center leading-snug">
              更多合作伙伴<br />Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl px-12 py-16 text-center text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 60%, #6366f1 100%)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black mb-3">准备好开启你的 VentureD 之旅了吗？</h2>
              <p className="text-indigo-200 text-sm mb-10">加入全球青年创造者浪潮，推 Agent 改变真实世界。</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm shadow-lg hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                >
                  立即报名 Apply Now →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-all"
                >
                  合作咨询 Partner With Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
