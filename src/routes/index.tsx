import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type LucideIcon } from "react";
import {
  ArrowRight, Users, Search, Briefcase, Compass, Check, Mail, Phone, MapPin,
  Linkedin, Twitter, Facebook, Instagram, ChevronUp, Sparkles, X, Handshake, Target,
  UserCheck, MessageCircle, Shield, TrendingUp, Gem, Heart
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import logoImg from "@/assets/rkps-logo.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "RightKind People Solutions — HR Consultancy & Executive Search" },
      { name: "description", content: "RightKind People Solutions delivers HR consultancy, talent acquisition, executive search and people advisory built on calm authority and lasting partnership." },
      { property: "og:title", content: "RightKind People Solutions" },
      { property: "og:description", content: "HR consultancy, talent acquisition, executive search and people advisory." },
    ],
  }),
});

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
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
          <a href="#home" className="brand" aria-label="RightKind People Solutions™">
            <BrandLogo />
          </a>
          <nav className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="/about" className="nav-link">About</a>

            <div
              style={{ position: "relative", display: "inline-block" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="#services"
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
                    href="#services"
                    style={{ display: "block", padding: "8px 16px", color: "var(--teal, #0d9488)", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}
                  >
                    All Services →
                  </a>
                </div>
              )}
            </div>

            <a href="#industries" className="nav-link">Industries</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary header-cta">
            Book a Consultation <ArrowRight size={16} />
          </a>
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} color="#152447" /> : <><span /><span /><span /></>}
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-nav">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/services/executive-search" onClick={() => setOpen(false)}>— Executive Search</a>
          <a href="/services/talent-acquisition" onClick={() => setOpen(false)}>— Talent Acquisition</a>
          <a href="#services" onClick={() => setOpen(false)}>All Services</a>
          <a href="#industries" onClick={() => setOpen(false)}>Industries</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" onClick={() => setOpen(false)} style={{ color: "var(--teal)", fontWeight: 600 }}>
            Book a Consultation →
          </a>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container-x hero-grid">
        <div className="fade-up visible">
          <span className="hero-badge"><span className="pulse" /> People-first HR partners</span>
          <h1>The right people make the difference.</h1>
          <p className="lead">
            Success begins with the right team behind your business.
            RightKind delivers recruitment solutions that bring the right people to the right roles.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Book a Consultation <ArrowRight size={16} /></a>
            <a href="#services" className="btn btn-outline-light">Explore our services</a>
          </div>
        </div>
        <div className="hero-visual fade-up d2">
          <div className="hero-frame">
            <img src={heroImg} alt="RightKind consultants in a strategy session" width={1280} height={960} />
            <div className="hero-accent-line" />
          </div>
          <div className="stat-card tl">
            <span className="num">High</span>
            <span className="lbl">Placement success rate</span>
          </div>
          <div className="stat-card br">
            <span className="num">10+</span>
            <span className="lbl">Years of experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { label: "People", d: "Carefully matched talent for every role.", icon: <Users size={22} /> },
    { label: "Process", d: "Efficient, transparent, and reliable hiring.", icon: <Compass size={22} /> },
    { label: "Partnership", d: "Building long-term relationships with clients.", icon: <Handshake size={22} /> },
    { label: "Results", d: "Focused on quality hires that create impact.", icon: <Target size={22} /> },
  ];
  return (
    <section className="right-pillars" aria-label="Our approach">
      <div className="container-x">
        <div className="right-pillars-grid">
          {items.map((item, i) => (
            <article key={item.label} className={`right-pillar-card fade-up d${i + 1}`}>
              <span className="right-pillar-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="right-pillar-icon">{item.icon}</div>
              <h3>
                <span className="right-pillar-accent">Right</span> {item.label}
              </h3>
              <p>{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container-x about-grid">
        <div className="about-images fade-up">
          <div className="about-collage">
            <img src={about1} alt="Two professionals shaking hands" className="about-img-main" loading="lazy" width={900} height={1100} />
            <img src={about2} alt="HR consultant smiling" className="about-img-sub" loading="lazy" width={700} height={800} />
            <img src={heroImg} alt="RightKind team in a strategy session" className="about-img-sub" loading="lazy" width={1280} height={960} />
          </div>
        </div>
        <div className="fade-up d1">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            We Don&apos;t Just Hire People.
            <br />
            We Help Businesses Find the Ones Who <em>Change the Game</em>.
          </h2>
          <div className="about-copy">
            <p>
              Welcome to RightKind People Solutions — where hiring is not treated like a routine process, but
              as one of the most important business decisions a company can make.
            </p>
            <p>Because the truth is simple:</p>
            <p className="about-callout">The right people make the difference.</p>
            <p>
              A great hire can build teams, improve culture, increase revenue, and move a company forward.
              A wrong hire costs time, energy, money, and momentum.
            </p>
            <p>That&apos;s why we do things differently.</p>
            <p>
              We are not here to flood inboxes with random profiles or chase numbers. We focus on
              understanding businesses deeply — their vision, work culture, growth plans, and expectations —
              so we can connect them with talent that truly fits.
            </p>
            <div style={{ marginTop: "24px" }}>
              <a href="/about" className="btn btn-primary">
                Read Our Full Story <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const [active, setActive] = useState(0);
  const items: { icon: LucideIcon; tag: string; text: string }[] = [
    { icon: Gem, tag: "Quality first", text: "We value quality over quantity" },
    { icon: Target, tag: "Right fit", text: "We believe speed means nothing without the right fit" },
    { icon: Shield, tag: "Transparency", text: "We work with honesty, clarity, and accountability" },
    { icon: Handshake, tag: "Partnership", text: "We focus on long-term business relationships" },
    { icon: Heart, tag: "Every role counts", text: "We treat every hiring requirement like it matters — because it does" },
  ];
  return (
    <section id="different" className="different">
      <div className="different-glow different-glow-tr" aria-hidden="true" />
      <div className="different-glow different-glow-bl" aria-hidden="true" />
      <div className="container-x different-layout">
        <div className="section-head fade-up">
          <span className="section-label">What Makes Us Different?</span>
          <h2 className="section-title">Principles that guide every <em>hire</em>.</h2>
          <p className="different-intro">
            Tap a principle to explore how we work differently from typical recruitment agencies.
          </p>
        </div>

        <div className="diff-nav" role="tablist" aria-label="Our principles">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.tag}
                type="button"
                role="tab"
                aria-selected={active === i}
