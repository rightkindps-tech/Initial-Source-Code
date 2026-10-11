import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Check,
  Compass,
  Handshake,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  Sparkles,
  Target,
  Twitter,
  Users,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import logoImg from "@/assets/rkps-logo.png";

export const Route = createFileRoute("/services/executive-search")({
  component: ExecutiveSearchPage,
  head: () => ({
    meta: [
      {
        title:
          "Executive Search & Leadership Hiring | RightKind People Solutions",
      },
      {
        name: "description",
        content:
          "Retained and confidential executive search for C-suite, VP, and Director-level roles across India. Strategic leadership hiring built on trust and market depth.",
      },
      {
        property: "og:title",
        content:
          "Executive Search & Leadership Hiring | RightKind People Solutions",
      },
      {
        property: "og:description",
        content:
          "Discreet, research-driven leadership talent acquisition for enterprises and high-growth firms.",
      },
    ],
  }),
});

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className="brand-logo-wrap">
      <img
        src={logoImg}
        alt="RightKind People Solutions"
        className={`brand-logo${footer ? " brand-logo-footer" : ""}`}
        width={1774}
        height={887}
      />
      <span className="brand-mark" aria-hidden="true">
        ™
      </span>
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "/#home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#industries", label: "Industries" },
    { href: "/#process", label: "Process" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container-x inner">
          <a href="/#home" className="brand" aria-label="RightKind People Solutions™">
            <BrandLogo />
          </a>
          <nav className="nav-links">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`nav-link ${n.label === "Services" ? "active" : ""}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="/#contact" className="btn btn-primary header-cta">
            Book a Consultation <ArrowRight size={16} />
          </a>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={22} color="#152447" />
            ) : (
              <>
                <span />
                <span />
                <span />
              </>
            )}
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-nav">
          {nav.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            style={{ color: "var(--teal)", fontWeight: 600 }}
          >
            Book a Consultation →
          </a>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/#home" className="brand" aria-label="RightKind People Solutions™">
              <BrandLogo footer />
            </a>
            <p>
              HR consultancy, talent acquisition, executive search and people
              advisory — built on calm authority and lasting partnership.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="/services/executive-search">Executive Search</a></li>
              <li><a href="/#services">Recruitment & Talent Acquisition</a></li>
              <li><a href="/#services">HR Consulting & Advisory</a></li>
              <li><a href="/#services">Workforce Support</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/#process">Our process</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
              info@rightkind.co<br />
              +91 - 92899 92464<br />
              Rohini, Delhi, India - 110085
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} RightKind People Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function ExecutiveSearchPage() {
  useScrollReveal();

  const capabilities = [
    {
      title: "Board & C-Suite Advisory",
      desc: "Identifying and recruiting Chief Executive, Operating, Financial, and Technology officers who align with business governance and long-range strategy.",
      icon: <Target size={24} />,
    },
    {
      title: "Confidential Market Mapping",
      desc: "Discreet assessment and passive candidate profiling for sensitive, confidential succession planning and structural leadership replacement.",
      icon: <Shield size={24} />,
    },
    {
      title: "Functional Leadership Placements",
      desc: "Securing VP, General Manager, and Director-level functional heads across engineering, finance, operations, human capital, and revenue teams.",
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ paddingTop: "100px" }}>
        {/* Hero Section */}
        <section className="hero" style={{ minHeight: "auto", padding: "80px 0" }}>
          <div className="container-x hero-grid">
            <div className="fade-up visible">
              <span className="hero-badge">
                <span className="pulse" /> Strategic Leadership Advisory
              </span>
              <h1 style={{ fontSize: "2.75rem", lineHeight: 1.2, margin: "20px 0" }}>
                Executive Search for high-stakes leadership roles.
              </h1>
              <p className="lead">
                C-level appointments require confidentiality, market depth, and cultural precision. 
                RightKind works directly with founders, boards, and management teams to secure 
                transformative leaders.
              </p>
              <div className="hero-ctas">
                <a href="/#contact" className="btn btn-primary">
                  Initiate a Search <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="hero-visual fade-up d2 visible">
              <div className="hero-frame">
                <img
                  src={heroImg}
                  alt="Executive consulting team"
                  width={1280}
                  height={960}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section style={{ padding: "80px 0", background: "#ffffff" }}>
          <div className="container-x">
            <div className="section-head fade-up">
              <span className="section-label">Practice Focus</span>
              <h2 className="section-title">
                Rigorous, research-led leadership appointments.
              </h2>
            </div>
            <div className="services-grid" style={{ marginTop: "40px" }}>
              {capabilities.map((item, idx) => (
                <div key={item.title} className={`svc-card fade-up d${idx + 1}`}>
                  <div className="svc-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p style={{ marginTop: "12px", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Methodology */}
        <section style={{ padding: "80px 0", background: "#f8fafc" }}>
          <div className="container-x">
            <div className="section-head fade-up">
              <span className="section-label">Methodology</span>
              <h2 className="section-title">A 4-stage retained search model.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginTop: "40px" }}>
              {[
                { step: "01", title: "Role Calibration", desc: "Aligning mandate objectives, competency criteria, and organizational culture requirements." },
                { step: "02", title: "Talent Mapping", desc: "Comprehensive ecosystem analysis across competitive markets and peer institutions." },
                { step: "03", title: "Confidential Vetting", desc: "Structured competency assessments, past mandate audits, and indirect reference checks." },
                { step: "04", title: "Closure & Transition", desc: "Contract negotiations, notice-period risk management, and structured executive onboarding." },
              ].map((s) => (
                <div key={s.step} className="fade-up" style={{ background: "#ffffff", padding: "28px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--teal, #0d9488)" }}>{s.step}</span>
                  <h3 style={{ fontSize: "1.15rem", margin: "12px 0 8px 0" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ padding: "80px 0", textAlign: "center", background: "#ffffff" }}>
          <div className="container-x fade-up">
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              Require leadership talent for your next growth phase?
            </h2>
            <p className="section-sub" style={{ marginBottom: "32px", marginInline: "auto" }}>
              Reach out for a confidential consultation regarding current and upcoming leadership mandates.
            </p>
            <a href="/#contact" className="btn btn-primary" style={{ display: "inline-flex" }}>
              Schedule a Confidential Call <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
