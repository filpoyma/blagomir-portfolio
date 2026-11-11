"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./Reveal";

type TLineRevealProps = {
  children: ReactNode;
  delay: number;
  className?: string;
};

export function LineReveal({ children, delay, className = "" }: TLineRevealProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
