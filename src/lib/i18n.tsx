import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "ar" | "en";
type Theme = "dark" | "light";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  ar: {
    "nav.capabilities": "القدرات",
    "nav.how": "كيف يعمل",
    "nav.platform": "المنصة",
    "nav.qbank": "بنك الأسئلة",
    "nav.analytics": "التحليلات",
    "nav.contact": "تواصل",
    "cta.demo": "اطلب عرضًا توضيحيًا",
    "cta.offer": "احصل على عرض مخصص",
    "cta.explore": "استكشف المنصة",
    "hero.badge": "بنية تحتية تعليمية مدعومة بالذكاء الاصطناعي",
    "hero.title": "ذكاء اصطناعي يقود مؤسستك التعليمية إلى المستقبل",
    "hero.subtitle": "منصة Zaker AI تُحوّل المدارس والمراكز التعليمية إلى مؤسسات حديثة، عبر أتمتة التصحيح، وتوليد الاختبارات، وتحليل أداء الطلاب بذكاء.",
    "hero.trust": "موثوق به من قبل المؤسسات التعليمية الرائدة في منطقة الشرق الأوسط وشمال أفريقيا",
    "caps.eyebrow": "القدرات الأساسية",
    "caps.title": "طبقة ذكاء اصطناعي مبنية للمؤسسات التعليمية",
    "caps.subtitle": "كل ما تحتاجه مؤسستك لتحويل العمليات التعليمية إلى تجربة ذكية وفعّالة.",
    "cap1.t": "تصحيح آلي للاختبارات", "cap1.d": "تصحيح فوري ودقيق لمختلف أنواع الأسئلة والاختبارات الكتابية.",
    "cap2.t": "بنك أسئلة ذكي", "cap2.d": "ولّد أسئلة عالية الجودة بحسب المنهج والمستوى ومعايير التقييم.",
    "cap3.t": "ملاحظات شخصية للطلاب", "cap3.d": "توصيات مخصصة لكل طالب بناءً على أدائه ونقاط القوة والضعف.",
    "cap4.t": "تحليلات لحظية", "cap4.d": "لوحات تحكم تنفيذية تكشف أداء المؤسسة بكل تفاصيله.",
    "cap5.t": "توصيات ذكية", "cap5.d": "اقتراحات تعليمية مدعومة بالبيانات لتطوير العملية التعليمية.",
    "cap6.t": "تدفقات عمل ذكية", "cap6.d": "أتمتة كاملة لدورة الإنشاء والتقييم والتحليل والتطوير.",
    "how.eyebrow": "كيف يعمل",
    "how.title": "ثلاث خطوات لتحويل عمليات التقييم في مؤسستك",
    "how.s1.t": "أنشئ الاختبارات", "how.s1.d": "أنشئ أو ولّد التقييمات والواجبات بمساعدة الذكاء الاصطناعي خلال دقائق.",
    "how.s2.t": "يُسلّم الطلاب", "how.s2.d": "تجربة تسليم سلسة للطلاب عبر بوابات حديثة على كل الأجهزة.",
    "how.s3.t": "يُحلّل الذكاء", "how.s3.d": "تصحيح وتحليل تلقائي وتقارير قابلة للتنفيذ للمعلمين والإدارة.",
    "lms.eyebrow": "المنصة الكاملة",
    "lms.title": "نظام تشغيل تعليمي متكامل لمؤسستك",
    "lms.subtitle": "بنية موحّدة تجمع الإدارة، التعلّم، التقييم، والتحليل في تجربة واحدة.",
    "lms.f1": "المقررات", "lms.f2": "بوابات الطلاب", "lms.f3": "بوابات المعلمين", "lms.f4": "الواجبات",
    "lms.f5": "التقارير", "lms.f6": "التحليلات", "lms.f7": "الاختبارات", "lms.f8": "إدارة المحتوى",
    "qb.eyebrow": "إضافة بنك الأسئلة",
    "qb.title": "طبقة ذكاء اصطناعي مرنة فوق نظامك الحالي",
    "qb.body": "إذا كنت تستخدم بالفعل نظام إدارة تعلّم، يمكنك دمج بنك الأسئلة ومحرك التصحيح من Zaker AI مباشرةً، دون الحاجة لاستبدال بنيتك التحتية.",
    "qb.p1": "تكامل عبر واجهات برمجية حديثة",
    "qb.p2": "توليد أسئلة بحسب المنهج",
    "qb.p3": "تصحيح آلي لمختلف أنواع التقييم",
    "an.eyebrow": "التحليلات والرؤى",
    "an.title": "رؤية تنفيذية كاملة لأداء مؤسستك",
    "an.subtitle": "تتبّع تقدّم الطلاب، حدّد الفجوات، واتخذ قرارات مبنية على البيانات.",
    "an.k1": "تقدم الطلاب", "an.k2": "الفجوات المهارية", "an.k3": "توصيات الذكاء", "an.k4": "اتجاهات الأداء",
    "mena.eyebrow": "مصمَّم للمنطقة",
    "mena.title": "تجربة عربية أصيلة، ببنية مؤسسية حديثة",
    "mena.body": "Zaker AI مبنية من الأساس لتدعم المؤسسات ثنائية اللغة في منطقة الشرق الأوسط وشمال أفريقيا، بتجربة RTL أصيلة وأداء يتناسب مع العمليات المحلية.",
    "final.title": "حوّل عمليات مؤسستك التعليمية بالذكاء الاصطناعي",
    "final.subtitle": "اطلب عرضًا توضيحيًا أو احصل على عرض مخصص يناسب احتياجات مؤسستك.",
    "footer.tag": "بنية تحتية تعليمية ذكية. مبنية للمؤسسات الحديثة.",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  en: {
    "nav.capabilities": "Capabilities", "nav.how": "How it works", "nav.platform": "Platform",
    "nav.qbank": "Question Bank", "nav.analytics": "Analytics", "nav.contact": "Contact",
    "cta.demo": "Request a demo", "cta.offer": "Get custom offer", "cta.explore": "Explore platform",
    "hero.badge": "AI-powered educational infrastructure",
    "hero.title": "AI infrastructure for the next generation of institutions",
    "hero.subtitle": "Zaker AI transforms schools and educational centers into modern, AI-native institutions — automating assessment, generating questions, and delivering intelligent analytics at scale.",
    "hero.trust": "Trusted by leading institutions across the MENA region",
    "caps.eyebrow": "Core capabilities",
    "caps.title": "An AI layer built for educational institutions",
    "caps.subtitle": "Everything your institution needs to turn educational operations into an intelligent, efficient experience.",
    "cap1.t": "Automated assessment", "cap1.d": "Instant, accurate correction across multiple question types and written exams.",
    "cap2.t": "AI question bank", "cap2.d": "Generate high-quality questions aligned to curriculum, level, and rubric.",
    "cap3.t": "Personalized feedback", "cap3.d": "Tailored recommendations for every student based on strengths and gaps.",
    "cap4.t": "Real-time analytics", "cap4.d": "Executive dashboards that surface institutional performance in detail.",
    "cap5.t": "Smart recommendations", "cap5.d": "Data-driven suggestions to elevate teaching and learning outcomes.",
    "cap6.t": "Intelligent workflows", "cap6.d": "Full automation of the create, assess, analyze, and improve loop.",
    "how.eyebrow": "How it works",
    "how.title": "Three steps to transform assessment in your institution",
    "how.s1.t": "Create assessments", "how.s1.d": "Author or AI-generate exams and assignments in minutes.",
    "how.s2.t": "Students submit", "how.s2.d": "A seamless submission experience across modern portals and devices.",
    "how.s3.t": "AI analyzes", "how.s3.d": "Automatic grading, deep analytics, and actionable insights for teachers and leadership.",
    "lms.eyebrow": "Full platform",
    "lms.title": "A complete operating system for your institution",
    "lms.subtitle": "A unified architecture that brings administration, learning, assessment, and analytics into one experience.",
    "lms.f1": "Courses", "lms.f2": "Student portals", "lms.f3": "Teacher portals", "lms.f4": "Assignments",
    "lms.f5": "Reports", "lms.f6": "Analytics", "lms.f7": "Exams", "lms.f8": "Content management",
    "qb.eyebrow": "Question Bank add-on",
    "qb.title": "A flexible AI layer on top of your existing system",
    "qb.body": "Already running an LMS? Integrate the Zaker AI question bank and correction engine directly — without replacing your existing infrastructure.",
    "qb.p1": "Modern API integration",
    "qb.p2": "Curriculum-aligned generation",
    "qb.p3": "Automated correction across assessment types",
    "an.eyebrow": "Analytics & insights",
    "an.title": "Executive-level visibility into institutional performance",
    "an.subtitle": "Track student progress, surface skill gaps, and make data-informed decisions.",
    "an.k1": "Student progress", "an.k2": "Skill gaps", "an.k3": "AI recommendations", "an.k4": "Performance trends",
    "mena.eyebrow": "Built for MENA",
    "mena.title": "An authentic Arabic-first experience, with modern enterprise architecture",
    "mena.body": "Zaker AI is engineered from the ground up for bilingual institutions in the MENA region — with native RTL and workflows tuned to regional operations.",
    "final.title": "Modernize your educational operations with AI",
    "final.subtitle": "Request a demo or get a custom offer tailored to your institution's needs.",
    "footer.tag": "Intelligent educational infrastructure. Built for modern institutions.",
    "footer.rights": "All rights reserved",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  theme: Theme;
  toggleTheme: () => void;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLang = (localStorage.getItem("zaker-lang") as Lang | null) ?? "ar";
    const savedTheme = (localStorage.getItem("zaker-theme") as Theme | null) ?? "light";
    setLangState(savedLang);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (typeof localStorage !== "undefined") localStorage.setItem("zaker-lang", lang);
  }, [lang]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof localStorage !== "undefined") localStorage.setItem("zaker-theme", theme);
  }, [theme]);

  const t = (key: string) => translations[lang][key] ?? key;
  const setLang = (l: Lang) => setLangState(l);
  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  return (
    <I18nCtx.Provider value={{ lang, setLang, t, theme, toggleTheme }}>{children}</I18nCtx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}