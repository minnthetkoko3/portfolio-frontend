// src/data/portfolioData.ts

export const PROFILE = {
  name: "Minn Thet Ko Ko (Matthew)",
  title: "IT Support Specialist • Full Stack Developer",
  location: "Bishan, Singapore",
  bio:
    "IT Support Specialist with 3+ years of experience in system administration, troubleshooting, and backend development. Skilled in Windows/Linux environments, VPS/cloud management, and building Node.js/Express services with TypeScript  . I focus on reliable systems, secure operations, and clean, maintainable code.",
  avatar: "/profile.jpg", // put profile.jpg in public/ (or set "" to hide)
  resumeUrl: "/resume.pdf" // put resume.pdf in public/
} as const;

export const ABOUT_KEYS = [
  "Back-end: Node.js, Express, TypeScript",
  "Front-end: React, TypeScript",
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
    title: "Exposure Wedding Studio",
    desc:
      "Wedding Studio Website built with ",
    tags: ["Python", "Flask", "HTML", "CSS"],
    link: "https://exposure-projects.vercel.app/" // replace with exact repo URL
  },
  {
    title: "Exposure Wedding Studio (Package Price List)",
    desc:
      "Simple web app for a wedding studio to manage and display their package prices, built with Django and SQLite. Features CRUD operations and report generation.",
    tags: ["React", "TypeScript", "CRUD", "Reports"],
    link: "https://exposureweddingservices.vercel.app/" // replace with your repo link if you have it
  },
  {
    title: "Subscription Tracker API",
    desc:
      "A RESTful API for managing user subscriptions, built with Node.js, Express, and MongoDB. Supports user authentication, subscription CRUD operations, and JWT-based security.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/minnthetkoko3/subscription-tracker" // replace with exact repo URL
  },
  {
    title: "Portfolio (Glass UI + Contact API)",
    desc:
      "Dark glassmorphism portfolio with smooth animation, contact form integration, and downloadable resume.",
    tags: ["React", "Tailwind v4", "Framer Motion", "TypeScript"],
    link: "https://portfolio-frontend-puce-sigma.vercel.app/" // replace with deployed link or repo
  },
  {
    title: "Portfolio Backend (Contact Form API)",
    desc:
      "Backend API for handling contact form submissions in the portfolio website.",
    tags: ["Node.js", "Express", "TypeScript", "Email Integration"],
    link: "https://github.com/minnthetkoko3/portfolio-backend" // replace with exact repo URL
  },
  {
    title: "Shwe Vision TV House (Product Showcase)",
    desc:
      "This Project Build for APU(Asia Pacific University of Technology & Innovation) Assignment - A product showcase website for a TV retailer, built with Python Flask and Html/CSS. Displays product information and contact details.",
    tags: ["Python", "Flask", "HTML", "CSS"],
    link: "https://tv-sale.vercel.app/" // replace with exact repo URL
  },
  {
    title: "Auth Application API",
    desc:
      "A secure authentication API built with Node.js, Express, and MongoDB. Supports user registration, login, and JWT-based authentication.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/minnthetkoko3/Auth-App-Typescript" // replace with exact repo URL
  },
  {
    title: "Blog Application API with Node.js and Express, Rest API",
    desc:
      "A simple blog application API built with Node.js and Express. Supports CRUD operations for blog posts and user management.",
    tags: ["Node.js", "Express", "REST API"],
    link: "https://github.com/minnthetkoko3/Blog-Appi" // replace with exact repo URL
  },
  {
    title: "Alpha Marketing--Portfolio Website",
    desc:
      "JavaScript, Nextjs, React Based Portfolio Website for Alpha Marketing Agency. Showcases company services, team, and contact information with a modern design.",
    tags: ["JavaScript", "Next.js", "React", "Tailwind CSS"],
    link: ""
  },

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
    role: "IT Support Assistant / Data Entry",
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