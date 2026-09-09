import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { processSteps } from "@/data/content";

export const metadata: Metadata = {
  title: "Process",
  description: "Our structured development process — from discovery and requirement analysis through development, QA, deployment, and ongoing support.",
};

const pmPoints = [
  "Requirement documentation",
  "Scope definition",
  "Task management",
  "Resource allocation",
  "Milestone planning",
  "Timeline monitoring",
  "Progress reporting",
  "Risk management",
  "Change request management",
  "Client review",
  "Final delivery management",
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="How We Work"
          title="From requirement to deployment"
          description="A structured process designed to reduce uncertainty, control project scope, maintain quality, and provide transparency to our clients."
          crumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container">
            <div className="relative">
              <div className="hidden lg:block absolute left-[27px] top-2 bottom-2 w-px bg-ink-line" />
              <div className="space-y-10">
                {processSteps.map((step, i) => (
                  <Reveal key={step.n} delay={Math.min(i, 8) * 0.04}>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-start relative">
                      <div className="flex items-center gap-4 lg:w-14 shrink-0">
                        <span className="w-14 h-14 rounded-full bg-ink-surface border border-signal/30 flex items-center justify-center font-display text-signal-light text-lg shrink-0 relative z-10">
                          {step.n}
                        </span>
                      </div>
                      <div className="card p-6 flex-1">
                        <h3 className="font-display text-xl font-semibold text-paper">{step.title}</h3>
                        <p className="text-paper/55 text-sm mt-2.5 leading-relaxed max-w-2xl">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-t border-ink-line">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Project Management"
                title="Structured management. Clear communication. Predictable delivery."
                description="Software development involves more than technical implementation. We treat project management as a core part of every engagement, monitoring progress continuously and communicating important updates, risks, decisions, and changes."
              />
              <p className="text-paper/60 mt-6 leading-relaxed">
                Our goal is to ensure that everyone involved understands what needs to be done,
                who is responsible, when it needs to be completed, and what the current status is.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card p-8">
                <p className="eyebrow mb-5">Our PM Approach Includes</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {pmPoints.map((p) => (
                    <li key={p} className="text-sm text-paper/65 flex items-start gap-2">
                      <span className="text-signal-light mt-1">&mdash;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
