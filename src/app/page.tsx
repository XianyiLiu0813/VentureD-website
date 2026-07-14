import Link from "next/link";

// ── Illustrations ──────────────────────────────────────────────────────────

function CrystalD() {
  return (
    <svg viewBox="0 0 260 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 60px rgba(99,102,241,0.55))" }}>
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
          <feMerge><feMergeNode in="g" /><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="dshine" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="b" />
          <feFlood floodColor="white" floodOpacity="0.5" result="c" />
          <feComposite in="c" in2="b" operator="in" result="g" />
          <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z" fill="#818cf8" opacity="0.18" filter="url(#dblur)" />
      <path d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z" fill="url(#dg1)" opacity="0.82" filter="url(#dshine)" />
      <path d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z" fill="url(#dg2)" opacity="0.4" />
      <path d="M 65 62 L 65 278 Q 182 278 182 170 Q 182 62 65 62 Z" fill="white" opacity="0.07" />
      <path d="M 65 62 L 65 278 Q 182 278 182 170 Q 182 62 65 62 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.28" />
      <rect x="20" y="18" width="7" height="304" rx="3.5" fill="white" opacity="0.42" />
      <path d="M 22 18 Q 108 12 168 36" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.38" />
      <path d="M 22 18 L 22 322 L 108 322 Q 244 322 244 170 Q 244 18 108 18 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.45" />
      <line x1="22" y1="90" x2="155" y2="42" stroke="white" strokeWidth="0.8" opacity="0.22" />
      <line x1="22" y1="250" x2="155" y2="298" stroke="white" strokeWidth="0.8" opacity="0.22" />
      <path d="M 205 108 Q 238 138 240 170 Q 238 202 205 232" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
      <circle cx="90" cy="75" r="3" fill="white" opacity="0.5" />
      <circle cx="130" cy="90" r="2" fill="white" opacity="0.35" />
    </svg>
  );
}

function CitySceneSVG() {
  return (
    <svg viewBox="0 0 480 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMaxYMax meet">
      <defs>
        <linearGradient id="csb1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c7d2fe" /><stop offset="100%" stopColor="#818cf8" /></linearGradient>
        <linearGradient id="csb2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ddd6fe" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
        <linearGradient id="csb3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ede9fe" /><stop offset="100%" stopColor="#4f46e5" /></linearGradient>
        <linearGradient id="cs-haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="white" stopOpacity="0" /><stop offset="100%" stopColor="white" stopOpacity="0.72" /></linearGradient>
        <radialGradient id="cs-atmo" cx="0.62" cy="0.32" r="0.52"><stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.22" /><stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="480" height="600" fill="url(#cs-atmo)" />
      <rect x="48"  y="308" width="42" height="252" fill="url(#csb1)" opacity="0.10" rx="2" />
      <rect x="98"  y="272" width="38" height="288" fill="url(#csb3)" opacity="0.09" rx="2" />
      <rect x="144" y="242" width="46" height="318" fill="url(#csb2)" opacity="0.10" rx="2" />
      <rect x="198" y="212" width="50" height="348" fill="url(#csb1)" opacity="0.09" rx="2" />
      <rect x="256" y="185" width="56" height="375" fill="url(#csb3)" opacity="0.10" rx="2" />
      <rect x="320" y="158" width="62" height="402" fill="url(#csb2)" opacity="0.10" rx="2" />
      <rect x="390" y="132" width="68" height="428" fill="url(#csb1)" opacity="0.09" rx="2" />
      <rect x="22"  y="318" width="40" height="242" fill="url(#csb1)" opacity="0.16" rx="3" />
      <rect x="70"  y="282" width="46" height="278" fill="url(#csb2)" opacity="0.17" rx="3" />
      <rect x="124" y="248" width="44" height="312" fill="url(#csb3)" opacity="0.16" rx="3" />
      <rect x="176" y="218" width="52" height="342" fill="url(#csb1)" opacity="0.17" rx="3" />
      <rect x="236" y="188" width="58" height="372" fill="url(#csb2)" opacity="0.18" rx="3" />
      <rect x="302" y="158" width="64" height="402" fill="url(#csb3)" opacity="0.19" rx="3" />
      <rect x="374" y="128" width="70" height="432" fill="url(#csb1)" opacity="0.19" rx="3" />
      <rect x="162" y="238" width="50" height="322" fill="url(#csb1)" opacity="0.32" rx="4" />
      <rect x="222" y="205" width="58" height="355" fill="url(#csb2)" opacity="0.34" rx="4" />
      <rect x="288" y="172" width="65" height="388" fill="url(#csb3)" opacity="0.36" rx="4" />
      <rect x="361" y="142" width="72" height="418" fill="url(#csb1)" opacity="0.38" rx="4" />
      <rect x="440" y="112" width="80" height="448" fill="url(#csb2)" opacity="0.35" rx="4" />
      <rect x="296" y="148" width="49" height="24" fill="url(#csb3)" opacity="0.33" rx="3" />
      <rect x="369" y="118" width="56" height="24" fill="url(#csb1)" opacity="0.33" rx="3" />
      <rect x="319.5" y="100" width="2" height="48" fill="#818cf8" opacity="0.26" rx="1" />
      <circle cx="320.5" cy="100" r="3.5" fill="#a5b4fc" opacity="0.36" />
      <rect x="397" y="72" width="2.2" height="46" fill="#6366f1" opacity="0.23" rx="1.1" />
      <circle cx="398.1" cy="72" r="3" fill="#818cf8" opacity="0.32" />
      {[296,306,316].map((x, i) => <rect key={i} x={x} y="192" width="5" height="7" fill="#fbbf24" opacity={[0.55,0.35,0.50][i]} rx="1" />)}
      {[370,381,392].map((x, i) => <rect key={i} x={x} y="162" width="5" height="7" fill="#fbbf24" opacity={[0.52,0.33,0.47][i]} rx="1" />)}
      {[450,461,472].map((x, i) => <rect key={i} x={x} y="132" width="5" height="7" fill="#fbbf24" opacity={[0.50,0.32,0.55][i]} rx="1" />)}
      <rect x="0" y="478" width="480" height="122" fill="url(#cs-haze)" />
      <circle cx="42"  cy="82"  r="1.5" fill="#818cf8" opacity="0.45" />
      <circle cx="118" cy="52"  r="1.2" fill="#a5b4fc" opacity="0.50" />
      <circle cx="196" cy="68"  r="1.8" fill="#818cf8" opacity="0.38" />
      <circle cx="275" cy="38"  r="1.2" fill="#c4b5fd" opacity="0.52" />
      <circle cx="422" cy="56"  r="1.5" fill="#818cf8" opacity="0.44" />
      <circle cx="72"  cy="188" r="20" fill="#c4b5fd" opacity="0.12" />
      <circle cx="162" cy="112" r="24" fill="#a5b4fc" opacity="0.10" />
      <circle cx="238" cy="152" r="16" fill="#ddd6fe" opacity="0.13" />
      <circle cx="132" cy="198" r="28" fill="none" stroke="#a5b4fc" strokeWidth="0.8" opacity="0.18" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { icon: "⚡", value: "48H", label: "极限创造" },
  { icon: "◈", value: "3", label: "大赛道" },
  { icon: "◎", value: "1000+", label: "青年创造者" },
  { icon: "✦", value: "顶尖", label: "行业导师" },
  { icon: "◆", value: "48H", label: "Vibe Coding" },
];

const tracks = [
  {
    num: "01",
    bg: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
    title: "Hardware",
    titleCn: "硬件创新",
    desc: "探索硬件 × Agent 的无限可能",
    tags: ["IoT", "AI Agent", "Hardware", "Wearables"],
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
  { icon: "⚡", title: "Hackathon Challenge", desc: "48 小时极限创造\n从 0 到 1 打造 Agent 项目" },
  { icon: "🔮", title: "D-Lab Technology", desc: "前沿科技体验\n与顶尖技术零距离" },
  { icon: "🎉", title: "Dream Disco Night", desc: "创意派对之夜\n音乐 × 创意 × 灵感碰撞" },
  { icon: "🏕️", title: "D-Camp Experience", desc: "沉浸式营地体验\n学习 · 追梦 · 共同成长" },
  { icon: "🏆", title: "Final Demo Day", desc: "巅峰展示创意\n向世界展示你的创造力" },
];

const schedule = [
  {
    day: "Day 1", date: "08.27", color: "#6366f1",
    items: ["09:00  签到 & 开幕式", "10:00  灵感分享 & 技术体验", "13:00  团队组建 & 黑客松开始"],
  },
  {
    day: "Day 2", date: "08.28", color: "#f97316",
    items: ["00:00  项目开发 & 导师辅导", "19:00  Dream Disco 派对之夜", "22:00  冲刺阶段"],
  },
  {
    day: "Day 3", date: "08.29", color: "#6366f1",
    items: ["00:00  最后冲刺", "13:00  Final Demo Day", "17:00  颁奖典礼 & 闭幕"],
  },
];

const partners = [
  { name: "腾讯", nameEn: "Tencent", color: "#1677ff" },
  { name: "蚂蚁集团", nameEn: "ANT GROUP", color: "#00ADEF" },
  { name: "阿里云", nameEn: "Alibaba Cloud", color: "#ff6a00" },
  { name: "商迈", nameEn: "Shangmai", color: "#e31e24" },
  { name: "Microsoft", nameEn: "Microsoft", color: "#0078d4" },
  { name: "NVIDIA", nameEn: "NVIDIA", color: "#76b900" },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          background: [
            "radial-gradient(ellipse 60% 70% at 75% 30%, rgba(99,102,241,0.28) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 50% at 8% 85%, rgba(59,130,246,0.18) 0%, transparent 55%)",
            "radial-gradient(ellipse 35% 45% at 88% 90%, rgba(249,115,22,0.12) 0%, transparent 50%)",
            "linear-gradient(155deg, #f8f7ff 0%, #eeeaff 55%, #e6deff 100%)",
          ].join(", "),
        }}
      >
        {/* City scene */}
        <div className="absolute top-0 right-0 bottom-0 w-[58%] pointer-events-none hidden md:block overflow-hidden">
          <CitySceneSVG />
        </div>
        {/* Fade mask */}
        <div className="absolute top-0 bottom-0 pointer-events-none hidden md:block z-[1]"
          style={{ left: "32%", width: "18%", background: "linear-gradient(to right, #f8f7ff 0%, transparent 100%)" }} />
        {/* Crystal D */}
        <div className="absolute top-[5%] right-[3%] w-[24vw] max-w-[260px] min-w-[160px] aspect-[26/34] pointer-events-none hidden md:block z-[2]">
          <CrystalD />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-[18%] right-[30%] w-12 h-12 rounded-full bg-violet-300/30 blur-xl pointer-events-none hidden md:block float-slow" />
        <div className="absolute top-[45%] right-[24%] w-7 h-7 rounded-full bg-indigo-200/40 blur-sm pointer-events-none hidden md:block orb-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[65%] right-[38%] w-8 h-8 rounded-full bg-blue-200/35 pointer-events-none hidden md:block float-slow" style={{ animationDelay: "2.2s" }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col justify-center" style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
          <div className="max-w-[640px]">

            {/* Tag */}
            <div className="tag mb-6">2026.08.27 – 08.29 · 中国·杭州</div>

            {/* Headline */}
            <h1 className="font-black leading-[0.86] tracking-tight mb-6" style={{ fontSize: "clamp(3.8rem, 10.5vw, 9rem)" }}>
              <span className="block text-[#0f0e2a]">VENTURE
                <span style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>D</span>
              </span>
              <span className="block text-[#0f0e2a]">HACKATHON</span>
            </h1>

            {/* Script subtitle */}
            <p className="text-[#6366f1] mb-2" style={{ fontFamily: "var(--font-dancing), cursive", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              Agent for the Real World
            </p>
            <p className="font-semibold text-[#0f0e2a]/60 mb-10 tracking-wider text-base">
              — 让 Agent 进入真实世界
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}>
                立即报名 Apply Now →
              </Link>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 border-[#0f0e2a]/18 text-[#0f0e2a]/65 hover:border-[#6366f1]/50 hover:text-[#6366f1] bg-white/60 transition-all">
                了解更多 Learn More ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100/80 px-4 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4 py-2 gap-1.5">
                  <span className="text-[#6366f1] text-xl">{s.icon}</span>
                  <span className="text-xl font-black text-[#0f0e2a] leading-none">{s.value}</span>
                  <span className="text-[11px] text-gray-500 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE TRACKS ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left label */}
            <div className="lg:w-56 shrink-0 lg:pt-2">
              <p className="text-xs font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Three Tracks</p>
              <h2 className="text-5xl font-black text-[#0f0e2a] leading-tight mb-5">三大<br />赛道</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">选择你的赛道，用 Agent 创造真实世界的改变。</p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6366f1] hover:gap-2 transition-all">了解更多 <span>→</span></Link>
            </div>

            {/* Track cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
              {tracks.map((t) => (
                <div key={t.num} className="rounded-3xl p-7 text-white relative overflow-hidden flex flex-col justify-between min-h-[280px]"
                  style={{ background: t.bg }}>
                  <div>
                    <span className="text-xs font-bold opacity-50 block mb-4 tracking-widest">{t.num}</span>
                    <h3 className="text-3xl font-black leading-tight">{t.title}</h3>
                    <h4 className="text-base font-bold opacity-85 mt-1 mb-4">{t.titleCn}</h4>
                    <p className="text-sm opacity-75 leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium bg-white/20 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE CORE EXPERIENCES ── */}
      <section className="py-24 px-6 bg-[#ece8ff]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-56 shrink-0">
              <p className="text-xs font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Five Core Experiences</p>
              <h2 className="text-5xl font-black text-[#0f0e2a] leading-tight mb-5">五大<br />体验</h2>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6366f1] hover:gap-2 transition-all">查看更多 <span>→</span></Link>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {experiences.map((e, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{e.icon}</div>
                  <h4 className="font-bold text-[#0f0e2a] text-xs leading-snug mb-2">{e.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed whitespace-pre-line">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO + SCHEDULE ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Who */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Who Should Join</p>
            <h2 className="text-5xl font-black text-[#0f0e2a] leading-tight mb-8">谁应该<br />参加？</h2>
            <div className="space-y-4">
              <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}>
                <div className="text-[9px] font-bold tracking-[0.2em] opacity-60 mb-2">DISCOVERY DIVISION</div>
                <h3 className="font-black text-lg mb-1">中学生组</h3>
                <p className="text-sm opacity-80 leading-relaxed">适合 14–18 岁，对科技与创造充满好奇的中学生</p>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}>
                <div className="text-[9px] font-bold tracking-[0.2em] opacity-60 mb-2">DELTA DIVISION</div>
                <h3 className="font-black text-lg mb-1">大学生组</h3>
                <p className="text-sm opacity-80 leading-relaxed">适合大学生、研究生和青年开发者</p>
              </div>
              <div className="rounded-xl p-4 border-2 border-dashed border-indigo-200 bg-indigo-50">
                <span className="font-bold text-[#6366f1] text-sm">Open Showcase</span>
                <p className="text-xs text-gray-600 mt-1">面向企业、团队、创投机构</p>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#f97316] uppercase mb-3">Event Schedule</p>
            <h2 className="text-5xl font-black text-[#0f0e2a] leading-tight mb-8">赛事<br />流程</h2>
            <div className="grid grid-cols-3 gap-3">
              {schedule.map((day) => (
                <div key={day.day} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="px-4 py-3 text-white" style={{ background: day.color }}>
                    <div className="font-black text-sm">{day.day}</div>
                    <div className="text-[11px] opacity-75 mt-0.5">● {day.date}</div>
                  </div>
                  <div className="bg-white p-3 space-y-3">
                    {day.items.map((item, idx) => (
                      <div key={idx} className="text-[10px] text-gray-600 leading-snug">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY VENTURED ── */}
      <section className="py-24 px-6 bg-[#ece8ff]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Why VentureD</p>
          <h2 className="text-5xl font-black text-[#0f0e2a] mb-14">为什么选择 <span className="gradient-text">VentureD</span>？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "真实场景驱动", desc: "聚焦 Agent 在真实世界的应用，不只是纸上创意" },
              { num: "02", title: "顶尖资源加持", desc: "行业导师、技术平台、投资机构全方位支持" },
              { num: "03", title: "跨界连接", desc: "技术 × 商业 × 创意 × 科学，多元碰撞" },
              { num: "04", title: "沉浸式体验", desc: "不仅是比赛，更是一场改变视角的成长之旅" },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black gradient-text mb-4">{item.num}</div>
                <h4 className="font-black text-[#0f0e2a] text-base mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Our Partners</p>
          <h2 className="text-5xl font-black text-[#0f0e2a] mb-14">合作伙伴</h2>
          <div className="flex flex-wrap items-center gap-10">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-start">
                <span className="font-black text-xl" style={{ color: p.color }}>{p.name}</span>
                {p.nameEn !== p.name && <span className="text-[10px] font-bold tracking-widest" style={{ color: p.color, opacity: 0.7 }}>{p.nameEn}</span>}
              </div>
            ))}
            <span className="text-xs text-gray-400 border border-dashed border-gray-300 px-5 py-3 rounded-xl text-center leading-snug">
              更多合作伙伴<br />Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl px-12 py-20 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #3730a3 0%, #5b21b6 50%, #6366f1 100%)" }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                准备好开启你的<br />VentureD 之旅了吗？
              </h2>
              <p className="text-indigo-200 text-base mb-10 leading-relaxed">
                加入全球青年创造者浪潮，推动 Agent 改变真实世界。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm shadow-lg hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}>
                  立即报名 Apply Now →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 border-white/35 text-white hover:bg-white/10 transition-all">
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
