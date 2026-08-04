"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(180deg, #1a1740 0%, #0f0e2a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white rounded-xl px-3 py-2 inline-block">
              <img src="/images/logo-full.jpg" alt="VentureD" className="h-8 w-auto object-contain" />
            </div>
            <div className="mt-4 leading-tight">
              <div className="font-black text-sm tracking-tight text-gray-400">HACKATHON</div>
            </div>
            <p className="text-gray-500 text-xs mt-3 italic" style={{ fontFamily: "var(--font-dancing), cursive" }}>
              Agent for the Real World
            </p>
            <div
              className="mt-5 inline-flex items-end rounded-2xl overflow-hidden"
              style={{ width: "52px", height: "66px", background: "rgba(255,255,255,0.92)" }}
            >
              <img src="/images/mascot/mascot-boba.png" alt="D" className="w-full h-full object-contain" style={{ filter: "brightness(1.15)" }} />
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              {t("快速导航", "Quick Links")}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">{t("赛事介绍", "About")}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t("赛道", "Tracks")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("联系方式", "Contact")}</Link></li>
              <li><Link href="/services#guide" className="hover:text-white transition-colors">{t("参赛指南", "Participant Guide")}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              {t("资源", "Resources")}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("合作伙伴", "Partners")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("赞助方案", "Sponsorship")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t("新闻 & 媒体", "News & Media")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              {t("联系我们", "Contact Us")}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>Email: hello@ventured-hackathon.com</li>
              <li>WeChat: VentureD_Hackathon</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              {t("关注我们", "Follow Us")}
            </h4>
            <div className="flex gap-2 flex-wrap items-start">
              {/* WeChat with QR popup */}
              <div className="relative group">
                <button
                  aria-label="WeChat"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-bold text-gray-300 hover:border-[#07c160] hover:text-[#07c160] transition-colors"
                >
                  微
                </button>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden group-hover:block z-20">
                  <div className="bg-white rounded-2xl p-3 shadow-xl border border-gray-100 flex flex-col items-center gap-2">
                    <img src="/images/qr-wechat.jpg" alt="WeChat QR" className="w-28 h-28 rounded-xl object-contain" />
                    <p className="text-[10px] text-gray-400 whitespace-nowrap">VentureDHackathon</p>
                  </div>
                  <div className="w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 mx-auto -mt-1.5" />
                </div>
              </div>
              {[
                { label: "LinkedIn", icon: "in" },
                { label: "X", icon: "𝕏" },
                { label: "Instagram", icon: "◉" },
                { label: "YouTube", icon: "▶" },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-bold text-gray-300 hover:border-white hover:text-white transition-colors"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            © 2026 VentureD Hackathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
