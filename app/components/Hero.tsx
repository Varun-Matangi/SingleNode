"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { LinkButton } from "./Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 55% at 50% 20%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px] animate-pulse-soft"
          aria-hidden
        />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-stone/10 blur-[100px] animate-float" />
        <div
          className="absolute right-[-4rem] top-[55%] h-64 w-64 rounded-full bg-signal/10 blur-[110px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-mist backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Application Development &middot; Web &middot; Automation &middot; Infrastructure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.08 }}
          className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[5rem]"
        >
          Every system your
          <br className="hidden sm:block" /> business runs on.{" "}
          <span className="text-stone">Built by one studio.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.18 }}
          className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-mist sm:text-xl"
        >
          SingleNode Studio designs, builds, and operates the software your
          company depends on — applications, websites, automations, and the
          servers underneath. One accountable team, no handoffs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.28 }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <LinkButton href="#contact">Start a Project</LinkButton>
          <LinkButton href="#services" variant="secondary">
            Explore Services
          </LinkButton>
        </motion.div>
      </Container>
    </section>
  );
}
