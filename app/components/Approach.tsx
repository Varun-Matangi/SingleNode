import { Container } from "./Container";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { NodeGraphic } from "./NodeGraphic";

const POINTS = [
  {
    title: "One team, zero handoffs",
    description:
      "The same people who scope your project build it, deploy it, and answer when you call a year later.",
  },
  {
    title: "Senior craft, not junior hours",
    description:
      "No trainees learning on your budget. Every system is built and reviewed by people who've shipped production software for years.",
  },
  {
    title: "Built to last, not just to launch",
    description:
      "We architect for the next five years of your business, not the next demo — documented, tested, and handed over clean.",
  },
  {
    title: "Direct access, always",
    description:
      "No account managers relaying messages between you and the work. You talk to the person actually building your system.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative border-t border-white/10 py-28 sm:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="order-2 lg:order-1">
          <NodeGraphic />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">
              Why SingleNode
            </span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Built like it&rsquo;s our own product.
            </h2>
          </Reveal>

          <StaggerGroup className="mt-10 flex flex-col gap-8" stagger={0.12}>
            {POINTS.map((point) => (
              <StaggerItem key={point.title}>
                <div className="border-l-2 border-signal/40 pl-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mist">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
