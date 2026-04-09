import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 51V13H15.5L25 30L32 18L39 30L48.5 13H54V51H47.5V26L40 39H37L32 29.5L27 39H24L16.5 26V51H10Z"
        fill="currentColor"
      />
      <circle
        cx="58"
        cy="50"
        r="3"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}
