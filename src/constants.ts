/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Job, ProcessStep } from "./types";

export const COMPANY = {
  name: "Grophi OPC Private Limited",
  cin: "U78300UP2025OPC235537",
  address: "538A/1673A, Triveni Nagar, Lucknow, UP, 226020",
  email: "connect@gogrophi.com",
  linkedin: "https://www.linkedin.com/company/grophi/",
};

export const CONTACT = {
  email: {
    connect: "connect@gogrophi.com",
    talent: "talent@gogrophi.com",
  },
  phones: ["8318229061", "8533038969"],
};

export const METRICS = [
  { label: "Candidate Reuse Rate", value: 70, suffix: "%" },
  { label: "Cities Presence", value: 35, suffix: "+" },
  { label: "Years Expertise", value: 5, suffix: "+" },
];

export const CLIENTS = [
  { name: "StatusNeo", domain: "statusneo.com" },
  { name: "Scaler", domain: "scaler.com" },
  { name: "Rapido", domain: "rapido.bike" },
  { name: "Vivo", domain: "vivo.com" },
  { name: "Uplers", domain: "uplers.com" },
  { name: "Amul", domain: "amul.com" },
  { name: "Impetus", domain: "impetus.com" },
  { name: "Canon", domain: "canon.com" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "gathering",
    title: "Requirement Gathering",
    description: "Aligning with client needs to ensure a precise understanding of technical and cultural requirements.",
  },
  {
    id: "sourcing",
    title: "Multi-Channel Sourcing",
    description: "Pulling candidates from premium portals and internal resources to build a high-quality talent pool.",
  },
  {
    id: "ingestion",
    title: "Application Ingestion",
    description: "Candidates enter the Grophi Truth Layer (our internal app) for seamless data management and tracking.",
  },
  {
    id: "assessment",
    title: "AI + Human Assessment",
    description: "AI extracts profiles and generates specific screening questions. Human intelligence conducts fitment calls and behavioral screening.",
  },
  {
    id: "presentation",
    title: "Client Presentation",
    description: "Sharing the assessed profile. Stages are updated in real-time within the Kanban workflow of our app.",
  },
  {
    id: "management",
    title: "Offer & Post-Offer Management",
    description: "For Lateral/Full-Time roles, the process concludes at the offer stage. For C2H or C2C, we provide full Compliance and Payroll services.",
  },
];

export const JOBS: (Job & { category: string })[] = [
  {
    id: "sr-react-dev",
    title: "Senior React Developer",
    location: "Remote / Lucknow",
    type: "Full-time",
    category: "Engineering",
    description: "We are looking for a Senior React Developer to lead our front-end initiatives and build robust enterprise applications.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Strong understanding of state management (Redux, Context API)",
      "Experience with modern CSS frameworks like Tailwind",
      "Proven track record of building scalable web applications",
    ],
  },
  {
    id: "sales-exec",
    title: "Sales Executive",
    location: "Bangalore / Mumbai",
    type: "Full-time",
    category: "Sales",
    description: "Join our sales team to drive business growth and build strategic partnerships with leading enterprises.",
    requirements: [
      "3+ years of experience in B2B sales",
      "Excellent communication and negotiation skills",
      "Ability to work in a fast-paced, target-driven environment",
      "Knowledge of the recruitment or IT services industry is a plus",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    category: "Design",
    description: "Create beautiful and intuitive user experiences for our internal and client-facing applications.",
    requirements: [
      "Portfolio demonstrating strong visual design and UX thinking",
      "Proficiency in Figma or Adobe XD",
      "Experience with design systems and component-driven design",
      "Understanding of accessibility standards",
    ],
  },
];
