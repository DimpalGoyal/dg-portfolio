import { motion } from "framer-motion"
import { profileImage } from "../icons"
import ExpandableButton from "../components/ExpandableButton"
import { containerVariants, itemVariants } from "../animations"
import { socials } from "../config/socials.tsx"

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-ring-custom"
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight transition-transform duration-300 hover:scale-[1.02]"
          >
            Dimpal Goyal{" "}
            <span className="text-xl text-on-surface-muted font-normal">· he/him</span>
          </motion.h1>
          <motion.p
            whileHover={{
              scale: 1.01,
              textShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={itemVariants}
            className="mt-4 text-lg text-on-surface-muted"
          >
            Web Developer
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.01,
              textShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={itemVariants}
            className="mt-6 max-w-md text-on-surface-body leading-relaxed"
          >
            Currently building web applications while learning about artificial intelligence, system design, and scalable software. I enjoy experimenting with new ideas and using AI-powered tools to learn and build faster.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center md:justify-start gap-4"
          >
            {socials.map((s) => (
              <ExpandableButton key={s.label} href={s.href} icon={s.icon} label={s.label} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
