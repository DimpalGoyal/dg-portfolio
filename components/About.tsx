"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileImage } from "@/components/icons";
import SocialCard from "@/components/SocialCard";
import ScrollIndicator from "@/components/ScrollIndicator";
import RotatingTitle from "@/components/RotatingTitle";
import { containerVariants, itemVariants } from "@/lib/animations";
import { socials } from "@/lib/config/socials";
import { useTheme } from "@/lib/context/ThemeContext";

const titles = ["Web Developer", "Learning AI", "Curious Learner"];

function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        <div className="relative w-36 h-36 md:w-44 md:h-44 shrink-0">
          <div className="rotate-dashes">
            <span className="dash" style={{ animationDelay: "0s" }} />
            <span className="dash" style={{ animationDelay: "1s" }} />
            <span className="dash" style={{ animationDelay: "2s" }} />
            <span className="dash" style={{ animationDelay: "3s" }} />
          </div>
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden z-10"
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={profileImage}
              alt="Profile"
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`text-6xl md:text-7xl font-bold tracking-tight ${theme === "dark" ? "text-gradient-dark" : "text-gradient-light"}`}
          >
            Dimpal Goyal
          </motion.h1>
          <RotatingTitle titles={titles} />
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
