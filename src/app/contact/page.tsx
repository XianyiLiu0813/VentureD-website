"use client";

import { useState } from "react";

const contactMethods = [
  { icon: "✉️", label: "Email", value: "hello@ventured-hackathon.com", desc: "工作日 24 小时内回复" },
  { icon: "💬", label: "微信", value: "VentureD_Hackathon", desc: "扫码关注，获取最新资讯" },
  { icon: "📍", label: "地址", value: "中国 · 杭州", desc: "Hangzhou, China" },
];

const partnerTypes = [
  { emoji: "🏢", title: "企业合作", desc: "赞助商、联合主办、品牌合作" },
  { emoji: "🎓", title: "导师 / 评委", desc: "分享经验，激励下一代创造者" },
  { emoji: "🧑‍💻", title: "参赛选手", desc: "带着你的想法，来创造改变" },
  { emoji: "🤝", title: "战略合作伙伴", desc: "生态共建，互利共赢" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* Hero */}
      <section className="bg-[#e8e0ff] py-28 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="tag mx-auto mb-6">联系我们</div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0f0e2a] mb-6 leading-tight">
            让我们一起<span className="gradient-text">创造</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            无论你是想报名参赛、合作赞助，还是只是想聊聊创意，我们都很乐意听
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-[#ece8ff] py-16 border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {partnerTypes.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 text-center hover:border-indigo-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h4 className="text-[#0f0e2a] font-bold text-sm mb-2">{p.title}</h4>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="text-3xl font-black text-[#0f0e2a] mb-8">发送消息</h2>
              {submitted ? (
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-[#0f0e2a] font-bold text-xl mb-3">消息已发送！</h3>
                  <p className="text-gray-500">感谢你的联系，我们会在 24 小时内回复你。</p>
                  <button
                    className="mt-6 px-6 py-2.5 rounded-full border-2 border-indigo-200 text-[#6366f1] font-semibold text-sm hover:bg-indigo-50 transition-all"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", type: "", message: "" }); }}
                  >
                    发送新消息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">姓名 *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="你的名字"
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">邮箱 *</label>
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
                    <label className="block text-gray-600 text-sm mb-2">合作类型</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] focus:outline-none focus:border-[#6366f1] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">请选择</option>
                      <option value="sponsor">企业赞助 / 合作</option>
                      <option value="mentor">导师 / 评委</option>
                      <option value="participant">参赛报名</option>
                      <option value="partner">战略合作</option>
                      <option value="media">媒体合作</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-2">消息 *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="告诉我们你的想法..."
                      className="w-full bg-[#ece8ff] border border-indigo-100 rounded-xl px-4 py-3 text-[#0f0e2a] placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-white font-bold text-base shadow-lg hover:opacity-90 transition-all"
                    style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                  >
                    发送消息 →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-[#0f0e2a] mb-8">联系方式</h2>
              <div className="space-y-4 mb-12">
                {contactMethods.map((c, i) => (
                  <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-start gap-5">
                    <div className="text-3xl shrink-0">{c.icon}</div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{c.label}</div>
                      <div className="text-[#0f0e2a] font-semibold mb-1">{c.value}</div>
                      <div className="text-gray-500 text-sm">{c.desc}</div>
                    </div>
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
                    <span>中国 · 杭州，Hangzhou, China</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-base">👥</span>
                    <span>1000+ 青年创造者</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-base">⏱️</span>
                    <span>48 小时极限创造</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-indigo-100">
                  <p className="text-gray-400 text-xs">
                    赞助商报名截止：2026.07.31 · 参赛报名开放中
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-gray-500 text-sm mb-4">关注我们获取最新动态</p>
                <div className="flex gap-3">
                  {[
                    { label: "微信", short: "微" },
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
      <section className="bg-[#ece8ff] py-24 border-t border-indigo-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0f0e2a] mb-4">
              常见<span className="gradient-text">问题</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "谁可以参加 VentureD Hackathon？", a: "所有 14 岁以上的青年创造者均可报名参与。我们设有 Discovery Division（中学生组）和 Delta Division（大学生及开发者组）两个组别。" },
              { q: "Hackathon 需要提前有 AI 基础吗？", a: "不需要！我们会提供技术工作坊和导师辅导。重要的是你有想法和热情，我们来帮你把它变成现实。" },
              { q: "企业如何成为赞助商？", a: "请通过上方联系表单或发送邮件至 hello@ventured-hackathon.com 与我们联系，我们会在 24 小时内回复并发送赞助方案。" },
              { q: "比赛奖励是什么？", a: "总奖金池丰厚，并有来自腾讯、蚂蚁集团、微软、英伟达等顶尖企业导师的专业指导与资源对接。详情请关注官方公告。" },
            ].map((faq, i) => (
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
