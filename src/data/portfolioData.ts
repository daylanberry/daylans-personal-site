import type {
  Experience,
  Project,
  Skill,
  ContactInfo,
} from "../types/portfolio";

export const personalInfo = {
  name: "Daylan Berry",
  title: "Software Engineer",
  bio: "Passionate frontend engineer with 4+ years of experience building user-centric applications at scale. Specialized in React, TypeScript, and modern web technologies. I thrive on creating seamless user experiences and have a proven track record of delivering high-impact features for millions of users. Currently expanding my skills into mobile development while maintaining a focus on performance, accessibility, and clean code architecture.",
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
    name: "SuChef - Recipe Organizer",
    description:
      "Mobile app currently in TestFlight for iOS that helps users organize, customize, and plan meals with recipes from multiple sources.",
    duration: "01/2025 – Present",
    status: "In TestFlight",
    technologies: ["React Native", "TypeScript", "Firebase", "iOS"],
    features: [
      "Developed full authentication flow with secure email/password login, email verification, and protected routes",
      "Built user onboarding experience to guide personalized setup and engagement from first use",
      "Implemented multi-source recipe capture from social media, recipe websites, image uploads, and manual input",
      "Allows users to customize existing recipes with suggested prompts and editable fields for personalized variations",
      "Created dynamic calendar and weekly meal planning views to support user meal prep workflows",
      "Implemented recipe organization via user-defined cookbooks with searchable indexing for quick retrieval",
      "• Implemented recipe-to-grocery list feature that auto-categorizes ingredients for streamlined shopping",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend Technologies",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React Native",
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
    items: ["REST APIs", "GraphQL", "React Context", "Firebase", "JSON"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "Docker", "Kubernetes", "Git", "CI/CD"],
  },
  {
    category: "Testing & Quality Assurance",
    items: [
      "Jest",
      "Mocha",
      "Chai",
      "Testing Library",
      "ESLint",
      "Chrome DevTools",
    ],
  },
  {
    category: "UI/UX & Styling",
    items: [
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "Styled Components",
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
    ],
  },
  {
    category: "Mobile & AI/ML",
    items: [
      "React Native",
      "iOS Development",
      "TestFlight",
      "Mobile-First Design",
      "TensorFlow",
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: "daylanberry@gmail.com",
  linkedin: "https://www.linkedin.com/in/daylan-berry-389ba790/",
  github: "https://github.com/daylanberry",
  location: "Reno, NV",
};
