export const HERO_TAGS = ["React", "Node", "Express", "MongoDB", "Tailwind", "REST API"] as const;

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Restaurant Ordering App",
    desc: "Full-stack MERN app with menu, cart, orders, admin dashboard.",
    tags: ["React", "Node", "MongoDB", "JWT"],
    link: "#"
  },
  {
    title: "Task Manager",
    desc: "CRUD tasks with auth, filters, and clean UI.",
    tags: ["Express", "REST", "React"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Dark glass portfolio with contact form saved to database.",
    tags: ["Tailwind", "Vite", "MERN"],
    link: "#"
  }
];

export const EXPERIENCE = [
  { role: "Freelance / Personal Projects", time: "2025 — Present", what: "Built full-stack apps and improved UI/UX." },
  { role: "Student (Web Technology)", time: "Diploma", what: "Learning networking, databases, web development." }
] as const;

export const SKILLS = [
  { group: "Frontend", items: ["React", "Tailwind", "HTML", "CSS", "JavaScript"] },
  { group: "Backend", items: ["Node.js", "Express", "REST API", "JWT"] },
  { group: "Database", items: ["MongoDB", "MySQL"] },
  { group: "Tools", items: ["Git/GitHub", "VS Code", "Postman"] }
] as const;