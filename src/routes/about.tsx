import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About RightKind People Solutions | Executive Search & HR Advisory" },
      {
        name: "description",
        content:
          "RightKind People Solutions is an executive search and HR advisory firm providing leadership hiring, talent acquisition, and workforce consulting.",
      },
      { property: "og:title", content: "About RightKind People Solutions" },
      {
        property: "og:description",
        content:
          "Executive search and HR advisory built on calm authority and lasting partnership.",
      },
    ],
  }),
});

function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-20 px-6 sm:px-12 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          About RightKind People Solutions
        </h1>
        <p className="text-lg text-slate-400">
          Executive Search, Talent Acquisition & Strategic People Advisory
        </p>
      </header>

      <section className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
        <p>
          RightKind People Solutions is a dedicated HR recruitment consultancy delivering
          leadership hiring, permanent placements, and workforce solutions for modern enterprises.
        </p>
        <p>
          We bridge the gap between high-performing talent and forward-looking organizations
          with transparency, market intelligence, and structured execution.
        </p>

        <h2 className="text-2xl font-semibold text-white pt-6">Our Core Capabilities</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Executive Search & Leadership Hiring</li>
          <li>Mid-to-Senior Level Lateral Placements</li>
          <li>Strategic HR Operations & Workforce Consulting</li>
          <li>Recruitment Process Outsourcing (RPO)</li>
        </ul>
      </section>
    </main>
  );
}
