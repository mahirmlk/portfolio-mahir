"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const nextProgress = height <= 0 ? 0 : (scrollTop / height) * 100;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent">
      <div
        className="h-full bg-[var(--accent-green)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
