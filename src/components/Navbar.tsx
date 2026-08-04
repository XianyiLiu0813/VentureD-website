"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const navLinksZh = [
  { href: "/", label: "首页", sub: "Home" },
  { href: "/about", label: "赛事介绍", sub: "About" },
  { href: "/services", label: "赛道", sub: "Tracks" },
  { href: "/contact", label: "合作伙伴", sub: "Partners" },
];

const navLinksEn = [
  { href: "/", label: "Home", sub: "首页" },
  { href: "/about", label: "About", sub: "赛事介绍" },
  { href: "/services", label: "Tracks", sub: "赛道" },
  { href: "/contact", label: "Partners", sub: "合作伙伴" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const navLinks = lang === "en" ? navLinksEn : navLinksZh;
  const regUrl = lang === "en"
    ? "https://docs.google.com/forms/d/e/1FAIpQLSd3heep5VmjnBZWjR-QzuAyf8qJ-_j00AOEUoyxyqoaYCzlTQ/viewform?usp=header"
    : "https://wj.qq.com/s2/27332848/a062/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.90)",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 4px 28px rgba(99,102,241,0.13), 0 1px 0 rgba(99,102,241,0.08)"
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
        {/* Logo — use the actual logo image directly */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/logo-full.jpg"
            alt="VentureD"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center text-center transition-colors duration-200 group ${
                pathname === link.href ? "text-[#6366f1]" : "text-gray-600 hover:text-[#6366f1]"
              }`}
            >
              <span className="text-sm font-semibold leading-tight">{link.label}</span>
              {link.sub && <span className="text-[11px] text-gray-400 group-hover:text-[#a5b4fc] transition-colors">{link.sub}</span>}
            </Link>
          ))}
        </nav>

        {/* Right: Lang toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="text-xs font-black tracking-wider border border-gray-200 rounded-full px-3.5 py-1.5 text-gray-500 hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <a
            href={regUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all whitespace-nowrap"
          >
            {lang === "zh" ? "立即报名 →" : "Apply Now →"}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-500 hover:text-[#6366f1]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-1 transition-colors ${
                pathname === link.href ? "text-[#6366f1]" : "text-gray-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label} {link.sub && <span className="text-gray-400 text-xs">{link.sub}</span>}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="flex-1 py-2.5 rounded-full border border-gray-200 text-xs font-black text-gray-500"
            >
              {lang === "zh" ? "Switch to EN" : "切换中文"}
            </button>
            <a
              href={regUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white text-center px-5 py-2.5 rounded-full text-sm font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {lang === "zh" ? "立即报名 →" : "Apply Now →"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
