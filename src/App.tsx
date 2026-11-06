import React, { useEffect, useRef, useState } from 'react'

const SITE = {
  name: '王睿 · 最灵活的胖纸',
  shortName: '最灵活的胖纸',
  domain: 'oryjk.cn',
  avatar: '/avatar.jpg',
  title: '资深系统架构师 · AI-Native 技术负责人 · FDE',
  icp: '蜀ICP备2020035100号',
  icpUrl: 'https://beian.miit.gov.cn/',
  since: 2014,
}

const PRIMARY_TOOLBOX = ['Rust', 'Go', 'TypeScript', 'Python', 'Kotlin', 'Scala', 'Java']
const INFRA_TOOLBOX = [
  'DDD / 六边形架构',
  'TDD',
  '自研列式存储',
  'Axum / Tokio',
  'Spring Boot 3',
  'Akka',
  'React / Vue 3 / UniApp',
  'PostgreSQL / MySQL / Cassandra',
  'Redis / etcd / MinIO',
  'gRPC / QUIC / WebSocket',
  'Kubernetes / Docker',
]

const MARQUEE_ITEMS = [
  'RUST',
  'GO',
  'TYPESCRIPT',
  'PYTHON',
  'HEXAGONAL ARCHITECTURE',
  'DDD & TDD',
  'COLUMNAR STORAGE',
  'AGENTIC AI ENGINEERING',
  'KOTLIN / SCALA / JAVA',
  'KUBERNETES',
]

const CAREER_PILLARS = [
  {
    tag: 'PILLAR 01 · ARCHITECTURE & AI-NATIVE',
    title: '现代多语言架构与 AI 工程范式',
    desc: '日常主力使用 Rust、Go、TypeScript、Python 构建高性能后端与多端应用，兼具 10 年+ JVM（Kotlin / Scala / Java）企业级大型系统功底。深度落地 DDD 六边形（端口与适配器）架构与 TDD，以严密的架构边界与 AGENTS.md 规范驾驭 AI 智能体，具备 1 人独立闭环多端商业产品的实战产能。',
  },
  {
    tag: 'PILLAR 02 · STORAGE & DATA ENGINE',
    title: '自研分布式列式存储与数据底座',
    desc: '对列式存储有深入研究与商业化自研落地经验，主导研发支持嵌入式、单机及云原生分布式（基于 etcd 协调与 MinIO 存算分离）的列式数据库 Barbeyond；精通 PostgreSQL、MySQL 内核、Redis 及 Cassandra 多源异构数据架构。',
  },
  {
    tag: 'PILLAR 03 · FINTECH TRACK RECORD',
    title: '头部金融机构核心系统控盘交付',
    desc: '长期深耕量化投研、买方投顾与金融风控领域，主导交付中证指数内部唯一指数编制发布平台、招商银行阿尔法+智能投顾（支撑 10 万+ 理财经理、百万级组合、200+ 因子）、华宝证券 TAMP 财富管理平台（50+ 财经大 V 入驻）、汇丰投研中台及复星债券风控系统。',
  },
  {
    tag: 'PILLAR 04 · LEADERSHIP & EXECUTION',
    title: '30+ 人团队管理与组织效能跃迁',
    desc: '曾管理 30+ 人研发团队，具备丰富的跨部门协同、复杂金融工程控盘与海外大型电商（北美 Ferguson 交易与支付核心链路）交付经验；善于以“整洁架构规范 + AI 工具链 + 自动化测试护栏”推动研发团队向高人效现代工程组织演进。',
  },
]

interface MiniProgramProject {
  index: string
  name: string
  latin: string
  badge: string
  desc: string
  tags: string[]
  qrImage: string
  qrCaption: string
  webUrl?: string
  webLabel?: string
}

const MINI_PROGRAM_PROJECTS: MiniProgramProject[] = [
  {
    index: 'MP-01',
    name: '黄金看板',
    latin: 'Gold Macro & Pricing Board',
    badge: '1人独立全栈 · 商业化闭环',
    desc: '围绕美元流动性、通胀增长、财政信用、机会成本、风险温度等 6 大宏观维度与 19 项历史量化洞察打造的黄金定价分析平台。后端采用 Rust 六边形架构对接美联储 FRED、CFTC COT、SPDR 持仓与实时贵金属行情，自研纯 Rust 微信支付与会员体系，配套 Web 拓扑工作台与分包小程序。',
    tags: ['Rust', 'Axum', 'PostgreSQL', 'Redis', 'Vue 3', 'TypeScript', 'UniApp', 'ECharts'],
    qrImage: '/qrcodes/mini-program-gold.jpg',
    qrCaption: '微信扫码体验「黄金看板」',
  },
  {
    index: 'MP-02',
    name: '食息指南',
    latin: 'Dividend Asset & Research Guide',
    badge: '1人独立全栈 · 自研 AI Skill',
    desc: '面向红利与现金流投资者的资产配置与投研内容小程序平台。后端采用 Rust 垂直业务域切片与六边形架构，通过 SQLx 编译期宏保障 SQL 类型安全，集成外部行情因子同步与飞书多维表格（Bitable）双向数据协同；沉淀自研 Rust 六边形架构 AI Skill 驱动全栈极速交付。',
    tags: ['Rust', 'Axum', 'SQLx', 'PostgreSQL', 'TypeScript', 'Bun', 'UniApp', 'Tailwind v4'],
    qrImage: '/qrcodes/mini-program-shixi.jpg',
    qrCaption: '微信扫码体验「食息指南」',
  },
  {
    index: 'MP-03',
    name: '策略货架',
    latin: 'Quantitative Strategy Shelf',
    badge: '1人独立全栈 · 量化策略图谱',
    desc: '对接底层 SFINX 量化金融计算引擎与应用中台的策略组合分析小程序。提供策略标签共现关系图谱（Tag Graph）、净值收益曲线、多维风险指标与底层持仓穿透（Look-through）分析；设计按（策略, 交易日）三维独立持久化的韧性日更状态机与断点自动续算机制。',
    tags: ['Rust', 'Axum', 'PostgreSQL', 'SFINX SDK', 'Vue 3', 'TypeScript', 'Alova', 'uni-echarts'],
    qrImage: '/qrcodes/mini-program-strategy.jpg',
    qrCaption: '微信扫码体验「策略货架」',
  },
  {
    index: 'MP-04',
    name: '赛事数据洞察',
    latin: 'Football Insight & Analytics',
    badge: '1人独立全栈 · 体育数据引擎',
    desc: '职业足球赛事多维数据统计、俱乐部及球员深度洞察、上座率分析与主场球票看台可视化工具。后端基于 Rust + Axum 构建高并发数据服务，结合自动化赛况采集管线与多端小程序/H5 交互展示。',
    tags: ['Rust', 'Axum', 'TypeScript', 'UniApp', 'Python', 'MinIO'],
    qrImage: '/qrcodes/mini-program-insight.jpg',
    qrCaption: '微信扫码体验「洞察小程序」',
  },
  {
    index: 'MP-05',
    name: '绿茵报名与统一身份底座',
    latin: 'Match Registration & Auth Hub',
    badge: 'Go + Rust 双栈 · 统一鉴权中心',
    desc: '支持球队日常活动报名、散客拼场、阵容编排、费用 AA 账单结算与赛事荣誉海报生成的全栈平台，同时作为「缠观」等外部 Web 应用的微信小程序统一登录与 URL Link 桥接中心。后端分别以 Go 与 Rust 实现并生产部署。',
    tags: ['Go', 'Rust', 'React 19', 'TypeScript', 'UniApp', 'Docker'],
    qrImage: '/qrcodes/mini-program.jpg',
    qrCaption: '微信扫码体验「报名小程序」',
    webUrl: 'https://match.oryjk.cn/chanlun/',
    webLabel: '访问关联 Web 应用「缠观」↗',
  },
]

interface EnterpriseProject {
  index: string
  name: string
  latin: string
  desc: string
  tags: string[]
  href?: string
}

const ENTERPRISE_PROJECTS: EnterpriseProject[] = [
  {
    index: '01',
    name: '华宝证券 TAMP 投顾与财富管理平台',
    latin: 'Huabao Securities TAMP Platform',
    desc: '担任技术负责人与首席架构师。基于 Kotlin 2.0、Spring Boot 3.3 与 DDD 六边形架构首创「domain-* 纯领域 + runtime-* 多租户适配器」可插拔模式，打通券商 ESB 交易总线、国密 SM4 合规、机审/人审流、微前端工作台、跨端投顾商城与 AI Agent 投顾赋能。在华宝多个营业部落地，吸引 50+ 财经大 V 入驻开店。',
    tags: ['Kotlin 2.0', 'Spring Boot 3', 'DDD 六边形架构', 'AI Agent', 'Vue 3 / TS', 'UniApp', 'Kotest / TDD'],
  },
  {
    index: '02',
    name: '中证指数核心编制与发布平台 & 自研列存 Barbeyond',
    latin: 'CSI Index Platform & Columnar DB',
    desc: '中证指数内部唯一的核心指数编制、投研回测与权威发布平台，承载中证全量指数的样本筛选、单/多策略与因子回测、定期/临时调样及正式发布。底层深度集成主导自研的列式存储数据库 Barbeyond（支持嵌入式、单机及 etcd + MinIO 存算分离分布式部署）与 Scala/Akka 并行回测引擎。',
    tags: ['自研列式存储 Barbeyond', 'Scala', 'Akka', 'Spring Boot', 'etcd', 'MinIO', 'Kubernetes'],
  },
  {
    index: '03',
    name: '招商银行「阿尔法+」智能投顾平台',
    latin: 'CMB Alpha+ Robo-Advisory Platform',
    desc: '同时接入招商银行 App 与行内投顾 PC 端的核心财富管理平台，支撑招行总行、分行、支行 10 万+ 理财经理日常展业与百万级基金组合管理。设计在线服务集群（api-app）与夜间大规模离线计算（offline-app）物理隔离架构，基于 MySQL 分库分表与 Redis 支撑全市场基金 200+ 量化因子的高效计算与毫秒级检索。',
    tags: ['Scala', 'Akka', 'Spring Boot', '分库分表', 'MySQL / Redis', 'Kubernetes'],
  },
  {
    index: '04',
    name: '汇丰一体化智能投研中台 & 买方基金投顾平台',
    latin: 'HSBC Research Hub & Fund Advisory',
    desc: '基于自研「投研 3.0 平台」打造的“标准量化底座 + 机构插件化定制”投研中台，打通股池筛选、多策略回测、事件驱动分析（Event Study）、金股推荐跟踪与研究员 Alpha 绩效考核闭环；并通过 DDD 领域抽象将专业量化算力降维赋能多家大行与公募投顾前台。',
    tags: ['Scala', 'Akka', 'DDD', 'Cassandra', 'SQL Server', 'MySQL', 'Docker'],
  },
  {
    index: '05',
    name: '复星债券风控信评系统 & 北美 Ferguson 电商核心交易平台',
    latin: 'Fosun Bond Risk & Ferguson E-Commerce',
    desc: '主导复星集团内部固收债券“红黄绿灯”量化风控规则计算引擎（Scala/Akka）与 Camunda 多级信评工作流系统；早期作为 Team Leader 主导北美建材分销巨头 Ferguson 电商平台核心交易链路（Shopping Cart / Checkout 结算引擎）与 Visa 国际支付网关幂等一致性架构。',
    tags: ['Camunda BPMN', 'Scala / Akka', 'Java', '分布式事务', 'Visa 支付网关', 'TDD'],
  },
  {
    index: '06',
    name: '缠观 · 多周期缠论结构与买卖点量化分析系统',
    latin: 'Chanlun Multi-Timeframe Analytics',
    desc: '覆盖沪深 A 股与境内 ETF 的整洁架构行情分析工具。纯领域层实现分型、笔、线段、笔中枢自动推导、MACD 面积背驰一二三类买卖点识别与日线/60m/30m/5m 四周期联立印证，内置东方财富与新浪行情主备熔断切换及 SQLite 全市场收盘榜单后台构建引擎。',
    tags: ['Python', 'FastAPI', 'Clean Architecture', 'SQLite', 'React', 'ECharts'],
    href: 'https://match.oryjk.cn/chanlun/',
  },
]

const AI_ARSENAL = [
  { name: 'Claude Code', desc: 'Anthropic · 终端智能体', primary: true },
  { name: 'Codex', desc: 'OpenAI · 终端智能体', primary: true },
  { name: 'Antigravity', desc: 'Google DeepMind · 智能体', primary: true },
  { name: 'OpenCode', desc: '开源 · 终端智能体', primary: true },
  { name: 'Cursor', desc: 'AI 原生 IDE' },
  { name: 'Windsurf', desc: 'AI 原生 IDE' },
  { name: 'Gemini CLI', desc: 'Google · 终端智能体' },
  { name: 'GitHub Copilot', desc: 'GitHub · 编辑器助手' },
  { name: 'Aider', desc: '开源 · 终端结对编程' },
  { name: 'Cline / Roo', desc: 'VS Code 自主智能体' },
  { name: 'Trae', desc: '字节跳动 · AI IDE' },
  { name: '通义灵码', desc: '阿里 · 编辑器助手' },
]

const MODEL_MATRIX = [
  { name: 'Claude Opus / Sonnet', desc: 'Anthropic · 架构与代码主力' },
  { name: 'GPT-5 / o3', desc: 'OpenAI · 复杂推理与规划' },
  { name: 'Gemini Pro', desc: 'Google · 超长上下文与多模态' },
  { name: 'DeepSeek R1 / V3', desc: '深度求索 · 开源旗舰' },
  { name: 'Qwen3 / Coder', desc: '阿里通义 · 开源代码模型' },
  { name: 'GLM-4.5', desc: '智谱 AI · 国产商用底座' },
  { name: 'Kimi K2', desc: '月之暗面 · 长文本分析' },
  { name: 'Grok 4', desc: 'xAI · 实时推理' },
]

const FOOTER_QRS = [
  { name: '黄金看板小程序', desc: '全球宏观与黄金定价', image: '/qrcodes/mini-program-gold.jpg' },
  { name: '食息指南小程序', desc: '红利资产配置与投研', image: '/qrcodes/mini-program-shixi.jpg' },
  { name: '策略货架小程序', desc: '量化组合与标签图谱', image: '/qrcodes/mini-program-strategy.jpg' },
  { name: '赛事洞察小程序', desc: '中超数据与看台选座', image: '/qrcodes/mini-program-insight.jpg' },
  { name: '绿茵报名小程序', desc: '球队报名与统一登录', image: '/qrcodes/mini-program.jpg' },
  { name: '微信公众号', desc: '技术与投研文章首发', image: '/qrcodes/wechat-mp.jpg' },
  { name: '个人微信', desc: '架构交流与业务咨询', image: '/qrcodes/wechat-personal.jpg' },
]

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  as?: React.ElementType
}

function Reveal({ children, delay = 0, className = '', style, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}

export default function App() {
  const [activeQr, setActiveQr] = useState<{ name: string; desc: string; image: string } | null>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveQr(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const navItems = [
    { href: '#about', label: '简介与履历', num: '01' },
    { href: '#projects', label: '落地作品与小程序', num: '02' },
    { href: '#ai', label: 'AI 工程范式', num: '03' },
    { href: '#contact', label: '扫码体验与联系', num: '04' },
  ]

  return (
    <>
      <a className="skip-link" href="#about">
        跳到正文
      </a>

      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <img className="brand-avatar" src={SITE.avatar} alt={`${SITE.name}的头像`} />
            <span className="brand-text">
              oryjk<span className="brand-dot">.cn</span>
            </span>
          </a>
          <nav className="nav-links" aria-label="页面导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                <span className="nav-num">{item.num}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-vertical" aria-hidden="true">
            日拱一卒
          </div>
          <div className="wrap hero-inner">
            <p className="hero-overline">
              <span className="overline-tick" aria-hidden="true" />
              {SITE.title}
            </p>
            <h1 className="hero-title">
              <span className="hero-line">以严密的架构护栏，</span>
              <span className="hero-line">
                驾驭 AI 交付<span className="hero-mark">生产级系统</span>。
              </span>
            </h1>
            <p className="hero-sub">
              你好，我是 <strong>{SITE.name}</strong>。拥有 <strong>10 年+ 系统架构与研发管理经验（曾带领 30+ 人团队）</strong>。
              深耕金融科技、自研列式存储与高并发分布式底座；在 AI 时代，主力使用{' '}
              <strong>Rust、Go、TypeScript、Python</strong> 与 <strong>JVM（Kotlin / Scala / Java）</strong>，
              以 DDD 六边形架构与 TDD 为工程护栏，既能带领团队攻坚国家级与头部金融机构核心工程，也能以 1 人独立全栈模式闭环多端商业产品。
            </p>
            <ul className="hero-meta">
              <li>
                <span className="meta-label">坐标 / LOCATION</span>
                <span className="meta-value">成都 · Chengdu</span>
              </li>
              <li>
                <span className="meta-label">当前主力 / CURRENT STACK</span>
                <span className="meta-value">Rust / Go / TypeScript / Python</span>
              </li>
              <li>
                <span className="meta-label">企业级功底 / JVM HERITAGE</span>
                <span className="meta-value">Kotlin / Scala / Java · 10年+</span>
              </li>
              <li>
                <span className="meta-label">团队与单兵 / CAPACITY</span>
                <span className="meta-value">30+人团队管理 & 1人全栈闭环</span>
              </li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#projects">
                扫码体验落地小程序 <span aria-hidden="true">↓</span>
              </a>
              <a className="btn btn-ghost" href="#about">
                查看个人履历
              </a>
            </div>
          </div>
          <div className="hero-foot wrap" aria-hidden="true">
            <span>SCROLL</span>
            <span className="hero-rule" />
            <span>向下阅读</span>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span className="marquee-item" key={`${item}-${idx}`}>
                {item}
                <i className="marquee-star">✦</i>
              </span>
            ))}
          </div>
        </div>

        {/* 01 ABOUT / BIO */}
        <section className="section" id="about">
          <div className="wrap section-grid">
            <div className="section-side">
              <Reveal className="section-label">
                <span className="section-num">01</span>
                <span className="section-name">
                  关于 <em>ABOUT & BIO</em>
                </span>
              </Reveal>
            </div>
            <div className="section-main">
              <Reveal>
                <h2 className="about-lede">
                  从自研分布式列式存储内核，
                  <br />
                  到 AI 时代的单兵全栈产品矩阵。
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  过去十余年，我先后在外企研发中心（Active Network）与金融科技一线深耕。2016 年加入倍发科技后，从核心研发、项目架构师一路历练成长，至 2024 年起全面担任公司技术经理/技术负责人（期间峰值带领{' '}
                  <strong>30+ 人团队</strong>）。我主导并深度参与了公司核心<strong>自研分布式列式存储数据库 Barbeyond</strong>（支持单机、内嵌及基于 etcd + MinIO 的存算分离分布式架构），并一路带队将量化投研、买方投顾与风控系统落地到<strong>中证指数、招商银行、华宝证券、汇丰、复星</strong>等标杆金融机构。
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  进入大模型与智能体时代后，我没有停留在传统技术管理者的舒适区，而是把十多年沉淀的<strong>领域驱动设计（DDD 六边形/整洁架构）、测试驱动开发（TDD）与底层网络/存储内功</strong>，转化为驾驭 Agentic AI 的工程护栏。近一年来，我以 <strong>Rust + Go + TypeScript + Python</strong> 为主力武器，连续以<strong>「1 人独立全栈」</strong>模式完成了黄金看板、食息指南、策略货架、赛事洞察、绿茵报名等多个涵盖“高性能后端 + Web 工作台 + 微信小程序”的生产级商业应用。
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="pillars-grid">
                  {CAREER_PILLARS.map((pillar) => (
                    <div className="pillar-card" key={pillar.tag}>
                      <span className="pillar-tag">{pillar.tag}</span>
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={260}>
                <h3 className="toolbox-title">主力语言与技术底座 / CORE TECH STACK</h3>
                <ul className="toolbox">
                  {PRIMARY_TOOLBOX.map((item) => (
                    <li className="chip chip--primary" key={item}>
                      {item}
                    </li>
                  ))}
                  {INFRA_TOOLBOX.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 PROJECTS & MINI-PROGRAMS */}
        <section className="section section--alt" id="projects">
          <div className="wrap">
            <div className="section-head">
              <Reveal className="section-label">
                <span className="section-num">02</span>
                <span className="section-name">
                  作品与小程序 <em>SHIPPED PRODUCTS</em>
                </span>
              </Reveal>
              <Reveal delay={80}>
                <p className="section-note">
                  全部真实运行于生产环境 · 点击任意小程序码可放大扫码体验
                </p>
              </Reveal>
            </div>

            <div className="mp-grid">
              {MINI_PROGRAM_PROJECTS.map((mp, idx) => (
                <Reveal key={mp.index} delay={idx * 60} className="mp-card">
                  <div>
                    <div className="mp-meta">
                      <span>{mp.index}</span>
                      <span className="mp-badge">{mp.badge}</span>
                    </div>
                    <h3 className="mp-title">
                      {mp.name}
                      <span className="mp-latin">{mp.latin}</span>
                    </h3>
                    <p className="mp-desc">{mp.desc}</p>
                    <div className="mp-tags">
                      {mp.tags.map((t) => (
                        <i key={t}>{t}</i>
                      ))}
                    </div>
                    {mp.webUrl && (
                      <a
                        className="mp-link"
                        href={mp.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {mp.webLabel}
                      </a>
                    )}
                  </div>
                  <div className="mp-qr-box">
                    <button
                      type="button"
                      className="mp-qr-btn"
                      onClick={() =>
                        setActiveQr({
                          name: mp.name,
                          desc: mp.qrCaption,
                          image: mp.qrImage,
                        })
                      }
                      aria-label={`放大查看${mp.name}小程序码`}
                    >
                      <img src={mp.qrImage} alt={`${mp.name}小程序码`} loading="lazy" />
                    </button>
                    <span className="mp-qr-caption">{mp.qrCaption}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="sub-heading">
              <h3 className="sub-heading-title">代表性企业级金融工程与架构实绩</h3>
              <span className="sub-heading-note">ENTERPRISE FINTECH & INFRASTRUCTURE ARCHIVE</span>
            </Reveal>

            <ul className="proj-list">
              {ENTERPRISE_PROJECTS.map((proj, idx) => {
                const content = (
                  <>
                    <span className="proj-index">{proj.index}</span>
                    <span className="proj-body">
                      <span className="proj-name">
                        {proj.name}
                        <em className="proj-latin">{proj.latin}</em>
                      </span>
                      <span className="proj-desc">{proj.desc}</span>
                      <span className="proj-tags">
                        {proj.tags.map((t) => (
                          <i key={t}>{t}</i>
                        ))}
                      </span>
                    </span>
                    <span className="proj-arrow" aria-hidden="true">
                      {proj.href ? '↗' : '◦'}
                    </span>
                  </>
                )
                return (
                  <Reveal as="li" key={proj.index} delay={idx * 50} className="proj-item">
                    {proj.href ? (
                      <a
                        className="proj-row"
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="proj-row proj-row--static">{content}</div>
                    )}
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </section>

        {/* 03 AI COLLABORATION */}
        <section className="section" id="ai">
          <div className="wrap section-grid">
            <div className="section-side">
              <Reveal className="section-label">
                <span className="section-num">03</span>
                <span className="section-name">
                  AI 工程 <em>AI-NATIVE ENGINEERING</em>
                </span>
              </Reveal>
            </div>
            <div className="section-main">
              <Reveal>
                <h2 className="about-lede">
                  我把 AI 当作<span className="hero-mark">第一协作方</span>，
                  <br />
                  用整洁架构与自动化测试约束它的边界。
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  没有架构约束的 AI 编程只会更快地制造技术债。我在每个仓库中推行严密的{' '}
                  <strong>AGENTS.md / CLAUDE.md 架构契约、自研领域 Skill（如 rust-hexagonal-architecture.skill）、编译期类型检查（Rust SQLx / TypeScript Strict）与 TDD 单测护栏</strong>——让领域核心（Domain）绝对纯净，让 AI 在明确的输入输出端口（Ports & Adapters）内成倍释放产能。
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p>
                  从需求拆解、领域建模、并发状态机实现，到多端联调与容器化部署，人负责架构品味与业务决策，AI 负责执行速度与全栈广度，两者的乘积才有了上面这一整套独立落地的产品矩阵。
                </p>
              </Reveal>

              <Reveal delay={210}>
                <h3 className="toolbox-title">智能体武器库 / AI ARSENAL</h3>
                <ul className="ai-grid">
                  {AI_ARSENAL.map((item) => (
                    <li className="ai-cell" key={item.name}>
                      <span className="ai-name">
                        {item.name}
                        {item.primary && (
                          <i className="ai-star" title="日常主力">
                            ●
                          </i>
                        )}
                      </span>
                      <span className="ai-desc">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={270}>
                <h3 className="toolbox-title">主流模型矩阵 / MODEL MATRIX</h3>
                <ul className="ai-grid">
                  {MODEL_MATRIX.map((item) => (
                    <li className="ai-cell" key={item.name}>
                      <span className="ai-name">{item.name}</span>
                      <span className="ai-desc">{item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="ai-note">
                  <i className="ai-star">●</i> = 日常高强度主力工具
                </p>
              </Reveal>

              <Reveal>
                <div className="fde-card">
                  <div className="fde-brand">
                    <span className="fde-badge">FDE</span>
                    <span className="fde-full">Forward Deployed Engineer</span>
                  </div>
                  <div className="fde-body">
                    <p className="fde-lede">AI 研发效能转型与核心架构攻坚</p>
                    <p className="fde-desc">
                      既懂大模型与智能体的能力边界，又具备 10 年+ 金融级核心系统架构与 30+ 人团队管理落地经验——从 AI-Native 研发组织升级、复杂业务建模到全栈极速交付，欢迎交流合作。
                    </p>
                    <a className="btn btn-solid" href="#contact">
                      扫码交流 <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* 04 FOOTER / QR MATRIX */}
      <footer className="footer" id="contact">
        <div className="wrap footer-inner">
          <Reveal>
            <img className="footer-avatar" src={SITE.avatar} alt={`${SITE.name}的头像`} />
          </Reveal>
          <Reveal delay={70}>
            <p className="footer-thanks">
              感谢到访 <span className="footer-thanks-en">— THANKS FOR VISITING —</span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="footer-find">小程序作品与联系方式 / MINI PROGRAMS & CONTACT</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="footer-qrs">
              {FOOTER_QRS.map((qr) => (
                <button
                  type="button"
                  className="qr-card"
                  key={qr.name}
                  onClick={() => setActiveQr(qr)}
                  aria-label={`放大查看${qr.name}二维码`}
                >
                  <span className="qr-frame">
                    <img src={qr.image} alt={`${qr.name}二维码`} loading="lazy" />
                  </span>
                  <span className="qr-name">{qr.name}</span>
                  <span className="qr-desc">{qr.desc}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <div className="footer-bar">
            <span className="footer-copy">
              © {new Date().getFullYear()} {SITE.domain.toUpperCase()} · {SITE.name}
            </span>
            <a
              className="footer-icp"
              href={SITE.icpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.icp}
            </a>
          </div>
        </div>
      </footer>

      {activeQr && (
        <div
          className="qr-modal-backdrop"
          onClick={() => setActiveQr(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeQr.name}
        >
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="qr-modal-img-wrap">
              <img src={activeQr.image} alt={`${activeQr.name}二维码`} />
            </div>
            <h4 className="qr-modal-title">{activeQr.name}</h4>
            <p className="qr-modal-desc">{activeQr.desc}</p>
            <button
              type="button"
              className="qr-modal-close"
              onClick={() => setActiveQr(null)}
            >
              关闭 / ESC
            </button>
          </div>
        </div>
      )}
    </>
  )
}
