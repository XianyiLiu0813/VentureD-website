"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const tracks = [
  {
    number: "01",
    gradient: "from-[#6366f1] to-[#7c3aed]",
    accent: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "🗄️",
    title: "Hardware · 硬件创新",
    subtitle: "让 Agent 通过硬件触达真实世界",
    partner: "TiDB",
    partnerColor: "#6366f1",
    desc: "从机器人、无人机、穿戴设备到智能终端，让 Agent 不再停留在屏幕中，而是拥有「感知、理解、执行」的能力。",
    features: [
      "机器人 × AI Agent 集成",
      "无人机智能控制",
      "穿戴设备与智能终端",
      "硬件感知与执行系统",
    ],
    prizes: [
      "3 个企业实习 Offer",
      "9,000 美元数据库代金券",
      "优秀项目全球联展推广",
    ],
    tags: ["IoT", "机器人", "无人机", "穿戴设备"],
  },
  {
    number: "02",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
    accent: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    emoji: "🦾",
    title: "Physical AI · 具身智能",
    subtitle: "让 AI Agent 拥有实体，融合物理世界",
    partner: "宇树科技",
    partnerColor: "#3b82f6",
    desc: "5 台 G1 人形机器人现场开放，探索 AI 与物理世界融合的无限边界。让 AI Agent 拥有实体，感知、行动、改变世界。",
    features: [
      "5 台 G1 人形机器人现场开放",
      "具身 AI 与物理交互",
      "真实硬件与开发设备支持",
      "Physical AI Demo 展示",
    ],
    prizes: [
      "超多真实硬件与开发设备支持",
      "宇树科技 Physical AI Demo 机会",
      "现场 5 台 G1 机器人开放体验",
    ],
    tags: ["人形机器人", "具身AI", "Physical", "Hardware"],
  },
  {
    number: "03",
    gradient: "from-[#f472b6] to-[#6366f1]",
    accent: "linear-gradient(135deg, #f472b6, #6366f1)",
    emoji: "🌌",
    title: "Deep Space · 深空探索",
    subtitle: "给天马行空的想法一个被创造的机会",
    partner: "群核科技",
    partnerColor: "#ec4899",
    desc: "面向那些更前沿、更大胆、甚至看似不切实际的创意，鼓励年轻人探索未来生活、未来科技与未来世界的全新可能。",
    features: [
      "空间智能课程与专家答疑",
      "aholo 平台及算力支持",
      "官方认证与训练营机会",
      "大胆想法原型验证",
    ],
    prizes: [
      "空间智能课程与专家答疑",
      "aholo 平台及算力支持",
      "官方认证与训练营机会",
    ],
    tags: ["Space Tech", "未来科技", "Deep Tech", "前沿探索"],
  },
  {
    number: "04",
    gradient: "from-[#f97316] to-[#ef4444]",
    accent: "linear-gradient(135deg, #f97316, #ef4444)",
    emoji: "🌐",
    title: "Global Commerce · 全球商业",
    subtitle: "让 Agent 用真实数据判断什么值得走向世界",
    partner: "天识科技",
    partnerColor: "#f97316",
    desc: "基于真实市场数据与出海场景，用 Agent 判断什么值得走向世界，重塑全球商业体验。",
    features: [
      "独有全球在地化电商 Live Agent",
      "真实市场数据与出海场景",
      "用户需求洞察 Agent",
      "1 个 Offer 直通名额",
    ],
    prizes: [
      "独有全球在地化电商 Live Agent",
      "6 个线下训练营名额",
      "1 个 Offer 直通名额",
    ],
    tags: ["E-commerce", "Fintech", "出海", "AI Retail"],
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
    step: 1, name: "Dream Pitch", subtitle: "灵感提出", time: "周四 12:00–14:00",
    icon: "💡", color: "#6366f1", checkpoint: false,
    items: ["提出想法", "找到队友", "明确方向"],
  },
  {
    step: 2, name: "Define Sprint", subtitle: "问题定义", time: "周四 16:00–19:00",
    icon: "🎯", color: "#7c3aed", checkpoint: false,
    items: ["明确用户痛点", "确定核心问题", "定义 MVP"],
  },
  {
    step: 3, name: "D-Check 1", subtitle: "Concept Lock", time: "周四 19:00",
    icon: "🔒", color: "#f59e0b", checkpoint: true,
    items: ["概念评审", "可行性验证", "锁定方向"],
  },
  {
    step: 4, name: "Develop", subtitle: "开发实现", time: "周四 19:00 – 周五 18:00",
    icon: "💻", color: "#3b82f6", checkpoint: false,
    items: ["选择框架", "AI Agent 开发", "硬件联调"],
  },
  {
    step: 5, name: "D-Check 2", subtitle: "Prototype Proof", time: "周五 20:00",
    icon: "💎", color: "#ec4899", checkpoint: true,
    items: ["原型评审", "功能验证", "体验测试"],
  },
  {
    step: 6, name: "Delivery Sprint", subtitle: "打磨完善", time: "周六 09:00–16:00",
    icon: "🚀", color: "#06b6d4", checkpoint: false,
    items: ["完善功能", "优化体验", "准备展示材料"],
  },
  {
    step: 7, name: "Submission", subtitle: "提交作品", time: "周六 16:00",
    icon: "📤", color: "#10b981", checkpoint: false,
    items: ["提交 Demo", "提交 C-Card", "提交 AI 工具记录"],
  },
  {
    step: 8, name: "Final Demo Day", subtitle: "展示 & 颁奖", time: "周六 16:00–20:00",
    icon: "🏆", color: "#f59e0b", checkpoint: false,
    items: ["现场展示 & 答辩", "评委打分", "分赛道 Pitch & Awards"],
  },
];

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const regUrl = lang === "en"
    ? "https://docs.google.com/forms/d/e/1FAIpQLSd3heep5VmjnBZWjR-QzuAyf8qJ-_j00AOEUoyxyqoaYCzlTQ/viewform?usp=header"
    : "https://wj.qq.com/s2/27332848/a062/";

  const tTracks = tracks.map((tr, i) => ({
    ...tr,
    ...[
      {
        title: t("Hardware · 硬件创新", "Hardware · Innovation"),
        subtitle: t("让 Agent 通过硬件触达真实世界", "Let Agents reach the physical world through hardware"),
        desc: t("从机器人、无人机、穿戴设备到智能终端，让 Agent 不再停留在屏幕中，而是拥有「感知、理解、执行」的能力。", "From robots, drones, and wearables to smart terminals — let Agents move beyond the screen with the ability to sense, understand, and act."),
        features: lang === "en"
          ? ["Robots × AI Agent Integration", "Drone Intelligent Control", "Wearables & Smart Terminals", "Hardware Sensing & Execution"]
          : tr.features,
        prizes: lang === "en"
          ? ["3 Corporate Internship Offers", "$9,000 Database Credits", "Top Projects in Global Exhibition"]
          : tr.prizes,
        tags: lang === "en" ? ["IoT", "Robotics", "Drones", "Wearables"] : tr.tags,
      },
      {
        title: t("Physical AI · 具身智能", "Physical AI · Embodied Intelligence"),
        subtitle: t("让 AI Agent 拥有实体，融合物理世界", "Give AI Agents a physical form, fusing with the physical world"),
        desc: t("5 台 G1 人形机器人现场开放，探索 AI 与物理世界融合的无限边界。让 AI Agent 拥有实体，感知、行动、改变世界。", "5 Unitree G1 humanoid robots available on-site — explore the limitless frontier where AI meets the physical world. Give Agents a body to sense, act, and change the world."),
        features: lang === "en"
          ? ["5 G1 Humanoid Robots On-Site", "Embodied AI & Physical Interaction", "Real Hardware & Dev Equipment", "Physical AI Demo Showcase"]
          : tr.features,
        prizes: lang === "en"
          ? ["Full hardware & dev equipment support", "Unitree Physical AI Demo opportunity", "5 G1 robots open for experience"]
          : tr.prizes,
        tags: lang === "en" ? ["Humanoid Robot", "Embodied AI", "Physical", "Hardware"] : tr.tags,
      },
      {
        title: t("Deep Space · 深空探索", "Deep Space · Exploration"),
        subtitle: t("给天马行空的想法一个被创造的机会", "Give bold, unconventional ideas a chance to be built"),
        desc: t("面向那些更前沿、更大胆、甚至看似不切实际的创意，鼓励年轻人探索未来生活、未来科技与未来世界的全新可能。", "For frontier, bold, and seemingly impossible ideas — encouraging young people to explore future living, future technology, and new possibilities in the world ahead."),
        features: lang === "en"
          ? ["Spatial Intelligence Courses & Expert Q&A", "aholo Platform & Computing Resources", "Official Certification & Training Camp", "Bold Idea Prototype Validation"]
          : tr.features,
        prizes: lang === "en"
          ? ["Spatial Intelligence courses & expert Q&A", "aholo platform & computing resources", "Official certification & training camp"]
          : tr.prizes,
        tags: lang === "en" ? ["Space Tech", "Future Tech", "Deep Tech", "Frontier"] : tr.tags,
      },
      {
        title: t("Global Commerce · 全球商业", "Global Commerce"),
        subtitle: t("让 Agent 用真实数据判断什么值得走向世界", "Use Agents with real data to judge what's worth going global"),
        desc: t("基于真实市场数据与出海场景，用 Agent 判断什么值得走向世界，重塑全球商业体验。", "Powered by real market data and global commerce scenarios — use Agents to judge what's worth taking to the world and reimagine global business."),
        features: lang === "en"
          ? ["Exclusive Global Localization E-commerce Live Agent", "Real Market Data & Global Scenarios", "User Insights Agent", "1 Direct Offer Slot"]
          : tr.features,
        prizes: lang === "en"
          ? ["Exclusive Global E-commerce Live Agent", "6 offline training camp slots", "1 direct Offer slot"]
          : tr.prizes,
        tags: lang === "en" ? ["E-commerce", "Fintech", "Global", "AI Retail"] : tr.tags,
      },
    ][i],
  }));

  const tDivisions = divisions.map((d, i) => ({
    ...d,
    ...[
      {
        name: t("Discovery Division", "Discovery Division"),
        label: t("高中生组", "High School"),
        age: t("14–18 岁", "Age 14–18"),
        desc: t("强调创意、观察力、表达与基础 Demo", "Focus on creativity, observation, expression & basic Demo"),
        points: lang === "en"
          ? ["Discover real-world problems", "Propose valuable creative ideas", "Complete a basic experiential Demo"]
          : d.points,
      },
      {
        name: t("Delta Division", "Delta Division"),
        label: t("大学生组", "University"),
        age: t("18–24 岁", "Age 18–24"),
        desc: t("强调产品完整度、用户洞察与 Demo 质量", "Focus on product completeness, user insight & Demo quality"),
        points: lang === "en"
          ? ["Deep user needs analysis", "Build a complete product prototype", "High-quality Demo presentation & Q&A"]
          : d.points,
      },
      {
        name: t("Deep Space Division", "Deep Space Division"),
        label: t("开放展示组", "Open Division"),
        age: t("25 岁以上", "Age 25+"),
        desc: t("可参与展示或特别挑战，不进入主奖项竞争", "Participate in showcases or special challenges, not competing for main prizes"),
        points: lang === "en"
          ? ["Join special challenge tracks", "Showcase frontier ideas", "Connect with international resources"]
          : d.points,
      },
    ][i],
  }));

  const tFlow = competitionFlow.map((s) => ({
    ...s,
    subtitle: t(s.subtitle, ({
      "灵感提出": "Idea Pitch", "问题定义": "Define Sprint",
      "Concept Lock": "Concept Lock", "开发实现": "Develop",
      "Prototype Proof": "Prototype Proof", "打磨完善": "Delivery Sprint",
      "提交作品": "Submission", "展示 & 颁奖": "Demo & Awards",
    } as Record<string, string>)[s.subtitle] ?? s.subtitle),
    time: t(s.time, s.time
      .replace("周四", "Thu").replace("周五", "Fri").replace("周六", "Sat")),
    items: lang === "en" ? ({
      1: ["Pitch your idea", "Find teammates", "Clarify direction"],
      2: ["Define user pain points", "Identify core problem", "Define MVP"],
      3: ["Concept review", "Feasibility check", "Lock direction"],
      4: ["Choose framework", "AI Agent development", "Hardware integration"],
      5: ["Prototype review", "Feature validation", "UX testing"],
      6: ["Polish features", "Optimize experience", "Prepare demo materials"],
      7: ["Submit Demo", "Submit C-Card", "Submit AI tool log"],
      8: ["Live demo & Q&A", "Judge scoring", "Track Pitch & Awards"],
    } as Record<number, string[]>)[s.step] ?? s.items : s.items,
  }));

  return (
    <div className="bg-white text-[#0f0e2a]">

      {/* Hero — bg-scene.jpg with light lavender overlay */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "62vh",
          backgroundImage: "url('/images/bg-scene.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(240,236,255,0.88) 0%, rgba(228,220,255,0.84) 100%)",
          }}
        />
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center justify-center text-center"
          style={{ minHeight: "62vh", paddingTop: "110px", paddingBottom: "60px" }}
        >
          <div className="tag mx-auto mb-6">{t("赛道介绍", "Track Overview")}</div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0f0e2a] mb-6 leading-tight">
            <span className="gradient-text">{t("四大赛道", "4 Tracks")}</span> {t("全面解析", "Breakdown")}
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            {t("2026.08.27–08.29 · 中国·杭州 · 48 小时极限创造", "2026.08.27–08.29 · Hangzhou, China · 48-Hour Extreme Creation")}
          </p>
        </div>
      </section>

      {/* Four Tracks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">{t("四大赛道", "4 Tracks")}</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              VentureD <span className="gradient-text">{t("Hackathon 赛道", "Hackathon Tracks")}</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Hardware · Physical AI · Deep Space · Global Commerce</p>
          </div>
          <div className="space-y-5">
            {tTracks.map((track, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-3xl overflow-hidden hover:border-indigo-100 hover:shadow-md transition-all relative">
                {/* Colored top accent bar */}
                <div className="h-1" style={{ background: track.accent }} />
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left: title + partner */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{track.emoji}</span>
                        <div>
                          <div className={`text-3xl font-black bg-gradient-to-r ${track.gradient} bg-clip-text text-transparent`}>
                            {track.number}
                          </div>
                          <div className="text-xs font-bold px-2 py-0.5 rounded-full text-white inline-block" style={{ background: track.partnerColor }}>
                            {track.partner}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[#0f0e2a] font-black text-xl mb-2">{track.title}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${track.gradient} bg-clip-text text-transparent mb-4`}>
                        {track.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {track.tags.map((t) => <span key={t} className="tag text-xs">{t}</span>)}
                      </div>
                    </div>
                    {/* Middle: description + features */}
                    <div>
                      <p className="text-gray-600 leading-relaxed mb-5 text-sm">{track.desc}</p>
                      <ul className="space-y-2.5">
                        {track.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${track.gradient} flex items-center justify-center text-white text-[10px] shrink-0 mt-0.5`}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right: prizes */}
                    <div className="rounded-2xl p-5" style={{ background: `${track.partnerColor}0f`, border: `1px solid ${track.partnerColor}30` }}>
                      <div className="text-xs font-black tracking-[0.18em] uppercase mb-3 opacity-60" style={{ color: track.partnerColor }}>
                        🏆 {t("赛道奖励", "Track Prizes")}
                      </div>
                      <ul className="space-y-3">
                        {track.prizes.map((p, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm font-medium text-[#0f0e2a]">
                            <span className="shrink-0 mt-0.5 text-base" style={{ color: track.partnerColor }}>◆</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section
        className="py-24 border-y border-indigo-100"
        style={{ background: "linear-gradient(135deg, #ede9ff 0%, #ddd6fe 60%, #e4e0ff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">{t("参赛人群", "Participants")}</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              {t("让更多年轻人", "Empowering Young")}{" "}<span className="gradient-text">{t("参与", "Builders")}</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("面向高中生与大学生，设置分组兼顾开放性与公平性，让不同阶段的年轻创意都能被看见与鼓励", "Open to high school and university students — structured divisions that balance inclusivity and fairness, so every stage of young creativity can be seen and celebrated.")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tDivisions.map((d, i) => (
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
                      <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${d.gradient} flex items-center justify-center text-white text-xs shrink-0`}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Team composition note */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-5 text-center shadow-sm mb-12">
            <p className="text-gray-600 text-sm">
              {t("建议每队", "Recommended team size:")} <span className="text-[#0f0e2a] font-bold">3–5 {t("人", "members")}</span>；{t("每队最多一名明显", "max one clearly")} <span className="gradient-text font-bold">technical-leaning participant</span> {t("每队", "per team")}
            </p>
          </div>

          {/* Team Roles */}
          <div>
            <div className="text-center mb-8">
              <div className="tag mx-auto mb-3">{t("推荐团队结构", "Recommended Team Structure")}</div>
              <h3 className="text-2xl font-black text-[#0f0e2a]">{t("五种角色，缺一不可", "Five Roles, Each Essential")}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: "💡", role: "Dreamer", cn: t("创意构想者", "Idea Generator"), color: "#6366f1", desc: t("发现问题，提出有价值的创意", "Spot problems, generate valuable ideas") },
                { icon: "🎨", role: "Designer", cn: t("体验设计师", "UX Designer"), color: "#8b5cf6", desc: t("设计用户体验，让想法更可用", "Design user experience, make ideas usable") },
                { icon: "🎙️", role: "Storyteller", cn: t("内容表达者", "Communicator"), color: "#ec4899", desc: t("讲好故事，传递价值与影响力", "Tell the story, convey value and impact") },
                { icon: "</>", role: "Vibe Builder", cn: t("Demo 构建者", "Demo Builder"), color: "#3b82f6", desc: t("构建 Demo，验证核心想法", "Build the Demo, validate the core idea") },
                { icon: "🚀", role: "Operator", cn: t("项目推动者", "Project Driver"), color: "#f97316", desc: t("规划进度，协调资源，推动落地", "Plan timelines, coordinate resources, drive execution") },
              ].map((r, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-indigo-100 hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-3"
                    style={{ background: `linear-gradient(135deg, ${r.color}cc, ${r.color})` }}>
                    {r.icon}
                  </div>
                  <div className="font-black text-[#0f0e2a] text-sm mb-0.5">{r.role}</div>
                  <div className="text-xs font-medium mb-2" style={{ color: r.color }}>{r.cn}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-4">{t("赛事流程", "Event Schedule")}</div>
            <h2 className="text-4xl font-black text-[#0f0e2a] mb-4">
              {t("从一个想法到一个", "From an Idea to a")}{" "}<span className="gradient-text">{t("可体验 Demo", "Live Demo")}</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("48 小时，从灵感到可体验 Demo，让 AI Agent 走出屏幕，进入真实世界", "48 hours — from inspiration to a live Demo, letting AI Agents step off the screen and into the real world.")}
            </p>
          </div>
          {/* Timeline rows */}
          {[tFlow.slice(0, 4), tFlow.slice(4, 8)].map((row, rowIdx) => (
            <div key={rowIdx} className={rowIdx === 0 ? "mb-6" : ""}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {row.map((s, i) => (
                  <div key={s.step} className="relative flex flex-col">
                    {/* Arrow connector (right side, except last in row) */}
                    {i < row.length - 1 && (
                      <div className="hidden sm:flex absolute top-[36px] right-[-18px] z-10 items-center">
                        <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
                          <path d="M0 7 H28 M22 1 L34 7 L22 13" stroke={s.checkpoint ? "#f59e0b" : "rgba(99,102,241,0.35)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    {/* Checkpoint badge */}
                    {s.checkpoint && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <span className="text-[11px] font-black text-white px-2 py-0.5 rounded-full whitespace-nowrap"
                          style={{ background: "#f59e0b", boxShadow: "0 2px 8px rgba(245,158,11,0.4)" }}>
                          ★ CHECKPOINT
                        </span>
                      </div>
                    )}
                    <div
                      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                      style={{
                        border: s.checkpoint ? "2px solid #f59e0b88" : "1px solid rgba(99,102,241,0.12)",
                        background: "white",
                      }}
                    >
                      {/* Colored header */}
                      <div className="px-4 pt-4 pb-3 flex items-start gap-3" style={{ background: `${s.color}12` }}>
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-black shrink-0"
                          style={{ background: s.color }}>
                          {s.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-bold text-gray-400 tracking-wider mb-0.5">{s.time}</div>
                          <div className="font-black text-[#0f0e2a] text-sm leading-tight">{s.name}</div>
                          <div className="text-xs font-medium mt-0.5" style={{ color: s.color }}>{s.subtitle}</div>
                        </div>
                        <span className="text-xl shrink-0 mt-0.5">{s.icon}</span>
                      </div>
                      {/* Content */}
                      <div className="px-4 py-3 flex-1">
                        <ul className="space-y-1.5">
                          {s.items.map((item, j) => (
                            <li key={j} className="text-gray-600 text-xs flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: s.color }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Row snake connector */}
              {rowIdx === 0 && (
                <div className="flex justify-end mt-3 mb-4 pr-[calc(12.5%-8px)]">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
                      <path d="M10 0 V16 Q10 32 0 32" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="mb-8" />

          {/* Resources provided */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(59,130,246,0.06))", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <p className="text-[#0f0e2a] font-semibold text-sm mb-4">{t("我们现在提供的内容", "What We Provide")}</p>
            <div className="flex flex-wrap gap-3">
              {(lang === "en"
                ? ["AI Coding Agent Tools", "Rich Hardware Dev Kits", "Real-World Problem Tracks", "Mentor & Tech Expert Support", "Learning Resources & Docs", "Venue, Meals & Rest Areas", "Judging Rubric & Judge Panel", "Global & Investor Networking"]
                : ["AI Coding Agent 工具支持", "丰富的硬件开发套件", "真实场景命题方向", "Mentor & 技术专家支持", "学习资料 & 技术文档", "场地、餐饮与休息区", "评审标准 & 评委团队", "出海 & 资本对接机会"]
              ).map((r) => (
                <span key={r} className="tag">{r}</span>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={regUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
            >
              {t("立即报名 →", "Apply Now →")}
            </a>
          </div>
        </div>
      </section>

      {/* CTA — bg-scene.jpg with dark overlay */}
      <section
        className="py-24 relative overflow-hidden border-t border-indigo-100"
        style={{
          backgroundImage: "url('/images/bg-scene.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,8,36,0.84)" }} />
        <div className="absolute right-0 top-0 h-full pointer-events-none overflow-hidden opacity-10" style={{ width: "25%" }}>
          <svg className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-[150%] w-full" viewBox="0 0 200 300" fill="none">
            <polygon points="100,0 200,80 165,240 35,240 0,80" fill="white" />
            <polygon points="100,22 178,90 148,220 52,220 22,90" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">{t("准备好了吗？", "Ready to Build?")}</h2>
          <p className="text-white/60 mb-8">{t("无论你是参赛者、合作企业还是赞助商，我们都期待与你合作", "Whether you're a participant, partner, or sponsor — we'd love to collaborate with you.")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
          >
            {t("立即联系我们 →", "Contact Us →")}
          </Link>
        </div>
      </section>

    </div>
  );
}
