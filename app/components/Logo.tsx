const STUDIO_LETTERS = "STUDIO".split("");

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none select-none ${className}`}>
      <span className="text-[1.2rem] font-extrabold tracking-tight text-paper">
        SingleNode
        <span className="text-signal">.</span>
      </span>
      <span className="mt-1.5 flex justify-between text-[0.62rem] font-semibold text-stone">
        {STUDIO_LETTERS.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </span>
    </span>
  );
}
