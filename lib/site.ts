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

export type ProjectLink = {
  name: string;
  description: string;
  url: string;
};

/** Live sites to list on the home page. */
const projects: readonly ProjectLink[] = [
  {
    name: "Personal finance tools",
    description: "Tools and experiments around personal finance",
    url: "https://personal-finance-tools.leohong.dev/",
  },
];

/** All the words on the page. Edit copy here; layout lives in the components. */
export const content = {
  /** Shown in small caps above the greeting. */
  role: "Full-stack developer",
  intro:
    "I build web applications with TypeScript and React, work across the stack when a project needs it, and use agentic development.",

  /** Section headings. */
  headings: {
    projects: "Projects",
    learning: "Currently learning",
    stack: "Tech stack",
    hobbies: "Hobbies",
    contact: "Get in touch",
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
  ],
  learning: ["AI", "Distributed systems", "Cloud computing"],
  hobbies: "Reading, personal finance, hiking, tennis and calligraphy.",
  projects,
  contact:
    "I’m not looking for freelance work or a new role right now, but I’m always open to connecting.",
} as const;
