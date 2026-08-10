import { Container } from "./Container";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const PRINCIPLES = [
  {
    word: "Craft",
    description: "Every interface, endpoint, and server is built with the same care we'd want in our own product.",
  },
  {
    word: "Ownership",
    description: "We don't disappear after launch. What we build, we stand behind.",
  },
  {
    word: "Longevity",
    description: "Systems designed for the next five years of your business, not the next demo.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/10 py-28 sm:py-36">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">
            About SingleNode
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Software, built the way it should be.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-mist">
            <p>
              Most software gets built by committee — a design agency here, a
              dev shop there, a freelancer patching servers in between.
              Somewhere in the handoffs, accountability quietly disappears.
            </p>
            <p>
              SingleNode Studio takes the opposite approach. One team covers
              the full stack — application development, web design,
              automation, and the infrastructure underneath — so every
              project moves through the same hands from first sketch to
              production deploy.
            </p>
            <p>
              The name is the philosophy: a single, dependable node your
              business can route everything through, instead of a network
              of vendors you have to manage yourself.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="flex flex-col gap-1" stagger={0.14}>
          {PRINCIPLES.map((principle, i) => (
            <StaggerItem key={principle.word}>
              <div
                className={`flex items-baseline gap-6 py-7 ${
                  i !== PRINCIPLES.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="font-mono text-sm text-stone">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {principle.word}
                    <span className="text-signal">.</span>
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist">
                    {principle.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
