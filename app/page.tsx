export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="max-w-xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:rgba(23,23,23,0.7)] dark:text-[color:rgba(237,237,237,0.7)]">
          coming soon
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          Dummy LINE UI Starter
        </h1>
        <p className="text-base leading-relaxed text-[color:rgba(23,23,23,0.75)] dark:text-[color:rgba(237,237,237,0.75)]">
          Kickstart progressive LINE experiences with a modern Next.js, Tailwind CSS, and PWA-ready
          foundation.
        </p>
      </div>
    </main>
  );
}
