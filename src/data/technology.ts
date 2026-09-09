export type TechCategory = {
  category: string;
  description: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Frontend Development",
    description: "We work with technologies such as React, Next.js, JavaScript, TypeScript, HTML, CSS, and modern utility frameworks including Tailwind CSS.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Backend Development",
    description: "Node.js, Express.js, REST APIs, authentication systems, business logic, database integration, and scalable backend architectures.",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Business Logic Layer", "Microservices"],
  },
  {
    category: "Mobile Development",
    description: "We develop cross-platform mobile applications using technologies such as React Native, supporting both Android and iOS efficiently.",
    items: ["React Native", "iOS", "Android", "Cross-Platform Architecture"],
  },
  {
    category: "Databases",
    description: "Depending on project requirements, we work with relational and non-relational databases.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & Infrastructure",
    description: "Modern cloud and deployment platforms for reliable, scalable production environments.",
    items: ["AWS", "Vercel", "Cloudflare", "Docker", "CI/CD"],
  },
  {
    category: "AI Technologies",
    description: "We integrate AI APIs and intelligent services into software applications where they provide meaningful business value.",
    items: ["LLM APIs", "AI Assistants", "Document Intelligence", "Automation Pipelines"],
  },
  {
    category: "Development & Collaboration",
    description: "Our workflow utilizes modern collaboration environments for design, documentation, and delivery.",
    items: ["GitHub", "Figma", "Project Management Tools", "Documentation Systems"],
  },
];
