"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Shield,
  Cloud,
  FileText,
  Headphones,
  Settings,
  Users,
  Building2,
  Factory,
  Truck,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Landmark,
  HardHat,
  FlaskConical,
  Star,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  BookOpen,
  DollarSign,
  Package,
  UserCheck,
  ClipboardList,
  TrendingUp,
  Zap,
  Globe,
  Lock,
  MessageCircle,
} from "lucide-react";

/* ─── Animated Counter Hook ─── */
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ─── Navigation ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Modules", href: "#modules" },
    { label: "Industries", href: "#industries" },
    { label: "Why GBMS", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/gbms-logo.png"
            alt="GBM Solutions"
            width={120}
            height={48}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="text-lg font-light text-slate-500 hidden sm:inline">
            Solutions
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-accent transition-colors px-4 py-2"
          >
            Contact
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold text-white bg-gradient-brand hover:opacity-90 transition-all px-5 py-2.5 rounded-full"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-navy-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-slate-200 mt-3">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-accent py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="text-sm font-semibold text-white bg-gradient-brand text-center px-5 py-2.5 rounded-full mt-2"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-light/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-slate-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Pakistan&apos;s #1 Local ERP
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Transform your{" "}
              <span className="text-gradient">business</span> with
              intelligent ERP
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              The only ERP built from the ground up for Pakistani businesses.
              FBR-compliant digital invoicing, real-time analytics, and
              end-to-end automation — all in one platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/25 group"
              >
                Start Free Trial
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all"
              >
                Explore Modules
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>FBR compliant</span>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative animate-float">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/80 border border-slate-100 p-6 relative z-10">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      Dashboard Overview
                    </p>
                    <p className="text-2xl font-bold text-navy-700">
                      PKR 12.4M
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                    <TrendingUp size={12} />
                    +24.5%
                  </div>
                </div>

                {/* Chart Bars */}
                <div className="flex items-end gap-2 h-32 mb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-accent to-accent-light opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
                <div className="flex justify-between text-[10px] text-slate-300 font-medium">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>

                {/* Mini Stats Row */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    {
                      label: "Revenue",
                      value: "PKR 4.2M",
                      change: "+12%",
                    },
                    {
                      label: "Orders",
                      value: "1,847",
                      change: "+8%",
                    },
                    {
                      label: "Clients",
                      value: "284",
                      change: "+18%",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 rounded-xl p-3 text-center"
                    >
                      <p className="text-[10px] text-slate-400">{stat.label}</p>
                      <p className="text-sm font-bold text-navy-700">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-green-500 font-semibold">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Card - FBR */}
              <div className="absolute -left-8 top-16 bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-100 p-4 z-20 hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Shield size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-700">
                      FBR Verified
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Invoice #4821 sent
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Activity */}
              <div className="absolute -right-4 bottom-20 bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-100 p-4 z-20 hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <BarChart3 size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-700">
                      Real-time Analytics
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Live data sync active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trusted By Section ─── */
function TrustedBy() {
  const companies = [
    "Bestway Cement",
    "Maple Leaf Cement",
    "Fauji Cement",
    "Continental Enterprises",
    "Precision Manufacturing",
    "National Foods",
  ];

  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider whitespace-nowrap">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 w-full">
            {companies.map((company, i) => (
              <span
                key={i}
                className="text-lg font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function Stats() {
  const s1 = useCounter(500);
  const s2 = useCounter(19);
  const s3 = useCounter(12);
  const s4 = useCounter(99);

  const stats = [
    {
      ref: s1.ref,
      count: s1.count,
      suffix: "+",
      label: "Clients Served",
      desc: "Across Pakistan",
    },
    {
      ref: s2.ref,
      count: s2.count,
      suffix: "+",
      label: "Industries",
      desc: "Served nationwide",
    },
    {
      ref: s3.ref,
      count: s3.count,
      suffix: "+",
      label: "Years Experience",
      desc: "Since 2013",
    },
    {
      ref: s4.ref,
      count: s4.count,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "And growing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref}
              className="text-center group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {stat.count}
                {stat.suffix}
              </div>
              <div className="text-base font-semibold text-navy-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features Section ─── */
function Features() {
  const features = [
    {
      icon: <Settings size={24} />,
      title: "Fully Customizable",
      desc: "Tailor every workflow, report, and process to match your exact business needs. No rigid templates.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & On-Premise",
      desc: "Deploy on your own servers or in the cloud. Switch anytime with zero data loss or downtime.",
    },
    {
      icon: <FileText size={24} />,
      title: "FBR Digital Invoicing",
      desc: "Built-in compliance with Pakistan's Federal Board of Revenue digital invoicing requirements.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-time Analytics",
      desc: "Live dashboards and reports that give you instant visibility into every corner of your business.",
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      desc: "Bank-grade encryption, role-based access control, and complete audit trails for every transaction.",
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Expert Support",
      desc: "Dedicated local support team available around the clock. Real humans, not chatbots.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Why GBMS
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Everything you need to run your business
          </h2>
          <p className="text-slate-500 text-lg">
            Built specifically for Pakistani enterprises, with local compliance
            baked in from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Modules Section ─── */
function Modules() {
  const modules = [
    {
      icon: <BookOpen size={24} />,
      title: "General Ledger",
      desc: "Complete financial management with flexible chart of accounts, automated trial balance, and comprehensive reporting.",
      features: [
        "Multi-currency support",
        "Automated reconciliation",
        "Financial statements",
      ],
    },
    {
      icon: <DollarSign size={24} />,
      title: "Payroll Management",
      desc: "End-to-end payroll processing with tax compliance, loan management, and automated salary disbursement.",
      features: [
        "Tax compliance",
        "Loan management",
        "Auto disbursement",
      ],
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Sales Management",
      desc: "Full sales lifecycle from customer onboarding to collections with FBR-compliant digital invoicing built in.",
      features: [
        "Order management",
        "FBR invoicing",
        "Sales analytics",
      ],
    },
    {
      icon: <Package size={24} />,
      title: "Procurement & Inventory",
      desc: "Streamline your entire procurement cycle and inventory operations with real-time tracking.",
      features: [
        "Purchase workflows",
        "Stock control",
        "Supplier management",
      ],
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Assets Management",
      desc: "Complete lifecycle management with QR code tagging, depreciation tracking, and audit trails.",
      features: [
        "QR code tagging",
        "Depreciation calc",
        "Audit trails",
      ],
    },
    {
      icon: <UserCheck size={24} />,
      title: "Provident Fund",
      desc: "Automated fund administration with contribution management, profit distribution, and compliance reporting.",
      features: [
        "Contribution mgmt",
        "Profit distribution",
        "Compliance reports",
      ],
    },
  ];

  return (
    <section id="modules" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              ERP Modules
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            One platform, every function
          </h2>
          <p className="text-slate-500 text-lg">
            Modular by design. Pick exactly what you need, and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-7 border border-slate-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                {mod.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2">
                {mod.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {mod.desc}
              </p>
              <ul className="space-y-2">
                {mod.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-accent flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent mt-5 group-hover:gap-2 transition-all"
              >
                Learn more <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FBR Digital Invoicing Highlight ─── */
function FBRSection() {
  return (
    <section className="py-24 bg-gradient-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Shield size={14} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                FBR Compliant
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Digital invoicing that keeps you{" "}
              <span className="text-accent-light">ahead of regulations</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Pakistan&apos;s tax landscape is evolving. GBMS keeps you compliant
              with FBR&apos;s digital invoicing requirements automatically — no
              manual intervention, no penalties, no stress.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Automatic FBR invoice generation & submission",
                "Real-time tax calculation & withholding",
                "Complete audit trail for every transaction",
                "Instant compliance status dashboard",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-light/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-accent-light" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-white text-navy-700 font-semibold px-7 py-3.5 rounded-full hover:bg-slate-100 transition-all group"
            >
              See it in action
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Invoicing Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-slate-400">Invoice</p>
                  <p className="text-xl font-bold">#INV-2024-4821</p>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={14} />
                  FBR Verified
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Client</span>
                  <span className="font-medium">Precision Manufacturing Ltd.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Amount</span>
                  <span className="font-medium">PKR 2,450,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">GST (17%)</span>
                  <span className="font-medium">PKR 416,500</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between">
                  <span className="text-slate-400">Total</span>
                  <span className="text-lg font-bold text-accent-light">
                    PKR 2,866,500
                  </span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                <Lock size={16} className="text-accent-light" />
                <div>
                  <p className="text-xs font-semibold">
                    Digitally Signed & Transmitted
                  </p>
                  <p className="text-[10px] text-slate-400">
                    FBR Reference: FBR-2024-PK-00482139
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Industries Section ─── */
function Industries() {
  const industries = [
    { icon: <Factory size={24} />, name: "Cement & Heavy Industry" },
    { icon: <HardHat size={24} />, name: "Construction" },
    { icon: <Landmark size={24} />, name: "Government" },
    { icon: <Building2 size={24} />, name: "Manufacturing" },
    { icon: <Truck size={24} />, name: "Distribution" },
    { icon: <FlaskConical size={24} />, name: "Pharmaceutical" },
    { icon: <Stethoscope size={24} />, name: "Healthcare" },
    { icon: <GraduationCap size={24} />, name: "Education" },
    { icon: <ShoppingCart size={24} />, name: "Retail & Trading" },
    { icon: <Globe size={24} />, name: "Consultancy" },
    { icon: <Zap size={24} />, name: "Beverages & Food" },
    { icon: <Users size={24} />, name: "Hotel & Restaurant" },
  ];

  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Industries
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Built for your industry
          </h2>
          <p className="text-slate-500 text-lg">
            From cement plants to hospitals, GBMS adapts to the unique demands
            of 19+ industries across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-slate-100 text-center hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                {ind.icon}
              </div>
              <p className="text-sm font-semibold text-navy-700">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Implementation Process ─── */
function Implementation() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "We analyze your current processes, identify pain points, and design a tailored implementation roadmap.",
    },
    {
      num: "02",
      title: "Configuration & Setup",
      desc: "Your GBMS instance is configured to match your exact workflows, hierarchies, and business rules.",
    },
    {
      num: "03",
      title: "Data Migration",
      desc: "We safely migrate your existing data with validation checks to ensure zero data loss.",
    },
    {
      num: "04",
      title: "Training & Go-Live",
      desc: "Hands-on training for your team, followed by a supervised go-live with 24/7 support.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Implementation
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
              Go live in weeks, not months
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              Our proven 4-phase implementation ensures minimal disruption to
              your operations. We handle the complexity so you can focus on
              running your business.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand text-white flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-700 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <div className="flex-1 bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-700">
                      Requirements Analysis
                    </p>
                    <div className="w-full bg-green-200 rounded-full h-1.5 mt-2">
                      <div className="bg-green-500 rounded-full h-1.5 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <div className="flex-1 bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-700">
                      System Configuration
                    </p>
                    <div className="w-full bg-green-200 rounded-full h-1.5 mt-2">
                      <div className="bg-green-500 rounded-full h-1.5 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="flex-1 bg-accent/5 rounded-lg p-3 border border-accent/10">
                    <p className="text-sm font-medium text-accent">
                      Data Migration — In Progress
                    </p>
                    <div className="w-full bg-accent/20 rounded-full h-1.5 mt-2">
                      <div className="bg-accent rounded-full h-1.5 w-3/4" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-200" />
                  <div className="flex-1 bg-slate-100 rounded-lg p-3">
                    <p className="text-sm font-medium text-slate-400">
                      Training & Go-Live
                    </p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div className="bg-slate-300 rounded-full h-1.5 w-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Implementing GBM's ERP solution revolutionized our manufacturing operations. We've seen a 40% improvement in production efficiency and significantly reduced operational costs. The FBR compliance features saved us countless hours during tax season.",
      name: "Ahmed Raza",
      title: "Operations Director",
      company: "Precision Manufacturing Ltd.",
      metric: "40%",
      metricLabel: "efficiency gain",
    },
    {
      quote:
        "GBM's financial management system provided the visibility we needed to make informed decisions. Our reporting time decreased by 70%, allowing our team to focus on strategic analysis rather than data compilation.",
      name: "Bilal Ahmed",
      title: "CFO",
      company: "Continental Enterprises",
      metric: "70%",
      metricLabel: "faster reporting",
    },
    {
      quote:
        "The transition to GBMS was seamless. Their implementation team understood our unique requirements as a cement manufacturer and delivered a system that truly fits our operations. Best ERP decision we've made.",
      name: "Faisal Khan",
      title: "General Manager IT",
      company: "National Cement Industries",
      metric: "100%",
      metricLabel: "FBR compliant",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Trusted by Pakistan&apos;s leading enterprises
          </h2>
          <p className="text-slate-500 text-lg">
            Real results from real businesses across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Metric Badge */}
              <div className="flex items-end gap-2 mb-5">
                <span className="text-3xl font-bold text-gradient">
                  {t.metric}
                </span>
                <span className="text-sm text-slate-400 pb-1">
                  {t.metricLabel}
                </span>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-700">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTA() {
  return (
    <section id="demo" className="py-24 bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to transform your business?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Join 500+ businesses across Pakistan who trust GBMS to run their
          operations. Start your free trial today — no credit card required.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-navy-700 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all group text-lg"
          >
            Start Free Trial
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-lg"
          >
            <Phone size={20} />
            Talk to Sales
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-accent-light" />
            Free 30-day trial
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-accent-light" />
            No setup fees
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-accent-light" />
            Dedicated support
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-accent-light" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form Section ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Get in Touch
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
              Let&apos;s discuss your requirements
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              Our team of ERP specialists is ready to understand your business
              and show you how GBMS can help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call us</p>
                  <p className="font-semibold text-navy-700">
                    +92-333-888-6866
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email us</p>
                  <p className="font-semibold text-navy-700">info@gbms.pk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Visit us</p>
                  <p className="font-semibold text-navy-700">
                    Office No. 5, 2nd Floor, Mehmood Plaza
                  </p>
                  <p className="text-sm text-slate-400">
                    Blue Area, Islamabad, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="font-semibold text-navy-700">
                    +92-333-888-6866
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-navy-700 mb-6">
              Request a Free Demo
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmad"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Khan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 block mb-1.5">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="ahmad@company.pk"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 block mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 block mb-1.5">
                  Industry
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white text-slate-500">
                  <option>Select your industry</option>
                  <option>Manufacturing</option>
                  <option>Cement & Heavy Industry</option>
                  <option>Construction</option>
                  <option>Government</option>
                  <option>Distribution</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Retail & Trading</option>
                  <option>Pharmaceutical</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 block mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-brand text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Request Free Demo
              </button>
              <p className="text-xs text-slate-400 text-center">
                We&apos;ll get back to you within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/gbms-logo.png"
                alt="GBM Solutions"
                width={120}
                height={48}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <span className="text-lg font-light text-slate-400">
                Solutions
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Pakistan&apos;s first locally developed ERP software. Empowering
              businesses with intelligent automation since 2013.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Implementation", "Industries", "Contact", "Free Trial"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              ERP Modules
            </h4>
            <ul className="space-y-3">
              {[
                "General Ledger",
                "Payroll Management",
                "Sales Management",
                "Procurement & Inventory",
                "Assets Management",
                "Provident Fund",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Office No. 5, 2nd Floor, Mehmood Plaza, Blue Area, Islamabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  +92-333-888-6866
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-slate-400">info@gbms.pk</span>
              </li>
            </ul>
            <p className="text-sm text-slate-400 mt-4">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 GBM Solutions (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <Features />
      <Modules />
      <FBRSection />
      <Industries />
      <Implementation />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
