import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Users, Search, Briefcase, Compass, Check, Mail, Phone, MapPin,
  Linkedin, Twitter, Facebook, Instagram, ChevronUp, Award, ShieldCheck, Heart, Sparkles, Menu, X
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container-x inner">
          <a href="#home" className="brand">
            RightKind<span className="dot" />
            <small>People Solutions</small>
          </a>
          <nav className="nav-links">
            {nav.map((n, i) => (
              <a key={n.href} href={n.href} className={`nav-link ${i === 0 ? "active" : ""}`}>{n.label}</a>
            ))}
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
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
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
          <h1>
            Building teams that <em>thrive</em>,
            <br />leaders who <em>last</em>.
          </h1>
          <p className="lead">
            We pair rigorous executive search with thoughtful people advisory — so you hire the right
            kind of leaders, retain the right kind of talent, and grow the right kind of culture.
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
            <span className="num">98%</span>
            <span className="lbl">Placement success rate</span>
          </div>
          <div className="stat-card br">
            <span className="num">14+</span>
            <span className="lbl">Years building teams</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "500", s: "+", l: "Senior placements" },
    { v: "120", s: "+", l: "Client partners" },
    { v: "32", s: " days", l: "Avg. time to hire" },
    { v: "94", s: "%", l: "Retention at 12 months" },
  ];
  return (
    <section className="stats" style={{ padding: "60px 0" }}>
      <div className="container-x">
        <div className="stats-grid">
          {items.map((s) => (
            <div key={s.l} className="stat fade-up">
              <div className="v">{s.v}<sup>{s.s}</sup></div>
              <div className="l">{s.l}</div>
            </div>
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
          <img src={about1} alt="Two professionals shaking hands" className="about-img-1" loading="lazy" width={900} height={1100} />
          <img src={about2} alt="HR consultant smiling" className="about-img-2" loading="lazy" width={700} height={800} />
        </div>
        <div className="fade-up d1">
          <span className="section-label">About RightKind</span>
          <h2 className="section-title">A people consultancy with <em>conviction</em>.</h2>
          <p style={{ color: "var(--grey-dark)", marginTop: 18, fontSize: "1.05rem" }}>
            We were founded on a simple belief: organisations are only as strong as the people inside
            them. For more than a decade, we've helped boards, founders and HR leaders make calmer,
            sharper decisions about who joins, who leads, and how they grow.
          </p>
          <div className="feature-list">
            <div className="feature">
              <div className="feature-icon"><Award size={20} /></div>
              <div>
                <h4>Senior, sector-aware partners</h4>
                <p>Every engagement is led by a partner who has lived the function — not a junior with a script.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Discreet, evidence-based search</h4>
                <p>Confidential mandates, structured assessments, and a shortlist you can defend in any boardroom.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon"><Heart size={20} /></div>
              <div>
                <h4>Long after the offer letter</h4>
                <p>Onboarding, integration coaching and a 12-month placement guarantee on every executive role.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const svc = [
    { icon: <Search size={24} />, t: "Executive Search", d: "Confidential retained search for C-suite, board and senior leadership across regulated and growth sectors." },
    { icon: <Users size={24} />, t: "Talent Acquisition", d: "Embedded RPO and project-based hiring for scale-ups and enterprise teams that need quality at speed." },
    { icon: <Compass size={24} />, t: "People Advisory", d: "Org design, succession planning, leadership assessment and HR transformation guided by senior advisors." },
    { icon: <Briefcase size={24} />, t: "HR Consultancy", d: "Policy, performance, reward and culture programmes — built to fit the way your organisation actually works." },
  ];
  return (
    <section id="services" style={{ background: "#fff" }}>
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">What we do</span>
          <h2 className="section-title">Services built around <em>people</em>, not pipelines.</h2>
          <p className="section-sub">Four practice areas, one delivery team — joined-up advice across the entire talent lifecycle.</p>
        </div>
        <div className="services-grid">
          {svc.map((s, i) => (
            <div key={s.t} className={`svc-card fade-up d${(i % 4) + 1}`}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const reasons = [
    "Partner-led on every engagement",
    "Diverse, vetted shortlists in 21 days",
    "Independent leadership assessment",
    "Transparent retained fee structure",
    "12-month placement guarantee",
  ];
  return (
    <section className="why">
      <div className="container-x why-grid">
        <div className="fade-up">
          <span className="section-label" style={{ color: "var(--teal-light)" }}>Why RightKind</span>
          <h2 className="section-title">A quieter kind of <em>conviction</em>.</h2>
          <p className="lead">
            We don't chase logos or sell volume. We work with a small number of clients each year and
            measure ourselves on what happens twelve months after the hire — not the day they sign.
          </p>
          <ul className="check-list">
            {reasons.map((r) => (
              <li className="check" key={r}><span className="ico"><Check size={14} /></span>{r}</li>
            ))}
          </ul>
        </div>
        <div className="why-visual fade-up d1">
          <div className="glass-grid">
            <div className="glass featured">
              <div className="num">94%</div>
              <h4>Placed leaders still in role at 24 months</h4>
              <p>Across 500+ executive placements since 2011 — measured independently every quarter.</p>
            </div>
            <div className="glass">
              <div className="num">21d</div>
              <h4>Average shortlist time</h4>
              <p>From kickoff to a calibrated, diverse shortlist of 4–6.</p>
            </div>
            <div className="glass">
              <div className="num">100%</div>
              <h4>Partner-led engagements</h4>
              <p>No handoffs. The partner you meet stays for the duration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const tags = [
    "Financial Services", "Technology & SaaS", "Healthcare & Life Sciences", "Professional Services",
    "Energy & Infrastructure", "Consumer & Retail", "Public & Non-Profit", "Manufacturing", "Education", "Legal",
  ];
  return (
    <section id="industries" className="industries">
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">Industries</span>
          <h2 className="section-title">Sector depth where it <em>matters</em>.</h2>
          <p className="section-sub">A network of senior consultants embedded across the industries where we place leaders.</p>
        </div>
        <div className="tags fade-up d1">
          {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "RightKind found us a Chief People Officer in eight weeks who had been turning down recruiters for years. The difference was the relationship and the rigour.",
      n: "Helena Marsh", r: "CEO, Northvale Capital", a: "HM",
    },
    {
      q: "They asked harder questions of us than we asked of the candidates. The hire we made is the strongest leadership decision of the year.",
      n: "David Okafor", r: "Chair, Meridian Health", a: "DO",
    },
    {
      q: "Calm, senior and uncommonly honest. We've used them for three searches and an HR transformation programme — every one delivered.",
      n: "Priya Anand", r: "CHRO, Lattice Energy", a: "PA",
    },
  ];
  return (
    <section id="testimonials" style={{ background: "#fff" }}>
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">Client voices</span>
          <h2 className="section-title">Trusted by leaders who <em>don't recommend lightly</em>.</h2>
        </div>
        <div className="test-grid">
          {items.map((t, i) => (
            <div key={t.n} className={`test-card fade-up d${i + 1}`}>
              <span className="quote-mark">“</span>
              <span className="stars">★★★★★</span>
              <blockquote>{t.q}</blockquote>
              <div className="author">
                <div className="avatar">{t.a}</div>
                <div>
                  <div className="name">{t.n}</div>
                  <div className="role">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Discover", d: "We listen first — to your strategy, your culture, and the role's true brief." },
    { t: "Define", d: "Calibrated success profile, assessment framework and search strategy agreed upfront." },
    { t: "Deliver", d: "Diverse, vetted shortlist with structured interviews and independent assessment." },
    { t: "Develop", d: "Onboarding plan, integration coaching and twelve-month performance partnership." },
  ];
  return (
    <section id="process" className="process">
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">Our process</span>
          <h2 className="section-title">Four steps. <em>One promise.</em></h2>
          <p className="section-sub">A clear, repeatable methodology that protects your time and improves the odds of every hire.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.t} className={`step fade-up d${i + 1}`}>
              <div className="circle">0{i + 1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: "#fff" }}>
      <div className="container-x">
        <div className="section-head fade-up" style={{ textAlign: "left", marginBottom: 48 }}>
          <span className="section-label">Get in touch</span>
          <h2 className="section-title" style={{ maxWidth: 720 }}>Let's talk about the <em>right kind</em> of hire.</h2>
        </div>
        <div className="contact-grid">
          <div className="fade-up">
            <div className="contact-row">
              <div className="ico-tile"><Mail size={20} /></div>
              <div>
                <h5>Email</h5>
                <p>hello@rightkindpeople.com</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico-tile"><Phone size={20} /></div>
              <div>
                <h5>Phone</h5>
                <p>+44 (0)20 4525 1180</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico-tile"><MapPin size={20} /></div>
              <div>
                <h5>Office</h5>
                <p>14 Finsbury Square, London EC2A 1AH</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico-tile"><Sparkles size={20} /></div>
              <div>
                <h5>Response time</h5>
                <p>We reply to every enquiry within one working day.</p>
              </div>
            </div>
          </div>
          <form
            className="form-panel fade-up d1"
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — a partner will be in touch within one working day."); }}
          >
            <h3 className="serif">Request a confidential conversation</h3>
            <div className="form-row">
              <div className="field"><label>First name</label><input required placeholder="Helena" /></div>
              <div className="field"><label>Last name</label><input required placeholder="Marsh" /></div>
            </div>
            <div className="field"><label>Work email</label><input required type="email" placeholder="helena@company.com" /></div>
            <div className="field"><label>Company</label><input placeholder="Company name" /></div>
            <div className="field">
              <label>How can we help?</label>
              <select defaultValue="">
                <option value="" disabled>Select a service…</option>
                <option>Executive Search</option>
                <option>Talent Acquisition</option>
                <option>People Advisory</option>
                <option>HR Consultancy</option>
              </select>
            </div>
            <div className="field"><label>Tell us a little more</label><textarea placeholder="Role, timeline, anything we should know…" /></div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send enquiry <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              RightKind<span className="dot" />
              <small className="small-tag">People Solutions</small>
            </a>
            <p>HR consultancy, talent acquisition, executive search and people advisory — built on calm authority and lasting partnership.</p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Executive Search</a></li>
              <li><a href="#services">Talent Acquisition</a></li>
              <li><a href="#services">People Advisory</a></li>
              <li><a href="#services">HR Consultancy</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#process">Our process</a></li>
              <li><a href="#testimonials">Case studies</a></li>
              <li><a href="#contact">Contact</a></li>
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

function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`to-top ${show ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}

function Home() {
  useScrollReveal();
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Why />
        <Industries />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </div>
  );
}
