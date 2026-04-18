import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Benefits from "@/components/Benefits";
import Transformation from "@/components/Transformation";
import Samples from "@/components/Samples";
import Testimonials from "@/components/Testimonials";
import WhatYouGet from "@/components/WhatYouGet";
import Bonuses from "@/components/Bonuses";
import ExclusiveBonuses from "@/components/ExclusiveBonuses";
import FinalCta from "@/components/FinalCta";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen font-sans">
        <Hero />
        <Story />
        <Benefits />
        <Transformation />
        <Samples />
        <Testimonials />
        <WhatYouGet />
        <Bonuses />
        <ExclusiveBonuses />
        <FinalCta />
        <Guarantee />
        <FAQ />
        <Closing />
        <Footer />
      </main>
      <StickyCta />
    </>
  );
}
