import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { industries } from "@/data/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "Adaptable software solutions customized to the operational requirements of different industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Technology Across Industries"
          title="Solutions built around your industry's requirements"
          description="Every industry and organization has its own processes and challenges — our approach stays flexible to match."
          crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={Math.min(i, 8) * 0.05}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <Image src={ind.image} alt={ind.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <h3 className="font-display text-lg font-semibold text-paper">{ind.name}</h3>
                    <p className="text-paper/60 text-xs mt-2 leading-relaxed">{ind.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-t border-ink-line">
          <div className="container text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
                Don&apos;t see your industry listed?
              </h2>
              <p className="text-paper/55 mt-4">
                Our approach adapts to any business process. Tell us about your industry and
                requirements.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Get In Touch <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
