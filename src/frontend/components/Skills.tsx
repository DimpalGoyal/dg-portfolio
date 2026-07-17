"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

function Skills() {
  return (
    <section id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-border-custom bg-surface-secondary p-8 shadow-sm"
        >
          <p className="text-on-surface-muted text-lg">Loading...</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
