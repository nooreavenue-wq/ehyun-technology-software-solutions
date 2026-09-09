import Link from "next/link";
import { processSteps } from "@/data/content";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export default function ProcessPreview() {
  const steps = processSteps.slice(0, 5);

  return (
    <section className="section-pad bg-ink">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="From requirement to deployment"
            description="A structured process designed to reduce uncertainty, control scope, maintain quality, and provide transparency."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="border-t border-signal/30 pt-5">
                <span className="font-display text-3xl text-signal/40">{step.n}</span>
                <h3 className="font-display text-base font-semibold text-paper mt-3">{step.title}</h3>
                <p className="text-paper/45 text-sm mt-2 leading-relaxed">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Link href="/process" className="btn-ghost">
            See the full process &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
