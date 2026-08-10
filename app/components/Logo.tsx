export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none select-none ${className}`}>
      <span className="text-[1.2rem] font-extrabold tracking-tight text-paper">
        SingleNode
        <span className="text-signal">.</span>
      </span>
      <span className="mt-1 text-[0.72rem] font-semibold tracking-[0.2em] text-stone">
        STUDIO
      </span>
    </span>
  );
}
