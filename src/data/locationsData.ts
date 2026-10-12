export interface CityMarketData {
  slug: string;
  city: string;
  regionBadge: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  hubs: string[];
  capabilities: {
    title: string;
    desc: string;
  }[];
  localChallenges: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const LOCATIONS_DATA: Record<string, CityMarketData> = {
  "recruitment-agency-in-gurugram": {
    slug: "recruitment-agency-in-gurugram",
    city: "Gurugram",
    regionBadge: "Gurugram & Delhi NCR Advisory",
    metaTitle: "Recruitment Agency & Executive Search in Gurugram | RightKind People Solutions",
    metaDescription: "Premier HR consultancy, executive search, and talent acquisition partner for enterprises, GCCs, and high-growth startups across Gurugram (Cyber City, Golf Course Road, Udyog Vihar).",
    heroTitle: "Recruitment & Executive Search Partner in Gurugram.",
    heroLead: "Operating across the Delhi NCR corporate corridor, RightKind People Solutions partners with high-growth startups, Global Capability Centers (GCCs), and established enterprises in Gurugram to deliver precision-matched leadership and lateral talent.",
    hubs: ["DLF Cyber City", "Golf Course Road", "Udyog Vihar", "Sohna Road", "IMT Manesar"],
    capabilities: [
      {
        title: "GCC & Enterprise Leadership",
        desc: "Connecting Global Capability Centers and Fortune 500 regional headquarters across DLF Cyber City and Golf Course Road with seasoned VPs, Directors, and site leaders.",
      },
      {
        title: "B2B SaaS & FinTech Talent",
        desc: "Targeted lateral recruitment for product engineering, data science, and enterprise sales leaders across Gurugram's high-growth startup corridors.",
      },
      {
        title: "Industrial & Consumer Operations",
        desc: "End-to-end talent acquisition for supply chain, finance, and plant leadership across Udyog Vihar, Sohna Road, and IMT Manesar.",
      },
    ],
    localChallenges: [
      {
        step: "01",
        title: "Offer-Drop Mitigation",
        desc: "Gurugram's competitive tech and GCC sectors experience high notice-period counter-offers. We vet candidate intent rigorously and manage engagement through day-one onboarding.",
      },
      {
        step: "02",
        title: "Compensation Benchmarking",
        desc: "Real-time insights into fixed-to-variable pay structures and ESOP benchmarks across Golf Course Extension, Cyber Hub, and Udyog Vihar employers.",
      },
      {
        step: "03",
        title: "Cross-NCR Commute Fit",
        desc: "Practical evaluation of candidate location compatibility across Gurugram, South Delhi, Dwarka Expressway, and Noida to protect long-term retention.",
      },
    ],
  },
  "recruitment-agency-in-delhi": {
    slug: "recruitment-agency-in-delhi",
    city: "New Delhi",
    regionBadge: "New Delhi Corporate & Industrial Advisory",
    metaTitle: "Recruitment Agency & HR Consultancy in Delhi | RightKind People Solutions",
    metaDescription: "Trusted executive search and permanent recruitment agency in New Delhi. Serving Connaught Place, Nehru Place, Okhla, Rohini, and Aerocity enterprises.",
    heroTitle: "Executive Search & Talent Acquisition in New Delhi.",
    heroLead: "Headquartered in Delhi, RightKind People Solutions works closely with established business houses, promoter-led enterprises, and modern service organizations across the capital to build resilient, high-performing teams.",
    hubs: ["Connaught Place", "Aerocity", "Okhla Industrial Area", "Nehru Place", "Netaji Subhash Place"],
    capabilities: [
      {
        title: "Promoter-Led & Family Business Advisory",
        desc: "Helping established Delhi business groups transition to professional C-suite and functional leadership while respecting legacy organizational culture.",
      },
      {
        title: "Commercial, Finance & Legal Heads",
        desc: "Sourcing Chartered Accountants, Company Secretaries, VP Finance, and General Counsel talent across Connaught Place, Aerocity, and South Delhi.",
      },
      {
        title: "Manufacturing & Trade Operations",
        desc: "Recruiting plant heads, procurement directors, and domestic sales leaders across Okhla, Bawana, Naraina, and Netaji Subhash Place.",
      },
    ],
    localChallenges: [
      {
        step: "01",
        title: "Cultural & Governance Alignment",
        desc: "Matching professionals who thrive in both structured multinational environments and agile, promoter-driven enterprises in Delhi.",
      },
      {
        step: "02",
        title: "Discreet Leadership Replacement",
        desc: "Executing confidential headhunting mandates for critical senior roles without disrupting ongoing commercial operations.",
      },
      {
        step: "03",
        title: "Zone-Specific Retention",
        desc: "Sourcing talent aligned with North, West, South, and Central Delhi transit corridors to minimize attrition.",
      },
    ],
  },
  "recruitment-agency-in-noida": {
    slug: "recruitment-agency-in-noida",
    city: "Noida",
    regionBadge: "Noida & Greater Noida Tech Corridor",
    metaTitle: "Recruitment Agency & IT Staffing in Noida | RightKind People Solutions",
    metaDescription: "Strategic talent acquisition and leadership hiring across Noida Sector 62, Noida Expressway, and Greater Noida for IT, Electronics, and Engineering firms.",
    heroTitle: "Strategic Talent Acquisition Partner in Noida.",
    heroLead: "From enterprise software centers along the Noida-Greater Noida Expressway to electronics manufacturing hubs in Sector 62 and Phase-II, RightKind delivers vetted technical and leadership talent.",
    hubs: ["Noida-Greater Noida Expressway", "Sector 62 & 63", "Sector 16 & 18", "Film City", "Greater Noida Industrial Hub"],
    capabilities: [
      {
        title: "Engineering & Product Centers",
        desc: "Building software engineering, cloud architecture, and AI/ML teams for technology companies and R&D centers along the Noida Expressway.",
      },
      {
        title: "Electronics & EMS Leadership",
        desc: "Recruiting R&D heads, quality assurance directors, and supply chain specialists for Noida's booming electronics manufacturing ecosystem.",
      },
      {
        title: "Media, EdTech & Digital Operations",
        desc: "Connecting high-growth consumer, digital media, and EdTech companies in Sector 16, 62, and Film City with revenue and operations leaders.",
      },
    ],
    localChallenges: [
      {
        step: "01",
        title: "Technical Competency Vetting",
        desc: "Multi-stage domain screening to filter out resume inflation and deliver engineering candidates who pass rigorous technical rounds.",
      },
      {
        step: "02",
        title: "East-NCR Talent Pool Access",
        desc: "Deep candidate networks across Noida, Indirapuram, Greater Noida, and East Delhi for rapid lateral onboarding.",
      },
      {
        step: "03",
        title: "Rapid Scaling Support",
        desc: "Structured hiring sprints for newly established R&D centers and expanding industrial units in Gautam Buddha Nagar.",
      },
    ],
  },
  "recruitment-agency-in-mumbai": {
    slug: "recruitment-agency-in-mumbai",
    city: "Mumbai",
    regionBadge: "Mumbai Financial & Enterprise Hub",
    metaTitle: "Executive Search & Recruitment Agency in Mumbai | RightKind People Solutions",
    metaDescription: "Executive search and specialist talent acquisition in Mumbai. Serving BFSI, FinTech, Pharma, and Consumer enterprises across BKC, Lower Parel, and Andheri.",
    heroTitle: "Executive Search & Leadership Hiring in Mumbai.",
    heroLead: "With partner presence in Mumbai, RightKind People Solutions serves financial institutions, pharmaceutical leaders, consumer brands, and conglomerates across India's commercial capital.",
    hubs: ["Bandra-Kurla Complex (BKC)", "Lower Parel", "Andheri East & SEEPZ", "Powai", "Goregaon & Malad Mindspace"],
    capabilities: [
      {
        title: "BFSI, FinTech & Private Equity",
        desc: "Headhunting investment professionals, risk officers, compliance heads, and FinTech product leaders across BKC, Nariman Point, and Lower Parel.",
      },
      {
        title: "Pharma, Healthcare & Life Sciences",
        desc: "Sourcing R&D directors, regulatory affairs specialists, and commercial heads for Mumbai's pharmaceutical and healthcare enterprises.",
      },
      {
        title: "FMCG, Retail & D2C Brands",
        desc: "Placing chief marketing officers, modern trade directors, and supply chain leaders for consumer brands headquartered in Mumbai.",
      },
    ],
    localChallenges: [
      {
        step: "01",
        title: "High-Touch Executive Discretion",
        desc: "Whisper-quiet outreach and board-level confidentiality for sensitive C-suite and SVP mandates in Mumbai's tightly connected corporate circles.",
      },
      {
        step: "02",
        title: "Western & Central Line Commute Mapping",
        desc: "Aligning candidate residential corridors from Thane, Navi Mumbai, and Western Suburbs with office locations to ensure long-term stability.",
      },
      {
        step: "03",
        title: "Domain-Specific Compensation Structuring",
        desc: "Advisory on bonus pools, LTIPs, and retention structures tailored to Mumbai's financial and corporate sectors.",
      },
    ],
  },
  "recruitment-agency-in-bengaluru": {
    slug: "recruitment-agency-in-bengaluru",
    city: "Bengaluru",
    regionBadge: "Bengaluru Technology & Innovation Advisory",
    metaTitle: "Tech Recruitment & Executive Search in Bengaluru | RightKind People Solutions",
    metaDescription: "Specialist technology recruitment, GCC leadership hiring, and executive search across Bengaluru (ORR, Whitefield, Koramangala, Indiranagar).",
    heroTitle: "Technology & Leadership Recruitment in Bengaluru.",
    heroLead: "Partnering with venture-backed startups, SaaS unicorns, and global R&D centers across Bengaluru to secure engineering leaders, product visionaries, and GTM executives.",
    hubs: ["Outer Ring Road (Bellandur - Marathahalli)", "Whitefield & ITPL", "Koramangala & HSR Layout", "Indiranagar", "Electronic City"],
    capabilities: [
      {
        title: "VP Engineering, CTO & AI Leadership",
        desc: "Identifying systems architects, AI researchers, and engineering VPs who have scaled distributed systems and high-velocity product teams.",
      },
      {
        title: "Global Capability Center (GCC) Setup",
        desc: "Partnering with global enterprises establishing or expanding their Bengaluru R&D centers across ORR and Whitefield.",
      },
      {
        title: "Founder's Office & GTM Leaders",
        desc: "Recruiting Chief of Staff, VP Product, and Global Enterprise Sales leaders for Series A to pre-IPO startups in Koramangala and HSR.",
      },
    ],
    localChallenges: [
      {
        step: "01",
        title: "Cutting Through Tech Hiring Noise",
        desc: "Focusing on passive, high-impact builders and engineering leaders rather than active job-board hoppers.",
      },
      {
        step: "02",
        title: "ESOP & Equity Advisory",
        desc: "Helping founders and candidates navigate complex equity, cliff, and buyback structures in Bengaluru's startup ecosystem.",
      },
      {
        step: "03",
        title: "Micro-Market Location Fit",
        desc: "Accounting for Bengaluru's ORR, North, and East traffic realities during candidate shortlisting to prevent post-joining hybrid friction.",
      },
    ],
  },
};
