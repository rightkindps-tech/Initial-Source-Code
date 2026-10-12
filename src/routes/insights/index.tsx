import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Calendar, Clock, Linkedin, Twitter, X } from "lucide-react";
import logoImg from "@/assets/rkps-logo.png";
import { BLOGS_DATA } from "@/data/blogsData";

export const Route = createFileRoute("/insights/")({
  component: InsightsHubPage,
  head: () => ({
    meta: [
      { title: "HR Insights, Hiring Trends & Leadership Advisory | RightKind People Solutions" },
      {
        name: "description",
        content:
          "Actionable perspectives on executive search, talent acquisition, mid-senior hiring timelines, and building high-performance teams in India.",
      },
      { property: "og:title", content: "HR Insights & Hiring Advisory | RightKind People Solutions" },
      {
        property: "og:description",
        content:
          "Actionable perspectives on executive search, talent acquisition, and building high-performance teams.",
      },
    ],
  }),
});

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
              <a href="/#services" className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
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
                  <a href="/services/executive-search" style={{ display: "block", padding: "10px 16px", color: "#152447", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
                    Executive Search
                  </a>
                  <a href="/services/talent-acquisition" style={{ display: "block", padding: "10px 16px", color: "#152447", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
                    Talent Acquisition
                  </a>
                </div>
              )}
            </div>
            <a href="/insights" className="nav-link active">Insights</a>
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
          <a href="/insights" onClick={() => setOpen(false)}>Insights & Blog</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
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
            <p>HR consultancy, talent acquisition, executive search and people advisory — built on calm authority and lasting partnership.</p>
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
            </ul>
          </div>
          <div>
            <h5>Key Locations</h5>
            <ul>
              <li><a href="/locations/recruitment-agency-in-gurugram">Gurugram</a></li>
              <li><a href="/locations/recruitment-agency-in-delhi">New Delhi</a></li>
              <li><a href="/locations/recruitment-agency-in-noida">Noida</a></li>
              <li><a href="/locations/recruitment-agency-in-mumbai">Mumbai</a></li>
              <li><a href="/locations/recruitment-agency-in-bengaluru">Bengaluru</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/insights">Insights & Blog</a></li>
              <li><a href="/#contact">Contact</a></li>
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

function InsightsHubPage() {
  const articles = Object.values(BLOGS_DATA);

  return (
    <div className="page-wrapper">
      <Header />
      <main style={{ paddingTop: "100px" }}>
        <section className="hero" style={{ minHeight: "auto", padding: "72px 0" }}>
          <div className="container-x">
            <div style={{ maxWidth: "780px" }}>
              <span className="hero-badge">
                <BookOpen size={14} style={{ marginRight: "6px" }} /> RightKind Insights
              </span>
              <h1 style={{ fontSize: "2.75rem", lineHeight: 1.2, margin: "18px 0" }}>
                Practical Guidance for Hiring Leaders, Founders & HR Teams.
              </h1>
              <p className="lead">
                Better hiring decisions start before the first CV is shared. Explore our perspectives on mid-senior recruitment, executive search, and shortlist quality across India.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "#f8fafc" }}>
          <div className="container-x">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "28px",
              }}
            >
              {articles.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.05)",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", fontSize: "0.8rem", color: "#64748b" }}>
                      <span
                        style={{
                          background: "#f0fdfa",
                          color: "#0d9488",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontWeight: 600,
                        }}
                      >
                        {post.category}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={13} /> {post.publishedAt}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={13} /> {post.readingTime}
                      </span>
                    </div>
                    <h2 style={{ fontSize: "1.35rem", lineHeight: 1.35, color: "#152447", marginBottom: "12px" }}>
                      <a href={`/insights/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {post.title}
                      </a>
                    </h2>
                    <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                      {post.intro}
                    </p>
                  </div>
                  <a
                    href={`/insights/${post.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--teal, #0d9488)",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      textDecoration: "none",
                    }}
                  >
                    Read full article <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
