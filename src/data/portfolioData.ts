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

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  details?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    school: "NCC Education",
    program: "Level 4 Diploma (Web/IT)",
    period: "2024 — 2025",
    details: ["Focused on web development, databases, and networking."]
  }
];

export type CertificateItem = {
  name: string;
  issuer: string;
  date?: string;
  link?: string; // optional: certificate URL
};

export const CERTIFICATES: CertificateItem[] = [
  {
    name: "Add your certificate name",
    issuer: "Issuer (e.g., Coursera / Udemy / Google)",
    date: "2026",
    link: "#"
  }
];

export type LearningItem = {
  title: string;
  progress: number; // 0-100
  notes?: string;
  evidenceLink?: string; // github repo / notes / project link
};

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: "React + TypeScript",
    progress: 65,
    notes: "Building portfolio + components, improving typing and patterns."
  },
  {
    title: "Node/Express API (JWT, validation)",
    progress: 55,
    notes: "Building REST APIs with clean structure and error handling."
  },
  {
    title: "MongoDB + Mongoose",
    progress: 45,
    notes: "Schemas, relations, queries, and deployment to Atlas."
  }
];