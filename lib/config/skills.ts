export interface SkillCategory {
  title: string;
  icon: "code" | "layers" | "tool" | "brain";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [ "JavaScript", "TypeScript", "Python","SQL", "C++", "C"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "motion"],
  },
  {
    title: "Tools",
    icon: "tool",
    skills: ["Git", "Docker", "PostgreSQL", "Vercel"],
  },
  {
    title: "AI/ML",
    icon: "brain",
    skills: ["LangChain", "Gemini API",],
  },
];
