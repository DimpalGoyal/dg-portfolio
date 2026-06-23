import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../animations"

function Skills() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-border-custom bg-surface-secondary p-8 shadow-sm"
      >
        <p className="text-on-surface-muted text-lg">Loading...</p>
      </motion.div>
    </motion.div>
  )
}

export default Skills
