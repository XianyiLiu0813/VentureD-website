import Link from "next/link";
import VDLogo from "./VDLogo";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(180deg, #1a1740 0%, #0f0e2a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <VDLogo size={40} id="footer" />
            <div className="mt-3 leading-tight">
              <div className="font-black text-sm tracking-tight">VENTURED</div>
              <div className="font-black text-sm tracking-tight" style={{ color: "#f97316" }}>
                HACKATHON
              </div>
            </div>
            <p
              className="text-gray-400 text-sm mt-2 italic"
              style={{ fontFamily: "var(--font-dancing), cursive" }}
            >
              Agent for the Real World
            </p>
          </div>

          {/* 快速导航 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              快速导航
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">赛事介绍</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">赛道</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">联系方式</Link></li>
              <li><Link href="/services#guide" className="hover:text-white transition-colors">参赛指南</Link></li>
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              资源
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/contact" className="hover:text-white transition-colors">合作伙伴</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">赞助方案</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">新闻 & 媒体</Link></li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              联系我们
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>Email: hello@ventured-hackathon.com</li>
              <li>WeChat: VentureD_Hackathon</li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              关注我们
            </h4>
            <div className="flex gap-2 flex-wrap">
              {[
                { label: "微信", icon: "微" },
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
