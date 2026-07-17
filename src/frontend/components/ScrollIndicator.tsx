"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@/components/icons";

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-on-surface-muted"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDownIcon />
    </motion.div>
  );
}

export default ScrollIndicator;
