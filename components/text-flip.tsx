"use client";

import { Children, type ReactNode, type ElementType, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextFlipProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  interval?: number;
}

export function TextFlip({ as, children, className, interval = 2200 }: TextFlipProps) {
  const items = Children.toArray(children).filter(Boolean);
  const [index, setIndex] = useState(0);
  const FlipItem = (as ?? motion.span) as typeof motion.span;

  useEffect(() => {
    if (items.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <span
      className={cn("relative inline-flex overflow-hidden align-bottom", className)}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <FlipItem
          key={index}
          className="inline-block"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {items[index]}
        </FlipItem>
      </AnimatePresence>
    </span>
  );
}
