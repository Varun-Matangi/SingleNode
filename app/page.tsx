import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ScrollyFeature } from "./components/ScrollyFeature";
import { Approach } from "./components/Approach";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <ScrollyFeature />
        <Approach />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
