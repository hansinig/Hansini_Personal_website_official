// ─── All portfolio content lives here ───────────────────────────────────────
// Edit this file to update the site. Components read from these exports.

export const meta = {
  name: "Hansini Gundavarapu",
  school: "Tufts University · Class of 2028",
  title: "Data Science & Quantitative Economics",
  focus: ["AI & Data", "Leadership", "Finance"],
  location: "Boston, MA",
  email: "hansini.gundavarapu@tufts.edu",
  emailPersonal: "hansinig101@gmail.com",
  linkedin: "https://www.linkedin.com/in/hansini-gundavarapu-335768278/",
  github: "https://github.com/hansinig",
  bio: "I'm a junior at Tufts studying Data Science and Quantitative Economics, with a minor in AI Development. I'm passionate about bridging the gap between learning, communication, technology, products, and consumers. I lead teams across campus, from a 60+ student pre-orientation program to the Tufts Bhangra Team, and I build with data, code, and AI tools to turn messy information into clear decisions.",
  interests: "Interested in AI, fintech, markets research, and asset management.",
};

export interface Role {
  org: string;
  role: string;
  period: string;
  summary: string;
}

export const leadership: Role[] = [
  {
    org: "SHAPE, Tufts Office of Student Life",
    role: "Pre-Orientation Coordinator",
    period: "Apr 2026 – Present",
    summary:
      "Recruited and trained 19 peer facilitators and run a week-long civic leadership program for 60+ first-years, from housing and scheduling to community partnerships and outreach.",
  },
  {
    org: "Tufts Bhangra Team",
    role: "Team Manager",
    period: "May 2026 – Present",
    summary:
      "Oversee a $10K+ budget, delegate across the eboard, and run logistics for 3 competitions and 7+ performances a season.",
  },
  {
    org: "Tufts Association of South Asians",
    role: "Events Coordinator",
    period: "Sep 2025 – Present",
    summary: "Plan 12+ large cultural and social events, growing member and campus engagement by 30%.",
  },
  {
    org: "Boston Bhangra Inc.",
    role: "Dance Choreographer & Coordinator",
    period: "Apr 2026 – Present",
    summary:
      "Choreograph and teach original routines for a nonprofit arts company and coordinate 25+ parents and volunteers each season.",
  },
  {
    org: "TEDxTufts",
    role: "Speaker Coach",
    period: "Sep 2025 – Apr 2026",
    summary: "Interviewed and coached 10+ speakers to build talks for 200+ attendees.",
  },
];

export const experience: Role[] = [
  {
    org: "JumboCode",
    role: "Software Developer",
    period: "Sep 2025 – May 2026",
    summary:
      "Built an interactive TypeScript + MapLibre school map that cut client lookup time from hours to seconds, and worked with 13 developers on improvements that raised nonprofit site traffic and data efficiency by 70%.",
  },
  {
    org: "JPMorgan Chase & Co.",
    role: "CareerED.YOU Fellow",
    period: "Sep 2025 – Nov 2025",
    summary:
      "Selected from a competitive pool for a fellowship on markets, risk, and corporate finance, applying valuation and comps frameworks in live workshops.",
  },
];

export const programs = [
  { org: "Tufts Venture Partners", role: "Member" },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  tools: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "CAVA Group Equity Research",
    category: "Equity Research · Python",
    description:
      "3-statement model, DCF, and comps on CAVA, plus a Python event study on earnings announcements for 20+ S&P 500 companies.",
    tools: ["Python", "Excel", "Statistics"],
    link: "/equity_research_cava.pdf",
  },
  {
    title: "Massachusetts History Day",
    category: "Full-Stack · JumboCode",
    description:
      "Interactive school-location map for a nonprofit platform, built with a 13-person team.",
    tools: ["TypeScript", "MapLibre", "Next.js"],
    link: "https://github.com/JumboCode/mhd",
  },
  {
    title: "Starbucks Long, Q2 FY2026",
    category: "Trading Pitch · Tufts Investment Club",
    description:
      "Long pitch ahead of Q2 earnings built on Bloomberg data and first-hand channel checks.",
    tools: ["Excel", "Bloomberg"],
    link: "/trading_pitch_sbux.pdf",
  },
  {
    title: "Gerp",
    category: "Systems · CS 15",
    description: "grep-style file search tool in C++ that indexes directories with a custom hash map.",
    tools: ["C++", "Hashing"],
    link: "https://github.com/hansinig/Project-Gerp",
  },
  {
    title: "CS 20 Final Project",
    category: "Web Development",
    description: "Full-stack web app using React, MongoDB, and PHP/MySQL.",
    tools: ["React", "MongoDB", "PHP"],
    link: "https://github.com/hansinig/CS20-Final-Project",
  },
];

export const skills = {
  "AI & Data": ["Python (pandas, NumPy)", "SQL", "Microsoft Copilot", "Lovable", "Gamma", "Excel"],
  Engineering: ["TypeScript", "JavaScript", "React", "C++", "HTML", "Tailwind CSS"],
  Finance: ["Financial Modeling", "DCF Valuation", "Comps", "Event Studies", "Bloomberg"],
  Languages: ["English", "French (Intermediate)"],
};
