import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import ApproachStrip from "@/components/home/ApproachStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import SelectedWork from "@/components/home/SelectedWork";
import ProcessPreview from "@/components/home/ProcessPreview";
import { WhyUsSection, FinalCTA } from "@/components/home/WhyUsAndCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ApproachStrip />
        <ServicesPreview />
        <SelectedWork />
        <ProcessPreview />
        <WhyUsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
