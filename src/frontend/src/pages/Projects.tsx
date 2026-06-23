import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../animations"

function Projects() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold tracking-tight text-on-surface"
      >
        Projects
      </motion.h2>
      <motion.p variants={itemVariants} className="mt-4 text-lg text-on-surface-muted">
        Coming soon
      </motion.p>
    </motion.div>
  )
}

export default Projects
