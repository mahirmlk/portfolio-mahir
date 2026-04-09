"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Menu } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { MobileMenu } from "@/components/nav/MobileMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (currentScrollY <= 24) {
        setIsVisible(true);
      } else if (scrollingDown) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-[140%] opacity-0"
      )}
    >
      <div className="glass-nav flex h-[4.75rem] w-full max-w-6xl items-center justify-between rounded-full px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Go to home"
          className="glass-chip inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--fg)] transition hover:bg-[var(--bg-elevated)] hover:text-[var(--fg)] sm:h-12 sm:w-12"
        >
          <House className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2.1} />
        </Link>

        <div className="flex items-center gap-3">
          <nav className="glass-chip hidden items-center gap-1 rounded-full px-2 py-2 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || (pathname.startsWith(`${link.href}/`) && link.href !== "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "mono rounded-full px-4 py-2.5 text-[11px] uppercase tracking-[0.16em] transition-colors",
                    active
                      ? "bg-[var(--fg)] text-[var(--bg)] shadow-[0_10px_24px_rgba(17,17,17,0.12)]"
                      : "text-[var(--fg-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="glass-chip flex items-center gap-2 rounded-full p-1.5 md:hidden">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-mid)] text-[var(--fg)] transition hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)] md:hidden"
              aria-label="Toggle navigation"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
