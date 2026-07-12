import Link from "next/link";

const team = [
  {
    name: "Andy",
    role: "联合发起人",
    img: "/images/team/andy.png",
    desc: "UCB 本科 | MIT Sloan MBA。曾举办 100+ 场创业活动，操盘 2000+ 人创新比赛。负责黑客松机制设计、国际化项目策划与青年创新生态连接。",
    tags: ["MIT Sloan MBA", "创新比赛", "国际化"],
  },
  {
    name: "Xianyi",
    role: "联合发起人",
    img: "/images/team/xianyi.png",
    desc: "00 后青年代表。南洋理工大学商学院，第三十届 NTU 中国留学生会主席。负责新加坡资源链接、青年社群协同与国际舞台连接。",
    tags: ["NTU 商学院", "00后", "国际资源"],
  },
  {
    name: "Nicole",
    role: "联合发起人",
    img: "/images/team/nicole.png",
    desc: "荣晟文化科技创始人，前涂鸦智能全球品牌负责人。擅长科技品牌战略与全球传播，负责 VentureD 总项目统筹与品牌打造传播。",
    tags: ["品牌战略", "全球传播", "项目统筹"],
  },
  {
    name: "Yann",
    role: "联合发起人",
    img: "/images/team/yann.png",
    desc: "沃顿商学院 | 克莱蒙特·麦肯纳学院经济学 & 金融学学士与硕士。拥有多年香港头部投行资产管理从业经历，负责活动生态统筹与资源整合。",
    tags: ["沃顿商学院", "投行背景", "资源整合"],
  },
];


const values = [
  { emoji: "🚀", title: "创造优先", desc: "我们相信行动的力量。想法只有付诸实践，才能改变世界。" },
  { emoji: "🌍", title: "全球视野", desc: "立足中国，面向全球。创意没有边界，创造者也不该有。" },
  { emoji: "🤝", title: "共同成长", desc: "不是零和游戏，而是生态共建。每个人的成功都让社区更强大。" },
  { emoji: "⚡", title: "极速迭代", desc: "快速验证，快速学习，快速进化。速度是我们的核心竞争力。" },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* Hero */}
      <section className="bg-[#e8e0ff] py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="tag mx-auto mb-6">关于 VentureD</div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0f0e2a] mb-6 leading-tight">
            创意穿出<span className="gradient-text">地球</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            我们是一群相信「创意可以改变世界」的年轻人，
            正在用科技与热情重新定义青年创新的边界。
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#ece8ff] py-24 border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-6">我们的使命</div>
              <h2 className="text-4xl font-black text-[#0f0e2a] mb-6">
                为每一位<span className="gradient-text">创造者</span><br />
                提供改变世界的机会
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                VentureD 成立于杭州，是一个专注于 AI Agent 与青年创新的科技公司与创造者社区。
                我们相信，当技术遇上创意，当年轻人拥有正确的平台与资源，
                一切皆有可能。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们正在构建一个以 AI Agent 为核心的青年创新舞台——
                从 48 小时极限 Hackathon，到沉浸式 D-Camp 营地体验；
                从全球导师生态，到资本与出海资源对接——
                VentureD 致力于打造<span className="text-[#6366f1] font-semibold">让创意真正穿出地球的平台</span>。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm">
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
            <div className="tag mx-auto mb-4">核心团队</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              认识 <span className="gradient-text">VentureD 团队</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              一群热爱科技、痴迷创造的年轻人，正在用行动证明创意的力量
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md hover:border-indigo-100 transition-all">
                <div className="bg-[#ece8ff] h-56 flex items-end justify-center overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-auto object-contain object-bottom"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#0f0e2a] font-bold text-lg mb-1">{m.name}</h3>
                  <p className="text-[#6366f1] text-xs font-medium mb-3">{m.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{m.desc}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {m.tags.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="bg-[#ece8ff] py-24 border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center gap-4">
              {[
                { src: "/images/mascot/mascot-peace.png", alt: "D 吉祥物 · 比耶" },
                { src: "/images/mascot/mascot-celebrate.png", alt: "D 吉祥物 · 庆祝" },
                { src: "/images/mascot/mascot-boba.png", alt: "D 吉祥物 · 喝茶" },
              ].map((pose, i) => (
                <div
                  key={i}
                  className="w-32 h-44 rounded-2xl bg-white border border-indigo-100 shadow-sm overflow-hidden flex items-end justify-center"
                >
                  <img src={pose.src} alt={pose.alt} className="h-full w-auto object-contain object-bottom" />
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="tag mb-6">VentureD 吉祥物</div>
              <h2 className="text-4xl font-black text-[#0f0e2a] mb-6">
                认识 <span className="gradient-text">D</span> ——<br />
                我们的潮酷吉祥物
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                D 是一只永远充满活力的潮狗，戴着标志性的紫色棒球帽，
                身穿印有渐变「D」字的黑色卫衣，挂着 VentureD 定制耳机。
              </p>
              <p className="text-gray-600 leading-relaxed">
                D 代表着 VentureD 的精神：<span className="text-[#0f0e2a] font-medium">年轻、酷、不按套路出牌</span>，
                却始终充满创造力与热情。在每一场活动中，D 都是最活跃的那一个。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ece8ff] py-20 border-t border-indigo-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#0f0e2a] mb-4">
            想加入 VentureD 大家庭？
          </h2>
          <p className="text-gray-500 mb-8">
            我们始终在寻找热爱创造、敢于突破的伙伴。无论是合作伙伴还是团队成员，欢迎联系我们。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
          >
            联系我们 →
          </Link>
        </div>
      </section>

    </div>
  );
}
