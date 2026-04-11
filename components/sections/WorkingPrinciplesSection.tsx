"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const shadowWords = ["CODE", "BUILD", "REPEAT"];

export function WorkingPrinciplesSection() {
  return (
    <section id="principles" className="site-container section-block pt-0">
      <Reveal>
        <div className="relative min-h-[31rem] overflow-hidden py-10 md:min-h-[48rem] md:px-10 md:py-16">
          <div className="relative z-10">
            <p className="mono text-[11px] uppercase tracking-[0.24em] text-[var(--fg)]">
              Working Principles
            </p>
          </div>

          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {shadowWords.map((word, index) => (
              <motion.div
                key={`${word}-${index}`}
                className="absolute left-0 text-[clamp(3.8rem,22vw,7rem)] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.05] md:left-[4%] md:text-[clamp(5.25rem,16vw,12.75rem)]"
                style={{ top: `${index === 0 ? 6 : index === 1 ? 33 : 60}%` }}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
              >
                {word}
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 mt-6 space-y-8 md:mt-8 md:space-y-10">
            <motion.h3
              className="max-w-5xl text-[clamp(2.2rem,11vw,3.8rem)] font-black leading-[0.96] tracking-[-0.075em] text-[var(--fg)] md:text-[clamp(2.8rem,7.5vw,6.4rem)] md:leading-[0.94]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Working Principles
            </motion.h3>

            <motion.div
              className="max-w-4xl space-y-5 md:space-y-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.12, duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[1rem] leading-7 text-[var(--fg-muted)] md:text-[1.3rem] md:leading-8">
                Build clearly, so complexity stays understandable.
              </p>
              <p className="text-[1rem] leading-7 text-[var(--fg-muted)] md:text-[1.3rem] md:leading-8">
                Ship deliberately, so quality becomes part of the process.
              </p>
              <p className="text-[1rem] leading-7 text-[var(--fg-muted)] md:text-[1.3rem] md:leading-8">
                Repeat relentlessly, so every version gets stronger than the last.
              </p>
              <p className="text-[1rem] leading-7 text-[var(--fg-muted)] md:text-[1.3rem] md:leading-8">
                Design for clarity, so the interface explains the system.
              </p>
              <p className="text-[1rem] leading-7 text-[var(--fg-muted)] md:text-[1.3rem] md:leading-8">
                Keep feedback tight, so iteration turns into real progress.
              </p>
              <p className="text-[1rem] leading-7 text-[var(--fg-muted)] md:text-[1.3rem] md:leading-8">
                Build with intent, so every detail earns its place.
              </p>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
