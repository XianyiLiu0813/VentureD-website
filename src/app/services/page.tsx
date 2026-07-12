import Link from "next/link";

const tracks = [
  {
    number: "01",
    gradient: "from-[#6366f1] to-[#3b82f6]",
    title: "Hardware · 硬件创新",
    subtitle: "让 Agent 通过硬件触达到真实世界",
    desc: "从机器人、无人机、穿戴设备到智能终端，让 Agent 不再停留在屏幕中，而是拥有「感知、理解、执行」的能力。",
    features: [
      "机器人 × AI Agent 集成",
      "无人机智能控制",
      "穿戴设备与智能终端",
      "硬件感知与执行系统",
    ],
    tags: ["IoT", "机器人", "无人机", "穿戴设备"],
  },
  {
    number: "02",
    gradient: "from-[#8b5cf6] to-[#06b6d4]",
    title: "Global Commerce · 全球商业",
    subtitle: "让 Agent 用真实数据判断什么值得走向世界",
    desc: "基于真实市场数据、用户需求、行业趋势与出海场景，判断一个想法是否有机会成为面向全球市场的产品。",
    features: [
      "真实市场数据分析",
      "用户需求洞察 Agent",
      "出海场景验证",
      "全球商业机会判断",
    ],
    tags: ["E-commerce", "Fintech", "出海", "市场数据"],
  },
  {
    number: "03",
    gradient: "from-[#f472b6] to-[#6366f1]",
    title: "Deep Space · 深空探索",
    subtitle: "给天马行空的想法一个被创造的机会",
    desc: "面向那些更前沿、更大胆、甚至看似不切实际的创意，鼓励年轻人探索未来生活、未来科技与未来世界的全新可能。",
    features: [
      "前沿科技探索",
      "未来生活场景设计",
      "跨学科创新协作",
      "大胆想法原型验证",
    ],
    tags: ["Space Tech", "未来科技", "Deep Tech", "前沿探索"],
  },
];

const divisions = [
  {
    number: "01",
    name: "Discovery Division",
    label: "高中生组",
    age: "14–18 岁",
    gradient: "from-[#6366f1] to-[#3b82f6]",
    desc: "强调创意、观察力、表达与基础 Demo",
    points: ["发现真实问题", "提出有价值的创意", "完成基础 Demo 展示"],
  },
  {
    number: "02",
    name: "Delta Division",
    label: "大学生组",
    age: "18–24 岁",
    gradient: "from-[#8b5cf6] to-[#06b6d4]",
    desc: "强调产品完整度、用户洞察与 Demo 质量",
    points: ["产品完整度验证", "用户需求深度洞察", "高质量 Demo 交付"],
  },
  {
    number: "03",
    name: "Deep Space Division",
    label: "开放展示组",
    age: "25 岁以上",
    gradient: "from-[#f472b6] to-[#6366f1]",
    desc: "可参与展示或特别挑战，不进入主奖项竞争",
    points: ["特别挑战赛道", "展示前沿创意", "对接国际资源"],
  },
];

const competitionFlow = [
  {
    step: 1, name: "Dream Pitch", subtitle: "灵感提出", time: "周五 19:00",
    color: "#6366f1", checkpoint: false,
    items: ["提出想法", "找到队友", "明确方向"],
  },
  {
    step: 2, name: "Define Sprint", subtitle: "问题定义", time: "周五 20:00–23:00",
    color: "#7c3aed", checkpoint: false,
    items: ["明确用户痛点", "确定核心问题", "定义 MVP"],
  },
  {
    step: 3, name: "D-Check 1", subtitle: "Concept Lock", time: "周五 23:00–24:00",
    color: "#f59e0b", checkpoint: true,
    items: ["概念评审", "可行性验证", "锁定方向"],
  },
  {
    step: 4, name: "Develop", subtitle: "开发实现", time: "周六 00:00–10:00",
    color: "#3b82f6", checkpoint: false,
    items: ["选择武器", "AI Agent 开发", "硬件联调"],
  },
  {
    step: 5, name: "D-Check 2", subtitle: "Prototype Proof", time: "周六 10:00–12:00",
    color: "#ec4899", checkpoint: true,
    items: ["原型评审", "功能验证", "体验测试"],
  },
  {
    step: 6, name: "Delivery Sprint", subtitle: "打磨完善", time: "周六 12:00–16:00",
    color: "#06b6d4", checkpoint: false,
    items: ["完善功能", "优化体验", "准备展示材料"],
  },
  {
    step: 7, name: "Submission", subtitle: "提交作品", time: "周六 16:00–17:00",
    color: "#10b981", checkpoint: false,
    items: ["提交 Demo", "提交 C-Card", "提交 AI 工具记录"],
  },
  {
    step: 8, name: "Final Demo Day", subtitle: "展示 & 颁奖", time: "周六 17:00–19:30",
    color: "#f59e0b", checkpoint: false,
    items: ["现场展示 & 答辩", "评委打分", "公布结果 & 颁奖"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* Hero */}
      <section className="bg-[#e8e0ff] py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="tag mx-auto mb-6">赛道介绍</div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0f0e2a] mb-6 leading-tight">
            三大赛道 <span className="gradient-text">全面解析</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            2026.08.27–08.29 · 中国·杭州 · 48 小时极限创造
          </p>
        </div>
      </section>

      {/* Three Tracks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">三大赛道</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              VentureD <span className="gradient-text">Hackathon 赛道</span>
            </h2>
          </div>
          <div className="space-y-6">
            {tracks.map((track, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 md:p-10 hover:border-indigo-100 hover:shadow-md transition-all">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className={`text-5xl font-black bg-gradient-to-r ${track.gradient} bg-clip-text text-transparent mb-3`}>
                      {track.number}
                    </div>
                    <h3 className="text-[#0f0e2a] font-black text-2xl mb-2">{track.title}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${track.gradient} bg-clip-text text-transparent mb-3`}>
                      {track.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {track.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-6">{track.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {track.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                          <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${track.gradient} flex items-center justify-center text-white text-[10px] shrink-0`}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 bg-[#ece8ff] border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">参赛人群</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              让更多年轻人 <span className="gradient-text">参与</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              面向高中生与大学生，设置分组兼顾开放性与公平性，让不同阶段的年轻创意都能被看见与鼓励
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {divisions.map((d, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 hover:border-indigo-100 hover:shadow-md transition-all">
                <div className={`text-4xl font-black bg-gradient-to-r ${d.gradient} bg-clip-text text-transparent mb-2`}>
                  {d.number}
                </div>
                <h3 className="text-[#0f0e2a] font-black text-xl mb-1">{d.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="tag">{d.label}</span>
                  <span className="text-gray-400 text-xs">{d.age}</span>
                </div>
                <p className={`text-sm font-medium bg-gradient-to-r ${d.gradient} bg-clip-text text-transparent mb-4`}>
                  {d.desc}
                </p>
                <ul className="space-y-2">
                  {d.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${d.gradient} flex items-center justify-center text-white text-[9px] shrink-0`}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-gray-600 text-sm">
              建议每队 <span className="text-[#0f0e2a] font-bold">3–5 人</span>；每队最多一名明显 <span className="gradient-text font-bold">technical-leaning participant</span>
            </p>
          </div>
        </div>
      </section>

      {/* Competition Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">赛事流程</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              从一个想法到一个 <span className="gradient-text">可体验 Demo</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              48 小时，从灵感到可体验 Demo，让 AI Agent 走出屏幕，进入真实世界
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {competitionFlow.map((s, i) => (
              <div key={i} className="relative">
                {s.checkpoint && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#f59e0b] text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      ★ CHECKPOINT
                    </span>
                  </div>
                )}
                <div
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 h-full hover:shadow-md transition-all"
                  style={s.checkpoint ? { borderColor: "#f59e0b" } : {}}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3 shrink-0"
                    style={{ background: s.color }}
                  >
                    {s.step}
                  </div>
                  <div className="text-[#0f0e2a] font-bold text-sm mb-0.5">{s.name}</div>
                  <div className="text-gray-500 text-xs mb-3">{s.subtitle}</div>
                  <div className="text-[10px] text-gray-400 mb-3 font-mono">{s.time}</div>
                  <ul className="space-y-1">
                    {s.items.map((item, j) => (
                      <li key={j} className="text-gray-500 text-xs flex items-start gap-1.5">
                        <span style={{ color: s.color }} className="shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Resources provided */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(59,130,246,0.06))", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <p className="text-[#0f0e2a] font-semibold text-sm mb-4">我们现在提供的内容</p>
            <div className="flex flex-wrap gap-3">
              {["AI Coding Agent 工具支持", "丰富的硬件开发套件", "真实场景命题方向", "Mentor & 技术专家支持", "学习资料 & 技术文档", "场地、餐饮与休息区", "评审标准 & 评委团队", "出海 & 资本对接机会"].map((r) => (
                <span key={r} className="tag">{r}</span>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
            >
              立即报名 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ece8ff] py-20 border-t border-indigo-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#0f0e2a] mb-4">准备好了吗？</h2>
          <p className="text-gray-500 mb-8">无论你是参赛者、合作企业还是赞助商，我们都期待与你合作</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
          >
            立即联系我们 →
          </Link>
        </div>
      </section>

    </div>
  );
}
