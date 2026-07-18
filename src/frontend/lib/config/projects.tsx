import type { UseProjectInput } from "@/lib/hooks/fetchProjects";

export const projectConfigs: UseProjectInput[] = [
  {
    github: "https://github.com/DimpalGoyal/dg-portfolio",
    url: "https://dg-portfolio-smoky.vercel.app/",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, TypeScript, and Tailwind CSS to showcase projects and skills.",
    techStack: ['nextjs', "React", "TypeScript", "Tailwind CSS", "motion"],
  },
  {
    github: "https://github.com/DimpalGoyal/just-pay",
    title: "Justpay",
    description:
      "A full-stack mini-paytm clone application where user can signup and send dummy money to another user. Created to understand how transaction happens in database and how backend commit and abort transaction ",
    techStack: ["React", "Node.js", "mongodb", "Tailwind CSS", "motion", "jwt", "javascript","axios"],
  },
  {
    github: "https://github.com/DimpalGoyal/pseudo-brain",
    title: "Pseudo brain",
    description:
      "a full-stack brainly type application where user can mark here the important youtube video, web links and notes",
    techStack: ["React", "Node.js", "mongodb", "Tailwind CSS", "motion", "jwt", "typescript","axios"],
  },
];
