"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useCallback } from "react";

// ── Data ───────────────────────────────────────────────────────────────────

const tracksMeta = [
  { num: "01", gradient: "linear-gradient(140deg, #1e1b4b 0%, #3730a3 55%, #4f46e5 100%)", title: "Hardware", partner: "TiDB" },
  { num: "02", gradient: "linear-gradient(140deg, #0a1628 0%, #1e3a8a 50%, #0369a1 100%)", title: "Physical AI", partner: "宇树科技" },
  { num: "03", gradient: "linear-gradient(140deg, #1a0433 0%, #6d28d9 45%, #9d174d 100%)", title: "Deep Space", partner: "群核科技" },
  { num: "04", gradient: "linear-gradient(140deg, #1c0700 0%, #9a3412 50%, #dc2626 100%)", title: "Global Commerce", partner: "天识科技" },
];

const partners = [
  { name: "NTU Entrepreneurship Academy", img: "/images/partners/ntu.png" },
  { name: "深圳科创学院 Shenzhen InnoX", img: "/images/partners/shenzhen-innox.png" },
  { name: "天识科技 ANTLINKS", img: "/images/partners/antlinks.png" },
  { name: "群核科技 MANYCORE", img: "/images/partners/manycore.png" },
  { name: "UNITREE", img: "/images/partners/unitree.svg" },
  { name: "浙江大学计算机学院", img: "/images/partners/zju.svg" },
  { name: "TiDB", img: "/images/partners/tidb.png" },
  { name: "杭州全球青年人才中心", img: "/images/partners/hangzhou-global.webp" },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang, t } = useLanguage();
  const [slide, setSlide] = useState(0);
  const totalSlides = 2;
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % totalSlides), []);
  const prevSlide = useCallback(() => setSlide((s) => (s - 1 + totalSlides) % totalSlides), []);
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const regUrl = lang === "en"
    ? "https://docs.google.com/forms/d/e/1FAIpQLSd3heep5VmjnBZWjR-QzuAyf8qJ-_j00AOEUoyxyqoaYCzlTQ/viewform?usp=header"
    : "https://wj.qq.com/s2/27332848/a062/";

  const stats = [
    { icon: "⚡", value: "48H", label: t("极限创造", "Extreme Creation") },
    { icon: "◈", value: "4", label: t("大赛道", "Tracks") },
    { icon: "◎", value: "80万+", label: t("奖金资源池", "Prize Pool") },
    { icon: "✦", value: "20+", label: t("顶尖导师", "Top Mentors") },
    { icon: "◆", value: t("杭州", "Hangzhou"), label: t("首届举办地", "Host City") },
  ];

  const tracks = tracksMeta.map((m, i) => ({
    ...m,
    ...[
      {
        titleCn: t("硬件创新", "Hardware Innovation"),
        desc: t("让 Agent 通过硬件触达真实世界——从机器人、无人机到穿戴设备，拥有感知、理解、执行的能力。", "Let Agents reach the physical world through hardware — from robots and drones to wearables, with the ability to sense, understand, and act."),
        tags: lang === "en" ? ["IoT", "AI Agent", "Robotics", "Wearables"] : ["IoT", "AI Agent", "机器人", "Wearables"],
      },
      {
        titleCn: t("具身智能", "Embodied Intelligence"),
        desc: t("让 AI Agent 拥有实体——5 台 G1 人形机器人现场开放，探索 AI 与物理世界融合的无限边界。", "Give AI Agents a physical form — 5 Unitree G1 humanoid robots on-site, exploring the limitless frontier where AI meets the physical world."),
        tags: lang === "en" ? ["Humanoid Robot", "Embodied AI", "Physical", "Hardware"] : ["人形机器人", "具身AI", "Physical", "Hardware"],
      },
      {
        titleCn: t("深空探索", "Deep Space"),
        desc: t("给天马行空的想法一个被创造的机会，探索未来生活、未来科技与未来世界的全新可能。", "Give bold, unconventional ideas a chance to be built — explore new possibilities in future living, future tech, and the world ahead."),
        tags: lang === "en" ? ["Space Tech", "Future Tech", "Deep Tech", "Science"] : ["Space Tech", "未来科技", "Deep Tech", "Science"],
      },
      {
        titleCn: t("全球商业", "Global Commerce"),
        desc: t("基于真实市场数据与出海场景，用 Agent 判断什么值得走向世界，重塑全球商业体验。", "Powered by real market data and global commerce scenarios — use Agents to judge what's worth taking to the world and reimagine global business."),
        tags: lang === "en" ? ["E-commerce", "Fintech", "Global", "AI Retail"] : ["E-commerce", "Fintech", "出海", "AI Retail"],
      },
    ][i],
  }));

  const experiences = [
    { icon: "⚡", title: "Hackathon Challenge", desc: t("48 小时极限创造\n从 0 到 1 打造 Agent 项目", "48-Hour Extreme Build\nCreate an Agent project from 0 to 1") },
    { icon: "🔮", title: "D-Lab Technology", desc: t("前沿科技体验\n与顶尖技术零距离", "Cutting-Edge Tech Experience\nFace-to-face with top technology") },
    { icon: "🎉", title: "Dream Disco Night", desc: t("创意派对之夜\n音乐 × 创意 × 灵感碰撞", "Creative Party Night\nMusic × Ideas × Inspiration") },
    { icon: "🏕️", title: "D-Camp Experience", desc: t("沉浸式营地体验\n学习 · 追梦 · 共同成长", "Immersive Camp Experience\nLearn · Dream · Grow together") },
    { icon: "🏆", title: "Final Demo Day", desc: t("巅峰展示创意\n向世界展示你的创造力", "Showcase Your Creation\nShow the world what you built") },
  ];

  const whyItems = [
    { title: t("真实场景驱动", "Real-World Scenarios"), desc: t("聚焦 Agent 在真实世界的应用，不只是纸上创意，而是可落地的解决方案。", "Focused on real-world Agent applications — not just ideas on paper, but solutions that actually work.") },
    { title: t("顶尖资源加持", "Top-Tier Resources"), desc: t("行业导师、AI 技术平台、投资机构——全方位资源支持你的项目。", "Industry mentors, AI platforms, and investment institutions — full-stack support for your project.") },
    { title: t("跨界连接", "Cross-Domain Connections"), desc: t("技术 × 商业 × 创意 × 科学，来自不同背景的创造者在这里碰撞。", "Tech × Business × Design × Science — creators from all backgrounds collide here.") },
    { title: t("沉浸式成长体验", "Immersive Growth"), desc: t("不仅是比赛，更是 48 小时改变视角的成长之旅，改变你的人生轨迹。", "More than a competition — a 48-hour journey that shifts your perspective and changes your trajectory.") },
  ];

  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* ── HERO CAROUSEL ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${slide * 100}%)`, minHeight: "100vh" }}>

          {/* Slide 1: VentureD */}
          <section className="relative shrink-0 w-full overflow-hidden"
            style={{ minHeight: "100vh", backgroundImage: "url('/images/bg-scene.jpg')", backgroundSize: "cover", backgroundPosition: "center center" }}>
            <div className="absolute inset-0" style={{ background: ["linear-gradient(to right, rgba(245,244,255,0.90) 0%, rgba(235,232,255,0.74) 38%, rgba(220,215,255,0.36) 60%, rgba(200,195,255,0.08) 80%, transparent 100%)", "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 40%)"].join(", ") }} />
            <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col justify-center" style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
              <div className="max-w-[600px]">
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
                  style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.30)", color: "#4f46e5", backdropFilter: "blur(8px)" }}>
                  2026.08.27 – 08.29 &nbsp;·&nbsp; {t("中国·杭州", "Hangzhou, China")}
                </div>
                <h1 className="font-black leading-[0.86] tracking-tight mb-6" style={{ fontSize: "clamp(3.8rem, 10.5vw, 9rem)" }}>
                  <span className="block text-[#1a1760]">VENTURE<span style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>D</span></span>
                  <span className="block text-[#1a1760]">HACKATHON</span>
                </h1>
                <p className="mb-2" style={{ fontFamily: "var(--font-dancing), cursive", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#6366f1" }}>Agent for the Real World</p>
                <p className="font-semibold mb-10 tracking-wider text-base text-[#4f46e5]/60">{t("— 让 Agent 进入真实世界", "— Agents Entering the Real World")}</p>
                <div className="flex flex-wrap gap-4">
                  <a href={regUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                    style={{ background: "linear-gradient(135deg, #f97316, #ef4444)", boxShadow: "0 8px 32px rgba(249,115,22,0.35)" }}>
                    {t("立即报名 →", "Apply Now →")}
                  </a>
                  <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
                    style={{ border: "2px solid rgba(99,102,241,0.40)", color: "#4338ca", background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)" }}>
                    {t("了解更多 ↓", "Learn More ↓")}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 2: GOAI */}
          <section className="relative shrink-0 w-full overflow-hidden"
            style={{ minHeight: "100vh", background: "linear-gradient(135deg, #050e4a 0%, #0a1a6e 35%, #0e2580 65%, #06145a 100%)" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { s: 22,  top: "12%", right: "46%", c: "#22d3ee" }, { s: 42, top: "28%", right: "40%", c: "#4ade80" },
                { s: 68,  top: "44%", right: "32%", c: "#86efac" }, { s: 110, top: "52%", right: "20%", c: "#fbbf24" },
                { s: 150, top: "36%", right: "6%",  c: "#fb923c" }, { s: 90, top: "68%", right: "2%",  c: "#f87171" },
                { s: 36,  top: "8%",  right: "26%", c: "#a3e635" }, { s: 18, top: "72%", right: "38%", c: "#34d399" },
                { s: 55,  top: "18%", right: "14%", c: "#60a5fa" }, { s: 30, top: "60%", right: "46%", c: "#fde68a" },
                { s: 70,  top: "78%", right: "12%", c: "#c084fc" }, { s: 25, top: "85%", right: "30%", c: "#22d3ee" },
              ].map((c, i) => (
                <div key={i} className="absolute rounded-full" style={{ width: c.s, height: c.s, top: c.top, right: c.right, background: c.c, opacity: 0.82, filter: "blur(0.8px)" }} />
              ))}
            </div>
            <a href="https://www.goaihz.com/?channel=vd" target="_blank" rel="noopener noreferrer"
              className="relative z-10 flex flex-col justify-center max-w-7xl mx-auto px-8"
              style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
              <div className="max-w-[620px]">
                <div className="flex items-center gap-3 mb-10">
                  <span className="text-white font-black text-3xl tracking-tight">G</span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "conic-gradient(from 0deg, #22d3ee, #4ade80, #fbbf24, #fb923c, #f87171, #c084fc, #22d3ee)" }}>
                    <div className="rounded-full" style={{ width: "18px", height: "18px", background: "#0a1a6e" }} />
                  </div>
                  <span className="text-white font-black text-3xl tracking-tight">AI</span>
                  <div className="ml-2 border-l border-white/25 pl-3">
                    <div className="text-white/70 text-xs font-semibold leading-tight">世界人工智能</div>
                    <div className="text-white/70 text-xs font-semibold leading-tight">开源大赛</div>
                    <div className="text-white/40 text-[10px] mt-0.5">Global Open-source AI Challenge</div>
                  </div>
                </div>
                <h2 className="text-white font-black leading-tight mb-3" style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}>
                  {t("世界人工智能", "Global Open-source")}<br />{t("开源大赛", "AI Challenge")}
                </h2>
                <p className="text-white font-bold text-xl mb-2" style={{ opacity: 0.85 }}>Global Open-source AI Challenge</p>
                <p className="mb-10 text-base font-semibold" style={{ color: "rgba(163,230,53,0.9)" }}>{t("开放 · 共享 · 共建", "Open · Share · Build")}</p>
                <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0a1a6e] text-sm hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #a3e635, #4ade80)", boxShadow: "0 8px 32px rgba(163,230,53,0.35)" }}>
                  {t("立即报名 →", "Register Now →")}
                </div>
              </div>
            </a>
          </section>
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-all" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={nextSlide} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-all" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {[0, 1].map((i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className="rounded-full transition-all duration-300"
              style={{ width: slide === i ? "24px" : "8px", height: "8px", background: slide === i ? "white" : "rgba(255,255,255,0.4)" }} />
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-indigo-100/80 px-4 py-5"
            style={{ boxShadow: "0 16px 48px rgba(99,102,241,0.14)" }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4 py-3 gap-2">
                  <span className="text-[#6366f1] text-2xl">{s.icon}</span>
                  <span className="text-2xl font-black text-[#0f0e2a] leading-none">{s.value}</span>
                  <span className="text-sm text-gray-500 leading-snug font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR TRACKS ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Four Tracks</p>
            <h2 className="text-5xl font-black text-[#0f0e2a] leading-tight mb-4">
              <span className="gradient-text">4</span> {t("大真实世界赛道", "Real-World Tracks")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Hardware · Physical AI · Deep Space · Global Commerce</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracks.map((t) => (
              <div key={t.num} className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                {/* Visual header — custom SVG per track */}
                <div className="relative h-56 overflow-hidden flex flex-col justify-end" style={{ background: t.gradient }}>
                  {/* SVG illustration */}
                  <div className="absolute inset-0">
                    {t.num === "01" && (
                      <svg width="100%" height="100%" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* bg grid dots */}
                        {[20,60,100,140,180,220,260].map(x => [20,55,90,125,160,185].map(y =>
                          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="white" fillOpacity="0.1"/>
                        ))}
                        {/* Chip body */}
                        <rect x="93" y="58" width="94" height="84" rx="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.04"/>
                        <rect x="105" y="70" width="70" height="60" rx="3" stroke="white" strokeWidth="0.75" strokeOpacity="0.25"/>
                        {/* Left traces */}
                        <line x1="55" y1="78" x2="93" y2="78" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="55" y1="100" x2="93" y2="100" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="55" y1="122" x2="93" y2="122" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        {/* Right traces */}
                        <line x1="187" y1="78" x2="225" y2="78" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="187" y1="100" x2="225" y2="100" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="187" y1="122" x2="225" y2="122" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        {/* Top traces */}
                        <line x1="118" y1="28" x2="118" y2="58" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="140" y1="16" x2="140" y2="58" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="162" y1="28" x2="162" y2="58" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        {/* Bottom traces */}
                        <line x1="118" y1="142" x2="118" y2="175" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="140" y1="142" x2="140" y2="187" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        <line x1="162" y1="142" x2="162" y2="175" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
                        {/* L-bend traces */}
                        <path d="M55 78 L35 78 L35 55 L20 55" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" fill="none"/>
                        <path d="M55 122 L35 122 L35 145 L20 145" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" fill="none"/>
                        <path d="M225 78 L245 78 L245 55 L260 55" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" fill="none"/>
                        {/* Pads */}
                        <circle cx="55" cy="78" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="55" cy="100" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="55" cy="122" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="225" cy="78" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="225" cy="100" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="225" cy="122" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="118" cy="28" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="140" cy="16" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="162" cy="28" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="118" cy="175" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="140" cy="187" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="162" cy="175" r="4" fill="white" fillOpacity="0.6"/>
                        {/* Center glow */}
                        <circle cx="140" cy="100" r="30" fill="white" fillOpacity="0.05"/>
                        <circle cx="140" cy="100" r="14" fill="white" fillOpacity="0.08"/>
                      </svg>
                    )}
                    {t.num === "02" && (
                      <svg width="100%" height="100%" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Scan rings */}
                        <circle cx="140" cy="88" r="75" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 3"/>
                        <circle cx="140" cy="88" r="55" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 3"/>
                        <circle cx="140" cy="88" r="35" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 3"/>
                        {/* Head */}
                        <circle cx="140" cy="46" r="19" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="white" fillOpacity="0.06"/>
                        <circle cx="133" cy="43" r="2.5" fill="white" fillOpacity="0.5"/>
                        <circle cx="147" cy="43" r="2.5" fill="white" fillOpacity="0.5"/>
                        <path d="M134 51 Q140 56 146 51" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" fill="none"/>
                        {/* Body */}
                        <rect x="124" y="71" width="32" height="46" rx="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.04"/>
                        <line x1="140" y1="78" x2="140" y2="110" stroke="white" strokeWidth="0.75" strokeOpacity="0.25"/>
                        <line x1="130" y1="88" x2="150" y2="88" stroke="white" strokeWidth="0.75" strokeOpacity="0.25"/>
                        {/* Arms */}
                        <path d="M124 80 L92 96 L87 112" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
                        <path d="M156 80 L188 96 L193 112" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
                        <circle cx="87" cy="112" r="4" fill="white" fillOpacity="0.5"/>
                        <circle cx="193" cy="112" r="4" fill="white" fillOpacity="0.5"/>
                        {/* Legs */}
                        <path d="M132 117 L124 155 L118 178" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
                        <path d="M148 117 L156 155 L162 178" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
                        {/* Neural nodes */}
                        <circle cx="42" cy="58" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.07"/>
                        <circle cx="238" cy="58" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.07"/>
                        <circle cx="28" cy="132" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.07"/>
                        <circle cx="252" cy="132" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.07"/>
                        <circle cx="68" cy="172" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.07"/>
                        <circle cx="212" cy="172" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.07"/>
                        {/* Connections */}
                        <line x1="50" y1="60" x2="87" y2="112" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="4 3"/>
                        <line x1="230" y1="60" x2="193" y2="112" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="4 3"/>
                        <line x1="36" y1="130" x2="87" y2="112" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="4 3"/>
                        <line x1="244" y1="130" x2="193" y2="112" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="4 3"/>
                        <line x1="76" y1="170" x2="124" y2="117" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="4 3"/>
                        <line x1="204" y1="170" x2="156" y2="117" stroke="white" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="4 3"/>
                      </svg>
                    )}
                    {t.num === "03" && (
                      <svg width="100%" height="100%" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Stars */}
                        <circle cx="22" cy="18" r="1.5" fill="white" fillOpacity="0.8"/>
                        <circle cx="58" cy="12" r="1" fill="white" fillOpacity="0.5"/>
                        <circle cx="82" cy="32" r="1.5" fill="white" fillOpacity="0.7"/>
                        <circle cx="198" cy="15" r="1" fill="white" fillOpacity="0.5"/>
                        <circle cx="242" cy="28" r="1.5" fill="white" fillOpacity="0.8"/>
                        <circle cx="262" cy="8" r="1" fill="white" fillOpacity="0.4"/>
                        <circle cx="14" cy="95" r="1" fill="white" fillOpacity="0.5"/>
                        <circle cx="266" cy="72" r="1.5" fill="white" fillOpacity="0.6"/>
                        <circle cx="28" cy="168" r="1.5" fill="white" fillOpacity="0.7"/>
                        <circle cx="252" cy="172" r="1" fill="white" fillOpacity="0.4"/>
                        <circle cx="196" cy="188" r="1.5" fill="white" fillOpacity="0.6"/>
                        <circle cx="74" cy="182" r="1" fill="white" fillOpacity="0.5"/>
                        <circle cx="120" cy="22" r="1" fill="white" fillOpacity="0.4"/>
                        <circle cx="220" cy="155" r="1" fill="white" fillOpacity="0.5"/>
                        {/* Orbits */}
                        <ellipse cx="140" cy="100" rx="112" ry="32" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
                        <ellipse cx="140" cy="100" rx="88" ry="56" stroke="white" strokeWidth="1" strokeOpacity="0.28" transform="rotate(-38 140 100)"/>
                        <ellipse cx="140" cy="100" rx="52" ry="28" stroke="white" strokeWidth="1.2" strokeOpacity="0.38" transform="rotate(22 140 100)"/>
                        {/* Central star glow */}
                        <circle cx="140" cy="100" r="38" fill="white" fillOpacity="0.05"/>
                        <circle cx="140" cy="100" r="22" fill="white" fillOpacity="0.08"/>
                        <circle cx="140" cy="100" r="11" fill="white" fillOpacity="0.9"/>
                        {/* Star rays */}
                        <line x1="140" y1="84" x2="140" y2="78" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <line x1="140" y1="116" x2="140" y2="122" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <line x1="124" y1="100" x2="118" y2="100" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <line x1="156" y1="100" x2="162" y2="100" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                        {/* Planets */}
                        <circle cx="28" cy="100" r="7" fill="white" fillOpacity="0.65"/>
                        <circle cx="188" cy="46" r="6" fill="white" fillOpacity="0.55"/>
                        <circle cx="172" cy="142" r="5" fill="white" fillOpacity="0.5"/>
                      </svg>
                    )}
                    {t.num === "04" && (
                      <svg width="100%" height="100%" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Globe outline */}
                        <circle cx="140" cy="100" r="86" stroke="white" strokeWidth="1.5" strokeOpacity="0.45"/>
                        {/* Latitude lines */}
                        <ellipse cx="140" cy="60" rx="58" ry="14" stroke="white" strokeWidth="0.75" strokeOpacity="0.3"/>
                        <ellipse cx="140" cy="100" rx="86" ry="21" stroke="white" strokeWidth="0.75" strokeOpacity="0.35"/>
                        <ellipse cx="140" cy="140" rx="58" ry="14" stroke="white" strokeWidth="0.75" strokeOpacity="0.3"/>
                        {/* Longitude lines */}
                        <ellipse cx="140" cy="100" rx="28" ry="86" stroke="white" strokeWidth="0.75" strokeOpacity="0.28"/>
                        <ellipse cx="140" cy="100" rx="64" ry="86" stroke="white" strokeWidth="0.75" strokeOpacity="0.22"/>
                        {/* Connection nodes */}
                        <circle cx="108" cy="73" r="5" fill="white" fillOpacity="0.75"/>
                        <circle cx="168" cy="67" r="5" fill="white" fillOpacity="0.75"/>
                        <circle cx="93" cy="107" r="5" fill="white" fillOpacity="0.75"/>
                        <circle cx="187" cy="103" r="5" fill="white" fillOpacity="0.75"/>
                        <circle cx="116" cy="137" r="5" fill="white" fillOpacity="0.75"/>
                        <circle cx="164" cy="133" r="5" fill="white" fillOpacity="0.75"/>
                        <circle cx="140" cy="14" r="4" fill="white" fillOpacity="0.6"/>
                        <circle cx="140" cy="186" r="4" fill="white" fillOpacity="0.6"/>
                        {/* Network lines */}
                        <line x1="108" y1="73" x2="168" y2="67" stroke="white" strokeWidth="0.75" strokeOpacity="0.45"/>
                        <line x1="108" y1="73" x2="93" y2="107" stroke="white" strokeWidth="0.75" strokeOpacity="0.45"/>
                        <line x1="168" y1="67" x2="187" y2="103" stroke="white" strokeWidth="0.75" strokeOpacity="0.45"/>
                        <line x1="93" y1="107" x2="116" y2="137" stroke="white" strokeWidth="0.75" strokeOpacity="0.45"/>
                        <line x1="187" y1="103" x2="164" y2="133" stroke="white" strokeWidth="0.75" strokeOpacity="0.45"/>
                        <line x1="116" y1="137" x2="164" y2="133" stroke="white" strokeWidth="0.75" strokeOpacity="0.45"/>
                        <line x1="140" y1="14" x2="108" y2="73" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
                        <line x1="140" y1="14" x2="168" y2="67" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
                        {/* Pulse rings on hotspot */}
                        <circle cx="140" cy="100" r="18" fill="white" fillOpacity="0.06"/>
                        <circle cx="140" cy="100" r="7" fill="white" fillOpacity="0.12"/>
                      </svg>
                    )}
                  </div>
                  {/* Bottom gradient for text readability */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 45%, transparent 100%)" }} />
                  {/* Content */}
                  <div className="relative z-10 p-5">
                    <span className="text-[10px] font-black text-white/35 tracking-[0.25em] block mb-1">{t.num}</span>
                    <h3 className="text-xl font-black text-white leading-tight">{t.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <h4 className="text-xs text-white/65">{t.titleCn}</h4>
                      <span className="text-[10px] bg-white/15 border border-white/20 px-2 py-0.5 rounded-full text-white/85 font-semibold backdrop-blur-sm">{t.partner}</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 bg-white flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{t.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6366f1] hover:gap-2 transition-all">
              查看完整赛道介绍 <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DREAM → DARE → DO → DEMO ── */}
      <section className="py-28 px-6" style={{ background: "linear-gradient(160deg, #0f0e2a 0%, #1a1560 55%, #0f0e2a 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.22em] text-indigo-400 uppercase mb-3">Our Philosophy</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              <span className="gradient-text">DREAM</span>
              <span className="text-white/30 mx-3">→</span>
              <span className="gradient-text">DARE</span>
              <span className="text-white/30 mx-3">→</span>
              <span className="gradient-text">DO</span>
              <span className="text-white/30 mx-3">→</span>
              <span className="gradient-text">DEMO</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm">{t("VentureD 的创造哲学——每一个改变世界的想法，都从这四步开始", "VentureD's creative philosophy — every world-changing idea starts with these four steps.")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", word: "DREAM", cn: t("先允许一个想法发生", "Let an idea happen first"), desc: t("不要急着判断它是否可行。给自己一个开放的空间，让创意浮现，让可能性生长。", "Don't rush to judge feasibility. Give yourself an open space for creativity to emerge and possibilities to grow."), icon: "✦", color: "#6366f1", grad: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
              { num: "02", word: "DARE", cn: t("敢于跨过边界", "Dare to cross the line"), desc: t("大多数人止步于此。勇敢意味着把想法说出口，找到队友，踏入陌生领域。", "Most people stop here. Being brave means saying your idea out loud, finding teammates, and stepping into the unknown."), icon: "◈", color: "#8b5cf6", grad: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
              { num: "03", word: "DO", cn: t("用 Vibe Coding 把想法做具体", "Make it real with Vibe Coding"), desc: t("48 小时，用 AI 工具写代码、造原型、跑流程。行动是最好的思考方式。", "48 hours. Use AI tools to write code, build prototypes, and run flows. Action is the best form of thinking."), icon: "◎", color: "#ec4899", grad: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)" },
              { num: "04", word: "DEMO", cn: t("让想法成为可运行的作品", "Turn your idea into a running demo"), desc: t("不是 PPT，是 Demo。站上舞台，展示你真正创造出来的东西，让世界看见它。", "Not a slide deck — a Demo. Take the stage, show what you actually built, and let the world see it."), icon: "◆", color: "#f97316", grad: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)" },
            ].map((step) => (
              <div key={step.num} className="relative rounded-3xl overflow-hidden border border-white/10 group hover:-translate-y-1 transition-all duration-300">
                {/* Background */}
                <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.14] transition-opacity" style={{ background: step.grad }} />
                <div className="relative z-10 p-7">
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-white/30 tracking-[0.25em]">{step.num}</span>
                    <span className="text-2xl" style={{ color: step.color }}>{step.icon}</span>
                  </div>
                  {/* Word */}
                  <div className="text-3xl font-black mb-1" style={{ background: step.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {step.word}
                  </div>
                  {/* Chinese subtitle */}
                  <div className="text-white font-bold text-sm mb-4">{step.cn}</div>
                  {/* Divider */}
                  <div className="h-px mb-4" style={{ background: `linear-gradient(to right, ${step.color}55, transparent)` }} />
                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVE CORE EXPERIENCES — bg-city.jpg with purple overlay ── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(79,70,229,0.93) 0%, rgba(109,40,217,0.91) 50%, rgba(99,102,241,0.92) 100%)",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-56 shrink-0">
              <p className="text-sm font-bold tracking-[0.2em] text-indigo-300 uppercase mb-3">Five Core Experiences</p>
              <h2 className="text-5xl font-black text-white leading-tight mb-5">{t("五大", "Five")}<br />{t("体验", "Experiences")}</h2>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-300 hover:text-white hover:gap-2 transition-all">{t("查看更多", "Learn More")} <span>→</span></Link>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {experiences.map((e, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-3xl mb-4">{e.icon}</div>
                  <h4 className="font-bold text-white text-sm leading-snug mb-2">{e.title}</h4>
                  <p className="text-[13px] text-indigo-200 leading-relaxed whitespace-pre-line">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD JOIN ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Who Should Join</p>
            <h2 className="text-5xl font-black text-[#0f0e2a] leading-tight mb-4">{t("谁应该参加？", "Who Should Join?")}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">{t("无论你是在校学生还是年轻创造者，都能找到属于你的舞台", "Whether you're a student or a young creator, there's a stage here for you.")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                code: "DISCOVERY DIVISION",
                name: t("中学生组", "High School"),
                age: t("14–18 岁", "Age 14–18"),
                emoji: "🎓",
                grad: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
                tag: t("高中在校生", "High School Students"),
                focus: t("强调创意、观察力与基础 Demo 展示", "Focus on creativity, observation, and basic Demo presentation"),
                points: [t("发现真实生活问题", "Discover real-world problems"), t("提出有价值的创意方向", "Propose valuable creative directions"), t("完成可体验的基础 Demo", "Complete an experiential basic Demo")],
              },
              {
                code: "DELTA DIVISION",
                name: t("大学生组", "University"),
                age: t("18–24 岁", "Age 18–24"),
                emoji: "🚀",
                grad: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
                tag: t("大学 / 研究生", "University / Graduate"),
                focus: t("强调产品完整度、用户洞察与 Demo 质量", "Focus on product completeness, user insight, and Demo quality"),
                points: [t("深度用户需求分析", "Deep user needs analysis"), t("构建完整产品原型", "Build a complete product prototype"), t("高质量 Demo 展示与答辩", "High-quality Demo presentation and Q&A")],
              },
              {
                code: "DEEP SPACE DIVISION",
                name: t("开放展示组", "Open Division"),
                age: t("25 岁以上", "Age 25+"),
                emoji: "🌌",
                grad: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
                tag: t("开放参与", "Open Participation"),
                focus: t("可参与展示或特别挑战，不进入主奖项竞争", "Can participate in showcases or special challenges, not competing for main prizes"),
                points: [t("参与特别挑战赛道", "Join special challenge tracks"), t("展示前沿创意与探索", "Showcase frontier ideas and exploration"), t("对接国际资源与导师", "Connect with international resources and mentors")],
              },
            ].map((div) => (
              <div key={div.code} className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Gradient header */}
                <div className="relative p-8 pb-10" style={{ background: div.grad }}>
                  {/* Watermark emoji */}
                  <span className="absolute right-5 bottom-2 text-[88px] opacity-[0.12] select-none leading-none">{div.emoji}</span>
                  {/* Code label */}
                  <div className="text-[10px] font-black tracking-[0.25em] text-white/50 mb-4">{div.code}</div>
                  {/* Age badge */}
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white font-semibold mb-4 inline-block">{div.age}</span>
                  <h3 className="text-3xl font-black text-white mt-2 mb-1">{div.name}</h3>
                  <div className="text-sm text-white/70">{div.tag}</div>
                </div>
                {/* Content */}
                <div className="bg-white flex-1 p-7 flex flex-col">
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed border-b border-gray-100 pb-5">{div.focus}</p>
                  <ul className="space-y-3 flex-1">
                    {div.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 mt-0.5"
                          style={{ background: div.grad }}>{j + 1}</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT SCHEDULE ── */}
      <section className="py-28 px-6 relative overflow-hidden" style={{
        background: "linear-gradient(160deg, #0d0c28 0%, #1e1a5e 50%, #0d0c28 100%)",
      }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Event Schedule</p>
            <h2 className="text-5xl font-black text-white leading-tight mb-4">{t("48 小时赛事流程", "48-Hour Event Schedule")}</h2>
            <p className="text-white/50 max-w-lg mx-auto">{t("2026 年 8 月 27 日 — 29 日 · 中国 · 杭州", "August 27–29, 2026 · Hangzhou, China")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                day: "Day 1", date: t("08.27 周四", "08.27 Thu"), label: t("开幕 · 组队 · 启动", "Opening · Teams · Kickoff"), color: "#6366f1",
                timelineItems: [
                  { time: "09:00", event: t("签到 & 开幕式", "Check-in & Opening Ceremony"), icon: "🎉" },
                  { time: "10:00", event: t("灵感分享 & 技术体验", "Idea Sharing & Tech Experience"), icon: "💡" },
                  { time: "13:00", event: t("团队组建 & 黑客松开始", "Team Formation & Hackathon Kickoff"), icon: "🤝" },
                ],
              },
              {
                day: "Day 2", date: t("08.28 周五", "08.28 Fri"), label: t("冲刺 · 开发 · 狂欢", "Sprint · Build · Party"), color: "#f97316",
                timelineItems: [
                  { time: "00:00", event: t("项目开发 & 导师辅导", "Project Dev & Mentor Support"), icon: "💻" },
                  { time: "19:00", event: t("Dream Disco 派对之夜", "Dream Disco Party Night"), icon: "🪩" },
                  { time: "22:00", event: t("最后冲刺阶段", "Final Sprint Phase"), icon: "🚀" },
                ],
              },
              {
                day: "Day 3", date: t("08.29 周六", "08.29 Sat"), label: t("Demo · 颁奖 · 闭幕", "Demo · Awards · Closing"), color: "#10b981",
                timelineItems: [
                  { time: "00:00", event: t("最后冲刺 & 提交", "Final Sprint & Submission"), icon: "⏰" },
                  { time: "13:00", event: t("Final Demo Day 展示", "Final Demo Day"), icon: "🏆" },
                  { time: "17:00", event: t("颁奖典礼 & 闭幕", "Awards Ceremony & Closing"), icon: "🎊" },
                ],
              },
            ].map((d) => (
              <div key={d.day} className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
                {/* Header */}
                <div className="p-7 relative overflow-hidden" style={{ background: `${d.color}22`, borderBottom: `1px solid ${d.color}44` }}>
                  {/* Giant date watermark */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black select-none leading-none opacity-[0.12] text-white"
                    style={{ fontSize: "6rem" }}>{d.date.split(".")[1]}</span>
                  <div className="relative z-10">
                    <div className="text-xs font-black tracking-[0.2em] mb-2" style={{ color: d.color }}>{d.day}</div>
                    <div className="text-white font-black text-2xl mb-1">{d.date}</div>
                    <div className="text-white/50 text-sm">{d.label}</div>
                  </div>
                </div>
                {/* Timeline items */}
                <div className="p-6 space-y-0">
                  {d.timelineItems.map((item, j) => (
                    <div key={j} className="flex gap-4 relative">
                      {/* Vertical line */}
                      {j < d.timelineItems.length - 1 && (
                        <div className="absolute left-[19px] top-[32px] bottom-0 w-px" style={{ background: `${d.color}30` }} />
                      )}
                      {/* Icon dot */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-base shrink-0 relative z-10"
                        style={{ background: `${d.color}22`, border: `1.5px solid ${d.color}55` }}>
                        {item.icon}
                      </div>
                      <div className="pb-6">
                        <div className="text-xs font-black tracking-wider mb-1" style={{ color: d.color }}>{item.time}</div>
                        <div className="text-white/80 text-sm font-medium leading-snug">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VENTURED — bg-scene.jpg with dark overlay ── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-scene.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,8,36,0.88)" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: checklist */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Why VentureD</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
                {t("为什么选择", "Why Choose")}<br /><span className="gradient-text">VentureD</span>？
              </h2>
              <div className="space-y-6">
                {whyItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "48H", label: t("极限创造", "Extreme Creation"), sub: "Hackathon Hours" },
                { num: "1000+", label: t("青年创造者", "Youth Creators"), sub: "Youth Creators" },
                { num: "4", label: t("全球赛道", "Global Tracks"), sub: "Global Tracks" },
                { num: "∞", label: t("无限可能", "Possibilities"), sub: "Possibilities" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-all"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
                >
                  <div className="text-3xl font-black gradient-text mb-2">{stat.num}</div>
                  <div className="text-white font-bold text-sm mb-0.5">{stat.label}</div>
                  <div className="text-white/40 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS — infinite marquee ── */}
      <section className="py-24 px-6 border-t border-indigo-100/50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-[#6366f1] uppercase mb-3">Our Partners</p>
          <h2 className="text-5xl font-black text-[#0f0e2a] mb-4">{t("合作伙伴", "Our Partners")}</h2>
          <p className="text-gray-500">{t("与全球顶尖科技企业共同赋能青年创造", "Empowering young creators alongside the world's leading tech companies")}</p>
        </div>
        {/* Marquee strip — duplicate list for seamless loop */}
        <div className="overflow-hidden select-none">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="mx-5 bg-white rounded-2xl border border-gray-100 shadow-sm py-5 px-8 flex items-center justify-center shrink-0 hover:shadow-md hover:border-indigo-100 transition-all"
                style={{ minWidth: "180px", height: "80px" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-10 max-w-[148px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">更多合作伙伴即将公布 · More partners coming soon</p>
      </section>

      {/* ── CTA BANNER with crystal decorations ── */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl px-12 py-20 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #3730a3 0%, #4f46e5 40%, #6366f1 70%, #8b5cf6 100%)" }}>

            {/* Crystal decoration — right side */}
            <div className="absolute right-0 top-0 h-full pointer-events-none overflow-hidden" style={{ width: "38%" }}>
              <svg className="absolute right-[-8%] top-1/2 -translate-y-1/2 h-[160%] w-full opacity-[0.13]" viewBox="0 0 300 400" fill="none" preserveAspectRatio="xMaxYMid meet">
                <polygon points="150,0 300,120 255,360 45,360 0,120" fill="white" />
                <polygon points="150,28 270,130 232,330 68,330 30,130" stroke="white" strokeWidth="2" fill="none" />
                <polygon points="150,60 240,140 210,300 90,300 60,140" stroke="white" strokeWidth="1" fill="none" opacity="0.55" />
                <polygon points="150,95 210,155 190,270 110,270 90,155" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
              </svg>
            </div>

            {/* Crystal accent — left bottom */}
            <div className="absolute left-0 bottom-0 pointer-events-none overflow-hidden opacity-10" style={{ width: "14%", height: "120%" }}>
              <svg className="absolute left-[-20%] bottom-[-10%] w-full h-full" viewBox="0 0 120 240" fill="none">
                <polygon points="60,0 120,60 95,200 25,200 0,60" fill="white" />
                <polygon points="60,20 100,70 82,180 38,180 20,70" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Glow orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

            <div className="relative max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                {t("准备好开启你的", "Ready to Start Your")}<br />{t("VentureD Hackathon 之旅了吗？", "VentureD Hackathon Journey?")}
              </h2>
              <p className="text-indigo-200 text-base mb-10 leading-relaxed">
                {t("加入全球青年创造者浪潮，推动 Agent 改变真实世界。", "Join the global wave of young creators — let AI Agents change the real world.")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={regUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm shadow-lg hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}>
                  {t("黑客松报名 →", "Hackathon Registration →")}
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 border-white/35 text-white hover:bg-white/10 transition-all">
                  {t("合作咨询 →", "Partner With Us →")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOAI PARTNER BANNER ── */}
      <section className="py-8 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <a
            href="https://www.goaihz.com/?channel=vd"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl overflow-hidden relative group cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #0a1a6e 0%, #1a3a9e 40%, #0e2580 70%, #06145a 100%)", minHeight: "220px" }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { size: 28, top: "15%", right: "42%", color: "#22d3ee", opacity: 0.85 },
                { size: 48, top: "30%", right: "37%", color: "#4ade80", opacity: 0.9 },
                { size: 72, top: "45%", right: "30%", color: "#86efac", opacity: 0.85 },
                { size: 100, top: "55%", right: "20%", color: "#fbbf24", opacity: 0.9 },
                { size: 130, top: "40%", right: "8%",  color: "#fb923c", opacity: 0.85 },
                { size: 80,  top: "70%", right: "3%",  color: "#f87171", opacity: 0.75 },
                { size: 40,  top: "10%", right: "28%", color: "#a3e635", opacity: 0.7 },
                { size: 20,  top: "75%", right: "35%", color: "#34d399", opacity: 0.65 },
                { size: 55,  top: "20%", right: "15%", color: "#60a5fa", opacity: 0.6 },
                { size: 35,  top: "62%", right: "44%", color: "#fde68a", opacity: 0.55 },
              ].map((c, i) => (
                <div key={i} className="absolute rounded-full"
                  style={{ width: c.size, height: c.size, top: c.top, right: c.right, background: c.color, opacity: c.opacity, filter: "blur(0.5px)" }} />
              ))}
            </div>
            <div className="relative z-10 px-10 py-10 flex flex-col justify-between h-full" style={{ minHeight: "220px" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-white font-black text-2xl tracking-tight">G</span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "conic-gradient(#22d3ee, #4ade80, #fbbf24, #fb923c, #f87171, #22d3ee)" }}>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0e2580]" />
                </div>
                <span className="text-white font-black text-2xl tracking-tight">AI</span>
                <div className="ml-1 border-l border-white/30 pl-2">
                  <div className="text-white/80 text-[10px] font-semibold leading-tight">世界人工智能</div>
                  <div className="text-white/80 text-[10px] font-semibold leading-tight">开源大赛</div>
                </div>
              </div>
              <div className="max-w-lg">
                <h3 className="text-white font-black leading-tight mb-1" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>
                  {t("世界人工智能开源大赛", "Global Open-source AI Challenge")}
                </h3>
                <p className="text-white font-bold text-lg mb-1" style={{ opacity: 0.9 }}>Global Open-source AI Challenge</p>
                <p className="text-white/60 text-sm mb-6">{t("开放 · 共享 · 共建", "Open · Share · Build")}</p>
                <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-[#0a1a6e] group-hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg, #a3e635, #4ade80)" }}>
                  {t("立即报名 →", "Register Now →")}
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
}
