import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../animations"
import ProjectCard from "../components/ProjectCard"
import ScrollIndicator from "../components/ScrollIndicator"
import { useProject } from "../hooks/useProject"
import { projectConfigs } from "../config/projects"

function Projects() {
  const { project: p1 } = useProject(projectConfigs[0])
  const { project: p2 } = useProject(projectConfigs[1])
  const { project: p3 } = useProject(projectConfigs[2])

  const allProjects = [p1, p2, p3].filter(Boolean)

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
          className="text-4xl font-bold tracking-tight text-on-surface"
        >
          Projects
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          {allProjects.map((project) => (
            <ProjectCard key={project!.title} {...project!} />
          ))}
        </div>
        <ScrollIndicator />
      </motion.div>
    </section>
  )
}

export default Projects
