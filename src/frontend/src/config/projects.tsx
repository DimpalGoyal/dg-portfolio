import { ReactIcon, TypeScriptIcon, TailwindIcon, NodeIcon, PythonIcon } from "../icons"
import type { ReactNode } from "react"

interface TechItem {
  icon: ReactNode
  label: string
}

interface Project {
  thumbnailGradient: string
  title: string
  description: string
  techStack: TechItem[]
}

export const projects: Project[] = [
  {
    thumbnailGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, TypeScript, and Tailwind CSS to showcase projects and skills.",
    techStack: [
      { icon: <ReactIcon />, label: "React" },
      { icon: <TypeScriptIcon />, label: "TypeScript" },
      { icon: <TailwindIcon />, label: "Tailwind CSS" },
    ],
  },
  {
    thumbnailGradient: "bg-gradient-to-br from-emerald-500 to-cyan-600",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, cart functionality, and payment processing.",
    techStack: [
      { icon: <ReactIcon />, label: "React" },
      { icon: <NodeIcon />, label: "Node.js" },
      { icon: <TypeScriptIcon />, label: "TypeScript" },
    ],
  },
  {
    thumbnailGradient: "bg-gradient-to-br from-orange-500 to-red-600",
    title: "AI Chat Application",
    description:
      "A real-time chat application powered by AI, featuring natural language processing and contextual responses.",
    techStack: [
      { icon: <PythonIcon />, label: "Python" },
      { icon: <ReactIcon />, label: "React" },
      { icon: <TailwindIcon />, label: "Tailwind CSS" },
    ],
  },
]
