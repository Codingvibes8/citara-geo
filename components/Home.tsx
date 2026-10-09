"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformStrip from "@/components/PlatformStrip";
import Shift from "@/components/Shift";
import Services from "@/components/Services";
import Tracker from "@/components/Tracker";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [domain, setDomain] = useState("");

  return (
    <div className="min-h-screen bg-ink-950 font-sans text-zinc-200">
      <Navbar />
      <main>
        <Hero onSubmitDomain={setDomain} />
        <PlatformStrip />
        <Shift />
        <Services />
        <Tracker />
        <Process />
        <Results />
        <Testimonials />
        <Pricing />
        <FAQ />
        <AuditCTA domain={domain} onDomainChange={setDomain} />
      </main>
      <Footer />
    </div>
  );
}
