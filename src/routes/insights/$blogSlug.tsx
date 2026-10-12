import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Linkedin, Twitter, X } from "lucide-react";
import logoImg from "@/assets/rkps-logo.png";
import { BLOGS_DATA } from "@/data/blogsData";

export const Route = createFileRoute("/insights/$blogSlug")({
  loader: ({ params }) => {
    const post = BLOGS_DATA[params.blogSlug];
    if (!post) {
      throw notFound();
    }
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | RightKind Insights` : "RightKind Insights" },
      { name: "description", content: loaderData?.description || "" },
      { property: "og:title", content: loaderData?.title || "" },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BlogArticlePage,
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
              <li><a href="/#services">All Services</a></li>
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

function BlogArticlePage() {
  const post = Route.useLoaderData();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: post.canonical,
    author: {
      "@type": "Organization",
      name: "RightKind People Solutions",
      url: "https://www.rightkind.co/",
    },
    publisher: {
      "@type": "Organization",
      name: "RightKind People Solutions",
      url: "https://www.rightkind.co/",
    },
  };

  const faqSchema = post.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <div className="rkInsight">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <style>{`
        .rkInsight {
          --rk-ink: #152447;
          --rk-muted: #64748b;
          --rk-paper: #f8fafc;
          --rk-white: #ffffff;
          --rk-green: #0d9488;
          --rk-navy: #152447;
          --rk-soft: #f0fdfa;
          --rk-line: #e2e8f0;
          --rk-warm: #f1f5f9;
          --rk-max: 1180px;
          min-height: 100vh;
          color: var(--rk-ink);
          background: var(--rk-paper);
          line-height: 1.68;
          padding-top: 84px;
        }
        .rkContainer { width: min(var(--rk-max), calc(100% - 40px)); margin: 0 auto; }
        .rkCrumb { padding-top: 28px; font-size: 13px; color: var(--rk-muted); }
        .rkCrumb a { color: var(--rk-green); text-decoration: none; font-weight: 600; }
        .rkHero { padding: 36px 0 56px; border-bottom: 1px solid var(--rk-line); }
        .rkHeroGrid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr); gap: 56px; align-items: end; }
        .rkEyebrow, .rkKicker { font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--rk-green); }
        .rkEyebrow { margin-bottom: 14px; }
        .rkH1, .rkH2, .rkQuote { font-family: Georgia, "Times New Roman", serif; font-weight: 500; letter-spacing: -0.025em; color: var(--rk-navy); }
        .rkH1 { font-size: clamp(34px, 4.5vw, 54px); line-height: 1.1; margin: 0 0 20px; }
        .rkH2 { font-size: clamp(28px, 3.2vw, 40px); line-height: 1.15; margin: 0 0 18px; }
        .rkIntro { font-size: 18px; line-height: 1.62; color: #475569; margin: 0; max-width: 820px; }
        .rkMeta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; color: var(--rk-muted); font-size: 13px; }
        .rkMeta span { padding: 6px 12px; border: 1px solid var(--rk-line); border-radius: 999px; background: #fff; }
        .rkHeroCard { background: #fff; border: 1px solid var(--rk-line); border-radius: 20px; padding: 26px; box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06); }
        .rkHeroCard strong { display: block; font: 500 23px/1.3 Georgia, "Times New Roman", serif; margin: 8px 0 12px; color: var(--rk-navy); }
        .rkHeroCard p { margin: 0; color: var(--rk-muted); font-size: 14px; }
        .rkArticleWrap { display: grid; grid-template-columns: minmax(0, 1fr) 290px; gap: 64px; padding: 64px 0; }
        .rkArticle { max-width: 780px; }
        .rkArticle h2 { font: 500 32px/1.2 Georgia, "Times New Roman", serif; color: var(--rk-navy); margin: 48px 0 16px; }
        .rkArticle h3 { font-size: 20px; color: var(--rk-navy); margin: 30px 0 10px; }
        .rkArticle p { margin: 0 0 18px; color: #334155; font-size: 17px; }
        .rkArticle ul, .rkArticle ol { margin: 0 0 22px; padding-left: 22px; color: #334155; font-size: 17px; }
        .rkArticle li { margin: 8px 0; }
        .rkArticle a { color: var(--rk-green); text-decoration: underline; text-underline-offset: 3px; font-weight: 600; }
        .rkCallout { margin: 32px 0; padding: 26px 28px; border-radius: 16px; background: #f0fdfa; border: 1px solid #99f6e4; color: #134e4a; }
        .rkCallout strong { display: block; margin-bottom: 6px; font-size: 17px; color: #0f766e; }
        .rkQuote { margin: 36px 0; padding: 4px 0 4px 24px; border-left: 4px solid var(--rk-green); font-size: 26px; line-height: 1.35; color: var(--rk-navy); }
        .rkSteps { display: grid; gap: 12px; margin: 24px 0 30px; }
        .rkStep { display: grid; grid-template-columns: 44px 1fr; gap: 16px; padding: 18px 20px; border: 1px solid var(--rk-line); border-radius: 14px; background: #fff; }
        .rkStepNum { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: var(--rk-soft); color: var(--rk-green); font-size: 12px; font-weight: 800; }
        .rkStep h3 { margin: 0 0 4px; font-size: 17px; }
        .rkStep p { margin: 0; font-size: 15px; color: #475569; }
        .rkSidebar { position: sticky; top: 105px; align-self: start; }
        .rkSideBox { padding: 22px; border: 1px solid var(--rk-line); border-radius: 16px; background: #fff; margin-bottom: 16px; }
        .rkSideBox h3 { margin: 0 0 10px; font-size: 16px; color: var(--rk-navy); }
        .rkSideBox p { margin: 0 0 14px; color: var(--rk-muted); font-size: 13.5px; }
        .rkSideLinks { display: grid; gap: 10px; }
        .rkSideLinks a { font-size: 13.5px; color: var(--rk-green); font-weight: 600; text-decoration: none; }
        .rkFAQ { padding: 68px 0; background: #fff; border-top: 1px solid var(--rk-line); border-bottom: 1px solid var(--rk-line); }
        .rkFaqGrid { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 56px; }
        .rkFaqItems { border-top: 1px solid var(--rk-line); }
        .rkFaqItems details { padding: 18px 0; border-bottom: 1px solid var(--rk-line); }
        .rkFaqItems summary { cursor: pointer; font-weight: 700; color: var(--rk-navy); font-size: 16px; }
        .rkFaqItems p { margin: 10px 0 0; color: var(--rk-muted); font-size: 15px; }
        .rkRelated { padding: 64px 0; }
        .rkRelatedGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
        .rkRelatedCard { display: block; padding: 22px; border: 1px solid var(--rk-line); border-radius: 16px; background: #fff; text-decoration: none; color: var(--rk-navy); }
        .rkRelatedCard small { display: block; margin-bottom: 14px; color: var(--rk-muted); font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
        .rkRelatedCard strong { display: block; line-height: 1.35; font-size: 16px; }
        @media (max-width: 900px) {
          .rkHeroGrid, .rkArticleWrap, .rkFaqGrid, .rkRelatedGrid { grid-template-columns: 1fr; gap: 32px; }
          .rkSidebar { position: static; }
        }
      `}</style>

      <main>
        <div className="rkContainer rkCrumb">
          <a href="/">Home</a> &nbsp;›&nbsp; <a href="/insights">Insights</a> &nbsp;›&nbsp; {post.title}
        </div>

        <section className="rkHero">
          <div className="rkContainer rkHeroGrid">
            <div>
              <div className="rkEyebrow">{post.eyebrow}</div>
              <h1 className="rkH1">{post.title}</h1>
              <p className="rkIntro">{post.intro}</p>
              <div className="rkMeta">
                <span>RightKind People Solutions</span>
                <span>{post.readingTime}</span>
                <span>{post.category}</span>
              </div>
            </div>

            <aside className="rkHeroCard">
              <div className="rkKicker">For hiring leaders</div>
              <strong>Better hiring decisions start before the first CV is shared.</strong>
              <p>
                Practical guidance for founders, HR leaders and talent teams hiring
                mid-level, senior and business-critical talent.
              </p>
            </aside>
          </div>
        </section>

        <section className="rkContainer rkArticleWrap">
          <article className="rkArticle">
            {post.blocks.map((block, i) => {
              if (block.type === "p") {
                if (block.linkAfter) {
                  return (
                    <p key={i}>
                      {block.linkAfter.textBefore}
                      <a href={block.linkAfter.linkHref}>{block.linkAfter.linkText}</a>
                      {block.linkAfter.textAfter}
                    </p>
                  );
                }
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "ul") {
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "ol") {
                return (
                  <ol key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ol>
                );
              }
              if (block.type === "callout") {
                return (
                  <div key={i} className="rkCallout">
                    <strong>{block.title}</strong>
                    <div>
                      {block.text}{" "}
                      {block.ctaHref && (
                        <a href={block.ctaHref} style={{ marginLeft: "4px" }}>
                          {block.ctaLabel}
                        </a>
                      )}
                    </div>
                  </div>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={i} className="rkQuote">
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "steps") {
                return (
                  <div key={i} className="rkSteps">
                    {block.steps.map((s) => (
                      <div key={s.number} className="rkStep">
                        <div className="rkStepNum">{s.number}</div>
                        <div>
                          <h3>{s.title}</h3>
                          <p>{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </article>

          <aside className="rkSidebar">
            <div className="rkSideBox">
              <h3>Need recruitment support?</h3>
              <p>Discuss a current or upcoming hiring mandate with RightKind.</p>
              <a className="btn btn-primary" href="/#contact" style={{ width: "100%", justifyContent: "center" }}>
                Start a Conversation <ArrowRight size={15} />
              </a>
            </div>
            <div className="rkSideBox">
              <h3>Relevant services</h3>
              <div className="rkSideLinks">
                {post.relatedLinks.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label} →
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {post.faqs.length > 0 && (
          <section className="rkFAQ">
            <div className="rkContainer rkFaqGrid">
              <div>
                <div className="rkKicker">Frequently asked</div>
                <h2 className="rkH2">Questions hiring teams often ask.</h2>
              </div>
              <div className="rkFaqItems">
                {post.faqs.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="rkRelated">
          <div className="rkContainer">
            <div className="rkKicker">Explore RightKind</div>
            <h2 className="rkH2">Relevant recruitment services.</h2>
            <div className="rkRelatedGrid">
              {post.relatedLinks.slice(0, 3).map((item) => (
                <a className="rkRelatedCard" href={item.href} key={item.href}>
                  <small>RightKind Advisory</small>
                  <strong>{item.label} →</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
