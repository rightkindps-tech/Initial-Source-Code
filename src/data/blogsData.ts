export type RelatedLink = { label: string; href: string };
export type FAQ = { question: string; answer: string };

export type BlogBlock =
  | { type: "p"; text: string; linkAfter?: { textBefore: string; linkText: string; linkHref: string; textAfter: string } }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string; ctaLabel?: string; ctaHref?: string }
  | { type: "quote"; text: string }
  | { type: "steps"; steps: { number: string; title: string; text: string }[] };

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  eyebrow: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  intro: string;
  relatedLinks: RelatedLink[];
  faqs: FAQ[];
  blocks: BlogBlock[];
}

export const BLOGS_DATA: Record<string, BlogArticle> = {
  "cost-of-bad-mid-level-hire": {
    slug: "cost-of-bad-mid-level-hire",
    title: "What Does a Bad Mid-Level Hire Really Cost a Business?",
    description:
      "Understand the direct and hidden cost of a poor mid-level hire—from recruitment and vacancy costs to team productivity, customer impact and management time.",
    canonical: "https://www.rightkind.co/insights/cost-of-bad-mid-level-hire",
    eyebrow: "RightKind Insights",
    category: "Hiring Economics",
    publishedAt: "Oct 13, 2026",
    readingTime: "6 min read",
    intro:
      "The cost of a wrong mid-level hire is rarely visible as one line in a budget. It accumulates across recruitment, management time, team productivity, lost momentum and the cost of starting the search again.",
    relatedLinks: [
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Recruitment Agency in Gurugram", href: "/locations/recruitment-agency-in-gurugram" },
    ],
    faqs: [
      {
        question: "What costs should companies include when evaluating a bad hire?",
        answer:
          "Consider recruitment spend, interview time, salary and onboarding cost, lost productivity, manager time, team disruption, opportunity cost, replacement hiring and the vacancy period after exit.",
      },
      {
        question: "Why can a mid-level bad hire be especially expensive?",
        answer:
          "Mid-level employees often influence teams, customers, projects and day-to-day execution, so underperformance can affect more than the individual's own output.",
      },
      {
        question: "How can companies reduce the risk of a bad hire?",
        answer:
          "Improve role calibration, assess evidence of past ownership, evaluate context and motivation, check practical fit early and avoid rushing to close a vacancy with a weak match.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "When companies calculate the cost of a poor hire, they often start with salary and recruitment fees. Those are real costs, but they are only part of the picture.",
      },
      {
        type: "p",
        text: "Mid-level employees frequently sit close to execution. They may manage teams, own key projects, interact with customers, coordinate functions or translate leadership decisions into day-to-day results. When the fit is wrong, the impact can therefore spread across the organisation.",
      },
      { type: "h2", text: "1. The original recruitment cost" },
      {
        type: "p",
        text: "The first layer is straightforward: recruiter or job-platform spend, internal sourcing, interviews, assessments, HR coordination and leadership time. These costs have already been incurred before the employee joins.",
      },
      { type: "h2", text: "2. Salary and onboarding before the problem becomes clear" },
      {
        type: "p",
        text: "Most poor hires are not identified on day one. The organisation may invest weeks or months in salary, onboarding, training, systems access, travel and manager support before it becomes clear that performance or fit is not where it needs to be.",
      },
      { type: "h2", text: "3. Management time" },
      {
        type: "p",
        text: "A struggling hire usually demands more managerial attention. Leaders spend time clarifying expectations, reviewing work, correcting decisions, managing stakeholder concerns and deciding whether performance can be recovered.",
      },
      {
        type: "p",
        text: "This time is easy to ignore because it does not appear as a separate invoice, but it has a genuine opportunity cost.",
      },
      { type: "h2", text: "4. Team productivity and morale" },
      {
        type: "p",
        text: "Mid-level roles often sit between individual contributors and senior leadership. When the person in that position is ineffective, colleagues may need to compensate, decisions slow down and accountability becomes unclear.",
      },
      {
        type: "callout",
        title: "The real multiplier",
        text: "The cost of a poor hire is not only the employee’s output. It is the additional work, delay and uncertainty created for everyone around the role.",
      },
      { type: "h2", text: "5. Customer and business impact" },
      {
        type: "p",
        text: "The effect becomes more significant when the role touches revenue, customers, operations, product delivery, supply chain, finance or people management. Missed opportunities, execution delays and poor stakeholder decisions can be much more expensive than the recruitment process itself.",
      },
      { type: "h2", text: "6. Replacement cost—and a second vacancy period" },
      {
        type: "p",
        text: "If the person exits, the organisation does not simply return to the point before the hire. It has lost time. The search must restart, responsibilities are redistributed and the role remains under-covered until a replacement joins and becomes effective.",
      },
      {
        type: "steps",
        steps: [
          { number: "01", title: "Hire", text: "Recruitment, interview and selection effort" },
          { number: "02", title: "Ramp-up", text: "Salary, onboarding, training and management support" },
          { number: "03", title: "Underperformance", text: "Lost productivity, rework and team disruption" },
          { number: "04", title: "Exit", text: "Separation effort and knowledge transfer" },
          { number: "05", title: "Replace", text: "A new search, a new vacancy period and another ramp-up" },
        ],
      },
      { type: "h2", text: "How should businesses reduce the risk?" },
      {
        type: "p",
        text: "No recruitment process can eliminate hiring risk completely. The goal is to reduce avoidable risk by improving the quality of information available before the decision is made.",
      },
      {
        type: "ul",
        items: [
          "Define what the role must deliver, not only what experience it should contain",
          "Assess examples of actual ownership and decision-making",
          "Evaluate the context in which previous results were achieved",
          "Understand motivation and expectations before final interviews",
          "Discuss practical constraints such as compensation, notice period and location early",
          "Use references and structured assessments where appropriate",
        ],
      },
      {
        type: "quote",
        text: "A vacancy creates pressure to hire quickly. A wrong hire can create pressure for months after the vacancy is filled.",
      },
      { type: "h2", text: "Speed still matters—but quality sets the limit" },
      {
        type: "p",
        text: "Businesses cannot leave important roles open indefinitely. The answer is not slow hiring; it is a process that removes avoidable friction while protecting the quality of the decision.",
      },
      {
        type: "p",
        text: "",
        linkAfter: {
          textBefore: "A strong ",
          linkText: "recruitment partner",
          linkHref: "/services/talent-acquisition",
          textAfter:
            " should therefore improve both speed and relevance: a clear mandate, focused search, qualified shortlist and disciplined closure process.",
        },
      },
    ],
  },

  "executive-search-vs-recruitment-agency": {
    slug: "executive-search-vs-recruitment-agency",
    title: "Executive Search vs Recruitment Agency: Which Model Should You Use?",
    description:
      "Understand the difference between executive search and recruitment agencies, and choose the right hiring model for senior, specialist and business-critical roles.",
    canonical: "https://www.rightkind.co/insights/executive-search-vs-recruitment-agency",
    eyebrow: "RightKind Insights",
    category: "Search Models",
    publishedAt: "Oct 13, 2026",
    readingTime: "6 min read",
    intro:
      "Both models help companies hire. The difference is not simply seniority—it is how the talent market is searched, how candidates are approached and how much depth the mandate requires.",
    relatedLinks: [
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
      { label: "Recruitment Agency in Gurugram", href: "/locations/recruitment-agency-in-gurugram" },
    ],
    faqs: [
      {
        question: "What is the main difference between executive search and recruitment agency hiring?",
        answer:
          "Executive search is typically more targeted and research-led, often involving market mapping and direct outreach to passive candidates. Recruitment agency hiring is usually broader and can be more suitable for recurring or wider-volume permanent hiring.",
      },
      {
        question: "Is executive search only for C-suite roles?",
        answer:
          "No. Executive search can also be useful for senior functional leaders, niche specialists and other roles where the relevant talent pool is limited or not actively applying.",
      },
      {
        question: "When should a company use a recruitment agency instead?",
        answer:
          "A recruitment agency can be effective when the talent pool is reasonably accessible, the requirement is recurring, or the company needs additional sourcing and screening bandwidth for permanent hiring.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Companies often use the terms executive search and recruitment agency interchangeably. In practice, the two models can solve very different hiring problems.",
      },
      {
        type: "p",
        text: "Choosing the right approach matters because a role that can be filled through broad sourcing does not always need an executive search process, while a difficult leadership mandate can fail if it is treated like ordinary database recruitment.",
      },
      { type: "h2", text: "What does a recruitment agency typically do?" },
      {
        type: "p",
        text: "A recruitment agency generally helps organisations source and screen candidates for open positions. Depending on the agency, this can involve job portals, databases, referrals, recruiter networks, direct outreach and inbound applications.",
      },
      {
        type: "p",
        text: "This model can work well for permanent lateral hiring when the relevant talent pool is reasonably accessible and the employer needs additional sourcing, screening and process management capacity.",
      },
      { type: "h2", text: "What is executive search?" },
      {
        type: "p",
        text: "Executive search is usually a more targeted, research-led process. Instead of beginning with available applicants, the search begins with the market: which organisations are likely to contain the right talent, who holds comparable responsibilities and who could realistically be persuaded to consider the opportunity.",
      },
      {
        type: "p",
        text: "Direct outreach is therefore central. Many suitable candidates may be performing well in their current roles and may not be visible in the active applicant market.",
      },
      {
        type: "steps",
        steps: [
          {
            number: "01",
            title: "Role calibration",
            text: "Define the business outcomes, leadership context and non-negotiables.",
          },
          {
            number: "02",
            title: "Market mapping",
            text: "Identify organisations, sectors and individuals relevant to the search.",
          },
          {
            number: "03",
            title: "Direct engagement",
            text: "Approach and assess candidates, including those not actively looking.",
          },
          {
            number: "04",
            title: "Focused slate",
            text: "Present a smaller set of candidates with stronger contextual relevance.",
          },
        ],
      },
      { type: "h2", text: "When executive search is usually the better fit" },
      {
        type: "ul",
        items: [
          "The role is senior, strategic or business-critical",
          "The suitable talent pool is small or difficult to access",
          "Confidentiality matters",
          "The best candidates are unlikely to be active job applicants",
          "The organisation needs market mapping, not merely sourcing",
          "A wrong hire would have significant business consequences",
        ],
      },
      { type: "h2", text: "When a recruitment agency may be enough" },
      {
        type: "ul",
        items: [
          "The organisation has several permanent lateral roles to fill",
          "The talent market is reasonably broad and accessible",
          "Internal HR needs additional sourcing and screening capacity",
          "The role does not require confidential market mapping",
          "The hiring need is recurring rather than highly specialised",
        ],
      },
      {
        type: "callout",
        title: "The important distinction",
        text: "The question is not “Which model sounds more premium?” It is “Which search method is appropriate for the difficulty, seniority and business importance of this particular mandate?”",
      },
      { type: "h2", text: "What about mid-senior roles?" },
      {
        type: "p",
        text: "This is where the distinction becomes less rigid. Many mid-senior roles do not require a formal executive search engagement, but they still benefit from search techniques normally associated with executive hiring: company mapping, passive candidate outreach and deeper qualification.",
      },
      {
        type: "p",
        text: "For that reason, a quality-led recruitment partner can sit between the two traditional models—using targeted search where necessary without forcing every mandate into a retained executive search structure.",
      },
      { type: "h2", text: "How should you decide?" },
      { type: "p", text: "Consider four questions:" },
      {
        type: "ol",
        items: [
          "How difficult is the relevant talent to identify and reach?",
          "How senior or business-critical is the role?",
          "Does the search need confidentiality or competitor mapping?",
          "Would ordinary active sourcing realistically reach the strongest candidates?",
        ],
      },
      {
        type: "quote",
        text: "Use the lightest recruitment model that can still reach and assess the talent your business actually needs.",
      },
      {
        type: "p",
        text: "",
        linkAfter: {
          textBefore: "RightKind provides both ",
          linkText: "executive search and quality-led talent acquisition",
          linkHref: "/services/executive-search",
          textAfter:
            ", allowing the search approach to be shaped around the mandate rather than a one-size-fits-all process.",
        },
      },
    ],
  },

  "how-long-should-mid-senior-hiring-take-india": {
    slug: "how-long-should-mid-senior-hiring-take-india",
    title: "How Long Should Mid-Senior Hiring Take in India?",
    description:
      "A practical guide to mid-senior hiring timelines in India, the stages that create delay and how employers can improve speed without compromising candidate quality.",
    canonical: "https://www.rightkind.co/insights/how-long-should-mid-senior-hiring-take-india",
    eyebrow: "RightKind Insights",
    category: "Hiring Velocity",
    publishedAt: "Oct 13, 2026",
    readingTime: "6 min read",
    intro:
      "There is no universally correct number of days for a mid-senior hire. The better question is whether each stage of the process is adding useful information—or simply adding delay.",
    relatedLinks: [
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Recruitment Agency in Gurugram", href: "/locations/recruitment-agency-in-gurugram" },
    ],
    faqs: [
      {
        question: "Is there an ideal time-to-hire for mid-senior roles in India?",
        answer:
          "There is no single ideal number. The right timeline depends on role scarcity, seniority, interview stages, candidate notice periods and how quickly the employer can make decisions.",
      },
      {
        question: "What usually slows mid-senior hiring?",
        answer:
          "Common causes include unclear requirements, slow feedback, too many interview stages, changing criteria, compensation misalignment and late discovery of candidate intent.",
      },
      {
        question: "How can companies hire faster without lowering quality?",
        answer:
          "Calibrate the mandate before sourcing, separate must-haves from preferences, keep interview stages purposeful, give quick feedback and discuss compensation and joining constraints early.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Mid-senior hiring naturally takes more time than many entry-level or high-volume roles. Candidate pools are narrower, strong professionals may not be actively applying and the decision often involves several stakeholders.",
      },
      {
        type: "p",
        text: "But long hiring cycles are not always a sign of a difficult market. Many delays come from the process itself: unclear requirements, slow feedback, repeated interviews, late compensation discussions and changes in the brief after sourcing has already begun.",
      },
      { type: "h2", text: "Think in stages, not one headline number" },
      {
        type: "p",
        text: "A useful way to manage hiring time is to separate the process into stages and ask what should reasonably happen in each one.",
      },
      {
        type: "steps",
        steps: [
          {
            number: "01",
            title: "Mandate calibration",
            text: "Align the business need, responsibilities, must-haves and compensation before the search starts.",
          },
          {
            number: "02",
            title: "Search and outreach",
            text: "Identify and engage relevant active and passive candidates.",
          },
          {
            number: "03",
            title: "Qualification",
            text: "Assess capability, context, motivation, compensation, notice period and intent.",
          },
          {
            number: "04",
            title: "Interviews",
            text: "Use each interview for a defined decision rather than repeating the same evaluation.",
          },
          {
            number: "05",
            title: "Offer",
            text: "Move quickly once the preferred candidate is clear and address concerns directly.",
          },
          {
            number: "06",
            title: "Joining",
            text: "Maintain engagement through the notice period and manage counter-offer risk.",
          },
        ],
      },
      { type: "h2", text: "What makes some searches inherently slower?" },
      {
        type: "p",
        text: "A longer cycle can be reasonable when the role requires rare technical expertise, a very specific industry background, geographic relocation, senior leadership credibility or a confidential approach to passive candidates.",
      },
      {
        type: "p",
        text: "In these cases, trying to force speed by lowering the search bar can create a worse business outcome than allowing enough time to reach the right talent.",
      },
      { type: "h2", text: "What delays are avoidable?" },
      {
        type: "ul",
        items: [
          "Starting the search before stakeholders agree on what they want",
          "Adding new must-have criteria after candidates are already in process",
          "Taking several days to give interview feedback",
          "Running multiple interview rounds that assess the same thing",
          "Discussing compensation only at the end",
          "Ignoring notice period and counter-offer risk until offer stage",
        ],
      },
      {
        type: "callout",
        title: "The simplest speed lever",
        text: "Faster feedback often improves hiring speed more than faster sourcing. Strong candidates can exit a process while internal stakeholders are still deciding what to do next.",
      },
      { type: "h2", text: "How to make mid-senior hiring faster without compromising quality" },
      { type: "h3", text: "Calibrate once, properly" },
      {
        type: "p",
        text: "Before sourcing begins, agree on outcomes, responsibilities, must-have capabilities, flexible preferences, compensation boundaries and decision-makers.",
      },
      { type: "h3", text: "Make every interview earn its place" },
      {
        type: "p",
        text: "Each stage should answer a different question. If three interviewers are independently repeating the same screening conversation, the process is creating time without adding much evidence.",
      },
      { type: "h3", text: "Give fast, specific feedback" },
      {
        type: "p",
        text: "Recruitment partners can adjust the search only when feedback is clear. “Not a fit” creates little learning; explaining what was missing helps refine the next shortlist.",
      },
      { type: "h3", text: "Qualify intent early" },
      {
        type: "p",
        text: "Candidate motivation, expected compensation, notice period, work-location preference and other active processes should be discussed before the company invests heavily in interviews.",
      },
      {
        type: "quote",
        text: "Good hiring speed is not the shortest process. It is the shortest process that still gives the business enough confidence to make the right decision.",
      },
      { type: "h2", text: "Use different timelines for different mandates" },
      {
        type: "p",
        text: "A recurring lateral role, a niche specialist and a confidential leadership search should not all be managed to the same time-to-hire target. Expectations should reflect the actual talent market and the consequences of the decision.",
      },
      {
        type: "p",
        text: "",
        linkAfter: {
          textBefore: "For harder mandates, ",
          linkText: "targeted executive search",
          linkHref: "/services/executive-search",
          textAfter:
            " may be more effective. For broader permanent hiring, structured talent acquisition support can improve speed while protecting shortlist quality.",
        },
      },
    ],
  },

  "how-to-choose-recruitment-partner-mid-senior-hiring": {
    slug: "how-to-choose-recruitment-partner-mid-senior-hiring",
    title: "How to Choose a Recruitment Partner for Mid-Senior Hiring in India",
    description:
      "A practical guide for HR leaders and founders evaluating recruitment partners for mid-level, senior and business-critical hiring in India.",
    canonical: "https://www.rightkind.co/insights/how-to-choose-recruitment-partner-mid-senior-hiring",
    eyebrow: "RightKind Insights",
    category: "Partner Selection",
    publishedAt: "Oct 13, 2026",
    readingTime: "6 min read",
    intro:
      "Choosing a recruitment partner for an important hire should not begin with the size of their database. It should begin with one question: can this partner understand the role well enough to improve the quality of your hiring decision?",
    relatedLinks: [
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Recruitment Agency in Gurugram", href: "/locations/recruitment-agency-in-gurugram" },
    ],
    faqs: [
      {
        question: "What should I look for in a recruitment partner for mid-senior hiring?",
        answer:
          "Look for mandate understanding, relevant market access, quality of screening, transparency, speed of communication and ownership through offer and joining.",
      },
      {
        question: "Should I choose a specialist recruiter or a large recruitment agency?",
        answer:
          "The better choice depends on the role. For difficult or business-critical positions, depth of understanding and access to the right talent pool usually matter more than the size of the agency.",
      },
      {
        question: "How many candidates should a recruitment agency share?",
        answer:
          "There is no ideal universal number. A smaller, well-qualified shortlist is often more useful than a large set of loosely matched profiles.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Mid-senior hiring is different from high-volume recruitment. At this level, the candidate is often expected to manage teams, influence stakeholders, solve ambiguous problems and operate with significantly greater ownership. The cost of getting that decision wrong is therefore much higher than simply reopening a vacancy.",
      },
      {
        type: "p",
        text: "A good recruitment partner should reduce complexity for your hiring team. They should help define the search, reach the right talent pool, qualify candidates beyond the résumé and keep the process moving until the selected candidate joins.",
      },
      { type: "h2", text: "1. Start with how well they understand the mandate" },
      {
        type: "p",
        text: "Before discussing databases, turnaround time or fees, notice the questions the recruiter asks. Do they understand why the role exists? What will the person be expected to deliver? Which experiences are genuinely essential and which are simply inherited from an old job description?",
      },
      {
        type: "p",
        text: "For mid-senior roles, a strong search brief should include business context, reporting structure, decision-making scope, stakeholder exposure, team environment, compensation realities and what success should look like after the person joins.",
      },
      {
        type: "callout",
        title: "A useful signal",
        text: "If the first conversation is largely about how quickly profiles can be sent, rather than what the role actually needs, the search may become a sourcing exercise instead of a hiring solution.",
      },
      { type: "h2", text: "2. Evaluate shortlist quality, not CV volume" },
      {
        type: "p",
        text: "Large numbers of profiles can create the appearance of progress while shifting the screening burden back to the employer. For important roles, a recruitment partner should be able to explain why each candidate belongs on the shortlist.",
      },
      { type: "p", text: "A well-qualified shortlist should consider:" },
      {
        type: "ul",
        items: [
          "Relevant functional capability and depth of experience",
          "Scale and complexity of the environments the candidate has worked in",
          "Career motivation and reasons for considering a move",
          "Compensation expectations and notice period",
          "Likelihood of accepting and joining if selected",
          "Fit with the organisation, role and team context",
        ],
      },
      { type: "h2", text: "3. Ask where the candidates will actually come from" },
      {
        type: "p",
        text: "Strong mid-senior candidates are not always actively applying to jobs. The recruiter should therefore be able to search beyond inbound applications and job portals when the mandate requires it.",
      },
      {
        type: "p",
        text: "That may include identifying relevant companies, mapping adjacent sectors and approaching passive talent directly. This becomes especially important for specialist, leadership and hard-to-fill positions.",
      },
      { type: "h2", text: "4. Understand how they qualify candidate intent" },
      {
        type: "p",
        text: "A technically strong candidate who is unlikely to move is not yet a strong candidate for your vacancy. Recruitment partners should discuss motivation early rather than discovering it only after several interview rounds.",
      },
      {
        type: "p",
        text: "Good qualification includes why the candidate is exploring, what would make the move worthwhile, compensation expectations, location constraints, competing opportunities and the likelihood of a counter-offer.",
      },
      { type: "h2", text: "5. Look for ownership beyond profile sharing" },
      {
        type: "p",
        text: "The recruiter’s role should not end once an interview is scheduled. Mid-senior hiring often needs active coordination between the company and candidate through feedback, further discussions, compensation alignment, offer acceptance and the notice period.",
      },
      {
        type: "steps",
        steps: [
          {
            number: "01",
            title: "Mandate",
            text: "Can they translate the requirement into a focused search brief?",
          },
          {
            number: "02",
            title: "Search",
            text: "Can they reach relevant active and passive talent?",
          },
          {
            number: "03",
            title: "Qualification",
            text: "Do they evaluate context, motivation and intent—not only experience?",
          },
          {
            number: "04",
            title: "Shortlist",
            text: "Can they explain why every profile is relevant?",
          },
          {
            number: "05",
            title: "Closure",
            text: "Will they stay accountable through offer and joining?",
          },
        ],
      },
      { type: "h2", text: "6. Compare the recruitment model, not only the fee" },
      {
        type: "p",
        text: "Fee is important, but it should be evaluated alongside the amount of internal time the recruitment partner saves, the difficulty of the mandate and the business impact of a prolonged vacancy or unsuitable hire.",
      },
      {
        type: "p",
        text: "A lower fee is not automatically a lower hiring cost if the process creates weeks of irrelevant screening or fails to close the position.",
      },
      {
        type: "quote",
        text: "The best recruitment partner is not the one that sends the most CVs. It is the one that improves the quality and efficiency of your hiring decisions.",
      },
      { type: "h2", text: "A simple five-question test" },
      { type: "p", text: "Before appointing a recruitment partner, ask:" },
      {
        type: "ol",
        items: [
          "How will you understand and calibrate this mandate?",
          "Where will you look for candidates beyond active applicants?",
          "What will you assess before sharing a profile?",
          "How will you manage candidate intent and offer-stage risk?",
          "Who owns the mandate through closure and joining?",
        ],
      },
      {
        type: "p",
        text: "If the answers are clear, specific and relevant to your hiring context, you are probably evaluating a partner rather than simply another source of CVs.",
      },
      {
        type: "callout",
        title: "Hiring across mid-level, senior or specialist roles?",
        text: "RightKind combines focused search, candidate qualification and curated shortlisting for organisations that value relevance over volume.",
        ctaLabel: "Discuss your mandate with us →",
        ctaHref: "/#contact",
      },
    ],
  },

  "why-more-cvs-dont-lead-to-better-hiring": {
    slug: "why-more-cvs-dont-lead-to-better-hiring",
    title: "Why More CVs Don’t Necessarily Lead to Better Hiring",
    description:
      "Why high CV volume can slow hiring decisions, and how curated shortlists, stronger screening and clearer role calibration improve recruitment quality.",
    canonical: "https://www.rightkind.co/insights/why-more-cvs-dont-lead-to-better-hiring",
    eyebrow: "RightKind Insights",
    category: "Shortlist Quality",
    publishedAt: "Oct 13, 2026",
    readingTime: "6 min read",
    intro:
      "Recruitment can look productive when the inbox is full. But a large candidate pipeline is not the same as a strong hiring process. For important roles, relevance usually matters more than volume.",
    relatedLinks: [
      { label: "Talent Acquisition", href: "/services/talent-acquisition" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Recruitment Agency in Gurugram", href: "/locations/recruitment-agency-in-gurugram" },
    ],
    faqs: [
      {
        question: "Is receiving more CVs from a recruitment agency better?",
        answer:
          "Not necessarily. More profiles are useful only when they are relevant. Large volumes of weakly matched CVs can increase screening time without improving the quality of the final hire.",
      },
      {
        question: "What should a good candidate shortlist include?",
        answer:
          "A useful shortlist should contain candidates who meet the core capability requirements and whose motivation, compensation, availability and role fit have already been discussed.",
      },
      {
        question: "How can employers improve shortlist quality?",
        answer:
          "Start with a clearly calibrated mandate, distinguish must-haves from preferences, and require recruiters to qualify candidates against the business context before sharing them.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "One of the most common ways recruitment performance is judged is by the number of profiles shared. The logic appears reasonable: more candidates should mean more choice, and more choice should improve the probability of finding the right person.",
      },
      {
        type: "p",
        text: "In practice, that logic breaks down quickly when profile quality is inconsistent. Hiring managers end up spending time filtering candidates the recruiter could have eliminated earlier, interviews are used for basic qualification, and the actual decision becomes harder rather than easier.",
      },
      { type: "h2", text: "The hidden cost of CV volume" },
      {
        type: "p",
        text: "Every irrelevant profile creates work. Someone has to review it, compare it with the requirement, reject it, communicate feedback and often explain again what the role needs. Multiply that across several agencies and the employer can become the primary screening layer in a process it has already outsourced.",
      },
      {
        type: "callout",
        title: "A better question",
        text: "Instead of asking “How many CVs have we received?”, ask “How many of the profiles shared are genuinely worth interviewing?”",
      },
      { type: "h2", text: "Why recruiters send too many profiles" },
      { type: "p", text: "High-volume shortlists usually come from one of four problems:" },
      {
        type: "ul",
        items: [
          "The role was not calibrated properly at the start",
          "The search is based too heavily on résumé keywords",
          "Must-have requirements and flexible preferences are not separated",
          "Candidate motivation and practical constraints are checked too late",
        ],
      },
      { type: "h2", text: "What a curated shortlist looks like" },
      {
        type: "p",
        text: "Curated recruitment does not mean artificially limiting options. It means removing candidates who are unlikely to succeed or progress before the employer invests interview time.",
      },
      {
        type: "steps",
        steps: [
          {
            number: "01",
            title: "Capability",
            text: "Does the candidate have the core skills and level of ownership required?",
          },
          {
            number: "02",
            title: "Context",
            text: "Is their previous operating environment relevant to the new role?",
          },
          {
            number: "03",
            title: "Motivation",
            text: "Is there a credible reason for the candidate to consider this opportunity?",
          },
          {
            number: "04",
            title: "Practical fit",
            text: "Are compensation, location, notice period and availability realistic?",
          },
          {
            number: "05",
            title: "Intent",
            text: "If selected, is the candidate genuinely likely to proceed and join?",
          },
        ],
      },
      { type: "h2", text: "Why fewer profiles can improve speed" },
      {
        type: "p",
        text: "Faster hiring is often associated with sending profiles immediately. But speed at the beginning can create delays later if the shortlist is weak.",
      },
      {
        type: "p",
        text: "A more selective first stage can reduce interview wastage, shorten feedback loops and make it easier for the hiring manager to compare credible candidates against the same success criteria.",
      },
      { type: "h2", text: "What employers can do differently" },
      {
        type: "p",
        text: "Recruiters can only curate effectively when the mandate itself is clear. Before the search begins, align internally on the outcomes expected from the hire, the true non-negotiables, the acceptable adjacent backgrounds and the practical boundaries around compensation and location.",
      },
      {
        type: "p",
        text: "Then hold the recruitment partner accountable for explaining the relevance of every profile rather than simply meeting a CV-count target.",
      },
      {
        type: "quote",
        text: "A shortlist should reduce the hiring manager’s work, not move sourcing noise from the market into their inbox.",
      },
      { type: "h2", text: "Quality and choice are not opposites" },
      {
        type: "p",
        text: "Employers still need enough choice to compare different candidates and perspectives. Curated recruitment is therefore not about sending only one person. It is about creating a manageable, credible set of options where each candidate has a genuine reason to be there.",
      },
      {
        type: "p",
        text: "",
        linkAfter: {
          textBefore: "That is particularly important for ",
          linkText: "mid-level and lateral hiring",
          linkHref: "/services/talent-acquisition",
          textAfter:
            ", where organisations may otherwise receive large volumes of superficially similar profiles.",
        },
      },
      {
        type: "callout",
        title: "RightKind’s approach",
        text: "We focus on mandate understanding, targeted search and candidate qualification before shortlisting—so clients spend more time evaluating fit and less time filtering noise.",
      },
    ],
  },
};
