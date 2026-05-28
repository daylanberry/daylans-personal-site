import type {
  PersonalInfo,
  Experience,
  Project,
  Skill,
  ContactInfo,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Daylan Berry",
  title: "Product-minded Software Engineer",
  bio: [
    "I build polished, production-minded web and mobile experiences with React, TypeScript, React Native, and backend systems that can carry real users.",

    "At Caesars Digital, I shipped customer-facing registration, authentication, identity verification, and landing-page systems in regulated environments where reliability and clear execution mattered.",

    "I like work that sits close to the product: fast interfaces, thoughtful flows, calm complexity, and enough backend fluency to own features end to end.",
  ],
  location: "Reno, NV (open to relocation)",
  email: "daylanberry@gmail.com",
};

export const experiences: Experience[] = [
  {
    company: "Caesars Digital",
    position: "Software Engineer - Frontend",
    duration: "01/2021 – 01/2025",
    achievements: [
      "Developed the registration and login flows for our main app, integrating biometric authentication for quick login via fingerprint or FaceID. Optimized the user journey for a seamless experience, enabling automatic login when returning to the app or upon launch for users who have enabled biometrics.",
      "Created a separate identity verification process for states without the proper licensing to use our existing Know Your Customer (KYC) process, ensuring regulatory compliance. Collaborated with a third-party vendor to integrate their solution into our system under a tight deadline.",
      "Spearheaded the development of the registration process for the Nevada and Puerto Rico apps, introducing an all-encompassing user journey in response to specific, additional requirements involving physical location visits for verification.",
      "Created the Caesars Sportsbook homesite and landing page by developing reusable components with Next.js and React Context, while ensuring the sites were powered by a CMS for easy content management and updates.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Loadlight - Voice-first Todo App",
    description:
      "Shared todo app for capturing real-life tasks from voice, widgets, and inbox workflows, then keeping the right work visible across groups and Apple Reminders.",
    duration: "05/2026 – Present",
    status: "In development",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "WidgetKit",
      "Apple Reminders",
    ],
    features: [
      "Built voice capture that turns natural speech into structured tasks with review before saving",
      "Added iOS widgets that deep-link directly into record and type capture flows",
      "Designed Inbox workflows across personal and shared groups with completion history",
      "Implemented Apple Reminders sync for assigned open tasks outside the app",
      "Built fairness, nudges, recurrence, subtasks, and task detail flows for shared households",
      "Added server-side AI quota controls and a remote kill switch for cost protection",
    ],
  },
  {
    name: "SuChef - Recipe Organizer",
    description:
      "Mobile app currently in TestFlight for iOS that helps users organize, customize, and plan meals with recipes from multiple sources.",
    duration: "01/2025 – Present",
    status: "In TestFlight",
    technologies: [
      "React Native",
      "Redux",
      "TypeScript",
      "MongoDB",
      "Node",
      "Express",
    ],
    features: [
      "Developed full authentication flow with secure email/password login, email verification, and protected routes",
      "Built user onboarding experience to guide personalized setup and engagement from first use",
      "Implemented multi-source recipe capture from social media, recipe websites, image uploads, and manual input",
      "Allows users to customize existing recipes with suggested prompts and editable fields for personalized variations",
      "Created dynamic calendar and weekly meal planning views to support user meal prep workflows",
      "Implemented recipe organization via user-defined cookbooks with searchable indexing for quick retrieval",
      "Implemented recipe-to-grocery list feature that auto-categorizes ingredients for streamlined shopping",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend Technologies",
    items: [
      "React",
      "Redux",
      "React Context",
      "React Native",
      "Redux-Saga",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS",
      "Vite",
      "Redux",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "Firebase",
    ],
  },
  {
    category: "APIs & Data Management",
    items: [
      "REST APIs",
      "GraphQL",
      "React Context",
      "Firebase",
      "WebSockets",
      "MongoDB Atlas",
      "Mongoose",
      "SQLite / Postgres / MySQL",
      "Redis",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Nginx",
      "Heroku",
      "DigitalOcean",
      "Netlify",
      "Vercel",
    ],
  },
  {
    category: "Testing & Quality Assurance",
    items: ["Jest", "Mocha", "Chai", "ESLint", "Chrome DevTools"],
  },
  {
    category: "UI/UX & Styling",
    items: [
      "Responsive Design",
      "CSS",
      "Flexbox",
      "Styled Components",
      "Storybook",
      "Material-UI",
      "Accessibility",
    ],
  },
  {
    category: "Authentication & Security",
    items: [
      "Biometric Authentication",
      "OAuth",
      "JWT",
      "KYC Integration",
      "Identity Verification",
      "Rate Limiting & Throttling",
      "Session Management",
    ],
  },
  {
    category: "Mobile & AI/ML",
    items: [
      "iOS/Android Development",
      "React Native",
      "Swift",
      "Cordova",
      "TestFlight",
      "Mobile-First Design",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: "daylanberry@gmail.com",
  linkedin: "https://www.linkedin.com/in/daylan-berry-389ba790/",
  github: "https://github.com/daylanberry",
  location: "Reno, NV",
};
