import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { engagementModels, roadmapPhases } from "@/data/content";

export const metadata: Metadata = {
  title: "Partnership",
  description: "Flexible engagement models and a long-term partnership approach — you focus on your business, we take care of the technology.",
};

export default function PartnershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Engagement Models"
          title="Flexible ways to work together"
          description="Different projects require different working models. Ehyun can support multiple engagement structures."
          crumbs={[{ label: "Home", href: "/" }, { label: "Partnership" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-5">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="card p-8 h-full">
                  <h3 className="font-display text-xl font-semibold text-paper">{m.title}</h3>
                  <p className="text-paper/55 text-sm mt-3 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-y border-ink-line">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Partnership Model"
                title="You focus on your business. We take care of the technology."
                align="center"
                description="A partnership can begin with a single project and develop into a long-term collaboration."
              />
            </Reveal>

            <div className="mt-16 max-w-md mx-auto flex flex-col items-center gap-6">
              <Reveal className="w-full">
                <div className="card p-6 text-center">
                  <p className="eyebrow mb-3">Client / Partner Provides</p>
                  <p className="text-paper/60 text-sm">Business objectives &middot; Market knowledge &middot; Project requirements &middot; Strategic direction</p>
                </div>
              </Reveal>
              <ArrowDown className="text-signal-light" size={20} />
              <Reveal delay={0.1} className="w-full">
                <div className="card p-6 text-center border-signal/30">
                  <p className="eyebrow mb-3">Ehyun Provides</p>
                  <p className="text-paper/60 text-sm">
                    Requirement analysis &middot; Technical planning &middot; UI/UX &middot; Software
                    development &middot; QA &middot; Deployment &middot; Maintenance &middot; Technical management
                  </p>
                </div>
              </Reveal>
              <ArrowDown className="text-signal-light" size={20} />
              <Reveal delay={0.2} className="w-full">
                <div className="bg-signal-gradient p-6 text-center">
                  <p className="text-[11px] tracking-widest2 uppercase text-ink/70 mb-2 font-semibold">Shared Goal</p>
                  <p className="font-display text-lg font-semibold text-ink">
                    Successful Digital Products &amp; Long-Term Business Growth
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink">
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="Our Growth Roadmap" title="Building Ehyun for the future" description="Our growth strategy is based on sustainable expansion rather than rapid growth without operational foundations." />
            </Reveal>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {roadmapPhases.map((p, i) => (
                <Reveal key={p.phase} delay={i * 0.06}>
                  <div className="border-t border-teal/30 pt-5 h-full">
                    <span className="font-display text-2xl text-teal/60">{p.phase}</span>
                    <h3 className="font-display text-base font-semibold text-paper mt-3">{p.title}</h3>
                    <p className="text-paper/45 text-sm mt-2 leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-t border-ink-line">
          <div className="container text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
                Ready to explore a partnership?
              </h2>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Let&apos;s Talk <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
