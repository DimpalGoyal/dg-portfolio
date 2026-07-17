"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface Props {
  titles: string[];
  interval?: number;
}

const variants: Variants = {
  enter: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

function RotatingTitle({ titles, interval = 3000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (titles.length <= 1) return;

    let timer: ReturnType<typeof setInterval>;

    const start = () => {
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % titles.length);
      }, interval);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [titles.length, interval]);

  return (
    <div className="relative h-[1.75rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={titles[index]}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="text-xl text-on-surface-muted font-normal tracking-wide"
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default RotatingTitle;
