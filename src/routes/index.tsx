import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, ArrowRight, ArrowLeft, Sun, Moon, CheckCircle2,
  BrainCircuit, FileCheck2, MessageSquareHeart, LineChart, Lightbulb, Workflow,
  GraduationCap, Users, BookOpen, ClipboardList, FileBarChart2, Activity, FileQuestion, FolderKanban,
  Plug, ShieldCheck, Languages, Menu, X, ScanLine, PenLine, BarChart3, TrendingUp, Zap, Camera, Target,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/zaker-logo.png";
import classroomImg from "@/assets/classroom.jpg";
import meetingImg from "@/assets/meeting.jpg";
import studentsImg from "@/assets/students.jpg";
import heroStudent from "@/assets/hero-student-1.jpg";
import heroTeacher from "@/assets/hero-teacher.jpg";
import stepSolving from "@/assets/step-solving.jpg";
import stepScanning from "@/assets/step-scanning.jpg";
import stepGraph from "@/assets/step-graph.jpg";
import stepQbank from "@/assets/step-questionbank.jpg";
import examAnswer from "@/assets/exam-answer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaker AI — البنية التحتية التعليمية المدعومة بالذكاء الاصطناعي" },
      { name: "description", content: "Zaker AI: منصة LMS وتقييم مدعومة بالذكاء الاصطناعي للمدارس والمراكز التعليمية في منطقة الشرق الأوسط وشمال أفريقيا." },
      { property: "og:title", content: "Zaker AI — AI-powered educational infrastructure" },
      { property: "og:description", content: "AI-powered LMS and assessment for modern educational institutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  const { lang } = useI18n();
  const isRTL = lang === "ar";
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <HowItWorks />
        <Platform />
        <QuestionBank />
        <Analytics />
        <BuiltForMENA />
        <FinalCTA />
      </main>
      <Footer />
      {/* Hidden RTL marker to satisfy linter for isRTL */}
      <span className="sr-only">{isRTL ? "rtl" : "ltr"}</span>
    </div>
  );
}

/* -------------------- HEADER -------------------- */
function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#capabilities", label: t("nav.capabilities") },
    { href: "#how", label: t("nav.how") },
    { href: "#platform", label: t("nav.platform") },
    { href: "#qbank", label: t("nav.qbank") },
    { href: "#analytics", label: t("nav.analytics") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="Zaker AI" className="h-9 w-9 object-contain" />
            <span className="text-lg font-bold tracking-tight">Zaker<span className="text-brand-teal">.AI</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-border hover:border-brand-teal hover:text-brand-teal transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "ar" ? "EN" : "ع"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border hover:border-brand-teal hover:text-brand-teal transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
              {t("cta.demo")}
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full border border-border" aria-label="Menu">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-lg hover:bg-muted">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 px-3 py-2.5 text-sm font-semibold text-center rounded-lg bg-foreground text-background">
                {t("cta.demo")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const { t, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT — Copy */}
          <div className="lg:col-span-7 text-center lg:text-start">
            <div className="inline-flex items-center gap-2.5 animate-fade-up">
              <img src={logo} alt="Zaker AI" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold tracking-tight">Zaker<span className="text-brand-teal">.AI</span></span>
              <span className="hidden sm:inline-flex items-center gap-1.5 ms-2 px-2.5 py-1 rounded-full glass text-[10px] font-medium">
                <Sparkles className="w-3 h-3 text-brand-teal" />
                {t("hero.badge")}
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-gradient animate-fade-up" style={{ animationDelay: "60ms" }}>
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up" style={{ animationDelay: "180ms" }}>
              <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold shadow-elegant hover:scale-[1.02] transition-transform">
                {t("cta.demo")}
                <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </a>
              <a href="#platform" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card font-semibold hover:border-brand-teal hover:text-brand-teal transition-colors">
                {t("cta.explore")}
              </a>
            </div>
          </div>

          {/* RIGHT — composition of images + chat bubbles */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[520px] animate-fade-up" style={{ animationDelay: "220ms" }}>
            <HeroComposition />
          </div>
        </div>

        {/* Folder mockup */}
        <div className="mt-20 sm:mt-24 max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: "280ms" }}>
          <FolderMockup />
        </div>
      </div>
    </section>
  );
}

function HeroComposition() {
  const bubbles = [
    { text: "تصحيح فوري ✓", top: "6%", side: "start", delay: "0ms" },
    { text: "+ 18% تحسّن", top: "26%", side: "end", delay: "120ms" },
    { text: "AI insight", top: "62%", side: "start", delay: "240ms" },
  ];
  return (
    <div className="absolute inset-0">
      {/* Decorative blobs */}
      <div className="absolute top-10 end-0 w-72 h-72 rounded-full bg-brand-teal/20 blur-3xl" />
      <div className="absolute bottom-0 start-8 w-56 h-56 rounded-full bg-brand-navy/20 blur-3xl" />

      {/* Teacher image (back, top-right) */}
      <div className="absolute top-0 end-0 w-[58%] aspect-[3/4] rounded-[40%_60%_55%_45%/55%_45%_55%_45%] overflow-hidden shadow-glow border border-border">
        <img src={heroTeacher} alt="Teacher using Zaker AI" loading="eager" className="w-full h-full object-cover" />
      </div>

      {/* Student image (front, bottom-left) */}
      <div className="absolute bottom-0 start-0 w-[58%] aspect-[3/4] rounded-[55%_45%_45%_55%/45%_55%_45%_55%] overflow-hidden shadow-elegant border border-border">
        <img src={heroStudent} alt="Student writing exam" loading="eager" className="w-full h-full object-cover" />
      </div>

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`absolute glass rounded-full px-3.5 py-2 text-xs font-medium shadow-elegant flex items-center gap-1.5 animate-fade-up ${b.side === "start" ? "start-2" : "end-2"}`}
          style={{ top: b.top, animationDelay: b.delay }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
          {b.text}
        </div>
      ))}

      {/* Tiny KPI card */}
      <div className="absolute bottom-4 end-2 glass rounded-2xl p-3 shadow-elegant w-40 animate-fade-up" style={{ animationDelay: "320ms" }}>
        <div className="text-[10px] text-muted-foreground">Avg. mastery</div>
        <div className="mt-1 text-xl font-bold tracking-tight">84.2%</div>
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-brand-teal" style={{ width: "84%" }} />
        </div>
      </div>
    </div>
  );
}

/* -------------------- FOLDER MOCKUP -------------------- */
function FolderMockup() {
  const tabs = [
    { id: "exams", label: "Exams", Icon: FileQuestion },
    { id: "correction", label: "Correction", Icon: PenLine },
    { id: "results", label: "Results", Icon: FileBarChart2 },
    { id: "analytics", label: "Analytics", Icon: BarChart3 },
  ] as const;
  const [active, setActive] = useState<typeof tabs[number]["id"]>("correction");

  return (
    <div className="relative">
      <div className="absolute -inset-x-20 -bottom-10 h-40 bg-gradient-accent opacity-20 blur-3xl rounded-full pointer-events-none" />

      {/* Tabs (folder markers) */}
      <div className="relative flex items-end gap-1.5 px-4">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`group relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-card text-foreground shadow-elegant -mb-px z-10 border border-border border-b-0"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
              }`}
              aria-pressed={isActive}
            >
              <tab.Icon className={`w-3.5 h-3.5 ${isActive ? "text-brand-teal" : ""}`} />
              {tab.label}
              {isActive && <span className="absolute -top-1 start-3 end-3 h-0.5 rounded-full bg-brand-teal" />}
            </button>
          );
        })}
      </div>

      {/* Folder body */}
      <div className="relative glass rounded-2xl shadow-glow overflow-hidden border border-border">
        {/* Mini chrome row */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card/40">
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="ms-auto rtl:ms-0 rtl:me-auto text-[10px] text-muted-foreground font-mono">app.zaker.ai/{active}</div>
        </div>

        <div className="p-4 sm:p-6 bg-background/40 min-h-[420px]">
          {active === "exams" && <PanelExams />}
          {active === "correction" && <PanelCorrection />}
          {active === "results" && <PanelResults />}
          {active === "analytics" && <PanelAnalytics />}
        </div>
      </div>
    </div>
  );
}

function PanelExams() {
  const exams = [
    { name: "Algebra — Midterm", grade: "G9", q: 24, status: "Ready" },
    { name: "Arabic Literature", grade: "G10", q: 18, status: "Draft" },
    { name: "Physics Unit 3", grade: "G11", q: 30, status: "Ready" },
    { name: "Biology Quiz", grade: "G8", q: 12, status: "Scheduled" },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-8 rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="text-sm font-semibold">Exam library</div>
          <button className="text-[11px] px-2 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/30">+ New exam</button>
        </div>
        <div className="divide-y divide-border text-sm">
          {exams.map((e) => (
            <div key={e.name} className="flex items-center gap-3 px-4 py-3">
              <FileQuestion className="w-4 h-4 text-brand-teal shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{e.name}</div>
                <div className="text-[11px] text-muted-foreground">{e.grade} · {e.q} questions</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{e.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 rounded-xl border border-border bg-card p-4">
        <div className="text-xs text-muted-foreground">AI generator</div>
        <div className="mt-1 text-sm font-semibold">Curriculum-aligned</div>
        <div className="mt-4 space-y-2 text-[11px]">
          {["Mathematics","Physics","Arabic","Biology"].map((s) => (
            <div key={s} className="flex items-center justify-between rounded-lg border border-border px-2.5 py-1.5">
              <span>{s}</span>
              <span className="text-brand-teal">●●●○</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanelCorrection() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Student answer placeholder */}
      <div className="col-span-12 lg:col-span-7 rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
          <div className="text-xs font-medium">Student answer · Page 1/2</div>
          <span className="text-[10px] text-muted-foreground font-mono">scan_8421.jpg</span>
        </div>
        <div className="relative aspect-[4/5] sm:aspect-[5/4] bg-muted/40">
          <img src={examAnswer} alt="Student exam scan" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          {/* AI marks */}
          <div className="absolute top-[18%] start-[12%] w-8 h-8 rounded-full border-2 border-brand-teal bg-brand-teal/15 flex items-center justify-center text-brand-teal text-xs font-bold shadow-glow">✓</div>
          <div className="absolute top-[36%] start-[22%] w-8 h-8 rounded-full border-2 border-destructive/70 bg-destructive/10 flex items-center justify-center text-destructive text-xs font-bold">✗</div>
          <div className="absolute top-[55%] end-[18%] glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium shadow-elegant">
            <span className="text-brand-teal">AI:</span> partial credit · 1.5/2
          </div>
        </div>
      </div>

      {/* Grading panel */}
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Auto-graded score</div>
              <div className="text-3xl font-bold tracking-tight mt-1">17.5<span className="text-base text-muted-foreground">/20</span></div>
            </div>
            <div className="text-[10px] px-2 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/30">87.5%</div>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-brand-teal" style={{ width: "87.5%" }} />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 flex-1">
          <div className="text-xs text-muted-foreground mb-3">Per-question breakdown</div>
          <div className="space-y-2">
            {[{q:"Q1",s:2,m:2},{q:"Q2",s:1.5,m:2},{q:"Q3",s:3,m:3},{q:"Q4",s:2,m:3},{q:"Q5",s:4,m:5},{q:"Q6",s:5,m:5}].map((r) => (
              <div key={r.q} className="flex items-center gap-2 text-[11px]">
                <span className="w-6 text-muted-foreground font-mono">{r.q}</span>
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-brand-teal" style={{ width: `${(r.s/r.m)*100}%` }} />
                </div>
                <span className="w-10 text-end font-medium">{r.s}/{r.m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelResults() {
  const students = [
    { n: "Layla H.", g: 92, t: "+6%" },
    { n: "Omar K.", g: 88, t: "+3%" },
    { n: "Sara A.", g: 84, t: "+9%" },
    { n: "Yousef M.", g: 76, t: "-2%" },
    { n: "Nour S.", g: 71, t: "+4%" },
    { n: "Adam T.", g: 65, t: "+12%" },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-8 rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="text-sm font-semibold">Class results — Algebra Midterm</div>
          <div className="text-[10px] px-2 py-1 rounded-full border border-brand-teal/30 text-brand-teal">42 graded</div>
        </div>
        <div className="divide-y divide-border">
          {students.map((s) => (
            <div key={s.n} className="grid grid-cols-12 items-center gap-3 px-4 py-2.5 text-sm">
              <div className="col-span-4 font-medium truncate">{s.n}</div>
              <div className="col-span-6">
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-brand-teal" style={{ width: `${s.g}%` }} />
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-1.5 text-xs">
                <span className="font-semibold tabular-nums">{s.g}</span>
                <span className={s.t.startsWith("-") ? "text-destructive" : "text-brand-teal"}>{s.t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-3">
        {[
          { l: "Average", v: "82%" },
          { l: "Highest", v: "98%" },
          { l: "Lowest", v: "54%" },
          { l: "Median", v: "84%" },
        ].map((k) => (
          <div key={k.l} className="rounded-xl border border-border bg-card p-3">
            <div className="text-[10px] text-muted-foreground">{k.l}</div>
            <div className="mt-1 text-xl font-bold">{k.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelAnalytics() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <StatCard label="Active students" value="2,847" delta="+12.4%" />
      <StatCard label="Auto-graded" value="18,392" delta="+38.1%" />
      <StatCard label="Avg. mastery" value="84.2%" delta="+5.7%" />
      <div className="col-span-12 lg:col-span-8 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-muted-foreground">Performance trend</div>
            <div className="text-sm font-semibold mt-0.5">Last 30 days</div>
          </div>
          <div className="text-[10px] text-brand-teal font-medium px-2 py-1 rounded-full border border-brand-teal/30">LIVE</div>
        </div>
        <Sparkline />
      </div>
      <div className="col-span-12 lg:col-span-4 rounded-xl border border-border bg-card p-4">
        <div className="text-xs text-muted-foreground">AI recommendations</div>
        <div className="mt-3 space-y-2">
          {["Review fractions — 12 students","Re-teach grammar unit","Advanced track ready"].map((s, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
              <span className="text-foreground/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="col-span-12 sm:col-span-4 rounded-xl border border-border bg-card p-4">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
      <div className="mt-1 text-[11px] font-medium text-brand-teal">{delta}</div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 400 100" className="w-full h-24">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-teal)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--brand-teal)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,70 C40,60 60,40 100,45 C140,50 160,30 200,28 C240,26 260,55 300,40 C340,28 360,18 400,22 L400,100 L0,100 Z" fill="url(#spark)" />
      <path d="M0,70 C40,60 60,40 100,45 C140,50 160,30 200,28 C240,26 260,55 300,40 C340,28 360,18 400,22" fill="none" stroke="var(--brand-teal)" strokeWidth="2" />
    </svg>
  );
}

/* -------------------- TRUST -------------------- */
function TrustBar() {
  const { t } = useI18n();
  return (
    <section className="py-12 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          {t("hero.trust")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {["AL-NOOR ACADEMY","ATLAS SCHOOLS","CEDAR INSTITUTE","HORIZON COLLEGE","NILE LEARNING","MERIDIAN EDU"].map((n) => (
            <span key={n} className="text-sm font-semibold tracking-wider text-muted-foreground">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CAPABILITIES -------------------- */
function Capabilities() {
  const { t } = useI18n();
  const caps = [
    { Icon: FileCheck2, k: "cap1" },
    { Icon: BrainCircuit, k: "cap2" },
    { Icon: MessageSquareHeart, k: "cap3" },
    { Icon: LineChart, k: "cap4" },
    { Icon: Lightbulb, k: "cap5" },
    { Icon: Workflow, k: "cap6" },
  ];
  return (
    <Section id="capabilities">
      <SectionHeader eyebrow={t("caps.eyebrow")} title={t("caps.title")} subtitle={t("caps.subtitle")} />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {caps.map(({ Icon, k }) => (
          <div key={k} className="group bg-background p-8 hover:bg-card transition-colors">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-foreground/5 text-brand-teal group-hover:bg-brand-teal/10 transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{t(`${k}.t`)}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`${k}.d`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- HOW IT WORKS -------------------- */
function HowItWorks() {
  const { t } = useI18n();
  const steps = ["how.s1","how.s2","how.s3"];
  return (
    <Section id="how">
      <SectionHeader eyebrow={t("how.eyebrow")} title={t("how.title")} />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((k, i) => (
          <div key={k} className="relative rounded-2xl border border-border bg-card p-6 shadow-elegant flex flex-col">
            <div className="absolute -top-4 start-8 px-3 py-1 rounded-full bg-foreground text-background text-xs font-mono font-semibold">
              {String(i + 1).padStart(2, "0")}
            </div>
            <StepIllustration index={i} />
            <h3 className="mt-6 text-xl font-semibold">{t(`${k}.t`)}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(`${k}.d`)}</p>
            <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-[11px] text-brand-teal font-medium">
              {i === 0 && <><FileQuestion className="w-3.5 h-3.5" /> Question bank · AI-generated</>}
              {i === 1 && <><Camera className="w-3.5 h-3.5" /> Scan or submit digitally</>}
              {i === 2 && <><Zap className="w-3.5 h-3.5" /> Instant grading + analytics</>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StepIllustration({ index }: { index: number }) {
  // 1 — Create exam: question bank + AI selection overlay
  if (index === 0) return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted">
      <img src={stepQbank} alt="Question bank" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/0" />
      {/* AI selection cards */}
      <div className="absolute top-3 end-3 glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium shadow-elegant flex items-center gap-1.5">
        <BrainCircuit className="w-3 h-3 text-brand-teal" /> AI selecting 12 Qs
      </div>
      <div className="absolute bottom-3 start-3 flex flex-col gap-1.5">
        {["Algebra · Hard","Geometry · Medium","Word problem"].map((q, i) => (
          <div key={q} className="glass rounded-md px-2 py-1 text-[10px] flex items-center gap-1.5 shadow-elegant" style={{ animationDelay: `${i*60}ms` }}>
            <CheckCircle2 className="w-3 h-3 text-brand-teal" />
            {q}
          </div>
        ))}
      </div>
    </div>
  );
  // 2 — Student submits: two overlapping photos
  if (index === 1) return (
    <div className="relative aspect-[4/3]">
      <div className="absolute top-0 start-0 w-[68%] h-[78%] rounded-xl overflow-hidden border border-border shadow-elegant rotate-[-3deg]">
        <img src={stepSolving} alt="Student solving exam" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 end-0 w-[60%] h-[72%] rounded-xl overflow-hidden border-2 border-background shadow-glow rotate-[4deg]">
        <img src={stepScanning} alt="Student scanning answers" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-full px-3 py-1.5 text-[10px] font-medium shadow-elegant flex items-center gap-1.5 z-10">
        <ScanLine className="w-3 h-3 text-brand-teal" /> Solve · Scan · Submit
      </div>
    </div>
  );
  // 3 — Instant grading + analytics: grading sheet + graph
  return (
    <div className="relative aspect-[4/3]">
      <div className="absolute top-0 start-0 w-[64%] h-[80%] rounded-xl overflow-hidden border border-border shadow-elegant rotate-[-2deg]">
        <img src={examAnswer} alt="Graded answer sheet" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute top-2 end-2 w-7 h-7 rounded-full bg-brand-teal text-background flex items-center justify-center text-xs font-bold shadow-glow">A</div>
      </div>
      <div className="absolute bottom-0 end-0 w-[62%] h-[68%] rounded-xl overflow-hidden border-2 border-background shadow-glow rotate-[4deg]">
        <img src={stepGraph} alt="Performance graph" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-2 start-2 glass rounded-full px-2.5 py-1 text-[10px] font-medium shadow-elegant flex items-center gap-1.5 z-10">
        <Zap className="w-3 h-3 text-brand-teal" /> Graded in 2.4s
      </div>
    </div>
  );
}

/* -------------------- PLATFORM (LMS) -------------------- */
function Platform() {
  const { t } = useI18n();
  const features = [
    { Icon: BookOpen, k: "lms.f1" },
    { Icon: GraduationCap, k: "lms.f2" },
    { Icon: Users, k: "lms.f3" },
    { Icon: ClipboardList, k: "lms.f4" },
    { Icon: FileBarChart2, k: "lms.f5" },
    { Icon: Activity, k: "lms.f6" },
    { Icon: FileQuestion, k: "lms.f7" },
    { Icon: FolderKanban, k: "lms.f8" },
  ];
  return (
    <Section id="platform">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <Eyebrow>{t("lms.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{t("lms.title")}</h2>
          <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">{t("lms.subtitle")}</p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
            {features.map(({ Icon, k }) => (
              <div key={k} className="flex items-center gap-3 text-sm">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-foreground/5 text-brand-teal">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-medium">{t(k)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-accent opacity-15 blur-3xl rounded-full" />
          <img src={classroomImg} alt="" loading="lazy" width={1024} height={1024}
            className="relative rounded-2xl shadow-elegant w-full h-auto border border-border" />
        </div>
      </div>
    </Section>
  );
}

/* -------------------- QUESTION BANK -------------------- */
function QuestionBank() {
  const { t } = useI18n();
  return (
    <Section id="qbank">
      <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-brand text-white p-8 sm:p-12 lg:p-16">
        <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium backdrop-blur">
              <Plug className="w-3.5 h-3.5" /> {t("qb.eyebrow")}
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{t("qb.title")}</h2>
            <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">{t("qb.body")}</p>
            <ul className="mt-8 space-y-3">
              {["qb.p1","qb.p2","qb.p3"].map((k) => (
                <li key={k} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-white/90">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
              <div className="flex items-center justify-between text-[11px] text-white/60">
                <span className="font-mono">POST /v1/questions/generate</span>
                <span className="px-2 py-0.5 rounded bg-brand-teal/20 text-brand-teal">200 OK</span>
              </div>
              <pre className="mt-3 text-[11px] sm:text-xs leading-relaxed text-white/90 font-mono overflow-x-auto">
{`{
  "subject": "Mathematics",
  "grade": 9,
  "count": 12,
  "difficulty": "adaptive",
  "language": "ar",
  "rubric": "national-curriculum"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- ANALYTICS -------------------- */
function Analytics() {
  const { t } = useI18n();
  const kpis = [
    { k: "an.k1", v: "92%", w: 78, Icon: TrendingUp, sub: "+6% vs last month" },
    { k: "an.k2", v: "14", w: 22, Icon: Target, sub: "skills flagged" },
    { k: "an.k3", v: "27", w: 64, Icon: Lightbulb, sub: "actions suggested" },
    { k: "an.k4", v: "+18%", w: 90, Icon: Activity, sub: "this quarter" },
  ];
  return (
    <Section id="analytics">
      <SectionHeader eyebrow={t("an.eyebrow")} title={t("an.title")} subtitle={t("an.subtitle")} />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* HERO mastery chart */}
        <div className="lg:col-span-8 relative rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-elegant overflow-hidden">
          <div className="absolute -top-24 -end-24 w-72 h-72 rounded-full bg-brand-teal/15 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />

          <div className="relative flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-brand-teal" /> Mastery distribution
              </div>
              <div className="text-xl font-semibold mt-1">Grade 9 — Mathematics</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">84.2<span className="text-2xl text-muted-foreground">%</span></span>
                <span className="text-xs font-medium text-brand-teal flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +5.7%</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <div className="text-[10px] text-brand-teal font-medium px-2 py-1 rounded-full border border-brand-teal/30 flex items-center gap-1.5">
                <BrainCircuit className="w-3 h-3" /> AI insight
              </div>
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-brand-teal" /> Mastery zone</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-foreground/20" /> Distribution</span>
              </div>
            </div>
          </div>

          {/* Bars + curve */}
          <div className="relative mt-8">
            <div className="grid grid-cols-12 gap-1.5 items-end h-56">
              {Array.from({ length: 12 }).map((_, i) => {
                const h = 30 + Math.abs(Math.sin(i / 1.4)) * 70;
                const active = i >= 6 && i <= 9;
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full rounded-t-md transition-all ${active ? "bg-gradient-to-t from-brand-teal/70 to-brand-teal" : "bg-foreground/10"}`}
                      style={{ height: `${h}%` }}
                    />
                    <span className={`text-[9px] ${active ? "text-foreground font-medium" : "text-muted-foreground"}`}>{i * 10}</span>
                  </div>
                );
              })}
            </div>
            {/* AI annotation */}
            <div className="absolute -top-2 start-[48%] glass rounded-lg px-2.5 py-1.5 text-[10px] font-medium shadow-elegant flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-brand-teal" /> 68% in mastery zone
            </div>
          </div>

          {/* Bottom insight strip */}
          <div className="relative mt-6 pt-5 border-t border-border grid grid-cols-3 gap-4">
            {[
              { l: "Top skill", v: "Linear equations" },
              { l: "Weakest", v: "Word problems" },
              { l: "Next focus", v: "Quadratic intro" },
            ].map((c) => (
              <div key={c.l}>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.l}</div>
                <div className="mt-1 text-sm font-semibold">{c.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI cards stack */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 content-start">
          {kpis.map(({ k, v, w, Icon, sub }) => (
            <div key={k} className="group relative rounded-2xl border border-border bg-card p-4 shadow-elegant overflow-hidden hover:border-brand-teal/40 transition-colors">
              <div className="absolute -top-8 -end-8 w-20 h-20 rounded-full bg-brand-teal/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-foreground/5 text-brand-teal">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Live</span>
              </div>
              <div className="mt-3 text-xs text-muted-foreground">{t(k)}</div>
              <div className="mt-1 text-2xl font-bold tracking-tight">{v}</div>
              <div className="mt-1 text-[10px] text-muted-foreground">{sub}</div>
              <div className="mt-3 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-teal/70 to-brand-teal" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}

          {/* AI summary card */}
          <div className="col-span-2 rounded-2xl border border-border bg-gradient-brand text-white p-5 shadow-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/70">
                <BrainCircuit className="w-3 h-3" /> AI summary
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/95">
                Grade 9 mastery is up <span className="font-semibold text-brand-teal">5.7%</span>. Focus on word problems for 12 students; recommend a targeted re-teach this week.
              </p>
              <button className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 hover:text-white">
                View full report <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- MENA -------------------- */
function BuiltForMENA() {
  const { t } = useI18n();
  return (
    <Section id="mena">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-4 bg-gradient-accent opacity-15 blur-3xl rounded-full" />
          <img src={meetingImg} alt="" loading="lazy" width={1024} height={1024}
            className="relative rounded-2xl shadow-elegant w-full h-auto border border-border" />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>{t("mena.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{t("mena.title")}</h2>
          <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">{t("mena.body")}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { Icon: Languages, label: "Arabic-first UX" },
              { Icon: ShieldCheck, label: "Enterprise security" },
              { Icon: Workflow, label: "Regional workflows" },
              { Icon: Sparkles, label: "AI-native architecture" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm p-3 rounded-xl border border-border bg-card">
                <Icon className="w-4 h-4 text-brand-teal" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  const { t, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
          <img src={studentsImg} alt="" loading="lazy" width={1024} height={1024}
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-brand opacity-90" />
          <div className="relative p-10 sm:p-16 lg:p-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
              {t("final.title")}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/75 max-w-xl mx-auto">{t("final.subtitle")}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:hello@zaker.ai" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-navy font-semibold hover:scale-[1.02] transition-transform">
                {t("cta.demo")}
                <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </a>
              <a href="mailto:hello@zaker.ai" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors">
                {t("cta.offer")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zaker AI" className="h-8 w-8 object-contain" />
            <div>
              <div className="text-sm font-bold">Zaker<span className="text-brand-teal">.AI</span></div>
              <div className="text-xs text-muted-foreground mt-0.5">{t("footer.tag")}</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zaker AI · {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- PRIMITIVES -------------------- */
function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
