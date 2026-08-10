"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "Process" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10">
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

          <LinkButton href="#contact" className="px-6 py-3 text-[13px]">
            Contact Us
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <motion.span
              className="absolute h-[1.5px] w-5 rounded-full bg-paper"
              animate={{ rotate: open ? 45 : 0, y: open ? 0 : -5 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute h-[1.5px] w-5 rounded-full bg-paper"
              animate={{ rotate: open ? -45 : 0, y: open ? 0 : 5 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/10 bg-ink md:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-4 text-lg text-paper/90"
                >
                  {link.label}
                </a>
              ))}
              <LinkButton
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 w-full"
              >
                Contact Us
              </LinkButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
