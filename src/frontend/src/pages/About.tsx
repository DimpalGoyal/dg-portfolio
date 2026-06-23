import { motion } from "framer-motion"
import { GitHubIcon, LinkedInIcon, XIcon, profileImage } from "../icons"
import ExpandableButton from "../components/ExpandableButton"
import { containerVariants, itemVariants } from "../animations"

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
          <motion.p variants={itemVariants} className="mt-4 text-lg text-on-surface-muted">
            Software Engineer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-on-surface-body leading-relaxed"
          >
            Building software that makes a difference. Passionate about clean code and elegant solutions.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-start gap-4"
          >
            <ExpandableButton
              href="https://github.com/DimpalGoyal"
              icon={<GitHubIcon />}
              label="GitHub"
            />
            <ExpandableButton
              href="https://www.linkedin.com/in/dimpal-goyal-5136b3335/"
              icon={<LinkedInIcon />}
              label="LinkedIn"
            />
            <ExpandableButton
              href="https://x.com/dimpalgoyal129"
              icon={<XIcon />}
              label="X"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
