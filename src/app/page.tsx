"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";



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
    { label: "Solutions", href: "#modules" },
    { label: "Industries", href: "#industries" },
    { label: "Implementation", href: "#about" },
    { label: "Company", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-slate-200" : "bg-white py-5 border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/gbms-logo.png"
            alt="GBM Solutions"
            width={160}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600 hover:text-navy-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center">
          <a
            href="#demo"
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-navy-700 hover:bg-navy-900 transition-all px-8 py-4 rounded-sm"
          >
            Get a Demo
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
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-navy-900 transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="text-sm font-bold uppercase tracking-widest text-white bg-navy-700 text-center px-6 py-4 rounded-sm mt-2"
            >
              Get a Demo
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
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="text-left">
            <p className="text-[11px] font-bold text-navy-700 uppercase tracking-[0.25em] mb-6">
              Enterprise Resource Planning
            </p>

            <h1 className="text-5xl lg:text-[72px] font-sans text-navy-900 font-bold leading-[1.05] tracking-[-0.03em] mb-10">
              Pakistan&apos;s first locally developed ERP software
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-xl">
              Built for how Pakistani businesses actually work. FBR-compliant invoicing, multi-company support, and Urdu-language reporting — from a team that&apos;s been doing this since 2013.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <a
                href="#demo"
                className="inline-flex items-center gap-3 bg-navy-700 text-white font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-navy-900 transition-all text-xs"
              >
                Request a Demo
                <ArrowRight size={18} />
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-3 bg-white text-navy-900 border border-slate-200 font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-slate-50 transition-all text-xs"
              >
                View Modules
              </a>
            </div>

            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-12">
              Serving 500+ organizations across 19 industries
            </p>
          </div>

          {/* Right - ERP Dashboard Mockup */}
          <div className="relative">
            <div className="bg-[#f0f4f8] border border-slate-200 rounded-lg shadow-2xl p-4 overflow-hidden">
              {/* Window Top Bar */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="bg-white px-8 py-1.5 rounded-sm border border-slate-100 text-[10px] text-slate-400 font-mono w-2/3 truncate">
                  erp.gbms.pk/general-ledger
                </div>
              </div>

              <div className="bg-white rounded-sm p-6 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-lg font-sans font-bold text-navy-900">General Ledger — Trial Balance</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">FY 2024-25 | Period: Jul 2024 — Jun 2025</p>
                  </div>
                  <button className="bg-navy-900 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm">Export PDF</button>
                </div>

                <div className="space-y-0">
                  <div className="grid grid-cols-4 text-[11px] uppercase tracking-wider font-bold text-navy-900 py-3 border-b border-navy-900 mb-0">
                    <span>Account Code</span>
                    <span>Account Name</span>
                    <span className="text-right">Debit (PKR)</span>
                    <span className="text-right">Credit (PKR)</span>
                  </div>

                  {[
                    { code: "1001", name: "Cash in Hand", d: "2,340,000", c: "" },
                    { code: "1002", name: "HBL Current A/C", d: "14,821,500", c: "" },
                    { code: "2001", name: "Accounts Payable", d: "", c: "8,450,200" },
                    { code: "3001", name: "Sales Revenue", d: "", c: "42,180,000" },
                    { code: "4001", name: "Salary Expense", d: "18,640,000", c: "" },
                    { code: "4005", name: "GST Output Tax", d: "", c: "7,170,600" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 text-[11px] font-medium py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <span className="text-slate-400 font-mono text-[10px] tracking-widest">{row.code}</span>
                      <span className="text-navy-900 font-sans">{row.name}</span>
                      <span className="text-right text-navy-900 font-mono tracking-tight">{row.d || "—"}</span>
                      <span className="text-right text-navy-900 font-mono tracking-tight">{row.c || "—"}</span>
                    </div>
                  ))}

                  <div className="grid grid-cols-4 text-[12px] font-bold text-navy-900 py-4 border-t-2 border-navy-900 mt-0">
                    <span className="col-span-2 uppercase tracking-wide">Total</span>
                    <span className="text-right font-mono text-[13px]">35,801,500</span>
                    <span className="text-right font-mono text-[13px]">57,800,800</span>
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

/* ─── Trusted By Section (Cinematic Strip) ─── */
function TrustedBy() {
  const logos = [
    { name: "Maple Leaf", src: "/logos/maple-leaf.png", h: "h-10" },
    { name: "Fauji Cement", src: "/logos/fauji-cement.png", h: "h-12" },
    { name: "Continental", src: "/logos/continental.png", h: "h-9" },
    { name: "National Foods", src: "/logos/nfl-logo.png", h: "h-10" },
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(10,37,64,0.35),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24 text-center">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.6em] mb-4 opacity-80">
          Trusted by Leading Brands
        </p>
      </div>

      <div className="relative z-10 flex [--gap:20rem] [--duration:60s] select-none overflow-hidden pb-12">
        <div className="flex shrink-0 justify-around gap-[var(--gap)] min-w-full animate-marquee">
          {/* First Set of Unique Logos */}
          <div className="flex shrink-0 justify-around gap-[var(--gap)] items-center">
            {logos.map((logo, i) => (
              <div
                key={`unique-${i}`}
                className="opacity-40 hover:opacity-100 transition-all duration-700 cursor-default px-8 transform hover:scale-110 flex items-center justify-center grayscale"
              >
                <div className={`${logo.h} relative w-32`}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain block"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Second Set (Required for Seamless Loop) */}
          <div className="flex shrink-0 justify-around gap-[var(--gap)] items-center">
            {logos.map((logo, i) => (
              <div
                key={`loop-${i}`}
                className="opacity-40 hover:opacity-100 transition-all duration-700 cursor-default px-8 transform hover:scale-110 flex items-center justify-center grayscale"
              >
                <div className={`${logo.h} relative w-32`}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-20" />
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function Stats() {
  const stats = [
    {
      value: "Since 2013",
      label: "Serving Pakistani businesses",
    },
    {
      value: "500+",
      label: "Organizations onboarded",
    },
    {
      value: "19",
      label: "Industries served",
    },
    {
      value: "FBR",
      label: "Compliant digital invoicing",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-left"
            >
              <div className="text-4xl font-mono text-navy-900 font-bold mb-3 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why GBM Solutions (Features) ─── */
function Features() {
  const features = [
    {
      title: "Built for Pakistani compliance",
      desc: "FBR digital invoicing, withholding tax calculations, and SECP reporting are built into the core — not bolted on as afterthoughts.",
    },
    {
      title: "Cloud or on-premise, your choice",
      desc: "Deploy on your own infrastructure or in the cloud. Migrate between them anytime without data loss.",
    },
    {
      title: "Configurable Workflow Engine",
      desc: "Mirror your existing organizational hierarchies and approval matrixes precisely within our system.",
    },
    {
      title: "Real-time Financial Visibility",
      desc: "Drill down from high-level P&L statements to individual journal vouchers in two clicks.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[11px] font-bold text-navy-700 uppercase tracking-[0.2em] mb-6">
            Why GBM Solutions
          </p>
          <h2 className="text-4xl lg:text-6xl font-sans text-navy-900 font-bold leading-tight mb-8">
            An ERP that understands how business works here
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Foreign ERPs weren&apos;t designed for Pakistani tax law, banking, or reporting requirements. GBMS was.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
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
      title: "General Ledger & Accounting",
      desc: "Flexible chart of accounts, multi-currency support, automated trial balance, and complete financial reporting suite.",
      features: [
        "Multi-company consolidation",
        "Automated bank reconciliation",
        "Budget vs. actual tracking",
      ],
    },
    {
      title: "Payroll & HR Management",
      desc: "End-to-end payroll with Pakistani tax slabs, EOBI/SESSI deductions, loan management, and automated salary disbursement.",
      features: [
        "Pakistan tax compliance",
        "Loan & advance management",
        "Leave & attendance integration",
      ],
    },
    {
      title: "Sales & Distribution",
      desc: "Complete sales lifecycle from quotation to collection. FBR-compliant digital invoicing built into every transaction.",
      features: [
        "FBR invoice integration",
        "Multi-warehouse support",
        "Commission & target tracking",
      ],
    },
    {
      title: "Procurement & Inventory",
      desc: "Streamline procurement cycles and maintain multi-location inventory with real-time tracking and aging analysis.",
      features: [
        "Purchase requisitions",
        "Multi-location inventory",
        "Stock aging reports",
      ],
    },
    {
      title: "Fixed Assets Management",
      desc: "Asset lifecycle tracking from acquisition to disposal. Automated depreciation calculations and barcode integration.",
      features: [
        "Depreciation schedules",
        "Asset transfer history",
        "QR based audit control",
      ],
    },
    {
      title: "Provident Fund & Gratuity",
      desc: "Complete fund administration with contribution management, profit distribution, and automated withdrawal processing.",
      features: [
        "Contribution management",
        "Profit distribution",
        "Withdrawal automation",
      ],
    },
  ];

  return (
    <section id="modules" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[11px] font-bold text-navy-700 uppercase tracking-[0.2em] mb-4">
            ERP Modules
          </p>
          <h2 className="text-4xl lg:text-5xl font-sans text-navy-900 font-bold mb-6">
            One platform. Every business function.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Pick the modules you need today. Add more as you grow. Everything integrates seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="group bg-white p-10 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {mod.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                {mod.desc}
              </p>
              <ul className="space-y-4 mb-4">
                {mod.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-xs font-bold text-slate-400"
                  >
                    <div className="w-1.5 h-[1px] bg-navy-700" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-[11px] font-bold uppercase tracking-widest text-navy-900 hover:text-navy-700 transition-all flex items-center gap-2"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FBR Compliance Section ─── */
function FBRSection() {
  return (
    <section className="py-32 bg-navy-900 text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
              FBR Compliance
            </p>
            <h2 className="text-4xl lg:text-5xl font-sans font-bold mb-8 leading-tight">
              Digital invoicing that actually works with the FBR portal
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Pakistan&apos;s tax landscape changes constantly. GBMS keeps you compliant automatically — invoices are generated, signed, and transmitted to FBR in real time. No manual uploads, no last-minute scrambles.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Automatic FBR invoice generation and real-time submission",
                "GST, withholding tax, and further tax calculated per transaction",
                "Complete audit trail for every invoice — who created it, when, and any modifications",
                "Compliance dashboard showing submission status across all branches",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-[1px] bg-white mt-3" />
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-3 bg-white text-navy-900 font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-slate-100 transition-all text-xs"
            >
              See it in action
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Tax Invoice Mockup */}
          <div className="relative">
            <div className="bg-white rounded-sm p-8 text-navy-900 shadow-2xl">
              <div className="flex justify-between items-start mb-12 border-b border-slate-100 pb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Tax Invoice</p>
                  <h3 className="text-2xl font-sans font-bold">INV-2024-004821</h3>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 mb-2">FBR Transmitted</div>
                  <p className="text-[10px] text-slate-400">12 Dec 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 mb-12 text-[10px]">
                <div>
                  <p className="font-bold text-slate-400 uppercase tracking-widest mb-3">Billed To</p>
                  <p className="font-bold text-sm mb-1">Precision Manufacturing Ltd.</p>
                  <p className="text-slate-500">NTN: 1234567-8</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-400 uppercase tracking-widest mb-3 text-right">Seller</p>
                  <p className="font-bold text-sm mb-1 text-right">Continental Enterprises</p>
                  <p className="text-slate-500 text-right">STRN: PK-1234-5678</p>
                </div>
              </div>

              <table className="w-full text-left mb-12">
                <thead>
                  <tr className="text-[9px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">
                    <th className="pb-4">Item</th>
                    <th className="pb-4 text-center">Qty</th>
                    <th className="pb-4 text-center">Rate</th>
                    <th className="pb-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] font-medium font-mono">
                  <tr>
                    <td className="py-4 font-sans font-medium text-navy-900">Industrial Bearings SKF-6205</td>
                    <td className="py-4 text-center">500</td>
                    <td className="py-4 text-center">3,200</td>
                    <td className="py-4 text-right">1,600,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-sans font-medium text-navy-900">Lubricant Grease (50kg drum)</td>
                    <td className="py-4 text-center">20</td>
                    <td className="py-4 text-center">42,500</td>
                    <td className="py-4 text-right">850,000</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end border-t border-slate-100 pt-8">
                <div className="w-1/2 space-y-3">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-bold">PKR 2,450,000</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">GST @ 17%</span>
                    <span className="font-bold">PKR 416,500</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">WHT @ 4.5%</span>
                    <span className="font-bold text-red-500">- PKR 110,250</span>
                  </div>
                  <div className="flex justify-between text-lg pt-4 border-t-2 border-slate-900 font-sans tracking-tight">
                    <span className="font-bold">Total Payable</span>
                    <span className="font-mono font-bold text-xl">PKR 2,756,250</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-dashed border-slate-200">
                <p className="text-[9px] font-bold text-slate-400 uppercase mb-2">FBR Integration Reference</p>
                <p className="text-[9px] font-mono text-slate-400 leading-relaxed">
                  FBR Invoice No: FBR-2024-PK-00482139 | Status: Transmitted | Timestamp: 2024-12-12T14:32:08+05:00
                </p>
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
    "Cement & Heavy Industry",
    "Construction & Engineering",
    "Public Sector & Govt",
    "Large-scale Manufacturing",
    "Logistics & Distribution",
    "Pharmaceuticals",
    "Tertiary Healthcare",
    "Higher Education",
    "Retail & Trading",
    "Strategic Consultancy",
    "Food & Beverages",
    "Hospitality Groups",
  ];

  return (
    <section id="industries" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[10px] font-bold text-navy-700 uppercase tracking-[0.2em] mb-4">
            Broad Spectrum
          </p>
          <h2 className="text-4xl lg:text-5xl font-sans text-navy-900 mb-6">
            Specialized configurations for <span className="italic">19+</span> sectors.
          </h2>
          <p className="text-slate-500 text-lg">
            We don&apos;t believe in a one-size-fits-all approach. Every industry module is architected with sector-specific logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-4 border-b border-slate-100 hover:border-navy-700 transition-colors group cursor-default"
            >
              <div className="w-1.5 h-1.5 bg-navy-700 rounded-full" />
              <p className="text-sm font-bold text-navy-900 uppercase tracking-widest">{ind}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Implementation Section ─── */
function Implementation() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Requirements",
      desc: "We study your current processes, map your data structures, and identify what needs to change. This typically involves 2-3 days on-site with your operations, finance, and IT teams.",
    },
    {
      num: "02",
      title: "Configuration & Migration",
      desc: "Your GBMS instance is configured to match your workflows. Existing data is migrated with validation checks — chart of accounts, opening balances, employee records, inventory counts.",
    },
    {
      num: "03",
      title: "Training & Parallel Run",
      desc: "Hands-on training for every user group. We run the new system in parallel with your existing processes so nothing falls through the cracks.",
    },
    {
      num: "04",
      title: "Go-Live & Ongoing Support",
      desc: "Supervised go-live with our team on-site. After handover, you get a dedicated support contact — not a ticket queue.",
    },
  ];

  return (
    <section id="implementation" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-2xl">
          <p className="text-[11px] font-bold text-navy-700 uppercase tracking-[0.2em] mb-6">
            Implementation
          </p>
          <h2 className="text-4xl lg:text-5xl font-sans text-navy-900 font-bold mb-8">
            Live in weeks, not months
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A structured 4-phase approach that minimizes disruption to your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
          {steps.map((step, i) => (
            <div key={i} className="relative pt-10 border-t border-slate-100">
              <div className="flex gap-8">
                <span className="text-4xl font-sans font-bold text-slate-100 shrink-0 mt-1">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
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

/* ─── Testimonials Section ─── */
function Testimonials() {
  const testimonials = [
    {
      label: "40% EFFICIENCY IMPROVEMENT",
      quote:
        "Implementing GBM&apos;s ERP solution revolutionized our manufacturing operations. We&apos;ve seen a 40% improvement in production efficiency and significantly reduced operational costs. The FBR compliance features saved us countless hours during tax season.",
      name: "Ahmed Raza",
      title: "Operations Director, Precision Manufacturing Ltd.",
    },
    {
      label: "70% FASTER REPORTING",
      quote:
        "GBM&apos;s financial management system provided the visibility we needed to make informed decisions. Our reporting time decreased by 70%, allowing our team to focus on strategic analysis rather than data compilation. The support team is exceptionally responsive.",
      name: "Bilal Ahmed",
      title: "CFO, Continental Enterprises",
    },
    {
      label: "SEAMLESS TRANSITION",
      quote:
        "The transition to GBMS was seamless. Their implementation team understood our unique requirements as a cement manufacturer and delivered a system that truly fits our operations. Best ERP decision we&apos;ve made.",
      name: "Faisal Khan",
      title: "General Manager IT, National Cement Industries",
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[11px] font-bold text-navy-700 uppercase tracking-[0.2em] mb-4">
            What our clients say
          </p>
          <h2 className="text-4xl lg:text-5xl font-sans text-navy-900 font-bold">
            Results from real deployments
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col pt-8 border-t border-navy-900/10"
            >
              <p className="text-[10px] font-bold text-navy-900 uppercase tracking-widest mb-8">{t.label}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-sm font-bold text-navy-900">{t.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{t.title}</p>
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
    <section className="py-24 bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-sans font-bold mb-8">
          Ready to see what GBMS can do for your business?
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Book a 30-minute demo with our team. We&apos;ll show you the modules relevant to your industry with your data, not generic slides.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#demo"
            className="inline-flex items-center gap-3 bg-white text-navy-900 font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-slate-100 transition-all text-xs"
          >
            Book a Demo
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+923338886866"
            className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-white/5 transition-all text-xs"
          >
            +92 333 888 6866
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left - Info */}
          <div>
            <p className="text-[11px] font-bold text-navy-700 uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-sans text-navy-900 font-bold mb-8">
              Let&apos;s talk about your requirements
            </h2>
            <p className="text-lg text-slate-500 mb-12">
              Our ERP specialists are ready to understand your business and recommend the right configuration.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-sm text-navy-900 border border-slate-100">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <p className="text-navy-900 font-bold">+92 333 888 6866</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-sm text-navy-900 border border-slate-100">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-navy-900 font-bold">info@gbms.pk</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-sm text-navy-900 border border-slate-100">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Office</p>
                  <p className="text-navy-900 font-bold">Office No. 5, 2nd Floor, Mehmood Plaza</p>
                  <p className="text-[13px] text-slate-500 mt-1">Blue Area, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <p className="mt-16 text-xs font-bold text-slate-300 uppercase tracking-widest">
              Monday — Friday, 9:00 AM — 6:00 PM PKT
            </p>
          </div>

          {/* Right - Form */}
          <div id="demo" className="bg-[#fcfcfc] border border-slate-100 p-12 shadow-sm rounded-sm">
            <h3 className="text-xl font-bold text-navy-900 mb-8 tracking-tight">Request a Demo</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">First Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-navy-700 transition-colors rounded-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Last Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-navy-700 transition-colors rounded-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Business Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-navy-700 transition-colors rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company</label>
                <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-navy-700 transition-colors rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-navy-700 transition-colors rounded-sm resize-none" />
              </div>
              <button className="w-full bg-navy-900 text-white font-bold uppercase tracking-widest py-5 rounded-sm hover:bg-navy-900 transition-all text-xs">
                Submit Request
              </button>
              <p className="text-center text-[10px] text-slate-400 font-medium">We respond within one business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Image
              src="/gbms-logo.png"
              alt="GBM Solutions"
              width={140}
              height={50}
              className="h-9 w-auto object-contain mb-8 brightness-0 invert"
            />
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xs">
              Pakistan&apos;s first locally developed ERP software. Empowering businesses with intelligent automation since 2013.
            </p>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">GBM Solutions (Pvt) Ltd.</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SECP Registered</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">FBR Registered Vendor</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">General Ledger</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payroll & HR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales & Distribution</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Procurement & Inventory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fixed Assets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Provident Fund</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">Contact</h4>
            <div className="space-y-6 text-sm text-slate-400 font-medium">
              <div className="flex gap-4">
                <MapPin size={16} className="shrink-0" />
                <p>Office No. 5, 2nd Floor, Mehmood Plaza, Blue Area, Islamabad, Pakistan</p>
              </div>
              <div className="flex gap-4">
                <Phone size={16} className="shrink-0" />
                <p>+92 333 888 6866</p>
              </div>
              <div className="flex gap-4">
                <Mail size={16} className="shrink-0" />
                <p>info@gbms.pk</p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest pt-4">Mon — Fri: 9:00 AM — 6:00 PM PKT</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            © {currentYear} GBM Solutions (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main className="min-h-screen bg-white font-inter selection:bg-navy-900 selection:text-white">
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
