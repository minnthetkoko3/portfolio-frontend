export const PROFILE = {
  name: "Matthew",
  title: "Full Stack Developer",
  location: "Based in Singapore",
  bio:
    "I build modern full-stack apps with clean UI, solid APIs, and real-world features. I enjoy React, TypeScript, and backend work.",
  avatar: "/profile.jpg", 
  resumeUrl: "/resume.pdf" 
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/minnthetkoko3" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  { label: "Email", href: "minnthetkoko@gmail.com" }
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
    title: "Node/Express API (JWT, validation)",
    progress: 90,
    notes: "Building REST APIs with clean structure and error handling."
  },
  
  {
    title: "Frontend Dev + UI/UX",
    progress: 65,
    notes: "React, Tailwind, and Figma."
  },
  
  {
    title: "Database",
    progress: 70,
    notes: "Mongodb, MySQL, PosgreSQL, data modeling, and queries."
  }
];