"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  const team = [
    {
      name: "Andy",
      role: t("联合发起人", "Co-Founder"),
      img: "/images/team/andy.png",
      desc: t(
        "UCB 本科 | MIT Sloan MBA。曾举办 100+ 场创业活动，操盘 2000+ 人创新比赛。负责黑客松机制设计、国际化项目策划与青年创新生态连接。",
        "UCB undergrad | MIT Sloan MBA. Has organized 100+ startup events and led competitions with 2000+ participants. Leads hackathon design, global program strategy, and youth innovation ecosystem."
      ),
      tags: ["MIT Sloan MBA", t("创新比赛", "Innovation Events"), t("国际化", "Global")],
    },
    {
      name: "Xianyi",
      role: t("联合发起人", "Co-Founder"),
      img: "/images/team/xianyi.png",
      desc: t(
        "00 后青年代表。南洋理工大学商学院，第三十届 NTU 中国留学生会主席。负责新加坡资源链接、青年社群协同与国际舞台连接。",
        "Gen-Z representative. NTU Business School, President of the 30th NTU Chinese Students Association. Leads Singapore resource networks, youth community coordination, and international platform connections."
      ),
      tags: ["NTU Business School", "Gen-Z", t("国际资源", "Global Resources")],
    },
    {
      name: "Nicole",
      role: t("联合发起人", "Co-Founder"),
      img: "/images/team/nicole.png",
      desc: t(
        "荣晟文化科技创始人，前涂鸦智能全球品牌负责人。擅长科技品牌战略与全球传播，负责 VentureD 总项目统筹与品牌打造传播。",
        "Founder of Rongsheng Culture Tech, former Global Brand Lead at Tuya Smart. Expert in tech brand strategy and global communications. Leads VentureD's overall project management and brand building."
      ),
      tags: [t("品牌战略", "Brand Strategy"), t("全球传播", "Global Comms"), t("项目统筹", "Ops")],
    },
    {
      name: "Yann",
      role: t("联合发起人", "Co-Founder"),
      img: "/images/team/yann.png",
      desc: t(
        "沃顿商学院 | 克莱蒙特·麦肯纳学院经济学 & 金融学学士与硕士。拥有多年香港头部投行资产管理从业经历，负责活动生态统筹与资源整合。",
        "Wharton School | Claremont McKenna College, BA & MA in Economics & Finance. Years of experience at top-tier Hong Kong investment banks. Leads event ecosystem coordination and resource integration."
      ),
      tags: ["Wharton", t("投行背景", "Investment Banking"), t("资源整合", "Resource Integration")],
    },
  ];

  const values = [
    {
      emoji: "🚀",
      title: t("创造优先", "Build First"),
      desc: t("我们相信行动的力量。想法只有付诸实践，才能改变世界。", "We believe in the power of action. Ideas only change the world when they're built."),
    },
    {
      emoji: "🌍",
      title: t("全球视野", "Global Lens"),
      desc: t("立足中国，面向全球。创意没有边界，创造者也不该有。", "Rooted in China, facing the world. Ideas have no borders — neither should creators."),
    },
    {
      emoji: "🤝",
      title: t("共同成长", "Grow Together"),
      desc: t("不是零和游戏，而是生态共建。每个人的成功都让社区更强大。", "Not a zero-sum game — it's ecosystem co-creation. Every win makes the community stronger."),
    },
    {
      emoji: "⚡",
      title: t("极速迭代", "Rapid Iteration"),
      desc: t("快速验证，快速学习，快速进化。速度是我们的核心竞争力。", "Validate fast, learn fast, evolve fast. Speed is our core competitive advantage."),
    },
  ];

  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* Hero — bg-city.jpg, lighter overlay so city breathes */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "68vh",
          backgroundImage: "url('/images/bg-city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(238,234,255,0.78) 0%, rgba(225,216,255,0.56) 42%, rgba(210,198,255,0.22) 68%, rgba(195,182,255,0.04) 86%, transparent 100%)",
          }}
        />
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col justify-center"
          style={{ minHeight: "68vh", paddingTop: "110px", paddingBottom: "60px" }}
        >
          <div className="max-w-lg">
            <div className="tag mb-6">{t("关于 VentureD", "About VentureD")}</div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1760] mb-6 leading-tight">
              {t("创意穿出", "Ideas That")}<br /><span className="gradient-text">{t("地球", "Break Boundaries")}</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {t(
                "我们是一群相信「创意可以改变世界」的年轻人，正在用科技与热情重新定义青年创新的边界。",
                "We are a group of young people who believe ideas can change the world — redefining the boundaries of youth innovation with technology and passion."
              )}
            </p>

            {/* Team preview + founding schools */}
            <div className="flex items-center gap-5 pt-6 border-t border-indigo-200/50">
              {/* Stacked team avatars */}
              <div className="flex -space-x-3 shrink-0">
                {["andy", "xianyi", "nicole", "yann"].map((name) => (
                  <div
                    key={name}
                    className="w-11 h-11 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm"
                  >
                    <img
                      src={`/images/team/${name}.png`}
                      alt={name}
                      className="w-full h-full object-contain object-bottom"
                      style={{ filter: "brightness(1.15)" }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-[#1a1760] font-bold text-sm">{t("4 位联合创始人", "4 Co-Founders")}</div>
                <div className="text-gray-500 text-xs mt-0.5 tracking-wide">MIT · NTU · Wharton · UCB</div>
              </div>
              <div className="ml-auto hidden sm:flex gap-4">
                <div className="text-center">
                  <div className="text-xl font-black text-[#1a1760]">2026</div>
                  <div className="text-xs text-gray-500">{t("首届黑客松", "Inaugural Edition")}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black text-[#1a1760]">1000+</div>
                  <div className="text-xs text-gray-500">{t("参赛目标", "Target Participants")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-y border-indigo-100" style={{ background: "linear-gradient(135deg, #ede9ff 0%, #ddd6fe 60%, #e4e0ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-6">{t("我们的使命", "Our Mission")}</div>
              <h2 className="text-4xl font-black text-[#0f0e2a] mb-6">
                {t("为每一位", "Give Every")}<span className="gradient-text">{t("创造者", "Creator")}</span><br />
                {t("提供改变世界的机会", "a Chance to Change the World")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  "VentureD 成立于杭州，是一个专注于 AI Agent 与青年创新的科技公司与创造者社区。我们相信，当技术遇上创意，当年轻人拥有正确的平台与资源，一切皆有可能。",
                  "VentureD was founded in Hangzhou — a tech company and creator community focused on AI Agents and youth innovation. We believe that when technology meets creativity, and when young people have the right platform and resources, anything is possible."
                )}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "我们正在构建一个以 AI Agent 为核心的青年创新舞台——从 48 小时极限 Hackathon，到沉浸式 D-Camp 营地体验；从全球导师生态，到资本与出海资源对接——VentureD 致力于打造",
                  "We are building a youth innovation stage centered on AI Agents — from 48-hour extreme Hackathons to immersive D-Camp experiences; from global mentor ecosystems to capital and international resource networks — VentureD is dedicated to creating"
                )}
                <span className="text-[#6366f1] font-semibold">{t("让创意真正穿出地球的平台", "a platform where ideas truly break through boundaries")}</span>。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-3xl mb-3">{v.emoji}</div>
                  <h4 className="text-[#0f0e2a] font-bold mb-2">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">{t("核心团队", "Core Team")}</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              {t("认识", "Meet the")}{" "}<span className="gradient-text">VentureD {t("团队", "Team")}</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("一群热爱科技、痴迷创造的年轻人，正在用行动证明创意的力量", "A group of young people passionate about technology and obsessed with creation — proving the power of ideas through action.")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md hover:border-indigo-100 hover:-translate-y-0.5 transition-all">
                <div className="bg-white h-64 flex items-end justify-center overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-auto object-contain object-bottom"
                    style={{ filter: "brightness(1.15)" }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#0f0e2a] font-bold text-lg mb-1">{m.name}</h3>
                  <p className="text-[#6366f1] text-xs font-medium mb-3">{m.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{m.desc}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {m.tags.map((tag) => <span key={tag} className="tag text-xs">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-24 border-y border-indigo-100" style={{ background: "linear-gradient(135deg, #ede9ff 0%, #ddd6fe 60%, #e4e0ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center gap-4">
              {[
                { src: "/images/mascot/mascot-peace.png", alt: t("D 吉祥物 · 比耶", "D Mascot · Peace") },
                { src: "/images/mascot/mascot-celebrate.png", alt: t("D 吉祥物 · 庆祝", "D Mascot · Celebrate") },
                { src: "/images/mascot/mascot-boba.png", alt: t("D 吉祥物 · 喝茶", "D Mascot · Chill") },
              ].map((pose, i) => (
                <div
                  key={i}
                  className="w-32 h-44 rounded-2xl bg-white border border-indigo-100 shadow-sm overflow-hidden flex items-end justify-center hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <img src={pose.src} alt={pose.alt} className="h-full w-auto object-contain object-bottom" />
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="tag mb-6">{t("VentureD 吉祥物", "VentureD Mascot")}</div>
              <h2 className="text-4xl font-black text-[#0f0e2a] mb-6">
                {t("认识", "Meet")}{" "}<span className="gradient-text">D</span> ——<br />
                {t("我们的潮酷吉祥物", "Our Iconic Mascot")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  "D 是一只永远充满活力的潮狗，戴着标志性的紫色棒球帽，身穿印有渐变「D」字的黑色卫衣，挂着 VentureD 定制耳机。",
                  "D is an ever-energetic trendy dog wearing an iconic purple baseball cap, a black hoodie with the gradient 'D' logo, and custom VentureD headphones."
                )}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("D 代表着 VentureD 的精神：", "D embodies the VentureD spirit: ")}
                <span className="text-[#0f0e2a] font-medium">{t("年轻、酷、不按套路出牌", "Young, cool, and unconventional")}</span>，
                {t(
                  "却始终充满创造力与热情。在每一场活动中，D 都是最活跃的那一个。",
                  "yet always full of creativity and passion. At every event, D is the most energetic one in the room."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — bg-scene.jpg with dark overlay */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-scene.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,8,36,0.84)" }} />
        {/* Crystal decoration */}
        <div className="absolute right-0 top-0 h-full pointer-events-none overflow-hidden opacity-10" style={{ width: "30%" }}>
          <svg className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-[150%] w-full" viewBox="0 0 250 350" fill="none">
            <polygon points="125,0 250,100 210,300 40,300 0,100" fill="white" />
            <polygon points="125,25 225,110 190,275 60,275 25,110" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            {t("想加入 VentureD 大家庭？", "Want to Join the VentureD Family?")}
          </h2>
          <p className="text-white/60 mb-8">
            {t(
              "我们始终在寻找热爱创造、敢于突破的伙伴。无论是合作伙伴还是团队成员，欢迎联系我们。",
              "We're always looking for partners who love to build and dare to break boundaries. Whether as a collaborator or team member, we'd love to hear from you."
            )}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
          >
            {t("联系我们 →", "Contact Us →")}
          </Link>
        </div>
      </section>

    </div>
  );
}
