"use client";

import { motion } from "framer-motion";
import { TextFlip } from "@/components/text-flip";

export function AboutRoleFlip() {
  return (
    <div className="mt-5 text-[clamp(1.05rem,2vw,1.45rem)] font-medium tracking-[-0.03em] text-[var(--fg-muted)]">
      <span>I am a </span>
      <TextFlip as={motion.span} className="min-w-[9.25rem] text-[var(--fg)]">
        <span>ML Engineer</span>
        <span>AI Engineer</span>
      </TextFlip>
    </div>
  );
}
