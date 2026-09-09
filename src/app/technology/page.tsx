import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { techStack } from "@/data/technology";

export const metadata: Metadata = {
  title: "Technology",
  description: "Modern technology across frontend, backend, mobile, databases, cloud infrastructure, and AI — selected according to project requirements.",
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Technology Expertise"
          title="Modern technology for modern businesses"
          description="We select technologies based on project requirements rather than forcing every project into the same technical stack."
          crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((cat, i) => (
              <Reveal key={cat.category} delay={Math.min(i, 6) * 0.05}>
                <div className="card p-8 h-full">
                  <h3 className="font-display text-xl font-semibold text-paper">{cat.category}</h3>
                  <p className="text-paper/50 text-sm mt-3 leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {cat.items.map((item) => (
                      <span key={item} className="pill">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-t border-ink-line">
          <div className="container max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-4">A Note on Technology Decisions</p>
              <p className="text-paper/60 leading-relaxed text-lg">
                Our technology decisions are always guided by the project&apos;s requirements,
                scalability needs, budget, performance expectations, and long-term maintenance
                considerations — not by defaulting to whatever stack is most familiar to us.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
