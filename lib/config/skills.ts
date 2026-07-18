export interface SkillCategory {
  title: string;
  icon: "code" | "layers" | "tool" | "brain";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "Tools",
    icon: "tool",
    skills: ["Git", "Docker", "PostgreSQL", "Redis", "Vercel"],
  },
  {
    title: "AI/ML",
    icon: "brain",
    skills: ["LangChain", "OpenAI API", "RAG", "NLP", "TensorFlow"],
  },
];
