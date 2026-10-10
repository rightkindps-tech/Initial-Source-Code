import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Users,
  Compass,
  Check,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronUp,
  Sparkles,
  X,
  Handshake,
  Target,
  Shield,
  Gem,
  Heart,
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import logoImg from "@/assets/rkps-logo.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | RightKind People Solutions — HR Consultancy" },
      {
        name: "description",
        content:
          "Learn about RightKind People Solutions, our philosophy, leadership team, and ethical executive search practices.",
      },
      { property: "og:title", content: "About RightKind People Solutions" },
      {
        property: "og:description",
        content:
          "HR consultancy, executive search, talent acquisition, and workforce advisory.",
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
                className={`nav-link ${n.label === "About" ? "active" : ""}`}
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
              <a href="#" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="/#services">Recruitment & Talent Acquisition</a></li>
              <li><a href="/#services">HR Consulting & Strategic Hiring</a></li>
              <li><a href="/#services">Leadership & Mid-Level Hiring</a></li>
              <li><a href="/#services">Workforce & Team Building Support</a></li>
              <li><a href="/#services">Employer Branding Assistance</a></li>
              <li><a href="/#services">Customized HR Solutions</a></li>
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
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Insights</a></li>
              <li><a href="#">Compensation guide</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} RightKind People Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function AboutPage() {
  useScrollReveal();

  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ paddingTop: "100px" }}>
        {/* Hero Section */}
        <section className="about" style={{ paddingBottom: "40px" }}>
          <div className="container-x about-grid">
            <div className="about-images fade-up visible">
              <div className="about-collage">
                <img
                  src={about1}
                  alt="Two professionals in a meeting"
                  className="about-img-main"
                  width={900}
                  height={1100}
                />
                <img
                  src={about2}
                  alt="HR consultant collaborating"
                  className="about-img-sub"
                  width={700}
                  height={800}
                />
                <img
                  src={heroImg}
                  alt="RightKind strategy group"
                  className="about-img-sub"
                  width={1280}
                  height={960}
                />
              </div>
            </div>

            <div className="fade-up visible">
              <span className="section-label">Our Story & Purpose</span>
              <h1 className="section-title">
                Building teams that <em>change the game</em>.
              </h1>
              <div className="about-copy">
                <p>
                  Welcome to RightKind People Solutions — where hiring is treated not as a routine transaction, but as one of the single most pivotal business decisions a company can make.
                </p>
                <p className="about-callout">
                  The right people make the difference.
                </p>
                <p>
                  A great hire elevates team performance, refines culture, accelerates revenue, and propels momentum. An ill-fitting hire costs time, budget, and institutional focus.
                </p>
                <p>
                  We avoid sending batches of unvetted resumes. Our practice focuses on understanding organizations deeply — their corporate architecture, operational culture, and strategic horizon — to connect them with leaders who drive sustained value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="right-pillars" aria-label="Our approach">
          <div className="container-x">
            <div className="section-head fade-up">
              <span className="section-label">Foundational Pillars</span>
              <h2 className="section-title">The principles that govern our delivery.</h2>
            </div>
            <div className="right-pillars-grid">
              {[
                {
                  label: "People",
                  d: "Rigorous evaluation ensuring cultural alignment and proven functional capability.",
                  icon: <Users size={22} />,
                },
                {
                  label: "Process",
                  d: "Transparent, systematic candidate pipelines with consistent communication.",
                  icon: <Compass size={22} />,
                },
                {
                  label: "Partnership",
                  d: "Long-term client advisory rather than one-off transactional placement.",
                  icon: <Handshake size={22} />,
                },
                {
                  label: "Results",
                  d: "Leadership and lateral additions that actively deliver organizational impact.",
                  icon: <Target size={22} />,
                },
              ].map((item, i) => (
                <article key={item.label} className={`right-pillar-card fade-up d${i + 1}`}>
                  <span className="right-pillar-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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

        {/* CTA Banner */}
        <section style={{ padding: "80px 0", background: "#f8fafc", textAlign: "center" }}>
          <div className="container-x fade-up">
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              Ready to structure your leadership team?
            </h2>
            <p className="section-sub" style={{ marginBottom: "32px", marginInline: "auto" }}>
              Speak with our senior advisory team to define and fill your critical hiring mandates.
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
