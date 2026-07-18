"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { skillCategories, type SkillCategory } from "@/lib/config/skills";
import {
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  JavaScriptIcon,
  NextJsIcon,
  MotionIcon,
  SqlIcon,
  CppIcon,
  CIcon,
  GitIcon,
  DockerIcon,
  PostgreIcon,
  VercelIcon,
  LangChainIcon,
  GeminiIcon,
  CodeIcon,
} from "@/components/icons";
import type { ReactNode } from "react";

function CategoryIcon({ icon }: { icon: SkillCategory["icon"] }) {
  const svgProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-on-surface-muted shrink-0",
  };

  switch (icon) {
    case "code":
      return (
        <svg {...svgProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "layers":
      return (
        <svg {...svgProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "tool":
      return (
        <svg {...svgProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "brain":
      return (
        <svg {...svgProps}>
          <path d="M12 2a4 4 0 0 0-4 4c0 .73.2 1.41.54 2A4 4 0 0 0 6 12a4 4 0 0 0 2 3.46V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.54A4 4 0 0 0 18 12a4 4 0 0 0-2.54-3.8c.34-.59.54-1.27.54-2a4 4 0 0 0-4-4z" />
          <path d="M12 2v20" />
        </svg>
      );
  }
}

const skillIcons: Record<string, ReactNode> = {
  javascript: <JavaScriptIcon />,
  typescript: <TypeScriptIcon />,
  python: <PythonIcon />,
  sql: <SqlIcon />,
  "c++": <CppIcon />,
  c: <CIcon />,
  react: <ReactIcon />,
  "next.js": <NextJsIcon />,
  nextjs: <NextJsIcon />,
  "node.js": <NodeIcon />,
  nodejs: <NodeIcon />,
  "tailwind css": <TailwindIcon />,
  tailwindcss: <TailwindIcon />,
  motion: <MotionIcon />,
  git: <GitIcon />,
  docker: <DockerIcon />,
  postgresql: <PostgreIcon />,
  vercel: <VercelIcon />,
  langchain: <LangChainIcon />,
  "gemini api": <GeminiIcon />,
};

const skillColors: Record<string, string> = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  python: "#3776AB",
  sql: "#E38C00",
  "c++": "#00599C",
  c: "#A8B9CC",
  react: "#61DAFB",
  "next.js": "#000000",
  nextjs: "#000000",
  "node.js": "#339933",
  nodejs: "#339933",
  "tailwind css": "#06B6D4",
  tailwindcss: "#06B6D4",
  motion: "#0055FF",
  git: "#F05032",
  docker: "#2496ED",
  postgresql: "#4169E1",
  vercel: "#000000",
  langchain: "#1C3C3C",
  "gemini api": "#4285F4",
};

function getSkillIcon(name: string): ReactNode {
  const key = name.toLowerCase().replace(/[\s.]+/g, "");
  return skillIcons[key] ?? <CodeIcon />;
}

function getSkillColor(name: string): string | undefined {
  const key = name.toLowerCase().replace(/[\s.]+/g, "");
  return skillColors[key];
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl border border-border-custom bg-surface-secondary p-6 shadow-[var(--card-glow)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <CategoryIcon icon={category.icon} />
        <h3 className="text-lg font-semibold tracking-tight text-on-surface">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const color = getSkillColor(skill);
          return (
            <span
              key={skill}
              className="group inline-flex items-center gap-1.5 rounded-full border border-border-custom px-3 py-1 text-sm text-on-surface-body transition-all duration-200 hover:border-on-surface-muted hover:text-on-surface hover:-translate-y-0.5"
              style={{ '--brand': color } as React.CSSProperties}
            >
              <span className="w-4 h-4 shrink-0 transition-colors duration-200 group-hover:text-[var(--brand)] [&>svg]:w-full [&>svg]:h-full">
                {getSkillIcon(skill)}
              </span>
              {skill}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen flex flex-col items-center justify-center px-4 py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-semibold tracking-tight text-on-surface"
        >
          Skills
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
