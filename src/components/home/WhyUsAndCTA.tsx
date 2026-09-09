import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { whyEhyun } from "@/data/content";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export function WhyUsSection() {
  return (
    <section className="section-pad bg-ink-surface border-y border-ink-line">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Why Ehyun" title="Why businesses choose to work with us" align="center" />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyEhyun.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="card p-7 h-full">
                <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
                <p className="text-paper/50 text-sm mt-3 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="relative container text-center">
        <Reveal>
          <p className="eyebrow mb-5">Let&apos;s Build the Future Together</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.05] max-w-2xl mx-auto">
            We don&apos;t just build software.{" "}
            <span className="bg-signal-gradient bg-clip-text text-transparent">
              We build technology partnerships.
            </span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start a Conversation <ArrowUpRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-outline">
              See Our Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
