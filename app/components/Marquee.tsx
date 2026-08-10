const ITEMS = [
  "Application Development",
  "Website Design",
  "Process Automation",
  "Linux Server Setup",
  "API Integration",
  "Cloud Infrastructure",
  "Systems Architecture",
  "DevOps & Deployment",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-panel/60 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 text-sm font-medium uppercase tracking-[0.15em] text-stone">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-signal/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
