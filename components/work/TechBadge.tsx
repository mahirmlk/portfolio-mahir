import type { ReactNode } from "react";

const TECH_ICONS: Record<string, { light: string; dark: string }> = {
  Python: {
    light: "https://cdn.simpleicons.org/python/3776AB",
    dark: "https://cdn.simpleicons.org/python/3776AB"
  },
  FastAPI: {
    light: "https://cdn.simpleicons.org/fastapi/009688",
    dark: "https://cdn.simpleicons.org/fastapi/009688"
  },
  "Next.js 16": {
    light: "https://cdn.simpleicons.org/nextdotjs/111111",
    dark: "https://cdn.simpleicons.org/nextdotjs/f6f7f8"
  },
  "Next.js 15": {
    light: "https://cdn.simpleicons.org/nextdotjs/111111",
    dark: "https://cdn.simpleicons.org/nextdotjs/f6f7f8"
  },
  Supabase: {
    light: "https://cdn.simpleicons.org/supabase/3FCF8E",
    dark: "https://cdn.simpleicons.org/supabase/3FCF8E"
  },
  Razorpay: {
    light: "https://cdn.simpleicons.org/razorpay/111111",
    dark: "https://cdn.simpleicons.org/razorpay/f6f7f8"
  },
  "scikit-learn": {
    light: "https://cdn.simpleicons.org/scikit-learn/F7931E",
    dark: "https://cdn.simpleicons.org/scikit-learn/F7931E"
  },
  TypeScript: {
    light: "https://cdn.simpleicons.org/typescript/3178C6",
    dark: "https://cdn.simpleicons.org/typescript/3178C6"
  },
  Redis: {
    light: "https://cdn.simpleicons.org/redis/DC382D",
    dark: "https://cdn.simpleicons.org/redis/DC382D"
  },
  Docker: {
    light: "https://cdn.simpleicons.org/docker/2496ED",
    dark: "https://cdn.simpleicons.org/docker/2496ED"
  }
};

interface TechBadgeProps {
  children: ReactNode;
}

export function TechBadge({ children }: TechBadgeProps) {
  const icon = typeof children === "string" ? TECH_ICONS[children] : undefined;

  return (
    <span className="glass-chip mono inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--fg-subtle)]">
      {icon ? (
        <>
          <img
            src={icon.light}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-3.5 w-3.5 object-contain dark:hidden"
          />
          <img
            src={icon.dark}
            alt=""
            aria-hidden
            loading="lazy"
            className="hidden h-3.5 w-3.5 object-contain dark:block"
          />
        </>
      ) : null}
      {children}
    </span>
  );
}
