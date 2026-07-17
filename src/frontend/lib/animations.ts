import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
