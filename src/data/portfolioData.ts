// src/data/portfolioData.ts

export const PROFILE = {
  name: "Minn Thet Ko Ko (Matthew)",
  title: "IT Support Specialist • Backend Developer",
  location: "Bishan, Singapore",
  bio:
    "IT Support Specialist with 3+ years of experience in system administration, troubleshooting, and backend development. Skilled in Windows/Linux environments, VPS/cloud management, and building Node.js/Express services with TypeScript  . I focus on reliable systems, secure operations, and clean, maintainable code.",
  avatar: "/profile.jpg", // put profile.jpg in public/ (or set "" to hide)
  resumeUrl: "/resume.pdf" // put resume.pdf in public/
} as const;

export const ABOUT_KEYS = [
  "Back-end: Node.js, Express, TypeScript",
  "Database: MongoDB / MySQL",
  "IT Support: troubleshooting, networking basics",
  "Tools: GitHub, Postman, VS Code"
] as const;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/minnthetkoko3" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/minnthetkoko-matthew" },
  { label: "Email", href: "mailto:minnthetkoko@gmail.com" },
  { label: "Facebook", href: "https://facebook.com/minnthet.riza" }
] as const;

export const HERO_TAGS = [
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Linux",
  "Windows Server",
  "Networking",
  "AWS (Learning)"
] as const;

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Supermarket / Order Management (Django + SQLite)",
    desc:
      "Order creation with multiple items, totals calculation, reports by date range, and admin-style product/customer management.",
    tags: ["Django", "SQLite", "CRUD", "Reports"],
    link: "https://github.com/minnthetkoko3" // replace with your repo link if you have it
  },
  {
    title: "Node.js API (Auth + Clean Structure)",
    desc:
      "Backend REST API built with Express + TypeScript, focusing on validation, JWT auth, error handling, and clean folder structure.",
    tags: ["Node.js", "Express", "TypeScript", "JWT"],
    link: "https://github.com/minnthetkoko3" // replace with exact repo URL
  },
  {
    title: "Portfolio (Glass UI + Contact API)",
    desc:
      "Dark glassmorphism portfolio with smooth animation, contact form integration, and downloadable resume.",
    tags: ["React", "Tailwind v4", "Framer Motion", "TypeScript"],
    link: "https://github.com/minnthetkoko3" // replace with deployed link or repo
  }
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  type: string; // Full-time / Internship
  period: string; // "Jun 2025 — Oct 2025"
  bullets: string[];
};

export const EXPERIENCE_YEARS = 5; 

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Administrative Assistant",
    company: "Deals on Wheels Pte. Ltd.",
    location: "Singapore",
    type: "Full-time",
    period: "Jun 2025 — Oct 2025",
    bullets: [
      "Organized documentation and supported internal processes.",
      "Helped maintain day-to-day operations and coordination."
    ]
  },
  {
    role: "Back End Developer",
    company: "Web Hub",
    location: "Yangon, Myanmar",
    type: "Internship",
    period: "Jan 2024 — Mar 2024",
    bullets: [
      "Worked on backend development using Node.js, Express, TypeScript, and MongoDB.",
      "Maintained and updated codebase to improve stability and performance."
    ]
  },
  {
    role: "Junior Web Developer / Digital Marketing Assistant",
    company: "Alpha Marketing Agency",
    location: "Yangon, Myanmar",
    type: "Full-time",
    period: "Aug 2021 — Dec 2022",
    bullets: [
      "Supported web tasks and content operations for marketing projects.",
      "Assisted with Node.js/JavaScript tasks and troubleshooting."
    ]
  },
  {
    role: "Technical Support Specialist / Digital Marketing Assistant",
    company: "Alpha Marketing Agency",
    location: "Yangon, Myanmar",
    type: "Full-time",
    period: "May 2020 — Jul 2021",
    bullets: [
      "Provided technical support and resolved daily IT issues.",
      "Handled networking/application support tasks as needed."
    ]
  },
  {
    role: "Information Technology Support Assistant / Data Entry",
    company: "Alpha Marketing Agency",
    location: "Yangon, Myanmar",
    type: "Internship",
    period: "Jan 2020 — Apr 2020",
    bullets: [
      "Assisted IT support operations and documentation.",
      "Handled basic application support and data entry tasks."
    ]
  }
];

export const SKILLS = [
  {
    group: "Backend Development",
    items: ["Node.js", "Express.js", "TypeScript", "REST API", "Debugging", "JWT (Learning/Using)"]
  },
  {
    group: "System Administration",
    items: ["Windows Server", "Linux", "VPS Management", "Server Configuration", "Troubleshooting"]
  },
  {
    group: "Networking",
    items: ["LAN/WAN Setup", "Router/Switch Config", "Network Troubleshooting"]
  },
  {
    group: "Database",
    items: ["MongoDB", "MySQL", "Data Modeling", "Queries"]
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "Microsoft Office", "Automation Tools"]
  },
  {
    group: "Soft Skills",
    items: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Reliability"]
  }
] as const;

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  details?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    school: "EverSafe Academy (Singapore)",
    program: "Diploma in Web Technology",
    period: "Present",
    details: ["Web development, databases, networking fundamentals."]
  },
  {
    school: "Parami International College",
    program: "GED – General Educational Development",
    period: "2024"
  },
  {
    school: "MMS One Stop IT Solutions",
    program: "Special Web Design (SWD)",
    period: "2023"
  }
];

export type CertificateItem = {
  name: string;
  issuer: string;
  status?: string;
};

export const CERTIFICATES: CertificateItem[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "In Progress" },
  { name: "Google IT Support Professional Certificate", issuer: "Coursera" },
  { name: "CS50x: Introduction to Computer Science", issuer: "Harvard University" },
  { name: "Node.js: The Complete Guide", issuer: "Udemy" },
  { name: "Introduction to Linux (LFS101)", issuer: "The Linux Foundation" }
];

export type LearningItem = {
  title: string;
  progress: number; // 0-100
  notes?: string;
  evidenceLink?: string;
};

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: "Node/Express API (JWT, validation, clean architecture)",
    progress: 90,
    notes: "Building REST APIs with good structure, validation, and error handling.",
    evidenceLink: "https://github.com/minnthetkoko3"
  },
  {
    title: "Frontend Dev + UI/UX (React + Tailwind)",
    progress: 65,
    notes: "Improving UI consistency, accessibility, and component design."
  },
  {
    title: "Database (MongoDB/MySQL/PostgreSQL)",
    progress: 70,
    notes: "Data modeling, query performance, and practical schema design."
  }
];