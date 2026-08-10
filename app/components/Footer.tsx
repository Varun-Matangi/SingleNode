import { Container } from "./Container";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-14">
      <Container className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            One studio for the software, sites, automations, and
            infrastructure your business runs on.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-12 flex flex-col-reverse gap-4 border-t border-white/5 pt-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} SingleNode Studio. All rights reserved.</p>
        <p>Designed &amp; built by SingleNode Studio.</p>
      </Container>
    </footer>
  );
}
