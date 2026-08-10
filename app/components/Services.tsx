import { Container } from "./Container";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const ICONS = {
  app: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 9.5l2 2-2 2M12.5 13.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.2 6h7.6M8.5 7.8 15.8 16M18 8.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3.5" y="3.5" width="17" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="14" width="17" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="6.75" r="1" fill="currentColor" />
      <circle cx="7" cy="17.25" r="1" fill="currentColor" />
    </svg>
  ),
};

const SERVICES = [
  {
    icon: ICONS.app,
    title: "Application Development",
    description:
      "Custom web and internal applications engineered to scale — from customer-facing portals to the internal tools that run your operations. Clean architecture, real testing, and code your team actually owns.",
  },
  {
    icon: ICONS.web,
    title: "Website Design & Development",
    description:
      "Marketing sites and web platforms designed to convert and engineered to load fast. Pixel-level craft paired with performance discipline — never a template with your logo dropped on top.",
  },
  {
    icon: ICONS.automation,
    title: "Automations",
    description:
      "We remove the manual work sitting between your tools — data syncs, notifications, reporting, approvals. Automations that run quietly in the background so your team stops doing it by hand.",
  },
  {
    icon: ICONS.server,
    title: "Linux Server Setup",
    description:
      "Production infrastructure configured correctly from day one: hardened servers, deployment pipelines, monitoring, and backups. The unglamorous foundation everything else depends on.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-white/10 py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">
            Our Services
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Four disciplines. One accountable partner.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Most companies stitch software together from a patchwork of
            freelancers and agencies. We build and run the entire stack —
            so nothing falls through the cracks between vendors.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2" stagger={0.12}>
          {SERVICES.map((service, i) => (
            <StaggerItem key={service.title}>
              <SpotlightCard className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-8 transition-colors duration-500 hover:border-signal/30 hover:bg-panel">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-6 select-none font-mono text-8xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-signal/[0.08]"
                >
                  0{i + 1}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mist transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:border-signal/40 group-hover:text-signal">
                  {service.icon}
                </div>
                <h3 className="relative mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-mist">
                  {service.description}
                </p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
