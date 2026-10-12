// ─── All portfolio content lives here ───────────────────────────────────────
// Edit this file to update the site. Components read from these exports.

export const meta = {
  name: "Hansini Gundavarapu",
  school: "Tufts University · Class of 2028",
  title: "Data Science & Quantitative Economics",
  location: "Boston, MA",
  email: "hansini.gundavarapu@tufts.edu", // Outlook (school)
  emailPersonal: "hansinig101@gmail.com", // Gmail
  linkedin: "https://www.linkedin.com/in/hansini-gundavarapu-335768278/",
  github: "https://github.com/hansinig",
  bio: "I'm a junior at Tufts studying Data Science and Quantitative Economics. I like work that mixes numbers with real-world impact, from equity research and financial modeling to building software people actually use.",
  interests: "Interested in markets research, equity research, asset management, and fintech.",
};

export interface Experience {
  org: string;
  role: string;
  period: string;
  summary: string;
}

export const experience: Experience[] = [
  {
    org: "JPMorgan Chase & Co.",
    role: "CareerED.YOU Fellow",
    period: "Sep 2025 – Nov 2025",
    summary:
      "Competitive fellowship covering investment banking, markets, risk, and corporate finance, with workshops on valuation, credit risk, and M&A.",
  },
  {
    org: "JumboCode",
    role: "Software Developer",
    period: "Sep 2025 – May 2026",
    summary:
      "Built a TypeScript + MapLibre map of 100+ Massachusetts schools for a nonprofit platform serving 1,000+ users.",
  },
  {
    org: "SHAPE, Tufts Office of Student Life",
    role: "Program Co-Coordinator",
    period: "Apr 2026 – Present",
    summary:
      "Recruited and trained 19 facilitators for a civic engagement pre-orientation program for 60+ first-years.",
  },
  {
    org: "TEDxTufts",
    role: "Speaker Coach",
    period: "Sep 2025 – Apr 2026",
    summary: "Coached 10+ speakers on structure and delivery for an event with 200+ guests.",
  },
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
    title: "CAVA Group DCF & Comps",
    category: "Equity Research",
    description:
      "3-statement model, DCF, and comparable company analysis on CAVA, with a long thesis.",
    tools: ["Excel", "Python"],
    link: "/equity_research_cava.pdf",
  },
  {
    title: "Starbucks Long, Q2 FY2026",
    category: "Trading Pitch · Tufts Trading Club",
    description:
      "Long pitch ahead of Q2 earnings, arguing the turnaround under CEO Brian Niccol was taking hold.",
    tools: ["Excel", "Bloomberg"],
    link: "/trading_pitch_sbux.pdf",
  },
  {
    title: "Massachusetts History Day",
    category: "Full-Stack · JumboCode",
    description:
      "Interactive school-location map for a nonprofit case-management platform, built with a 13-person team.",
    tools: ["TypeScript", "MapLibre", "Next.js"],
    link: "https://github.com/JumboCode/mhd",
  },
  {
    title: "Gerp",
    category: "Systems · CS 15",
    description:
      "grep-style file search tool in C++ that indexes directories with a custom hash map.",
    tools: ["C++", "Hashing"],
    link: "https://github.com/hansinig/Project-Gerp",
  },
  {
    title: "CS 20 Final Project",
    category: "Web Development",
    description: "Full-stack web app using React, MongoDB, and PHP/MySQL.",
    tools: ["React", "MongoDB", "PHP"],
    link: "https://github.com/micliao7/CS20-Final-Project",
  },
];

export const activities = [
  {
    org: "Tufts Bhangra",
    role: "Team Manager",
    detail: "Manage a $10K+ budget and 8-person eboard across 3 competitions and 7+ performances a season.",
  },
  {
    org: "Tufts JumboVentures",
    role: "Team Member",
    detail: "",
  },
  {
    org: "Boston Bhangra Inc.",
    role: "Dance Coordinator",
    detail: "",
  },
  {
    org: "Tufts Association of South Asians",
    role: "Events Coordinator",
    detail: "Plan 12+ cultural events a year for 300+ members.",
  },
  {
    org: "McKinsey Forward",
    role: "Fellow",
    detail: "",
  },
];

export const skills = {
  Finance: ["Financial Modeling", "DCF", "Comps", "3-Statement Models", "Equity Research", "Bloomberg"],
  Technical: ["Python (pandas, NumPy)", "TypeScript", "React / Next.js", "SQL", "C++", "Excel"],
  Languages: ["English", "French (Intermediate)"],
};
