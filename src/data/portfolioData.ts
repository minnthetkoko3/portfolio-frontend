export const PROFILE = {
  name: "Web",
  title: "MERN Stack Developer",
  location: "Singapore",
  bio:
    "I build modern full-stack apps with clean UI, solid APIs, and real-world features. I enjoy React, TypeScript, and backend work.",
  avatar: "/profile.jpg", // put image in public/ or set to "" to hide
  resumeUrl: "/resume.pdf" // put resume.pdf in public/
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  { label: "Email", href: "mailto:you@example.com" }
] as const;

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  link: string; // MUST be real URL
};

export const PROJECTS: Project[] = [
  {
    title: "Restaurant Ordering App",
    desc: "Full-stack MERN app with menu, cart, orders, and admin dashboard.",
    tags: ["React", "Node", "MongoDB", "JWT"],
    link: "https://github.com/your-username/restaurant-app"
  },
  {
    title: "Task Manager",
    desc: "Task CRUD with auth, filters, and clean UI.",
    tags: ["Express", "REST", "React"],
    link: "https://github.com/your-username/task-manager"
  },
  {
    title: "Portfolio Website",
    desc: "Dark glass portfolio + contact form saved to MongoDB.",
    tags: ["Tailwind v4", "Vite", "TypeScript"],
    link: "https://your-portfolio-link.com"
  }
];

export const EXPERIENCE = [
  { role: "Personal Projects", time: "2025 — Present", what: "Built MERN apps and improved UI/UX." },
  { role: "Student (Web Technology)", time: "Diploma", what: "Learning web dev, database, networking." }
] as const;

export const SKILLS = [
  { group: "Frontend", items: ["React", "Tailwind", "HTML", "CSS", "JavaScript", "TypeScript"] },
  { group: "Backend", items: ["Node.js", "Express", "REST API", "JWT"] },
  { group: "Database", items: ["MongoDB", "MySQL"] },
  { group: "Tools", items: ["Git/GitHub", "VS Code", "Postman"] }
] as const;