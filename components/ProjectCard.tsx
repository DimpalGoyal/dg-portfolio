"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ExpandableButton from "./ExpandableButton";
import { itemVariants } from "@/lib/animations";

interface TechItem {
  icon: ReactNode;
  label: string;
}

interface Props {
  thumbnailGradient: string;
  thumbnailUrl?: string;
  title: string;
  description: string;
  techStack: TechItem[];
  href?: string;
}

function ProjectCard({ thumbnailGradient, thumbnailUrl, title, description, techStack, href }: Props) {
  const card = (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`rounded-2xl border border-border-custom bg-surface-secondary overflow-hidden shadow-[var(--card-glow)] transition-all duration-300 ${
        href ? "hover:-translate-y-1 hover:shadow-[var(--card-glow)]/80 cursor-pointer" : ""
      }`}
    >
      <div className={`w-full aspect-video relative ${thumbnailGradient}`}>
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold tracking-tight text-on-surface">{title}</h3>
        <p className="text-sm text-on-surface-body leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <ExpandableButton key={tech.label} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
}

export default ProjectCard;
