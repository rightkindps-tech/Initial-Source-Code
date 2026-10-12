import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Compass,
  Linkedin,
  MapPin,
  Search,
  Shield,
  Target,
  Twitter,
  Users,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import logoImg from "@/assets/rkps-logo.png";

export const Route = createFileRoute(
  "/locations/recruitment-agency-in-gurugram"
)({
  component: GurugramLocationPage,
  head: () => ({
    meta: [
      {
        title:
          "Recruitment Agency & Executive Search in Gurugram | RightKind People Solutions",
      },
      {
        name: "description",
        content:
          "Premier HR consultancy, executive search, and talent acquisition partner for enterprises, GCCs, and high-growth startups across Gurugram (Cyber City, Golf Course Road, Udyog Vihar).",
      },
      {
        property: "og:title",
        content:
          "Recruitment Agency & Executive Search in Gurugram | RightKind People Solutions",
      },
      {
        property: "og:description",
        content:
          "Precision leadership and lateral hiring for Gurugram's technology, financial services, and enterprise hubs.",
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
      <span className="brand-mark" aria-hidden="true">™</span>
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container-x inner">
          <a href="/#home" className="brand" aria-label="RightKind People Solutions™">
            <BrandLogo />
          </a>
          <nav className="nav-links">
            <a href="/#home" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>

            <div
              style={{ position: "relative", display: "inline-block" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="/#services"
                className="nav-link"
                style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                Services <span style={{ fontSize: "0.75em" }}>▾</span>
              </a>
              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#ffffff",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12)",
                    borderRadius: "8px",
                    padding: "8px 0",
                    minWidth: "230px",
                    border: "1px solid #e2e8f0",
                    zIndex: 100,
                  }}
                >
                  <a
                    href="/services/executive-search"
                    style={{ display: "block", padding: "10px 16px", color: "#152447", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}
                  >
                    Executive Search
                  </a>
                  <a
                    href="/services/talent-acquisition"
                    style={{ display: "block", padding: "10px 16px", color: "#152447", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}
                  >
                    Talent Acquisition
                  </a>
                  <div style={{ borderTop: "1px solid #f1f5f9", margin: "4px 0" }} />
                  <a
                    href="/#services"
                    style={{ display: "block", padding: "8px 16px", color: "var(--teal, #0d9488)", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}
                  >
                    All Services →
                  </a>
                </div>
              )}
            </div>

            <a href="/#industries" className="nav-link">Industries</a>
            <a href="/#process" className="nav-link">Process</a>
            <a href="/#contact" className="nav-link">Contact</a>
          </nav>
          <a href="/#contact" className="btn btn-primary header-cta">
            Book a Consultation <ArrowRight size={16} />
          </a>
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} color="#152447" /> : <><span /><span /><span /></>}
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-nav">
          <a href="/#home" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/services/executive-search" onClick={() => setOpen(false)}>— Executive Search</a>
          <a href="/services/talent-acquisition" onClick={() => setOpen(false)}>— Talent Acquisition</a>
          <a href="/#services" onClick={() => setOpen(false)}>All Services</a>
          <a href="/#industries" onClick={() => setOpen(false)}>Industries</a>
          <a href="/#process" onClick={() => setOpen(false)}>Process</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" onClick={() => setOpen(false)} style={{ color: "var(--teal)", fontWeight: 600 }}>
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
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="/services/executive-search">Executive Search</a></li>
              <li><a href="/services/talent-acquisition">Talent Acquisition</a></li>
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

function GurugramLocationPage() {
  useScrollReveal();

  const localCapabilities = [
    {
      title: "GCC & Enterprise Leadership",
      desc: "Connecting Global Capability Centers and Fortune 500 regional headquarters across DLF Cyber City and Golf Course Road with seasoned VPs, Directors, and site leaders.",
      icon: <Building2 size={24} />,
    },
    {
      title: "B2B SaaS & FinTech Talent",
      desc: "Targeted lateral recruitment for product engineering, data science, and enterprise sales leaders across Gurugram's high-growth startup corridors.",
      icon: <Target size={24} />,
    },
    {
      title: "Industrial & Consumer Operations",
      desc: "End-to-end talent acquisition for supply chain, finance, and plant leadership across Udyog Vihar, Sohna Road, and IMT Manesar.",
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ paddingTop: "100px" }}>
        <section className="hero" style={{ minHeight: "auto", padding: "80px 0" }}>
          <div className="container-x hero-grid">
            <div className="fade-up visible">
              <span className="hero-badge">
                <MapPin size={14} style={{ marginRight: "6px" }} /> Gurugram & Delhi NCR Advisory
              </span>
              <h1 style={{ fontSize: "2.65rem", lineHeight: 1.2, margin: "20px 0" }}>
                Recruitment & Executive Search Partner in Gurugram.
              </h1>
              <p className="lead">
                Operating at the heart of the Delhi NCR corporate corridor, RightKind People Solutions 
                partners with high-growth startups, Global Capability Centers (GCCs), and established 
                enterprises across Gurugram to deliver precision-matched leadership and lateral talent.
              </p>
              <div className="hero-ctas">
                <a href="/#contact" className="btn btn-primary">
                  Discuss Your Gurugram Hiring Mandate <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="hero-visual fade-up d2 visible">
              <div className="hero-frame">
                <img src={heroImg} alt="Gurugram executive recruitment advisors" width={1280} height={960} />
              </div>
            </div>
          </div>
        </section>

        {/* Localized Market Section (The 30% Unique Local Value) */}
        <section style={{ padding: "80px 0", background: "#ffffff" }}>
          <div className="container-x">
            <div className="section-head fade-up">
              <span className="section-label">Gurugram Market Depth</span>
              <h2 className="section-title">
                Tailored recruitment for NCR&apos;s primary commercial hubs.
              </h2>
              <p className="section-sub">
                Gurugram&apos;s talent landscape demands specialized headhunting across hyper-competitive micro-markets, from Cyber City technology corridors to Manesar industrial operations.
              </p>
            </div>
            <div className="services-grid" style={{ marginTop: "40px" }}>
              {localCapabilities.map((item, idx) => (
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

        {/* Local Hiring Challenges Solved */}
        <section style={{ padding: "80px 0", background: "#f8fafc" }}>
          <div className="container-x">
            <div className="section-head fade-up">
              <span className="section-label">Why Local Expertise Matters</span>
              <h2 className="section-title">Navigating Gurugram&apos;s talent dynamics.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "40px" }}>
              {[
                { step: "01", title: "Offer-Drop Mitigation", desc: "Gurugram's competitive tech and GCC sectors experience high notice-period counter-offers. We vet candidate intent rigorously and manage engagement right through day-one onboarding." },
                { step: "02", title: "Compensation Benchmarking", desc: "Real-time insights into fixed-to-variable pay structures and ESOP benchmarks across Golf Course Extension, Cyber Hub, and Udyog Vihar employers." },
                { step: "03", title: "Cross-NCR Commute Fit", desc: "Practical evaluation of candidate location compatibility across Gurugram, South Delhi, Dwarka Expressway, and Noida to protect long-term retention." },
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

        <section style={{ padding: "80px 0", textAlign: "center", background: "#ffffff" }}>
          <div className="container-x fade-up">
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              Scaling your team in Gurugram or Delhi NCR?
            </h2>
            <p className="section-sub" style={{ marginBottom: "32px", marginInline: "auto" }}>
              Speak directly with our recruitment advisors to start a targeted search for your open roles.
            </p>
            <a href="/#contact" className="btn btn-primary" style={{ display: "inline-flex" }}>
              Book a Consultation <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
