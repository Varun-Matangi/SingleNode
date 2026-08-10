export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none select-none ${className}`}>
      <span className="text-[1.05rem] font-extrabold uppercase tracking-tight text-paper">
        SingleNode
        <span className="text-signal">.</span>
      </span>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-stone">
        Studio
      </span>
    </span>
  );
}
