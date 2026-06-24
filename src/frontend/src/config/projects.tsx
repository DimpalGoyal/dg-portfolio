import type { UseProjectInput } from "../hooks/useProject";

export const projectConfigs: UseProjectInput[] = [
  {
    github: "https://github.com/DimpalGoyal/dg-portfolio",
    url: "https://dg-portfolio-smoky.vercel.app/",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, TypeScript, and Tailwind CSS to showcase projects and skills.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, cart functionality, and payment processing.",
    techStack: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "AI Chat Application",
    description:
      "A real-time chat application powered by AI, featuring natural language processing and contextual responses.",
    techStack: ["Python", "React", "Tailwind CSS"],
  },
];
