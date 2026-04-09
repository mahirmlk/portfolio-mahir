"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="site-container mt-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-2xl md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mono text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
