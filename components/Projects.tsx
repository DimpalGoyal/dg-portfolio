"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import ProjectCard from "@/components/ProjectCard";
import ScrollIndicator from "@/components/ScrollIndicator";
import type { ProjectData } from "@/lib/hooks/fetchProjects";
import {
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  AxiosIcon,
  JavaScriptIcon,
  JwtIcon,
  MongoIcon,
  MotionIcon,
  NextJsIcon,
  CodeIcon,
} from "@/components/icons";
import type { ReactNode } from "react";

interface Props {
  projects: ProjectData[];
}

const techIcons: Record<string, ReactNode> = {
  react: <ReactIcon />,
  reactjs: <ReactIcon />,
  typescript: <TypeScriptIcon />,
  ts: <TypeScriptIcon />,
  tailwind: <TailwindIcon />,
  tailwindcss: <TailwindIcon />,
  node: <NodeIcon />,
  nodejs: <NodeIcon />,
  python: <PythonIcon />,
  nextjs: <NextJsIcon />,
  motion: <MotionIcon />,
  mongodb: <MongoIcon />,
  jwt: <JwtIcon />,
  javascript: <JavaScriptIcon />,
  axios: <AxiosIcon />,
};

function getIcon(techName: string): ReactNode {
  const key = techName.toLowerCase().replace(/[\s.]+/g, "");
  return techIcons[key] ?? <CodeIcon />;
}

const techColors: Record<string, string> = {
  react: "#61DAFB",
  reactjs: "#61DAFB",
  typescript: "#3178C6",
  ts: "#3178C6",
  tailwind: "#06B6D4",
  tailwindcss: "#06B6D4",
  node: "#339933",
  nodejs: "#339933",
  python: "#3776AB",
  nextjs: "#000000",
  motion: "#0055FF",
  mongodb: "#47A248",
  jwt: "#000000",
  javascript: "#F7DF1E",
  axios: "#5A29E4",
};

function getColor(techName: string): string | undefined {
  const key = techName.toLowerCase().replace(/[\s.]+/g, "");
  return techColors[key];
}

function Projects({ projects }: Props) {
  return (
    <section id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-semibold tracking-tight text-on-surface"
        >
          Projects
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              thumbnailGradient={project.thumbnailGradient}
              thumbnailUrl={project.thumbnailUrl}
              title={project.title}
              description={project.description}
              href={project.href}
              techStack={project.techNames.map((t) => ({
                icon: getIcon(t),
                label: t,
                color: getColor(t),
              }))}
            />
          ))}
        </div>
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}

export default Projects;
