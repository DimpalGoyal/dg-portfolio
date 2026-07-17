"use client";

import { motion } from "framer-motion";
import { profileImage } from "@/components/icons";
import SocialCard from "@/components/SocialCard";
import ScrollIndicator from "@/components/ScrollIndicator";
import { containerVariants, itemVariants } from "@/lib/animations";
import { socials } from "@/lib/config/socials";
import { useTheme } from "@/lib/context/ThemeContext";

function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover ring-2 ring-transparent shadow-[0_0_40px_rgba(255,255,255,0.06)]"
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
            className={`text-6xl md:text-7xl font-bold tracking-tight ${theme === "dark" ? "text-gradient-dark" : "text-gradient-light"}`}
          >
            Dimpal Goyal
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-3 text-xl text-on-surface-muted font-normal tracking-wide"
          >
            Web Developer
          </motion.p>
          <motion.p
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
              <SocialCard key={s.username} href={s.href} icon={s.icon} username={s.username} color={s.color} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default About;
