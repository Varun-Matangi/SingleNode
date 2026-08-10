export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex w-fit flex-col leading-none select-none ${className}`}
    >
      <span className="text-[0.95rem] font-bold tracking-tight text-[#F8F8F8]">
        SingleNode
        <span className="font-extrabold text-[#5DD62C]">.</span>
      </span>

      <span className="mt-[0.5px] text-[1.45rem] font-black leading-none tracking-[0.01em] text-[#71717A] scale-y-[0.75] origin-top block">
        STUDIO
      </span>
    </span>
  );
}
