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
      <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-14">
        <div className="flex flex-row md:block items-center gap-4 w-full md:w-auto">
          <div className="relative w-20 h-20 sm:w-36 sm:h-36 md:w-52 md:h-52 shrink-0">
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
                sizes="(max-width: 640px) 80px, (max-width: 768px) 144px, 208px"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="md:hidden text-left w-full">
            <motion.h1
              variants={itemVariants}
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${theme === "dark" ? "text-gradient-dark" : "text-gradient-light"}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Dimpal Goyal
            </motion.h1>
            <RotatingTitle titles={titles} />
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left w-full"
        >
          <div className="hidden md:block">
            <motion.h1
              variants={itemVariants}
              className={`text-7xl font-bold tracking-tight ${theme === "dark" ? "text-gradient-dark" : "text-gradient-light"}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Dimpal Goyal
            </motion.h1>
            <RotatingTitle titles={titles} />
          </div>
          <motion.p
            variants={itemVariants}
            className="mt-3 sm:mt-4 md:mt-6 w-full md:max-w-md text-sm sm:text-base text-on-surface-body leading-relaxed"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Currently building web applications while learning about artificial intelligence, system design, and scalable software. I enjoy experimenting with new ideas and using AI-powered tools to learn and build faster.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap items-center justify-start gap-2 sm:gap-3 md:gap-4"
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
