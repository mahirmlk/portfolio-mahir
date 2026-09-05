"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="site-container section-block flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="section-eyebrow">Something went wrong</p>
      <h1 className="section-title mt-4">An unexpected error occurred.</h1>
      <p className="section-copy mt-5 max-w-[40rem]">
        The page failed to render. Try again, or head back to the homepage.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--fg)] transition hover:bg-[var(--bg-card)]"
      >
        Try again
      </button>
    </section>
  );
}
