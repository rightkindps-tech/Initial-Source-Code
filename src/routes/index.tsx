import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Users, Search, Briefcase, Compass, Check, Mail, Phone, MapPin,
  Linkedin, Twitter, Facebook, Instagram, ChevronUp, Sparkles, X, Handshake, Target
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
          <h1>The right people make the difference.</h1>
          <p className="lead">
            Success begins with the right team behind your business.
            Right Kind delivers recruitment solutions that bring the right people to the right roles.
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
            <p>
              At RightKind People Solutions, we believe recruitment is not about filling vacancies.
              It&apos;s about building futures, strengthening companies, and creating teams that actually perform.
            </p>
            <p>
              Whether you are a fast-growing startup, an ambitious brand, or an established organization, we
              bring energy, commitment, professionalism, and people expertise that help you hire with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    "We value quality over quantity",
    "We believe speed means nothing without the right fit",
    "We work with honesty, clarity, and accountability",
    "We focus on long-term business relationships",
    "We treat every hiring requirement like it matters — because it does",
  ];
  return (
    <section id="different" className="different">
      <div className="different-glow" aria-hidden="true" />
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">What Makes Us Different?</span>
        </div>
        <div className="different-grid">
          {items.map((item, i) => (
            <article key={item} className={`diff-card fade-up d${(i % 4) + 1}`}>
              <span className="diff-num">{String(i + 1).padStart(2, "0")}</span>
              <p>{item}</p>
              <span className="diff-accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const svc = [
    { icon: <Search size={24} />, t: "Recruitment & Talent Acquisition" },
    { icon: <Briefcase size={24} />, t: "HR Consulting & Strategic Hiring" },
    { icon: <Users size={24} />, t: "Leadership & Mid-Level Hiring" },
    { icon: <Compass size={24} />, t: "Workforce & Team Building Support" },
    { icon: <Sparkles size={24} />, t: "Employer Branding Assistance" },
    { icon: <Check size={24} />, t: "Customized HR Solutions" },
  ];
  return (
    <section id="services" style={{ background: "#fff" }}>
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">What We do</span>
        </div>
        <div className="services-grid">
          {svc.map((s, i) => (
            <div key={s.t} className={`svc-card fade-up d${(i % 4) + 1}`}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.t}</h3>
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

function Process() {
  const steps = [
    {
      t: "Right Understanding",
      d: "We understand your business, culture, goals, and hiring expectations before we begin the search.",
    },
    {
      t: "Right Search",
      d: "We strategically hunt for talent that matches not just the role, but your company vision.",
    },
    {
      t: "Right Screening",
      d: "Every candidate is carefully evaluated for skills, communication, attitude, and culture fit.",
    },
    {
      t: "Right Shortlisting",
      d: "Only the most relevant and high-potential profiles reach your desk — no unnecessary clutter.",
    },
    {
      t: "Right Coordination",
      d: "From interviews to follow-ups, we ensure a smooth, professional, and seamless hiring experience.",
    },
    {
      t: "Right Closure",
      d: "We assist until the candidate successfully joins, ensuring the process ends with the right hire.",
    },
  ];
  return (
    <section id="process" className="process">
      <div className="container-x">
        <div className="section-head fade-up">
          <span className="section-label">Our process</span>
          <h2 className="section-title">Six steps. <em>One promise.</em></h2>
          <p className="section-sub">
            From understanding your business to closing the right hire — a clear path at every stage.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.t} className={`step fade-up d${(i % 4) + 1}`}>
              <div className="circle">{String(i + 1).padStart(2, "0")}</div>
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
                <p>info@rightkind.co</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico-tile"><Phone size={20} /></div>
              <div>
                <h5>Phone</h5>
                <p>9289992464</p>
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
                <option>Recruitment & Talent Acquisition</option>
                <option>HR Consulting & Strategic Hiring</option>
                <option>Leadership & Mid-Level Hiring</option>
                <option>Workforce & Team Building Support</option>
                <option>Employer Branding Assistance</option>
                <option>Customized HR Solutions</option>
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
              <li><a href="#services">Recruitment & Talent Acquisition</a></li>
              <li><a href="#services">HR Consulting & Strategic Hiring</a></li>
              <li><a href="#services">Leadership & Mid-Level Hiring</a></li>
              <li><a href="#services">Workforce & Team Building Support</a></li>
              <li><a href="#services">Employer Branding Assistance</a></li>
              <li><a href="#services">Customized HR Solutions</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#process">Our process</a></li>
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
        <Differentiators />
        <Services />
        <Why />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </div>
  );
}
