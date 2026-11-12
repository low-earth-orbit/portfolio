/** Single source of truth for site-wide facts and links. */
export const site = {
  name: "Leo Hong",
  title: "Leo Hong | Full-Stack Developer",
  description:
    "Leo Hong is a full-stack developer based in Fredericton, Canada.",
  url: "https://leohong.dev",
  city: "Fredericton",
  country: "Canada",
  links: {
    linkedin: "https://www.linkedin.com/in/leo-hong/",
    github: "https://github.com/low-earth-orbit",
  },
} as const;

export type OffHoursItem = {
  label: string;
  /** Which icon to draw; the mapping lives in components/Bento.tsx. */
  icon: "reading" | "finance" | "hiking" | "tennis" | "calligraphy";
  /** Items with a detail get a tile with a sub-line; the rest become pills. */
  detail?: string;
};

const offHours: readonly OffHoursItem[] = [
  {
    label: "Reading",
    icon: "reading",
    detail: "Mostly social theory and economics",
  },
  {
    label: "Personal finance",
    icon: "finance",
    detail: "Working toward FIRE",
  },
  { label: "Hiking", icon: "hiking" },
  { label: "Tennis", icon: "tennis" },
  { label: "Calligraphy", icon: "calligraphy" },
];

export type ProjectLink = {
  name: string;
  url: string;
};

/** Live sites to link from the home page. */
const projects: readonly ProjectLink[] = [
  {
    name: "Personal finance tools",
    url: "https://personal-finance-tools.leohong.dev/",
  },
];

/** All the words on the page. Edit copy here; layout lives in components/Bento.tsx. */
export const content = {
  /** Small label above the greeting. */
  role: "Full-stack developer",
  intro:
    "I build web applications with TypeScript and React, work across the stack when a project needs it, and use agentic development.",

  /** Card headings. */
  headings: {
    location: "Based in",
    stack: "The stack",
    learning: "Learning now",
    route: "Road to tech",
    offHours: "Away from the keyboard",
    projects: "Projects",
  },

  /** Front end first, then back end and cloud, then how I work. */
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "Express",
    "GraphQL",
    "PostgreSQL",
    "DynamoDB",
    "AWS",
    "Agentic development",
    "Claude Code",
  ],
  learning: ["AI", "Distributed systems", "Cloud computing"],
  route: [
    "Land surveying in Southern Ontario",
    "Back to school at the University of New Brunswick",
    "Computer science",
    "Internships at two local tech companies",
    "Back to one of them after graduating",
  ],
  offHours,
  projects,
  /** Shown in the footer; "LinkedIn" and "GitHub" become links. */
  contact:
    "I’m not looking for freelance work or a new role right now, but you’re welcome to connect on LinkedIn or GitHub.",
} as const;
