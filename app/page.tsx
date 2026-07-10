import Navbar from "@/components/Navbar";
import HashNav from "@/components/HashNav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { buildJsonLdGraph } from "@/lib/schema";

export default function Home() {
  const jsonLd = buildJsonLdGraph();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HashNav />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-[1] overflow-x-clip">
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
