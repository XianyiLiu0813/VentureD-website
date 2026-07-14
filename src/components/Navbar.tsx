"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import VDLogo from "./VDLogo";

const navLinks = [
  { href: "/", label: "首页", sub: "Home" },
  { href: "/about", label: "赛事介绍", sub: "About" },
  { href: "/services", label: "赛道", sub: "Tracks" },
  { href: "/contact", label: "合作伙伴", sub: "Partners" },
  { href: "/about#team", label: "团队", sub: "Team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <VDLogo size={36} id="nav" />
          <span className="text-base font-black text-[#0f0e2a] tracking-tight hidden sm:block">
            Venture<span style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>D</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center text-center transition-colors duration-200 group ${
                pathname === link.href ? "text-[#6366f1]" : "text-gray-600 hover:text-[#6366f1]"
              }`}
            >
              <span className="text-xs font-semibold leading-tight">{link.label}</span>
              {link.sub && <span className="text-[10px] text-gray-400 group-hover:text-[#a5b4fc] transition-colors">{link.sub}</span>}
            </Link>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white px-5 py-2 rounded-full text-xs font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all whitespace-nowrap"
          >
            立即报名 Apply Now →
          </Link>
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
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white text-center px-5 py-2.5 rounded-full text-sm font-bold mt-2"
            onClick={() => setMenuOpen(false)}
          >
            立即报名 Apply Now →
          </Link>
        </div>
      )}
    </header>
  );
}
