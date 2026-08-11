"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const regUrl = lang === "en"
    ? "https://docs.google.com/forms/d/e/1FAIpQLSd3heep5VmjnBZWjR-QzuAyf8qJ-_j00AOEUoyxyqoaYCzlTQ/viewform?usp=header"
    : "https://wj.qq.com/s2/27332848/a062/";
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    { icon: "✉️", label: "Email", value: "hello@ventured-hackathon.com", desc: t("工作日 24 小时内回复", "Reply within 24 hours on weekdays"), qr: null },
    { icon: "💬", label: t("微信公众号", "WeChat Official"), value: "VentureDHackathon", desc: t("扫码关注或搜索公众号", "Scan QR or search on WeChat"), qr: "/images/qr-wechat.jpg" },
    { icon: "📍", label: t("地址", "Location"), value: t("中国 · 杭州", "Hangzhou, China"), desc: "Hangzhou, China", qr: null },
  ];

  const partnerTypes = [
    { emoji: "🏢", title: t("企业合作", "Corporate Partner"), desc: t("赞助商、联合主办、品牌合作", "Sponsor, co-organizer, brand partnership") },
    { emoji: "🎓", title: t("导师 / 评委", "Mentor / Judge"), desc: t("分享经验，激励下一代创造者", "Share experience, inspire the next generation") },
    { emoji: "🧑‍💻", title: t("参赛选手", "Participant"), desc: t("带着你的想法，来创造改变", "Bring your ideas and create change") },
    { emoji: "🤝", title: t("战略合作伙伴", "Strategic Partner"), desc: t("生态共建，互利共赢", "Co-build the ecosystem, mutual growth") },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("https://formspree.io/f/xoeadjra", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* Hero — bg-city.jpg with light lavender overlay */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "60vh",
          backgroundImage: "url('/images/bg-city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(238,234,255,0.84) 0%, rgba(225,216,255,0.76) 100%)",
          }}
        />
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center justify-center text-center"
          style={{ minHeight: "60vh", paddingTop: "110px", paddingBottom: "60px" }}
        >
          <div className="tag mx-auto mb-6">{t("联系我们", "Contact Us")}</div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0f0e2a] mb-6 leading-tight">
            {t("让我们一起", "Let's Build")}<span className="gradient-text">{t("创造", "Together")}</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            {t(
              "无论你是想报名参赛、合作赞助，还是只是想聊聊创意，我们都很乐意听",
              "Whether you want to register, sponsor, partner, or just share an idea — we'd love to hear from you."
            )}
          </p>
        </div>
      </section>

      {/* ── 报名入口 ── */}
      <section className="py-20 border-y border-indigo-100" style={{ background: "linear-gradient(135deg, #ede9ff 0%, #ddd6fe 60%, #e4e0ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: text + button */}
            <div className="flex-1 text-center lg:text-left">
              <div className="tag mb-5 lg:inline-flex">{t("参赛报名", "Register Now")}</div>
              <h2 className="text-4xl font-black text-[#0f0e2a] mb-4 leading-tight">
                {t("报名参加", "Apply for")}<br /><span className="gradient-text">VentureD Hackathon 2026</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                {t(
                  "扫描二维码或点击按钮填写报名问卷，名额有限，先到先得。报名后我们会通过邮件发送确认信息。",
                  "Scan the QR code or click the button to fill out the registration form. Spots are limited — first come, first served. We'll send a confirmation email after you apply."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={regUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all text-base"
                  style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                >
                  {t("立即填写报名问卷 →", "Fill Out Registration Form →")}
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                  {t("报名免费，2 分钟完成", "Free to apply, takes 2 minutes")}
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm lg:max-w-none">
                {partnerTypes.map((p, i) => (
                  <div key={i} className="bg-white/70 rounded-xl p-3.5 flex items-center gap-3 border border-white shadow-sm">
                    <span className="text-xl shrink-0">{p.emoji}</span>
                    <div>
                      <div className="text-xs font-bold text-[#0f0e2a]">{p.title}</div>
                      <div className="text-xs text-gray-400">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: QR code */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <div className="bg-white rounded-3xl p-5 shadow-lg border border-indigo-100">
                <img
                  src="/images/qr-signup.png"
                  alt={t("报名二维码", "Registration QR Code")}
                  className="w-52 h-52 object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                {t("微信扫一扫", "Scan with WeChat")}<br />{t("立即报名", "Register Now")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="text-3xl font-black text-[#0f0e2a] mb-8">{t("发送消息", "Send a Message")}</h2>
              {submitted ? (
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-[#0f0e2a] font-bold text-xl mb-3">{t("消息已发送！", "Message Sent!")}</h3>
                  <p className="text-gray-500">{t("感谢你的联系，我们会在 24 小时内回复你。", "Thanks for reaching out — we'll get back to you within 24 hours.")}</p>
                  <button
                    className="mt-6 px-6 py-2.5 rounded-full border-2 border-indigo-200 text-[#6366f1] font-semibold text-sm hover:bg-indigo-50 transition-all"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", type: "", message: "" }); }}
                  >
                    {t("发送新消息", "Send Another")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">{t("姓名 *", "Name *")}</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t("你的名字", "Your name")}
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">{t("邮箱 *", "Email *")}</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">{t("合作类型", "Partnership Type")}</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] focus:outline-none focus:border-[#6366f1] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">{t("请选择", "Select one")}</option>
                      <option value="sponsor">{t("企业赞助 / 合作", "Corporate Sponsorship / Partnership")}</option>
                      <option value="mentor">{t("导师 / 评委", "Mentor / Judge")}</option>
                      <option value="participant">{t("参赛报名", "Register as Participant")}</option>
                      <option value="partner">{t("战略合作", "Strategic Partnership")}</option>
                      <option value="media">{t("媒体合作", "Media Partnership")}</option>
                      <option value="other">{t("其他", "Other")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">{t("消息 *", "Message *")}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t("告诉我们你的想法...", "Tell us your idea...")}
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full text-white font-bold text-base shadow-lg hover:opacity-90 transition-all disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                  >
                    {submitting ? t("发送中...", "Sending...") : t("发送消息 →", "Send Message →")}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-[#0f0e2a] mb-8">{t("联系方式", "Contact Info")}</h2>
              <div className="space-y-4 mb-12">
                {contactMethods.map((c, i) => (
                  <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-start gap-5">
                    <div className="text-3xl shrink-0">{c.icon}</div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{c.label}</div>
                      <div className="text-[#0f0e2a] font-semibold mb-1">{c.value}</div>
                      <div className="text-gray-500 text-sm">{c.desc}</div>
                    </div>
                    {c.qr && (
                      <div className="shrink-0">
                        <img src={c.qr} alt="WeChat QR" className="w-20 h-20 rounded-xl object-contain border border-gray-100" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Event Info */}
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.06) 100%)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <h3 className="text-[#0f0e2a] font-bold text-lg mb-4">VentureD Hackathon 2026</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-base">📅</span>
                    <span>2026.08.27 – 08.29</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-base">📍</span>
                    <span>{t("中国 · 杭州", "Hangzhou, China")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-base">👥</span>
                    <span>1000+ {t("青年创造者", "Young Creators")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-base">⏱️</span>
                    <span>{t("48 小时极限创造", "48-Hour Extreme Creation")}</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-indigo-100">
                  <p className="text-gray-400 text-xs">
                    {t("赞助商报名截止：2026.07.31 · 参赛报名开放中", "Sponsor deadline: 2026.07.31 · Participant registration open")}
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-gray-500 text-sm mb-4">{t("关注我们获取最新动态", "Follow us for the latest updates")}</p>
                <div className="flex gap-3 items-start">
                  {/* WeChat with QR popup */}
                  <div className="relative group">
                    <button
                      aria-label="WeChat"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#07c160] hover:text-[#07c160] transition-colors text-xs font-bold"
                    >
                      微
                    </button>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden group-hover:block z-20">
                      <div className="bg-white rounded-2xl p-3 shadow-xl border border-gray-100 flex flex-col items-center gap-2">
                        <img src="/images/qr-wechat.jpg" alt="WeChat QR" className="w-32 h-32 rounded-xl object-contain" />
                        <p className="text-[10px] text-gray-400 whitespace-nowrap">VentureDHackathon</p>
                      </div>
                      <div className="w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 mx-auto -mt-1.5" />
                    </div>
                  </div>
                  {[
                    { label: "LinkedIn", short: "in" },
                    { label: "X", short: "𝕏" },
                    { label: "YouTube", short: "▶" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#6366f1] hover:text-[#6366f1] transition-colors text-xs font-bold"
                    >
                      {s.short}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-indigo-100" style={{ background: "linear-gradient(135deg, #ede9ff 0%, #ddd6fe 60%, #e4e0ff 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0f0e2a] mb-4">
              {t("常见", "Frequently Asked")}<span className="gradient-text">{t("问题", "Questions")}</span>
            </h2>
          </div>
          <div className="space-y-4">
            {(lang === "en" ? [
              { q: "Who can join VentureD Hackathon?", a: "All young creators aged 14 and above are welcome to apply. We have two divisions: Discovery Division (high school) and Delta Division (university students and developers)." },
              { q: "Do I need AI knowledge to participate?", a: "Not at all! We provide technical workshops and mentor guidance. What matters most is your ideas and passion — we'll help you turn them into reality." },
              { q: "How can a company become a sponsor?", a: "Please use the contact form above or email hello@ventured-hackathon.com. We'll respond within 24 hours and send over our sponsorship packages." },
              { q: "What are the prizes?", a: "We have a substantial prize pool plus professional mentorship and resource connections from leading companies. Details will be announced via official channels." },
            ] : [
              { q: "谁可以参加 VentureD Hackathon？", a: "所有 14 岁以上的青年创造者均可报名参与。我们设有 Discovery Division（中学生组）和 Delta Division（大学生及开发者组）两个组别。" },
              { q: "Hackathon 需要提前有 AI 基础吗？", a: "不需要！我们会提供技术工作坊和导师辅导。重要的是你有想法和热情，我们来帮你把它变成现实。" },
              { q: "企业如何成为赞助商？", a: "请通过上方联系表单或发送邮件至 hello@ventured-hackathon.com 与我们联系，我们会在 24 小时内回复并发送赞助方案。" },
              { q: "比赛奖励是什么？", a: "总奖金池丰厚，并有来自腾讯、蚂蚁集团、微软、英伟达等顶尖企业导师的专业指导与资源对接。详情请关注官方公告。" },
            ]).map((faq, i) => (
              <details key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm group">
                <summary className="px-6 py-5 text-[#0f0e2a] font-semibold cursor-pointer flex items-center justify-between select-none list-none">
                  {faq.q}
                  <span className="text-[#6366f1] text-lg group-open:rotate-45 transition-transform inline-block">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
